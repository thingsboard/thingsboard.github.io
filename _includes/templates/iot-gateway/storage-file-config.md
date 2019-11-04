|---
| **Parameter**            | **Default value**                            | **Description**                                                |
|:-|:-|-
| type                     | **file**                                     | Storage type (Saving data to hard drive)                       |
| data_folder_path         | **./data/**                                  | Path to folder, that will contains data (Relative or Absolute).|
| max_file_count           | **5**                                        | Maximum count of file that will be saved.                      |
| max_read_records_count * | **6**                                        | Count of messages to get from storage and send to ThingsBoard. |
| max_records_per_file     | **14**                                       | Maximum count of records that will be stored in one file.      |
|---


\* -- If receive data when storage has already counted, described in this parameter, new data will lose.

Storage section of configuration file will look like:

```yaml
storage
  type: file
  data_folder_path: ./data/
  max_file_count: 5
  max_read_records_count: 6
  max_records_per_file: 14
```
