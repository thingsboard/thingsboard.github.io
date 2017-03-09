#!/bin/bash

function selectSystemWidgetType {
   bundleAlias=$1
   alias=$2
   cqlsh -e "select id from thingsboard.widget_type_by_tenant_and_aliases where tenant_id = 13814000-1dd2-11b2-8080-808080808080 and bundle_alias = '$bundleAlias' and alias = '$alias'" | sed -n 4p | awk '{ print $1 }'
}

function selectFirstSystemWidgetType {
   cqlsh -e "select id from thingsboard.widget_type_by_tenant_and_aliases where tenant_id = 13814000-1dd2-11b2-8080-808080808080" | sed -n 4p | awk '{ print $1 }'
}

function deleteSystemWidgetType {
   bundleAlias=$1
   alias=$2
   widgetTypeId=$( selectSystemWidgetType $bundleAlias $alias )
    if [ ! -z "$widgetTypeId" ]; then
	echo Will delete widgetTypeId [$widgetTypeId]
        cqlsh -e "delete from thingsboard.widget_type where id=$widgetTypeId"
    else 
	echo Widget type with bundle alias [$bundleAlias] and [$alias] is not present in db.
    fi
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
