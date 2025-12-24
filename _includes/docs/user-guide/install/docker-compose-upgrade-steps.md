{% assign current_version = include.version %}

1. Change the parameter `TB_VERSION` in the `.env` file.

  ```.env
  TB_VERSION={{ current_version }}
  ```

2. Execute the following commands:

{% if include.skipUpgrade %}
  ```bash
  ./docker-stop-services.sh  
  ./docker-start-services.sh
  ```
{% else %}
  ```bash
  ./docker-stop-services.sh  
  ./docker-upgrade-tb.sh
  ./docker-start-services.sh
  ```
{% endif %}

  {: .copy-code}