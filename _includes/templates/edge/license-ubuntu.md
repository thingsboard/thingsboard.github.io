We assume you have already chosen your subscription plan or decided to purchase a perpetual license. 
If not, please navigate to [pricing](/pricing/) page to select the best license option for your case and get your license. 
See [How-to get pay-as-you-go subscription](https://www.youtube.com/watch?v=dK-QDFGxWek){:target="_blank"} or [How-to get perpetual license](https://www.youtube.com/watch?v=GPe0lHolWek){:target="_blank"} for more details.

Once you get the license secret, you should put it to the thingsboard configuration file. 
Open the file for editing using the following command:

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.conf
``` 
{: .copy-code}

Locate the following configuration block:

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
# export TB_LICENSE_SECRET=
```

and put your license secret. Please don't forget to uncomment the export statement. See example below: 

```bash
# License secret obtained from ThingsBoard License Portal (https://license.thingsboard.io)
# UNCOMMENT NEXT LINE AND PUT YOUR LICENSE SECRET:
export TB_LICENSE_SECRET=YOUR_LICENSE_SECRET_HERE
``` 
