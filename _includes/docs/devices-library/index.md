<script type="text/javascript">

    var reportedSearchInputs = [];
    var searchPageCount = 0;

    document.onmousemove = function(e) {
        var event = e || window.event;
        window.mouseX = event.clientX;
        window.mouseY = event.clientY;
        if (checkMouseMoved()) {
            checkSearchInput();
        }
    };

    jqueryDefer(function () {
        $( document ).ready(function() {
            var searchInput = $('#searchGuideInput');
            searchInput.keyup(function () {
                window.typeMouseX = window.mouseX;
                window.typeMouseY = window.mouseY;
                filterGuides();
            });
            searchInput.blur(function () {
                checkSearchInput();
            });
            searchInput.focus(
                function () {
                    $(this).parent('#searchGuideBox').addClass('focused');
                }).blur(
                function () {
                    $(this).parent('#searchGuideBox').removeClass('focused');
                });
            filterGuides();
        });
    });

    function checkMouseMoved () {
        if (typeof window.typeMouseX === "undefined" || typeof window.typeMouseY === "undefined") {
            return false;
        }
        return window.typeMouseX !== window.mouseX && window.typeMouseY !== window.mouseY;
    }

    function filterGuides() {
        $('.guides-list').find('.guide-container').removeClass('hidden');
        var guidesBlock = $('.guides-block').not('.filtered');
        guidesBlock.removeClass('hidden');
        searchPageCount = 0;
        var searchText = $('#searchGuideInput').val();

        var keywords = searchText.split(' ');
        if (keywords && keywords.length) {
            var keyRegexps = [];
            for (var i=0;i<keywords.length;i++) {
                if (keywords[i].length) {
                    keyRegexps.push(new RegExp(keywords[i].toLowerCase()));
                }
            }
            guidesBlock.each( function() {
                var containers = $( this ).find('.guide-container');
                var total = containers.length;
                containers.each( function() {
                    var paragraphs = $(this).find('p');
                    var text = '';
                    paragraphs.each( function() {
                        text += $(this).html();
                        text += ' ';
                    });
                    var matches = testKeywords(keyRegexps, text.toLowerCase());
                    if (!matches) {
                        $( this ).addClass('hidden');
                        total--;
                    }
                });
                searchPageCount += total;
                if (!total) {
                    $( this ).addClass('hidden');
                }
            });
        }
    }
    
    function testKeywords(keyRegexps, input) {
        var result = true;
        for (var i=0;i<keyRegexps.length;i++) {
            result = result && keyRegexps[i].test(input);
        }
        return result;
    }

    function checkSearchInput() {
        var searchText = $('#searchGuideInput').val().trim();
        if (searchText.length >=3 && reportedSearchInputs.indexOf(searchText) === -1) {
            reportSearchInput(searchText);
            reportedSearchInputs.push(searchText);
        }
    }

    function reportSearchInput(searchText) {

        if (!ga.hasOwnProperty("loaded") || ga.loaded !== true) {
            return;
        }

        ga(
            "send", "event", "Guides", "search",
            searchText, searchPageCount
        );
    }
    
</script>

{% assign devices = '' | split: "," %}
{% assign microcontrollersCategory = "" | split: "," %}
{% assign singleBoardComputersCategory = "" | split: "," %}
{% assign readyToGoDevicesCategory = "" | split: "," %}

{% assign devicesLibraryPagePath = page.path | remove: ".md" | append: '/' %}

{% for sitePage in site.pages %}
    {% if sitePage.path contains devicesLibraryPagePath %}
        {% assign possibleTargetPath = sitePage.path | remove: devicesLibraryPagePath %}
        {% unless possibleTargetPath contains '/' %}
            {% case sitePage.category %}
                {% when "ready-to-go-devices" %}
                    {% assign readyToGoDevicesCategory = readyToGoDevicesCategory | push: sitePage %}
                {% when "Single-board computers" %}
                    {% assign singleBoardComputersCategory = singleBoardComputersCategory | push: sitePage %}
                {% when "Microcontrollers" %}
                    {% assign microcontrollersCategory = microcontrollersCategory | push: sitePage %}
            {% endcase %}
        {% endunless %}
    {% endif %}
{% endfor %}

{% assign devices = devices | push: microcontrollersCategory %}
{% assign devices = devices | push: readyToGoDevicesCategory %}
{% assign devices = devices | push: singleBoardComputersCategory %}

<div class="guides">
    <div class="filter-panel">
        <div id="searchGuideBox">
            <input type="text" id="searchGuideInput" placeholder="Find a guide...">
            <button class="searchButton"></button>
        </div>
    </div>
    {% include devices.liquid %}
</div>
