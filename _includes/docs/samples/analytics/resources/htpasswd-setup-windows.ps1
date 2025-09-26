docker run --rm -it httpd:alpine htpasswd -nb myuser mypassword | Out-File -FilePath ./nginx/.htpasswd -Encoding ascii
