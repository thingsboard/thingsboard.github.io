Protects sensitive KNX messages on any medium (e.g., TP, RF, or IP).

These parameters are available for configuration in the "**security**" subsection:

| **Parameter**     | **Description**                                            |
|:------------------|------------------------------------------------------------|
| knxkeys_file_path | Full path to the knxkeys file including the file name.     |
| knxkeys_password  | Password to decrypt the knxkeys file.                      |
| :--------------   | ---------------------------------------------------------- |

This subsection in the configuration file looks like:

```json
"security": {
    "knxkeys_file_path": "/path/to/knxkeys.knxkeys",
    "knxkeys_password": "password"
}
```
