{% capture install_docker_user_to_group %}
**Don't forget to add your linux user to the docker group. See [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user).**
{% endcapture %}
{% include templates/warn-banner.md content=install_docker_user_to_group %}