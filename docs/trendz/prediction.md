---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Prediction
description: Bar Chart and Histogram
---

* TOC
{:toc}

Trendz has built-in instruments for timeseries prediction in few clicks. All required work, like data filtering, normalization 
and model training performed in the background. You can enable prediction for any fields including calculated fields.

&nbsp;
<div id="video">  
    <div  id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/cuGPiBeaA18" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

## Simple Prediction

![image](/images/trendz/prediction-simple-view.png)

In this example we monitor vibration of pumps on water station. We want predict when vibration will rich critical levels
so we can schedule preventive maintenance for the pump and avoid unplanned downtime.

* Create line chart 
* Add **Date(RAW)** field on **X-axis**
* Add **Pump** name field to **Filter** section and select required Pump
* Add Pump **vibration** telemetry on **Y-axis** - on this step we will see current vibration for the pump
* Add Pump **vibration** telemetry again to the **Y-axis** and change label of this field to **forecast**
![image](/images/trendz/prediction-simple-initial.png)

Now Our Chart is ready for making forecast:
* Enable **Predction** check box for forecast field
* Select **FOURIER_TRANSFORMATION** as **Prediction Method**
* Set **Prediction Unit** to **days**
* Set **Prediction Range** to **2** - we make forecast for the next 2 days

![image](/images/trendz/prediction-simple-cfg.png)

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/prediction-simple-view.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-vibration-predict.webm" type="video/webm">                 
        </video> 
    </div>
</div>


## Forecast resource usage

![image](/images/trendz/prediction-sum-view.png)

In this example, we forecast how much energy would be consumed by teh building during next year. We have Buildings, Apartments and each Apartment 
has energy meter. We need to aggregate telemetry from sensors on building level and then build a forecast.

* Create Bar chart 
* Add **Date(RAW)** field on **X-axis**
* Add **Building** name field to **Filter** section and select required Building
* Add Energy Meter **energyConsumption** telemetry on **Y-axis** - on this step we will see current vibration for the pump
* Add Energy Meter **energyConsumption** telemetry again to the **Y-axis** and change label of this field to **forecast**
* Use **SUM** aggregation for both fields
* Enable **Predction** check box for forecast field
* Select **LINEAR_REGRESSION** as **Prediction Method**
* Set **Prediction Unit** to **years**
* Set **Prediction Range** to **1** - we make forecast for the next year
* In View Settings Enable **Stacked Bar** mode - we want to stack values for the current month

![image](/images/trendz/prediction-sum-cfg1.png)

<div class="image-block">
    <div class="image-wrapper">
       <video poster="/images/trendz/prediction-sum-view.png" autoplay="" loop="" preload="auto" muted="" style="width: 750px">
            <source src="https://tb-videos.s3-us-west-1.amazonaws.com/trndz-enrgy-predict.webm" type="video/webm">                 
        </video> 
    </div>
</div>

## Prediction Models

Trendz implements few methods for timeseries prediction:

* Linerar Regresssion
* OLS Linerar Regresssion
* ARIMA
* Fourier Transformation


## Compare prediction with historical data 

If you want to see how trained model looks like compared to historical data you need to enable **Show Historical part** checkbox
 in field configuration. Once enabled, predicted dataset will contain historical part predicted with the same model.
 
![image](/images/trendz/prediction-validation.png)
 
## Next Steps

{% assign currentGuide = "Prediction" %}{% include templates/trndz-guides-banner.md %}