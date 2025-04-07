{% capture containerId %}{{include.containerId}}{% endcapture %}
{% capture partnersType %}{{include.type}}{% endcapture %}
{% capture partners %}{% include partners.json %}{% endcapture %}

function rengen() {
    var containerId = "{{ containerId }}";
    var partnersType = "{{ partnersType }}";
	var partners = {{ partners }};

    var checkedElements = document.getElementsByClassName('checked');

	var targetContainer = document.getElementById(containerId);
    targetContainer.innerHTML = '';

    var partnersByType = [];
    for (var t = 0; t < partners.length; t++) {
        for (var c = 0; c < checkedElements.length; c++) {
            if (partners[t].type.includes(checkedElements[c].className.split(' ')[1])) {
                partnersByType.push(partners[t]);
                c = partners.length;
            }
        }
    }

    partnersByType.forEach(function (obj) {
		var box = document.createElement('div');
		box.className = 'partner-box';

		if (obj.program) {
            var programImg = document.createElement('img');
            programImg.className = 'partner-program';
            programImg.src = '/images/partners/' + obj.program + '-partner.svg';
            box.appendChild(programImg);
        }

        var cardHeader = document.createElement('div');
        cardHeader.className = "cardHeader"

		var img = document.createElement('img');
        img.className = 'logo';
		img.src = '/images/partners/' + obj.logo;

        var siteLink = document.createElement('a');
        siteLink.className = 'siteLink';
        siteLink.textContent = 'Website';
        siteLink.href = obj.site.href;
        siteLink.target = obj.site.target;

		var div = document.createElement('div');
        div.className = 'wrapper';

        var cardContent = document.createElement('div');
        cardContent.className = 'card-content';

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
        linksElement.className = 'links owl-carousel partnersCarousel';

        for (var linkName in obj.links) {
            var linkInfo = obj.links[linkName];
            var link = document.createElement('a');
            link.href = linkInfo.href;
            if (linkInfo.target) {
                link.target = linkInfo.target;
            }
            link.textContent = linkName;
            linksElement.appendChild(link);

            linksCounter += 1;

            if(linksCounter >= 2 && !linksElement.classList.contains('owl-carousel')) {

            }
        }

        if(linksElement.children.length >= 2) {
            linksElement.classList.add('usecase-carousel', 'owl-theme', 'smallArrow');
        } else {
            linksElement.classList.remove('owl-carousel', 'partnersCarousel');
        }

        cardHeader.appendChild(img);
        cardHeader.appendChild(siteLink);
        text.appendChild(titleElement);
		text.appendChild(p);
        cardContent.appendChild(cardHeader);
        cardContent.appendChild(text);
        div.appendChild(cardContent);
		div.appendChild(linksElement);
		box.appendChild(bg);
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
            rengen();
        }
    } else {
        $("div.main").removeClass("checked");
        if ($("div." + sectionId).hasClass("checked")){
            $("div." + sectionId).removeClass("checked");
            if (document.getElementsByClassName('checked').length === 0){
                $("div.main").addClass("checked");
            }
            rengen();
        } else {
            $("div." + sectionId).addClass("checked");
            rengen();
        }
    }

    jqueryDefer(addCarousel);
}

function addCarousel() {
    $('.owl-carousel').each(function(index) {
        const $carousel = $(this);
        const carouselId = "owl-carousel-" + index;
        $(this).attr("id", carouselId);

        if(!$carousel[0].classList.contains("owl-loaded")) {
            $('#' + carouselId).owlCarousel({
                autoWidth: true,
                margin: 10,
                nav: true,
                dots: false
            });
        }
    })
}