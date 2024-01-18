---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Build prediction model for time series data
description: How to build accurate prediction of time series data. Explore available ML models for forecasting and visualizing predicted data.

trendz-prediction-overview-simple:
  0:
    image: /images/trendz/prediction-simple-initial.png
    title: 'Configure prediction for energy consumption on line chart'
  1:
    image: /images/trendz/prediction-simple-cfg.png
    title: 'Select prediction model and forecast horizon'

trendz-prediction-overview-bar-consumption:
 0:
  image: /images/trendz/prediction-sum-view.png
  title: 'Resource usage foreacast for the next year'
 1:
  image: /images/trendz/prediction-sum-cfg1.png
  title: 'Select prediction model and forecast horizon'

---

* TOC
{:toc}

Trendz has built-in instruments for time-series prediction in few clicks. All required work, like data filtering, normalization 
and model training performed in the background. You can enable prediction for any fields including calculated fields. 
Time series prediction unlock a lot of insights that can be extract for your data. Here is a small list of questions that can be answered with Trendz time series prediction:

* Forecast energy consumption for the next quarter or year
* Predict when the next maintenance should be scheduled
* Predict when the next failure will occur
* Forecast manufacturing KPIs and how they are affected by current system state
* Forecast remaining time till fuel tank will be empty

&nbsp;
<div id="video">  
    <div  id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/cuGPiBeaA18" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Prediction Models

Trendz implements different multivariable and univariable ML models for timeseries prediction:

* `Fourier Transformation` - dissects a time series into its frequency components. Its prowess lies in discerning cyclic trends and seasonal patterns entrenched within the data, contributing to the efficacy of forecasting exercises.
* `Prophet` - a forecasting paradigm devised by Facebook, meticulously crafted to handle time series datasets accentuated by pronounced seasonal patterns and holiday impacts. This technique utilizes an additive framework to encapsulate trends, seasonality, and holiday-induced influences.
* `Multi Prophet` - evolves from the Prophet forecast model, enabling the simultaneous prediction of interconnected time series. This becomes particularly advantageous when dealing with numerous interconnected variables that warrant predictive insights.
* `ARIMA` - combines autoregressive and moving average aspects to anticipate upcoming values founded on historical observations. This approach adeptly accommodates trends and seasonal variations ingrained within the dataset.
* `SARIMAX` (Seasonal ARIMA with Exogenous Variables) - extends the ARIMA methodology by assimilating supplementary exogenous variables, capable of influencing the predictive outcomes. This model comes into play when external factors interplay with the time series, rendering it a valuable tool for enhanced forecasting accuracy.
* `Linerar Regresssion` - a fundamental statistical method, comes into play to anticipate a dependent variable's trajectory grounded in one or more independent variables. This technique establishes a linear connection between variables, forming the foundation for making forecasts.
* `Custom Model` - you can write our own multivariable time series prediction model using any Python libraries. In this case you provide a model sources and Trendz is responsible for inserting input dataset from ThingsBoard and process forecasted output.


## Simple Prediction

![image](/images/trendz/prediction-simple-view.png)

In this example we monitor vibration of pumps on water station. We want predict when vibration will rich critical levels
so we can schedule preventive maintenance for the pump and avoid unplanned downtime.

* Create line chart 
* Add **Date(RAW)** field on **X-axis**
* Add **Pump** name field to **Filter** section and select required Pump
* Add Pump **vibration** telemetry on **Y-axis** 

Now Our Chart is ready for making forecast:
* Enable **Predction** check box for forecast field
* Select **FOURIER_TRANSFORMATION** as **Prediction Method**
* Set **Prediction Unit** to **days**
* Set **Prediction Range** to **2** - we make forecast for the next 2 days

{% include images-gallery.html imageCollection="trendz-prediction-overview-simple" %}

Now we can press 'Build report' buten and check how our forecast looks like.

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/prediction-simple-view.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-vibration-predict.webm" type="video/webm">                 
        </video> 
    </div>
</div>


## Forecast resource usage

In this example, we forecast how much energy would be consumed by teh building during next year. We have Buildings, Apartments and each Apartment 
has energy meter. We need to aggregate telemetry from sensors on building level and then build a forecast.

* Create Bar chart 
* Add **Date(RAW)** field on **X-axis**
* Add **Building** name field to **Filter** section and select required Building
* Add Energy Meter **energyConsumption** telemetry on **Y-axis**
* Enable **Prediction** check box for **energyConsumption** field
* Select **LINEAR_REGRESSION** as **Prediction Method**
* Set **Prediction Unit** to **years**
* Set **Prediction Range** to **1** - we make forecast for the next year

{% include images-gallery.html imageCollection="trendz-prediction-overview-bar-consumption" %}

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/prediction-sum-view.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-enrgy-predict.webm" type="video/webm">                 
        </video> 
    </div>
</div>


## Compare prediction with historical data 

If you want to see how trained model looks like compared to historical data you need to enable **Show Historical part** checkbox
 in field configuration. Once enabled, predicted dataset will contain historical part predicted with the same model.
 
![image](/images/trendz/prediction-validation.png)
 
## Next Steps

{% assign currentGuide = "Prediction" %}{% include templates/trndz-guides-banner.md %}