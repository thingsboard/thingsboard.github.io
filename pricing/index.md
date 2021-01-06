---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing
defaultActivePricingSection: thingsboard-pe-options
defaultActivateSelectProduct: true

---

<div class="container">
    <div class="pricing-header">
       <div class="pricing-hero">
        <div class="pricing-hero-content">
            <h1>ThingsBoard Pricing</h1>
        </div>
       </div>
       <nav id="inner-navigation" class="inner-navigation">
         <ul id="menu-pricing-navigation-1" class="menu">
            <li id="menu-item-thingsboard-ce" class="menu-item tb-logo">
                <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-ce')">Community Edition</a>
            </li>
            <li id="menu-item-thingsboard-pe-options" class="menu-item tb-logo">
                <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-pe-options', true)">Professional Edition</a>
            </li>
            <li id="menu-item-trendz" class="menu-item trendz-logo">
                <a href="javascript:void(0);" onClick="activatePricingSection('trendz')">Trendz Analytics</a>
            </li>
         </ul>
       </nav> 
    </div>
    <div id="thingsboard-pe-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector">
            <div class="solution thingsboard-cloud active defaultselection" onClick="activateProductSection('thingsboard-cloud')">
                <h3>Cloud</h3>
            </div>
            <div class="solution thingsboard-pe" onClick="activateProductSection('thingsboard-pe')">
                <h3>Self-managed</h3>
            </div>
        </div>
    </div>
    <div class="pricing-header-divider">
    </div>
</div>

<div id="thingsboard-cloud" class="pricing-content" style="display: none;">
    <div class="container">
        <div class="pricing-content-header row">
            <div class="pricing-content-description pricing-cloud active col-lg-6">
                <h2>Subscription plans</h2>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-cloud active">
               <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description">
                                <p>Become familiar with ThingsBoard features</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $29
                                <span>/&nbsp;month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Start Free
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 10 Devices</div>
                            <div class="pricing-square-item">Up to 10 Assets</div>
                            <div class="pricing-square-item">10 million <span data-faq-id="data-points">data points</span><br/> per month</div> 
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description">
                                <p>For PoCs and MVPs</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $149
                                <span>/&nbsp;month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 100 Devices</div>
                            <div class="pricing-square-item">Up to 100 Assets</div>
                            <div class="pricing-square-item">100 million <span data-faq-id="data-points">data points</span><br/> per month</div> 
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <div class="pricing-square-item" data-faq-id="white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>
                            <div class="pricing-square-description">
                                <p>For upcoming IoT Unicorns</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $399
                                <span>/&nbsp;month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 500 Devices</div>
                            <div class="pricing-square-item">Up to 500 Assets</div>
                            <div class="pricing-square-item">500 million <span data-faq-id="data-points">data points</span><br/> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
                            </div>
                            <div class="pricing-square-item" data-faq-id="white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description">
                                <p>Consider yourself a Fortune 500 company in the field?</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Unlimited number of Devices</div> 
                            <div class="pricing-square-item">Unlimited number of Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="data-points">data points</span><br/> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Custom <b>SLA</b>
                            </div>
                            <div class="pricing-square-item" data-faq-id="white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</div>

<div id="thingsboard-ce" class="pricing-content" style="display: none;">
    <div class="pricing-div">
        <div class="container">
            <div class="pricing-section pricing-community active" id="community">
               <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div class="pricing-square">
                            <h2>Community Edition</h2>
                            <div class="pricing-square-description">
                                <p>100% Open source</p>
                            </div>
                            <h4 class="pricing-square-price no-sign mb-0">
                                YES, IT'S FREE
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="/docs/user-guide/install/installation-options/">
                                    Install
                                </a>
                            </div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited software updates</div>
                            <div class="pricing-square-item">Ability to contribute</div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>     
</div>

