---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing
defaultActivePricingSection: thingsboard-pe-options


cloudPlan:
    0:
        image: https://img.thingsboard.io/trendz/cloud-1.png
        title: 'Log in to ThingsBaord Cloud account and select “Plan and Billing” menu option. Press “Update Plan” button'
    1:
        image: https://img.thingsboard.io/trendz/cloud-2.png
        title: 'Choose “ThingsBoard + Trendz” and select the most suitable plan for you'        
    2:
        image: https://img.thingsboard.io/trendz/cloud-3.png
        title: 'Reload the page to see new “Trendz Analytics” option in your ThingsBoard Menu'

selfManagedPlan:
    0:
        image: https://img.thingsboard.io/trendz/self-managed-1.png
        title: 'Log into Licence Portal and create new Trendz Analytics Subscription'
    1:
        image: https://img.thingsboard.io/trendz/self-managed-2.png
        title: 'Get your license key'
    2:
        image: https://img.thingsboard.io/trendz/self-managed-3.png
        title: 'Follow the instructions to install Trendz the instructions to install Trendz Analytics to your server'

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
            <li id="menu-item-trendz-options" class="menu-item trendz-logo">
               <a href="javascript:void(0);" onClick="activatePricingSection('trendz-options')">Trendz Analytics</a>
            </li>
            <li id="menu-item-thingsboard-edge" class="menu-item tb-edge-logo">
               <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-edge')">Edge</a>
            </li>
         </ul>
       </nav>
    </div>
    <div id="thingsboard-pe-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector">
            <div class="solution thingsboard-cloud active defaultselection" data-product-id="thingsboard-cloud" onClick="activateProductSection('thingsboard-cloud')">
                <h3 data-faq-id="what-is-cloud" data-faq-link-size="70%">Cloud</h3>
            </div>
            <div class="solution thingsboard-pe" data-product-id="thingsboard-pe" onClick="activateProductSection('thingsboard-pe')">
                <h3 data-faq-id="difference" data-faq-link-size="70%">Self-managed</h3>
            </div>
        </div>
    </div>
    <div id="trendz-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector">
            <div class="solution trendz-cloud" data-product-id="trendz-cloud" onClick="activateProductSection('trendz-cloud')">
                <h3 data-faq-id="what-is-cloud" data-faq-link-size="70%">Cloud</h3>
            </div>
            <div class="solution trendz-self-managed active defaultselection" data-product-id="trendz-self-managed" onClick="activateProductSection('trendz-self-managed')">
                <h3 data-faq-id="difference" data-faq-link-size="70%">Self-managed</h3>
            </div>
        </div>
    </div>
    <div class="pricing-header-divider">
    </div>
</div>

