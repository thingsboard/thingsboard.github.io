---
layout: docwithnav-gw
title: ODBC Connector Configuration
description: ODBC support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you get familiar with ODBC connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.
We will describe the connector configuration file below.

<b>Example of ODBC Connector config file.</b>

{% capture odbcConf %}

{
  "connection": {
    "str": "Driver={PostgreSQL};Server=localhost;Port=5432;Database=thingsboard;Uid=postgres;Pwd=postgres;",
    "attributes": {
      "autocommit": true,
      "timeout": 0
    },
    "encoding": "utf-8",
    "decoding": {
      "char": "utf-8",
      "wchar": "utf-8",
      "metadata": "utf-16le"
    },
    "reconnect": true,
    "reconnectPeriod": 60
  },
  "pyodbc": {
    "pooling": false
  },
  "polling": {
    "query": "SELECT bool_v, str_v, dbl_v, long_v, entity_id, ts FROM ts_kv WHERE ts > ? ORDER BY ts ASC LIMIT 10",
    "period": 5,
    "iterator": {
      "column": "ts",
      "query": "SELECT MIN(ts) - 1 FROM ts_kv",
      "save": false
    }
  },
  "mapping": {
    "device": {
      "type": "postgres",
      "name": "'ODBC ' + entity_id"
    },
    "sendDataOnlyOnChange": false,
    "attributes": "*",
    "timeseries": [
      "ts",
      {
        "name": "value",
        "value": "[i for i in [str_v, long_v, dbl_v,bool_v] if i is not None][0]"
      }
    ]
  },
  "serverSideRpc": {
    "enableUnknownRpc": true,
    "methods": [
      "procedureOne",
      {
        "name": "procedureTwo",
        "args": [ "One", 2, 3.0 ]
      }
    ]
  }
}

{% endcapture %}
{% include code-toggle.liquid code=odbcConf params="conf|.copy-code.expandable-20" %}

## Prerequisites

To install and get ODBC connector working, several additional steps need to be done:

