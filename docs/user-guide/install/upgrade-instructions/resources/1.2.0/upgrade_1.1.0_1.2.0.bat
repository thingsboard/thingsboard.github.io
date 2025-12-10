@echo off
setlocal ENABLEEXTENSIONS
setlocal EnableDelayedExpansion

set CQLSH=C:\"Program Files\DataStax Community\apache-cassandra\bin"\cqlsh

call:deleteAllSystemWidgetTypes

@echo Adding system widget types ....

call %CQLSH% -f %~dp0system_widgets.cql

@echo Finished

goto:EXIT

:deleteAllSystemWidgetTypes

@echo Deleting all system widget types ...

for /F "usebackq skip=3 tokens=1 eol=(" %%a in (`%CQLSH% -e "select id from thingsboard.widget_type_by_tenant_and_aliases where tenant_id = minTimeuuid ( 0 )"`) do (	
	set widgetTypeId=%%a
	@echo Deleting widget type with id = !widgetTypeId!
	call %CQLSH% -e "delete from thingsboard.widget_type where id = !!widgetTypeId!!">nul
)

goto:eof

:EXIT
exit /b
