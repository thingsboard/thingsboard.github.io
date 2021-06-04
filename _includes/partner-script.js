{% capture containerId %}{{include.containerId}}{% endcapture %}
{% capture partnersType %}{{include.type}}{% endcapture %}
// {% capture partnersConnection %}{{include.connection}}{% endcapture %}
{% capture partners %}{% include partners.json %}{% endcapture %}

// $(document).ready(function() { rengen(); });

function rengen(connect) {
    alert(connect);
    var containerId = "{{ containerId }}";
    var partnersType = "{{ partnersType }}";
    // var partnersConnection = "{{ partnersConnection }}";
	var partners = {{ partners }};

    alert("xyiks1");
    var x = containerId.getElementsByClassName("checked")[0];
    alert("xyiks2");
    alert(x);

	var targetContainer = document.getElementById(containerId);
    targetContainer.innerHTML = '';

    var partnersByType = partners.filter(function(partner) {
        // return partner.type === partnersType;
        return partner.type.includes(connect);
    });

    // var partnersByConnection = partnersByType.filter(function(partnerH) {
    //     return partnerH.connection.includes("lte");
    // });
    //
    // partnersByConnection.forEach(function (obj) {
    partnersByType.forEach(function (obj) {
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
        p.className = 'description';

        var text = document.createElement('div');
        text.className = 'text';

        var bg = document.createElement('div');
        bg.className = 'box-background';

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
            linksElement.appendChild(link);
        }

        text.appendChild(titleElement);
		text.appendChild(p);
        div.appendChild(text);
		div.appendChild(linksElement);
		box.appendChild(bg);
		box.appendChild(img);
		box.appendChild(div);


        targetContainer.appendChild(box);
	});

	if (partnersType === 'hardware') {
        var becomeHardwarePartnerBox = document.createElement('div');
        becomeHardwarePartnerBox.className = 'partner-box';

        var bg = document.createElement('div');
        bg.className = 'box-background';

        var div = document.createElement('div');
        var p = document.createElement('p');
        p.textContent = 'Want to become ThingsBoard Hardware Partner?';
        p.className = 'become-partner';
        div.appendChild(p);

        var a = document.createElement('a');
        a.className = 'button';
        a.textContent = 'Apply for Hardware Partner Program';
        a.href = '/partners/hardware/program/';


        div.appendChild(a);
        becomeHardwarePartnerBox.appendChild(bg);
        becomeHardwarePartnerBox.appendChild(div);

        targetContainer.appendChild(becomeHardwarePartnerBox);
    }
}
// )();

function actions(sectionId) {
    if (sectionId === 'main') {
        if (!$("div." + sectionId).hasClass("checked")){
            $("div.check-box").removeClass("checked");
            $("div." + sectionId).addClass("checked");
            rengen("hardware");
        }
    } else {
        $("div.main").removeClass("checked");
        if ($("div." + sectionId).hasClass("checked")){
            $("div." + sectionId).removeClass("checked");
            rengen(sectionId);
        } else {
            $("div." + sectionId).addClass("checked");
            rengen(sectionId);
        }
    }
}