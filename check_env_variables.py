import os
import yaml

def flatten_yaml(yaml_data, parent_key='', separator='.'):
    items = {}
    for key, value in yaml_data.items():
        new_key = f"{parent_key}{separator}{key}" if parent_key else key
        if isinstance(value, dict):
            items.update(flatten_yaml(value, new_key, separator=separator))
        else:
            items[new_key] = value
    return items

def parse_yaml_file(file_path):
    with open(file_path, 'r') as file:
        yaml_data = yaml.safe_load(file)
        return flatten_yaml(yaml_data)

def check_keys_presence_in_files(keys_to_check, directory_path):
    found_keys = set()

    # List all files in the specified directory
    for filename in os.listdir(directory_path):
        file_path = os.path.join(directory_path, filename)

        if os.path.isfile(file_path):
            # Read the content of the file
            with open(file_path, 'r') as file:
                text_content = file.read()

            # Check for keys in the file and add them to the found_keys set
            for key in keys_to_check:
                if key in text_content:
                    found_keys.add(key)

    return found_keys


if __name__ == '__main__':
    # Prompt the user for the path to the YAML file
    yaml_file_path = input("Enter the path to the YAML file: ")

    # Parse the YAML file and extract property keys
    properties = parse_yaml_file(yaml_file_path)

    # Get a list of property keys (paths with dot separator)
    property_keys = list(properties.keys())

    # Prompt the user for the path to the directory containing text files
    directory_path = '_includes/docs/user-guide/install/'

    # Check the presence of each key in at least one file in the directory
    found_keys = check_keys_presence_in_files(property_keys, directory_path)

    # Find keys that were not found in any files
    missing_keys = set(property_keys) - found_keys

    # Print the missing keys
    if missing_keys:
        print(f"{len(missing_keys)} keys not found in any file:")
        for key in missing_keys:
            print(key)
    else:
        print("All keys were found in at least one of the text files.")
