## PR Checklist

- [ ] No broken links found using link-checker.

## Linkchecker

Use the following command to check the broken links. 

```bash
docker run --rm -it ghcr.io/linkchecker/linkchecker --check-extern http://172.16.1.16:4000
```

## Check all environment variables are described on the Configuration page

Use the following command from the project root.
    
    python3 check_env_variables.py
