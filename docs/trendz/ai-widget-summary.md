---
layout: docwithnav-trendz
title: AI Widget Summary
description: Step-by-step guide to set up AI Widget Summary.

trendz-js-summary-module-install:
  0:
    image: /images/trendz/ai/widget-ai-summary/install-trendz-js-module-1.png
    title: Open the Settings page in the Trendz App and click the Upload Module button.
  1:
    image: /images/trendz/ai/widget-ai-summary/install-trendz-js-module-2.png
    title: Confirm that the module has been uploaded successfully and appears in the list.
    
trendz-summary-custom-action:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-1.png
    title: Open the dashboard containing the widget you want to enhance and switch to Edit mode.
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-2.png
    title: Open the widget settings.
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-3.png
    title: Navigate to the Actions tab and add new action.
  3:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-4.png
    title: Select Custom action as action type.
  4:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-5.png
    title: If you're on **v3.9+**, select the uploaded **Trendz Summary Module**..
  5:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-6.png
    title: If you're on **v3.6–v3.8**, paste the custom JavaScript code manually.
  6:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-7.png
    title: Inside the action, call the `getAnalytics()` method.
  7:
    image: /images/trendz/ai/widget-ai-summary/trendz-summary-action-8.png
    title: After configuring the action, a header button will appear on your widget. When you click this button, a dialog window will open, showing a summary generated based on your widget's data and the Trendz prompt.    

trendz-ai-summary-trendz-widget-example:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-widget-example-1.png
    title: 1. Press the "AI summary" button in the upper corner of the widget.
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-widget-example-2.png
    title: 2. See view the AI summary at the top of the Trendz widget.

trendz-ai-summary-trendz-enable-button:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-setting-common.png
    title: Open the desired view. Go to "View Settings".
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-enable-button-1.png
    title: Go to the "View Mode Fields" section. Choose the preferred mode to show or hide the AI Summary button.
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-enable-button-2.png
    title: Save the changes.

trendz-ai-summary-trendz-set-up-prompt:
  0:
    image: /images/trendz/ai/widget-ai-summary/trendz-setting-common.png
    title: Open the desired view. Go to "View Settings".
  1:
    image: /images/trendz/ai/widget-ai-summary/trendz-set-up-prompt-1.png
    title: Go to the "AI Assistant" section. Choose the preferred prompt from the dropdown menu. 
  2:
    image: /images/trendz/ai/widget-ai-summary/trendz-set-up-prompt-2.png
    title: Save the changes.
---

* TOC 
{:toc}

AI Widget Summary is a flexible feature that allows integration of AI capabilities into any ThingsBoard Widgets,
including full customization of AI prompts and the interaction flow.

Several ways are available for integrating AI summaries with different types of widgets.

## ThingsBoard Widgets
You can easily integrate custom prompts from Trendz to generate a summary of the data displayed in your ThingsBoard widgets.
This feature is available starting from **ThingsBoard PE v3.6 and higher**.
### Trendz Summary JS Module
Depending on your ThingsBoard version, the setup process is slightly different:

#### ThingsBoard v3.9 and Higher
Since v3.9, ThingsBoard supports using JS Modules directly in widget actions, making summary configuration straightforward.
To set up the Trendz Summary Module:
* Open the Settings page in the Trendz App.
* Click the Upload Module button.
* Confirm that the module has been uploaded successfully and appears in the list.

{% include images-gallery.html imageCollection="trendz-js-summary-module-install" %}

Once the module is uploaded, you can easily reference it in the Actions section of your ThingsBoard widget.

