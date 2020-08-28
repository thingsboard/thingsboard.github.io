<!---
{% capture postgresql-info %}
PE features:
* edge entity groups
* scheduler
* white labeling
{% endcapture %}
{% include templates/info-banner.md content=postgresql-info %}
--->

###### Create edge entity
1. Go to "Edge groups"
2. Add new edge group or enter <i>All</i> group
3. Add new edge entity
4. Fill required fields (<i>Name</i> and <i>Edge type</i>) in the form "Add Edge"

###### Assign edge to user
5. Click "Manage edge user groups"
6. Click "Assign new entity group" and choose group(s) of users that will have access to Edge ThingsBoard

<br>![image](/images/edge/installation/add-edge-key-secret-pe.gif)

###### Get credentials
Click on edge entity and find secret and key. 
You may copy it with one click. 
These credentials will be required in [Step 6](#add-edge-key-and-secret).