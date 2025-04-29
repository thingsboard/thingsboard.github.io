TBMQ provides logging for integration-related events, allowing users to **debug and troubleshoot** integration behavior.
Below are three 'Event' types:

{% assign integrationEvents = '
    ===
        image: /images/mqtt-broker/user-guide/ui/integration-events-1.png,
        title: **Lifecycle Events** – Logs events such as `Started`, `Created`, `Updated`, `Stopped`, etc.
    ===
        image: /images/mqtt-broker/user-guide/ui/integration-events-2.png,
        title: **Statistics** – Provides insights into integration performance, including the number of processed messages and occured errors.
    ===
        image: /images/mqtt-broker/user-guide/ui/integration-events-3.png,
        title: **Errors** – Captures failures related to authentication, timeouts, payload formatting, or connectivity issues with the external service.
'
%}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=integrationEvents %}