- **On every message**: perform the action for every incoming message.
- **Deduplicate**: groups messages from each originator into time intervals and only performs the action only for the first message within each interval. 
  Duration of the interval is specified by **Deduplication interval** setting.
  To determine the interval a message falls within, the system calculates a deduplication interval number using the following formula:
  ```java
  long intervalNumber = ts / deduplicationIntervalMillis;
  ```
  Where:
    - `ts` is the timestamp used for deduplication (in milliseconds).
    - `deduplicationIntervalMillis` is the configured **Deduplication interval** (converted automatically to milliseconds).
    - `intervalNumber` determines the logical time bucket the message belongs to.

  The timestamp `ts` is determined using the following priority:
    1. If the message metadata contains a `ts` property (in UNIX milliseconds), it is used.
    2. Otherwise, the time when the message was created is used.

  All timestamps are UNIX milliseconds (in UTC).

  **Example** 

  With a 60-second deduplication interval:
  - Device sends messages at 10:00:15, 10:00:45, and 10:01:10
  - The first two messages (10:00:15 and 10:00:45) fall in the same interval - only the message at 10:00:15 is processed
  - The message at 10:01:10 falls in the next interval, so it gets processed
- **Skip**: never perform the action.
