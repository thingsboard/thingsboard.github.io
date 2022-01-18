---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz Rest API
description: Trendz Rest API
---

* TOC
{:toc}

Trendz provides simple Rest API for downloading view report data.

* Create Table View in Trendz that contains all required fields.
* Copy Link to that View and extract View ID. It is a UUID string in the last part of the link
* Execute HTTP POST request:

**URL**: http://localhost:8888/apiTrendz/publicApi/buildReport?jwt=YYYYYYY

**Body**: 

```json
{
	"viewConfigId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", 
	"rangeStartTs": 1609462861000, 
	"rangeEndTs": 1630497968000, 
	"filters": {} 
}
```

Where

* `viewConfigId` - View ID that should be executed. Required parameter
* `rangeStartTs` - Start of the time range for the report in milliseconds. Optional parameter. If blank, system will take time range from the saved View. 
* `rangeEndTs` - End of the time range for the report in milliseconds. Optional parameter. If blank, system will take time range from the saved View. 
* `filters` - Custom filters that overrides filters in the saved View. Optional parameter. 
* `jwt` - JWT token for request authentication.

## Authorization

All requests should contain jwt token for authorization. It should be added as query parameter or in HTTP Headers. 
In both cases parameter name is `jwt`.

You can get JWT token from ThingsBoard Rest API 

Request: 

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"tenant@thingsboard.org", "password":"tenant"}' 'http://THINGSBOARD_URL/api/auth/login'
```

Response:

```json
{"token":"$YOUR_JWT_TOKEN", "refreshToken":"$YOUR_JWT_REFRESH_TOKEN"}
```

Now you can use **$YOUR_JWT_TOKEN** as a jwt token for request authorization.

## Response format

Here is an example of the response:

```json
{
    "columnLabels": [
        "Building",
        "Date",
        "energyUsage"
    ],
    "dataTable": [
        {
            "Building": "Building ABC",
            "Date": "1606773600000",
            "energyUsage": 3.422654173312068
        },
        {
            "Building": "Building ABC",
            "Date": "1619816400000",
            "energyUsage": 9.189473684210526
        },
        {
            "Building": "Building XYZ",
            "Date": "1617224400000",
            "energyUsage": 7.015277777777778
        },
        {
            "Building": "Building XYZ",
            "Date": "1612130400000",
            "energyUsage": 6.513392857142857
        }
    ]
}
```

`columnLabels` - contains field labels that are included in the report.
`dataTable` - view report data in table format.

## Filter modification

In configured View has filter fields, you can modify filter options during request. You should add `fitlers` field into request body. 
Here is an example:

```json
{
	"viewConfigId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
	"filters": {
		"building": ["Building ABC"],
		"apartment": ["Apt 101", "Apt 407"]
	}
}
```

Keys inside filters object should match filter name in View and value contains array of values that should be applied to filter field.


## Usage in custom ThingsBoard widgets

If you need a custom widget with specific logic, you can use Trendz Rest API for loading required data and ThingsBoard custom widgets functionality for creating required visualization.
Here is an example that describes how to load data from Trendz API, apply dashboard time and set filter values from widget datasource.

```javascript
self.onInit = function() {
    
    let requestObj = buildTrendzRequest("edee0e57-41b9-4df3-acdb-08900cf53653", false, 'building');
    loadDataFromTrendz(requestObj)
        .subscribe(
            data => console.log('ok data', data),
            err => console.log('something wrong', err)
        );
}

self.onDataUpdated = function() {
    let requestObj = buildTrendzRequest("edee0e57-41b9-4df3-acdb-08900cf53653", false, 'building');
    
    loadDataFromTrendz(requestObj)
        .subscribe(
            data => console.log('ok data', data),
            err => console.log('something wrong', err)
        );
}

function buildTrendzRequest(viewId, useDashobardTime, fitlerKey) {
    let requestObj = {};
    
    requestObj.viewConfigId = viewId;
    
    if(useDashobardTime) {
        applyDashboardTime(requestObj);
    }
    
    applyFilters(requestObj, fitlerKey);
    
    return requestObj;
}

function applyFilters(requestObj, key) {
    let filterValues = getAliasValues();
    if(filterValues.length) {
        requestObj.filters = {};
        requestObj.filters[key] = filterValues;
    }
}

function applyDashboardTime(requestObj) {
    let timeWindow = $scope.ctx.dashboard.dashboardTimewindow;
    if (timeWindow.realtime) {
        requestObj.rangeStartTs = Date.now() - timeWindow.realtime.timewindowMs;
        requestObj.rangeEndTs = Date.now();
    } else if (timeWindow.history) {
        if (timeWindow.history.fixedTimewindow && timeWindow.history.historyType === 1) {
            requestObj.rangeStartTs = timeWindow.history.fixedTimewindow.startTimeMs;
            requestObj.rangeEndTs = timeWindow.history.fixedTimewindow.endTimeMs;
        } else if (timeWindow.history.timewindowMs && timeWindow.history.historyType === 0) {
            requestObj.rangeStartTs = Date.now() - timeWindow.history.timewindowMs;
            requestObj.rangeEndTs = Date.now();
        }
    }
}

function loadDataFromTrendz(requestObj) {
    let trendzDomain = 'http://localhost:8888';
    let dataUrl = trendzDomain + '/apiTrendz/publicApi/buildReport?jwt=' + getToken();
    return self.ctx.http.post(dataUrl, requestObj);
}

function getAliasValues() {
    let filterValues = [];
    if(self.ctx && self.ctx.defaultSubscription && self.ctx.defaultSubscription.data && self.ctx.defaultSubscription.data.length > 0) {
        for(let i = 0; i<self.ctx.defaultSubscription.data.length; i++ ) {
            let value = getDescendantProp(self.ctx.defaultSubscription.data[i], 'data.0.1');
            if (value && value !== 'Unresolved') {
                filterValues.push(value);
            }
        }
    }
    return filterValues;
}

function getDescendantProp(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}

function getToken() {
    let jwtToken = localStorage.getItem('jwt_token');
    if(jwtToken) {
        jwtToken = jwtToken.replace(/"/g, '');
    }
    
    return jwtToken;
}

self.onResize = function() {

}

self.onDestroy = function() {
}

```

* `self.onInit` - standard ThingsBoard widget lifecycle event. Called when widget first initialized.
* `self.onDataUpdated` - standard ThingsBoard widget lifecycle event. Called when widget datasource or alias updated.
* `buildTrendzRequest` - initialize request object to Trendz API. Set time range form dashboard time window if required. Set filters for the request.
* `applyFilters` - read data from datasource and apply it as a filter for Trendz API request.
* `applyDashboardTime` - apply time range form dashboard time window to the Trendz API request.
* `loadDataFromTrendz` - add jwt token and execute actual request to API.
* `loadDataFromTrendz` - add jwt token and execute actual request to API.
 
If you need assistance with custom widget creation - contact us and we will help. 

## Limits

Trendz Rest API has 2 configurable limits:

* `SIMPLE_API_RATE_LIMITER_QUEUE_CAPACITY` - max amount of queued requests that are waiting for execution. 
If more requests received, system will reject them. By default queue size is 10 requests.
* `SIMPLE_API_RATE_LIMITER_THREAD_POOL_SIZE` - amount of requests that are executed in parallel.  

## Possible response codes

* `403` - JWT token not valid or expired.
* `415` - Unsupported Media Type. In this case you should set `Content-Type` header in HTTP request to **application/json**
* `429` - Too many requests. API limits reached. You need to wait and repeat request or change API limits in Trendz config.



