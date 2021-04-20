---
layout: docwithnav
title: Get ThingsBoard Professional Edition
description: ThingsBoard Professional Edition Installation
hidetoc: "true"

---

<script type="text/javascript">
    jqueryDefer(function () {
            var trialMarketplace = $('#trial-marketplace');            
            var azureTrial = $('#azure-trial-market');
            
            var awsTrialForm = $('#mlb2-7972110');            
            var azureTrialForm = $('#mlb2-9674300');
            
            var payGoMarketplace = $('#pay-go-marketplace');
            var azurePayGo = $('#azure-pay-go-market');

            azureTrial.click(function() {
                $("#tab-cloud").prop("checked", true).trigger("click");
                payGoMarketplace.css('display', 'none');
                azurePayGoForm.css('display', '');
                //trialMarketplace.css('display', 'none');
                //azureTrialForm.css('display', '');
            });
            
            var payYearlyOption = $('#pay-yearly-option');
            var payYearlyPremise = $('#pay-yearly-premise');    
            
            var payYearlyPremiseForm = $('#mlb2-7556612');                    

            payYearlyPremise.click(function() {
                payYearlyOption.css('display', 'none');
                payYearlyPremiseForm.css('display', '');
            });
            
            var awsPayGoForm = $('#mlb2-7520964');            
            var azurePayGoForm = $('#mlb2-9674436');

            azurePayGo.click(function() {
                payGoMarketplace.css('display', 'none');
                azurePayGoForm.css('display', '');
            });
            
        });
</script>


