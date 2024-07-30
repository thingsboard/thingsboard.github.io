---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Custom Python models
description: Batch Calculated Fields


python-prediction-basic-example:
  0:
    image: /images/trendz/python-predict-univariable-barview.png
    title: 'Create bar chart'
  1:
    image: /images/trendz/python-predict-univariable-enable.png
    title: 'Enable prediction and select Custom model'
  2:
    image: /images/trendz/python-predict-univariable-sources.png
    title: 'Write python code for time series forecasting'
  3:
    image: /images/trendz/python-predict-univariable-result.png
    title: 'Bar chart with historical data and forecast for the next 14 days'
---


* TOC
{:toc}

You can add new prediction models into Trendz by writing a custom Python code. This code will be executed on the server side and will have access to the whole input dataset that includes required telemetries and attributes data.
You can import required Python libraries and use them in your code to forecast required metric based on input data. 

## Enable Custom prediction model
Once you added required telemetry or calculated fields into Trendz view, you can tell Trendz that it should use custom prediction model for this field. 
To do that you need to open `Field settings` dialog and select `Custom` option in the `Prediction method` dropdown:

## Define input dataset
By default, you will have only original telemetry data in the input dataset. But you can add additional telemetries and attributes into the input dataset by selecting them in `Selected fields for prediction` section. 
Just start typing the name of telemetry or attribute and select required field from the dropdown list.

## Basic univariable python model example
In this example we will show how to predict water consumption based on historical data. 

* Create Bar chart view in Trendz
* Add `Date` field into X-axis section
* Add `consumption` telemetry into the Y-axis section
* Add `Sensor` device name into filter section and select required device
* Enable `Prediction` checkbox and select `Custom` option in the `Prediction method` dropdown
* Set prediction time range for next 14 days
* Write following code into the `Model function` section:

```python
import pandas as pd
from prophet import Prophet

print(f"inputX: {inputX}")
print(f"inputY: {inputY}")
print(f"outputX: {outputX}")

df = pd.DataFrame()
df['ds'] = pd.to_datetime(inputX, unit='ms')
df['y'] = inputY

model = Prophet()
model.fit(df)

future = pd.DataFrame()
future['ds'] = pd.to_datetime(outputX, unit='ms')

forecast = model.predict(future)
outputY = forecast['yhat'].tolist()
print(f"result: {outputY}")
return outputY
```

Now you can build view to see the result of your prediction model.

{% include images-gallery.html imageCollection="python-prediction-basic-example" %}


## Multivariable python model example
In this example we will show how to predict heat consumption based on historical consumption, environment temperature .

* Create Bar chart view in Trendz
* Add `Date` field into X-axis section
* Add `consumption` telemetry into the Y-axis section
* Add `Sensor` device name into filter section and select required device
* Enable `Prediction` checkbox and select `Custom` option in the `Prediction method` dropdown
* Set prediction time range for next 14 days
* Add `temperature` field into **Selected fields for prediction**
* Write following code into the `Model function` section:

```python
import pandas as pd
import numpy as np
from prophet import Prophet

futureRegressors = []
regressorsCount = len(historyRegressors)

for i in range(0, regressorsCount):
	regressorInputX = inputX
	regressorOutputX = outputX
	regressorInputY = historyRegressors[i]
	regressorOutputY = []

	df = pd.DataFrame()
	df['ds'] = pd.to_datetime(regressorInputX, unit='ms')
	df['y'] = regressorInputY

	model = Prophet()
	model.fit(df)

	future = pd.DataFrame()
	future['ds'] = pd.to_datetime(regressorOutputX, unit='ms')

	forecast = model.predict(future)
	regressorOutputY = forecast['yhat'].tolist()
	futureRegressors.append(regressorOutputY)


for i in range(0, regressorsCount):
	print(f"historyRegressors{i} = {historyRegressors[i]}")
for i in range(0, regressorsCount):
	print(f"futureRegressors{i} = {futureRegressors[i]}")

print(f"inputX: {inputX}")
print(f"inputY: {inputY}")
print(f"outputX: {outputX}")

df = pd.DataFrame()
df['ds'] = pd.to_datetime(inputX, unit='ms')
df['y'] = np.array(inputY)
for i in range(0, regressorsCount):
	df['regressor' + str(i)] = np.array(historyRegressors[i]) 

model = Prophet()
for i in range(0, regressorsCount):
	model.add_regressor('regressor' + str(i), standardize=False) 
model.fit(df)

future = pd.DataFrame()
future['ds'] = pd.to_datetime(outputX, unit='ms')
for i in range(0, regressorsCount):
	future['regressor' + str(i)] = np.array(futureRegressors[i])

forecast = model.predict(future)
outputY = forecast['yhat'].tolist()
print(f"result: {outputY}")
return outputY
```

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}