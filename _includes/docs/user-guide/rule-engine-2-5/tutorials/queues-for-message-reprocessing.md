* TOC
{:toc}

## Use case

Let's assume your device is sending temperature and humidity data to ThingsBoard. We will simulate the message sending to some external server using 
Rest API call node.

In this tutorial, we will configure ThingsBoard Rule Engine to use queue with retry failed and timeout messages processing strategy.
Although this scenario is fictional, you will learn how to work with the queue to allow reprocessing messages in case of failure or timeout processing errors
and use this knowledge in real-life applications.

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/{{docsPrefix}}getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/).
  
In addition, you need to have at least one device provisioned in your environment.

## Step 1: Creating the Rule Chain

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/reprocessing_rule_chain.png)

We will add a **"Generator"** node to simulate 6 messages with a 1-second delay.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/generator_reprocessing.png)

All messages will be put into the queue with the name **"HighPriority"**. It uses the message process strategy called **"RETRY_FAILED_AND_TIMED_OUT"** 
{% unless docsPrefix == "paas/" %}(please, refer to [**configuration guide**](/docs/user-guide/install/{{docsPrefix}}config/) for more details){% endunless %} which means that
the failed or timed out messages will be processed again.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/checkpoint_reprocessing.png)

Finally, the messages will be sent to the external server.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/rest_api.png)

## Step 2: External server configuration

Let's assume we have a server ready to receive the messages. We have created a simple Controller in the Spring Boot Application for that.
In addition, we have simulated every third message to be failed.

```java
@RestController
@RequestMapping("/api/v1/test")
@Slf4j
public class Controller {

    private AtomicLong atomicLong = new AtomicLong(0);

    @RequestMapping(value = {"/"}, headers = "Content-Type=application/json", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.OK)
    public DeferredResult<ResponseEntity> processRequest(@RequestBody JsonNode msg) {
        DeferredResult<ResponseEntity> deferredResult = new DeferredResult<>();

        log.info("Received message: {}", msg);

        long counter = atomicLong.incrementAndGet();
        if (counter % 3 == 0) {
            log.warn("Bad request: {}", msg);
            deferredResult.setResult(new ResponseEntity<>("Bad Request", HttpStatus.BAD_REQUEST));
        } else {
            log.info("Success: {}", msg);
            deferredResult.setResult(new ResponseEntity<>("Ok", HttpStatus.OK));
        }

        return deferredResult;
    }
}
```

## Step 3: Validation the Rule Chain logic

Let's check that our logic is correct by saving the Rule Chain and launching the external server. The generator will start to produce messages:

**"Checkpoint"** node received six messages:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/checkpoint_reprocessing_events.png)

We can see that the next rest api call node, **"Send Request"**, processed eight messages.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/rest_api_events.png)

Every third message (two out of initial six) is failed.

![image](https://img.thingsboard.io/user-guide/rule-engine-2-5/tutorials/error_event.png)

The last two messages are the ones that were needed to be reprocessed (the failed messages).
That means that our logic works correctly.

## TL;DR

Download and import attached json [**file**](/docs/{{docsPrefix}}user-guide/rule-engine-2-5/tutorials/resources/send_request_rule_chain.json) with a rule chain from this tutorial.
Don't forget to populate the Generator nodes with your specific device.
 
## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/multi-project-guides-banner.md %}






