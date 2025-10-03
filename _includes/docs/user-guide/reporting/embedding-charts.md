* TOC
{:toc}

{% assign sinceVersion = "4.2.1" %}
{% include templates/since.md %}

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

**Chart components** in reports let you create visualizations using customizable line, bar, pie, and doughnut charts based on data from entities.   
They help you:
- Monitor how data changes over time.
- Detect anomalies and irregular patterns.
- Compare key performance indicators across categories.

Using charts makes analytics more visual and helps you make informed decisions faster.

## Embedding a chart to the report

To embed the chart to a report template, follow these steps:

- Go to the <b>Templates</b> tab on the <b>Reporting</b> page.
- Select an existing report (subreport) template or [create a new one](/docs/{{docsPrefix}}user-guide/reporting/reporting-key-concepts/#how-to-create-a-report-template){:target="_blank"}.
- In the component library, find the <b>Charts</b> components, choose the desired chart, and drag it into the content area of your report.
- Configure the chart&#39;s data source:
  - In the <b>Datasource</b> section, specify the device whose data should be displayed on the chart, or select an entity alias. If the alias includes multiple entities, the chart will show separate lines for each data key of each entity.
  - In the <b>Series</b> section, specify the key(s) to retrieve data.
  - Adjust other parameters such as <b>Y axes</b>, <b>Thresholds</b>, <b>X axis</b>, <b>Legend</b>, etc.
- <b>Save<b> the component.
- Save the template.

{% include images-gallery.html imageCollection="embedding-chart" %}

## Charts report components

**1. Time series chart**

Універсальний chart для відображення даних у часі. Найкраще підходить для моніторингу тенденцій та виявлення аномалій.<br>
  **Особливості:** Може поєднувати в собі класичні лінійні та стовпчасті діаграми одночасно.<br>
  **Приклад:** температура датчика протягом доби + кількість повідомлень за інтервали.

**2. Line chart**

Класичний лінійний графік для порівняння кількох показників з плином часу.<br>
  **Особливості:** добре показує прогресію або кореляцію між кількох показниками.<br>
  **Приклад:** порівняння середньої температури в різних кімнатах.

**3. Bar chart**

Вертикальні стовпчики для порівняння категорій або груп.<br>
  **Особливості:** ідеально підходить для ранжування й відображення агрегованих значень.
  **Приклад:** споживання енергії різними пристроями за місяць.

**4. Point chart**

Показує значення у вигляді окремих точок.<br>
  **Особливості:** добре підходить для розкиду даних або подій у часі.<br>
  **Приклад:** відображення моментів спрацювання датчика руху.

**5. State chart**

Відображає зміни станів пристрою/системи у часі.<br>
  **Особливості:** показує, коли і як довго об’єкт перебував у певному стані (ONLINE/OFFLINE, ERROR/NORMAL).<br>
  **Приклад:** робота насоса (увімкнено/вимкнено) протягом тижня.

**6. Bar chart with labels**

Стовпчаста діаграма з підписами всередині або над стовпчиками.<br>
  **Особливості:** робить акцент на числових значеннях, а не тільки на відносних.<br>
  **Приклад:** щоденне споживання води в різних квартирах із зазначенням літрів прямо на стовпчиках.

**7. Range chart**

Показує діапазон значень (мінімум–максимум) у часі.<br>
  **Особливості:** дає змогу оцінити розкид або коливання даних.<br>
  **Приклад:** мінімальна та максимальна температура щогодини.

**8. Bars**

Компактне відображення кількох показників у вигляді смуг (progress bar).<br>
  **Особливості:** добре підходить для показу виконання плану чи рівня заповнення.<br>
  **Приклад:** рівень заряду акумулятора або використання пам’яті.