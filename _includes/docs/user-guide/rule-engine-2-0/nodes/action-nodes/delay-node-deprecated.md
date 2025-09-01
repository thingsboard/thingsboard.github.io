<table  style="width:250px;">
   <thead>
     <tr>
	 <td style="text-align: center"><strong><em>Since TB Version 2.1</em></strong></td>
     </tr>
   </thead>
</table> 

Delays incoming messages for configurable period.

Configuration:

![image](/images/user-guide/rule-engine-2-0/nodes/action-delay-config.png)

- **Period in seconds** - specifies the value of the period during which incoming message should be suspended
- **Maximum pending messages** - specifies the amount of maximum allowed pending messages (queue of suspended messages)

When delay period for particular incoming message will be reached it will be removed from pending queue and routed to the next nodes via **Success** chain.

Each next message will be routed via **Failure** chain if the maximum pending messages limit will be reached.
