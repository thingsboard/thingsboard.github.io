##### [Optional] We recommend tune your postgresql config. 

For example [configurator](http://pgconfigurator.cybertec.at/). Specify the resources in the configurator that you want to allocate to PostgreSQL. The output will give you a set of recommended parameter values, which you should enter in the postgresql.conf file and then reboot PostgreSQL:

```bash
sudo systemctl restart postgres
```
{: .copy-code}