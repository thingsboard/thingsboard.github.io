---
layout: docwithnav
assignees:
- ashvayka
title: ThingsBoard installation options
description: ThingsBoard installation instructions for various operation systems and cloud platforms
notitle: "true"
---

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>ThingsBoard installation options</h1>
                <div class="install-options-description">
                    <p>
                        ThingsBoard is designed to run and utilize on majority of hardware, from local Raspberry PI to powerful servers in the cloud
                    </p>
                </div>
            </div>
            <div class="deployment-container">
                <nav id="install-navigation" class="install-navigation">
                    <ul id="menu-install-navigation-1" class="menu">
                        <li id="menu-item-liveDemo" class="menu-item tb-live-demo">
                            <a href="javascript:void(0);" onClick="activateInstallSection('liveDemo')">Live demo</a>
                        </li>
                        <li id="menu-item-onPremise" class="menu-item tb-on-premise active">
                            <a href="javascript:void(0);" onClick="activateInstallSection('onPremise')">On premise</a>
                        </li>
                        <li id="menu-item-cloud" class="menu-item tb-cloud">
                            <a href="javascript:void(0);" onClick="activateInstallSection('cloud')">Cloud</a>
                        </li>
                    </ul>
                </nav>
                <div class="deployment-div">
                    {% include installation-options-cards.liquid installationOptions="installation-options-ce" %}
                </div>
            </div>
          </div>
       </div>
    </div>
</div>


<script type="text/javascript">

    jqueryDefer(function () {
        window.addEventListener('popstate', onPopStateCeInstallOptions);
        onPopStateCeInstallOptions();
    });

    function activateInstallSection(id) {
        var param = 'ceInstallType';
        var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
        params[param] = id;
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + Qs.stringify(params);
        if (window.location.hash) {
            newurl += window.location.hash;
        }
        window.history.pushState({ path: newurl }, '', newurl);
        selectTargetCeInstallOption(id);
    }

    function onPopStateCeInstallOptions() {
            var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
            var targetId = params['ceInstallType'];
            if (!targetId) {
                targetId = 'onPremise';
            }
            selectTargetCeInstallOption(targetId);
    }

    function selectTargetCeInstallOption(targetId) {
         $("li.menu-item").removeClass("active");
         $("li.menu-item#menu-item-"+targetId).addClass("active");
         $('.deployment-div .deployment-section').removeClass("active");
         $('.deployment-div .deployment-section#'+targetId).addClass("active");
    }

</script>
