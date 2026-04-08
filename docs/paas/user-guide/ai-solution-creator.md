---
layout: docwithnav-paas
assignees:
- imatveieva
title: AI Solution Creator
description: Generate IoT solutions automatically using AI

first-chat-message:
    0:
        image: /images/user-guide/ai-solution-creator/first-chat-message.png
        title: 'Type your use case description in the prompt field.'

assumptions-and-questions:
    0:
        image: /images/user-guide/ai-solution-creator/assumptions-and-questions.png
        title: 'The AI Agent shares its assumptions and asks clarifying questions.'
    1:
        image: /images/user-guide/ai-solution-creator/answers.png
        title: 'Answer the questions, and the AI Agent confirms the final requirements.'

entity-profiles:
    0:
        image: /images/user-guide/ai-solution-creator/entity-profiles-table.png
        title: 'Entity profiles in table view showing all entities with their types and data.'
    1:
        image: /images/user-guide/ai-solution-creator/entity-profiles-schema.png
        title: 'Entity profiles in schema view showing the hierarchy of entity relations.'
    2:
        image: /images/user-guide/ai-solution-creator/entity-profiles-info.png
        title: 'Click an entity to see its full details: scope, description, attributes, telemetry, and relations.'

iam:
    0:
        image: /images/user-guide/ai-solution-creator/iam.png
        title: 'IAM section showing roles with their name and operations.'
    1:
        image: /images/user-guide/ai-solution-creator/iam-info.png
        title: 'Click a role to see its full details: name, operations, and description.'

calculated-fields:
    0:
        image: /images/user-guide/ai-solution-creator/calculated-fields.png
        title: 'Calculated fields section showing derived metrics with field type and entity profile.'
    1:
        image: /images/user-guide/ai-solution-creator/calculated-fields-info.png
        title: 'Click a field to see its full details: name, entity profile, field type, and description.'

alarms:
    0:
        image: /images/user-guide/ai-solution-creator/alarms.png
        title: 'Alarms section showing alarm rules with type, severity, entity profile, and condition.'
    1:
        image: /images/user-guide/ai-solution-creator/alarms-info.png
        title: 'Click an alarm to see its full details: type, severity, entity profile, and condition.'

update-descriptor-chat:
    0:
        image: /images/user-guide/ai-solution-creator/update-descriptor-chat.png
        title: 'Describe changes in natural language. Here the user asks to add a dailyCost telemetry and a tariffRate attribute.'
    1:
        image: /images/user-guide/ai-solution-creator/update-descriptor-chat-entity-info-telemetry.png
        title: 'The updated entity profile now includes the new dailyCost telemetry key.'
    2:
        image: /images/user-guide/ai-solution-creator/update-descriptor-chat-cf-info.png
        title: 'A new calculated field was added based on the request.'

update-descriptor-json:
    0:
        image: /images/user-guide/ai-solution-creator/update-descriptor-json.png
        title: 'Make precise changes to entity profiles, alarms, or other settings directly in JSON.'
    1:
        image: /images/user-guide/ai-solution-creator/update-descriptor-json-ready.png
        title: 'The updated descriptor after saving your JSON changes.'
    2:
        image: /images/user-guide/ai-solution-creator/update-descriptor-json-alarm-info.png
        title: 'The architecture reflects your JSON edits.'

designing-dashboards:
    0:
        image: /images/user-guide/ai-solution-creator/designing-dashboards.png
        title: 'The AI Agent designs the dashboard structure based on your approved architecture.'
    1:
        image: /images/user-guide/ai-solution-creator/dashboards.png
        title: 'The proposed dashboards with descriptions of what each one shows and who it targets.'

update-dashboard-chat:
    0:
        image: /images/user-guide/ai-solution-creator/update-dashboard-chat-ready.png
        title: 'The AI Agent confirms the dashboard updates.'

update-dashboard-json:
    0:
        image: /images/user-guide/ai-solution-creator/update-dashboard-json.png
        title: 'Edit the dashboard configuration as JSON in advanced mode.'
    1:
        image: /images/user-guide/ai-solution-creator/update-dashboard-json-ready.png
        title: 'The updated dashboard descriptor after saving your changes.'

generate-dashboards-again:
    0:
        image: /images/user-guide/ai-solution-creator/generate-dashboards-again.png
        title: 'Click Generate again to get a new set of dashboard proposals.'

creating-entities:
    0:
        image: /images/user-guide/ai-solution-creator/creating-entities.png
        title: 'The AI Agent creates all entities and configures the solution.'

solution-info:
    0:
        image: /images/user-guide/ai-solution-creator/solution-info.png
        title: 'Solution summary showing created dashboards and devices with their status.'
    1:
        image: /images/user-guide/ai-solution-creator/solution-info-tail.png
        title: 'Solution summary showing alarms, roles, and users.'

main-dashboards:
    0:
        image: /images/user-guide/ai-solution-creator/main-dashboard.png
        title: 'Building overview dashboard with power demand, energy consumption, floors, and alarms.'
    1:
        image: /images/user-guide/ai-solution-creator/main-dashboard-child-state.png
        title: 'Floor performance dashboard with energy meters, power and energy trends, and alarms.'
    2:
        image: /images/user-guide/ai-solution-creator/main-dashboard-child-statistics.png
        title: 'Meter details with real-time power history, energy analytics, and cumulative energy trend.'

chat-settings:
    0:
        image: /images/user-guide/ai-solution-creator/chat-settings.png
        title: 'Use the context menu to rename, uninstall, or delete a solution chat.'

solution-info-error-warning:
    0:
        image: /images/user-guide/ai-solution-creator/solution-info-error-warning.png
        title: 'Solution summary showing errors and warnings. Hover over the status icon to see the details.'

error-entity-limit-reached:
    0:
        image: /images/user-guide/ai-solution-creator/error-entity-limit-reached.png
        title: 'Devices failed to create because the subscription entity limit was reached.'

out-of-ai-credits:
    0:
        image: /images/user-guide/ai-solution-creator/out-of-ai-credits.png
        title: 'AI credits exhausted. Click Update next to the AI credits indicator to add more.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/ai-solution-creator.md %}
