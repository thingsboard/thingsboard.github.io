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
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Getting Started Guides
                </p>
                <p class="guides-subtitle">
                    This guides provide quick overview of main ThingsBoard features. Designed to be completed in 15-30 minutes.
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/getting-started-guides/helloworld/">
                    <p class="guide-title">
                        Hello World
                    </p>
                    <p class="guide-subtitle">
                        Learn how to collect IoT device data using MQTT, HTTP or CoAP and visualize it on a simple dashboard.<br/>
                        Provides variety of sample scripts that you can run on your PC or laptop to simulate the device.
                    </p>
                    <p class="guide-keywords">
                        mqtt http coap visualization helloworld
                    </p>
                </a>
            </li>
            <li class="guide-container">
                <a class="guide-title" href="/docs/iot-video-tutorials/#working-with-users-devices-and-dashboards">
                    <p class="guide-title">
                        End User IoT Dashboards
                    </p>
                    <p class="guide-subtitle">
                        Learn how to perform basic operations over Devices, Customers, and Dashboards
                    </p>
                    <p class="guide-keywords">
                        devices customers dashboards
                    </p>
                </a>
            </li>
            <li class="guide-container">
                <a class="guide-title" href="/docs/iot-video-tutorials/#device-data-management-using-thingsboard">
                    <p class="guide-title">
                        Device data management
                    </p>
                    <p class="guide-subtitle">
                        Learn how to perform basic operations over device attributes to implement practical device management use cases.
                    </p>
                    <p class="guide-keywords">
                        device management attributes
                    </p>
                </a>
            </li>
            <li class="guide-container">
                <a class="guide-title" href="/docs/iot-video-tutorials/#device-data-management-using-thingsboard">
                    <p class="guide-title">
                        Getting Started with Rule Engine
                    </p>
                    <p class="guide-subtitle">
                        Learn about ThingsBoard rule engine and typical use cases you can implement.<br/>
                        Review Hello World example and learn how-to enable filtering of incoming telemetry messages.
                    </p>
                    <p class="guide-keywords">
                        device management attributes
                    </p>
                </a>
            </li>
        </ul>
    </div>
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Installation Guides
                </p>
                <p class="guides-subtitle">
                    This section contains instructions how to setup ThingsBoard on various available operating systems
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Connecting your device
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>    
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Data Visualization
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
            <li class="guide-container">
                <a href="/docs/user-guide/rule-engine-2-0/tutorials/transform-incoming-telemetry/">
                    <p class="guide-title">
                        Transform incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to transform incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
            <li class="guide-container">
                <a href="/docs/user-guide/rule-engine-2-0/tutorials/transform-telemetry-using-previous-record/">
                    <p class="guide-title">
                        Transform telemetry using previous record
                    </p>
                    <p class="guide-subtitle">
                        Learn how to transform telemetry using previous record
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
            <li class="guide-container">
                <a href="/docs/user-guide/rule-engine-2-0/tutorials/rpc-reply-tutorial/">
                    <p class="guide-title">
                        RPC Reply With data from Related Device
                    </p>
                    <p class="guide-subtitle">
                        Learn how to make RPC Reply With data from Related Device
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Data processing
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>    
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    IoT Data analytics
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>    
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Pushing data to external systems
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>    
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Hardware samples
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>    
    <div class="guides-block">
        <div class="guides-title-panel">
            <img class="guides-img" src="/images/tb-guide.svg"/> 
            <div class="guides-text">
                <p class="guides-title">
                    Advanced features
                </p>
                <p class="guides-subtitle">
                    OLOLO
                </p>
            </div>
        </div>
        <ul class="guides-list">
            <li class="guide-container">
                <a class="guide-title" href="/docs/user-guide/rule-engine-2-0/tutorials/validate-incoming-telemetry/">
                    <p class="guide-title">
                        Validate incoming telemetry
                    </p>
                    <p class="guide-subtitle">
                        Learn how to validate incoming telemetry
                    </p>
                    <p class="guide-keywords">
                        key1 key2 key3
                    </p>
                </a>
            </li>
        </ul>
    </div>    
        
</div>