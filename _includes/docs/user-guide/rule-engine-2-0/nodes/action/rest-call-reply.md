<table  style="width:250px;">
  <thead>
    <tr>
      <td style="text-align: center">
        <strong>
          {% if docsPrefix == 'pe/' or docsPrefix == 'paas/' %}
            <em>Since TB Version 2.1</em>
          {% else %}
            <em>Since TB Version 3.8.0</em>
          {% endif %}
        </strong>
      </td>
    </tr>
  </thead>
</table>

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-rest-call-reply.png)

Sends reply to REST API call that was originally sent to rule engine.

Expects messages with any message type. Forwards incoming message as a reply to REST API call sent to rule engine.

Configuration:

![image](https://img.thingsboard.io/user-guide/rule-engine-2-0/pe/nodes/action-rest-call-reply-config.png)
