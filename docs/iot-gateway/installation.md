---
layout: docwithnav-gw
title: IoT Gateway Installation options
notitle: "true"

---

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>ThingsBoard IoT Gateway installation options</h1>
                <div class="install-options-description">
                    <p>
                        ThingsBoard IoT Gateway is designed to run and utilize on majority of hardware, from single-board computers like Raspberry Pi to powerful Edge Gateways for IoT
                    </p>
                </div>
            </div>            
            <div class="col-lg-12 deployment-container one-line-deployment-container">
                <div class="deployment-div">
                    <div class="container">
                        <div class="deployment-section deployment-on-premise" id="onPremise">
                           <div class="deployment-cards">
                                <div class="deployment-cards-container">
                                    <div class="deployment-card-block">
                                        <a href="/docs/iot-gateway/install/deb-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/ubuntu.png" title="Ubuntu" alt="Ubuntu">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/iot-gateway/install/rpm-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/centos-redhat.png" title="CentOS/RHEL" alt="CentOS/RHEL">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/iot-gateway/install/deb-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/rpi3.jpg" title="Raspberry Pi 3" alt="Raspberry Pi 3">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/iot-gateway/install/docker-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/docker-windows.png" title="Docker (Windows)" alt="Docker (Windows)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/iot-gateway/install/docker-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/docker-linux-macos.png" title="Docker (Linux or Mac OS)" alt="Docker (Linux or Mac OS)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/iot-gateway/install/pip-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/gateway/pip.svg" title="PIP" alt="PIP">
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

    inViewportDefer(function() {
        $(".deployment-cards .deployment-cards-container .deployment-card-block").inViewport(function(px){
            if(px >= 10) {
                $(this).addClass("animated zoomIn");
                return true;
            }
        });
    });

    jqueryDefer(function () {
    
        window.addEventListener('popstate', onPopStateCeInstallOptions);
        
        onPopStateCeInstallOptions();
        
    });
    
    function onPopStateCeInstallOptions() {
            var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
            var targetId = params['ceInstallType'];
            if (!targetId) {
                targetId = 'onPremise';
            }
            selectTargetCeInstallOption('#'+targetId);
    }
        
    function selectTargetCeInstallOption(targetId) {
         $(".deployment-selector .deployment").removeClass("active");         
         $(".deployment-selector .deployment[data-toggle='"+targetId+"']").addClass("active");
         $(".deployment-selector .deployment[data-toggle='"+targetId+"'] .magic-radio").prop("checked", true);
         
         $('.deployment-div .deployment-section').removeClass("active");
         $('.deployment-div .deployment-section'+targetId).addClass("active");
         
         $('.deployment-div .deployment-section' + targetId + ' .deployment-card-block').addClass("animated zoomIn");
    }   

</script>
