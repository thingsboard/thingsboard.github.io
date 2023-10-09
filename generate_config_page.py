import re
import sys

def extract_properties_with_comments(yaml_file_path):
    properties = {}

    with open(yaml_file_path, 'r') as file:
        lines = file.readlines()
        index = 0
        key_level_map = {0 : ''}
        parse_line('', '', key_level_map, 0, index, lines, properties)

    return properties


def parse_line(table_name, comment, key_level_map, parent_line_level, index, lines, properties):
    if index >= len(lines):
        return
    line = lines[index]
    line_level = (len(line) - len(line.lstrip())) if line.strip() else 0
    line = line.strip()
    # if line is empty - parse next line
    if not line:
        index = index + 1
        parse_line(table_name, comment, key_level_map, line_level, index, lines, properties)
    # if line is a comment - save comment and parse next line
    else:
        if line_level == 0:
            key_level_map = {0 : ''}
        if line.startswith('#'):
            if line_level == 0:
                table_name = line.lstrip('#')
            elif line_level == parent_line_level:
                comment = comment + '\n' + line.lstrip('#')
            else:
                comment = line.lstrip('#')
            index = index + 1
            parse_line(table_name, comment, key_level_map, line_level, index, lines, properties)
        else:
            # Check if it's a property line
            if ':' in line:
                # clean comment if level was changed
                if line_level != parent_line_level:
                    comment = ''
                key, value = line.split(':', 1)
                if key.startswith('- '):
                    key = key.lstrip('- ')
                key_level_map[line_level] = key
                value = value.strip()
                if value.split('#')[0]:
                    current_key = ''
                    for k in key_level_map.keys():
                        if k <= line_level:
                            current_key = ((current_key + '.') if current_key else '') + key_level_map[k]
                    properties[current_key] = (value, comment, table_name)
                    comment = ''
                index = index + 1
                parse_line(table_name, comment, key_level_map, line_level, index, lines, properties)

def extract_property_info(properties):
    rows = []
    for property_name, value in properties.items():
        if '#' in value[0]:
            value_parts = value[0].split('#')
            comment = value_parts[1]
        else:
            comment = value[1]
        pattern = r'\"\$\{(.*?)\:(.*?)\}\"'
        match = re.match(pattern, value[0])
        if match is not None:
            rows.append((property_name, match.group(1), match.group(2), comment, value[2]))
        else:
            rows.append((property_name, "", value[0].split('#')[0], comment, value[2]))
    return rows


def generate_html_table(table_name, rows):
    html_table = '#### ' + table_name + '\n'
    html_table += '<table>\n'
    html_table += '<thead><tr><td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td></tr></thead><tbody>\n'

    for row in rows:
        html_table += f'<tr><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>\n'

    html_table += '</tbody></table>\n'
    return html_table


def save_html_to_file(html_content, output_file_path):
    with open(output_file_path, 'w') as file:
        file.write(html_content)


def group_properties_by_table(data):
    property_groups = {}

    for row in data:
        # Extract information from the tuple
        property_name, env_variable, default_value, comment, table_name = row

        # Check if the last value is already a key in the dictionary
        if table_name not in property_groups:
            property_groups[table_name] = []

        # Append the property to the list associated with the last value
        property_groups[table_name].append(row)

    return property_groups


if __name__ == '__main__':
    sys. setrecursionlimit(10000)
    input_yaml_file = input("Enter the path to the YAML file: ")
    with open(input_yaml_file) as f:
        if 'ThingsBoard, Inc. ("COMPANY") CONFIDENTIAL' in f.read():
            output_md_file = "_includes/docs/user-guide/install/pe-config-tables.md"
        else:
            output_md_file = "_includes/docs/user-guide/install/ce-config-tables.md"

    # Parse yml file to map, where key is property key path with '.' separator
    # and value is an object (env_name_with_default_value, comment, table_name)
    properties = extract_properties_with_comments(input_yaml_file)

    # Extract property information (extract env_name, default value, comment located nearby property, table_name)
    property_info = extract_property_info(properties)

    # Group all properties by table name
    property_groups = group_properties_by_table(property_info)

    # Generate HTML tables
    tables = ""
    for group in property_groups:
        tables += '\n\n' + generate_html_table(group, property_groups[group])

    # Save HTML to the output file
    save_html_to_file(tables, output_md_file)

    print(f"Configuration file {output_md_file} was successfully updated in accordance with {input_yaml_file}")
