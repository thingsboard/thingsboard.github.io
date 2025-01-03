Once **PostgreSQL** is installed, you may want to create a new user or set the password for the main user.
The following instructions will help you to set the **password** for the main **PostgreSQL** user.

To switch your current user context to the postgres user, execute the following script:
```bash
sudo su - postgres
```
{: .copy-code}

To interact with the **PostgreSQL** database, enter:
```bash
psql
```
{: .copy-code}

You will connect to the database as the **main** PostgreSQL user. To set the password, enter the following command after **postgres=#** :
```bash
\password
```
{: .copy-code}

Enter and confirm the password. 
Then, press **"Ctrl+D"** to return to the main user console. 