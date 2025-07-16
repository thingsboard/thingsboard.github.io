- **Skipping database storage**

  Choosing to disable one or more persistence actions (for instance, skipping database storage for Time series or Latest values while keeping WS updates enabled) introduces the risk of having only partial data available:
    - If a message is processed only for real-time notifications (WebSockets) and not stored in the database, historical queries may not match data on the dashboard.
    - When processing strategies for Time series and Latest values are out-of-sync, telemetry data may be stored in one table (e.g., Time series) while the same data is absent in the other (e.g., Latest values).

- **Disabling WebSocket (WS) updates**

  If WS updates are disabled, any changes to the time series data won’t be pushed to dashboards (or other WS subscriptions).
  This means that even if a database is updated, dashboards may not display the updated data until browser page is reloaded.

- **Skipping calculated field recalculation**

  If telemetry data is saved to the database while bypassing calculated field recalculation, the aggregated value may not update to reflect the latest data.
  Conversely, if the calculated field is recalculated with new data but the corresponding telemetry value is not persisted in the database, the calculated field's value might include data that isn’t stored.

- **Different deduplication intervals across actions**

  When you configure different deduplication intervals for actions, the same incoming message might be processed differently for each action.
  For example, a message might be stored immediately in the Time series table (if set to *On every message*) while not being stored in the Latest values table because its deduplication interval hasn’t elapsed.
  Also, if the WebSocket updates are configured with a different interval, dashboards might show updates that do not match what is stored in the database.

- **Deduplication cache clearing**

  The deduplication mechanism uses an in-memory cache to track processed messages by interval. This cache retains up to 100 intervals for a maximum of 2 days, but entries may be cleared at any time due to its use of soft references.
  As a result, deduplication is not guaranteed, even under light loads. For example, with a deduplication interval of one day and messages arriving once per hour, each message may still be processed if the cache is cleared between arrivals.
  Deduplication should be treated as a performance optimization, not a strict guarantee of single processing per interval.

- **Whole message deduplication**

  It’s important to note that deduplication is applied to the entire incoming message rather than to individual time series keys.
  For example, if the first message contains key A and is processed, and a subsequent message (received within the deduplication interval) contains key B, the second message will be skipped—even though it includes a new key.
  To safely leverage deduplication, ensure that your messages maintain a consistent structure so that all required keys are present in the same message, avoiding unintended data loss.
