---
layout: docwithnav-trendz
title: Overview
description: Introduction to anomaly detection in Trendz

---

* TOC
{:toc}

## Anomaly Detection Theory

Anomaly detection identifies unusual patterns or deviations in time-series data that differ from expected behavior.

### Supervised vs Unsupervised Anomaly Detection

- **Supervised Anomaly Detection:**  
  Requires labeled datasets where normal and anomalous segments are identified in advance.  
  Models learn to classify data points based on these labels. Common algorithms include KNN, SVM, Logistic Regression, Decision Trees, and LSTM.  
  *Limitations:* Needs extensive labeled data, struggles to detect new anomaly types not present in training.

- **Unsupervised Anomaly Detection:**  
  Does not require labeled data. Models learn normal behavior patterns by grouping similar data segments into clusters and detect anomalies as points that deviate significantly from these clusters.  
  Common algorithms include K-Means, DBSCAN, Gaussian Mixture Models, and Hierarchical Clustering.  
  *Advantages:* Automatically detects unknown anomaly types, suitable for real-world scenarios with limited labeled data.

**Trendz currently supports only unsupervised machine learning algorithms** for anomaly detection, leveraging clustering-based methods to detect anomalies in time-series data.

### Key Concepts in Trendz Anomaly Detection

- **Anomaly Score:** Numeric value representing how far a behavior deviates from expected patterns.
- **Anomaly Score Index:** Combines anomaly score with anomaly duration to prioritize impactful anomalies.

### How Unsupervised Anomaly Detection Works in Trendz

1. Collect and segment telemetry data.
2. Normalize and preprocess data.
3. Extract features describing each segment.
4. Cluster segments into groups representing normal behavior.
5. Compute anomaly scores based on distance from cluster centroids.
6. Apply model in real-time for continuous anomaly detection.

## Tabs Overview

### Anomaly Models Tab

To access Anomaly Models page, click on the icon labeled *Anomaly Models* located on the left side of the workspace.
Here it's possible to check next characteristics.

* Creation Date;
* Name;
* Type (Currently available only *CLUSTERING*);
* Status:
  - READY - ready for anomaly detection;
  - QUEUED - in queue waiting for start building job;
  - IN PROGRESS - in the middle of training;
  - CANCELLED - canceled, need to be rebuilt;
  - FAILED - failed, need to be rebuilt;
* Anomaly autodiscovery (read more here);
* Saving telemetry (read more here);
* Alarm auto creation (read more here);

Also, it's possible to perform next actions here:

* **Create Model Action**
* **Check Model Action**
* **Delete Model Action**
* **Rename Model Action**

### Input Tab

Here it's possible to:
* Rename the model.
* Copy model.
* Revert model.
* Configure jobs.
* Change properties.
  
* Build model.
Note: 

### Summary Tab

### Review Tab

### Cluster Info Tab

### Tasks Tab