1. Install [Visual C++ Redistributable package](https://github.com/mkleehammer/pyodbc/wiki/Install#installing-on-windows) for Windows or [ODBC package](https://github.com/mkleehammer/pyodbc/wiki/Install#installing-on-linux) for Linux.
2. Install ODBC driver(s) for database(s) the ThingsBoard gateway needs to connect to.
3. Add data source in [ODBC Data source Administrator](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/open-the-odbc-data-source-administrator) on Windows or add driver information (name, library path etc.) to ODBC configuration file [odbcinst.ini](https://github.com/mkleehammer/pyodbc/wiki/Drivers-and-Driver-Managers#odbc-configuration-files-unix-only) on Unix systems. 

## Section "connection"
This **mandatory** section provides information on how to connect or reconnect to ODBC database.

| **Parameter**                     | **Default value** | **Description**                                                                                       |
|:-|:------------------|-------------------------------------------------------------------------------------------------------
| **str**                           |                   | Database [connection string](https://www.connectionstrings.com).                                      |
| attributes                        |                   | Connection [attributes](https://github.com/mkleehammer/pyodbc/wiki/Connection#connection-attributes). |
| encoding                          | **utf-16**        | Encoding is used when writing string data to database.                                                |
| decoding                          |                   | Encoding configuration is used when reading string data from database.                                |
| reconnect                         | **true**          | Whether to reconnect after catching database error.                                                   |
| reconnectPeriod                   | **60.0**          | Period in seconds between reconnect attempts. Floating point means more precise time than seconds.    |

**Note**: For more information about encoding/decoding, refer to [the documentation](https://github.com/mkleehammer/pyodbc/wiki/Unicode).

### Subsection "attributes"
This **optional** subsection provides [several options](https://github.com/mkleehammer/pyodbc/wiki/Connection#connection-attributes) to tune the connection procedure.

### Subsection "decoding"
This **optional** subsection provides information on how to decode string data and metadata read from a database.

| **Parameter**                     | **Default value**   | **Description**                                                  |
|:-|:-|------------------------------------------------------------------
| char                              | **utf-16**          | Encoding is used when reading string data from database.         |
| wchar                             | **utf-16**          | Encoding is used when reading Unicode string data from database. |
| metadata                          | **utf-16**          | Encoding is used when reading metadata from database.            |

**Note**: More information about encoding/decoding read [there](https://github.com/mkleehammer/pyodbc/wiki/Unicode).

## Section "pyodbc"
This **optional** section provides [options](https://github.com/mkleehammer/pyodbc/wiki/The-pyodbc-Module#pyodbc-attributes) to tune the *pyodbc* Python library, which works under the hood of ODBC Connector.

```json
"pyodbc": {
  "pooling": false,
  "native_uuid": true
},
```

## Property "converter"
ODBC connector is provided with a built-in uplink data converter. You can specify a custom converter class in this **optional** property.

```json
"converter": "CustomOdbcUplinkConverter",
```

## Section "polling"
The main idea of ODBC connector is in periodically querying ODBC database to check whether new data has appeared. 

This **mandatory** section provides information on how often to query the database, what data to select, and which database column is used to iterate over the result.

| **Parameter**                     | **Default value** | **Description**                                                                    |
|:-|:------------------|------------------------------------------------------------------------------------
| query                             |                   | SQL select query to fetch data from database.                                      |
| period                            | **60.0**          | Period of polling in seconds. Floating point means more precise time than seconds. |
| iterator                          |                   | Iterator configuration.                                                            |

**The requirements for the *query* option**:

1. Valid SQL *SELECT* statement that meets requirements of SQL dialect of the database the ThingsBoard gateway needs to connect to.
2. Include *attributes* or/and *timeseries* columns in _SELECT_ list.
3. Include the [*device*](/docs/iot-gateway/config/odbc/#subsection-device) column in the _SELECT_ list to determine to which device data belongs to.
4. Include the [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) column in the _SELECT_ list.
5. Among other conditions SQL _WHERE_ clause must include the [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) condition.
6. Among other sorting expressions SQL _ORDER BY_ clause must include the [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) sorting expression.
7. It is *recommended* to use SQL _LIMIT_ clause to reduce memory consumption on each read from a database.

**Example**: 

For each polling iteration, the connector will read 10 records sorted by _ts_ column ([*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator)). 

Each record consists of timeseries columns (*bool_v*, *str_v*, *dbl_v*, *long_v*), [device](/docs/iot-gateway/config/odbc/#subsection-device) column (*entity_id*) and [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) column (*ts*).

After each polling iteration the connector remembers the value of the *ts* column of 10th record (the last record) and use it in _WHERE_ clause on the next iteration.
```sql
SELECT bool_v, str_v, dbl_v, long_v, entity_id, ts   (2-3)
FROM ts_kv
WHERE ts > ?                                         (4)
ORDER BY ts ASC                                      (5)
LIMIT 10                                             (6)
```

### Subsection "iterator"
This **mandatory** subsection provides information on which database column is used to iterate through the result set, where to get the initial value of the iterator, and whether to use iterator data between gateway work sessions.
<br>
<br>
**IMPORTANT** 

The main challenge of the *iterator* feature is to unambiguously figure out whether to restore iterator data from a previous gateway work session or to use values from the connector configuration file.

Each *iterator* has its own file that is stored in the *config/odbc/* folder. After each polling iteration the connector saves *iterator* data (see below the *persistent* option) to such file.
<br>
<hr/>
*\- How does the connector distinguish iterator files from each other?*

\- The short answer: it is a decision is based on the *iterator* file name.
<hr/>
In details, once the connector starts and connects to a database it checks whether the *persistent* flag (see below) is set to *true*. If so the connector calculates the *iterator* file name and checks if it exists in *config/odbc/* folder. 

If the file exists the connector loads *iterator* data from it. Otherwise *iterator* data is loaded from the connector's configuration file.

The *iterator* file name is a hash of:
* ODBC driver name
* database server name
* database name
* iterator column (see below the *column* option)

<br>
**DRAWBACK**

There may happen that while using the same database the list of **tables is totally changed** but the ***iterator* column name is not** just because the same column name is used in the different tables. In this case **the connector loads wrong *iterator* data**.
<br>
<br>
**CONCLUSION**

1. For the same database use unique name for each iterator.
2. Enable _iterator_ persistence feature only when other connector's configuration parts have been debugged and the lists of attributes and timeseries are finalized.


| **Parameter**                     | **Default value**   | **Description**                     |
|:-|:-|-
| **column**                        |                     | Database column name that is used to iterate through the result set. |
| **value**                         |                     | The initial value of the iterator.  |
| **query**                         |                     | The SQL query to evaluate initial value of the iterator.  |
| persistent                        | **false**           | Whether to use iterator data between gateway work sessions.  |

**Note**: Options *value* and *query* are mutually exclusive. If both options are set _value_ will be used.

## Section "mapping"
This **mandatory** section provides information on how to map the result set received from a database to device attributes and timeseries values.

| **Parameter**                     | **Default value** | **Description**                                                                                                          |
|:-|:------------------|--------------------------------------------------------------------------------------------------------------------------
| **device**                        |                   | Device configuration.                                                                                                    |
| sendDataOnlyOnChange              | **false**         | Sends data only if it has changed from the last check, if not specified, data will be sent after each polling iteration. |
| attributes                        |                   | List of device attributes.                                                                                               |
| timeseries                        |                   | List of time series keys.                                                                                                |

### Subsection "device"
This **mandatory** subsection provides information on how to map the result set to a **unique** device name and its type.

| **Parameter**               | **Default value**   | **Description**                     |
|:-|:-|-
| **name**                    |                     | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to generate **unique** device name. |
| type                        | **odbc**            | ThingsBoard device type. |

**Note** All database columns listed in SQL *SELECT* clause of the [query](/docs/iot-gateway/config/odbc/#section-polling) option are available by their name in the Python [eval()](https://docs.python.org/3/library/functions.html#eval) context.

For example,
```json
"device": {
  "name": "'ODBC' + entity_id"
}
```
means that the device name is a result of concatenating two strings: *ODBC* and the value of database column *entity_id*.

### Subsections "attributes" and "timeseries"
These **optional** subsections provide information on which database columns are to be treated as attributes, which ones as time series keys, and what pre-processing tasks should be done before sending data to the ThingsBoard server.

The connector supports several configuration modes for these subsections:

* list of database columns
```json
"timeseries": [ "str_v", "ts" ]
```
* list of configurations
```json
"timeseries": [
  {
    "name": "boolValue",
    "column": "bool_v"
  },
  {
    "nameExpression": "key_name",
    "value": "[i for i in [str_v, long_v, dbl_v,bool_v] if i is not None][0]"
  },
  {
    "name": "value",
    "value": "[i for i in [str_v, long_v, dbl_v,bool_v] if i is not None][0]"
  }
]
```

| **Parameter**               | **Description**                                                                                             |
|:-|-
| **name**                    | Alias name.                                                                                                 |
| **nameExpression**          | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to evaluate a alias name. |
| column                      | Database column name.                                                                                       |
| value                       | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to evaluate a value.      |

**Note** All database columns listed in SQL *SELECT* clause of the [query](/docs/iot-gateway/config/odbc/#section-polling) option are available by their names in the Python [eval()](https://docs.python.org/3/library/functions.html#eval) context.

* combining mode
```json
"timeseries": [
  "ts",
  {
    "name": "value",
    "value": "[i for i in [str_v, long_v, dbl_v,bool_v] if i is not None][0]"
  }
]
```
* globbing
```json
"timeseries": "*"
```
, means treating all database columns as timeseries.

## Section "serverSideRpc"
The connector is able to call SQL procedures/functions with or without parameters. Parameters are obtained either from a connector's configuration file or from [data](/docs/reference/gateway-mqtt-api/#server-side-rpc) received from a server.

| **Parameter**                 | **Default value**   | **Description**                                                              |
|:-|:-|------------------------------------------------------------------------------
| enableUnknownRpc              | **false**           | Allow processing RPC commands not listed in *methods* subsection.            |
| overrideRpcConfig             | **false**           | Allow overriding RPC command configuration by data received from the server. |
| methods                       |                     | List of RPC methods and their parameters.                                    |

The connector supports several configuration modes for the *methods* subsection:

* list of procedures/functions without parameter
```json
"methods": [ "procedureOne", "procedureTwo" ]
```
* list of procedure/function configurations
<br><br>
**The order of arguments matters**. It must be the same as the order of parameters in SQL procedure/function.
```json
"methods": [
  {
    "name": "rpcProcOne",
    "args": [ "One", 2, 3.0 ],
    "query": "CALL procedureOne(?,?,?)"
  },
  {
    "name": "functionOne",
    "args": [ false ]
  }
]
```
**Procedure / function configuration parameters**

| **Parameter**     | **Default value** | **Description**                     |
|:-|:-|-
| **name**          |                   | Name of RPC method or SQL procedure/function. |
| query             |                   | Custom SQL query to call procedure/function. |
| args              |                   | List of SQL procedure/function arguments.        |
| result            |  **false**        | **Only for SQL functions** Whether to process function result, if not connector returns the status of processing procedure/function (i.e. *succes* / *failure* ).        |


* combining mode
```json
"methods": [
  "procedureOne",
  {
    "name": "procedureTwo",
    "args": [ "One", 2, 3.0 ]
  }
]
```

**IMPORTANT**

If *enableUnknownRpc* is set to *true*, [RPC params](/docs/reference/gateway-mqtt-api/#server-side-rpc) **must include** all required **procedure/function configuration parameters**.

If *overrideRpcConfig* is set to *true*, [RPC params](/docs/reference/gateway-mqtt-api/#server-side-rpc) **may contain** all or some of the **procedure/function configuration parameters** to override those specified in the connector configuration file.

**The order of arguments matters**. It must be the same as the order of parameters in SQL procedure/function.
```json
{
  "device": "ODBC Device 1", 
  "data": {
    "method": "procedureOne", 
    "params": {
      "args": [ "OverridedValue", 123, 3.14 ]
    }
  }
}
```

## Next steps

Explore guides related to main ThingsBoard features:

 - [Data Visualization](/docs/user-guide/visualization/) - how to visualize collected data.
 - [Device attributes](/docs/user-guide/attributes/) - how to use device attributes.
 - [Telemetry data collection](/docs/user-guide/telemetry/) - how to collect telemetry data.
 - [Using RPC capabilities](/docs/user-guide/rpc/) - how to send commands to/from devices.
 - [Rule Engine](/docs/user-guide/rule-engine/) - how to use rule engine to analyze data from devices.

