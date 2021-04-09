<div class="warn-banner">
    <img src="/images/doc-warn-icon.svg"/>
    <div>
      {% if include.title %}
      <div class="warn-title">{{ include.title }}</div>
      {% endif %}
      {{ include.content | markdownify }}
    </div>
</div>
