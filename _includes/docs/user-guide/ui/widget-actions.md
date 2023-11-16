{% if docsPrefix == 'pe/' or docsPrefix == 'paas/' %}
{% assign mobileDocsPrefix = "pe/" %}
{% else %}
{% assign mobileDocsPrefix = "" %}
{% endif %}

* TOC
{:toc}

## Introduction

Actions feature can be treated as navigation among [dashboard's states](/docs/{{docsPrefix}}user-guide/dashboards/#states) or between different [dashboards](/docs/{{docsPrefix}}user-guide/dashboards/).
Actions allow quickly and easily configuring the transition to created state, transferring to other dashboards, or even updating the dashboard you are in. 
Depending on the widget, the action sources differ. However, the type of action you are able to choose will be the same for all widgets.

Actions are adjusted in the Edit mode of the needed widget.

To fully understand how to use Actions, you have to add a State to your widget. How to do this you should [read here](/docs/{{docsPrefix}}user-guide/dashboards/#states).

## Action types

_Types of action_ define which exactly action will be taken.
There are six action types that are the same for all widgets.
Learn how to configure action types with the example on [Entity Cards widget](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#action-types-configuration) examples.

## Action types configuration

Since the action types are the same for all widgets, in this tutorial will be used the [Action Cell Button action source](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#1-action-cell-button) to explain all action types,
and they will be explained using the Entity Cards widget examples.

##### Navigate to new dashboard state

States are so-called levels that allow you to navigate between different devices, assets, and widget objects to see the information you need in more detail.
When choosing the _Navigate to new dashboard state_ action type, you will be transferred to the previously created state of your choice.
How to add states to your dashboard, please [read here](/docs/{{docsPrefix}}user-guide/dashboards/#states).

After a state has been added, we can configure a _Navigate to new dashboard state_ action type:

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. As an example for this manual, in the top drop-down menu, choose an "Widget header button" action source.
4. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.
5. In the drop-down menu "Type", choose a _Navigate to new dashboard state_ action type.
6. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
7. When the desired state has been selected, click the "Add" button at the bottom of the "Add action" window.
8. Now you see configured action, so you can double-check action source, icon, and action type.
9. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
10. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

After saving the changes, you can see an icon-button in the upper right part of the widget. Clicking this icon will take you to the previously selected state.

{% include images-gallery.html imageCollection="navigate-new-state-cards" %}

If you want to open the selected state in a separate window, check the box "Open in separate dialog".

{% include images-gallery.html imageCollection="navigate-new-state-cards2" %}

You can hide dashboard toolbar in dialog window. To do this, select the "Hide dashboard toolbar in dialog" box.

{% include images-gallery.html imageCollection="navigate-new-state-cards3" %}

##### Update current dashboard state

This action type allows updating a dashboard that you are currently on.
While using a dashboard, you can view detailed information about a specific device/asset in real-time.
The most common use of this action type is through Chart widgets where you can see the details more accurately.
For starters let's add a Chart widget to the Dashboard to configure the _Update current dashboard state_ action type:

1. Enter Dashboard's Edit mode and in the drop-down "Select widget" menu choose Charts: Timeseries Line Chart.
2. In the "Add widget" window type input your data source, in this manual for example is used pressure data. Click "Add" at the right bottom of the widget.
3. We can see that the Chart widget has appeared on the dashboard, but it has no data to display yet.
4. Enter Edit mode of the Table widget by clicking the Pencil icon on the right top of the widget.
5. In the widget's Edit mode move to the last cell "Actions".
6. Click the "+" icon on the right of the window to add a new action.
7. As an example for this manual, in the top drop-down menu, choose an "Action cell button" action source.
8. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.
9. In the drop-down menu "Type", choose an _Update current dashboard state_ action type.
10. After choosing an action type, click "Add" at the right bottom of the "Add action" window.
11. Now you see configured action, so you can double-check action source, icon, and action type.
12. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
13. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

After saving changes, you will see button icons opposite the entity names. Clicking on any of these icons will update the entity details and they will be shown on the Chart widget on the current dashboard.

{% include images-gallery.html imageCollection="update-current-dash-state" %}

##### Navigate to other dashboard

This type of action transfers you to a previously created dashboard of your choice.
To be fastly transitioned to another selected dashboard, you should:

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. As an example for this manual, in the top drop-down menu, choose an "Action cell button" action source.
4. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.
5. In the drop-down menu "Type", choose a _Navigate to other dashboard_ action type.
6. After choosing an action type, the drop-down menu "Target dashboard" appears. Select a previously created dashboard you'd like to be transitioned to.
   Notice that it's also possible to be transitioned to the existed state in the chosen dashboard.
7. After configuring an action type, click "Add" at the right bottom of the "Add action" window.
8. Now you see configured action, so you can double-check action source, icon, and action type.
9. Apply changes by clicking the orange tick icon in the top right of the window, and then close the details window.
10. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

After saving changes, you can see icon-buttons opposite the entity names. Clicking any of these icons will transfer you to the previously selected dashboard (or chosen state in that dashboard).

{% include images-gallery.html imageCollection="navigate-to-dash-cards" %}

##### Custom action

A Custom action allows manually configuring a function that can be used to add an individual action to your widget (for example deleting listed devices/assets).
To configure a custom action with a function (with an example of a device deletion):

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. As an example for this manual, in the top drop-down menu, choose an "Action cell button" action source.
4. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.
5. In the drop-down menu "Type", choose a _Custom action_ action type.
6. After choosing a Custom action type, a field for inputting a function will appear.
7. Enter your custom function there. An example in this tutorial is a device deletion action that adds the ability to delete devices right from the table
   (you can find an example of the function under the screenshots section).
8. Apply changes by clicking the "Save" button at the right bottom of the "Add action" window.
9. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
10. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

Execute an action by clicking the "trash box" icon opposite entity names.

{% include images-gallery.html imageCollection="custom-action" %}

<details>

<summary>
<b>An example of the function for a device deletion.</b>
</summary>

{% highlight ruby %}
let $injector = widgetContext.$scope.$injector;
let dialogs = $injector.get(widgetContext.servicesMap.get('dialogs'));
let deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));

openDeleteDeviceDialog();

function openDeleteDeviceDialog() {
    let title = "Are you sure you want to delete the device " + entityName + "?";
    let content = "Be careful, after the confirmation, the device and all related data will become unrecoverable!";
    dialogs.confirm(title, content, 'Cancel', 'Delete').subscribe(
        function(result) {
            if (result) {
                deleteDevice();
            }
        }
    );
}

function deleteDevice() {
    deviceService.deleteDevice(entityId.id).subscribe(
        function() {
            widgetContext.updateAliases();
        }
    );
}
{% endhighlight %}
</details>

##### Custom action (with HTML template)

A Custom action with an HTML template allows manually entering a function in an existing HTML template (for example creating dialog windows with an opportunity to create or edit listed devices/assets).

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. As an example for this manual, in the top drop-down menu, choose an "Action cell button" action source.
4. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.
5. In the drop-down menu "Type", choose a _Custom action(with HTML template)_ action type. After choosing a Custom action type, four tabs appea:
   
   _Resources_ tab is used to specify external JavaScript/CSS resources used by the widget;
   
   _CSS_ tab contains custom action specific CSS style definitions;
   
   _HTML_ tab contains custom action HTML code;
   
   _JavaScript_ section contains JS code of your custom action.
6. In JavaScript tab, enter a JavaScript function for your custom action (you can find an example of JavaScript function under the screenshots section).
7. In HTML tab, enter an HTML code for your custom action (you can find an example of HTML code under the screenshots section).
8. Apply changes by clicking the "Save" button at the right bottom of the "Add action" window.
9. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
10. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

Execute actions by clicking appropriate icons.

{% include images-gallery.html imageCollection="custom-action-html" %}

<b>Examples of JavaScript function and HTML code that add a possibility to create a device or an asset:</b>
<br>
<br>
<details>

<summary>
JavaScript function.
</summary>

{% highlight ruby %}
let $injector = widgetContext.$scope.$injector;
let customDialog = $injector.get(widgetContext.servicesMap.get('customDialog'));
let assetService = $injector.get(widgetContext.servicesMap.get('assetService'));
let deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));
let attributeService = $injector.get(widgetContext.servicesMap.get('attributeService'));
let entityRelationService = $injector.get(widgetContext.servicesMap.get('entityRelationService'));

openAddEntityDialog();

function openAddEntityDialog() {
customDialog.customDialog(htmlTemplate, AddEntityDialogController).subscribe();
}

function AddEntityDialogController(instance) {
let vm = instance;

    vm.allowedEntityTypes = ['ASSET', 'DEVICE'];
    vm.entitySearchDirection = {
        from: "FROM",
        to: "TO"
    }

    vm.addEntityFormGroup = vm.fb.group({
     entityName: ['', [vm.validators.required]],
     entityType: ['DEVICE'],
     entityLabel: [null],
     type: ['', [vm.validators.required]],
     attributes: vm.fb.group({
         latitude: [null],
         longitude: [null],
         address: [null],
         owner: [null],
         number: [null, [vm.validators.pattern(/^-?[0-9]+$/)]],
         booleanValue: [null]
     }),
     relations: vm.fb.array([])
    });

    vm.cancel = function() {
        vm.dialogRef.close(null);
    };

    vm.relations = function() {
        return vm.addEntityFormGroup.get('relations');
    };

    vm.addRelation = function() {
        vm.relations().push(vm.fb.group({
         relatedEntity: [null, [vm.validators.required]],
         relationType: [null, [vm.validators.required]],
         direction: [null, [vm.validators.required]]
        }));
    };

    vm.removeRelation = function(index) {
        vm.relations().removeAt(index);
        vm.relations().markAsDirty();
    };

    vm.save = function() {
        vm.addEntityFormGroup.markAsPristine();
        saveEntityObservable().subscribe(
            function (entity) {
                widgetContext.rxjs.forkJoin([
                    saveAttributes(entity.id),
                    saveRelations(entity.id)
                ]).subscribe(
                    function () {
                        widgetContext.updateAliases();
                        vm.dialogRef.close(null);
                    }
                );
            }
        );
    };

    function saveEntityObservable() {
        const formValues = vm.addEntityFormGroup.value;
        let entity = {
            name: formValues.entityName,
            type: formValues.type,
            label: formValues.entityLabel
        };
        if (formValues.entityType == 'ASSET') {
            return assetService.saveAsset(entity);
        } else if (formValues.entityType == 'DEVICE') {
            return deviceService.saveDevice(entity);
        }
    }

    function saveAttributes(entityId) {
        let attributes = vm.addEntityFormGroup.get('attributes').value;
        let attributesArray = [];
        for (let key in attributes) {
            if(attributes[key] !== null) {
                attributesArray.push({key: key, value: attributes[key]});
            }
        }
        if (attributesArray.length > 0) {
            return attributeService.saveEntityAttributes(entityId, "SERVER_SCOPE", attributesArray);
        }
        return widgetContext.rxjs.of([]);
    }

    function saveRelations(entityId) {
        let relations = vm.addEntityFormGroup.get('relations').value;
        let tasks = [];
        for(let i=0; i < relations.length; i++) {
            let relation = {
                type: relations[i].relationType,
                typeGroup: 'COMMON'
            };
            if (relations[i].direction == 'FROM') {
                relation.to = relations[i].relatedEntity;
                relation.from = entityId;
            } else {
                relation.to = entityId;
                relation.from = relations[i].relatedEntity;
            }
            tasks.push(entityRelationService.saveRelation(relation));
        }
        if (tasks.length > 0) {
            return widgetContext.rxjs.forkJoin(tasks);
        }
        return widgetContext.rxjs.of([]);
    }
}

{% endhighlight %}

</details>
<br>
<details>

<summary>
HTML code.
</summary>

{% highlight ruby %}
<form #addEntityForm="ngForm" [formGroup]="addEntityFormGroup"
      (ngSubmit)="save()" class="add-entity-form">
    <mat-toolbar fxLayout="row" color="primary">
        <h2>Add entity</h2>
        <span fxFlex></span>
        <button mat-icon-button (click)="cancel()" type="button">
            <mat-icon class="material-icons">close</mat-icon>
        </button>
    </mat-toolbar>
    <mat-progress-bar color="warn" mode="indeterminate" *ngIf="isLoading$ | async">
    </mat-progress-bar>
    <div style="height: 4px;" *ngIf="!(isLoading$ | async)"></div>
    <div mat-dialog-content fxLayout="column">
        <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
            <mat-form-field fxFlex class="mat-block">
                <mat-label>Entity Name</mat-label>
                <input matInput formControlName="entityName" required>
                <mat-error *ngIf="addEntityFormGroup.get('entityName').hasError('required')">
                    Entity name is required.
                </mat-error>
            </mat-form-field>
            <mat-form-field fxFlex class="mat-block">
                <mat-label>Entity Label</mat-label>
                <input matInput formControlName="entityLabel" >
            </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
            <tb-entity-type-select
                    class="mat-block"
                    formControlName="entityType"
                    [showLabel]="true"
                    [allowedEntityTypes]="allowedEntityTypes"
            ></tb-entity-type-select>
            <tb-entity-subtype-autocomplete
                    fxFlex *ngIf="addEntityFormGroup.get('entityType').value == 'ASSET'"
                    class="mat-block"
                    formControlName="type"
                    [required]="true"
                    [entityType]="'ASSET'"
            ></tb-entity-subtype-autocomplete>
            <tb-entity-subtype-autocomplete
                    fxFlex *ngIf="addEntityFormGroup.get('entityType').value != 'ASSET'"
                    class="mat-block"
                    formControlName="type"
                    [required]="true"
                    [entityType]="'DEVICE'"
            ></tb-entity-subtype-autocomplete>
        </div>
        <div formGroupName="attributes" fxLayout="column">
            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Latitude</mat-label>
                    <input type="number" step="any" matInput formControlName="latitude">
                </mat-form-field>
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Longitude</mat-label>
                    <input type="number" step="any" matInput formControlName="longitude">
                </mat-form-field>
            </div>
            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Address</mat-label>
                    <input matInput formControlName="address">
                </mat-form-field>
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Owner</mat-label>
                    <input matInput formControlName="owner">
                </mat-form-field>
            </div>
            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Integer Value</mat-label>
                    <input type="number" step="1" matInput formControlName="number">
                    <mat-error *ngIf="addEntityFormGroup.get('attributes.number').hasError('pattern')">
                        Invalid integer value.
                    </mat-error>
                </mat-form-field>
                <div class="boolean-value-input" fxLayout="column" fxLayoutAlign="center start" fxFlex>
                    <label class="checkbox-label">Boolean Value</label>
                    <mat-checkbox formControlName="booleanValue" style="margin-bottom: 40px;">
                        {{ (addEntityFormGroup.get('attributes.booleanValue').value ? "value.true" : "value.false") | translate }}
                    </mat-checkbox>
                </div>
            </div>
        </div>
        <div class="relations-list">
            <div class="mat-body-1" style="padding-bottom: 10px; color: rgba(0,0,0,0.57);">Relations</div>
            <div class="body" [fxShow]="relations().length">
                <div class="row" fxLayout="row" fxLayoutAlign="start center" formArrayName="relations" *ngFor="let relation of relations().controls; let i = index;">
                    <div [formGroupName]="i" class="mat-elevation-z2" fxFlex fxLayout="row" style="padding: 5px 0 5px 5px;">
                        <div fxFlex fxLayout="column">
                            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                                <mat-form-field class="mat-block" style="min-width: 100px;">
                                    <mat-label>Direction</mat-label>
                                    <mat-select formControlName="direction" name="direction">
                                        <mat-option *ngFor="let direction of entitySearchDirection | keyvalue" [value]="direction.value">
                                            {{ ("relation.search-direction." + direction.value) | translate}}
                                        </mat-option>
                                    </mat-select>
                                    <mat-error *ngIf="relation.get('direction').hasError('required')">
                                        Relation direction is required.
                                    </mat-error>
                                </mat-form-field>
                                <tb-relation-type-autocomplete
                                        fxFlex class="mat-block"
                                        formControlName="relationType"
                                        [required]="true">
                                </tb-relation-type-autocomplete>
                            </div>
                            <div fxLayout="row" fxLayout.xs="column">
                                <tb-entity-select
                                        fxFlex class="mat-block"
                                        [required]="true"
                                        formControlName="relatedEntity">
                                </tb-entity-select>
                            </div>
                        </div>
                        <div fxLayout="column" fxLayoutAlign="center center">
                            <button mat-icon-button color="primary"
                                    aria-label="Remove"
                                    type="button"
                                    (click)="removeRelation(i)"
                                    matTooltip="Remove relation"
                                    matTooltipPosition="above">
                                <mat-icon>close</mat-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button mat-raised-button color="primary"
                        type="button"
                        (click)="addRelation()"
                        matTooltip="Add Relation"
                        matTooltipPosition="above">
                    Add
                </button>
            </div>
        </div>
    </div>
    <div mat-dialog-actions fxLayout="row" fxLayoutAlign="end center">
        <button mat-button color="primary"
                type="button"
                [disabled]="(isLoading$ | async)"
                (click)="cancel()" cdkFocusInitial>
            Cancel
        </button>
        <button mat-button mat-raised-button color="primary"
                type="submit"
                [disabled]="(isLoading$ | async) || addEntityForm.invalid || !addEntityForm.dirty">
            Create
        </button>
    </div>
</form>

{% endhighlight %}

</details>
<br>
<b>Examples of JavaScript function and HTML code that add a possibility to edit a device or an asset:</b>
<br>
<br>
<details>

<summary>
JavaScript function.
</summary>

{% highlight ruby %}
let $injector = widgetContext.$scope.$injector;
let customDialog = $injector.get(widgetContext.servicesMap.get('customDialog'));
let entityService = $injector.get(widgetContext.servicesMap.get('entityService'));
let assetService = $injector.get(widgetContext.servicesMap.get('assetService'));
let deviceService = $injector.get(widgetContext.servicesMap.get('deviceService'));
let attributeService = $injector.get(widgetContext.servicesMap.get('attributeService'));
let entityRelationService = $injector.get(widgetContext.servicesMap.get('entityRelationService'));

openEditEntityDialog();

function openEditEntityDialog() {
customDialog.customDialog(htmlTemplate, EditEntityDialogController).subscribe();
}

function EditEntityDialogController(instance) {
let vm = instance;

    vm.entityName = entityName;
    vm.entityType = entityId.entityType;
    vm.entitySearchDirection = {
        from: "FROM",
        to: "TO"
    };
    vm.attributes = {};
    vm.oldRelationsData = [];
    vm.relationsToDelete = [];
    vm.entity = {};

    vm.editEntityFormGroup = vm.fb.group({
        entityName: ['', [vm.validators.required]],
        entityType: [null],
        entityLabel: [null],
        type: ['', [vm.validators.required]],
        attributes: vm.fb.group({
            latitude: [null],
            longitude: [null],
            address: [null],
            owner: [null],
            number: [null, [vm.validators.pattern(/^-?[0-9]+$/)]],
            booleanValue: [false]
        }),
        oldRelations: vm.fb.array([]),
        relations: vm.fb.array([])
    });

    getEntityInfo();

    vm.cancel = function() {
        vm.dialogRef.close(null);
    };

    vm.relations = function() {
        return vm.editEntityFormGroup.get('relations');
    };

    vm.oldRelations = function() {
        return vm.editEntityFormGroup.get('oldRelations');
    };

    vm.addRelation = function() {
        vm.relations().push(vm.fb.group({
            relatedEntity: [null, [vm.validators.required]],
            relationType: [null, [vm.validators.required]],
            direction: [null, [vm.validators.required]]
        }));
    };

    function addOldRelation() {
        vm.oldRelations().push(vm.fb.group({
            relatedEntity: [{value: null, disabled: true}, [vm.validators.required]],
            relationType: [{value: null, disabled: true}, [vm.validators.required]],
            direction: [{value: null, disabled: true}, [vm.validators.required]]
        }));
    }

    vm.removeRelation = function(index) {
        vm.relations().removeAt(index);
        vm.relations().markAsDirty();
    };

    vm.removeOldRelation = function(index) {
        vm.oldRelations().removeAt(index);
        vm.relationsToDelete.push(vm.oldRelationsData[index]);
        vm.oldRelations().markAsDirty();
    };

    vm.save = function() {
        vm.editEntityFormGroup.markAsPristine();
        widgetContext.rxjs.forkJoin([
            saveAttributes(entityId),
            saveRelations(entityId),
            saveEntity()
        ]).subscribe(
            function () {
                widgetContext.updateAliases();
                vm.dialogRef.close(null);
            }
        );
    };

    function getEntityAttributes(attributes) {
        for (var i = 0; i < attributes.length; i++) {
            vm.attributes[attributes[i].key] = attributes[i].value;
        }
    }

    function getEntityRelations(relations) {
        let relationsFrom = relations[0];
        let relationsTo = relations[1];
        for (let i=0; i < relationsFrom.length; i++) {
            let relation = {
                direction: 'FROM',
                relationType: relationsFrom[i].type,
                relatedEntity: relationsFrom[i].to
            };
            vm.oldRelationsData.push(relation);
            addOldRelation();
        }
        for (let i=0; i < relationsTo.length; i++) {
            let relation = {
                direction: 'TO',
                relationType: relationsTo[i].type,
                relatedEntity: relationsTo[i].from
            };
            vm.oldRelationsData.push(relation);
            addOldRelation();
        }
    }

    function getEntityInfo() {
        widgetContext.rxjs.forkJoin([
            entityRelationService.findInfoByFrom(entityId),
            entityRelationService.findInfoByTo(entityId),
            attributeService.getEntityAttributes(entityId, 'SERVER_SCOPE'),
            entityService.getEntity(entityId.entityType, entityId.id)
        ]).subscribe(
            function (data) {
                getEntityRelations(data.slice(0,2));
                getEntityAttributes(data[2]);
                vm.entity = data[3];
                vm.editEntityFormGroup.patchValue({
                    entityName: vm.entity.name,
                    entityType: vm.entityType,
                    entityLabel: vm.entity.label,
                    type: vm.entity.type,
                    attributes: vm.attributes,
                    oldRelations: vm.oldRelationsData
                }, {emitEvent: false});
            }
        );
    }

    function saveEntity() {
        const formValues = vm.editEntityFormGroup.value;
        if (vm.entity.label !== formValues.entityLabel){
            vm.entity.label = formValues.entityLabel;
            if (formValues.entityType == 'ASSET') {
                return assetService.saveAsset(vm.entity);
            } else if (formValues.entityType == 'DEVICE') {
                return deviceService.saveDevice(vm.entity);
            }
        }
        return widgetContext.rxjs.of([]);
    }

    function saveAttributes(entityId) {
        let attributes = vm.editEntityFormGroup.get('attributes').value;
        let attributesArray = [];
        for (let key in attributes) {
            if (attributes[key] !== vm.attributes[key]) {
                attributesArray.push({key: key, value: attributes[key]});
            }
        }
        if (attributesArray.length > 0) {
            return attributeService.saveEntityAttributes(entityId, "SERVER_SCOPE", attributesArray);
        }
        return widgetContext.rxjs.of([]);
    }

    function saveRelations(entityId) {
        let relations = vm.editEntityFormGroup.get('relations').value;
        let tasks = [];
        for(let i=0; i < relations.length; i++) {
            let relation = {
                type: relations[i].relationType,
                typeGroup: 'COMMON'
            };
            if (relations[i].direction == 'FROM') {
                relation.to = relations[i].relatedEntity;
                relation.from = entityId;
            } else {
                relation.to = entityId;
                relation.from = relations[i].relatedEntity;
            }
            tasks.push(entityRelationService.saveRelation(relation));
        }
        for (let i=0; i < vm.relationsToDelete.length; i++) {
            let relation = {
                type: vm.relationsToDelete[i].relationType
            };
            if (vm.relationsToDelete[i].direction == 'FROM') {
                relation.to = vm.relationsToDelete[i].relatedEntity;
                relation.from = entityId;
            } else {
                relation.to = entityId;
                relation.from = vm.relationsToDelete[i].relatedEntity;
            }
            tasks.push(entityRelationService.deleteRelation(relation.from, relation.type, relation.to));
        }
        if (tasks.length > 0) {
            return widgetContext.rxjs.forkJoin(tasks);
        }
        return widgetContext.rxjs.of([]);
    }
}
{% endhighlight %}

</details>
<br>
<details>

<summary>
HTML code.
</summary>

{% highlight ruby %}
<form #editEntityForm="ngForm" [formGroup]="editEntityFormGroup"
      (ngSubmit)="save()"  class="edit-entity-form">
    <mat-toolbar fxLayout="row" color="primary">
        <h2>Edit {{entityType.toLowerCase()}} {{entityName}}</h2>
        <span fxFlex></span>
        <button mat-icon-button (click)="cancel()" type="button">
            <mat-icon class="material-icons">close</mat-icon>
        </button>
    </mat-toolbar>
    <mat-progress-bar color="warn" mode="indeterminate" *ngIf="isLoading$ | async">
    </mat-progress-bar>
    <div style="height: 4px;" *ngIf="!(isLoading$ | async)"></div>
    <div mat-dialog-content fxLayout="column">
        <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
            <mat-form-field fxFlex class="mat-block">
                <mat-label>Entity Name</mat-label>
                <input matInput formControlName="entityName" required readonly="">
            </mat-form-field>
            <mat-form-field fxFlex class="mat-block">
                <mat-label>Entity Label</mat-label>
                <input matInput formControlName="entityLabel">
            </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
            <mat-form-field fxFlex class="mat-block">
                <mat-label>Entity Type</mat-label>
                <input matInput formControlName="entityType" readonly>
            </mat-form-field>
            <mat-form-field fxFlex class="mat-block">
                <mat-label>Type</mat-label>
                <input matInput formControlName="type" readonly>
            </mat-form-field>
        </div>
        <div formGroupName="attributes" fxLayout="column">
            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Latitude</mat-label>
                    <input type="number" step="any" matInput formControlName="latitude">
                </mat-form-field>
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Longitude</mat-label>
                    <input type="number" step="any" matInput formControlName="longitude">
                </mat-form-field>
            </div>
            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Address</mat-label>
                    <input matInput formControlName="address">
                </mat-form-field>
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Owner</mat-label>
                    <input matInput formControlName="owner">
                </mat-form-field>
            </div>
            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                <mat-form-field fxFlex class="mat-block">
                    <mat-label>Integer Value</mat-label>
                    <input type="number" step="1" matInput formControlName="number">
                    <mat-error *ngIf="editEntityFormGroup.get('attributes.number').hasError('pattern')">
                        Invalid integer value.
                    </mat-error>
                </mat-form-field>
                <div class="boolean-value-input" fxLayout="column" fxLayoutAlign="center start" fxFlex>
                    <label class="checkbox-label">Boolean Value</label>
                    <mat-checkbox formControlName="booleanValue" style="margin-bottom: 40px;">
                        {{ (editEntityFormGroup.get('attributes.booleanValue').value ? "value.true" : "value.false") | translate }}
                    </mat-checkbox>
                </div>
            </div>
        </div>
        <div class="relations-list old-relations">
            <div class="mat-body-1" style="padding-bottom: 10px; color: rgba(0,0,0,0.57);">Relations</div>
            <div class="body" [fxShow]="oldRelations().length">
                <div class="row" fxLayout="row" fxLayoutAlign="start center" formArrayName="oldRelations" 
                     *ngFor="let relation of oldRelations().controls; let i = index;">
                    <div [formGroupName]="i" class="mat-elevation-z2" fxFlex fxLayout="row" style="padding: 5px 0 5px 5px;">
                        <div fxFlex fxLayout="column">
                            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                                <mat-form-field class="mat-block" style="min-width: 100px;">
                                    <mat-label>Direction</mat-label>
                                    <mat-select formControlName="direction" name="direction">
                                        <mat-option *ngFor="let direction of entitySearchDirection | keyvalue" [value]="direction.value">
                                            {{ ("relation.search-direction." + direction.value) | translate}}
                                        </mat-option>
                                    </mat-select>
                                    <mat-error *ngIf="relation.get('direction').hasError('required')">
                                        Relation direction is required.
                                    </mat-error>
                                </mat-form-field>
                                <tb-relation-type-autocomplete
                                        fxFlex class="mat-block"
                                        formControlName="relationType"
                                        required="true">
                                </tb-relation-type-autocomplete>
                            </div>
                            <div fxLayout="row" fxLayout.xs="column">
                                <tb-entity-select
                                        fxFlex class="mat-block"
                                        required="true"
                                        formControlName="relatedEntity">
                                </tb-entity-select>
                            </div>
                        </div>
                        <div fxLayout="column" fxLayoutAlign="center center">
                            <button mat-icon-button color="primary"
                                    aria-label="Remove"
                                    type="button"
                                    (click)="removeOldRelation(i)"
                                    matTooltip="Remove relation"
                                    matTooltipPosition="above">
                                <mat-icon>close</mat-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relations-list">
            <div class="mat-body-1" style="padding-bottom: 10px; color: rgba(0,0,0,0.57);">New Relations</div>
            <div class="body" [fxShow]="relations().length">
                <div class="row" fxLayout="row" fxLayoutAlign="start center" formArrayName="relations" *ngFor="let relation of relations().controls; let i = index;">
                    <div [formGroupName]="i" class="mat-elevation-z2" fxFlex fxLayout="row" style="padding: 5px 0 5px 5px;">
                        <div fxFlex fxLayout="column">
                            <div fxLayout="row" fxLayoutGap="8px" fxLayout.xs="column"  fxLayoutGap.xs="0">
                                <mat-form-field class="mat-block" style="min-width: 100px;">
                                    <mat-label>Direction</mat-label>
                                    <mat-select formControlName="direction" name="direction">
                                        <mat-option *ngFor="let direction of entitySearchDirection | keyvalue" [value]="direction.value">
                                            {{ ("relation.search-direction." + direction.value) | translate}}
                                        </mat-option>
                                    </mat-select>
                                    <mat-error *ngIf="relation.get('direction').hasError('required')">
                                        Relation direction is required.
                                    </mat-error>
                                </mat-form-field>
                                <tb-relation-type-autocomplete
                                        fxFlex class="mat-block"
                                        formControlName="relationType"
                                        [required]="true">
                                </tb-relation-type-autocomplete>
                            </div>
                            <div fxLayout="row" fxLayout.xs="column">
                                <tb-entity-select
                                        fxFlex class="mat-block"
                                        [required]="true"
                                        formControlName="relatedEntity">
                                </tb-entity-select>
                            </div>
                        </div>
                        <div fxLayout="column" fxLayoutAlign="center center">
                            <button mat-icon-button color="primary"
                                    aria-label="Remove"
                                    type="button"
                                    (click)="removeRelation(i)"
                                    matTooltip="Remove relation"
                                    matTooltipPosition="above">
                                <mat-icon>close</mat-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button mat-raised-button color="primary"
                        type="button"
                        (click)="addRelation()"
                        matTooltip="Add Relation"
                        matTooltipPosition="above">
                    Add
                </button>
            </div>
        </div>
    </div>
    <div mat-dialog-actions fxLayout="row" fxLayoutAlign="end center">
        <button mat-button color="primary"
                type="button"
                [disabled]="(isLoading$ | async)"
                (click)="cancel()" cdkFocusInitial>
            Cancel
        </button>
        <button mat-button mat-raised-button color="primary"
                type="submit"
                [disabled]="(isLoading$ | async) || editEntityForm.invalid || !editEntityForm.dirty">
            Save
        </button>
    </div>
</form>

{% endhighlight %}

</details>

##### Mobile action

Mobile action is explained in mobile application configuration. See [Mobile actions](/docs/{{mobileDocsPrefix}}mobile/mobile-actions/) for details.

## Action sources 

_Actions sources_ is a specific act that needs to be done to achieve a goal (like clicking a widget header button, double-clicking a row, or a map's marker). Action sources are different for all widgets. 
Action sources will be explained for each widget type separately using an example of the most commonly used type of action "Navigate to new dashboard state". 

**All of the action sources will be shown with an example of ["Navigate to new dashboard state"](/docs/{{docsPrefix}}user-guide/ui/widget-actions/#navigate-to-new-dashboard-state) action type.**

#### Action sources configuration

For suitability, we consider action sources on the most commonly used widgets.

Please, [learn here](/docs/{{docsPrefix}}getting-started-guides/helloworld/#step-33-add-table-widget) how to add an Entity Table widget to your dashboard. 

To add an action to your Entity Table widget: 
- Go to the Dashboard's Edit mode;
- Click a "Pencil" icon in the upper right corner of the widget;
- Choose the last cell "Actions" and click the "Plus" symbol on the right of the window.

{% include images-gallery.html imageCollection="entity-sources" %}

###### 1. Action cell button
  
Clicking an icon that's been chosen as a button executes an action. To configure the _Action cell button_ action source, you should:

1. In the widget's Edit mode move to the last cell "Actions".  
2. Click the "+" icon on the right of the window to add a new action.  
3. In the top drop-down menu, choose an _Action cell button_ action source.  
4. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.  
5. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.  
6. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to. 
7. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.  
8. Now you see configured action, so you can double-check action source, icon, and action type.
9. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window. 
10. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

As you see, opposite each entity name is an action cell button. By clicking this button the action will be executed, namely transition to the chosen state.

{% include images-gallery.html imageCollection="entity-cellbutton" %}

###### 2. Widget header button 
  
A button appears in the header of the widget. Clicking this button executes an action. This button responsible for the whole widget, not for separate entities. 
The widget header button is the most commonly used action source, and it can be found in all widgets. To configure the _Widget header button_ action source, you should:

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. In the top drop-down menu, choose a _Widget header button_ action source.
4. In the next line input a name for the action and choose an icon that will represent a button. With this button, action will be performed.
5. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
6. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
7. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.
8. Now you see configured action, so you can double-check action source, icon, and action type.
9. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
10. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

As you see now, in the header of the widget has appeared a button-icon. After you click it, action will be performed, namely, the transition to the chosen state.

{% include images-gallery.html imageCollection="entity-widgetheaderbutton" %}

###### 3. On row click 
  
Clicking on the row of the Table widget executes an action. To configure the _On row click_ action source, you should:

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. In the top drop-down menu, choose an _On row click_ action source.
4. Enter the name of the action in the appropriate line.
5. Using this action source, there won't be any buttons on the widget, therefore we shouldn't select an icon.
6. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
7. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
8. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.
9. Now, you see configured action, so you can double-check action source and action type.
10. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
11. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

To execute an action, namely to be transitioned to the chosen state, just click any of the rows of your Table widget.

{% include images-gallery.html imageCollection="entity-onrowclick" %}

###### 4. On row double click 
  
Double-clicking any row of the Entity table widget executes an action. To configure the _On row double click_ action source, you should:

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. In the top drop-down menu, choose an _On row double click_ action source.
4. Enter the name of the action in the appropriate line.
5. Using this action source, there won't be any buttons on the widget, therefore we shouldn't select an icon.
6. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
7. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
8. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.
9. Now, you see configured action, so you can double-check action source and action type.
10. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
11. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

To execute an action, namely to be transitioned to the chosen state, just double click any of the rows of your Table widget.

{% include images-gallery.html imageCollection="entity-onrowdoubleclick" %}

###### 5. On node selected (only in Entities Hierarchy widget)

When the Entities Hierarchy widget was added, you should configure a hierarchy itself. How to do it, please, [learn here](/docs/{{docsPrefix}}user-guide/entities-and-relations/#step-1-provision-entities-and-relations). 
After relations were added, go to the Edit mode of the Entities Hierarchy widget. To configure the _On node selected_ action source:

1. In the widget's Edit mode move to the last cell called "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. In the top drop-down menu, choose an _On node selected_ action source.
4. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
5. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
6. After configuring all needed settings, click "Add" at the right bottom of the "Add action" window.
7. Now you see configured action, so you can double-check action source and action type.
8. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
9. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

To perform an action you should click any of the nodes in the Entities hierarchy. 

{% include images-gallery.html imageCollection="onnode" %}

###### 6. On HTML element click (only in HTML Cards and Value Title widgets)

ThingsBoard has two widgets that you can configure fully by yourself by customizing an HTML code in their settings. When a code is written, it is possible to input an action source in it.  
How to add an action source to HTML Cards and Value Title widgets:

- **HTML Cards widget**

    1. In the widget's Edit mode move to the last cell called "Actions".
    2. Click the "+" icon on the right of the window to add a new action.
    3. In the top drop-down menu, choose an _On HTML element click_ action source.
    4. Input the name of the action and be sure to remember it, because the action name will be used while configuring the HTML code.
    5. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
    6. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
    7. After configuring all needed settings, click "Add" at the right bottom of the "Add action" window.
    8. Now you see configured action, so you can double-check action source and action type.
    9. Now move to the Advanced cell of the widget. There you should see two fields: CSS and HTML.
    10. In the HTML field enter an ID of the action which is its name. Since the name in the example is _test1_, the HTML code will look like this:

```ruby
<div id='button' class='card'>HTML code here</div>
```

- Where _button_ is the name of the action and _HTML code here_ is the text which is going to be shown on the HTML Card widget

Then apply changes by clicking the orange tick icon in the top right of the window and then close the details window.  
In the Edit mode of the dashboard save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

To execute an action click anywhere in the widget. 

{% include images-gallery.html imageCollection="onhtml" %}

- **Value Title widget**

    1. In the widget's Edit mode, move to the last cell called "Actions".
    2. Click the "+" icon on the right of the window to add a new action.
    3. In the top drop-down menu, choose an _On HTML element click_ action source.
    4. Input the name of the action and be sure to remember it, because the action name will be used while configuring the HTML code.
    5. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
    6. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
    7. After configuring all needed settings, click "Add" at the right bottom of the "Add action" window.
    8. Now you see configured action, so you can double-check action source and action type.
    9. Now move to the Advanced cell of the widget. There you should see two fields with already written code: CSS and HTML.
    10. For example let's configure an action that executes by clicking the widget's header. In the HTML field find a header tag and enter an ID of your action there. 
        Since the name in the example is _test2_, the HTML code will look like this:

```ruby
<h1 id='button2'>Value title</h1>
```

- Where _button2_ is the name of the action and _Value title_ is the text that will be shown in the widget's header.

Then apply changes by clicking the orange tick icon in the top right of the window and then close the details window.  
In the Edit mode of the dashboard save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

To execute an action click the widget's header.

{% include images-gallery.html imageCollection="onhtml-title" %}

#### Map widget action sources

Map widget has unique action sources that need to be considered separately. 

Let's start by adding a Map widget. Go to the dashboard where your Map will be placed and click a bottom right "Pencil" icon:
- **If you have an empty new dashboard**, you need to just click the message in the middle "Add a new widget" and in the drop-down menu at the end of the list, choose "Maps". 
  Then, add a Datasource of your widget and click "Add".
- **If some widgets were added before to this dashboard**, click the "Paper" icon ("Create new widget"). 
In the drop-down menu list to the end of the list to choose "Maps". Finally, add a Datasource of your widget and click "Add".

{% include images-gallery.html imageCollection="map-creation" %}

- Adding an action to the Map widget

Now it's time to add an action. To do this you should click the "Pencil" icon on the right top of the Map widget to enter the "Edit widget" mode.
Navigate to the "Action" cell and there click the "+" icon in the right of the screen. The "Add action" window will be opened.

{% include images-gallery.html imageCollection="navigate-to-actions-map" %}

**Please note**: all actions explanations assume that you have already added states to your widget. If not, please do so. How to do it [read here](/docs/{{docsPrefix}}user-guide/dashboards/#states).

##### 1. On marker click
  
Action will be executed by clicking on the red map's marker. 

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. In the top drop-down menu, choose an _On marker click_ action source. 
4. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
5. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
6. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.
7. Now you see configured action, so you can double-check action source, icon, and action type.
8. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
9. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

{% include images-gallery.html imageCollection="omc-map" %}

##### 2. On polygon click

Polygon is a plane figure that’s described by a finite number of dots. We use polygon which is based on coordinates that are specified within the device we use, but you can use any other entity.
You may mark your assets and any other entities with a polygon option. For the polygon, we can specify the next settings. Polygon coordinates are being received in a format:

``` ruby
[[1CoordinateLatitude,1CoordinateLatitude],[2CoordinateLatitude,2CoordinateLatitude]...[nCoordinateLatitude,nCoordinateLatitude]]
```

where n - number of coordinates which polygon is described by.

To configure _On polygon click_ action source on the Map widget, you should:

1. In the widget's Edit mode move to the cell "Advanced".
2. Scroll to the Polygon Settings, tick the checkbox "Show polygon".
3. Input Polygon key name and remember it, it's going to be used later.
4. Click an orange tick mark on the right top of the window to apply changes.
5. Click the right bottom tick icon to save the changes.
6. With the main left ThingsBoard menu go to Assets.
7. From the assets list select an asset you'd like to add a polygon to and open it.
8. In the Assets details window, go to the Attributes cell.
9. Click the "+" icon to add a new attribute to the asset.
10. In the "Add attribute" window enter a Key - it must be the same Key as the Polygon key name.
11. Select Value Type "Strings" and input coordinates of the massive for your polygon. In the example, we use random coordinates
```
[[37.758436,  -122.509429],[37.759834, -122.476874],[37.734690, -122.475170],[37.733531, -122.506271]]
```
12. In the "Add attribute" window click the right bottom button "Add".
13. Go back to the Dashboard with the Map widget.
14. Enter Dashboard's Edit mode by clicking the bottom right "Pencil" icon.
15. Click the "pencil" icon on the right top corner of the Map widget to enter its Edit mode.
16. Add in the Datasources a data key that has just been configured. Just start typing its name and it will be shown in the list.
17. After adding a new data key, apply changes.
18. Move to the last cell "Actions".
19. Click the "+" icon on the right of the window to add a new action.
20. In the top drop-down menu, choose an _On polygon click_ action source.
21. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu. 
22. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
23. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.
24. Now you see configured action, so you can double-check action source and action type.
25. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
26. Save applied changes by clicking the orange tick icon "Apply changes" in the bottom right of the screen.

To execute an action click anywhere inside the polygon.

{% include images-gallery.html imageCollection="map-polygon" %}
  
##### 3. Tooltip tag action
  
When clicking a map's marker, a tooltip will appear. A tooltip contains a link that executes an action.  
Please note, in this manual explained a basic way to use the tooltip tag action source. It is possible to configure several links for various devices/assets that return different values. 
Do it with the tooltip function in the advanced mode of the map widget.

To configure the Tooltip tag action of the Map widget, you should:

1. In the widget's Edit mode move to the last cell "Actions".
2. Click the "+" icon on the right of the window to add a new action.
3. In the top drop-down menu, choose an _On marker click_ action source.
4. Enter a name for the action and make sure to remember it, it's going to be used later.
5. Since the example for all the action sources is the "Navigate to new dashboard state" action type, choose it in the drop-down Type menu.
6. After choosing an action type, the drop-down menu "Target dashboard state" appears. Select a previously created state you'd like to be transitioned to.
7. When all needed settings are configured, click "Add" at the right bottom of the "Add action" window.
8. Now you see configured action, so you can double-check action source, icon, and action type.
9. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
10. Move to the Advanced settings cell.
11. Scroll down to the Tooltip configuration and tick the checkbox "Show tooltip".
12. In the Tooltip line find _link-act name_ and input there the action name in a format:

```
<link-act name='TooltipTag'>Navigate to the Building A</link-act>
```

where _TooltipTag_ is an action name and _Navigate to the Building A_ is the text that will be shown as a link on a tooltip.

13. Apply changes by clicking the orange tick icon in the top right of the window and then close the details window.
14. Save applied changes by clicking the orange at the right bottom of the screen.

Click a map's marker for a tooltip to appear. To execute an action, click the text of the link at the bottom of the tooltip.

{% include images-gallery.html imageCollection="tooltiptag" %}

## Special actions settings

#### Open right dashboard layout (mobile view)

Often users need to see updated details of one widget on another widget near it. For example, we have a list of assets in Entity Table widget, and we want to update their details on the Chart widget near.
From the desktop, it’s easily configuring by placing two widgets near each other and choosing an "Update current dashboard" action type, however an adaptive mobile screen automatically places widgets under each other,
so you need to scroll down to see needed information on the second one.

{% include images-gallery.html imageCollection="mob" %}

[Layouts](/docs/{{docsPrefix}}user-guide/dashboards/#layouts) feature solves this issue. To configure layouts and move already created widgets, you should:
1. Enter the Dashboard's Edit mode by clicking a "Pencil" icon at the right bottom of the page.
2. On the left top of the window click "Manage layouts".
3. In the opened "Manage layouts" window, tick the checkbox "Right" and click "Save". Now we have two layouts.
4. Then, we need to transfer the Chart widget to the right layout. Right-click widget and from the appeared menu choose "Copy".
5. Right-click anywhere on the empty layout and from the appeared menu choose "Paste".
6. When we have two copies of the same widget on both layouts, let's delete the one on the main layout by right-clicking it and choosing "Delete" in the appeared menu.
   In the opened dialog confirmation window click "Yes" and the widget will be deleted.
7. Adjust widgets' size by dragging their edges.

{% include images-gallery.html imageCollection="mob-layout-1" %}

Now, to activate an action that allows seeing details of one widget on another one with the one button click and no more movements, you need:

1. Enter Edit mode of the widget on the main layout by clicking the "Pencil" icon on the right top of the widget.
2. Go to the "Actions" cell and click the "+" icon to add a new action.
3. Choose the desired action source, in the example, it is going to be the Action cell button.
Give a name for the action, it is going to be visible in the mobile mode. Select an icon representing a button (if needed) by clicking an icon image and choosing from the variety of icons.
4. Select an action type "Update current dashboard state". Select a target dashboard state - it should be the dashboard state where layouts were created.
5. Finally, tick a checkbox "Open right dashboard layout (mobile view)".
6. Click "Save" at the right bottom of the dialog window to apply changes.
7. In the Dashboard Edit mode, click the orange tick-mark at the right bottom of the page.

Now in the mobile mode, by clicking an action button, we will be directly transitioned to the needed widget where we can see the details of the entities of the main widget.

{% include images-gallery.html imageCollection="mob-layout-2" %}


#### Open in a separate dialog

There are times when it is impractical to move to a separate dashboard state to view the details of a widget, but you just would like to open it on the same dashboard page. 
For these situations, there is an _Open in a separate dialog_ feature that allows opening another [state](/docs/{{docsPrefix}}user-guide/dashboards/#states) on the same page using a configured action.  
To open a state in a separate dialog window on the dashboard you are in, you should:

1. Enter the Dashboard's Edit mode by clicking a "Pencil" icon at the right bottom of the page.
2. First we need to add a new state, so click the "Manage dashboard states" button on the left top of the dashboard.
3. In the opened window, click the "+" icon to add a new state. What is a state and how to configure it, please, learn [here](/docs/{{docsPrefix}}user-guide/dashboards/#states).
4. After adding a state, click the "Save" button at the right bottom of the "Manage dashboard states" window.
5. Now, enter widget Edit mode by clicking the "Pencil" icon on the right top of the widget.
6. Go to the "Actions" cell and click the "+" icon to add a new action.
7. Choose the desired action source, in the example, it is going to be the Action cell button.
Give a name for the action. Select an icon representing a button by clicking an icon image and choosing from the variety of icons.
8. From the drop-down menu select a "Navigate to new dashboard" action type, and a target state, the one that was created in step 3.
9. Tick the check box "Open in separate dialog" and give a title to a dialog.
10. By default, the checkbox "Hide dashboard toolbar in dialog" is ticked. If you need to see a toolbar in the dialog window, you should uncheck it. 
The toolbar displays entities, time window, dashboard export button, and expand to a fullscreen button.
11. It is optional to adjust a dialog width and height in percents. Width is relative to viewport height, and height is relative to width correspondingly.
12. When the action has been configured, click on the "Add" button at the right bottom of the "Add action" window.
13. When the action has been added, double-check the action source, icon, and action type. If everything is correct, click the orange tick mark on the right top of the page.

{% include images-gallery.html imageCollection="dialog-window" %}

Now it is time to add a widget to another state and execute an action. To do it, you should:
1. Go to a newly created yet empty state and click "Add new widget" in the middle of the screen.
2. From the drop-down menu "Current bundle", select the desired widget, in our example, it is going to be map widget "OpenStreetMap".
3. Add data sources and click "Add".
4. A widget has been added on the dashboard state, drag its edges to adjust the size.
5. When adjusted, click the orange tick at the left bottom of the screen to save applied changes.

To perform an action and open a dialog window with the state, click a cell button opposite entity names.

{% include images-gallery.html imageCollection="dialog-window-1" %}

#### Set entity from widget

_Set entity from widget_ checkbox is responsible for adding specific entity from the widget to the state. This allows you to use the entity in the target dashboard state by creating the "[Entity from dashboard state](/docs/{{docsPrefix}}user-guide/ui/aliases/#entity-from-dashboard-state)" or other aliases. For example, if you have a list of devices in the table widget and would like to show specific device details when you click on the table row.

Sometimes you need to store more then one entity in the state. For example, you would like to navigate to customer list, then to devices of the customer and finally to specific device details. In such case, you may have three states: "Main", "Customer Devices" and "Device Details".
You may use two different state entity parameters to reference current customer (e.g. "currentCustomer") and current device (e.g. "currentDevice") on the "Device Details" state.

{% include images-gallery.html imageCollection="entityfromwidget" %}

