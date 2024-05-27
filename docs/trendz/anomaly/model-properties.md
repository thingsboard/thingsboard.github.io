---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Anomaly detection model properties
description: Anomaly detection model properties
---

* TOC
{:toc}

## Clustering algorithm
This property defines what clustering ML algorithm will be used for anomaly detection. Currently supported algorithms are:

* `K-Means` - Anomaly detection algorithm that partitions data into clusters based on similarity, identifying anomalies as data points significantly different from their assigned cluster centroid.
* `DBSCAN` - Anomaly detection algorithm that groups data points based on density and connectivity, identifying anomalies as points not belonging to any cluster or isolated in low-density regions.
* `Custom` - Anomaly detection algorithm that models the data distribution as a mixture of Gaussian distributions. It identifies anomalies as data points that have low probability under the Gaussian mixture model, indicating unusual patterns or behaviors in the data.

## Segment time range
During data preparation step for anomaly detection Trendz loads telemetry data and split it into multiple segments. Model is trained to tell does current segment is abnormal or no and assign anomaly score for segment. 
It means that if we want to discover anomalies in short time ranges, for example device send data every 10 seconds and anomaly can occur and disappear in 1 minute time range. In cases when devices report data once per hour - 
it means that minimal time range that we analyze should be minimum 3 hours. 

This property defines time interval duration for each segment.

## Comparison type
This property affects feature extraction process and identifies how features are computed based on fields in the incoming data. Currently supported comparison types are:

* `Behaviour based` - capture the overall patterns, dynamics, and trends exhibited by the time series data. They provide insights into the holistic behavior of the data over time, allowing for the identification of recurring patterns, anomalies, or deviations. These features analyze the data as a whole and focus on capturing the underlying behavior or patterns present in the time series.
* `Feature based` - focus on specific measurements or attributes derived from the raw time series data. These features extract relevant information or characteristics from the data, such as statistical properties (e.g., mean, standard deviation) or domain-specific measurements. Feature-based features provide a more detailed and specific analysis by considering individual aspects or properties of the time series data.

## Distance function
You configure how distance between two points in feature space is computed. Currently supported distance functions are:

* `Euclidean` - Euclidean distance is the most commonly used distance measure. It is the straight-line distance between two points in Euclidean space. It is the most obvious way of representing distance between two points.
* `Dynamic time warping` - measuring similarity between time series data, accommodating variations in their temporal alignment. DTW considers flexible matching of corresponding points, accommodating differences in speed or time shifts. It enables effective clustering of time series data with varying patterns or lengths, capturing similarities that traditional distance measures may overlook.
* `Manhattan` - measures the total absolute difference between corresponding points in time series, suitable for capturing temporal variations in clustering.
* `Chebyshev` - focuses on the maximum absolute difference between corresponding points in time series, effectively capturing the largest temporal variations in clustering.
* `Canberra` - function measures the weighted absolute difference between corresponding points in time series, considering both magnitude and relative changes, beneficial for clustering time series with varying scales or proportions.

## Time window type
This property defines how time window for segments is computed when preparing raw telemetry for clustering. Currently supported time window types are:

* `Fixed range` - time window for segments are fixed and do not overlap.
* `Sliding window` - time window for segments are sliding and overlap.

In case of `sliding windows` user can define `Sliding step percent` property to define at what percent sliding window should move.

## Other properties

* `Cluster count` - number of clusters that will be used for anomaly detection.
* `Max iterations` - maximum number of iterations that will be used for building anomaly detection model.
* `Score threshold percent` - initial factor that tells how many abnormal segments we expect to have in training dataset.
* `Aggregation` - defines function used to aggregate data points inside segment before feature extraction.
* `Min points interval` - minimal number of data points inside segment. If segment contains less data points - it will be skipped.
* `Segment points` - amount of points aggregated inside segment.
* `Min interval duration` - minimal time interval for a segment to include into anomaly detection model training process.
* `Max time gap` - if segment contains data gaps with duration bigger than this property - segment would be skipped.
* `Max points count` - maximum amount of segment points analyzed during training process.
* `Min anomaly duration` - if discover anomaly has duration smaller that his property - anomaly would be discarded.
* `Max segments count` - maximum amount of segments extract for training dataset.
* `Join clusters` - define system behavior when 2 segments that are near each other and they both have anomaly, but they belong to different clusters. 

## Next Steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}