{% capture tb_3_0_upgrade_note %}
**Important note before upgrading to ThingsBoard 3.0**
 - ThingsBoard UI was rewritten from AngularJS 1.5.8 to use Angular 9. 
   - What does it mean? 
     - Generally speaking, it means: state of the art application, easier development of front-end elements, performance improvements and more flexibility with UI customizations.
   - How to upgrade?
     - You are safe to upgrade if you do NOT use custom widgets or custom actions in the dashboards. 
     - New JS framework may not support your current code — custom widgets and custom actions, so they need to be refactored a bit. Thus we encourage you to test your customizations using our cloud environments or your dev instances.
    
 - Migration from pure Cassandra to Hybrid DB Approach 
    - We still support Cassandra for storing telemetry data but not the entities like devices, customers, tenants, etc.
    - What does it mean? 
      - This will simplify maintenance and future improvements that will enable advanced search capabilities in v3.1.
    - How to upgrade?    
      - If you are using pure PostgreSQL setup or PostgreSQL (for entities) + Cassandra (for telemetry), you are not affected.
      - If you are using pure Cassandra - the upgrade procedure is automatic but takes some time. The downtime depends on the number of devices, attributes, alarms and relations.
        If you have less than 10 million of those entities the upgrade should take a few minutes and depends on the database performance. 
      
{% endcapture %}
{% include templates/info-banner.md content=tb_3_0_upgrade_note %}