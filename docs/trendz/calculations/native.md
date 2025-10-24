---
layout: docwithnav-trendz
title: Native Calculation Fields
description: Native Calculation Fields
---

* TOC
{:toc}

Native Calculations are calculation fields designed with minimal restrictions and maximum flexibility. They allow you to 
freely define which relations, telemetries, or attributes to use and from which time range. You can use five input 
parameters and five available functions to fetch telemetries, attributes, or relations from any timerange for any entity. 
All these functions or parameters will be covered later in this article.

## Rules

The only rule is the required output format. The code must return an array of timestamp/value objects:

```
[{"ts": <ts>, "value": <value>}]
```

This timeseries could be saved to ThingsBoard when a reprocess or refresh job is set up for the originator.

## Parameters

Within a Native Calculation, you can use the following parameters:

1. **startTs** - start timestamp (in ms)
2. **endTs** - end timestamp (in ms)
3. **groupBy** - grouping interval ('minute', 'hour', 'day', 'week', or 'month')
4. **tzName** - timezone of the user who runs the task (e.g., test, refresh, or reprocess)
5. **tzOffsetMs** - offset in milliseconds between UTC and the user’s timezone

These parameters may differ depending on the calculation context.

## Functions

### get_originator_id()

Returns the ID (UUID) of the current calculation originator.

```python
originator_id = get_originator_id()
```

### get_originator_type()

Returns the type ('DEVICE' or 'ASSET') of the current originator.

```python
originator_type = get_originator_type()
```

### get_telemetries()

Fetch telemetry data from any available entity.

```python
get_telemetries(
    keys,        # required: list of telemetry keys (e.g., ['key1', 'key2'])
    from_ts,# optional: start timestamp in ms (default startTs parameter)
    to_ts,  # optional: end timestamp in ms (default endTs parameter)
    entity_id, # optional: entity ID (defaults to originator ID)
    entity_type # optional: entity type (DEVICE or ASSET, defaults to originator type)
)
```

Returns a dictionary of telemetry values:

```
{
    "key1": [{"value": "<value>", "ts": "<ts>"}, ...],
    "key2": [{"value": "<value>", "ts": "<ts>"}],
    ...
}
```

#### Examples

Fetch telemetries (temperature and heat_consumption) from originator with default timerange:

```python
keys = ['temperature', 'heat_consumption']
telemetries = get_telemetries(keys)
```

Fetch telemetries with custom timerange:

```python
keys = ['temperature', 'heat_consumption']
from_ts = 1704067200000 # 1 Jan 2024
to_ts = 1735689600000   # 1 Jan 2025
telemetries = get_telemetries(keys, from_ts=from_ts, to_ts=to_ts)
```

Fetch telemetries from device with id `8c790660-782a-4c7b-ae07-0c3163a6f968` with default timerange:

```python
keys = ['temperature', 'heat_consumption']
entity_id = '8c790660-782a-4c7b-ae07-0c3163a6f968'
entity_type = 'DEVICE'
telemetries = get_telemetries(keys, entity_id=entity_id, entity_type=entity_type)
```

Fetch telemetries from device with id `8c790660-782a-4c7b-ae07-0c3163a6f968` with custom timerange:

```python
keys = ['temperature', 'heat_consumption']
from_ts = 1704067200000 # 1 Jan 2024
to_ts = 1735689600000   # 1 Jan 2025
entity_id = '8c790660-782a-4c7b-ae07-0c3163a6f968'
entity_type = 'DEVICE'
telemetries = get_telemetries(keys, from_ts=from_ts, to_ts=to_ts, entity_id=entity_id, entity_type=entity_type)
```

Use retrieved telemetries in custom logic:

```python
if not telemetries['temperature']:
    print('No temperature telemetry found in the given range.')
    return []

for temperature_reading in telemetries['temperature']:
    value = temperature_reading['value']
    ts = temperature_reading['ts']
    # Perform custom logic here
```

### get_attributes()

Fetch attributes data from any available entity.

```python
get_attributes(
    attributes,     # required: list of attributes [{'scope': 'SERVER_SCOPE', 'key': 'attribute_key'}, ...]
    entity_id, # optional: entity ID (defaults to originator ID)
    entity_type # optional: entity type (DEVICE or ASSET, defaults to originator type)
)
```

