#### Create edge entity
1. Go to "**Edge groups**"
2. Add new edge group or enter *All* group
3. Add new edge entity
4. Fill required fields (*Name* and *Edge type*) in the form "Add Edge"
5. Fill *license key* obtained in the Step 2

<br>![image](/images/thingsboard-edge/installation/provision-edge-pe.gif)

#### Assign user group to edge to be able to login into Edge using UI
This step required if you would like to login into ThingsBoard Edge UI. 

None of the users from the cloud created(provisioned) on the ThingsBoard Edge by default. You'll need manually to assign specific User Entity Group of the cloud instance to the Edge to be able to login into ThingsBoard Edge UI.

Please do next steps to assign User Entity Group to edge:
1. Click "Manage edge user groups"
2. Click "Assign new entity group" and choose group(s) of users that will have access to Edge ThingsBoard

<br>![image](/images/thingsboard-edge/installation/assign-user-entity-group.gif)

In our sample all users that are inside Tenant Administrators User Entity group will be able to login into ThingsBoard Edge UI.  
