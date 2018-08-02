---
layout: docwithnav
title: Guides

---
<script type="text/javascript">

    var reportedSearchInputs = [];

    document.onmousemove = function(e) {
        var event = e || window.event;
        window.mouseX = event.clientX;
        window.mouseY = event.clientY;
        if (checkMouseMoved()) {
            checkSearchInput();
        }
    }

    jqueryDefer(function () {
        $('#searchGuideInput').keyup(function() {
            window.typeMouseX = window.mouseX;
            window.typeMouseY = window.mouseY;
            filterGuides();
        });
        $('#searchGuideInput').blur(function() {
            checkSearchInput();
        });
        filterGuides();
    });

    function checkMouseMoved () {
        if (typeof window.typeMouseX === "undefined" || typeof window.typeMouseY === "undefined") {
            return false;
        }
        if (window.typeMouseX != window.mouseX && window.typeMouseY != window.mouseY) {
            return true;
        } else {
            return false;
        }
    }

    function filterGuides() {
        $('.guides-list').find('.guide-container').removeClass('hidden');
        $('.guides-block').removeClass('hidden');

        var searchText = $('#searchGuideInput').val();

        var keywords = searchText.split(' ');
        if (keywords && keywords.length) {
            var keyRegexps = [];
            for (var i=0;i<keywords.length;i++) {
                if (keywords[i].length) {
                    keyRegexps.push(new RegExp(keywords[i].toLowerCase()));
                }
            }
            $('.guides-block').each( function( index, element ) {
                var containers = $( this ).find('.guide-container');
                var total = containers.length;
                containers.each( function( index, element ) {
                    var paragraphs = $(this).find('p');
                    var text = '';
                    paragraphs.each( function( index, element ) {
                        text += $(this).html();
                        text += ' ';
                    });
                    var matches = testKeywords(keyRegexps, text.toLowerCase());
                    if (!matches) {
                        $( this ).addClass('hidden');
                        total--;
                    }
                });
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

        if (!ga.hasOwnProperty("loaded") || ga.loaded != true) {
            return;
        }

        var pageCount = 0;

        $('.guides-list').find('.guide-container').each( function( index, element ) {
            if (!$( this ).hasClass('hidden')) {
                pageCount++;
            }
        });

        ga(
            "send", "event", "Guides", "search",
            searchText, pageCount
        );
    }
    
</script>

<div class="guides">
    <div class="filter-panel">
        <div id="searchGuideBox">
            <input type="text" id="searchGuideInput" placeholder="Find a guide...">
        </div>
    </div>
    {% assign guides = site.data.guides-data %}{% include guides.html %}
</div>