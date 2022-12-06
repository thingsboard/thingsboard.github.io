---
layout: common
notitle: "true"
hidetoc: "true"

---

<div id="background">
    <div class="main1"></div><div class="small1"></div><div class="small2"></div><div class="small3"></div><div class="small4"></div>
</div>

<div id="install-thanks" class="center">
    <div class="thanks-content">
        <i class="fa fa-check" aria-hidden="true" style="display: none"></i>
        <p class="thank-you">Thank you!</p>
        <div id="common-form" style="display: none;">
            <p>Please check your email for further instructions.</p>
        </div>    
        <div id="maker-form" class="instructions" style="display: none;">
            <p>In order to proceed please visit the official product page on AWS marketplace:</p>
            <p class="center"><a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07MLRVF3Q">ThingsBoard PE Maker</a></p>
            <br/>
            <p>For detailed installation instructions please visit:</p>
            <p class="center"><a href="/docs/user-guide/install/pe/aws-marketplace/">Installing ThingsBoard PE on AWS</a></p>
        </div>    
        <div id="prototype-form" class="instructions" style="display: none;">
            <p>In order to proceed please visit the official product page on AWS marketplace:</p>
            <p class="center"><a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07MLS5VMB">ThingsBoard PE Prototype</a></p>
            <br/>
            <p>For detailed installation instructions please visit:</p>
            <p class="center"><a href="/docs/user-guide/install/pe/aws-marketplace/">Installing ThingsBoard PE on AWS</a></p>
        </div>    
        <div id="startup-form" class="instructions" style="display: none;">
            <p>In order to proceed please visit the official product page on AWS marketplace:</p>
            <p class="center"><a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07MQ1G36K">ThingsBoard PE Startup</a></p>
            <br/>
            <p>For detailed installation instructions please visit:</p>
            <p class="center"><a href="/docs/user-guide/install/pe/aws-marketplace/">Installing ThingsBoard PE on AWS</a></p>
        </div>    
        <div id="business-form" class="instructions" style="display: none;">
            <p>In order to proceed please visit the official product page on AWS marketplace:</p>
            <p class="center"><a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07MLRWV22">ThingsBoard PE Business</a></p>
            <br/>
            <p>For detailed installation instructions please visit:</p>
            <p class="center"><a href="/docs/user-guide/install/pe/aws-marketplace/">Installing ThingsBoard PE on AWS</a></p>
        </div>    
        <div id="enterprise-form" class="instructions" style="display: none;">
            <p>In order to proceed please visit the official product page on AWS marketplace:</p>
            <p class="center"><a target="_blank" href="https://aws.amazon.com/marketplace/pp/B07MBYZSFQ">ThingsBoard PE Enterprise</a></p>
            <br/>
            <p>For detailed installation instructions please visit:</p>
            <p class="center"><a href="/docs/user-guide/install/pe/aws-marketplace/">Installing ThingsBoard PE on AWS</a></p>
        </div>
        <a class="homepage" href="/">Homepage</a>
    </div>
</div>

<script type="text/javascript">
    jqueryDefer(function () {
       $( document ).ready(function() {
             $('#contact-us-thanks').addClass("opened");
             $('#background').addClass("opened");
       });
    });
</script>

<script type="text/javascript">

    var instanceTypeForms = {
        "common": "#common-form",
        "maker": "#maker-form",
        "prototype": "#prototype-form",
        "startup": "#startup-form",
        "business": "#business-form",
        "enterprise": "#enterprise-form"
    };

    jqueryDefer(function () {
        $( document ).ready(function() {
            $.urlParam = function (name) {
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                return results ? results[1] : null;
            };                 
            instanceType = $.urlParam('instance');
            if (!instanceType) {
                instanceType = "common";
            }             
            var formId = instanceTypeForms[instanceType];
            if (formId) {
                var instanceForm = $(formId);
                instanceForm.css('display', '');
            }
        });        
    });
</script>
