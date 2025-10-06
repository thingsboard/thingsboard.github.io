* TOC
{:toc}

{% assign sinceVersion = "4.2.1" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

**Chart components** in reports let you create visualizations using customizable line, bar, pie, and doughnut charts based on data from entities.   

## When to use charts in Reports

- **Visualizing time series** – charts help track changes in metrics over time and highlight trends. 
- **Comparing categories or entities** – useful for quickly comparing data from multiple devices or key performance indicators across categories. 
- **Identifying anomalies and irregular patterns** – charts make it easy to spot sudden deviations or abnormal events. 
- **Aggregated data** – show averages, minimums, and maximums across time intervals in a clear way.
- **Proportions and distribution** – pie and doughnut charts illustrate how categories contribute to the whole. 
- **Management presentations** – charts allow you to deliver key insights to stakeholders without digging into numbers.

Using charts makes analytics more visual and helps you make informed decisions faster.

## Chart component types

<div style="display: flex; flex-direction: column;">
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Time series chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/time-series-table.png" alt="Time series chart" class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p>Універсальний chart для відображення даних у часі. Найкраще підходить для моніторингу тенденцій та виявлення аномалій. Може поєднувати в собі класичні лінійні та стовпчасті діаграми одночасно.<br><b>Приклад:</b> температура датчика протягом доби + кількість повідомлень за інтервали.</p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Line chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/line-chart.png" alt="Line chart" class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Класичний лінійний графік для порівняння кількох показників з плином часу. Добре показує прогресію або кореляцію між кількох показниками.<br>
    <b>Приклад:</b> порівняння середньої температури в різних кімнатах.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Bar chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/bar-chart.png" alt="Bar chart" class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Вертикальні стовпчики для порівняння категорій або груп. Ідеально підходить для ранжування й відображення агрегованих значень.<br>
    <b>Приклад:</b> споживання енергії різними пристроями за місяць.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Point chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/point-chart.png" alt="Point chart" class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Показує значення у вигляді окремих точок. Добре підходить для розкиду даних або подій у часі.<br>
    <b>Приклад:</b> відображення моментів спрацювання датчика руху.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; State chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/state-chart.png" alt="State chart" class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Відображає зміни станів пристрою/системи у часі. Показує, коли і як довго об’єкт перебував у певному стані (ONLINE/OFFLINE, ERROR/NORMAL).<br>
    <b>Приклад:</b> робота насоса (увімкнено/вимкнено) протягом тижня.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Bar chart with labels.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/bar-chart-with-labels.png" alt="Bar chart with labels." class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Стовпчаста діаграма з підписами всередині або над стовпчиками. Робить акцент на числових значеннях, а не тільки на відносних.<br>
    <b>Приклад:</b> щоденне споживання води в різних квартирах із зазначенням літрів прямо на стовпчиках.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Range chart.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/range-chart.png" alt="Range chart." class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Відображає зміни даних часових рядів з плином часу за допомогою колірних діапазонів.<br>
    <b>Приклад:</b> мінімальна та максимальна температура щогодини.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Bars.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/bars.png" alt="Bars." class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Компактне відображення кількох показників у вигляді смуг (progress bar). Добре підходить для показу виконання плану чи рівня заповнення.<br>
    <b>Приклад:</b> рівень заряду акумулятора або використання пам’яті.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Pie.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/pie.png" alt="Pie." class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Кругова діаграма для відсоткового співвідношення частин. Добре для візуалізації структури «ціле ↔ частини».<br>
    <b>Приклад:</b> частка споживання електроенергії різними підрозділами.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Doughnut.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/doughnut.png" alt="Doughnut." class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    Схожа на кругову діаграму, але з порожнистим центром. У центрі може відображатися ключова метрика (суму, середнє, KPI) або додаткова інформація.<br>
    <b>Приклад:</b> % використаної потужності + абсолютне значення в центрі.
    </p>
  </div><br>
  <div>
    <p style="font-size: 16px;">
      <b>&#8226; Horizontal doughnut.</b>
    </p>
    <img src="/images/user-guide/reporting/embedding-charts/horizontal-doughnut.png" alt="Horizontal doughnut." class="image-float" style="float: left; max-width: 250px; max-height: 250px; margin: 0px 10px 0px 0px">
    <p class="text-content">
    варіація doughnut у горизонтальному вигляді (як горизонтальні кільця). дозволяє компактно розташувати кілька метрик у ряд.<br>
    <b>Приклад:</b> частка виконаних і незавершених завдань у проекті.
    </p>
  </div>
</div>

## Embedding a chart to the report

To embed the chart to a report template, follow these steps:

- Go to the <b>Templates</b> tab on the <b>Reporting</b> page.
- Select an existing report (subreport) template or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
- In the component library, find the <b>Charts</b> components, choose the desired chart, and drag it into the content area of your report.
- In the chart settings window:
  - Configure the **data source**:
    - **Device** — a specific device that sends telemetry.
    - **Entity alias** — an abstract reference to one or more entities. It is often used when a widget needs to work with multiple entities.
  - In the **Series** section, specify the data keys you want to display on the chart.   
  For each key, you can configure одиниці вимірювання, points, color and style, legend, etc.
  - Adjust other parameters such as <b>Y axes</b>, <b>Thresholds</b>, <b>X axis</b>, <b>Legend</b>, etc.
- Save the component.
- Save the template.

{% include images-gallery.html imageCollection="embedding-chart-1" %}

To verify that your template is configured correctly and the data is displayed properly, click the **Create test report** button (located next to **Save**). 
The system will generate a test report based on your configuration.

{% include images-gallery.html imageCollection="embedding-chart-2" %}