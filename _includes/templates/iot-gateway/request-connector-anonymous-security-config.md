
 
Anonymous auth is the most simple option. It is useful for testing.  


|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **anonymous**                      | Type of authorization.      |
|---

Security subsection in configuration file will look like this: 

```yaml
    "security": {
      "type": "anonymous"
    }
```
