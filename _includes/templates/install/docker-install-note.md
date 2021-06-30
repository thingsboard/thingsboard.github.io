{% capture install_docker_user_to_group %}
**NOTE: When you install docker, don't forget add your linux user to docker group**
- [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
{% endcapture %}
{% include templates/warn-banner.md content=install_docker_user_to_group %}