<div id="thingsboard-pe" class="pricing-content">
 <div class="container">
    <div class="pricing-content-header row">
        <div id="payAsYouGoHeader" class="pricing-content-description col-lg-6">
            <h2>Subscription plans</h2>
            <div class="pricing-content-details">
                All subscription plans include <b>unlimited</b> customers, dashboards, integrations, api calls, data points & messages
            </div>
        </div>
        <div id="perpetualHeader" class="pricing-content-description col-lg-6">
            <h2>License packages</h2>
        </div>
        <div class="col d-flex justify-content-end">
            <div class="solution-selector">
                <div class="solution pay-as-you-go active defaultselection" data-toggle="#payAsYouGo" data-description-toggle="#payAsYouGoHeader">
                    <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div class="solution perpetual" data-toggle="#perpetual" data-description-toggle="#perpetualHeader">
                    <h3 data-faq-id="what-is-perpetual" data-faq-link-size="70%">Perpetual</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="pricing-div">
        <div class="pricing-section pricing-pay-as-you-go active" id="payAsYouGo">
           <div class="row justify-content-center">
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Maker</h2>
                        <div class="pricing-square-description">
                            <p>To become familiar with ThingsBoard PE features</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $10
                            <span>/&nbsp;month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                false,
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '7ef31a80-a18e-11e9-8e16-03828ff5271c',
                                'Maker', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item">Up to 10 Devices</div>
                        <div class="pricing-square-item">Up to 10 Assets</div> 
                        <div class="pricing-square-item" data-faq-id="community-support">
                            Community support
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Prototype</h2>
                        <div class="pricing-square-description">
                            <p>The subscription is designed for PoCs and prototyping</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $99
                            <span>/&nbsp;month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                false,
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '0e236dc0-a196-11e9-8e16-03828ff5271c',
                                'Prototype', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item">Up to 100 Devices</div>
                        <div class="pricing-square-item">Up to 100 Assets</div>
                        <div class="pricing-square-item" data-faq-id="community-support">
                            Community support
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Startup</h2>
                        <div class="pricing-square-description">
                            <p>For upcoming IoT Unicorns</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $199
                            <span>/&nbsp;month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                false,
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '8ac6d190-a197-11e9-8e16-03828ff5271c',
                                'Startup', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item">Up to 500 Devices</div>
                        <div class="pricing-square-item">Up to 500 Assets</div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Email support within <b>36 hours</b>
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Enterprise</h2>
                        <div class="pricing-square-description">
                            <p>Consider yourself a Fortune 500 company in the field? Subscribe this plan</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $500
                            <span>/&nbsp;month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                false,
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '34530df0-a198-11e9-8e16-03828ff5271c',
                                'Enterprise', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item">Unlimited number of Devices</div> 
                        <div class="pricing-square-item">Unlimited number of Assets</div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Email support within <b>12 hours</b>
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
           </div>
        </div>
        <div class="pricing-section pricing-perpetual" id="perpetual">
           <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                    <div class="pricing-square">
                        <h2>Perpetual Fallback License</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Use your ThingsBoard instance forever</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $2999
                        </h4>                  
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                true,
                                '90b6c9b0-a198-11e9-8e16-03828ff5271c',
                                '4c711b60-a199-11e9-8e16-03828ff5271c',
                                'Perpetual', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item">1 year of software updates</div>
                        <div class="pricing-square-item">Unlimited Devices and Assets</div>
                        <div class="pricing-square-item">Integrations feature</div>
                        <div class="pricing-square-item">Unlimited datapoints and messages</div>
                        <div class="pricing-square-item">Unlimited API calls</div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Email support within <b>24 hours</b>
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
           </div>
        </div>
    </div>
 </div>  
</div>

