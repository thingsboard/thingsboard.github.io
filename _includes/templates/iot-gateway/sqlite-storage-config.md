|---
| **Parameter**               | **Default value**                            | **Description** |
|:-|:-|-
| type                        | **sqlite**                                   | Storage type (Saving data to .db files).|
| data_file_path              | **./data/**                                  | Path to folder with files that will contain data. Filename is optional and not required.|
| max_read_records_count      | **1000**                                     | Maximum number of messages to get from storage and send to ThingsBoard.|
| size_limit *                | **1024**                                     | Maximum size of each SQLite file in megabytes. When exceeded, triggers rotation to a new DB file.|
| max_db_amount *             | **10**                                       | Maximum number of rotated DB files to keep on disk. When reached, further writes are dropped until cleanup.|    
| oversize_check_period       | **1**                                        | How frequently (in minutes) to check the current DB’s file size against *size_limit*.|
| writing_batch_size          | **1000**                                     | Maximum number of messages collected before writing to the DB during single write request.|
| messages_ttl_check_in_hours | **1**                                        | How often will Gateway check data for obsolescence.|
| messages_ttl_in_days        | **7**                                        | How many days to retain messages in each DB before automatic deletion.|
|---


\* –- If the number of DB files reaches *max_db_amount* and last database exceeds *size_limit*, new data will be lost until previous data be read from databases and delivered to the platform.<br>


Storage section of configuration file will look like:

```json
...
"storage": {
  "type": "memory",
  "data_file_path": "./data/data.db", 
  "max_read_records_count": 1000,
  "size_limit": 1024,
  "max_db_amount": 10,
  "oversize_check_period": 1,
  "writing_batch_size": 1000      
  "messages_ttl_check_in_hours": 1,
  "messages_ttl_in_days": 7,
},
...
```
