ThingsBoard Edge uses PostgreSQL database as a local storage. 

##### PostgreSQL Installation

Download the installation file (PostgreSQL 11.7 or newer releases) [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads#windows) and follow the installation instructions.

During PostgreSQL installation, you will be prompted for superuser (postgres) password.
Don't forget this password. It will be used later. For simplicity, we will substitute it with "postgres".

##### Create ThingsBoard Edge Database

Once installed, launch the "pgAdmin" software and login as superuser (postgres). 
Open your server and create database **tb_edge** with owner "postgres".