<div id="thingsboard-cloud" class="pricing-content" style="display: none;">
    <div class="container">
        <div class="pricing-content-header row">
            <div class="pricing-content-description pricing-cloud active col-lg">
                <h2>Subscription plans</h2>
                <div class="pricing-content-details">
                    All subscription plans include <b>hosting</b> and <b>email</b> costs. Focus on your solution while we manage the servers for you.
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-cloud active">
               <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description">
                                <p>Become familiar with ThingsBoard features</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $10
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Start Free
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 30 Devices</div>
                            <div class="pricing-square-item">Up to 30 Assets</div>
                            <div class="pricing-square-item">10 million <span data-faq-id="data-points">data points</span><br> per month</div> 
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description">
                                <p>For PoCs and MVPs</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $149
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 100 Devices</div>
                            <div class="pricing-square-item">Up to 100 Assets</div>
                            <div class="pricing-square-item">100 million <span data-faq-id="data-points">data points</span><br> per month</div> 
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <div class="pricing-square-item" data-faq-id="white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>
                            <div class="pricing-square-description">
                                <p>For upcoming IoT Unicorns</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $399
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 500 Devices</div>
                            <div class="pricing-square-item">Up to 500 Assets</div>
                            <div class="pricing-square-item">500 million <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
                            </div>
                            <div class="pricing-square-item" data-faq-id="white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Business</h2>
                            <div class="pricing-square-description">
                                <p>For the fast grown, defined long term projects</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $749
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 1000 Devices</div>
                            <div class="pricing-square-item">Up to 1000 Assets</div>
                            <div class="pricing-square-item">1 billion <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
                            </div>
                            <div class="pricing-square-item" data-faq-id="white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description">
                                <p>Consider yourself a Fortune 500 company in the field?</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom <span data-faq-id="calculate" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Dedicated server instances</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="data-points">data points</span><br> per month</div>
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
                All subscription plans include <b>unlimited</b> customers, dashboards, integrations, api calls, data points & messages.
            </div>
        </div>
        <div id="perpetualHeader" class="pricing-content-description col-lg-6">
            <h2>License packages</h2>
        </div>
        <div class="col d-flex justify-content-end">
            <div class="solution-selector">
                <div id="pe-pay-as-you-go" class="solution pay-as-you-go active defaultselection" data-toggle="#payAsYouGo"
                                                                                                  data-description-toggle="#payAsYouGoHeader" onClick="activateSolutionSection('pe-pay-as-you-go')">
                    <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div id="pe-perpetual" class="solution perpetual" data-toggle="#perpetual" data-description-toggle="#perpetualHeader" onClick="activateSolutionSection('pe-perpetual')">
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
                            <span>/month</span>
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
                            <span>/month</span>
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
                            <span>/month</span>
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
                            <span>/month</span>
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
                        <h2>Perpetual</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Use your ThingsBoard instance forever</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $2,999
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
                        <div class="pricing-square-item">Unlimited Devices and Assets</div>
                        <div class="pricing-square-item">Integrations feature</div>
                        <div class="pricing-square-item">Unlimited datapoints and messages</div>
                        <div class="pricing-square-item">Unlimited API calls</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Email support within <b>24 hours</b>
                        </div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                    <div class="pricing-square">
                        <h2>Perpetual Kit</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Everything your product needs to succeed</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $4,999
                        </h4>                  
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                true,
                                '90b6c9b0-a198-11e9-8e16-03828ff5271c',
                                '3e826220-81fb-11ed-bcff-df3bbff38879',
                                'Perpetual Kit', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item">Unlimited Devices and Assets</div>
                        <div class="pricing-square-item">Integrations feature</div>
                        <div class="pricing-square-item">Unlimited datapoints and messages</div>
                        <div class="pricing-square-item">Unlimited API calls</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Email support within <b>12 hours</b>
                        </div>
                        <div class="pricing-square-item" data-faq-id="what-is-development-server">
                            <b>Development</b> instance included 
                        </div>
                        <div class="pricing-square-item" data-faq-id="additional-services">
                            <b>10 hours</b> of consulting or configuration services
                        </div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                    <div class="pricing-square">
                        <h2>Enterprise Bundle</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Supercharge your IoT solution</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $14,999
                        </h4>
                        <div class="row justify-content-center">
                            <a class="btn-blue btn-pricing" href="/docs/contact-us/" target="_blank">Get your license</a> 
                        </div>
                        <div class="pricing-square-item"><b>2 ThingsBoard Perpetual Kits</b></div>
                        <div class="pricing-square-item">1 Trendz perpetual license</div>
                        <div class="pricing-square-item">1 Trendz development license</div>
                        <div class="pricing-square-item">3 Edge perpetual licenses</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item">Training sessions</div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Email support within <b>12 hours</b>
                        </div>
                        <div class="pricing-square-item">1 year of software updates and support for all products in bundle</div>
                    </div>
                </div>
           </div>
        </div>
    </div>
 </div>  
</div>