<div id="trendz" class="pricing-content">
    <div class="container">
        <div class="pricing-content-header row">
            <div id="trendzPayAsYouGoHeader" class="pricing-content-description col-lg-6">
                <h2>Subscription plans</h2>
            </div>
            <div id="trendzPerpetualHeader" class="pricing-content-description col-lg-6">
                <h2>License packages</h2>
            </div>
            <div class="col d-flex justify-content-end">
                <div class="solution-selector">
                    <div class="solution pay-as-you-go active defaultselection" data-toggle="#trendzPayAsYouGo" data-description-toggle="#trendzPayAsYouGoHeader">
                        <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                    </div>
                    <div class="solution perpetual" data-toggle="#trendzPerpetual" data-description-toggle="#trendzPerpetualHeader">
                        <h3 data-faq-id="what-is-perpetual" data-faq-link-size="70%">Perpetual</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-pay-as-you-go active" id="trendzPayAsYouGo">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 200 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $175
                                <span>/&nbsp;month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" 
                                   onClick="getLicense(event,
                                    false,
                                    '31307df0-11f6-11ea-951e-b77b877a367b',
                                    '2985f1a0-7afd-11ea-951e-b77b877a367b',
                                    'Trendz Analytics Prototype', 'KFYU8D47ZB', true)">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <br/>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>                            
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 500 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $200
                                <span>/&nbsp;month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" 
                                   onClick="getLicense(event,
                                    false,
                                    '31307df0-11f6-11ea-951e-b77b877a367b',
                                    '018b7520-7afe-11ea-951e-b77b877a367b',
                                    'Trendz Analytics StartUp', 'KFYU8D47ZB', true)">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support within <b>36 hours</b>
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>   
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Business</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 1000 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $350
                                <span>/&nbsp;month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" 
                                    onClick="getLicense(event,
                                    false,
                                    '31307df0-11f6-11ea-951e-b77b877a367b',
                                    '6e3bb4f0-7afe-11ea-951e-b77b877a367b',
                                    'Trendz Analytics Business', 'KFYU8D47ZB', true)">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support within <b>24 hours</b>
                            </div>
                            <br/>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>   
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="pricing-section pricing-perpetual" id="trendzPerpetual">
                <div class="col-lg-8 offset-lg-2 mb-4">
                    <h4 class="text-center pt-2 pb-2" style="width: 100%">Trendz Analytics Perpetual Fallback License</h4>
                    <div style="display: flex;">
                        <div style="width: 50%; margin: 30px 10px 0;">
                            <div class="pricing-square-description">
                                <p>Create interactive visual analytics and discover trends, patterns and
                                    insight from your data:</p>
                            </div>
                            <ul>
                                <li class="pricing-square-item">One-click integration with ThingsBoard</li>
                                <li class="pricing-square-item">Self-service analytics</li>
                                <li class="pricing-square-item">Data clear and filtering</li>
                                <li class="pricing-square-item">Advanced visualizations</li>
                                <li class="pricing-square-item">Share and collaborate visualization</li>
                                <li class="pricing-square-item">Keep your data secure</li>
                            </ul>
                        </div>
                        <div style="width: 50%; margin: 0 10px 0;">
                            <div class="ml-form-embed"
                                 data-account="1017142:w0j5m5g7f5"
                                 data-form="1575980:e2f1u0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="container faq-content">
    <h2 id="faq" class="text-center">Frequently asked questions</h2>
    <div class="pi-accordion">
        <h3 id="licensing">Licensing</h3>    
        <div class="item" data-tag="h4" data-item-id="what-is-pay-as-you-go" data-title="What is &quot;Pay-as-you-go&quot; license?">
            <div class="container">
                <p>
                    Pay-as-you-go license is based on different subscription plans and represents a typical SaaS model. Each plan is usually limited by the number of devices or assets that ThingsBoard instance will manage. The billing is being provided either monthly or yearly.
                    Your credit card will be charged once per billing period, at the beginning of the corresponding period.  
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="what-is-perpetual" data-title="What is &quot;Perpetual&quot; license?">
            <div class="container">
                <p>
                    Perpetual fallback license is a license that allows you to use specific version of software, without an active subscription to it. 
                    Whenever you purchase a perpetual fallback license you get one year of software updates included. 
                    You can purchase additional updates if required. 
                    Typical price for one year update package is within 40% of inital license cost.                    
                    <br/><br/><b>Example 1</b>: Let's assume you purchased one license for ThingsBoard v2.4 in June 2019 and received an update to ThingsBoard v3.0 in May 2020.
                    This means you can continue using this ThingsBoard v3.0 instance forever. You can also migrate to different hardware without issues.
                    <br/><br/><b>Example 2</b>: Let's assume you purchased one license for ThingsBoard v2.4 in June 2019 and received an update to ThingsBoard v3.0 in May 2020.
                    This means you can continue using this ThingsBoard v3.0 instance forever. Later, in August 2020 we released v3.1. 
                    In order to get the v3.1 update, you will need to purchase an additional year of software updates for ThingsBoard PE which will cost 1199 USD. 
                    However, you can continue using v3.0 without updates.                    
                </p>
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="can-i-migrate" data-title="Can I migrate from one subscription to another?">
            <div class="container">
                <p>
                    Yes. One of the greatest features of <a href="/products/license-server/">ThingsBoard License Server</a> is the ability to change subscription plans. 
                    Now it is as simple as that. The flow is: Subscription details — Update subscription — Choose a plan. 
                    Also there is an Update subscription button in the action icons tray.   
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="migrate-between-servers" data-title="Can I migrate from cloud to on-premise server using the same license?">
            <div class="container">
                <p>
                    Yes, definitely! 
                    For that purpose we made a possibility to Activate/Deactivate instance.
                    In order to migrate between servers customer must deactivate its instance, install the software on new server and then use already existing license secret.
                    Backup of all data from previos instance is necessary if customer wants to continue utilizing same environment after migration.
                    Notice: license check mechanism won't allow using ThingsBoard Professional Edition on two or more servers simultaneously (unless you purchase two instances of the same subscription plan).         
                </p>    
            </div>    
        </div>
         <div class="item" data-tag="h4" data-item-id="migrate-plan-to-perpetual" data-title="Is it possible to jump from subscription to perpetual?">
            <div class="container">
                <p>
                 Customer may cancel the subscription and purchase a perpetual license. 
                 The remain costs from terminated subscription plan (if remain) will be deducted from Total cost for the perpetual license.
                 Keep in mind: perpetual license is non-cancelable.
                 So, customer can not stop using perpetual license and rely on total price for any subscription plan to be decreased.         
                </p>    
            </div>    
        </div>
        <h3 id="section2">Billing</h3>
        <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="How can I enable free trial?">
            <div class="container">
                <p>
                    Customer may still use <a href="https://thingsboard.cloud" target="blank">ThingsBoard Professional Edition Live Demo</a> for that. 
                    30 days of seamless experience and the newest features, except white-labeling, from the latest source code! 
                    Note: Live Demo is a shared environment with hardware and software limitations. 
                    It is introduced to host multiple trial tenants on the same server instance(s).
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="Are there any saving options?">
            <div class="container">
                <p>
                 As customers may see from the Purchase form, using of special coupons for discount is possible. Time after time we grant coupons to our regular customers (read newsletters), provide promo codes during events and distribute coupons to our partners.   
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="If I want to be a re-seller of ThingsBoard, shall I have a discount?">
            <div class="container">
                <p>
                 We have clear and transparent conditions for partners. Send us a request via <a href="/docs/contact-us/" target="blank">contact us</a> and we will discuss with you all benefits of cooperation with ThingsBoard Inc.   
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="cancel-subscription" data-title="When I cancel the subscription, I loose my credits?">
            <div class="container">
                <p>
                Customers may manage their subscription plans: update or cancel them. Once the subscription is deleted before expiration, Stripe will keep the balance. After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.      
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="trendz-free-subscription" data-title="Can we get a trial license for Trendz Analytics?">
            <div class="container">
                <p>
                As part of evaluation process, we can give you 30 days of free trial. 
                Please, send us your request on <a href="/docs/contact-us/?subject=ThingsBoard%20Products">Contact us</a>.      
                </p>    
            </div>    
        </div>
        <h3 id="section3">ThingsBoard Cloud</h3>
        <div class="item" data-tag="h4" data-item-id="api-limits" data-title="Is there any API Limits?">
            <div class="container">
                <p>
                Yes, ThingsBoard Cloud subscriptions have Entity, API and Rate limits. See subscription <a href="/products/paas/subscription/" target="blank">documentation</a> for more details.
                </p>  
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="data-points" data-title="What is a data point?">
            <div class="container">
                <p>
                Data point is a key-value pair that your device telemetry messages contain. For example, the message <i>{"temperature":42, "humidity": 60}</i> contains two data points.  
                Each ThingsBoard Cloud subscription plan has a maximum number of data points that can be sent from all your devices per month. 
                There are other <a href="/products/paas/subscription/" target ="blank">important parameters</a> of the subscription.
                </p>  
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="white-labeling" data-title="What is a white-labeling?">
            <div class="container">
                <p>
               ThingsBoard web interface allows you to configure your company or product logo and color scheme in 2 minutes with zero coding efforts and no service restart required. 
               See feature <a href="/docs/user-guide/white-labeling/" target ="blank">documentation</a> for more details. ThingsBoard Cloud extends white-labeling feature with ability to configure own domain name easily. 
               See <a href="/products/paas/domains/" target ="blank">managing domain</a> for more details.
                </p>  
            </div>    
        </div>                   
        <h3 id="section3">Support</h3>
        <div class="item" data-tag="h4" data-item-id="community-support" data-title="What does community support mean?">
            <div class="container">
                <p>
                Community support is free-of-charge option. It is a volonteering initiative, provided by our team and other ThingsBoard contributors. 
                Please, be aware that support services is one of ThingsBoard Inc. business fields. 
                Although our engineers successfully handle community support requests in their free time, this doesn't mean any obligation for ThingsBoard Inc.
                We encourage you to <a href="/docs/">read documentation</a>, subscribe to our <a href="https://www.youtube.com/c/thingsboard" target ="blank">YouTube channel</a> where we host <a href="https://www.youtube.com/watch?v=M0CaascgDmg&list=PLYEKB_XwLCZJ6T8RPLTjRwMw0eoabpEKO" target="blank">the free Education course</a> and most demanded tutorials, samples and guides.
                </p>
                <p>Customer may also rely on answers from ThingsBoard <a href="https://github.com/thingsboard/thingsboard/issues" target="blank">community on GitHub</a> (issues page), send their queries to <a href="https://groups.google.com/forum/#!forum/thingsboard" target="blank">Q&A forum</a> and start <a href="http://stackoverflow.com/questions/tagged/thingsboard" target="blank">Stack Overflow</a> themes.   
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="professional-support" data-title="What support plans do you have?">
            <div class="container">
                <p>
                We provide support bundles which contain server issues and application development tips. Please review ThingsBoard professional <a href="/docs/services/support/" target="blank">support plans</a>. Also we will add ability to buy support plan from <a href="https://license.thingsboard.io/">License portal</a>.
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="subscription-support" data-title="What issues included in email support?">
            <div class="container">
                <p>
                For StartUp, Business and Enterprise licensees as well as Perpetual licensees we provide email response on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with out team member.
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="policies" data-title="Refund and Delivery Policy">
            <div class="container">
                <p><b>Refund Policy</b></p>
                <p>
                The License fee is non-refundable, regardless of any circumstances. 
                Customers may manage their subscription plans: update or cancel them. 
                Once the subscription is deleted before expiration, Stripe will keep the balance. 
                After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
                This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.
                </p>
                <p><b>Delivery Policy</b></p>
                <p>
                The software is available for download and installation from our website. 
                See <a href="https://thingsboard.io/docs/user-guide/install/pe/installation-options/">Installation Guides</a> for more details.
                In order to activate the software you will need to obtain the license key. Instruction how to obtain and use the license key is provided in the installation guide. 
                See <a href="https://www.youtube.com/watch?v=dK-QDFGxWek">How-to get pay-as-you-go subscription</a> 
                or <a href="https://www.youtube.com/watch?v=GPe0lHolWek">How-to get perpetual license</a> for more details. 
                Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> if you have any questions or require support.
                </p>
               <p></p>
            </div>    
        </div>
    </div>
</div>   
