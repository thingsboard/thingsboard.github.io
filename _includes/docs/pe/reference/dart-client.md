{% assign flutterAppVer = site.release.pe_flutter_app_ver %}
* TOC
{:toc}

## Overview

[Dart ThingsBoard PE API Client](https://pub.dev/packages/thingsboard_pe_client) package is a [Dart](https://dart.dev/) library
providing model objects and services to communicate with ThingsBoard PE platform using [RESTful APIs](/docs/{{docsPrefix}}reference/rest-api/) and WebSocket protocol.
With Dart Client you can programmatically access ThingsBoard PE API to manage [entities](/docs/{{docsPrefix}}user-guide/entities-and-relations/),
query [telemetry data](/docs/{{docsPrefix}}user-guide/telemetry/) and get real-time updates via [WebSocket API](/docs/{{docsPrefix}}user-guide/telemetry/#websocket-api).
The Dart ThingsBoard PE API Client is also a part of ThingsBoard PE Mobile Application.

The version of the Dart ThingsBoard PE API Client depends on the version of the platform that you are using.

## Installing Dart ThingsBoard API Client (Professional Edition)

To use Dart ThingsBoard PE API Client package in your Dart/Flutter project run this command:

With Dart:

```bash
dart pub add thingsboard_pe_client
```
{: .copy-code}

With Flutter:

```bash
flutter pub add thingsboard_pe_client
```
{: .copy-code}

This will add a line like this to your package's pubspec.yaml (and run an implicit `dart pub get`):

```yaml
dependencies:
  thingsboard_pe_client: ^{{flutterAppVer}}
```
{: .copy-code}

Alternatively, your editor might support `dart pub get` or `flutter pub get`. Check the docs for your editor to learn more.

Now in your Dart code, you can use:

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';
```
{: .copy-code}

### Basic Usage

The next sample code shows how to instantiate ThingsBoard Client, perform login and get user details of current logged in user.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    print('isAuthenticated=${tbClient.isAuthenticated()}');

    print('authUser: ${tbClient.getAuthUser()}');

    // Get user details of current logged in user
    var currentUserDetails = await tbClient.getUserService().getUser();
    print('currentUserDetails: $currentUserDetails');

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

### Examples

#### Get user permissions

The following sample code shows how to get allowed permissions of current logged in user and then check sample permission.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    // Get allowed user permissions
    var allowedUserPermissions =
      await tbClient.getUserPermissionsService().getAllowedPermissions();

    print('Allowed user permissions: ${allowedUserPermissions.userPermissions}');

    // Get if user has generic read permission on device entities
    print(
          'Has generic devices read permission: ${allowedUserPermissions.hasGenericPermission(Resource.DEVICE, Operation.READ)}');

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### Fetch user devices

The following sample code shows how to fetch user devices via page link.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    var pageLink = PageLink(10);
    PageData<Device> devices;
    do {
        // Fetch user devices using current page link
        devices = await tbClient.getDeviceService().getUserDevices(pageLink);
        print('devices: $devices');
        pageLink = pageLink.nextPageLink();
    } while (devices.hasNext);

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### Fetch user dashboards

The following sample code shows how to fetch user dashboards via page link.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    var pageLink = PageLink(10);
    PageData<DashboardInfo> dashboards;
    do {
        // Fetch user dashboards using current page link
        dashboards = await tbClient.getDashboardService().getUserDashboards(pageLink);
        print('dashboards: $dashboards');
        pageLink = pageLink.nextPageLink();
    } while (devices.hasNext);

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### Fetch entity groups

The following sample code shows how to fetch entity groups.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    // Iterate over all available entity group types
    for (var groupType in [
      EntityType.DEVICE,
      EntityType.ASSET,
      EntityType.ENTITY_VIEW,
      EntityType.DASHBOARD,
      EntityType.CUSTOMER,
      EntityType.USER,
      EntityType.EDGE
    ]) {
      // Fetch all entity groups of specified type
      var entityGroups =
          await tbClient.getEntityGroupService().getEntityGroupsByType(groupType);
      print('found ${groupType.toShortString()} groups: $entityGroups');
    }

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### Count entities using Entity Data Query API

The following sample code shows how to use Entity Data Query API to count total devices, total active devices and total inactive devices.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    // Create entity filter to get all devices
    var entityFilter = EntityTypeFilter(entityType: EntityType.DEVICE);

    // Create entity count query with provided filter
    var devicesQuery = EntityCountQuery(entityFilter: entityFilter);

    // Execute entity count query and get total devices count
    var totalDevicesCount =
        await tbClient.getEntityQueryService().countEntitiesByQuery(devicesQuery);
    print('Total devices: $totalDevicesCount');

    // Set key filter to existing query to get only active devices
    var activeDeviceKeyFilter = KeyFilter(
      key: EntityKey(type: EntityKeyType.ATTRIBUTE, key: 'active'),
      valueType: EntityKeyValueType.BOOLEAN,
      predicate: BooleanFilterPredicate(
          operation: BooleanOperation.EQUAL,
          value: FilterPredicateValue(true)));
    devicesQuery.keyFilters = [activeDeviceKeyFilter];

    // Execute entity count query and get total active devices count
    var activeDevicesCount =
      await tbClient.getEntityQueryService().countEntitiesByQuery(devicesQuery);
    print('Active devices: $activeDevicesCount');

    // Set key filter to existing query to get only inactive devices
    var inactiveDeviceKeyFilter = KeyFilter(
      key: EntityKey(type: EntityKeyType.ATTRIBUTE, key: 'active'),
      valueType: EntityKeyValueType.BOOLEAN,
      predicate: BooleanFilterPredicate(
          operation: BooleanOperation.EQUAL,
          value: FilterPredicateValue(false)));
    devicesQuery.keyFilters = [inactiveDeviceKeyFilter];

    // Execute entity count query and get total inactive devices count
    var inactiveDevicesCount =
      await tbClient.getEntityQueryService().countEntitiesByQuery(devicesQuery);
    print('Inactive devices: $inactiveDevicesCount');

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### Query entities using Entity Data Query API

The following sample code shows how to use Entity Data Query API to get all active devices.

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    // Create entity filter to get only devices
    var entityFilter = EntityTypeFilter(entityType: EntityType.DEVICE);

    // Create key filter to query only active devices
    var activeDeviceKeyFilter = KeyFilter(
        key: EntityKey(type: EntityKeyType.ATTRIBUTE, key: 'active'),
        valueType: EntityKeyValueType.BOOLEAN,
        predicate: BooleanFilterPredicate(
            operation: BooleanOperation.EQUAL,
            value: FilterPredicateValue(true)));

    // Prepare list of queried device fields
    var deviceFields = <EntityKey>[
      EntityKey(type: EntityKeyType.ENTITY_FIELD, key: 'name'),
      EntityKey(type: EntityKeyType.ENTITY_FIELD, key: 'type'),
      EntityKey(type: EntityKeyType.ENTITY_FIELD, key: 'createdTime')
    ];

    // Prepare list of queried device attributes
    var deviceAttributes = <EntityKey>[
      EntityKey(type: EntityKeyType.ATTRIBUTE, key: 'active')
    ];

    // Create entity query with provided entity filter, key filter, queried fields and page link
    var devicesQuery = EntityDataQuery(
        entityFilter: entityFilter,
        keyFilters: [inactiveDeviceKeyFilter],
        entityFields: deviceFields,
        latestValues: deviceAttributes,
        pageLink: EntityDataPageLink(
            pageSize: 10,
            sortOrder: EntityDataSortOrder(
                key: EntityKey(
                    type: EntityKeyType.ENTITY_FIELD, key: 'createdTime'),
                direction: EntityDataSortOrderDirection.DESC)));

      PageData<EntityData> devices;
      do {
        // Fetch active devices using entities query with current page link
        devices = await tbClient
            .getEntityQueryService()
            .findEntityDataByQuery(devicesQuery);
        print('Active devices entities data:');
        devices.data.forEach((device) {
          print(
              'id: ${device.entityId.id}, createdTime: ${device.createdTime}, name: ${device.field('name')!}, type: ${device.field('type')!}, active: ${device.attribute('active')}');
        });
        devicesQuery = devicesQuery.next();
      } while (devices.hasNext);

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### Manage Device example

The following sample code demonstrates basic concepts of device management API (add/get/delete device, get/save device attributes).

```dart
import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    var deviceName = 'My test device';

    // Construct device object
    var device = Device(deviceName, 'default');
    device.additionalInfo = {'description': 'My test device!'};

    // Add device
    var savedDevice = await tbClient.getDeviceService().saveDevice(device);
    print('savedDevice: $savedDevice');

    // Find device by device id
    var foundDevice =
       await tbClient.getDeviceService().getDeviceInfo(savedDevice.id!.id!);
    print('foundDevice: $foundDevice');

    // Save device shared attributes
    var res = await tbClient.getAttributeService().saveEntityAttributesV2(
      foundDevice!.id!,
      AttributeScope.SHARED_SCOPE.toShortString(),
      {'targetTemperature': 22.4, 'targetHumidity': 57.8});
    print('Save attributes result: $res');

    // Get device shared attributes
    var attributes = await tbClient.getAttributeService().getAttributesByScope(
      foundDevice.id!,
      AttributeScope.SHARED_SCOPE.toShortString(),
      ['targetTemperature', 'targetHumidity']);
    print('Found device attributes: $attributes');

    // Delete the device
    await tbClient.getDeviceService().deleteDevice(savedDevice.id!.id!);

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### WebSocket API example

The following sample code demonstrates basic concepts of WebSocket API. In this code we are going to create new device,
create subscription to get device data and telemetry updates using Entity Data Query API over WebSocket API.
Finally post sample telemetry and get data updates by listening data stream of subscription.

```dart
import 'dart:math';

import 'package:thingsboard_pe_client/thingsboard_client.dart';

// ThingsBoard REST API URL
const thingsBoardApiEndpoint = 'http://localhost:8080';

void main() async {
  try {

    // Create instance of ThingsBoard API Client
    var tbClient = ThingsboardClient(thingsBoardApiEndpoint);

    // Perform login with default Tenant Administrator credentials
    await tbClient.login(LoginRequest('tenant@thingsboard.org', 'tenant'));

    var deviceName = 'My test device';

    // Construct device object
    var device = Device(deviceName, 'default');
    device.additionalInfo = {'description': 'My test device!'};

    // Add device
    var savedDevice = await tbClient.getDeviceService().saveDevice(device);
    print('savedDevice: $savedDevice');

    // Create entity filter to get device by its name
    var entityFilter = EntityNameFilter(
        entityType: EntityType.DEVICE, entityNameFilter: deviceName);

    // Prepare list of queried device fields
    var deviceFields = <EntityKey>[
      EntityKey(type: EntityKeyType.ENTITY_FIELD, key: 'name'),
      EntityKey(type: EntityKeyType.ENTITY_FIELD, key: 'type'),
      EntityKey(type: EntityKeyType.ENTITY_FIELD, key: 'createdTime')
    ];

    // Prepare list of queried device timeseries
    var deviceTelemetry = <EntityKey>[
      EntityKey(type: EntityKeyType.TIME_SERIES, key: 'temperature'),
      EntityKey(type: EntityKeyType.TIME_SERIES, key: 'humidity')
    ];

    // Create entity query with provided entity filter, queried fields and page link
    var devicesQuery = EntityDataQuery(
        entityFilter: entityFilter,
        entityFields: deviceFields,
        latestValues: deviceTelemetry,
        pageLink: EntityDataPageLink(
            pageSize: 10,
            sortOrder: EntityDataSortOrder(
                key: EntityKey(
                    type: EntityKeyType.ENTITY_FIELD, key: 'createdTime'),
                direction: EntityDataSortOrderDirection.DESC)));

    // Create timeseries subscription command to get data for 'temperature' and 'humidity' keys for last hour with realtime updates
    var currentTime = DateTime.now().millisecondsSinceEpoch;
    var timeWindow = Duration(hours: 1).inMilliseconds;

    var tsCmd = TimeSeriesCmd(
        keys: ['temperature', 'humidity'],
        startTs: currentTime - timeWindow,
        timeWindow: timeWindow);

    // Create subscription command with entities query and timeseries subscription
    var cmd = EntityDataCmd(query: devicesQuery, tsCmd: tsCmd);

    // Create subscription with provided subscription command
    var telemetryService = tbClient.getTelemetryService();
    var subscription = TelemetrySubscriber(telemetryService, [cmd]);

    // Create listener to get data updates from WebSocket
    subscription.entityDataStream.listen((entityDataUpdate) {
      print('Received entity data update: $entityDataUpdate');
    });

    // Perform subscribe (send subscription command via WebSocket API and listen for responses)
    subscription.subscribe();

    // Post sample telemetry
    var rng = Random();
    for (var i = 0; i < 5; i++) {
      await Future.delayed(Duration(seconds: 1));
      var temperature = 10 + 20 * rng.nextDouble();
      var humidity = 30 + 40 * rng.nextDouble();
      var telemetryRequest = {'temperature': temperature, 'humidity': humidity};
      print('Save telemetry request: $telemetryRequest');
      var res = await tbClient
        .getAttributeService()
        .saveEntityTelemetry(savedDevice.id!, 'TELEMETRY', telemetryRequest);
      print('Save telemetry result: $res');
    }

    // Wait few seconds to show data updates are received by subscription listener
    await Future.delayed(Duration(seconds: 2));

    // Finally unsubscribe to release subscription
    subscription.unsubscribe();

    // Delete the device
    await tbClient.getDeviceService().deleteDevice(savedDevice.id!.id!);

    // Finally perform logout to clear credentials
    await tbClient.logout();
  } catch (e, s) {
    print('Error: $e');
    print('Stack: $s');
  }
}
```
{: .copy-code}

#### More examples

You can find more examples to learn how to use Dart ThingsBoard PE API Client **[here](https://github.com/thingsboard/dart_thingsboard_pe_client/tree/master/example)**.


