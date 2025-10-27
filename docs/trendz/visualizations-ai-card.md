---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: AI Card
---

* TOC
{:toc}

The AI Card provides a comprehensive view of cumulative telemetry data over a selected time range, enriched with forecasting and an AI-generated summary. This view is designed to help users quickly understand overall performance and expected future behavior without needing to manually analyze raw data..

Key Features:
* **Cumulative Telemetry:** The chart displays cumulative values, where each data point is the sum of the current and all previous readings within the selected period.
* **Forecasting:** The card includes a predicted trend for the upcoming period.
* **AI Summary:** An automatically generated interpretation of the data provides quick insights.

## Base AI Card

To build the Base AI Card, follow these steps:
1. Choose the specific telemetry field you wish to analyze.
2. Drag and drop the selected telemetry into the Value column.
3. Choose the desired time range for analysis. Based on the selected time range, the system calculates prediction. The chart displays real data up to the current timestamp and 
the system generates a prediction for all dates in the selected time range that occur after the current time. 
Example: If today is October 27th and you select the *This Month* time range, the chart will show real data for the first 27 days and a prediction for the remaining 4 days (October 28th, 29th, 30th, and 31st).
4. Once your telemetry and time range are selected, click the *Build Report* button to see the card.

Here is a breakdown of the key elements displayed on the view:
1. Current Cumulative Value: The total cumulative value for the selected time range, including the predicted data.
2. Difference from Previous Period: The absolute and percentage change of the Current Cumulative Value compared to the value from the previous equivalent period.
3. Historical Data: The solid line representing the actual cumulative telemetry data recorded up to the current day.
4. Predicted Data: The dashed line extending past the current date represents the forecast.
5. Previous period trend area: his area represents the cumulative trend for the previous equivalent period, providing a visual baseline for comparison against the current data and prediction.
6. AI Summary: Interpretation of the data, created with the selected AI prompt and based on its analysis of the previous, current, and predicted data.
![image](/images/trendz/base-ai-card.png)

## AI Card Configuration

### Prediction Configuration

**Prediction Method**

As a default prediction method AI Card uses FOURIER TRANSFORMATION method, but you can easily switch to an alternative method.
To select a different prediction model, click on the telemetry field displayed in the Value column to open the settings. Navigate to the Prediction section and select your desired alternative method from the available options.

**Prediction time range**

The primary goal of the AI Card is to provide a complete analysis (historical plus predicted data) for a specific period. 
We recommend selecting predefined ranges such as "This month" or "This year" to ensure the combined real and predicted data covers a meaningful and easy-to-interpret period.
But you can select any custom time range. The system will build the prediction specifically for all dates within that range that are set in the future relative to the current timestamp.

![image](/images/trendz/ai-card-prediction.png)

### AI Summary Configuration

The AI Summary feature provides an automatically generated interpretation of the cumulative telemetry data and trend. You have control over both the feature's visibility and the analysis logic.

If you do not want to use AI features on the card, you can turn off this feature in the Chart settings/AI Assistant menu.
Also, in the Chart settings/AI Assistant menu, you can choose the prompt that will be used to analyze data from your telemetry. The selected prompt guides the focus and content of the generated summary.
How to create your custom prompt you can read in [Trendz AI Prompts Overview](/docs/trendz/ai-assistance-prompts)

![image](/images/trendz/ai-card-summary.png)

### Value Color Threshold Logic

The card uses color-coding to provide immediate visual feedback on the current cumulative value's performance relative to the previous period.

The current cumulative value displayed at the top of the card is color-coded based on the magnitude of the change:

* Blue Color: The value is shown in blue if the difference (absolute percentage change) compared to the previous period is within the range of the default threshold (10%). 
![image](/images/trendz/ai-card-threshold-normal.png)
* Red Color: The value is shown in red if the difference (absolute percentage change) is greater than 10%, signaling a significant deviation or performance shift.
![image](/images/trendz/ai-card-threshold-deviation.png)

**Configuration**

You can customize this sensitivity threshold by changing Value color logic field:
* Default: The system using default 10% to calculate color.
* Custom: The threshold percentage should be set manually.
* Unset: Current cumulative value will not be highlighted with any color, regardless of the difference

![image](/images/trendz/ai-card-threshold-config.png)
