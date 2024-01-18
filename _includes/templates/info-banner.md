<div class="info-banner">
    <img src="/images/doc-info-icon.svg" alt="Doc info icon">
    <div>
      {% if include.title %}
      <div class="info-title">{{ include.title }}</div>
      {% endif %}
      {{ include.content | markdownify }}
    </div>
</div>
