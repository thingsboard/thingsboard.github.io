---
layout: docwithnav
assignees:
- ashvayka
title: AWS cluster setup
description: ThingsBoard IoT platform  AWS cluster setup guide

---

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>ThingsBoard Setup options on AWS</h1>
                <div class="install-options-description">
                    <p>
                        You may deploy ThingsBoard IoT Platform using different tools and platforms
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
                                        <a href="/docs/user-guide/install/pe/cluster/aws-cluster-setup/">
                                            <span>
                                                <div class="deployment-logo" style="height:134px">
                                                    <img width="" src="/images/install/cloud/kubeone.png" title="Cluster setup with Kubernetes and KubeOne on AWS" alt="AWS K8S cluster">
                                                 </div>
                                            </span>
                                        </a>
                                    </div>
                               </div>
                               <div class="deployment-cards-container">
                                   <div class="deployment-card-block">
                                       <a href="/docs/user-guide/install/pe/aws-marketplace/">
                                           <span>
                                               <div class="deployment-logo" style="height:134px">
                                                   <img width="" src="/images/install/cloud/amazon_ec2.png" title="Self-hosted setup using AWS Marketplace" alt="AWS Marketplace">
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
