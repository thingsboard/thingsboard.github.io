One type of security configuration is token.
For authorization will be used token, , provided in this section in config.


|**Parameter**|**Default value**|**Description**|
|:-|:-|-
| type               | **token**                      | Type of authorization.      |
| tokens             | **["Bearer ACCESS_TOKEN"]**    | List of allowed tokens.     |
|---

Security subsection in configuration file will look like this: 

```yaml
    "security": [
      "type": "token",
      "tokens": [
        "Bearer ACCESS_TOKEN"
      ]
    ]
```
