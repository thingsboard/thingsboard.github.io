@echo off
setlocal ENABLEEXTENSIONS
setlocal EnableDelayedExpansion

set CQLSH=C:\"Program Files\DataStax Community\apache-cassandra\bin"\cqlsh

@echo Updating schema ....

call %CQLSH% -f %~dp0schema_update.cql

call :deleteSystemWidgetType "cards" "timeseries_table"
call :deleteSystemWidgetType "maps" "google_maps"
call :deleteSystemWidgetType "maps" "route_map"

@echo Adding system widget types ....

call %CQLSH% -f %~dp0system_widgets.cql

@echo Finished

goto:EXIT

:deleteSystemWidgetType

@echo Deleting system widget type %1 %2

for /F "usebackq skip=3 tokens=1 eol=(" %%a in (`%CQLSH% -e "select id from thingsboard.widget_type_by_tenant_and_aliases where tenant_id = minTimeuuid ( 0 ) and bundle_alias='%1' and alias='%2'"`) do (	
	set widgetTypeId=%%a
	@echo Deleting widget type with id = !widgetTypeId!
	call %CQLSH% -e "delete from thingsboard.widget_type where id = !!widgetTypeId!!">nul
)

goto:eof

:EXIT
exit /b
