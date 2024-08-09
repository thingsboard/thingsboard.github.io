One type of security configuration is token.
For authorization, token provided in this section of the config will be used.


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
