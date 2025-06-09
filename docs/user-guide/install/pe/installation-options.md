---
layout: docwithnav-pe
assignees:
- ashvayka
title: ThingsBoard Professional Edition installation options
description: ThingsBoard Professional Edition installation instructions for various operation systems and cloud platforms
notitle: "true"
redirect_from: "/docs/pe/user-guide/install/installation-options/"
---

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>ThingsBoard Professional Edition installation options</h1>
                <div class="install-options-description">
                    <p>
                        ThingsBoard Professional Edition is designed to run and utilize on majority of hardware, from local Raspberry PI to powerful servers in the cloud
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
                    {% include installation-options-cards.liquid installationOptions="installation-options-pe" %}
                </div>
            </div>
          </div>
       </div>
    </div>
</div>

<script>
    jqueryDefer(function () {
        window.addEventListener('popstate', onPopStatePeInstallOptions);
        onPopStatePeInstallOptions();
    });

    function activateInstallSection(id) {
            var param = 'peInstallType';
            var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
            params[param] = id;
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + Qs.stringify(params);
            if (window.location.hash) {
                newurl += window.location.hash;
            }
            window.history.pushState({ path: newurl }, '', newurl);
            selectTargetPeInstallOption(id);
    }

    function onPopStatePeInstallOptions() {
            var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
            var targetId = params['peInstallType'];
            if (!targetId) {
                targetId = 'onPremise';
            }
            selectTargetPeInstallOption(targetId);
    }

    function selectTargetPeInstallOption(targetId) {
         $("li.menu-item").removeClass("active");
         $("li.menu-item#menu-item-"+targetId).addClass("active");
         $('.deployment-div .deployment-section').removeClass("active");
         $('.deployment-div .deployment-section#'+targetId).addClass("active");
    }
</script>
