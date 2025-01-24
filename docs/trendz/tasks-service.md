---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Tasks 
description: Task Service in Trendz
---

* TOC
{:toc}

## Tasks Tab

The Task Service in Trendz is a key feature for managing and running tasks related to data processing and calculations. It takes care of scheduling, running, and monitoring these tasks,
ensuring that data updates and calculations happen efficiently and on time. This service is essential for automating and optimizing the handling of both real-time data and reprocessing historical data, helping you manage large datasets effectively.
To see your tasks, go to the Tasks section in the main menu. Here, you will find a list of all tasks with a brief overview. Use the Job Type Filter to choose between different types of tasks:
* Build Alarm Report
* Build View Report
* Load View Filter
* Refresh Cache
* Save Telemetry to TB
* Build Anomaly Model
* Find Anomalies
* Anomaly Autodiscovery
* Test Calculation
* Save Calculation Results to TB
* Train prediction model
* Save prediction model result to TB
* Calculate model accuracy

![image](/images/trendz/tasks-types.png)

**Stop All Tasks** button is designed to immediately stop all running executions of tasks in the system. This action terminates any tasks that are currently in progress but does not delete the tasks themselves or affect their configurations.

**Clear All Executions** button removes the execution history for all tasks. By default, execution records are retained for 3 days, but this button can be useful if you need to reset task logs or clear older execution records manually. 
This action only clears the execution history and does not impact the current operation or future execution of the tasks.

### Selecting a Task

Click on a task to view more details about its execution. You’ll see important information such as:
* *Time Started:* When the task started.
* *Duration:* How long the task has been running.
* *Time Finished:* When the task finished or is expected to finish.
* *Status:* The current state of the task (Created, Running, Finished, Failed, Canceled, Lost, None).

### Managing Tasks

Within the task details, you can also manage tasks by:
* *Execute Task:* Trigger a specific task to execute immediately.
* *Stop Task:* Stop a running task if needed.

The Tasks section helps you easily monitor and control the execution of tasks, keeping your system running smoothly. From the task details, you can quickly go to the related entity for further management.

![image](/images/trendz/tasks-go-to-entity.png)

## Executions Tab

The Execution tab within the Tasks section provides a detailed view of all task executions. Here, you can track the progress and outcomes of each task in real-time.
The tab lists all executions, allowing you to filter them by their status: **All, Created, Running, Failed**.
For each execution, you can see details such as: **Time Started, Duration, Time Finished, Status.**
This tab is crucial for monitoring the performance and health of your tasks, enabling you to quickly identify and address any issues that arise during execution.

![image](/images/trendz/tasks-executions.png)

