In this case payload is hexadecimal string:

```text
534e2d30303164656661756c7432352e373639
``` 

Here is the description of the bytes in this payload:
- **0-5** bytes - **534e2d303031** - device name. If we convert it to text - **SN-001**;
- **6-12** byte - **64656661756c74** - device type. If we convert it to text - **default**;
- **13-16** byte - **32352e37** - temperature telemetry. If we convert it to text: - **25.7**;
- **17-18** byte - **3639** - humidity telemetry. If we convert it to text: - **69**.