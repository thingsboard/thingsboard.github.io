## PR description

The documentation updated for ...

## Fonts annotation

1. When adding new pages to the documentation, it is necessary to follow the hierarchy of headings, starting with h2
2. The main section heading is set via h2.
3. All nested headings should follow the structure and use:
 h3 - for subsections inside h2
 h4 - for subsections inside h3 and so on

Here is an example (https://thingsboard.io/docs/pe/user-guide/rbac/) of correct headings structure:
'## Roles'
'### Creating a new role'
'### Generic roles'
'#### Example'
'#### Permissions'
'### Group roles'
'#### Example'
'## Solution example for smart buildings: separate user groups per facility'

Check font-size of yours button it should be 16px, here is an example https://thingsboard.io/docs/pe/getting-started-guides/what-is-thingsboard/

## Link checker

The links will be checked by the build agent automatically once you create or update your PR.

You can use the following command to check the broken links locally.

```bash
docker run --rm -it --network=host --name=linkchecker ghcr.io/linkchecker/linkchecker --check-extern --no-warnings http://0.0.0.0:4000/
```
