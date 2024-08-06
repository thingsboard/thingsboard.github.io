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
                    <div class="container">
                        <div class="deployment-section deployment-live-demo" id="liveDemo">
                            <div class="deployment-cards">
                                <div class="deployment-cards-container">
                                    <div class="deployment-card-block">
                                        <a href="https://demo.thingsboard.io/signup">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/sign-ce-img.svg" title="Live Demo" alt="Live Demo">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="deployment-section deployment-on-premise active" id="onPremise">
                           <div class="deployment-cards">
                                <div class="deployment-cards-container">
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/ubuntu/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/ubuntu.svg" title="Ubuntu" alt="Ubuntu">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/rhel/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/centos-redhat.svg" title="CentOS/RHEL" alt="CentOS/RHEL">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/windows/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/windows.svg" title="Windows" alt="Windows">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/rpi/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/rpi3.svg" title="Raspberry Pi" alt="Raspberry Pi">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/docker-windows/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/docker-windows.svg" title="Docker (Windows)" alt="Docker (Windows)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/docker/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/docker-linux-macos.svg" title="Docker (Linux or Mac OS)" alt="Docker (Linux or Mac OS)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/building-from-source/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/sources.svg" title="Building from source" alt="Building from source">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/cluster-setup/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/platform/cluster-ce.svg" title="Cluster setup with Kubernetes" alt="Cluster setup with Kubernetes">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <div class="deployment-section deployment-cloud" id="cloud">
                            <div class="deployment-cards">
                                <div class="deployment-cards-container">
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/aws/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cloud/aws.svg" title="AWS" alt="AWS">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/azure/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cloud/azure.svg" title="Microsoft Azure" alt="Microsoft Azure">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/digital-ocean/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cloud/digitalocean.svg" title="Digital Ocean" alt="Digital Ocean">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/gcp/">
                                            <span>
                                                <div class="deployment-logo">
                                                    <img width="" src="/images/install/cloud/gcp.svg" title="Google Cloud Platform" alt="Google Cloud Platform">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/ibm-cloud/">
                                            <span>
                                                <div class="deployment-logo coming-soon">
                                                    <img width="" src="/images/install/cloud/ibm-cloud.png" title="IBM Cloud" alt="IBM Cloud">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/alibaba-cloud/">
                                            <span>
                                                <div class="deployment-logo coming-soon">
                                                    <img width="" src="/images/install/cloud/alibaba-cloud.jpg" title="Alibaba Cloud" alt="Alibaba Cloud">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
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
