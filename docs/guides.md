---
layout: docwithnav
title: Guides

---
<script type="text/javascript">
    jqueryDefer(function () {
        $('#searchGuideInput').keyup(function() {
            $('.guides-list').find('.guide-container').removeClass('hidden');
            $('.guides-block').removeClass('hidden');
            
            var searchText = $(this).val();
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
        });
    });
    
    function testKeywords(keyRegexps, input) {
        var result = true;
        for (var i=0;i<keyRegexps.length;i++) {
            result = result && keyRegexps[i].test(input);
        }
        return result;
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