<div id="trendz-self-managed" class="pricing-content" style="display: none;">
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
                    <div id="trendz-pay-as-you-go" class="solution pay-as-you-go active defaultselection" data-toggle="#trendzPayAsYouGo"
                                                   data-description-toggle="#trendzPayAsYouGoHeader" onClick="activateSolutionSection('trendz-pay-as-you-go')">
                        <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                    </div>
                    <div id="trendz-perpetual" class="solution perpetual" data-toggle="#trendzPerpetual"
                                                    data-description-toggle="#trendzPerpetualHeader" onClick="activateSolutionSection('trendz-perpetual')">
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
                            <h2>Maker</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 10 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $10
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" onClick="openTrendzWizard(event, 'self-managed-content', 'maker')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 200 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $175
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" onClick="openTrendzWizard(event, 'self-managed-content', 'prototype')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <br>
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
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" 
                                   onClick="openTrendzWizard(event, 'self-managed-content', 'startup')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
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
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" 
                                    onClick="openTrendzWizard(event, 'self-managed-content', 'business')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>   
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="pricing-section pricing-perpetual" id="trendzPerpetual">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div class="pricing-square">
                            <h2>Perpetual license</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Use your Trendz instance forever</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $8000
                            </h4>                  
                            <div class="row justify-content-center">
                                <button class="btn-blue btn-pricing" 
                                    onClick="getLicense(event,
                                    true,
                                    '898f5d80-0ed1-11eb-951e-b77b877a367b',
                                    'dbb5f1a0-0ed1-11eb-951e-b77b877a367b',
                                    'Perpetual Trendz', null, false)">
                                    Get your license
                                </button>
                            </div>
                            <div class="pricing-square-item">1 year of software updates</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited ML models</div>
                            <div class="pricing-square-item">Unlimited API calls</div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support within <b>12 hours</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="trendz-cloud" class="pricing-content" style="display: none;">
    <div class="container">
        <div class="pricing-content-header row">
            <div class="pricing-content-description-cloud pricing-cloud active col-lg">
                <h2>Subscription plans</h2>
                <div class="pricing-content-details">
                    <b>Trendz Cloud</b> subscription plans include hosting, backups, maintenance and already integrated with your ThingsBoard Cloud account.
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-cloud active">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 30 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $10
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="#" onClick="openTrendzWizard(event, 'cloud-content')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>                            
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 100 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                $100
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="#" onClick="openTrendzWizard(event, 'cloud-content')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <br>
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
                                $250
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="#" onClick="openTrendzWizard(event, 'cloud-content')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
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
                                $450
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="#" onClick="openTrendzWizard(event, 'cloud-content')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Email support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
                            </div>   
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Custom plan and SLA</p> 
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom <span data-faq-id="calculate" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a class="btn-blue btn-pricing" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Dedicated server instances</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Custom <b>SLA</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="thingsboard-edge" class="pricing-content">
 <div class="container">
    <div class="pricing-content-header row">
        <div id="communityEditionHeader" class="pricing-content-description col-lg-6">
        </div>
        <div id="payAsYouGoHeader" class="pricing-content-description col-lg-6">
            <h2>Subscription plans</h2>
            <div class="pricing-content-details">
                All subscription plans include <b>unlimited</b> dashboards, api calls, data points & messages
            </div>
        </div>
        <div id="perpetualHeader" class="pricing-content-description col-lg-6">
            <h2>License packages</h2>
        </div>
        <div class="col d-flex justify-content-end">
            <div class="solution-selector">
                <div id="edge-community" class="solution community-edition" data-toggle="#community-edition"
                                                        data-description-toggle="#communityEditionHeader" onClick="activateSolutionSection('edge-community')">
                    <h3>Community Edition</h3>
                </div>
                <div id="edge-pay-as-you-go" class="solution pay-as-you-go active defaultselection" data-toggle="#payAsYouGo"
                                                                            data-description-toggle="#payAsYouGoHeader" onClick="activateSolutionSection('edge-pay-as-you-go')">
                    <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div id="edge-perpetual" class="solution perpetual" data-toggle="#perpetual"
                                                data-description-toggle="#perpetualHeader" onClick="activateSolutionSection('edge-perpetual')">
                    <h3 data-faq-id="what-is-perpetual" data-faq-link-size="70%">Perpetual</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="pricing-div">
        <div class="pricing-section community-edition" id="community-edition">
           <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                    <div class="pricing-square">
                        <h2>Community Edition</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>100% Open source</p>
                        </div>
                        <h4 class="pricing-square-price no-sign mb-0">
                            YES, IT'S FREE
                        </h4>
                        <div class="row justify-content-center">
                            <a class="btn-blue btn-pricing" href="/docs/user-guide/install/edge/installation-options/">
                                Install
                            </a>
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-compatibility"><b>Compatible with TB CE Server</b></div>
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
        <div class="pricing-section pricing-pay-as-you-go active" id="payAsYouGo">
           <div class="row justify-content-center">                
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Nano</h2>
                        <div class="pricing-square-description">
                            <p>Up to 50 Devices and Assets</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $19
                            <span>/month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                '302e3420-fe4e-11ea-951e-b77b877a367b',
                                'Edge Nano', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">Up to 50 Devices</div>
                        <div class="pricing-square-item">Up to 50 Assets</div>
                        <div class="pricing-square-item" data-faq-id="optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-discount">
                            Tiered discounts
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Micro</h2>
                        <div class="pricing-square-description">
                            <p>Up to 100 Devices and Assets</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $29
                            <span>/month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing"
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                '6e6c58c0-fe4e-11ea-951e-b77b877a367b',
                                'Edge Micro', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">Up to 100 Devices</div>
                        <div class="pricing-square-item">Up to 100 Assets</div>
                        <div class="pricing-square-item" data-faq-id="optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-discount">
                            Tiered discounts
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Macro</h2>
                        <div class="pricing-square-description">
                            <p>Up to 200 Devices and Assets</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $39
                            <span>/month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing"
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                'a0e02610-fe4e-11ea-951e-b77b877a367b',
                                'Edge Macro', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">Up to 200 Devices</div>
                        <div class="pricing-square-item">Up to 200 Assets</div>
                        <div class="pricing-square-item" data-faq-id="optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-discount">
                            Tiered discounts
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Mega</h2>
                        <div class="pricing-square-description">
                            <p>Unlimited Devices and Assets</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $59
                            <span>/month</span>
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing"
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                '639fc7f0-da99-11ec-b9ac-0736fadd7ddd',
                                'Edge Mega', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-unlim-devices">
                            Unlimited Devices and Assets
                        </div>
                        <div class="pricing-square-item" data-faq-id="optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-discount">
                            Tiered discounts
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
                        <h2>Edge Perpetual Fallback License</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Use your ThingsBoard Edge instance forever</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $399
                        </h4>
                        <div class="row justify-content-center">
                            <button class="btn-blue btn-pricing" 
                                onClick="getLicense(event,
                                true,
                                'fc5e64e0-841f-11ec-b9ac-0736fadd7ddd',
                                '817e22f0-8420-11ec-b9ac-0736fadd7ddd',
                                'Perpetual', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">1 year of software updates</div>
                        <div class="pricing-square-item" data-faq-id="thingsboard-edge-unlim-devices">
                             Unlimited Devices and Assets
                        </div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Custom <b>SLA</b>
                        </div>
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
                    Typical price for one year update package is 1199 USD.                    
                    <br><br><b>Example 1</b>: Let's assume you purchased one license for ThingsBoard v2.4 in June 2019 and received an update to ThingsBoard v3.0 in May 2020.
                    This means you can continue using this ThingsBoard v3.0 instance forever. You can also migrate to different hardware without issues.
                    <br><br><b>Example 2</b>: Let's assume you purchased one license for ThingsBoard v2.4 in June 2019 and received an update to ThingsBoard v3.0 in May 2020.
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
        <div class="item" data-tag="h4" data-item-id="what-is-development-server" data-title="What is the Development instance?">
            <div class="container">
                <p>
                 With the Perpetual Kit, the licensee gets two license keys: one for the Production, and the other one for the Development server. The platform that is activated with a development key, has a watermark and is meant to be used as a sandbox environment for development and testing purposes. The main idea is to keep the established production flows going with the primary license but keep developing new solutions or optimizing the existing ones on the additional instance without the risk of influencing current customers’ experience.         
                </p>    
            </div>    
        </div>
       <div class="item" data-tag="h4" data-item-id="additional-services" data-title="How can I use my 10 hours bundle?">
            <div class="container">
                <p>
                 It can be your advantage for a quick start with the platform. These 10 hours can be used for consulting, training, or development services. Training sessions imply pre-defined topics, while Consulting may cover various technical questions, platform configurations, or your Use Case-related issues. The above services are conducted online. Alternatively, these 10 hours can be used to support you in the PoC, MVP, or ready-for-market solutions development by a dedicated development unit from ThingsBoard.        
                </p>    
            </div>    
        </div>    
        <div class="item" data-tag="h4" data-item-id="thingsboard-edge-discount" data-title="Can we have a discounted price for ThingsBoard Edges in case of bulk purchase?">
            <div class="container">
                <p>
                    We do understand that you may need multiple edge computing services. Price reduction starts from 10 licenses. Discount tiers are as follows: 10–50 Edges — 10%, 51–100 Edges — 12%, above 100 Edges — 15% off the license cost regardless the plan.
                </p>    
            </div>    
        </div>
        
        <div class="item" data-tag="h4" data-item-id="thingsboard-edge-compatibility" data-title="What ThingsBoard Edge compatibility means?">
            <div class="container">
                <p>
                    ThingsBoard Edge Community Edition is able to connect only to ThingsBoard Community Edition server.
                    ThingsBoard Edge Professional Edition is able to connect only to ThingsBoard Professional Edition server (it can be <a href="https://thingsboard.cloud" target="blank">ThingsBoard Cloud</a> or on-premise instances).
                    ThingsBoard Edge Community Edition <b>can not</b> be connected to ThingsBoard Professional Edition and vise-verse.
                </p>    
            </div>
        </div>
        <div class="item" data-tag="h4" data-item-id="thingsboard-edge-unlim-devices" data-title="What ThingsBoard Edge unlimited Devices and Assets means?">
            <div class="container">
                <p>
                    Unlimited number devices and assets - there is no any soft limits on creating devices and assets on the edge side. 
                    <b>But</b> in real case deployment there are couple additional factors, that must be considered to be able host a lot of devices on edge side - <b>hardware, speed of internet connection and gRPC channel bound limits</b>.
                    Edge <b>hardware</b> must be powerful enough to process messages from 'unlimited' number of devices and assets. 
                    Additionally, <b>speed of internet connection</b> between ThingsBoard Edge and ThingsBoard server must be fast to deliver huge amount of data from 'unlimited' number of devices and assets.
                    And last, but not least -  payload size and messages rate should be taken into consideration as well - <b>gRPC channel bound limits</b> affects messages delivery rate.
                </p>
            </div>
        </div>
        <h3 id="section2">Billing</h3>
        <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="How can I enable free trial?">
            <div class="container">
                <p>
                    Customer may <a href="https://thingsboard.cloud/signup" target="blank">signup on ThingsBoard Professional Edition Cloud</a> and get 30 days of free trial on Maker plan. 
                    30 days of seamless experience and the newest features, except white-labeling!
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
        <div class="item" data-tag="h4" data-item-id="what-is-cloud" data-title="What is ThingsBoard Cloud?">
            <div class="container">
                <p>
                ThingsBoard Cloud is a fully managed, scalable, and fault-tolerant platform for your IoT applications with combined subscription plans based on a monthly fee which already includes hosting costs.
                </p>  
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="difference" data-title="What the difference between Pay-as-you-go option and ThingsBoard Cloud?">
            <div class="container">
                <p>
                Pay-as-you-go subscription plans include license fees only with no hosing services, which means that you have to deploy ThingsBoard on an external cloud (AWS, Azure, GCP, etc), or on the local server (On-premise). This means you have to pay separately for the infrastructure and manage ThingsBoard PE server.
                ThingsBoard Cloud allows you to use ThingsBoard Professional Edition platform as a service on ThingsBoard enviroment.<br><br>
                Example: Pay as you go Prototype subscription fee is $99 comparing to Prototype subscription on ThingsBoard cloud which is $149. ThingsBoard Cloud Prototype subscription price differs from the Prototype plan for the self-managed license by hosting fee which included in the Cloud subscription price
                </p>  
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="calculate" data-title="How we calculate Enterprise plan price?">
            <div class="container">
                <p>
                The Enterprise subscription plan consists of the fixed platform cost and price per device.
                <br><br>The <b>platform cost</b> includes:
                <ul>
                  <li>White-labeling;</li>
                  <li>Dedicated server instances that will scale with the number of your devices;</li>
                  <li>Priority support;</li>
                  <li>On-demand training and email consulting;</li>
                </ul>
                The price <b>per-device</b> starts from <b>USD 0.01</b> per month and is determined based on the data points each device generates. <a href="https://thingsboard.io/docs/contact-us/">Contact us</a> to get a precise quote for the custom Enterprise subscription.
                </p>  
            </div>    
        </div>
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
               See feature <a href="/docs/user-guide/white-labeling/" target ="blank">documentation</a> for more details. ThingsBoard Cloud extends white-labeling feature with ability to configure own domain name easily. But currently it is not possible to connect third-party SMTP servers, notifications will be sent from our system. We plan to add this ability in future releases.
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
                <p>Customer may also rely on answers from ThingsBoard <a href="https://github.com/thingsboard/thingsboard/issues" target="blank">community on GitHub</a> (issues page), send their queries to <a href="https://groups.google.com/forum/#!forum/thingsboard" target="blank">Q&A forum</a> and start <a href="https://stackoverflow.com/questions/tagged/thingsboard" target="blank">Stack Overflow</a> themes.   
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
        <div class="item" data-tag="h4" data-item-id="optional-support" data-title="What does this optional support for ThingsBoard Edge mean?">
            <div class="container">
                <p>
                It means, that Edge support is not bundled to the license. For now we provide basic support for customers with more than 25 edge licenses of any type.
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
