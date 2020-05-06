---
layout: docwithnav
title: ODBC Connector Configuration
description: ODBC support for ThingsBoard IoT Gateway

---

* TOC
{:toc}

This guide will help you to get familiar with ODBC connector configuration for ThingsBoard IoT Gateway.
Use [general configuration](/docs/iot-gateway/configuration/) to enable this connector.
We will describe connector configuration file below.

<br/>

<details>

<summary>
<b>Example of ODBC Connector config file. Press to expand.</b>
</summary>

{% highlight json %}

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
        "params": [ "One", 2, 3.0 ]
      }
    ]
  }
}

{% endhighlight %}

</details>

## Prerequisites

To install and get ODBC connector working several additional steps need to be done:

1. Install [Visual C++ Redistributable package](https://github.com/mkleehammer/pyodbc/wiki/Install#installing-on-windows) for Windows or [ODBC package](https://github.com/mkleehammer/pyodbc/wiki/Install#installing-on-linux) for Linux.
2. Install ODBC driver(s) for database(s) the ThingsBoard gateway need to connect.
3. Add data source in [ODBC Data source Administrator](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/open-the-odbc-data-source-administrator) on Windows or add driver information (name, library path etc.) to ODBC configuration file [odbcinst.ini](https://github.com/mkleehammer/pyodbc/wiki/Drivers-and-Driver-Managers#odbc-configuration-files-unix-only) on Unix systems. 

## Section "connection"
This **mandatory** section provides information how to connect or reconnect to ODBC database.

| **Parameter**                     | **Default value**   | **Description**                     |
|:-|:-|-
| **str**                           |                     | Database [connection string](https://www.connectionstrings.com).   |
| attributes                        |                     | Connection [attributes](https://github.com/mkleehammer/pyodbc/wiki/Connection#connection-attributes).   |
| encoding                          | **utf-16**          | Encoding used when writing string data to database.   |
| decoding                          |                     | Encoding configuration used when reading string data from database.   |
| reconnect                         | **true**            | Whether to reconnect after catching database error.   |
| reconnectPeriod                   | **60.0**            | Period in seconds between reconnect attempts. Floating point means more precise time than seconds.   |

**Note**: More information about encoding/decoding read [there](https://github.com/mkleehammer/pyodbc/wiki/Unicode).

### Subsection "attributes"
This **optional** subsection provides [several options](https://github.com/mkleehammer/pyodbc/wiki/Connection#connection-attributes) to tune connection procedure.

### Subsection "decoding"
This **optional** subsection provides information how to decode string data and metadata read from a database.

| **Parameter**                     | **Default value**   | **Description**                     |
|:-|:-|-
| char                              | **utf-16**          | Encoding used when reading string data from database.   |
| wchar                             | **utf-16**          | Encoding used when reading Unicode string data from database.   |
| metadata                          | **utf-16**          | Encoding used when reading metadata from database.   |

**Note**: More information about encoding/decoding read [there](https://github.com/mkleehammer/pyodbc/wiki/Unicode).

## Section "pyodbc"
This **optional** section provides [options](https://github.com/mkleehammer/pyodbc/wiki/Module#attributes) to tune *pyodbc* Python library which is working under the hood of ODBC Connector.

## Section "polling"
The main idea of ODBC connector is periodically querying ODBC database whether new data is appeared. 

This **mandatory** section provides information how often to query database, what data to select and which database column is used to iterate over result.

| **Parameter**                     | **Default value**   | **Description**                     |
|:-|:-|-
| query                             |                     | SQL select query to fetch data from database.  |
| period                            | **60.0**            | Period of polling in seconds. Floating point means more precise time than seconds.   |
| iterator                          |                     | Iterator configuration.   |

**The requirements for the *query* option**:

1. Valid SQL *SELECT* statement that meets requirements of SQL dialect of the database the ThingsBoard gateway need to connect.
2. Include *attributes* or/and *timeseries* columns in _SELECT_ list.
3. Include the [*device*](/docs/iot-gateway/config/odbc/#subsection-device) column in _SELECT_ list to find out to which device data belongs to.
4. Include the [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) column in _SELECT_ list.
5. Among other conditions SQL _WHERE_ clause must include the [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) condition.
6. Among other sorting expressions SQL _ORDER BY_ clause must include the [*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator) sorting expression.
7. It is *recommended* to use SQL _LIMIT_ clause to reduce memory consumption on each read from a database.

**Example**: 

Each polling iteration the connector will read 10 records sorted by _ts_ column ([*iterator*](/docs/iot-gateway/config/odbc/#subsection-iterator)). 

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
This **mandatory** subsection provides information on what database column is used to iterate through the result set, where to get the initial value of the iterator and whether to use iterator data between gateway work sessions.
<br/>
<br/>
**IMPORTANT** 

The main challenge of the *iterator* feature is to unambiguously figure out whether to restore iterator data from a previous gateway work session or to use values from the connector configuration file.

Each *iterator* has its own file that has been stored in *config/odbc/* folder. After each polling iteration the connector saves *iterator* data (see below the *persistent* option) to such file.
<br/>
<hr/>
*\- How does connector distinguish iterator files from each other?*

\- The short answer is a decision is based on the *iterator* file name.
<hr/>
In details, once the connector starts and connects to a database it checks whether the *persistent* flag (see below) is set to *true*. If so the connector calculates the *iterator* file name and checks if it exists in *config/odbc/* folder. 

If the file exists the connector loads *iterator* data from it. Otherwise *iterator* data is loaded from the connector's configuration file.

The *iterator* file name is a hash of:
* ODBC driver name
* database server name
* database name
* iterator column (see below the *column* option)

<br/>
**DRAWBACK**

There may happen that while using the same database the list of **tables is totally changed** but the ***iterator* column name is not** just because the same column name is used in the different tables. In this case **the connector loads wrong *iterator* data**.
<br/>
<br/>
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
This **mandatory** section provides information how to map the result set that is get from a database to device attributes and timeseries values.

| **Parameter**                     | **Default value**   | **Description**                     |
|:-|:-|-
| **device**                        |                     | Device configuration.   |
| sendDataOnlyOnChange              | **false**           | Sending only if data changed from last check, if not specified data will send after each polling iteration.   |
| attributes                        |                     | List of device attributes.   |
| timeseries                        |                     | List of time series keys.   |

### Subsection "device"
This **mandatory** subsection provides information how to map the result set to **unique** device name and its type.

| **Parameter**               | **Default value**   | **Description**                     |
|:-|:-|-
| **name**                    |                     | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to generate **unique** device name. |
| type                        | **odbc**            | ThingsBoard device type. |

**Note** All database columns listed in SQL *SELECT* clause of the [query](/docs/iot-gateway/config/odbc/#section-polling) option are available by its name in the Python [eval()](https://docs.python.org/3/library/functions.html#eval) context.

For example,
```json
device: {
  "name": "'ODBC' + entity_id"
}
```
,means that device name is a result of concatenating two strings: *ODBC* and the value of database column *entity_id*.

### Subsections "attributes" and "timeseries"
These **optional** subsections provides information on what database columns are treated as attributes and what as time series keys and what pre-processing job should be done before sending to ThingsBoard server.

The connector supports several configuration modes for these subsections:

* list of database columns
```json
timeseries: [ "str_v", "ts" ]
```
* list of configurations
```json
"timeseries": [
  {
    "column": "bool_v",
    "name": "boolValue"
  },
  {
    "name": "value",
    "value": "[i for i in [str_v, long_v, dbl_v,bool_v] if i is not None][0]"
  }
]
```

| **Parameter**               | **Description**                                                                                        |
|:-|-
| **name**                    | Alias.                                                                                                 |
| column                      | Database column name.                                                                                  |
| value                       | Python [eval()](https://docs.python.org/3/library/functions.html#eval) expression to evaluate a value. |

**Note** All database columns listed in SQL *SELECT* clause of the [query](/docs/iot-gateway/config/odbc/#section-polling) option are available by its name in the Python [eval()](https://docs.python.org/3/library/functions.html#eval) context.

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
timeseries: "*"
```
, means treating all database columns as timeseries.

## Section "serverSideRpc"
The connector is able to call SQL stored procedures with or without parameters. Parameters are get either from a connector's configuration file or from [data](/docs/reference/gateway-mqtt-api/#server-side-rpc) received from a server.

| **Parameter**                 | **Default value**   | **Description**                     |
|:-|:-|-
| enableUnknownRpc              | **false**           | Allow processing RPC commands not listed in *methods* subsection. |
| overrideRpcConfig             | **false**           | Allow overriding RPC command configuration by data received from server.|
| methods                       |                     | List of RPC methods and their parameters. |

The connector supports several configuration modes for the *methods* subsection:

* without parameters
```json
"methods": [ "procedureOne", "procedureTwo" ]
```
* with parameters
<br/><br/>
**The order of arguments matters**. It must be the same as the order of parameters in SQL stored procedure.
```json
"methods": [
  {
    "name": "procedureOne",
    "params": [ "One", 2, 3.0 ]
  },
  {
    "name": "procedureTwo",
    "params": [ false ]
  }
]
```
* combining mode
```json
methods: [
  "procedureOne",
  {
    "name": "procedureTwo",
    "params": [ "One", 2, 3.0 ]
  }
]
```

**IMPORTANT**

If *enableUnknownRpc* or *overrideRpcConfig* is set to *true*, [RPC params](/docs/reference/gateway-mqtt-api/#server-side-rpc) **must have** the JSON property named *args* which is an array of SQL procedure arguments. If *args* is absent or empty it means SQL procedure without parameters.

**The order of arguments matters**. It must be the same as the order of parameters in SQL stored procedure.
```json
{
  "device": "ODBC Device 1", 
  "data": {
    "method": "procedureOne", 
    "params": {
      "args": [ "One", 2, 3.0 ]
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

