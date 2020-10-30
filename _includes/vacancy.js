{% capture containerId %}{{include.containerId}}{% endcapture %}
{% capture vacancyId %}{{include.id}}{% endcapture %}
{% capture careers %}{% include careers.json %}{% endcapture %}

(function () {
    var containerId = "{{ containerId }}";
    var vacancyId = "{{ vacancyId }}";
	var careers = {{ careers }};

	var targetContainer = document.getElementById(containerId);

    var vacancyById = careers.filter(function(partner) {
        return partner.id === vacancyId;
    });

    vacancyById.forEach(function (obj) {
        var titleElement = document.createElement('p');
        titleElement.textContent = obj.title;
        titleElement.className = 'title';

		var locationElement = document.createElement('p');
		locationElement.textContent = obj.location;
		locationElement.className = 'location';

        targetContainer.appendChild(titleElement);
        targetContainer.appendChild(locationElement);
	});
})();