<section id="install-pe">
    <div class="tabs">
        <input name="tabs" type="radio" id="tab-trial" checked="checked" class="tab-input"/>
        <label for="tab-trial" class="tab-label label-premise">Free trial</label>
        <div class="tab-panel">
            <div id="trial-marketplace" class="choose-marketplace"> 
                <p>
                    Signup for free month trial on ThingsBoard PE Cloud
                </p>
                <div class="marketplace" style="padding-bottom: 10px;">
                    <div id="pe-cloud-trial" class="pricing-image-wrapper clickable" style="max-width: 50%;">
                        <img src="/images/pe/pe_cloud_signup.svg">
                        <a target="_blank" href="https://thingsboard.cloud/signup"></a>
                    </div>
                </div>
                <div style="font-size: 20px;">
                <p style="padding-top: 20px; font-size: 20px;">
                    ThingsBoard PE Cloud is a shared enviroment with multiple limitations, such as:
                </p>
                <ul style="margin: 10px 10px 10px 60px;">
                    <li>amount of active device connections</li>
                    <li>amount of REST API calls per user</li>
                    <li>amount of websocket subscriptions per user</li>
                    <li>disabled white-labeling feature</li>
                </ul>
                <p style="padding-top: 0px; font-size: 20px;">       
                    To get the maximum of ThingsBoard PE, we recommend to install your dedicated server using one of the available options below.
                </p>
                </div>
                <div class="marketplace">
                    <div id="aws-trial-market" class="pricing-image-wrapper clickable">
                        <img src="/images/pe/aws_logo.svg">
                        <a href="/products/thingsboard-pe/aws/"></a>
                    </div>
                    <div id="azure-trial-market" class="pricing-image-wrapper">
                        <img src="/images/pe/azure_logo.svg">
                    </div>
                </div>    
            </div>
            <div id="mlb2-7972110" style="display:none" class="deploy-form deploy-trial ml-subscribe-form ml-subscribe-form-7972110">
                <div class="ml-vertical-align-center">
                    <div class="subscribe-form ml-block-success" style="display:none">
                        <div class="form-section center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Thank you!</p>
                            <p>Please check your email for further instructions.</p>
                        </div>
                    </div>
                    <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/k8u7a2" data-id="784406" data-code="k8u7a2" method="POST" target="_blank">
                        <div class="subscribe-form">
                            <div class="form-section mb30">
                                <p>Please fill this form in order to get your instance on AWS marketplace with free 1 month trial.</p>
                                <div class="form-group ml-field-first_name ml-validate-required">
                                    <label for="fields[first_name]">
                                        <input type="text" name="fields[first_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>First name*</p>
                                    </label>    
                                </div>
                                <div class="form-group ml-field-last_name ml-validate-required">
                                    <label for="fields[last_name]">
                                        <input type="text" name="fields[last_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Last name*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-email ml-validate-required ml-validate-email">
                                    <label for="fields[email]">
                                        <input type="email" name="fields[email]" class="form-control" value="" autocomplete="email" x-autocompletetype="email" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Corporate Email*</p>
                                        <div class="corporate-email-error">Please Enter Business Email Address.</div>
                                    </label>
                                </div>
                                <div class="form-group ml-field-company ml-validate-required">
                                    <label for="fields[company]">
                                        <input type="text" name="fields[company]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company*</p>
                                    </label>                                    
                                </div>
                                <div class="form-group ml-field-company_website">
                                    <label for="fields[company_website]">
                                        <input type="text" name="fields[company_website]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company Website</p>
                                    </label>
                                </div>                                
                                <div class="form-group ml-field-phone">
                                    <label for="fields[phone]">
                                        <input type="text" name="fields[phone]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Phone Number</p>
                                    </label>    
                                </div>
                            </div>                            
                            <input type="hidden" name="ml-submit" value="1" />
                            <button class="button" type="submit" class="primary">
                                Submit
                            </button>
                            <button disabled="disabled" style="display: none;" type="button" class="loading">
                                <img src="https://static.mailerlite.com/images/rolling@2x.gif" width="20" height="20" style="width: 20px; height: 20px;">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="mlb2-9674300" style="display:none" class="deploy-form deploy-trial ml-subscribe-form ml-subscribe-form-9674300">
                <div class="ml-vertical-align-center">
                    <div class="subscribe-form ml-block-success" style="display:none">
                        <div class="form-section center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Thank you!</p>
                            <p>Please check your email for further instructions.</p>
                        </div>
                    </div>
                    <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/r6a7r1" data-id="996930" data-code="r6a7r1" method="POST" target="_blank">
                        <div class="subscribe-form">
                            <div class="form-section mb30">
                                <p>Please fill this form in order to get your instance on Azure marketplace with free 1 month trial.</p>
                                <div class="form-group ml-field-first_name ml-validate-required">
                                    <label for="fields[first_name]">
                                        <input type="text" name="fields[first_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>First name*</p>
                                    </label>    
                                </div>
                                <div class="form-group ml-field-last_name ml-validate-required">
                                    <label for="fields[last_name]">
                                        <input type="text" name="fields[last_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Last name*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-email ml-validate-required ml-validate-email">
                                    <label for="fields[email]">
                                        <input type="email" name="fields[email]" class="form-control" value="" autocomplete="email" x-autocompletetype="email" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Corporate Email*</p>
                                        <div class="corporate-email-error">Please Enter Business Email Address.</div>
                                    </label>
                                </div>
                                <div class="form-group ml-field-company ml-validate-required">
                                    <label for="fields[company]">
                                        <input type="text" name="fields[company]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company*</p>
                                    </label>                                    
                                </div>
                                <div class="form-group ml-field-company_website">
                                    <label for="fields[company_website]">
                                        <input type="text" name="fields[company_website]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company Website</p>
                                    </label>
                                </div>                                
                                <div class="form-group ml-field-phone">
                                    <label for="fields[phone]">
                                        <input type="text" name="fields[phone]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Phone Number</p>
                                    </label>    
                                </div>
                            </div>                            
                            <input type="hidden" name="ml-submit" value="1" />
                            <button class="button" type="submit" class="primary">
                                Submit
                            </button>
                            <button disabled="disabled" style="display: none;" type="button" class="loading">
                                <img src="https://static.mailerlite.com/images/rolling@2x.gif" width="20" height="20" style="width: 20px; height: 20px;">
                            </button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
        <input name="tabs" type="radio" id="tab-on-premise" class="tab-input"/>
        <label for="tab-on-premise" class="tab-label label-premise">Pay yearly</label>
        <div class="tab-panel">
            <div id="pay-yearly-option" class="choose-marketplace"> 
                <p>
                    Please choose your deployment option
                </p>
                <div class="marketplace">
                    <div id="pay-yearly-premise" class="pricing-image-wrapper">
                        <span>On premises</span>
                    </div>
                    <div id="aws-pay-yearly-market" class="pricing-image-wrapper clickable">
                        <img src="/images/pe/aws_logo.svg">
                        <a href="/products/thingsboard-pe/aws/"></a>
                    </div>
                </div>    
            </div>            
            <div id="mlb2-7556612" style="display:none" class="deploy-form deploy-premise ml-subscribe-form ml-subscribe-form-7556612">
                <div class="ml-vertical-align-center">
                    <div class="subscribe-form ml-block-success" style="display:none">
                        <div class="form-section center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Thank you!</p>
                            <p>Please check your email for further instructions.</p>
                        </div>
                    </div>
                    <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/p3l3g2" data-id="736152" data-code="p3l3g2" method="POST" target="_blank">
                        <div class="subscribe-form">
                            <div class="form-section mb20">
                                <div class="cloud-provider">
                                    <div class="logo-container">
                                        <img src="/images/pe/cloud-providers.svg">
                                    </div>
                                    <div class="cloud-provider-desc">
                                        <p>Install ThingsBoard PE on any cloud or on premises and pay one-time license fee per server and optional software updates subscription for subsequent years of usage.
                                         Save up to 40% comparing to per hour rate on the license fee.</p>
                                        <p><span class="cloud-price">$2,999.00/server</span><span class="cloud-price-desc"> for the 1st year</span><br/>
                                        <span class="cloud-price-onwards">$1,199.00/server</span><span class="cloud-price-onwards-desc"> for optional software updates starting 2nd year</span></p>
                                    </div>
                                </div>                                       
                            </div>
                            <div class="form-section mb30">
                                <p>Please fill this form to get deployment instructions.</p>
                                <div class="form-group ml-field-email ml-validate-required ml-validate-email">
                                    <label for="fields[email]">
                                        <input type="email" name="fields[email]" class="form-control" value="" autocomplete="email" x-autocompletetype="email" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Email Address*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-first_name ml-validate-required">
                                    <label for="fields[first_name]">
                                        <input type="text" name="fields[first_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>First name*</p>
                                    </label>    
                                </div>
                                <div class="form-group ml-field-last_name ml-validate-required">
                                    <label for="fields[last_name]">
                                        <input type="text" name="fields[last_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Last name*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-company ml-validate-required">
                                    <label for="fields[company]">
                                        <input type="text" name="fields[company]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company*</p>
                                    </label>                                    
                                </div>
                                <div class="form-group ml-field-phone">
                                    <label for="fields[phone]">
                                        <input type="text" name="fields[phone]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Phone Number</p>
                                    </label>    
                                </div>
                            </div>                            
                            <input type="hidden" name="ml-submit" value="1" />
                            <button class="button" type="submit" class="primary">
                                Submit
                            </button>
                            <button disabled="disabled" style="display: none;" type="button" class="loading">
                                <img src="https://static.mailerlite.com/images/rolling@2x.gif" width="20" height="20" style="width: 20px; height: 20px;">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <input name="tabs" type="radio" id="tab-cloud" class="tab-input"/>
        <label for="tab-cloud" class="tab-label label-cloud">Pay as you go</label>
        <div class="tab-panel">
            <div id="pay-go-marketplace" class="choose-marketplace"> 
                <p>
                    Please choose your cloud provider
                </p>
                <div class="marketplace">
                    <div id="aws-pay-go-market" class="pricing-image-wrapper clickable">
                        <img src="/images/pe/aws_logo.svg">
                        <a href="/products/thingsboard-pe/aws/"></a>
                    </div>
                    <div id="azure-pay-go-market" class="pricing-image-wrapper">
                        <img src="/images/pe/azure_logo.svg">
                    </div>
                </div>    
            </div>        
            <div id="mlb2-7520964" style="display:none" class="deploy-form deploy-cloud ml-subscribe-form ml-subscribe-form-7520964">
                <div class="ml-vertical-align-center">
                    <div class="subscribe-form ml-block-success" style="display:none">
                        <div class="form-section center">
                            <i class="fa fa-check" aria-hidden="true"></i> 
                            <p>Thank you!</p>
                            <p>Please check your email for further instructions.</p>
                        </div>
                    </div>
                    <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/a6j3w6" data-id="731316" data-code="a6j3w6" method="POST" target="_blank">
                        <div class="subscribe-form">
                            <div class="form-section mb20">
                                <div class="cloud-provider">
                                    <div class="logo-container">
                                        <img src="/images/pe/aws_logo.svg">
                                    </div>
                                    <div class="cloud-provider-desc">
                                        <p>Deploy using AWS marketplace. Pay only when you use the platform. Ideal for evaluation and PoCs.</p>
                                        <p><span class="cloud-price">$0.57/hr</span><span class="cloud-price-desc"> for software + AWS usage fees</span></p>
                                    </div>
                                </div>                                                            
                            </div>
                            <div class="form-section mb30">
                                <p>Please fill this form to get deployment instructions.</p>        
                                <div class="form-group ml-field-email ml-validate-required ml-validate-email">
                                    <label for="fields[email]">
                                        <input type="email" name="fields[email]" class="form-control" value="" autocomplete="email" x-autocompletetype="email" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Email Address*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-first_name ml-validate-required">
                                    <label for="fields[first_name]">
                                        <input type="text" name="fields[first_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>First name*</p>
                                    </label>    
                                </div>
                                <div class="form-group ml-field-last_name ml-validate-required">
                                    <label for="fields[last_name]">
                                        <input type="text" name="fields[last_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Last name*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-company ml-validate-required">
                                    <label for="fields[company]">
                                        <input type="text" name="fields[company]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company*</p>
                                    </label>                                    
                                </div>
                                <div class="form-group ml-field-phone">
                                    <label for="fields[phone]">
                                        <input type="text" name="fields[phone]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Phone Number</p>
                                    </label>    
                                </div>
                            </div>                            
                            <input type="hidden" name="ml-submit" value="1" />
                            <button class="button" type="submit" class="primary">
                                Submit
                            </button>
                            <button disabled="disabled" style="display: none;" type="button" class="loading">
                                <img src="https://static.mailerlite.com/images/rolling@2x.gif" width="20" height="20" style="width: 20px; height: 20px;">
                            </button>
                        </div>
                    </form>
                </div>
            </div>            
            <div id="mlb2-9674436" style="display:none" class="deploy-form deploy-cloud ml-subscribe-form ml-subscribe-form-9674436">
                <div class="ml-vertical-align-center">
                    <div class="subscribe-form ml-block-success" style="display:none">
                        <div class="form-section center">
                            <i class="fa fa-check" aria-hidden="true"></i> 
                            <p>Thank you!</p>
                            <p>Please check your email for further instructions.</p>
                        </div>
                    </div>
                    <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/y7e6b7" data-id="996946" data-code="y7e6b7" method="POST" target="_blank">
                        <div class="subscribe-form">
                            <div class="form-section mb20">
                                <div class="cloud-provider">
                                    <div class="logo-container azure">
                                        <img src="/images/pe/azure_logo.svg">
                                    </div>
                                    <div class="cloud-provider-desc">
                                        <p>Deploy using Azure marketplace. Pay only when you use the platform. Ideal for evaluation and PoCs.</p>
                                        <p><span class="cloud-price">$0.78/hr</span><span class="cloud-price-desc"> for software + infrastructure usage fees</span></p>
                                    </div>
                                </div>                                                            
                            </div>
                            <div class="form-section mb30">
                                <p>Please fill this form to get deployment instructions.</p>        
                                <div class="form-group ml-field-email ml-validate-required ml-validate-email">
                                    <label for="fields[email]">
                                        <input type="email" name="fields[email]" class="form-control" value="" autocomplete="email" x-autocompletetype="email" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Email Address*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-first_name ml-validate-required">
                                    <label for="fields[first_name]">
                                        <input type="text" name="fields[first_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>First name*</p>
                                    </label>    
                                </div>
                                <div class="form-group ml-field-last_name ml-validate-required">
                                    <label for="fields[last_name]">
                                        <input type="text" name="fields[last_name]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Last name*</p>
                                    </label>
                                </div>
                                <div class="form-group ml-field-company ml-validate-required">
                                    <label for="fields[company]">
                                        <input type="text" name="fields[company]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Company*</p>
                                    </label>                                    
                                </div>
                                <div class="form-group ml-field-phone">
                                    <label for="fields[phone]">
                                        <input type="text" name="fields[phone]" class="form-control" value="" spellcheck="false" autocapitalize="off" autocorrect="off">
                                        <p>Phone Number</p>
                                    </label>    
                                </div>
                            </div>                            
                            <input type="hidden" name="ml-submit" value="1" />
                            <button class="button" type="submit" class="primary">
                                Submit
                            </button>
                            <button disabled="disabled" style="display: none;" type="button" class="loading">
                                <img src="https://static.mailerlite.com/images/rolling@2x.gif" width="20" height="20" style="width: 20px; height: 20px;">
                            </button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>        
    </div>
    <div class="question-contact center">
        <small>Questions about deployment options? <a href="/docs/contact-us/?subject=Deployment%20Options">Contact us.</a></small>
    </div>
