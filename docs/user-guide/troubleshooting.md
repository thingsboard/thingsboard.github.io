---
layout: docwithnav
title: Troubleshooting
description: ThingsBoard IoT Platform troubleshooting

---


### Logs

ThingsBoard logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

### Metrics

You may enable prometheus metrics by setting environment variable `METRICS_ENDPOINTS_EXPOSE` to value `prometheus` in the configuration file.

These metrics are exposed at the path: `https://<yourhostname>/actuator/prometheus` which can be scraped by prometheus (No authentication required).

### Getting help

<section id="talkToUs">
    <main>
        <div id="gettingHelp">
            <div>
                <a href="https://gitter.im/thingsboard/chat">Community chat</a>
                <p>Our Gitter channel is the best way to contact our engineers and share your ideas with them.</p>
            </div>
            <div>
                <a href="https://groups.google.com/forum/#!forum/thingsboard">Q&A forum</a>
                <p>Our user forum is a great place to go for community support.</p>
            </div>
            <div>
                <a href="http://stackoverflow.com/questions/tagged/thingsboard">Stack Overflow</a>
                <p>The ThingsBoard team will also monitor posts tagged thingsboard. If there aren’t any existing questions that help, please ask a new one!</p>
            </div>
        </div>
    </main>
</section>

If your problem isn't answered by any of the guides above, feel free to contact ThingsBoard team.

<a class="button" href="/docs/contact-us/">Contact us</a>
