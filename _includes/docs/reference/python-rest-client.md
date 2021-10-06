
* TOC
{:toc}
 
## Python REST Client

The ThingsBoard Python REST API Client helps you interact with ThingsBoard REST API from your Python script.
With Python Rest Client you can programmatically create assets, devices, customers, users and other entities and their relations in ThingsBoard.

Source code of the Python REST API Client you can find [here](https://github.com/thingsboard/python_tb_rest_client).

In order to install the ThingsBoard Python REST client, you should use the following command:

```bash
pip3 install tb-rest-client
``` 

## Python REST Client examples

### Basic usage
You can find the example script **[here](https://github.com/thingsboard/python_tb_rest_client/blob/master/examples/example_application.py)**.

The example listened below shows basic usage of REST client, namely how to perform a login, create a new Asset and Device instances,
and how to establish relationships with them.

```python

import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
# Importing the API exception
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://localhost:8080"
# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


# Creating the REST client object with context manager to get auto token refresh
with RestClientCE(base_url=url) as rest_client:
    try:
        # Auth with credentials
        rest_client.login(username=username, password=password)

        # Creating an Asset
        asset = Asset(name="Building 1", type="building")
        asset = rest_client.save_asset(asset)

        logging.info("Asset was created:\n%r\n", asset)

        # creating a Device
        device = Device(name="Thermometer 1", type="thermometer")
        device = rest_client.save_device(device)

        logging.info(" Device was created:\n%r\n", device)

        # Creating relations from device to asset
        relation = EntityRelation(_from=asset.id, to=device.id, type="Contains")
        relation = rest_client.save_relation(relation)

        logging.info(" Relation was created:\n%r\n", relation)
    except ApiException as e:
        logging.exception(e)

```

### Managing device

The following code sample demonstrates basic concepts of device management API (add/get/delete device, get/save device attributes).

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
# Importing the API exception
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://localhost:8080"
# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


# Creating the REST client object with context manager to get auto token refresh
with RestClientCE(base_url=url) as rest_client:
    try:
        # creating a Device
        device = Device(name="Thermometer 1", type="thermometer")
        device = rest_client.save_device(device)

        logging.info(" Device was created:\n%r\n", device)

        # find device by device id
        found_device = rest_client.get_device_by_id(DeviceId('DEVICE', device.id))

        # save device shared attributes
        res = rest_client.save_device_attributes("{'targetTemperature': 22.4}", DeviceId('DEVICE', device.id),
                                                 'SERVER_SCOPE')

        logging.info("Save attributes result: \n%r", res)

        # Get device shared attributes
        res = rest_client.get_attributes_by_scope('DEVICE', DeviceId('DEVICE', device.id), 'SERVER_SCOPE')
        logging.info("Found device attributes: \n%r", res)

        # delete the device
        rest_client.delete_device(DeviceId('DEVICE', device.id))
    except ApiException as e:
        logging.exception(e)
```

### Fetch tenant devices

The following code sample shows how to fetch tenant devices via page link.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
# Importing the API exception
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://localhost:8080"
# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


# Creating the REST client object with context manager to get auto token refresh
with RestClientCE(base_url=url) as rest_client:
    try:
        res = rest_client.get_tenant_device_infos(page_size=str(10), page=str(0))

        logging.info("Device info:\n%r", res)
    except ApiException as e:
        logging.exception(e)
```

### Fetch tenant dashboards

The following code sample shows how to fetch tenant dashboards via page link.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
# Importing the API exception
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://localhost:8080"
# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


# Creating the REST client object with context manager to get auto token refresh
with RestClientCE(base_url=url) as rest_client:
    try:
        user = rest_client.get_user()
        devices = rest_client.get_customer_device_infos(customer_id=CustomerId('CUSTOMER', user.id), page_size=str(10),
                                                        page=str(0))
        logging.info("Devices: \n%r", devices)
    except ApiException as e:
        logging.exception(e)
```

### Count entities using Entity Data Query API

The following code sample shows how to use Entity Data Query API to count the total number of devices.

```python
import logging
# Importing models and REST client class from Community Edition version
from tb_rest_client.rest_client_ce import *
# Importing the API exception
from tb_rest_client.rest import ApiException


logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(module)s - %(lineno)d - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# ThingsBoard REST API URL
url = "http://localhost:8080"
# Default Tenant Administrator credentials
username = "tenant@thingsboard.org"
password = "tenant"


# Creating the REST client object with context manager to get auto token refresh
with RestClientCE(base_url=url) as rest_client:
    try:
        # Create entity filter to get all devices
        entity_filter = EntityFilter()

        # Create entity count query with provided filter
        devices_query = EntityCountQuery(entity_filter)

        # Execute entity count query and get total devices count
        devices_count = rest_client.count_entities_by_query(devices_query)
        logging.info("Total devices: \n%r", devices_count)
    except ApiException as e:
        logging.exception(e)
```


**The Professional Edition Python REST Client example you can find [here](/docs/pe/reference/python-rest-client/#professional-edition-python-rest-client-example).**
