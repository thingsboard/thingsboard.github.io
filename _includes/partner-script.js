{% capture containerId %}{{include.containerId}}{% endcapture %}
{% capture collectionType %}{{include.type}}{% endcapture %}

{% assign contentCollection = site.data[include.content] %}

function rengen() {
    var containerId = "{{ containerId }}";
    var collectionType = "{{ collectionType }}";
	var contentCollection = {{ contentCollection | jsonify }};

    var checkedElements = document.getElementsByClassName('checked');

	var targetContainer = document.getElementById(containerId);
    targetContainer.innerHTML = '';

    var contentByType = [];
    for (var t = 0; t < contentCollection.length; t++) {
        for (var c = 0; c < checkedElements.length; c++) {
            if (contentCollection[t].type.includes(checkedElements[c].className.split(' ')[1])) {
                contentByType.push(contentCollection[t]);
                c = contentCollection.length;
            }
        }
    }

    if(collectionType === "hardware") {
        contentByType.forEach(function (obj) {
            processHardware(obj)
        });
    } else if(collectionType === "iot-use-cases") {
        contentByType.forEach(function (obj, index) {
            processIotUseCases(obj, index)
        });
    }

    function processIotUseCases(obj, index) {
        var box = document.createElement('a');
        box.href = obj.link;
        box.className = 'parent-box';

        var div = document.createElement('div');
        div.className = 'wrapper';

        var cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        var titleElement = document.createElement('span');
        titleElement.className = "title"
        titleElement.textContent = obj.name;

        var description = document.createElement('span');
        description.textContent = obj.blurb;
        description.className = 'description';

        var link = document.createElement('a');
        link.textContent = `${obj.name} use case`;
        link.href = obj.link;
        link.className = 'read-more-button';

        const arrowsArray = ['first', 'second', 'third'];

        arrowsArray.forEach((item, index) => {
            const arrow = document.createElement('img');
            arrow.className = (`arrow ${item}`);
            arrow.src = "https://img.thingsboard.io/pe/read-more-arrow.svg";
            arrow.alt = index === 0 ? `More information about ${obj.name} dashboard` : "";
            link.appendChild(arrow);
        })

        var text = document.createElement('div');
        text.className = 'text';

        var mediaWrapper = document.createElement('a');
        mediaWrapper.href = obj.link;
        mediaWrapper.className = 'dashboard-frame-wrapper img-button';

        var overlay = document.createElement('div');
        overlay.className = 'overlay';

        var eye = document.createElement('div');
        eye.className = 'eye';

        var eyeText = document.createElement('span');
        eyeText.textContent = `${obj.name} overview `;

        var eyeImg = document.createElement('img');
        eyeImg.src = 'https://img.thingsboard.io/eye-icon.svg';
        eyeImg.alt = `See more about ${obj.title} dashboard`;

        var media = document.createElement('div');
        media.className = 'dashboard-frame';

        var frameImage = document.createElement('div');
        frameImage.className = 'frame-image';

        var frameVideo = document.createElement('div');
        frameVideo.className = 'frame-video';

        var img = document.createElement('img');
        img.src = obj.media.image;
        img.alt = obj.media.alt;

        var video = document.createElement('video');
        video.autoplay = false;
        video.loop = true;
        video.preload = "auto";
        video.muted = true;
        video.playsInline = true;

        if(obj.media.video.length) {
            obj.media.video.forEach((videoLink) => {
                const source = document.createElement('source');
                const videoFormat = (link) => {
                    const lastDotIndex = link.lastIndexOf('.');
                    return link.slice(lastDotIndex + 1);
                }

                source.type = `video/${videoFormat(videoLink)}`;
                source.src = videoLink;

                video.appendChild(source);
            })
        }

        function cardEnter() {
            video.play();
            box.style.setProperty("--current-height", `${box.offsetHeight}px`);
        }

        function cardLeave() {
            video.pause();
            box.style.setProperty("--current-height", '100%');
        }

        eye.appendChild(eyeImg);
        eye.appendChild(eyeText);
        overlay.appendChild(eye);
        frameImage.appendChild(img);
        frameVideo.appendChild(video);
        media.appendChild(frameImage);
        media.appendChild(frameVideo);
        mediaWrapper.appendChild(media);
        mediaWrapper.appendChild(overlay);
        text.appendChild(titleElement);
        text.appendChild(description);
        text.appendChild(link);
        cardContent.appendChild(mediaWrapper);
        cardContent.appendChild(text);
        div.appendChild(cardContent);
        box.appendChild(div);
        box.addEventListener('mouseenter', cardEnter);
        box.addEventListener('mouseleave', cardLeave);

        targetContainer.appendChild(box);
    }

    function processHardware(obj) {
        var box = document.createElement('div');
        box.className = 'parent-box';

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
    }

	if (collectionType === 'hardware') {
        var becomeHardwarePartnerBox = document.createElement('div');
        becomeHardwarePartnerBox.className = 'parent-box become-partner-box';

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