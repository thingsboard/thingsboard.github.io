{% capture containerId %}{{include.containerId}}{% endcapture %}
{% capture careers %}{% include careers.json %}{% endcapture %}

(function () {
    var containerId = "{{ containerId }}";
	var careers = {{ careers }};

	var targetContainer = document.getElementById(containerId);

    var careersByType = careers.filter(function(vacancy) {
        return vacancy;
    });

    careersByType.forEach(function (obj) {
		var box = document.createElement('a');
		box.className = 'cars-box';
        box.href = 'v/';

        var titleElement = document.createElement('p');
        titleElement.textContent = obj.title;
        titleElement.className = 'title';

		var descriptionElement = document.createElement('p');
		descriptionElement.textContent = obj.description;
        descriptionElement.className = 'description';

		var div = document.createElement('div');

		var locationElement = document.createElement('p');
		locationElement.textContent = obj.location;
		locationElement.className = 'location';

        var linkElement = document.createElement('a');
        linkElement.href = 'v/';
        linkElement.textContent = 'Read more';
        linkElement.className = 'link';

        targetContainer.appendChild(box);
        box.appendChild(div);
        div.appendChild(titleElement);
        div.appendChild(descriptionElement);
        box.appendChild(locationElement);
        box.appendChild(linkElement);
	});
})();