</section>
<script type="text/javascript" src="https://static.mailerlite.com/js/w/webforms.min.js?v3772b61f1ec61c541c401d4eadfdd02f"></script>
<script type="text/javascript">
     function ml_webform_success_7972110() {
        var $ = ml_jQuery || jQuery;        
        $(location).attr('href', '/products/thingsboard-pe/install-thanks/?deploy=trial');
        //$('.ml-subscribe-form-7972110 .ml-block-success').show();
        //$('.ml-subscribe-form-7972110 .ml-block-form').hide();
        //$('html, body').animate({
        //    scrollTop: $('#tab-cloud').offset().top - 100
        //  }, 0);
        //$('.ml-subscribe-form-7520964 .ml-block-success').addClass("animated zoomIn");
    };
     function ml_webform_success_9674300() {
        var $ = ml_jQuery || jQuery;        
        $(location).attr('href', '/products/thingsboard-pe/install-thanks/?deploy=trial');
        //$('.ml-subscribe-form-9674300 .ml-block-success').show();
        //$('.ml-subscribe-form-9674300 .ml-block-form').hide();
        //$('html, body').animate({
        //    scrollTop: $('#tab-cloud').offset().top - 100
        //  }, 0);
        //$('.ml-subscribe-form-9674300 .ml-block-success').addClass("animated zoomIn");
    };
    function ml_webform_success_7520964() {
        var $ = ml_jQuery || jQuery;        
        $(location).attr('href', '/products/thingsboard-pe/install-thanks/?deploy=cloud');
        //$('.ml-subscribe-form-7520964 .ml-block-success').show();
        //$('.ml-subscribe-form-7520964 .ml-block-form').hide();
        //$('html, body').animate({
        //    scrollTop: $('#tab-cloud').offset().top - 100
        //  }, 0);
        //$('.ml-subscribe-form-7520964 .ml-block-success').addClass("animated zoomIn");
    };
    function ml_webform_success_9674436() {
        var $ = ml_jQuery || jQuery;        
        $(location).attr('href', '/products/thingsboard-pe/install-thanks/?deploy=cloud');
        //$('.ml-subscribe-form-9674436 .ml-block-success').show();
        //$('.ml-subscribe-form-9674436 .ml-block-form').hide();
        //$('html, body').animate({
        //    scrollTop: $('#tab-cloud').offset().top - 100
        //  }, 0);
        //$('.ml-subscribe-form-9674436 .ml-block-success').addClass("animated zoomIn");
    };    
    function ml_webform_success_7556612() {
        var $ = ml_jQuery || jQuery;       
        $(location).attr('href', '/products/thingsboard-pe/install-thanks/?deploy=premise');
        //$('.ml-subscribe-form-7556612 .ml-block-success').show();
        //$('.ml-subscribe-form-7556612 .ml-block-form').hide();
        //$('html, body').animate({
        //    scrollTop: $('#tab-on-premise').offset().top - 100
        //  }, 0);
        //$('.ml-subscribe-form-7556612 .ml-block-success').addClass("animated zoomIn");
    };                       
    jqueryDefer(
        function () {
            $( document ).ready(function() {
            
                 var freeMailList = [
                    'gmail.com',
                    'yahoo.com',
                    'hotmail.com',
                    'yahoo.co.in',
                    'aol.com',
                    'abc.com',
                    'xyz.com',
                    'pqr.com',
                    'rediffmail.com',
                    'live.com',
                    'outlook.com',
                    'me.com',
                    'msn.com',
                    'ymail.com',
                    'qq.com',
                    'yandex',
                    'mail.ru'
                 ]; 
                 
                 var corporateEmailRegexString = '^([\\w-\\.]+@';
                 for (var i=0;i<freeMailList.length;i++) {
                    var freeMail = freeMailList[i];
                    corporateEmailRegexString += '(?!'+freeMail+')';
                 }                 
                 corporateEmailRegexString += '([\\w-]+\\.)+[\\w-]{2,4})?$';
                 var corporateEmailRegex = new RegExp(corporateEmailRegexString);
            
                 function validateEmail(email) {
                    if (!email || !email.length) {
                        return false;
                    }
                    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]){2,40}$/.test(email.trim());
                 }
                 
                 function validateCorporateEmail(email) {
                    return corporateEmailRegex.test(email.trim());
                 }
            
                 $('#mlb2-7972110 button.primary').click(function(e) {
                        var emailContainer = $('#mlb2-7972110 .ml-field-email');
                        var emailInput = emailContainer.find('input[type="email"]');
                        emailInput.keydown(function() {
                            emailContainer.find('.corporate-email-error').css('display', 'none');
                        });
                        var email = emailInput.val();
                        emailContainer.removeClass('ml-error');  
                        emailContainer.find('.corporate-email-error').css('display', 'none');
                        if (validateEmail(email)) {
                            // if (!validateCorporateEmail(email)) { 
                            //    emailContainer.addClass('ml-error');  
                            //    emailContainer.find('.corporate-email-error').css('display', 'block');
                            //    e.preventDefault();
                            //}
                        }
                 });
                
                 $('.subscribe-form .form-section .form-group input').addClass("input--empty");
                 $('.subscribe-form .form-section .form-group input').on('input', function() {
                      if( !$(this).val() ) {
                         $(this).addClass("input--empty");
                      } else {
                         $(this).removeClass("input--empty");
                      }
                 });
                 $.urlParam = function (name) {
                    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                    return results ? results[1] : null;
                 };                 
                 var deployType = $.urlParam('deploy');
                 var type = $.urlParam('type');
                 if (!deployType || "premise" == deployType) {
                    $('#tab-on-premise').attr("checked", "checked");
                    var offset = !deployType ? 200 : 100;
                    $('html, body').animate({
                        scrollTop: $('#tab-on-premise').offset().top - offset
                      }, 0);
                 } else if ("cloud" == deployType) {
                    $('#tab-cloud').attr("checked", "checked"); 
                    $('html, body').animate({
                        scrollTop: $('#tab-cloud').offset().top - 100
                      }, 0);
                    if (type === 'azure') {
                        var payGoMarketplace = $('#pay-go-marketplace');
                        var azurePayGoForm = $('#mlb2-9674436');
                        payGoMarketplace.css('display', 'none');
                        azurePayGoForm.css('display', '');
                    }  
                 } else if ("trial" == deployType) {
                    $('#tab-trial').attr("checked", "checked"); 
                    $('html, body').animate({
                       scrollTop: $('#tab-trial').offset().top - 100
                     }, 0);
                 }
            });
        }
    );
</script>