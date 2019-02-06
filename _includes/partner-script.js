{% capture partners %}{% include_relative partners.json %}{% endcapture %}

;(function () {
	var partners = {{ partners }};

	var hardwareContainer = document.getElementById('hardwareContainer')
	var integratorContainer = document.getElementById('integratorContainer')

	var sorted = partners.sort(function (a, b) {
		if (a.name > b.name) return 1
		if (a.name < b.name) return -1
		return 0
	})

	sorted.forEach(function (obj) {
		var box = document.createElement('div');
		box.className = 'partner-box';

		if (obj.program) {
            var programImg = document.createElement('img');
            programImg.className = 'partner-program';
            programImg.src = '/images/partners/' + obj.program + '-partner.svg';
            box.appendChild(programImg);
        }

		var img = document.createElement('img');
        img.className = 'logo';
		img.src = '/images/partners/' + obj.logo;

		var div = document.createElement('div');

        var titleElement = document.createElement('p');
        titleElement.textContent = obj.name;
        titleElement.className = 'title';

		var p = document.createElement('p');
		p.textContent = obj.blurb;

        var spacer = document.createElement('p');
        p.style.flex = '1';

        var linksElement = document.createElement('div');
        linksElement.className = 'links';

        for (var linkName in obj.links) {
            var linkInfo = obj.links[linkName];
            var link = document.createElement('a');
            link.href = linkInfo.href;
            if (linkInfo.target) {
                link.target = linkInfo.target;
            }
            link.textContent = linkName;
            if (linksElement.childNodes.length) {
                var divider = document.createElement('span');
                divider.textContent = ' | ';
                linksElement.appendChild(divider);
            }
            linksElement.appendChild(link);
        }

        div.appendChild(titleElement);
		div.appendChild(p);
        div.appendChild(spacer);
		div.appendChild(linksElement);

		box.appendChild(img);
		box.appendChild(div);

		var container = obj.type === 'hardware' ? hardwareContainer : integratorContainer;
		container.appendChild(box);
	});

	var becomeHardwarePartnerBox = document.createElement('div');
    becomeHardwarePartnerBox.className = 'partner-box';

    var div = document.createElement('div');
    var p = document.createElement('p');
    p.textContent = 'Want to become ThingsBoard Hardware Partner?';
    div.appendChild(p);

    var linksElement = document.createElement('div');
    linksElement.className = 'links';

    var a = document.createElement('a');
    a.textContent = 'Apply for Hardware Partner Program';
    a.href = '/partners/hardware-program';
    linksElement.appendChild(a);


    div.appendChild(linksElement);
    becomeHardwarePartnerBox.appendChild(div);

    /*var buttonElement = document.createElement('a');
    buttonElement.className = 'button';
    buttonElement.textContent = 'Become Hardware Partner';
    buttonElement.href = '/partners/register';

    becomeHardwarePartnerBox.appendChild(buttonElement);*/

    hardwareContainer.appendChild(becomeHardwarePartnerBox);


})();
