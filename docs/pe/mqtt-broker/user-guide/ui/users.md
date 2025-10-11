---
layout: docwithnav-pe-mqtt-broker
title: User management
description: UI user management

add-user-broker:
    0:
        image: /images/pe/mqtt-broker/user-guide/ui/add-user-broker-1.png
        title: 'Navigate to the Users page. Then click on the "plus" icon in the top right corner;'
    1:
        image: /images/pe/mqtt-broker/user-guide/ui/add-user-broker-2.png
        title: 'Provide the email address, which must be unique within the system. The fields for first name, last name, and description are optional. Click "Add" to create the user.'

edit-user-broker:
    0:
        image: /images/pe/mqtt-broker/user-guide/ui/edit-user-broker-1.png
        title: 'Locate the desired user in the Users table and click on the corresponding row.'
    1:
      image: /images/pe/mqtt-broker/user-guide/ui/edit-user-broker-2.png
      title: 'Click the Toggle edit mode button.'
    2:
      image: /images/pe/mqtt-broker/user-guide/ui/edit-user-broker-3.png
      title: 'Modify the first name, last name, or description and click on the button "Apply changes" to save the changes.'

delete-user-broker:
    0:
        image: /images/pe/mqtt-broker/user-guide/ui/delete-user-broker-1.png
        title: 'Find the user in the Users table and click on the Delete button.'
    1:
      image: /images/pe/mqtt-broker/user-guide/ui/delete-user-broker-2.png
      title: 'Confirm the action by selecting Yes.'
      
login-as-user:
  0:
    image: /images/pe/mqtt-broker/user-guide/ui/login-as-user.png
    title: 'In the Users table, select the desired user and click the Login button to proceed.'

---

{% assign docsPrefix = "pe/" %}
{% include docs/mqtt-broker/user-guide/ui/users.md %}