Returns a dictionary grouped by scope:

```
{
    "SERVER_SCOPE": {"attribute_key_1": "<attribute_value_1>", ...},
    "CLIENT_SCOPE": {...},
    "SHARED_SCOPE": {...}
}
```

#### Examples

Fetch area attribute (server scope) from originator:

```python
attributes = [{'scope': 'SERVER_SCOPE', 'key': 'area'}]
fetched_attributes = get_attributes(attributes)
area = fetched_attributes.get('SERVER_SCOPE', {}).get('area')
```

Fetch area attribute (server scope) from asset with id `4e0aba8c-772d-4d61-9f16-3d8c896b1600`:

```python
attributes = [{'scope': 'SERVER_SCOPE', 'key': 'area'}]
entity_id = '4e0aba8c-772d-4d61-9f16-3d8c896b1600'
entity_type = 'ASSET'
fetched_attributes = get_attributes(attributes, entity_id=entity_id, entity_type=entity_type)
area = fetched_attributes.get('SERVER_SCOPE', {}).get('area')
```

### get_relations()

Fetch relations data from any available entity.

```python
get_relations(
    entity_id, # optional: entity ID (defaults to originator ID)
    entity_type, # optional: entity type (DEVICE or ASSET, defaults to originator type)
    direction, # optional: direction (FROM or TO), keep empty if any
    relation_type, # optional: relation type, keep empty if any 
    target_entity_type, # optional: target entity type, keep empty if any 
    target_entity_profile_name # optional: target entity profile name, keep empty if any 
)
```

Returns a list of relations:

```
[
  {
    "relationType": "<relation type>",
    "direction": "<FROM or TO>",
    "entityId": "<target entity id>",
    "entityType": "<DEVICE or ASSET>",
    "entityProfileName": "<profile name>"
  }, ...
]
```

#### Examples

Fetch all relations for originator:

```python
relations = get_relations()
```

Fetch only relations with type Contains, direction TO, and target assets with profile EM apartment:

```python
relations = get_relations(direction='TO', relation_type='Contains', target_entity_type='ASSET', target_entity_profile_name='EM apartment')
```

Fetch all relations for device with id `8c790660-782a-4c7b-ae07-0c3163a6f968`:

```python
entity_id = '8c790660-782a-4c7b-ae07-0c3163a6f968'
entity_type = 'DEVICE'
relations = get_relations(entity_id=entity_id, entity_type=entity_type)
```

Fetch only relations with type Contains, direction TO, and target assets with profile EM apartment for device with id `8c790660-782a-4c7b-ae07-0c3163a6f968`:

```python
entity_id = '8c790660-782a-4c7b-ae07-0c3163a6f968'
entity_type = 'DEVICE'
relations = get_relations(entity_id=entity_id, entity_type=entity_type, direction='TO', relation_type='Contains', target_entity_type='ASSET', target_entity_profile_name='EM apartment')
```

Relations usage: fetch area attribute from associated asset:

```python
relations = get_relations(direction='TO', relation_type='Contains', target_entity_type='ASSET', target_entity_profile_name='EM apartment')
if not relations:
    print('No associated EM apartment found.') 
    return []

apartment_id = relations[0]['entityId']
apartment_type = relations[0]['entityType']
attributes = [{'scope': 'SERVER_SCOPE', 'key': 'area'}]
fetched_attributes = get_attributes(attributes, entity_id=apartment_id, entity_type=apartment_type)
area = fetched_attributes.get('SERVER_SCOPE', {}).get('area')
```

## Best Practices

Use Native Calculations when:

* You need flexible relation navigation or telemetry fetching.
* You want to experiment using the Metric Explorer.

Avoid Native Calculations when:

* The same result can be achieved with Simple or Batched Calculations (they perform better).

## Limitations

Native Calculations only support the **Fixed timerange** strategy.

## Example

Example Native Calculation to compute temperature difference between a heat meter and the building average:

