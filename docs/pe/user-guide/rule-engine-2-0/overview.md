---
layout: docwithnav-pe
assignees:
- stitenko
title: Rule Engine overview
description: Rule Engine overview

open-statistics:
    0:
        image: /images/user-guide/rule-engine-2-0/view-statistics-pe.png

view-statistics:
    0:
        image: /images/user-guide/rule-engine-2-0/rule-engine-stats-dashboard.png

create-rule-chain:
    0:
        image: /images/user-guide/ui/rule-chains/create-rule-chain-1-pe.png
        title: 'Navigate to the "Rule chains" page. Then click on the "plus" icon in the upper right corner, and select "Create new rule chain";'
    1:
        image: /images/user-guide/ui/rule-chains/create-rule-chain-2-pe.png
        title: 'Specify a name for the rule chain. If necessary, enable "Debug mode". Click "Add";'
    2:
        image: /images/user-guide/ui/rule-chains/create-rule-chain-3-pe.png
        title: 'The new rule chain is created. To open rule chain click on it.'

export-rule-chain:
    0:
        image: /images/user-guide/ui/rule-chains/export-rule-chain-1-pe.png
        title: 'Go to the "Rule chains" page. Click the "Export rule chain" icon in the row of the desired rule chain. A JSON file containing the configuration of that rule chain will be saved to your computer.'

import-rule-chain:
    0:
        image: /images/user-guide/ui/rule-chains/import-rule-chain-1-pe.png
        title: 'Navigate to the "Rule chains" page and click on the "+" button in the upper right corner of the screen and select "Import rule chain" option.'
    1:
        image: /images/user-guide/ui/rule-chains/import-rule-chain-2-pe.png
        title: 'Drag and drop the JSON file with the Rule chain configuration into the dialog and click "Import".'
    2:
        image: /images/user-guide/ui/rule-chains/import-rule-chain-3-pe.png
        title: 'The imported Rule chain will open. Save it by clicking "Apply changes" in the bottom-right corner.'
    3:
        image: /images/user-guide/ui/rule-chains/import-rule-chain-4-pe.png
        title: 'The Rule chain is now successfully imported.'

edit-rule-chain:
    0:
        image: /images/user-guide/ui/rule-chains/edit-rule-chain-1-pe.png
        title: 'Navigate to the "Rule chains" page and click on the "Rule chain details" icon can opposite the rule chain`s name you want to edit;'
    1:
        image: /images/user-guide/ui/rule-chains/edit-rule-chain-2-pe.png
        title: 'The rule chain details window will open. Click on the "pencil" icon to enter edit mode;'
    2:
        image: /images/user-guide/ui/rule-chains/edit-rule-chain-3-pe.png
        title: 'Edit name for this rule chain and enable debug mode. After that, click on the "Apply changes" button;'
    3:
        image: /images/user-guide/ui/rule-chains/edit-rule-chain-4-pe.png
        title: 'You changed rule chain name and enable debug mode.'

make-rule-chain-as-root:
    0:
        image: /images/user-guide/ui/rule-chains/make-rule-chain-root-1-pe.png
        title: 'Navigate to the "Rule chains" page and click on the "Make rule chain root" button located on the particular rule chain row;'
    1:
        image: /images/user-guide/ui/rule-chains/make-rule-chain-root-2-pe.png
        title: 'Please confirm your actions in the dialog box;'
    2:
        image: /images/user-guide/ui/rule-chains/make-rule-chain-root-3-pe.png
        title: 'The selected rule chain has now become the root.'

delete-rule-chain-1:
    0:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-1-pe.png
        title: 'Click a trash icon can opposite the rule chains`s name you want to delete;'
    1:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-2-pe.png
        title: 'Confirm deleting a rule chain in the dialog box.'

delete-rule-chain-2:
    0:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-3-pe.png
        title: 'Click on the "Rule chain details" button located on the particular rule chain row;'
    1:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-4-pe.png
        title: 'In the rule chain details, click on the "Delete rule chain" button;'
    2:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-5-pe.png
        title: 'Confirm deleting the rule chain in the dialog box.'

delete-rule-chain-3:
    0:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-6-pe.png
        title: 'Mark one or multiple rule chains you want to delete. Click on the trash bin icon in the top right corner;'
    1:
        image: /images/user-guide/ui/rule-chains/delete-rule-chain-7-pe.png
        title: 'Confirm deleting rule chains in the dialog box.'

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/user-guide/rule-engine-2-0/overview.md %}