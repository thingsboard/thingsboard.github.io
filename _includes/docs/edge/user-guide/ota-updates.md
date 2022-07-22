* TOC
{:toc}

#### Overview

Edge Over-the-air updates are designed in the same way, as [Platform (Cloud) OTA Updates](/docs/{{cloudDocsPrefix}}user-guide/ota-updates/).
Please read *Platform* OTA Updates documentation to get knowledge on OTA Updates functionality in general.

#### Propagation OTA Packages to Edge

OTA Packages are created on the *Platform*. In the current version you **can not** create, modify or delete them on the *Edge*.

All the OTA firmware and software packages, that are created on the Platform, are automatically propagated to every Edge instance, that is connected to the Platform. 
No additional assignment actions required from Tenant administrator or user.

#### OTA Usage in the Device or Device Profile configurations

OTA Packages on the *Edge* can be used in Device or Device Profile configurations, in the same way as it used for *Platform* Device or Device Profile configurations.

Usage of these packages on the *Edge* is the same as on *Platform*, so you can follow [*Platform* documentation](/docs/{{cloudDocsPrefix}}user-guide/ota-updates/). 
 
## Next steps

{% include templates/edge/guides-banner-edge.md %}
