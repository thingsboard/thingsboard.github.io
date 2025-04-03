- **On every message**: perform the action for every incoming message.
- **Deduplicate**: perform the action only for the first message from a specific originator within a configurable time interval. Minimum value for a deduplication interval is 1 second and maximum is 1 day.
  To determine whether a message falls within a previously processed interval, the system calculates a deduplication interval number using the following formula:
  ```java
  long intervalNumber = ts / deduplicationIntervalMillis;
  ```
  Where:
    - `ts` is the timestamp used for deduplication (in milliseconds).
    - `deduplicationIntervalMillis` is the configured deduplication interval (converted automatically to milliseconds).
    - `intervalNumber` determines the logical time bucket the message belongs to.

  The timestamp `ts` is determined using the following priority:
    1. If the message metadata contains a `ts` property (in UNIX milliseconds), it is used.
    2. Otherwise, the time when the message was created is used.

  All timestamps are UNIX milliseconds (in UTC).
- **Skip**: never perform the action.
