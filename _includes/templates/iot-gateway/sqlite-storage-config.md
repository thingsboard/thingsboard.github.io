|---
| **Parameter**               | **Default value**                            | **Description**                                                |
|:-|:-|-
| type                        | **sqlite**                                   | Storage type (Saving data to .db file)                         |
| data_file_path              | **./data/data.db**                           | Path to folder, that will contains data (Relative or Absolute).|
| messages_ttl_check_in_hours | **1**                                        | How often will Gateway check data for obsolescence             |
| messages_ttl_in_days *      | **7**                                        | Maximum days that storage will save data                       |
|---


\* -- If receive data when storage has already counted, described in this parameter, new data will lose.

Storage section of configuration file will look like:

```json
...
"storage": {
  "type": "memory",
  "data_file_path": "./data/data.db",
  "messages_ttl_check_in_hours": 1,
  "messages_ttl_in_days": 7
},
...
```
