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
        var guidesBlock = $('.guides-block');
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
        if (checkGTagDataLayer()) {
                return;
        }

        gtag("event", "search", {
                "search_term": searchText,
                "event_label": "Guides", 
                "searchPageCount": searchPageCount  
        });
    }
    
</script>

<ul id="markdown-toc">
    {% for item in guides %}
    {% if guidesVersion == 'paas' and item.paaspage == 'false' %}
    {% elsif guidesVersion == 'ce' and item.cepage == 'false' %}
    {% elsif guidesVersion == 'pe' and item.pepage == 'false' %}
    {% else %}
        {% if item.title %}
        <li>
            <a href="#AnchorID{{ item.id }}" id="markdown-toc-AnchorID{{ item.id }}">{{ item.title }}</a>
        </li>
        {% endif %}
    {% endif %}
    {% endfor %}
</ul>

<div class="guides">
    <div class="filter-panel">
        <div id="searchGuideBox">
            <input type="text" id="searchGuideInput" placeholder="Find a guide...">
            <button class="searchButton"></button>
        </div>
    </div>
    {% include guides.html %}
</div>