```python
import statistics

# 1. Fetch the 'temperature' telemetry from the current EM heat meter.
heat_meter_temperature_data = get_telemetries(keys=["temperature"])
if not heat_meter_temperature_data or "temperature" not in heat_meter_temperature_data:
    print("Temperature telemetry not found for the heat meter.")
    return []

heat_meter_temperature_values = heat_meter_temperature_data["temperature"]
if not heat_meter_temperature_values:
    print("Temperature telemetry values are empty.")
    return []

# 2. Traverse from 'EM heat meter' to 'EM apartment' using relation type 'Contains' (direction TO).
apartment_relations = get_relations(direction="TO", relation_type="Contains", target_entity_type="ASSET", target_entity_profile_name="EM apartment")
if not apartment_relations:
    print("No related apartment found for the heat meter.")
    return []

apartment_id = apartment_relations[0]["entityId"]
apartment_type = apartment_relations[0]["entityType"]
print(f"Apartment ID: {apartment_id}")

# 3. Traverse from 'EM apartment' to 'EM building' using relation type 'Contains' (direction TO).
building_relations = get_relations(entity_id=apartment_id, entity_type=apartment_type, direction="TO", relation_type="Contains", target_entity_type="ASSET", target_entity_profile_name="EM building")
if not building_relations:
    print("No related building found for the apartment.")
    return []

building_id = building_relations[0]["entityId"]
building_type = building_relations[0]["entityType"]
print(f"Building ID: {building_id}")

# 4. Find all 'EM apartment' entities related to the 'EM building' using relation type 'Contains' (direction FROM).
apartment_relations_from_building = get_relations(entity_id=building_id, entity_type=building_type, direction="FROM", relation_type="Contains", target_entity_type="ASSET", target_entity_profile_name="EM apartment")
if not apartment_relations_from_building:
    print("No related apartments found for the building.")
    return []

building_heat_meter_temperatures = {}
# 5. For each 'EM apartment', find all related 'EM heat meter' entities using relation type 'Contains' (direction FROM).
for apartment in apartment_relations_from_building:
    apartment_id = apartment["entityId"]
    apartment_type = apartment["entityType"]

    heat_meter_relations_from_apartment = get_relations(entity_id=apartment_id, entity_type=apartment_type, direction="FROM", relation_type="Contains", target_entity_type="DEVICE", target_entity_profile_name="EM heat meter")
    if heat_meter_relations_from_apartment:
        for heat_meter in heat_meter_relations_from_apartment:
            heat_meter_id = heat_meter["entityId"]
            heat_meter_type = heat_meter["entityType"]

            # 6. For each 'EM heat meter' found in step 5, fetch the 'temperature' telemetry.
            heat_meter_temperature_data = get_telemetries(keys=["temperature"], entity_id=heat_meter_id, entity_type=heat_meter_type)
            if heat_meter_temperature_data and "temperature" in heat_meter_temperature_data:
                heat_meter_temperature_values = heat_meter_temperature_data["temperature"]
                if heat_meter_temperature_values:
                    for temp_data in heat_meter_temperature_values:
                        ts = temp_data["ts"]
                        value = temp_data["value"]
                        try:
                            value = float(value)
                            if ts not in building_heat_meter_temperatures:
                                building_heat_meter_temperatures[ts] = []
                            building_heat_meter_temperatures[ts].append(value)
                        except ValueError as e:
                            print(f"Error converting temperature value to float: {e}")
                            continue

# 7. Calculate the average temperature of all 'EM heat meter' entities within the building for each timestamp.
building_average_temperatures = {}
for ts, temperatures in building_heat_meter_temperatures.items():
    if temperatures:
        building_average_temperatures[ts] = statistics.mean(temperatures)

# 8. Calculate the temperature difference for each time interval.
temperature_differences = []
for temp_data in heat_meter_temperature_values:
    ts = temp_data["ts"]
    heat_meter_temperature = temp_data["value"]
    try:
        heat_meter_temperature = float(heat_meter_temperature)
        if ts in building_average_temperatures:
            building_average_temperature = building_average_temperatures[ts]
            temperature_difference = heat_meter_temperature - building_average_temperature
            temperature_differences.append({"ts": ts, "value": temperature_difference})
    except ValueError as e:
        print(f"Error converting temperature value to float: {e}")
        continue

# 9. Output the 'temperature_difference' as the metric value.
res = temperature_differences
return res
```

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}
