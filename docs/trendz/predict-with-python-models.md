---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Custom python models
description: Custom python models description
---


* TOC
{:toc}

You can add new prediction models into Trendz by writing a custom Python code. This code will be executed on the server side and will have access to the whole input dataset that includes required telemetries and attributes data. 
You can import required Python libraries and use them in your code to forecast required metric based on input data.

## Multivariable python model example
This template demonstrates how to create and implement a custom multivariable prediction model in Trendz using Python. Custom models allow you to extend the platform's built-in prediction capabilities by leveraging specific algorithms, incorporating additional variables, or fine-tuning parameters to meet unique business needs.

```python
#####################################################
# Prediction Method: Linear Regression

from sklearn.preprocessing import MinMaxScaler, StandardScaler
from sklearn.linear_model import LinearRegression
import pickle
import numpy as np
import os 

class CustomModel(IModel):

    def __init__(self, value_transformer=None, timestamp_transformer=None):
        self.model = None
        self.timestamp_transformer = timestamp_transformer if timestamp_transformer else StandardScaler()
        self.value_transformer = value_transformer if value_transformer else MinMaxScaler()
        self.sum_x = 0
        self.sum_y = 0
        self.sum_xy = 0
        self.sum_xx = 0
        self.n = 0

    def init_state(self):
        self.model = LinearRegression()

    def train(self, data, additionalData=None):
        # Prepare
        ts = np.array([point[0] for point in data]).reshape(-1, 1)
        values = np.array([point[1] for point in data]).reshape(-1, 1)
        self.timestamp_transformer.fit(ts)
        self.value_transformer.fit(values)
        ts_scaled = self.timestamp_transformer.transform(ts)
        values_scaled = self.value_transformer.transform(values)

        # Fit
        self.sum_x = np.sum(ts_scaled)
        self.sum_y = np.sum(values_scaled)
        self.sum_xy = np.sum(ts_scaled * values_scaled)
        self.sum_xx = np.sum(ts_scaled ** 2)
        self.n = len(ts_scaled)

        self.model.fit(ts_scaled, values_scaled)

    def partial_fit(self, data, additionalData=None):
        # Prepare
        ts = np.array([point[0] for point in data]).reshape(-1, 1)
        values = np.array([point[1] for point in data]).reshape(-1, 1)
        # self.timestamp_transformer.partial_fit(ts)
        # self.value_transformer.partial_fit(values)
        ts_scaled = self.timestamp_transformer.transform(ts)
        values_scaled = self.value_transformer.transform(values)

        # Fit
        self.sum_x += np.sum(ts_scaled)
        self.sum_y += np.sum(values_scaled)
        self.sum_xy += np.sum(ts_scaled * values_scaled)
        self.sum_xx += np.sum(ts_scaled ** 2)
        self.n += len(ts_scaled)

        if self.n > 0:
            mean_x = self.sum_x / self.n
            mean_y = self.sum_y / self.n
            slope = (self.sum_xy - self.n * mean_x * mean_y) / (self.sum_xx - self.n * mean_x ** 2)
            intercept = mean_y - slope * mean_x
            self.model.coef_ = np.array([[slope]])
            self.model.intercept_ = np.array([intercept])

    def predict(self, timestamps):
        ts = np.array(timestamps).reshape(-1, 1)
        ts_scaled = self.timestamp_transformer.transform(ts)
        predictions_scaled = self.model.predict(ts_scaled)
        predictions = self.value_transformer.inverse_transform(predictions_scaled)
        return list(zip(timestamps, predictions.flatten()))

    def save_state(self, file_path):
        with open(file_path, 'wb') as file:
            state = {
                'model': self.model,
                'value_transformer': self.value_transformer,
                'timestamp_transformer': self.timestamp_transformer,
                'sum_x': self.sum_x,
                'sum_y': self.sum_y,
                'sum_xy': self.sum_xy,
                'sum_xx': self.sum_xx,
                'n': self.n
            }
            pickle.dump(state, file)

    def load_state(self, file_path):
        with open(file_path, 'rb') as file:
            state = pickle.load(file)
            self.model = state['model']
            self.value_transformer = state['value_transformer']
            self.timestamp_transformer = state['timestamp_transformer']
            self.sum_x = state['sum_x']
            self.sum_y = state['sum_y']
            self.sum_xy = state['sum_xy']
            self.sum_xx = state['sum_xx']
            self.n = state['n']

    def name(self):
        return "LinearRegressionModel"

#####################################################
```

## Next Steps

{% assign currentGuide = "CalculatedFields" %}{% include templates/trndz-guides-banner.md %}