#### ThingsBoard v3.6–v3.8
In earlier ThingsBoard versions (v3.6–v3.8), JS Modules cannot be used directly in widget actions. Instead, you will need to manually copy and paste a provided JavaScript code snippet into your custom action.
```js
function getAnalytics(widgetCtx, isDefault, prompt) {
    if(!isDefault && !prompt) {
        throw new Error('You should indicate prompt/promptId or use default prompt');
    }

    const ctx = widgetCtx;
    const $injector = ctx.$scope.$injector;
    const customDialog = $injector.get(ctx.servicesMap.get('customDialog'));
    const widgetService = $injector.get(ctx.servicesMap.get('entityService')).widgetService;
    const jwtToken = localStorage.getItem('jwt_token');
    const {delay, pipe, switchMap, of, map} = ctx.rxjs;
    const title = widgetCtx.widget.config.showTitle && widgetCtx.widget.config.title ? widgetCtx.widget.config.title : '';

    const loaderHTML = `
        <div *ngIf="title" mat-dialog-title>{{title}}</div>
        <div mat-dialog-content style="padding: 0 24px">
            <div *ngIf="!summaryContent" class="flex items-center justify-center">
                <mat-spinner [diameter]="40"></mat-spinner>
            </div>
            <div *ngIf="summaryContent">{{summaryContent}}</div>
        </div>
        <div mat-dialog-actions class="flex items-center justify-end">
            <button mat-raised-button color="primary" (click)="cancel()">Close</button>
        </div>`;

    const dialogConfig = {
        width: '600px',
        maxWidth: '90%'
    }

    customDialog.customDialog(loaderHTML, getAnalyticsController, null, dialogConfig).subscribe()

    function getAnalyticsController(instance) {
        const dataForExport = ctx.defaultSubscription.exportData();
        const summaryData = transformToCsv(dataForExport);
        instance.summaryContent = '';
        instance.title = title;
        instance.cancel = () => instance.dialogRef.close(null);

        getAnalyticsUrl(widgetService, ctx, function (url, error) {
            if (error || !url) {
                console.error('Analytics URL not found.', error);
                instance.dialogRef.close(null);
                return;
            }

            getSummary(ctx, isDefault, prompt, summaryData, jwtToken, url).pipe(delay(200)).subscribe({
                next: (execution) => {
                    fetchTask(ctx, execution, jwtToken, url).subscribe(res => {
                        instance.summaryContent = res || 'Summary wasn`t generated!';
                    });
                },
                error: (error) => {
                    console.error('Error fetching summary:', error);
                    instance.dialogRef.close(null);
                }
            })
        });
    }
}

function transformToCsv(data) {
    if (data && data.length) {
        const header = Object.keys(data[0]).join(';');
        const rows = data.map(obj => Object.values(obj).join(';')).join('\n');
        return `${header}\n${rows}`;
    }
    return '';
}

function getSummary(ctx, isDefault, prompt, summaryData, jwtToken, analyticsLink) {
    let summaryRequest = { data: summaryData };

    if (!isDefault && prompt) {
        summaryRequest = isValidUUID(prompt)
            ? { promptId: prompt, data: summaryData }
            : { prompt: prompt, data: summaryData };
    }

    return ctx.http.post(`${analyticsLink}/apiTrendz/agent/prompts/execute`, summaryRequest, {
        headers: {
            Jwt: jwtToken
        }
    });
}

function fetchTask(ctx, executionId, jwtToken, analyticsLink) {
    return pollExecution(ctx, executionId, jwtToken, analyticsLink).pipe(ctx.rxjs.switchMap(res => {
        if(res.success) {
            if(res.success.status !== 'FINISHED') {
                return fetchTask(ctx, executionId, jwtToken, analyticsLink);
            } else {
                return ctx.rxjs.of(res.success.jsonResult ? res.success.jsonResult.result : null);
            }
        } else if(res.canceled) {
            const errorMessage = buildErrorMessage(res.canceled);
            return ctx.rxjs.of(errorMessage);
        }
    }))
}

function pollExecution(ctx, executionId, jwtToken, analyticsLink) {
    return ctx.http.get(`${analyticsLink}/apiTrendz/task/execution/poll/${executionId}`, {
        headers: { Jwt: jwtToken }
    }).pipe(
        ctx.rxjs.delay(300),
        ctx.rxjs.switchMap(execution => {
            if(!execution) {
                return ctx.rxjs.of({canceled: 'Failed to execute task'});
            }

            if(execution.status === 'CREATED' || execution.status === 'FINISHED' || execution.status === 'RUNNING') {
                return ctx.rxjs.of({success: execution})
            }

            return ctx.rxjs.of({canceled: execution.jsonResult});
        }))
}

