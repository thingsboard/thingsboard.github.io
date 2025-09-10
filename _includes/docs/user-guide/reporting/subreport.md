* TOC
{:toc}

{% assign sinceVersion = "4.2" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

A **Subreport** in ThingsBoard is a special type of report template that is **designed to be embedded inside another (master) report**. 
It behaves like a **reusable**, **modular block** that receives context from the parent report and generates its content accordingly.

Just like regular reports, subreports can contain components such as tables, text blocks, images, etc., and they fully support dynamic entity aliases and data filtering.

> Subreports **are not scheduled or generated independently** — they are **included as part of a main (master) report.**

## Where are subreports useful?

Subreports are especially useful when you want to:

- **dynamically generate repeating sections** for multiple entities (for example, an alarm table for each device in the report).
- **reuse a layout or data block** across multiple reports (e.g., a telemetry summary for devices).
- **split responsibilities** between different teams working on specific parts of the report.

## New entity filters for subreport

For subreports, special filters are available that are not present in regular reports:
- **Entity from master report**. Uses the entity retrieved from the data source configured for the subreport component in the master report.
    - If multiple entities are present, a separate subreport component will be generated for each one. This is useful when you need to create a repeating block for each device or asset in a list.
- **Owner of entity from master report**. Uses the owner of the entity retrieved from the datasource in the master report.
    - If multiple entities are present, a separate subreport component will be generated for each entity.

{% include images-gallery.html imageCollection="reporting-new-entity-aliases-2" %}

## Creating subreport template

- Open the "**Reporting**" page from the left-hand sidebar. You will automatically land on the "**Templates**" tab.
- Click the "**+ Add report template**" button in the top-right corner and select "**Create new report template**" from the dropdown menu.
- In the pop-up window, fill in the following:
  - Enter a descriptive name for the template.
  - Choose the report format: **PDF** or **CSV**. 
  - Select **Subreport** as the report template type. 
  - Click Add to open the **Report Builder** interface.

{% include images-gallery.html imageCollection="create-subreport-template" %}

### Subreport Builder

In the **Subreport Builder**, components are added using a **drag-and-drop action** from the **components library** into the **subreport&#39;s content area**.
- Add and configure the required elements, such as tables, text blocks, images, charts, and other available components.
- Configure each component’s data sources in the same way as you would for a regular report.

{% include images-gallery.html imageCollection="subreport-builder" %}

## Adding subreport to master report

- Open or create the **main (master) report template**.
- From the list of available components, **select Subreport** and **drag** it to the desired position in the report layout.
- **Configure the subreport component**:
  - In the "**Datasource**" section, specify the entity whose data will be passed to the subreport template. Use the **Filter** field to apply additional conditions for entity selection.
  > If the specified entity alias returns multiple entities, a separate subreport instance will be generated for each one.
  - In the "**Subreport**" section, choose the **pre-created subreport template** you want to include.
- Save changes.

{% include images-gallery.html imageCollection="adding-subreport-to-master-report" %}

(Optional) Run Generate Preview to ensure the subreport displays correctly.

## Example. Daily alarm report for each device

Imagine you need a daily report template that lists all alarms triggered for each of your devices during the current day.

This can be achieved by using subreport:
- **Subreport** — contains a table of alarms for a single device.
- **Master report** — iterates through all devices and inserts the subreport for each one.

### Step 1: Create the subreport template

First, create a **Subreport** template that will contain the alarm table for a single device.
For its **datasource**, use a **new entity alias** with the filter type "**Entity from master report**".
This allows the master report to pass data about a specific device into the subreport.

- Open the "**Reporting**" page from the left-hand sidebar. You will automatically land on the "**Templates**" tab.
- Click the "**+ Add report template**" button in the top-right corner and select "**Create new report template**" from the dropdown menu.
- In the pop-up window, fill in the following:
  - Enter a "**Daily Device Alarms (Subreport)**" as subreport template name. 
  - Choose the **PDF** report format.
  - Select **Subreport** as the report template type.

{% include images-gallery.html imageCollection="example-create-subreport-1" %}

<br>

**Configure the subreport in Report Builder:**
- **Add a "Rich text" component** by dragging it from the **components library** into the **content area**. In its configurations:
    - Set the **Datasource** by creating a new Entity Alias with filter type "**Entity from master report**". This allows the master report to pass the specific device to the subreport.
    - Add the **data key** "**name**" with the type "**Entity field**".
    - In the **Content** tab, enter your desired text and include the variable **${Name}** to dynamically display the current entity name.
  - Save the component.

{% include images-gallery.html imageCollection="example-create-subreport-2" %}
- **Add an "Alarm table" component** by dragging it from the **components library** into the **content area**. In its configurations:
  - Set the **time window** to display alarms from the **current day**.
  - Use the previously created "**Entity from master report**" as the **datasource** so that the table displays alarms for the device whose data is passed by the master report.
  - Set the table **title** and include the variable **${entityName}** to dynamically display the current entity name.
  - Save the component.

{% include images-gallery.html imageCollection="example-create-subreport-3" %}

- **Add a "Divider" component** to visually separate sections in the report for each device. Save the component.

{% include images-gallery.html imageCollection="example-create-subreport-4" %} 

Subreport configuration is complete. Save the subreport by clicking the "**Save**" button in the top-right corner.

{% include images-gallery.html imageCollection="example-create-subreport-5" %}

### Step 2: Create the master report template

Now create another **template for the master report**.
We&#39;ll configure it to pass the data of **each of your devices** to the **subreport** template. The subreport template will then generate a report for each device according to its own configuration.

- Go to "**Reports**" page → "**Templates**" tab, then click "**+ Add report template**".
- Fill in the template details:
  - Name it "**Daily Device Alarms Report**".
  - Set the format to **PDF**.
  - Choose "**Report**" as the template type. 
  - Click "**Add**".

{% include images-gallery.html imageCollection="example-create-report-1" %}

<br>
**Configure the master report in Report Builder:**
- **Add a "Heading" component** by dragging it from the **components library** into the **content area**.
  - Enter the heading text, for example: "**Daily device alarms report**"'
  - Save the component.

{% include images-gallery.html imageCollection="example-create-report-2" %}

- **Add an "Subreport" component** by dragging it from the **components library** into the **content area**. 
  - In the "**Datasource**" section, create a new entity alias that retrieves all your entities with Device type. 
  - In the "**Subreport**" section, select the previously created subreport **Daily Device Alarms (Subreport)**.
  - Save the component.
- Finally, save the master report template.

{% include images-gallery.html imageCollection="example-create-report-3" %}

### Step 3: Generate test report

To make sure the subreport is generated correctly, click the "**Generate test report**" button in the top-right corner of the window.

As you can see, the generated report contains all three of our devices, each with its separate table showing the alarms for the current day.

{% include images-gallery.html imageCollection="example-generate-test-report" %}