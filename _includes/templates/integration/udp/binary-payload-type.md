In this case, the payload looks like this:

```text
\x53\x4e\x2d\x30\x30\x31\x64\x65\x66\x61\x75\x6c\x74\x32\x35\x2e\x37\x36\x39
``` 

Here is the description of the bytes in this payload:
- **0-5** bytes - **\x53\x4e\x2d\x30\x30\x31** - device name. If we convert it to text - **SN-001**;
- **6-12** bytes - **\x64\x65\x66\x61\x75\x6c\x74** - device type. If we convert it to text - **default**;
- **13-16** bytes - **\x32\x35\x2e\x37** - temperature telemetry. If we convert it to text - **25.7**;
- **17-18** bytes - **\x36\x39** - humidity telemetry. If we convert it to text - **69**.