---
layout: docwithnav-trendz
assignees:
- vparomskiy
title: Trendz configuration properties
description: Trendz configuration properties description
---


## Configuration properties

<table>
  <thead>
      <tr>
          <td><b>Property</b></td><td><b>Environment Variable</b></td><td><b>Default Value</b></td><td><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td colspan="4"><span style="font-weight: bold; font-size: 24px;">HTTP server parameters</span></td>
      </tr>  
      <tr>
          <td>server.address</td>
          <td>HTTP_BIND_ADDRESS</td>
          <td>0.0.0.0</td>
          <td>HTTP Server bind address</td>
      </tr>
      <tr>
          <td>server.port</td>
          <td>HTTP_BIND_PORT</td>
          <td>8888</td>
          <td>HTTP Server bind port</td>
      </tr>
      <tr>
            <td>tb.api.url</td>
            <td>TB_API_URL</td>
            <td>http://localhost:9090</td>
            <td>ThingsBoard Cluster REST API url</td>
        </tr>
      <tr>
          <td>ratelimit.duration.sec</td>
          <td>RATELIMIT_DURATION_SEC</td>
          <td>1</td>
          <td>Control amount of api calls per duration</td>
      </tr>
      <tr>
          <td>ratelimit.max_reqeusts_per_duration</td>
          <td>RATELIMIT_MAX_REQUESTS</td>
          <td>5000</td>
          <td>Max number of allowed API calls per configured duration</td>
      </tr>
      <tr>
          <td>ratelimit.max_concurent_requests</td>
          <td>RATELIMIT_CONCURRENT_REQUESTS</td>
          <td>8</td>
          <td>Max number of concurrent API calls. Overrides RATELIMIT_MAX_REQUESTS limit</td>
      </tr>          
        <tr>
          <td>spring.datasource.url</td>
          <td>SPRING_DATASOURCE_URL</td>
          <td>jdbc:postgresql://localhost:5432/trendz</td>
          <td>Connection URL for Trendz database</td>
        </tr>
        <tr>
            <td>spring.datasource.username</td>
            <td>SPRING_DATASOURCE_USERNAME</td>
            <td>postgres</td>
            <td>Database username</td>
        </tr> 
        <tr>
            <td>spring.datasource.password</td>
            <td>SPRING_DATASOURCE_PASSWORD</td>
            <td>postgres</td>
            <td>Database password</td>
        </tr> 
        <tr>
            <td>spring.datasource.hikari.maximumPoolSize</td>
            <td>SPRING_DATASOURCE_MAXIMUM_POOL_SIZE</td>
            <td>5</td>
            <td>Database connection pool size</td>
        </tr> 
        <tr>
            <td>cache.type</td>
            <td>CACHE_TYPE</td>
            <td>caffeine</td>
            <td>Application cache provider</td>
        </tr> 
        <tr>
            <td>cache.report.enabled</td>
            <td>CACHE_REPORT_ENABLED</td>
            <td>true</td>
            <td>Enable/disable view reprot cache on the system level</td>
        </tr> 
        <tr>
            <td>cache.report.sessionDurationInMinutes</td>
            <td>CACHE_REPORT_SESSION_DURATION_MINUTES</td>
            <td>10</td>
            <td>Expiration time for cached view report</td>
        </tr> 
        <tr>
            <td>executors.uiBuild</td>
            <td>UI_BUILD_THREAD_COUNT</td>
            <td>2</td>
            <td>Amount of paralell view config execution trigger from UI</td>
        </tr> 
        <tr>
            <td>executors.modelBuild</td>
            <td>MODEL_BUILD_THREAD_COUNT</td>
            <td>1</td>
            <td>Amount of paralell model build processes</td>
        </tr>      
        <tr>
            <td>executors.taskService</td>
            <td>CONCURRENT_TASK_EXECUTION_COUNT</td>
            <td>1</td>
            <td>Amount of paralell tasks executions</td>
        </tr> 
        <tr>
            <td>executors.scheduledTaskService</td>
            <td>SCHEDULED_TASK_EXECUTOR_THREAD_COUNT</td>
            <td>3</td>
            <td>Amount of paralell scheduled tasks executions</td>
        </tr> 
        <tr>
            <td>executors.simpleApiRateLimiter.queueCapacity</td>
            <td>SIMPLE_API_RATE_LIMITER_QUEUE_CAPACITY</td>
            <td>10</td>
            <td>max amount of queued requests that are waiting for execution</td>
        </tr> 
        <tr>
            <td>executors.simpleApiRateLimiter.threadPoolSize</td>
            <td>SIMPLE_API_RATE_LIMITER_THREAD_POOL_SIZE</td>
            <td>10</td>
            <td>Amount of requests that are executed in parallel</td>
        </tr> 
        <tr>
            <td>authentication.login</td>
            <td>ADMIN_LOGIN</td>
            <td> </td>
            <td>Username for authenticating background requests to ThingsBoard</td>
        </tr> 
        <tr>
            <td>authentication.password</td>
            <td>ADMIN_PASSWORD</td>
            <td> </td>
            <td>Password for authenticating background requests to ThingsBoard</td>
        </tr>         
                                                  
                               
  </tbody>
</table>

## Next Steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}