function getAnalyticsUrl(widgetService, ctx, callback) {
    widgetService.getWidgetBundles(ctx.pageLink(100, 0, 'analysis_results'), true).subscribe(
        (res) => {
            if (res && res.data && res.data.length) {
                const analyticsBundle = res.data.find(bundle => bundle.alias === 'trendz_bundle')
                if(analyticsBundle) {
                    const analyticsBundleId = analyticsBundle.id.id;
                    widgetService.exportBundleWidgetTypesDetails(analyticsBundleId, true).subscribe(
                        (widgets) => {
                            const analyticsWidget = widgets.find(wdg => wdg.fqn === 'trendz_bundle.trendz_view_latest');
                            if (analyticsWidget && analyticsWidget.descriptor && analyticsWidget.descriptor.resources.length) {
                                const libUrl = analyticsWidget.descriptor.resources[0].url;
                                const url = new URL(libUrl).origin;
                                callback(url, null);
                            } else {
                                callback(null, 'Analytics widget not found');
                            }
                        },
                        (error) => {
                            callback(null, error.message || error);
                        }
                    );
                } else {
                    callback(null, 'Analytics bundle not found');
                }
            } else {
                callback(null, 'Analytics bundle not found');
            }
        },
        (error) => {
            callback(null, error.message || error);
        }
    );
}

function isValidUUID(uuid) {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

function buildErrorMessage(errRes) {
    try {
        let errorMessage = '';

        errRes.forEach((el, idx) => {
            if(el.message && isJsonString(el.message)) {
                errorMessage += errRes.length > idx + 1 ? JSON.parse(el.message).message + '\n' : JSON.parse(el.message).message;
            } else {
                let errMessage = el.message ? el.message : '';
                errorMessage += errRes.length > idx + 1 ? errMessage + '\n ' : errMessage;
            }
        })

        return errorMessage;
    } catch (e) {
        console.log(e);
        return 'Invalid response!'
    }
}

function isJsonString (str) {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
}
```
{: .copy-code}

### Configuring a Custom Action to Get Telemetry Summary

After you have either uploaded the JS Module (v3.9+) or copied the custom code (v3.6–v3.8), follow these steps to configure your widget:

1. Open the dashboard containing the widget you want to enhance and switch to Edit mode.
2. Open the widget settings and navigate to the Actions tab.
3. Select Custom action as action type.
3. Add a new **Action**:
  - If you're on **v3.9+**, select the uploaded **Trendz Summary Module**.
  - If you're on **v3.6–v3.8**, paste the custom JavaScript code manually.
4. Inside the action, call the `getAnalytics()` method with the following parameters:

```js
getAnalytics(widgetContext, useDefaultPrompt, promptIdOrText);
```
Where:
- **`widgetContext`** – the current widget context (**required**).
- **`useDefaultPrompt`** – `true` to use the default Trendz prompt, `false` to use your custom prompt.
- **`promptIdOrText`** (**optional**) – either the **ID** of a saved prompt from Trendz or a **custom prompt text**.

Example:
```js
getAnalytics(widgetContext, false, 'Get telemetry description');
```

After configuring the action, a header button will appear on your widget.
When you click this button, a dialog window will open, showing a summary generated based on your widget's data and the Trendz prompt.

{% include images-gallery.html imageCollection="trendz-summary-custom-action" %}

## Trendz Widgets

AI summary is already integrated into the Trendz Widgets. To retrieve the AI summary for a Trendz widget, 
press the **AI summary** button in the upper corner of the screen. After that, you will be able to view the AI summary 
at the top of the Trendz widget.

{% include images-gallery.html imageCollection="trendz-ai-summary-trendz-widget-example" %}

### Enable AI Summary Button

By default, the AI summary button is disabled for views created before Trendz 1.13.1 and for views created during the 
period when the **AI Assistant Use AI Model** flag was disabled for self-hosted users 
(Find out more about how to set up the AI Assistant module for self-hosted users [here](/docs/trendz/custom-ai-model-configuration/)).

To enable/disable the AI summary button, follow these steps:

1. Open the desired view.
2. Go to **View Settings**.
3. Go to the **View Mode Fields** section.
4. Choose the preferred mode to show or hide the AI Summary button.
5. Save the changes.

Note: button in Trendz application will always be shown (even with checkbox )

{% include images-gallery.html imageCollection="trendz-ai-summary-trendz-enable-button" %}

### Set Up AI Summary Prompt

Additionally, it is possible to choose a prompt that can be used to generate the AI summary.

To set up the AI summary prompt:

1. Open the desired view.
2. Go to **View Settings**.
3. Go to the **AI Assistant** section.
4. Choose the preferred prompt from the dropdown menu.
5. Save the changes.

{% include images-gallery.html imageCollection="trendz-ai-summary-trendz-set-up-prompt" %}

Find out more about creating your own prompts that perfectly fit your task [here](/docs/trendz/ai-assistance-prompts/).

## Next Steps

{% assign currentGuide = "AiAssistant" %}{% include templates/trndz-guides-banner.md %}
