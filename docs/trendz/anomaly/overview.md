---
layout: docwithnav-trendz
title: Overview
description: Introduction to anomaly detection in Trendz

---

* TOC
{:toc}

## Anomaly Detection Theory

**Anomaly detection** is the process of identifying unexpected behavior in telemetry data - patterns that differ 
significantly from what is considered normal. These anomalies can indicate system malfunctions, equipment degradation, 
security breaches, or operational inefficiencies.

In modern monitoring and analytics, anomaly detection is essential for:
- Predictive maintenance
- Early fault detection
- Operational efficiency

**Trendz** provides a powerful, out-of-the-box solution for anomaly detection, capable of automatically finding abnormal 
patterns in time-series data without requiring manual thresholding or expert labeling. For advanced users, Trendz also 
offers full control over the model configuration process - including input preparation, feature extraction, distance 
function tuning, and scoring logic - all within a convenient and intuitive interface.

### Key Concepts in Trendz Anomaly Detection

- **Anomaly Score:** Numeric value representing how far a behavior deviates from expected patterns.
- **Anomaly Score Index:** Combines anomaly score with anomaly duration to prioritize impactful anomalies.

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

### How Unsupervised Anomaly Detection Works in Trendz

1. Collect and segment telemetry data.
2. Normalize and preprocess data.
3. Extract features describing each segment.
4. Cluster segments into groups representing normal behavior.
5. Compute anomaly scores based on distance from cluster centroids.
6. Apply model in real-time for continuous anomaly detection.

## Tabs Overview

### Anomaly Models Tab

To access the **Anomaly Models** page, click on the icon labeled *Anomaly Models* located on the left side of the workspace.

This page displays key characteristics of each model:

- **Creation Date**
- **Name**
- **Type** – Currently, only *CLUSTERING* is supported
- **Status**:
  - **READY** – The model is ready for anomaly detection
  - **QUEUED** – Waiting for the training job to start
  - **IN PROGRESS** – Currently being trained
  - **CANCELLED** – Training was canceled; needs rebuilding
  - **FAILED** – Training failed; needs rebuilding
- **Anomaly autodiscovery** – [Read more here](/docs/trendz/anomaly/refresh-reprocess)
- **Saving telemetry** – [Read more here](/docs/trendz/anomaly/save-to-tb)
- **Alarm auto creation** – [Read more here](/docs/trendz/anomaly/alarms)

**Available Actions:**

- **Create Model**
  - Click the *Create model* button in the top-right corner of the screen to create a new anomaly model.
  - You will be navigated to the **Input** tab to configure the model.
  - [Read more about the Input tab here](/docs/trendz/anomaly/overview#input-tab)

- **Check Model**
  - Click on any model row to open and inspect it.
  - This will redirect you to the **Input** tab.
  - [Read more about the Input tab here](/docs/trendz/anomaly/overview#input-tab)

- **Delete Model**
  - Click the three-dot menu in the *Actions* column and select **Delete**.
  - Confirm the deletion in the confirmation dialog.

- **Rename Model**
  - Click the three-dot menu in the *Actions* column and select **Rename**.
  - A text field will appear in the *Name* column.
  - Type the new name and press **Enter** to save changes.

### Input Tab

The **Input** tab allows you to manage and configure core aspects of your anomaly model. You can:

- **Rename the Model**
  - Click the pencil icon next to the model name, enter a new name, and press **Enter**.
  - To apply the new name, click **Build Model**. A rebuild is **not** required for this change.

- **Revert Model**
  - Click the **Revert** button in the upper-right corner of the screen to discard unsaved changes and restore the last saved state of the model.

- **Configure Jobs**
  - Job configuration is available only for models in the **READY** state.
  - Click the **Jobs** button in the upper section of the screen to open the Jobs configuration popup.
  - Here, you can configure the **refresh job** (read more about refresh jobs [here](/docs/trendz/anomaly/refresh-reprocess#anomaly-refresh)).

- **Change Properties**
  - You can update various anomaly model properties in the **Input** tab (read more about model properties [here](/docs/trendz/anomaly/build)).
  - To apply changes, click **Build Model**. A rebuild is **not** required unless you change:
    - **Anomaly Model Name**
    - **Telemetry key**
    - **Telemetry storage frequency**
    - **Alarm Configuration**

- **Build Model**
  - Use the **Build Model** button to save changes or initiate a rebuild.
  - If a rebuild is necessary, a confirmation popup will appear.
  - ⚠️ **Caution**: Rebuilding the model will delete all existing anomalies and disable the refresh job.

### Summary Tab

### Review Tab

### Cluster Info Tab

### Tasks Tab

## Next Steps

{% assign currentGuide = "AnomalyDetection" %}{% include templates/trndz-guides-banner.md %}
