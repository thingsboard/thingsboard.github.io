Before starting your Docker containers, execute the following commands to create directories for data storage and logs. 
These commands will also change the ownership of the newly created directories to the Docker container user.

The **chown** command is used to change the owner of the directories, and it requires *sudo* permissions. 
You may be prompted to enter a password to grant sudo access: