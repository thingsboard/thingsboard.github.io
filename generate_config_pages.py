import re
import sys
import os

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
                comment = comment + '\n' + line.lstrip('#') if comment else line.lstrip('#')
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
    html_table = '## ' + table_name + '\n\n'
    html_table += '<table>\n'
    html_table += '\t<thead>\n' \
                  '\t\t<tr>\n' \
                  '\t\t\t<td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>\n' \
                  '\t\t</tr>\n' \
                  '\t</thead>\n' \
                  '\t<tbody>\n'

    for row in rows:
        html_table += f'\t\t<tr>\n\t\t\t<td>{row[0]}</td>\n\t\t\t<td>{row[1]}</td>\n\t\t\t<td>{row[2]}</td>\n\t\t\t<td>{row[3]}</td>\n\t\t</tr>\n'

    html_table += '\t</tbody>\n</table>\n'
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

def update_page(input_file, output_file):
    # Parse yml file to map, where key is property key path with '.' separator
    # and value is an object (env_name_with_default_value, comment, table_name)
    properties = extract_properties_with_comments(input_file)

    # Extract property information (extract env_name, default value, comment located nearby property, table_name)
    property_info = extract_property_info(properties)

    # Group all properties by table name
    property_groups = group_properties_by_table(property_info)

    # Generate HTML tables
    tables = "* TOC\n{:toc}"
    for group in property_groups:
        tables += '\n\n' + generate_html_table(group, property_groups[group])

    # Save HTML to the output file
    save_html_to_file(tables, output_file)

    print(f"Configuration file {output_file} was successfully updated in accordance with {input_file}")


if __name__ == '__main__':
    sys. setrecursionlimit(10000)
    tb_repo_type = sys.argv[1]
    tb_repo_rel_path = sys.argv[2]

    script_dir = os.path.dirname(__file__)
    tb_repo_abs_path = os.path.join(script_dir, tb_repo_rel_path)

    if tb_repo_type.lower() == "pe":
        update_page(tb_repo_abs_path + "/application/src/main/resources/thingsboard.yml",
                    "_includes/docs/pe/user-guide/install/core-rule-engine-config.md")
        update_page(tb_repo_abs_path + "/transport/http/src/main/resources/tb-http-transport.yml",
                    "_includes/docs/pe/user-guide/install/http-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/mqtt/src/main/resources/tb-mqtt-transport.yml",
                    "_includes/docs/pe/user-guide/install/mqtt-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/coap/src/main/resources/tb-coap-transport.yml",
                    "_includes/docs/pe/user-guide/install/coap-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/lwm2m/src/main/resources/tb-lwm2m-transport.yml",
                    "_includes/docs/pe/user-guide/install/lwm2m-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/snmp/src/main/resources/tb-snmp-transport.yml",
                    "_includes/docs/pe/user-guide/install/snmp-transport-config.md")
        update_page(tb_repo_abs_path + "/msa/vc-executor/src/main/resources/tb-vc-executor.yml",
                    "_includes/docs/pe/user-guide/install/vc-executor-config.md")
        update_page(tb_repo_abs_path + "/integration/executor/src/main/resources/tb-integration-executor.yml",
                    "_includes/docs/pe/user-guide/install/ie-executor-config.md")
        update_page(tb_repo_abs_path + "/report/src/main/resources/tb-report.yml",
                    "_includes/docs/pe/user-guide/install/report-service-config.md")
    elif tb_repo_type.lower() == "ce":
        update_page(tb_repo_abs_path + "/application/src/main/resources/thingsboard.yml",
                    "_includes/docs/user-guide/install/core-rule-engine-config.md")
        update_page(tb_repo_abs_path + "/transport/http/src/main/resources/tb-http-transport.yml",
                    "_includes/docs/user-guide/install/http-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/mqtt/src/main/resources/tb-mqtt-transport.yml",
                    "_includes/docs/user-guide/install/mqtt-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/coap/src/main/resources/tb-coap-transport.yml",
                    "_includes/docs/user-guide/install/coap-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/lwm2m/src/main/resources/tb-lwm2m-transport.yml",
                    "_includes/docs/user-guide/install/lwm2m-transport-config.md")
        update_page(tb_repo_abs_path + "/transport/snmp/src/main/resources/tb-snmp-transport.yml",
                    "_includes/docs/user-guide/install/snmp-transport-config.md")
        update_page(tb_repo_abs_path + "/msa/vc-executor/src/main/resources/tb-vc-executor.yml",
                    "_includes/docs/user-guide/install/vc-executor-config.md")
    elif tb_repo_type.lower() == "tbmq":
        update_page(tb_repo_abs_path + "/application/src/main/resources/thingsboard-mqtt-broker.yml",
                    "_includes/docs/mqtt-broker/install/config.md")
        update_page(tb_repo_abs_path + "/integration/executor/src/main/resources/tbmq-integration-executor.yml",
                    "_includes/docs/mqtt-broker/install/ie-config.md")
    elif tb_repo_type.lower() == "tbmq-pe":
        update_page(tb_repo_abs_path + "/application/src/main/resources/thingsboard-mqtt-broker.yml",
                    "_includes/docs/pe/mqtt-broker/install/config.md")
        update_page(tb_repo_abs_path + "/integration/executor/src/main/resources/tbmq-integration-executor.yml",
                    "_includes/docs/pe/mqtt-broker/install/ie-config.md")
    elif tb_repo_type.lower() == "edge":
        update_page(tb_repo_abs_path + "/application/src/main/resources/tb-edge.yml",
                    "_includes/docs/edge/user-guide/install/config.md")
    elif tb_repo_type.lower() == "edge-pe":
        update_page(tb_repo_abs_path + "/application/src/main/resources/tb-edge.yml",
                    "_includes/docs/pe/edge/user-guide/install/config.md")
    else:
        print("Invalid 'tb_repo_type'. Please provide 'ce' or `pe` or `tbmq` or 'tbmq-pe' or 'edge' or 'edge-pe' as the first argument.")
