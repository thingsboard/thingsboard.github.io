## PR Checklist

- [ ] No broken links found using link-checker.

## Linkchecker

Use the following command to check the broken links. 

```bash
docker run --rm --network=host ghcr.io/linkchecker/linkchecker http://0.0.0.0:4000/ --check-extern --no-warnings
```

