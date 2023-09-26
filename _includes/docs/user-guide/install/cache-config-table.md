<table>
  <thead>
      <tr>
          <td style="width: 25%"><b>Parameter</b></td><td style="width: 30%"><b>Environment Variable</b></td><td style="width: 15%"><b>Default Value</b></td><td style="width: 30%"><b>Description</b></td>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>cache.type</td>
          <td>CACHE_TYPE</td>
          <td>caffeine</td>
          <td>Type of cache engine.Allowed values: Caffeine or Redis</td>
      </tr>
      <tr>
          <td>cache.maximumPoolSize</td>
          <td>CACHE_MAXIMUM_POOL_SIZE</td>
          <td>16</td>
          <td>Max pool size to process futures that calls the external cache</td>
      </tr>
      <tr>
          <td>cache.attributes.enabled</td>
          <td>CACHE_ATTRIBUTES_ENABLED</td>
          <td>true</td>
          <td>Make sure that if cache.type is 'redis' and cache.attributes.enabled is 'true' that you change 'maxmemory-policy' Redis config property to 'allkeys-lru', 'allkeys-lfu' or 'allkeys-random'</td>
      </tr>
      <tr>
          <td>cache.specs.relations.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_RELATIONS_TTL</td>
          <td>1440</td>
          <td>Relations cache max size.</td>
      </tr>
      <tr>
          <td>cache.specs.relations.maxSize</td>
          <td>CACHE_SPECS_RELATIONS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.deviceCredentials.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_DEVICE_CREDENTIALS_TTL</td>
          <td>1440</td>
          <td>deviceCredentials cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.deviceCredentials.maxSize</td>
          <td>CACHE_SPECS_DEVICE_CREDENTIALS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.devices.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_DEVICES_TTL</td>
          <td>1440</td>
          <td>device cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.devices.maxSize</td>
          <td>CACHE_SPECS_DEVICES_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.sessions.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_SESSIONS_TTL</td>
          <td>1440</td>
          <td>sessions cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.sessions.maxSize</td>
          <td>CACHE_SPECS_SESSIONS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.assets.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ASSETS_TTL</td>
          <td>1440</td>
          <td>assets cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.assets.maxSize</td>
          <td>CACHE_SPECS_ASSETS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.entityViews.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ENTITY_VIEWS_TTL</td>
          <td>1440</td>
          <td>entity view cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.entityViews.maxSize</td>
          <td>CACHE_SPECS_ENTITY_VIEWS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.claimDevices.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_CLAIM_DEVICES_TTL</td>
          <td>1440</td>
          <td>claim devices cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.claimDevices.maxSize</td>
          <td>CACHE_SPECS_CLAIM_DEVICES_MAX_SIZE</td>
          <td>1000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.securitySettings.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_SECURITY_SETTINGS_TTL</td>
          <td>1440</td>
          <td>security settings cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.securitySettings.maxSize</td>
          <td>CACHE_SPECS_SECURITY_SETTINGS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.tenantProfiles.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_TENANT_PROFILES_TTL</td>
          <td>1440</td>
          <td>tenant profile cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.tenantProfiles.maxSize</td>
          <td>CACHE_SPECS_TENANT_PROFILES_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.tenants.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_TENANTS_TTL</td>
          <td>1440</td>
          <td>tenant specs cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.tenants.maxSize</td>
          <td>CACHE_SPECS_TENANTS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.tenantsExist.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_TENANTS_TTL</td>
          <td>1440</td>
          <td>environment variables are intentionally the same as in 'tenants' cache to be equal</td>
      </tr>
      <tr>
          <td>cache.specs.tenantsExist.maxSize</td>
          <td>CACHE_SPECS_TENANTS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.deviceProfiles.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_DEVICE_PROFILES_TTL</td>
          <td>1440</td>
          <td>device profile cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.deviceProfiles.maxSize</td>
          <td>CACHE_SPECS_DEVICE_PROFILES_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.assetProfiles.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ASSET_PROFILES_TTL</td>
          <td>1440</td>
          <td>asset profile cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.assetProfiles.maxSize</td>
          <td>CACHE_SPECS_ASSET_PROFILES_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.notificationSettings.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_NOTIFICATION_SETTINGS_TTL</td>
          <td>10</td>
          <td>notification settings cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.notificationSettings.maxSize</td>
          <td>CACHE_SPECS_NOTIFICATION_SETTINGS_MAX_SIZE</td>
          <td>1000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.sentNotifications.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_SENT_NOTIFICATIONS_TTL</td>
          <td>1440</td>
          <td>notification specs sent notifications cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.sentNotifications.maxSize</td>
          <td>CACHE_SPECS_SENT_NOTIFICATIONS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.attributes.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ATTRIBUTES_TTL</td>
          <td>1440</td>
          <td>attributes cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.attributes.maxSize</td>
          <td>CACHE_SPECS_ATTRIBUTES_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.userSessionsInvalidation.timeToLiveInMinutes</td>
          <td></td>
          <td>0</td>
          <td>The value of this TTL is ignored and replaced by JWT refresh token expiration time</td>
      </tr>
      <tr>
          <td>cache.specs.userSessionsInvalidation.maxSize</td>
          <td>CACHE_SPECS_USERS_UPDATE_TIME_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.otaPackages.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_OTA_PACKAGES_TTL</td>
          <td>60</td>
          <td>ota updates cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.otaPackages.maxSize</td>
          <td>CACHE_SPECS_OTA_PACKAGES_MAX_SIZE</td>
          <td>10</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.otaPackagesData.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_OTA_PACKAGES_DATA_TTL</td>
          <td>60</td>
          <td>ota packages data cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.otaPackagesData.maxSize</td>
          <td>CACHE_SPECS_OTA_PACKAGES_DATA_MAX_SIZE</td>
          <td>10</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.edges.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_EDGES_TTL</td>
          <td>1440</td>
          <td>edges cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.edges.maxSize</td>
          <td>CACHE_SPECS_EDGES_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.repositorySettings.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_REPOSITORY_SETTINGS_TTL</td>
          <td>1440</td>
          <td>VC repository settings cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.repositorySettings.maxSize</td>
          <td>CACHE_SPECS_REPOSITORY_SETTINGS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.autoCommitSettings.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_AUTO_COMMIT_SETTINGS_TTL</td>
          <td>1440</td>
          <td>VC autocommit settings cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.autoCommitSettings.maxSize</td>
          <td>CACHE_SPECS_AUTO_COMMIT_SETTINGS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.twoFaVerificationCodes.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_TWO_FA_VERIFICATION_CODES_TTL</td>
          <td>60</td>
          <td>2FA verification codes cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.twoFaVerificationCodes.maxSize</td>
          <td>CACHE_SPECS_TWO_FA_VERIFICATION_CODES_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.versionControlTask.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_VERSION_CONTROL_TASK_TTL</td>
          <td>5</td>
          <td>VC tasks cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.versionControlTask.maxSize</td>
          <td>CACHE_SPECS_VERSION_CONTROL_TASK_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.userSettings.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_USER_SETTINGS_TTL</td>
          <td>1440</td>
          <td>user settings cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.userSettings.maxSize</td>
          <td>CACHE_SPECS_USER_SETTINGS_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.dashboardTitles.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_DASHBOARD_TITLES_TTL</td>
          <td>1440</td>
          <td>dashboard titles cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.dashboardTitles.maxSize</td>
          <td>CACHE_SPECS_DASHBOARD_TITLES_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.entityCount.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ENTITY_COUNT_TTL</td>
          <td>1440</td>
          <td>entity count cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.entityCount.maxSize</td>
          <td>CACHE_SPECS_ENTITY_COUNT_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.downlink.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_DOWNLINK_TTL</td>
          <td>1440</td>
          <td>Downlink converter cache specs TTL</td>
      </tr>
      <tr>
          <td>cache.specs.downlink.maxSize</td>
          <td>CACHE_SPECS_DOWNLINK_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.roles.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ROLES_TTL</td>
          <td>1440</td>
          <td>roles cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.roles.maxSize</td>
          <td>CACHE_SPECS_ROLES_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.permissions.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_PERMISSIONS_TTL</td>
          <td>1440</td>
          <td>permissions cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.permissions.maxSize</td>
          <td>CACHE_SPECS_PERMISSIONS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.owners.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_OWNERS_TTL</td>
          <td>1440</td>
          <td>owners cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.owners.maxSize</td>
          <td>CACHE_SPECS_OWNERS_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.remoteIntegrations.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_REMOTE_INTEGRATIONS_TTL</td>
          <td>1440</td>
          <td>remote integrations cache specs TTL</td>
      </tr>
      <tr>
          <td>cache.specs.remoteIntegrations.maxSize</td>
          <td>CACHE_SPECS_REMOTE_INTEGRATIONS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.integrations.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_INTEGRATIONS_TTL</td>
          <td>1440</td>
          <td>integrations cache specs TTL</td>
      </tr>
      <tr>
          <td>cache.specs.integrations.maxSize</td>
          <td>CACHE_SPECS_INTEGRATIONS_MAX_SIZE</td>
          <td>10000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.alarmTypes.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_ALARM_TYPES_TTL</td>
          <td>60</td>
          <td>alarm types cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.alarmTypes.maxSize</td>
          <td>CACHE_SPECS_ALARM_TYPES_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.specs.resourceInfo.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_RESOURCE_INFO_TTL</td>
          <td>1440</td>
          <td>alarm types cache TTL</td>
      </tr>
      <tr>
          <td>cache.specs.resourceInfo.maxSize</td>
          <td>CACHE_SPECS_RESOURCE_INFO_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.notificationRules.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_NOTIFICATION_RULES_TTL</td>
          <td>30</td>
          <td>notification rules cache TTL</td>
      </tr>
      <tr>
          <td>cache.notificationRules.maxSize</td>
          <td>CACHE_SPECS_NOTIFICATION_RULES_MAX_SIZE</td>
          <td>1000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
      <tr>
          <td>cache.rateLimits.timeToLiveInMinutes</td>
          <td>CACHE_SPECS_RATE_LIMITS_TTL</td>
          <td>60</td>
          <td>rate limits cache TTL</td>
      </tr>
      <tr>
          <td>cache.rateLimits.maxSize</td>
          <td>CACHE_SPECS_RATE_LIMITS_MAX_SIZE</td>
          <td>100000</td>
          <td>maxSize: 0 means the cache is disabled</td>
      </tr>
  </tbody>
</table>
