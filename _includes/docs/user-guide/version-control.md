* TOC
{:toc}
  

## Feature Overview

ThingsBoard Version Control service provides the ability to export and restore ThingsBoard Entities using Git.
As a Tenant administrator, you can configure access to the Git repository using UI or REST API.
As a platform user, you can export single or multiple ThingsBoard Entities, browse version history and restore entities to the specific version.

This feature improves user experience when multiple engineers design the same Rule Chain or Dashboard and simplifies CI/CD. 
It also allows you to easily clone the solution between tenants or platform instances. 

## Architecture

#### Entity External ID

Every ThingsBoard entity has the "id" field, which is the unique identifier of the entity in scope of a particular ThingsBoard environment.
Every exportable ThingsBoard entity (Device, Asset, Dashboard, Rule Chain) contains new filed "externalId". 
The field is used to identify the same Entity in case of import and export between multiple environments.
Both "id" and "externalId" fields is of type [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

#### Repository structure
 
When you first export the entity to Git, the entity "id" is used to name the file inside git repository.
Let's assume you have a development ThingsBoard instance and exported a single dashboard with the name "Dashboard 1" and id "4864b750-da7d-11ec-a496-97fa2815d2fe". 
Then the repository will have a single file with the following full name and path:

```bash
dashboard/4864b750-da7d-11ec-a496-97fa2815d2fe.json
```

Let's assume you have imported the dashboard "D1" to the production ThingsBoard instance. The "externalId" filed is set when you first import the entity to the new ThingsBoard instance. 
In such a case, the dashboard entity in production environment will have different id, but the "externalId" of the dashboard will be set to the same "4864b750-da7d-11ec-a496-97fa2815d2fe".

Any time you perform export and import operations, the "externalId" is used to find the right entity to update.

#### Scalability

ThingsBoard Version Control service is available as part of a monolithic ThingsBoard instance or as a separate microservice for horizontal scalability.
Every instance of the Version Control service is responsible for handling synchronization tasks for the specific partition(s) of the Tenants in the cluster.
Each "commit" API call may take some time. Concurrent "commit" API calls in scope of the same Tenant are not supported. 
The system will cancel the "commit" API call if it is in progress and the new "commit" API call arrives.

## Usage

#### Git Settings configuration

As a Tenant administrator, you can navigate to **System Settings -> Git settings** page. The page allows you to provision Git repository URL, default branch name and authentication settings.
We expect you to provide URL to the empty Git repository.

TODO: screenshot

#### Export to Git

##### Single Entity Export

##### Multiple Entity Export

##### Automatic Entity Export

#### Restore from Git

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}