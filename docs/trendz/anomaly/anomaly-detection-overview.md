---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Anomaly Detection System — Concept and Examples
description: What is anomaly detection system?✔ Anomaly detection examples ⚫ ThingsBoard ➤ Complete guide for anomaly detection in time series data

scoreVsIndexExample:
    0:
        image: /images/trendz/anomaly/score_vs_index.png
        title: 'Pump vibration pattern during start'
       
---

* TOC
{:toc}

## Introduction
Anomaly detection is an important component of any asset monitoring system. Simple threshold-based condition monitoring is a good starting point,
but it is useless in scenarios where hidden correlations between multiple telemetries should be analyzed. In some cases, it is not even possible to
define thresholds because we just don't know them. For such use cases, Trendz Analytics provides automated anomaly detection instruments that are based on 
built-in machine learning algorithms.   

You can find details how to use Trendz Analytics to create anomaly detection models here:
&nbsp;
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/pbjXGDJ-SI0" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

The purpose of this article is to give a general overview of what is anomaly detection, how it works and how to implement it.

## What is an anomaly
In the beginning, we need to define what [**Anomaly**](https://en.wikipedia.org/wiki/Anomaly_detection){:target="_blank"} - 
**it is a time interval when a device or process behaves differently from others**. 

Let’s assume that we monitor diesel engines and collect telemetry like rotation speed, temperature, vibration, etc. 
We can analyze how engine behavior changes under different conditions and we can compare the behavior of different engines.
We know that when the rotation speed is between 1000-1500 rpm, the temperature should be 270-290°C. We know that because such 
behavior was observed 1000 times. And now, if we see that under the same conditions, the temperature is greater than 350°C - 
it is an anomaly because it is not expected behavior. It is very simplified example that explains the basic concept used in 
different real-life anomaly detection techniques.
 
## Anomaly score and Score Index
After you discovered anomalies in your system you will want to prioritize them and focus on real problems. Anomaly scoring as a 
technique that allow as to do this.

**Anomaly score** - it is a number that says how much current behavior is different 
from the expected. Higher number - higher anomaly we are looking at. In Trendz, we are using distance measurement functions for 
computing anomaly scores. The simplest distance measurement function - Euclidean distance. But you can also use other functions 
like - Chebyshev, Canberra, Manhattan, or Dynamic Time Warping (DTW) distances.

Sometimes an anomaly score is not a perfect candidate for anomalies prioritization. 
Take a look on example how vibration on the pump looks like right after it is started.

{% include images-gallery.html imageCollection="scoreVsIndexExample" showListImageTitles="true" preview="false" %}

* **normal behavior** expected vibration pattern for new pumps.
* **anomaly_A** has a higher anomaly score because we observed a big vibration spike during 5 seconds.
* **anomaly_B** has a lower anomaly score without big vibration spikes

**anomaly_A** has higher anomaly score compared to **anomaly_B**, but the duration of **anomaly_B** anomaly is much higher 
and most probably we want to focus on it because it has a higher impact on pump health compared to anomaly_A.
 
**Anomaly Score Index** - is a metric that combines anomaly score and anomaly duration. It is computed as an area between expected 
and actual behavior. This metric is a good candidate for filtering false-positive anomalies and reducing alert storms in large 
installations with a lot of connected sensors.

## Technical background

Our goal is to train an anomaly detection model to label telemetry as good or abnormal. 
It is a [**binary classification task**](https://machinelearningmastery.com/types-of-classification-in-machine-learning/){:target="_blank"}. 
There are many Machine learning algorithms that can do this job for us and identify anomalies in the data. We can split them 
into 2 groups - supervised and unsupervised algorithms.

#### Supervised anomaly detection
Supervised algorithms require a labeled data for model training. It means that we should say what segments are good and what 
segments contain anomalies. Based on this knowledge, an anomaly detection model will train to detect segments with anomalies automatically. 

The most popular supervised classification algorithms are - Knn, SVM, Logistic Regression, Decision trees, RNN\LSTM. 
Here is a good [**overview of those algorithms and how they work**](https://builtin.com/data-science/supervised-machine-learning-classification/){:target="_blank"}.


Despite the fact that these algorithms show good results, they have few important drawbacks:
1. They require a labeled dataset as an input. It may be a problem when labeled data does not exist and manual labeling will 
take a lot of time and resources.
2. If the dataset does not have anomalies yet - we can not train a model to predict anomalies.
3. Supervised models do not work well with new anomaly types that were not observed during model train. For example, our model 
shows excellent results for detecting anomalies related to temperature conditions. But the same model does not detect mechanical 
wear because such problems were not observed in the training dataset.

#### Unsupervised anomaly detection 
The main advantage of unsupervised classification algorithms is that they do not need labeled datasets for model 
training. Thanks to this, such algorithms suit well for automated anomaly detection in various use-cases like
asset monitoring, process fault detection, equipment prediction maintenance. 

The second advantage - unsupervised models show good results in detecting abnormal 
patterns that were not observed before. Supervised algorithms focused on finding known anomalies, and unsupervised trained to tell 
how far the current observation is from the expected.   

The most popular unsupervised clustering and classification algorithms are - 
[**K-means, DBSCAN, Gaussian Mixture, Agglomerative Hierarchy clustering**](https://towardsdatascience.com/k-means-dbscan-gmm-agglomerative-clustering-mastering-the-popular-models-in-a-segmentation-c891a3818e29/){:target="_blank"}.


## How automated unsupervised anomaly detection works
Let’s split the anomaly detection task into smaller steps:
1. Collect data
2. Normalize data
3. Split data into segments
4. Extract features for each segment
5. Train anomaly detection model to mark a segment as **good** or **abnormal**
6. Calculate anomaly score for abnormal segments
7. Validate results
8. Apply the model to detect anomalies in realtime

Trendz Analytics has built-in instruments to perform all those steps with minimal configuration. It actually takes 
few clicks to create an anomaly detection model with default properties. But for understanding how it works in the 
background we will explain in detail what should be done in each step and show how to use unsupervised machine learning 
algorithms for automated anomaly detection.


#### How automated unsupervised anomaly detection works
**Step 1**: We have collections of data segments from sensors. Each segment is a point. Features of the segment are 
point coordinates. 

**Step 2**: The clustering algorithm iteratively split all segments into different clusters. Almost all methods use 
distance metric to find similar segments and add them into the same cluster. As the result, we receive few 
clusters and each cluster contains multiple segments that are similar to each other.

**Step 3**: We can compute centroid for each cluster - this central point describes what kind of segments are inside 
the cluster and represent an ideal or good point. Also, we can compute the distance between the centroid and any 
other point. This distance tells us how far that point from the ‘ideal’ point.

**Step 4**: Points that are not included in any clusters after segmentation or are too far from cluster centroid are 
abnormal points and represent an anomaly. We can use distance from centroid as an anomaly score. Higher 
distance - a higher anomaly.

Distance measurement function is very important here because it tells how similar 2 segments are. The simplest 
distance measurement function - Euclidean distance. But you can also use other functions like - Chebyshev, 
Canberra, Manhattan, etc. 

Dynamic Time Warping (DTW) distance.
In case when we want to compare the behavior of the time series and Euclidian distance does not show good 
results, we recommend trying Dynamic Time Warping as a distance measurement function. Dynamic Time Warping
shows good results when you compare distorted intervals or intervals with a phase shift. More details here

## Data segmentation - how to split telemetry into intervals
The segment is a collection of measurements for a time interval. It can be 1 minute/hour/day etc. 
Interval size depends on the type of problem that we solve. The general recommendation - interval should be big 
enough to include data that describes the current state of the device, asset, or process. 

For example, we create a predictive maintenance model for water pumps and want to detect engine abnormalities. 
The pump can work under different loads, but a 5-minute interval would describe how it works and the current state 
of the pump - throughput, energy consumption, vibration, etc. In this case, we will group data from pumps into 
segments with 5-minute intervals.
Also, we analyzing water pump utilization to understand resource usage patterns and want to detect anomalies 
that would identify unauthorized usage, leakage, or theft. In this case, the segment interval would be 1 day
because such interval describes how and when the pump was utilized.
Similar logic applied in other business areas - environment conditions tracking, electricity grid, soil and 
crop monitoring, equipment management.

## Data normalization
All machine learning algorithms require normalized input data for training. We have to:
1. Map non-numeric values, like boolean or text, into numeric values.
2. Filter noise from the dataset, like extremely abnormal readings.
3. Fill gaps in the data. In real life, you will always have gaps in the data because of different connectivity\software issues. Gaps should be removed to increase anomaly detection model accuracy.
4. Scale all raw telemetry values into [0;1]   range.

Trendz does all those steps automatically. Good articles that describes why it is important and how to do this:
* [Why Data Normalization is necessary for Machine Learning models](https://medium.com/@urvashilluniya/why-data-normalization-is-necessary-for-machine-learning-models-681b65a05029){:target="_blank"}
* [Understand Data Normalization in Machine Learning](https://towardsdatascience.com/understand-data-normalization-in-machine-learning-8ff3062101f0){:target="_blank"}


## Feature extraction
The final step is to extract features from each segment because all ML algorithms work with feature vectors 
or simply numeric arrays. Each segment represents a single point, feature vector describes that point. 
An anomaly detection model will train to assign correct classification for each point (segment). 

There are 2 different approaches for computing features:
1. The **behavior-based approach** used when behavior inside a segment is important for us. Such features 
describe the correlation between telemetries over time and order how telemetry changed inside a segment.
2. In the **feature-based approach**, we compute the statistic for raw telemetry data - min, max, variation, 
distribution, slope etc.

If you don’t know what approach to select - try both and compare results. It’s really easy because in Trendz 
you just select features type from the dropdown and click ‘Train Model’ and that’s all. You don’t need to 
implement feature extraction logic all alone.

If the model that we are creating uses only 1 telemetry field, for example, temperature, for detecting anomalies, 
then it is called a univariate model. But more popular are multivariate models - multiple telemetries are used. 
In some cases, it is useful to add an attribute of the device to the model. For example, firmware version or 
device location may be important knowledge that helps to detect abnormal behavior.



## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}
