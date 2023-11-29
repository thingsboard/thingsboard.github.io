---
layout: docwithnav-pe-edge
title: ThingsBoard Edge installation options
notitle: "true"

---

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>ThingsBoard Edge installation options</h1>
                <div class="install-options-description">
                    <p>
                        ThingsBoard Edge installation instructions for various operation systems
                    </p>
                </div>
            </div>
            <div class="col-lg-12 deployment-container">
                <div class="deployment-div">
                    <div class="container">
                        <div class="deployment-section deployment-on-premise" id="onPremise">
                           <div class="deployment-cards">
                                <div class="deployment-cards-container">
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/pe/edge/deb-installation/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/ubuntu.svg" title="Ubuntu" alt="Ubuntu">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/pe/edge/rhel/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/centos-redhat.svg" title="CentOS/RHEL" alt="CentOS/RHEL">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/pe/edge/docker/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/docker-linux-macos.svg" title="Docker (Linux or Mac OS)" alt="Docker (Linux or Mac OS)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/pe/edge/docker-windows/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/docker-windows.svg" title="Docker (Windows)" alt="Docker (Windows)">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="deployment-card-block">
                                        <a href="/docs/user-guide/install/pe/edge/windows/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/platform/windows.svg" title="Windows" alt="Windows">
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

<script>

    inViewportDefer(function() {
        $(".deployment-cards .deployment-cards-container .deployment-card-block").inViewport(function(px){
            if(px >= 10) {
                $(this).addClass("animated zoomIn");
                return true;
            }
        });
    });

    jqueryDefer(function () {

        window.addEventListener('popstate', onPopStateEdgeInstallOptions);

        onPopStateEdgeInstallOptions();

    });

    function onPopStateEdgeInstallOptions() {
            var params = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
            var targetId = params['edgeInstallType'];
            if (!targetId) {
                targetId = 'onPremise';
            }
            selectTargetEdgeInstallOption('#'+targetId);
    }

    function selectTargetEdgeInstallOption(targetId) {
         $(".deployment-selector .deployment").removeClass("active");
         $(".deployment-selector .deployment[data-toggle='"+targetId+"']").addClass("active");
         $(".deployment-selector .deployment[data-toggle='"+targetId+"'] .magic-radio").prop("checked", true);

         $('.deployment-div .deployment-section').removeClass("active");
         $('.deployment-div .deployment-section'+targetId).addClass("active");

         $('.deployment-div .deployment-section' + targetId + ' .deployment-card-block').addClass("animated zoomIn");
    }
</script>
