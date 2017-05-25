#!/bin/bash

function selectFirstSystemWidgetType {
   cqlsh -e "select id from thingsboard.widget_type_by_tenant_and_aliases where tenant_id = 13814000-1dd2-11b2-8080-808080808080" | sed -n 4p | awk '{ print $1 }'
}

function deleteAllSystemWidgetTypes {
    echo Deleting all system widget types ...
    widgetTypeId=$( selectFirstSystemWidgetType )
    while [ ! -z "$widgetTypeId" ]; do
	widgetTypeId=$( selectFirstSystemWidgetType )
	echo Will delete widgetTypeId [$widgetTypeId]
	cqlsh -e "delete from thingsboard.widget_type where id=$widgetTypeId"
	widgetTypeId=$( selectFirstSystemWidgetType )
    done
}

deleteAllSystemWidgetTypes

echo Adding system widget types ....
cqlsh -f system_widgets.cql

echo Finished!
