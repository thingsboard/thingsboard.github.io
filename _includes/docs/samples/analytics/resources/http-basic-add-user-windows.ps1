docker run --rm -it httpd:alpine htpasswd -nb anotheruser anotherpassword | Out-File -FilePath ./nginx/.htpasswd -Encoding ascii -Append
