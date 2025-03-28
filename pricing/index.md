---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing
defaultActivePricingSection: thingsboard-pe-options


northAmericaCloudPlan:
    0:
        image: /images/trendz/cloud-1.webp
        title: 'Log in to ThingsBoard Cloud account and select “Plan and Billing” menu option. Press “Update Plan” button'
    1:
        image: /images/trendz/cloud-2.webp
        title: 'Choose “ThingsBoard + Trendz” and select the most suitable plan for you'        
    2:
        image: /images/trendz/cloud-3.webp
        title: 'Reload the page to see new “Trendz Analytics” option in your ThingsBoard Menu'

europeCloudPlan:
  0:
    image: /images/trendz/eu-cloud-1.webp
    title: 'Log in to ThingsBoard Cloud account and select “Plan and Billing” menu option. Press “Update Plan” button'
  1:
    image: /images/trendz/eu-cloud-2.webp
    title: 'Choose “ThingsBoard + Trendz” and select the most suitable plan for you'
  2:
    image: /images/trendz/eu-cloud-3.webp
    title: 'Reload the page to see new “Trendz Analytics” option in your ThingsBoard Menu'

selfManagedPlan:
    0:
        image: /images/trendz/self-managed-1.png
        title: 'Log into Licence Portal and create new Trendz Analytics Subscription'
    1:
        image: /images/trendz/self-managed-2.png
        title: 'Get your license key'
    2:
        image: /images/trendz/self-managed-3.png
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
                <a id="Pricing_CE" href="javascript:void(0);" class="gtm_button" onClick="activatePricingSection('thingsboard-ce')">Community Edition</a>
            </li>
            <li id="menu-item-thingsboard-pe-options" class="menu-item tb-logo">
                <a id="Pricing_PE" href="javascript:void(0);" class="gtm_button" onClick="activatePricingSection('thingsboard-pe-options', true)">Professional Edition</a>
            </li>
            <li id="menu-item-trendz-options" class="menu-item trendz-logo">
               <a id="Pricing_TA" href="javascript:void(0);" class="gtm_button" onClick="activatePricingSection('trendz-options')">Trendz Analytics</a>
            </li>
            <li id="menu-item-thingsboard-edge" class="menu-item tb-edge-logo">
               <a id="Pricing_Edge" href="javascript:void(0);" class="gtm_button" onClick="activatePricingSection('thingsboard-edge')">Edge</a>
            </li>
         </ul>
       </nav>
    </div>
    <div id="thingsboard-pe-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector product-selector-outlined">
            <div id="Pricing_PE_Cloud" 
                 class="solution thingsboard-cloud active defaultselection gtm_button" 
                 data-product-id="thingsboard-cloud" 
                 onClick="activateProductSection('thingsboard-cloud')">
                <h3 data-faq-id="tb-cloud-definition" 
                    data-faq-link-size="70%">Cloud</h3>
            </div>
            <div id="Pricing_PE_SM" class="solution thingsboard-pe gtm_button" data-product-id="thingsboard-pe" onClick="activateProductSection('thingsboard-pe')">
                <h3 data-faq-id="pe-pay-as-you-go-self-managed-definition" data-faq-link-size="70%">Self-managed</h3>
            </div>
        </div>
    </div>
    <div id="trendz-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector product-selector-outlined">
            <div id="Pricing_TA_Cloud"
                 data-solutionId="trendz-cloud"
                 class="solution trendz-cloud gtm_button" 
                 data-product-id="trendz-cloud" 
                 onClick="activateProductSection('trendz-cloud')">
                <h3 data-faq-id="trendz-cloud-definition" data-faq-link-size="70%">Cloud</h3>
            </div>
            <div id="Pricing_TA_SM"
                 data-solutionId="trendz-self-managed"
                 class="solution trendz-self-managed active defaultselection gtm_button"
                 data-product-id="trendz-self-managed"
                 onClick="activateProductSection('trendz-self-managed')">
                <h3 data-faq-id="trendz-pay-as-you-go-self-managed" data-faq-link-size="70%">Self-managed</h3>
            </div>
        </div>
    </div>
    <div class="pricing-header-divider">
    </div>
</div>

<div id="thingsboard-cloud" class="pricing-content" style="display: none;">
    <div class="container">
      <div class="pricing-content-header row">
          <div id="northAmericaHeader" class="pricing-content-description col-lg-6">
              <h2>Subscription plans</h2>
              <div class="pricing-content-details">
                  All subscription plans include <b>hosting</b> and <b>email</b> costs. Focus on your solution while we manage the servers for you.
              </div>
          </div>
          <div id="europeHeader" class="pricing-content-description col-lg-6">
              <h2>Subscription plans</h2>
              <div class="pricing-content-details">
                  All subscription plans include <b>hosting</b> and <b>email</b> costs. Focus on your solution while we manage the servers for you.
              </div>
          </div>
          <div class="col d-flex justify-content-end">
              <div class="solution-selector solution-selector-cloud">
                  <div id="Pricing_PE_Cloud_NorthAmerica"
                       data-solutionId="cloud-north-america"
                       class="solution north-america active gtm_button"
                       data-toggle="#northAmerica"
                       data-description-toggle="#northAmericaHeader"
                       onClick="activateServerSection('cloud-north-america', '/docs/paas/')">
                      <h3>North America</h3>
                  </div>
                  <div id="Pricing_PE_Cloud_Europe"
                       data-solutionId="cloud-europe"
                       class="solution europe gtm_button"
                       data-toggle="#europe"
                       data-description-toggle="#europeHeader"
                       onClick="activateServerSection('cloud-europe', '/docs/paas/eu/')">
                      <h3>Europe</h3>
                  </div>
              </div>
          </div>
      </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-cloud active" id="northAmerica">
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
                                <a id="Pricing_PE_Cloud_Maker" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                    Start Free
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 30 Devices</div>
                            <div class="pricing-square-item">Up to 30 Assets</div>
                            <div class="pricing-square-item">10 million <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div> 
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
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
                                <a id="Pricing_PE_Cloud_Prototype" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 100 Devices</div>
                            <div class="pricing-square-item">Up to 100 Assets</div>
                            <div class="pricing-square-item">100 million <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div> 
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
                                Community support
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
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
                                <a id="Pricing_PE_Cloud_Startup" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 500 Devices</div>
                            <div class="pricing-square-item">Up to 500 Assets</div>
                            <div class="pricing-square-item">500 million <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
                                Support
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
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
                                <a id="Pricing_PE_Cloud_Business" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 1000 Devices</div>
                            <div class="pricing-square-item">Up to 1000 Assets</div>
                            <div class="pricing-square-item">1 billion <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
                                Support
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description">
                                <p>Consider yourself a Fortune 500 company in the field?</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom <span data-faq-id="tb-cloud-enterprise-pricing-calculation" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_PE_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Dedicated server instances</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-enterprise-sla">
                                Custom <b>SLA</b>
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
               </div>
            </div>
            <div class="pricing-section pricing-cloud" id="europe">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description">
                                <p>Become familiar with ThingsBoard features</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €9
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_PE_Cloud_Maker" class="btn-blue btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                    Start Free
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 30 Devices</div>
                            <div class="pricing-square-item">Up to 30 Assets</div>
                            <div class="pricing-square-item">10 million <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div> 
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
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
                                €145
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_PE_Cloud_Prototype" class="btn-blue btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 100 Devices</div>
                            <div class="pricing-square-item">Up to 100 Assets</div>
                            <div class="pricing-square-item">100 million <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div> 
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
                                Community support
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>
                            <div class="pricing-square-description">
                                <p>For upcoming IoT Unicorns</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €385
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_PE_Cloud_Startup" class="btn-blue btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 500 Devices</div>
                            <div class="pricing-square-item">Up to 500 Assets</div>
                            <div class="pricing-square-item">500 million <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
                                Support
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Business</h2>
                            <div class="pricing-square-description">
                                <p>For the fast grown, defined long term projects</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €725
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_PE_Cloud_Business" class="btn-blue btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 1000 Devices</div>
                            <div class="pricing-square-item">Up to 1000 Assets</div>
                            <div class="pricing-square-item">1 billion <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-support-included">
                                Support
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description">
                                <p>Consider yourself a Fortune 500 company in the field?</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom <span data-faq-id="tb-cloud-enterprise-pricing-calculation" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_PE_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Dedicated server instances</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-enterprise-sla">
                                Custom <b>SLA</b>
                            </div>
                            <div class="pricing-square-item" data-faq-id="tb-cloud-white-labeling"><b>White-labeling</b></div>
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
                                <p>100% Open-source</p>
                            </div>
                            <h4 class="pricing-square-price no-sign mb-0">
                                YES, IT'S FREE
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_CE_Install" class="btn-blue btn-pricing gtm_button" href="/docs/user-guide/install/installation-options/">
                                    Install
                                </a>
                            </div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited software updates</div>
                            <div class="pricing-square-item">Ability to contribute</div>
                            <div class="pricing-square-item" data-faq-id="ce-out-of-box-support">
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
                <div id="Pricing_PE_SM_PayAsYouGo"
                     data-solutionId="pe-pay-as-you-go"
                     class="solution pay-as-you-go active defaultselection gtm_button"
                     data-toggle="#payAsYouGo"
                     data-description-toggle="#payAsYouGoHeader"
                     onClick="activateSolutionSection('pe-pay-as-you-go')">
                    <h3 data-faq-id="pe-pay-as-you-go-self-managed-subscription-plans" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div id="Pricing_PE_SM_Perpetual"
                     data-solutionId="pe-perpetual"
                     class="solution perpetual gtm_button"
                     data-toggle="#perpetual"
                     data-description-toggle="#perpetualHeader"
                     onClick="activateSolutionSection('pe-perpetual')">
                    <h3 data-faq-id="pe-perpetual-perpetual-meaning" data-faq-link-size="70%">Perpetual</h3>
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
                            <button id="Pricing_PE_SM_Maker" class="btn-blue btn-pricing gtm_button" 
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
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included">
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
                            <button id="Pricing_PE_SM_Prototype" class="btn-blue btn-pricing gtm_button" 
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
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included">
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
                            <button id="Pricing_PE_SM_Startup" class="btn-blue btn-pricing gtm_button" 
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
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included">
                            Support within <b>36 hours</b>
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
                            <button id="Pricing_PE_SM_Enterprise" class="btn-blue btn-pricing gtm_button" 
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
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included">
                            Support within <b>12 hours</b>
                        </div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                    </div>
                </div>
           </div>
        </div>
        <div class="pricing-section pricing-perpetual" id="perpetual">
           <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Perpetual</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Use your ThingsBoard instance forever</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $4,999
                        </h4>                  
                        <div class="row justify-content-center">
                            <button id="Pricing_PE_SM_Perpetual_Perpetual" class="btn-blue btn-pricing gtm_button" 
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
                        <div class="pricing-square-item" data-faq-id="pe-perpetual-support-level">Support within 12 hours</div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Perpetual Kit</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Everything your product needs to succeed</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $5,999
                        </h4>                  
                        <div class="row justify-content-center">
                            <button id="Pricing_PE_SM_Perpetual_Kit" class="btn-blue btn-pricing gtm_button" 
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
                        <div class="pricing-square-item" data-faq-id="pe-perpetual-support-level">Support within 12 hours</div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
                        <div class="pricing-square-item" data-faq-id="pe-perpetual-prod-vs-dev"><b>Development instance included</b></div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Enterprise Bundle</h2>
                        <div class="pricing-square-description" style="min-height: 50px">
                            <p>Supercharge your IoT solution</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $14,999
                        </h4>
                        <div class="row justify-content-center">
                            <a id="Pricing_PE_SM_Enterprise_Bundle" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/" target="_blank">Get your license</a> 
                        </div>
                        <div class="pricing-square-item"><b>2 ThingsBoard Perpetual Kits</b></div>
                        <div class="pricing-square-item">1 Trendz perpetual license</div> 
                        <div class="pricing-square-item">1 Trendz development license</div>
                        <div class="pricing-square-item">3 Edge perpetual licenses</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item" data-faq-id="pe-perpetual-support-level">Support within 12 hours</div>
                        <div class="pricing-square-item">1 year of software updates and support for all products in bundle</div>
                    </div>
                </div>
           </div>
            <div class="row justify-content-center" style="margin-top: 60px">
                <a id="Pricing_PE_SM_Perpetual" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/" style="margin:0">
                    Contact Us
                </a>
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
                <h2>License package</h2>
            </div>
            <div class="col d-flex justify-content-end">
                <div class="solution-selector">
                    <div id="Pricing_TA_SM_PayAsYouGo"
                         data-solutionId="trendz-pay-as-you-go"
                         class="solution pay-as-you-go active defaultselection trendz-pay-as-you-go gtm_button" 
                         data-toggle="#trendzPayAsYouGo"
                         data-description-toggle="#trendzPayAsYouGoHeader" 
                         onClick="activateSolutionSection('trendz-pay-as-you-go')">
                        <h3 data-faq-id="trendz-pay-as-you-go-subscription-plans" data-faq-link-size="70%">Pay-as-you-go</h3>
                    </div>
                    <div id="Pricing_TA_SM_Perpetual" 
                         data-solutionId="trendz-perpetual"
                         class="solution perpetual trendz-perpetual gtm_button"
                         data-toggle="#trendzPerpetual"
                         data-description-toggle="#trendzPerpetualHeader" 
                         onClick="activateSolutionSection('trendz-perpetual')">
                        <h3 data-faq-id="trendz-perpetual-license-meaning" data-faq-link-size="70%">Perpetual</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-pay-as-you-go active" id="trendzPayAsYouGo">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <button id="Pricing_TA_SM_Maker" class="btn-blue btn-pricing gtm_button" onClick="openTrendzWizard(event, 'self-managed-content', 'maker')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-pay-as-you-go-support-included">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <button id="Pricing_TA_SM_Prototype" class="btn-blue btn-pricing gtm_button" onClick="openTrendzWizard(event, 'self-managed-content', 'prototype')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-pay-as-you-go-support-included">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <button id="Pricing_TA_SM_Startup"
                                        class="btn-blue btn-pricing gtm_button" 
                                        onClick="openTrendzWizard(event, 'self-managed-content', 'startup')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-pay-as-you-go-support-included">
                                Support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <button id="Pricing_TA_SM_Business" class="btn-blue btn-pricing gtm_button" 
                                    onClick="openTrendzWizard(event, 'self-managed-content', 'business')">
                                    Try 30 days for free
                                </button>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-pay-as-you-go-support-included">
                                Support
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
                                <button id="Pricing_TA_SM_Perpetual_License" class="btn-blue btn-pricing gtm_button" 
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
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-perpetual-support-level">
                                Support within <b>12 hours</b>
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
            <div id="trendzNorthAmericaHeader" class="pricing-content-description col-lg-6">
                <h2>Subscription plans</h2>
                <div class="pricing-content-details">
                  <b>Trendz Cloud</b> subscription plans include hosting, backups, maintenance and already integrated with your ThingsBoard Cloud account.
                </div>
            </div>
            <div id="trendzEuropeHeader" class="pricing-content-description col-lg-6">
              <h2>Subscription plans</h2>
              <div class="pricing-content-details">
                  <b>Trendz Cloud</b> subscription plans include hosting, backups, maintenance and already integrated with your ThingsBoard Cloud account.
              </div>
            </div>
            <div class="col d-flex justify-content-end">
              <div class="solution-selector solution-selector-cloud">
                  <div id="Pricing_Trendz_Cloud_NorthAmerica"
                       data-solutionId="trendz-cloud-north-america"
                       class="solution north-america active gtm_button defaultselection"
                       data-toggle="#trendzNorthAmerica"
                       data-description-toggle="#trendzNorthAmericaHeader"
                       onClick="setActiveSolutionSection('trendz-cloud-north-america')">
                      <h3>North America</h3>
                  </div>
                  <div id="Pricing_Trendz_Cloud_Europe"
                       data-solutionId="trendz-cloud-europe"
                       class="solution europe gtm_button"
                       data-toggle="#trendzEurope"
                       data-description-toggle="#trendzEuropeHeader"
                       onClick="setActiveSolutionSection('trendz-cloud-europe')">
                      <h3>Europe</h3>
                  </div>
              </div>
          </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section trendz-pricing-cloud active" id="trendzNorthAmerica">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <a id="Pricing_TA_Cloud_Maker" class="btn-blue btn-pricing gtm_button north-america" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'maker')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <a id="Pricing_TA_Cloud_Prototype" class="btn-blue btn-pricing gtm_button north-america" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'prototype')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <a id="Pricing_TA_Cloud_Startup" class="btn-blue btn-pricing gtm_button north-america" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'startup')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
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
                                <a id="Pricing_TA_Cloud_Business" class="btn-blue btn-pricing gtm_button north-america" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'business')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Custom plan and SLA</p> 
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom <span data-faq-id="trendz-cloud-enterprise-price" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Dedicated server instances</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="trendz-cloud-limits">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-enterprise-sla">
                                Custom <b>SLA</b>
                            </div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-section trendz-pricing-cloud active" id="trendzEurope">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 30 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €9
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Maker" class="btn-blue btn-pricing gtm_button europe" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'maker')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 100 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €100
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Prototype" class="btn-blue btn-pricing gtm_button europe" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'prototype')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Community support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>                            
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 500 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €250
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Startup" class="btn-blue btn-pricing gtm_button europe" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'startup')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Business</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Up to 1000 Devices and Assets</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                €450
                                <span>/month</span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Business" class="btn-blue btn-pricing gtm_button europe" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'business')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">AI Assistant</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-support-included">
                                Support
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-gt-xl mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description" style="min-height: 50px;">
                                <p>Custom plan and SLA</p> 
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                Custom <span data-faq-id="trendz-cloud-enterprise-price" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
                                    Contact Us
                                </a>
                            </div>
                            <div class="pricing-square-item">Dedicated server instances</div>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited <span data-faq-id="trendz-cloud-limits">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-enterprise-sla">
                                Custom <b>SLA</b>
                            </div>
                            <div class="pricing-square-item" data-faq-id="trendz-cloud-white-labeling">White-labeling</div>
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
            <h2>License package</h2>
        </div>
        <div class="col d-flex justify-content-end">
            <div class="solution-selector">
                <div id="Pricing_Edge_CE"
                     data-solutionId="edge-community"
                     class="solution community-edition gtm_button"
                     data-toggle="#community-edition"
                     data-description-toggle="#communityEditionHeader"
                     onClick="activateSolutionSection('edge-community')">
                    <h3>Community Edition</h3>
                </div>
                <div id="Pricing_Edge_PayAsYouGo"
                     data-solutionId="edge-pay-as-you-go"
                     class="solution pay-as-you-go active defaultselection gtm_button"
                     data-toggle="#payAsYouGo"
                     data-description-toggle="#payAsYouGoHeader"
                     onClick="activateSolutionSection('edge-pay-as-you-go')">
                    <h3 data-faq-id="edge-pay-as-you-go-model" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div id="Pricing_Edge_Perpetual"
                     data-solutionId="edge-perpetual"
                     class="solution perpetual"
                     data-toggle="#perpetual"
                     data-description-toggle="#perpetualHeader"
                     onClick="activateSolutionSection('edge-perpetual')">
                    <h3 data-faq-id="edge-perpetual-license" data-faq-link-size="70%">Perpetual</h3>
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
                            <p>100% Open-source</p>
                        </div>
                        <h4 class="pricing-square-price no-sign mb-0">
                            YES, IT'S FREE
                        </h4>
                        <div class="row justify-content-center">
                            <a id="Pricing_Edge_CE_Install" class="btn-blue btn-pricing gtm_button" href="/docs/user-guide/install/edge/installation-options/">
                                Install
                            </a>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-community-compatibility"><b>Compatible with TB CE Server</b></div>
                        <div class="pricing-square-item">Unlimited Devices and Assets</div>
                        <div class="pricing-square-item">Unlimited software updates</div>
                        <div class="pricing-square-item">Ability to contribute</div>
                        <div class="pricing-square-item" data-faq-id="edge-community-support-options">
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
                            <button id="Pricing_Edge_PayAsYouGo_Nano" class="btn-blue btn-pricing gtm_button" 
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                '302e3420-fe4e-11ea-951e-b77b877a367b',
                                'Edge Nano', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">Up to 50 Devices</div>
                        <div class="pricing-square-item">Up to 50 Assets</div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-bulk-discount">
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
                            <button id="Pricing_Edge_PayAsYouGo_Micro" class="btn-blue btn-pricing gtm_button"
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                '6e6c58c0-fe4e-11ea-951e-b77b877a367b',
                                'Edge Micro', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">Up to 100 Devices</div>
                        <div class="pricing-square-item">Up to 100 Assets</div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-bulk-discount">
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
                            <button id="Pricing_Edge_PayAsYouGo_Macro" class="btn-blue btn-pricing gtm_button"
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                'a0e02610-fe4e-11ea-951e-b77b877a367b',
                                'Edge Macro', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">Up to 200 Devices</div>
                        <div class="pricing-square-item">Up to 200 Assets</div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-bulk-discount">
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
                            <button id="Pricing_Edge_PayAsYouGo_Mega" class="btn-blue btn-pricing gtm_button"
                                onClick="getLicense(event,
                                false,
                                'd3b7d030-fe4c-11ea-951e-b77b877a367b',
                                '639fc7f0-da99-11ec-b9ac-0736fadd7ddd',
                                'Edge Mega', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-limits">
                            Unlimited Devices and Assets
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-optional-support">
                            Optional support
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-pay-as-you-go-bulk-discount">
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
                            $499
                        </h4>
                        <div class="row justify-content-center">
                            <button id="Pricing_Edge_Perpetual_EdgePerpetualFallbackLicense" class="btn-blue btn-pricing gtm_button" 
                                onClick="getLicense(event,
                                true,
                                'fc5e64e0-841f-11ec-b9ac-0736fadd7ddd',
                                '817e22f0-8420-11ec-b9ac-0736fadd7ddd',
                                'Perpetual', null, false)">
                                Get your license
                            </button>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-perpetual-compatibility"><b>Compatible with TB PE Server</b></div>
                        <div class="pricing-square-item">1 year of software updates</div>
                        <div class="pricing-square-item" data-faq-id="edge-perpetual-unlimited">
                             Unlimited Devices and Assets
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-perpetual-maintenance">
                            Custom <b>SLA</b>
                        </div>
                        <div class="pricing-square-item" data-faq-id="edge-perpetual-support-level">
                            Support within <b>24 hours</b>
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
    <h2 id="faq-header">Frequently asked questions</h2>
    <div id="FAQ">
        <section class="community-edition" id="faq-thingsboard-ce">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="installationAndDeployment" onClick="switchFaqSection('installationAndDeployment', this)">Installation & Deployment</div>
                <div class="faq-section-option" id="featuresAndLimitations" onClick="switchFaqSection('featuresAndLimitations', this)">Features & Limitations</div>
                <div class="faq-section-option" id="supportAndCommunityAssistance" onClick="switchFaqSection('supportAndCommunityAssistance', this)">Support & Community Assistance</div>
                <div class="faq-section-option" id="upgradingToEnterpriseEdition" onClick="switchFaqSection('upgradingToEnterpriseEdition', this)">Upgrading to Enterprise Edition</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
            </div>
            <div class="answers">
                <div id="faq-thingsboard-ce-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="what-is-tb-ce" data-title="What is ThingsBoard Community Edition?">
                        <div class="container">
                            <p>ThingsBoard Community Edition (CE) is the free and open-source version of the ThingsBoard - IoT platform for data collection, processing, visualization, and device management. ThingsBoard CE is available under the Apache 2.0 license.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="is-ce-free" data-title="Is the Community Edition free to use?">
                        <div class="container">
                            <p>Yes, it is completely free, with no licensing fees or hidden costs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="is-ce-free" data-title="Can I use ThingsBoard Community Edition for commercial projects?">
                        <div class="container">
                            <p>Yes, ThingsBoard Community Edition can be used for commercial purposes. You can develop and deploy IoT solutions based on the Community Edition as part of your business operations. It is distributed under the Apache 2.0 license, which allows commercial use without the license or royalty fees.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-pe-difference" data-title="How does the Community Edition differ from Professional Edition?">
                        <div class="container">
                            <p>Community Edition includes essential features for IoT device management, data collection, visualization, and rule processing. The Professional Edition offers advanced features such as white-labeling, RBAC, integrations, etc. You can find a more detailed comparison <a href="https://thingsboard.io/products/thingsboard-pe/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-connect-devices-limit" data-title="Is there a limit on the number of devices I can connect?">
                        <div class="container">
                            <p>No, there are no programatic limits, but performance depends on your server(s) capacity.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="possible-migrate-ce-to-pe-sm" data-title="Is it possible to migrate from the Community Edition to the self-managed ThingsBoard Professional Edition?">
                        <div class="container">
                            <p>Yes, you can upgrade from ThingsBoard Community Edition to Professional Edition without losing telemetry data and/or configurations. The upgrade process preserves your existing setup, ensuring a seamless transition. However, <b>please note</b> that any custom modifications made directly to the source code of the Community Edition will be removed during the upgrade process. For more information about the migration procedure, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="possible-migrate-ce-to-cloud" data-title="Is it possible to migrate from the Community Edition to the ThingsBoard Cloud?">
                        <div class="container">
                            <p>Yes, migration from the Community Edition to ThingsBoard Cloud is possible but is not 100% automatic. We recommend to use <a href="https://thingsboard.io/docs/user-guide/version-control/#usage">version control</a> feature to migrate all entities. Then you may transfer telemetry data using the <a href="https://thingsboard.io/docs/reference/rest-api/">REST API</a>. For more information about the migration procedure, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-clustering" data-title="Does the Community Edition support clustering?">
                        <div class="container">
                            <p>Yes, clustering is fully supported in the Community Edition. You can find more details about deployment scenarios <a href="https://thingsboard.io/docs/reference/iot-platform-deployment-scenarios/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-customize" data-title="Can I customize and modify the Community Edition?">
                        <div class="container">
                            <p>Yes, the source code is available on <a href="https://github.com/thingsboard/thingsboard">GitHub</a>, and you can fork and modify it according to your requirements. By the way, please consider starring our repository★</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-internet-connection" data-title="Do I need an internet connection to use the Community Edition?">
                        <div class="container">
                            <p>No, you can run it completely offline if needed.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-ce-installationAndDeployment" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="how-to-install-ce" data-title="How do I install ThingsBoard Community Edition?">
                        <div class="container">
                            <p>Installation guides are available in the <a href="https://thingsboard.io/docs/user-guide/install/installation-options/?ceInstallType=onPremise">documentation</a>. The Community Edition can be installed in monolith or microservice cluster mode, and supports deployment on Docker, Kubernetes, or directly on Linux/Windows OS.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="where-to-install-ce" data-title="Where can I install the Community Edition?">
                        <div class="container">
                            <p>You can install the Community Edition on your virtual machine, local servers, or any cloud provider infrastructure of your choice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-database-support" data-title="What databases does the Community Edition support?">
                        <div class="container">
                            <p>The Community Edition supports pure SQL or a hybrid SQL + NoSQL (for telemetry storage) . For more details on database options, you can check <a href="https://thingsboard.io/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="official-docker-ce" data-title="Is there an official Docker image for Community Edition?">
                        <div class="container">
                            <p>Yes, official Docker images are available on Docker Hub.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-on-raspberry-edge" data-title="Can I run the Community Edition on Raspberry Pi or other edge devices?">
                        <div class="container">
                            <p>Yes, but performance may be limited due to hardware constraints. You can check details <a href="https://thingsboard.io/docs/user-guide/install/installation-options/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-multi-tenancy" data-title="Does the Community Edition support multi-tenancy?">
                        <div class="container">
                            <p>Yes, the ThingsBoard Community Edition supports <a href="https://thingsboard.io/docs/user-guide/ui/tenants/">multi-tenancy</a> out of the box.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-scale-deployment" data-title="How can I scale a Community Edition deployment?">
                        <div class="container">
                            <p>You can scale the Community Edition horizontally by using a <a href="https://thingsboard.io/docs/reference/msa/">microservice</a> deployment.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-ce-featuresAndLimitations" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="ce-features" data-title="What features are included in ThingsBoard Community Edition?">
                        <div class="container">
                            <p>
                                The Community Edition includes device and asset management, data visualization, rule engine automation, and API integrations. You can find all features and descriptions <a href="https://thingsboard.io/docs/">here</a>. 
                            </p>    
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-exclusive-features" data-title="What features are exclusive to the Professional Edition?">
                        <div class="container">
                            <p>The Professional Edition offers advanced features such as white-labeling, RBAC, advanced rule engine capabilities, platform integrations, etc. You can find a more detailed comparison <a href="https://thingsboard.io/products/thingsboard-pe/">here</a>.</p>    
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-white-labeling-support" data-title="Does the Community Edition support white-labeling?">
                        <div class="container">
                            <p>No, white-labeling is available only in the Professional Edition.</p>    
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-other-build-in-security-features" data-title="Are there any built-in security features?">
                        <div class="container">
                            <p>Yes, the Community Edition supports secure <a href="https://thingsboard.io/docs/user-guide/device-credentials/">device connectivity</a> options, <a href="https://thingsboard.io/docs/user-guide/oauth-2-support/">OAuth</a> configuration, and <a href="https://thingsboard.io/docs/domains/">domain management</a>.</p>    
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-third-party-systems" data-title="Can I integrate third-party systems with Community Edition?">
                        <div class="container">
                            <p>Yes, you can integrate the ThingsBoard Community Edition with third-party systems through REST APIs or Rule Engine. Please note that the Professional Edition of the platform provides more integration option via <a href="https://thingsboard.io/docs/user-guide/integrations/">platform integrations</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-automate-device-management-telemetry-processing" data-title="Can I automate device management and telemetry processing?">
                        <div class="container">
                            <p>Yes, using the rule engine, which allows event-based processing and alerts.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-ota-support" data-title="Does Community Edition support OTA (Over-the-Air) firmware updates?">
                        <div class="container">
                            <p>Yes, the Community Edition supports <a href="https://thingsboard.io/docs/user-guide/ota-updates/">OTA</a> (Over-the-Air) firmware updates.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-mobile-app" data-title="Is there a mobile app for Community Edition?">
                        <div class="container">
                            <p>Yes, there is an <a href="https://thingsboard.io/products/mobile/">mobile app</a> for the Community Edition, based on the Flutter SDK. It is free of charge and open-source under Apache 2.0 license.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-ai-ml-integrations" data-title="Does Community Edition support AI or machine learning integrations?">
                        <div class="container">
                            <p>Not natively, but you can use it with <a href="https://thingsboard.io/products/trendz/">Trendz Analytics</a> or integrate external AI/ML services via APIs or use </p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-ce-supportAndCommunityAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="ce-out-of-box-support" data-title="Is there out-of-the-box support from ThingsBoard team for Community Edition users?">
                        <div class="container">
                            <p>The ThingsBoard team does not provide dedicated support for Community Edition users. However, users can access community-driven resources such as forums, documentation, and GitHub for assistance.</p>  
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-purchase-additional-support" data-title="Can I purchase additional support for the Community Edition?">
                        <div class="container">
                            <p>Depending on the type of support you are looking for, the ThingsBoard team may be able to offer certain types of additional support packages. To discuss your unique case and requirements, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>  
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-help-issue" data-title="Where can I get help if I run into issues?">
                        <div class="container">
                            <p><a href="https://github.com/thingsboard/">GitHub</a> (report issues, contribute)</p>
                            <p><a href="https://stackoverflow.com/questions/tagged/thingsboard">Stack Overflow</a> (for developer-related questions)</p>
                            <p><a href="https://thingsboard.io/docs/">Documentation & Tutorials</a></p>
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-request-custom-feature" data-title="Can I request custom features or improvements?">
                        <div class="container">
                            <p>Yes, you are welcome to submit feature requests on GitHub. After the product team reviews them, they may be added to the backlog.</p>
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-pay-for-development" data-title="Can I pay for additional features to be developed?">
                        <div class="container">
                            <p>The ThingsBoard team can propose application configuration services. To discuss your unique case and requirements, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-soft-updates" data-title="Are software updates available for Community Edition?">
                        <div class="container">
                            <p>Yes, updates for all <a href="https://thingsboard.io/docs/reference/releases/">versions</a> are available.</p>
                        </div>    
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-tb-developers-paid-service" data-title="Can I get ThingsBoard developers to help with my Community Edition deployment?">
                        <div class="container">
                            <p>Yes, you can request such assistance as an additional paid service. Please, <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss how we can help.</p>
                        </div>    
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-bug-found" data-title="What should I do if I find a bug in Community Edition?">
                        <div class="container">
                            <p>You can report it on <a href="https://github.com/thingsboard/">GitHub</a>, and the open-source community may help fix it.</p>
                        </div>    
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-bug-found" data-title="Can I contribute to the development of ThingsBoard Community Edition?">
                        <div class="container">
                            <p>Yes! Pull requests and contributions are welcome on <a href="https://github.com/thingsboard/">GitHub</a>.</p>
                        </div>    
                    </div>
                </div>
                <div id="faq-thingsboard-ce-upgradingToEnterpriseEdition" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="upgrade-ce-to-pe" data-title="Can I upgrade from Community Edition to the Professional Edition?">
                        <div class="container">
                            <p>Yes, you can migrate your data and configuration to an Professional Edition at any time.</p>  
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="upgrade-ce-to-pe-benefits" data-title="What are the benefits of upgrading to the Professional Edition?">
                        <div class="container">
                            <ul>
                                <li>White-labeling for branding</li>
                                <li>RBAC for application business security strategy</li>
                                <li>Advanced integrations capabilities</li>
                                <li>Grouping functionality</li>
                                <li>Reporting, etc.</li>
                            </ul>
                            <p>ThingsBoard Professional Edition is designed for production and enterprise IoT solutions, offering comprehensive features to meet all your potential needs with the flexibility to deliver tailored solutions without any blockers.</p>
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="migrate-pe-to-enterprise" data-title="How do I migrate from Professional Edition to Enterprise?">
                        <div class="container">
                            <p>Migration depends on factors such as whether you are migrating to a self-managed system or ThingsBoard Cloud, the version, source code changes, and more. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for personalized suggestions and a clear strategy on how to perform the migration.</p>
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="enterprise-trial" data-title="Can I get a trial of the Enterprise Edition before upgrading?">
                        <div class="container">
                            <p>Yes, we offer a one-month trial on ThingsBoard Cloud for users considering an upgrade. If you would like to try the system in self-managed mode, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>  
                        </div>    
                    </div>
                </div>
                <div id="faq-thingsboard-ce-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="ce-is-instance-secure" data-title="Is my ThingsBoard instance secure?">
                        <div class="container">
                            <p>Yes, but security depends on your deployment setup and infrastructure.</p>  
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-encryption" data-title="Does Community Edition include encryption?">
                        <div class="container">
                            <p>Yes, the Community Edition includes transport encryption, as well as SSO (Single Sign-On) and OAuth functionality.</p>  
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-store-data-region" data-title="Can I store ThingsBoard data in my preferred region?">
                        <div class="container">
                            <p>Yes, you have full control over where your data is stored.</p>  
                        </div>    
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-industry-standarts" data-title="Does ThingsBoard Community Edition comply with industry standards (GDPR, ISO, etc.)?">
                        <div class="container">
                            <p>Compliance depends on your hosting environment and data security practices.</p>  
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        <section class="professional-edition-cloud active" id="faq-thingsboard-cloud">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageAndLimits" onClick="switchFaqSection('usageAndLimits', this)">Usage & Limits</div>
                <div class="faq-section-option" id="enterpriseSubscription" onClick="switchFaqSection('enterpriseSubscription', this)">Enterprise subscription</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-thingsboard-cloud-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-definition" data-title="What is ThingsBoard Cloud?">
                        <div class="container">
                            <p>ThingsBoard Cloud is a fully managed, scalable, and fault-tolerant platform for your IoT applications.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-pricing-plans" data-title="What pricing plans does ThingsBoard Cloud offer?">
                        <div class="container">
                            <p>ThingsBoard Cloud offers flexible monthly subscription plans, with tiers based on the number of devices and the volume of messages they generate. We support 4 predefined plans to cater to different needs. The beginner plan includes support for up to 30 devices and 10 million data points. For more details, visit the ThingsBoard Cloud <a href="https://thingsboard.io/pricing/?product=thingsboard-cloud">pricing</a> page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-pricing-structure" data-title="How is ThingsBoard Cloud pricing structured?">
                        <div class="container">
                            <p>Pricing is based on the number of connected devices and the volume of messages they generate, with a fixed monthly fee per plan. Learn more about the subscription plans <a href="https://thingsboard.io/docs/paas/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-no-enterprise-pricing-listed" data-title="Why is there no listed price for the Enterprise subscription?">
                        <div class="container">
                            <p>The Enterprise subscription is a fully managed cloud solution with a dedicated environment established for each customer upon request. Pricing is customized based on the specific infrastructure, resources, and service requirements of the customer. Please contact us to discuss your needs and receive a tailored quote. For more details please, <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-api-rate-limits" data-title="Are there any API or rate limits?">
                        <div class="container">
                            <p>Yes, each plan has specific API and rate limits. You can review the detailed limits for each plan <a href="https://thingsboard.io/docs/paas/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-free-trial" data-title="Do you offer a free trial?">
                        <div class="container">
                            <p>Yes, we offer a free 30-day trial to let you explore ThingsBoard Cloud before committing to a paid plan.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-what-included-in-free-trial" data-title="What is included in the free trial?">
                        <div class="container">
                            <p>The free trial includes access to all core features with limited usage of devices, messages, and storage.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-upgrade-downgrade-plan" data-title="Can I upgrade or downgrade my plan at any time?">
                        <div class="container">
                            <p>Yes, you can change your plan at any time, and billing will be adjusted accordingly.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-vs-on-premise-pricing" data-title="How does ThingsBoard Cloud pricing compare to the on-premise version?">
                        <div class="container">
                            <p>ThingsBoard Cloud eliminates infrastructure management costs, offering a predictable monthly fee, whereas the on-premise version requires separate hosting infrastructure and maintenance efforts.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-vs-sm-subscription" data-title="What the difference between ThingsBoard Cloud and self-managed subscriptions?">
                        <div class="container">
                            <p>Self-managed subscription plans include only the license fees and do not provide hosting services. This means you need to deploy ThingsBoard on an external cloud platform (AWS, Azure, GCP, etc.) or a local server (on-premise). Additionally, you are responsible for managing the infrastructure and maintaining the ThingsBoard PE server. <br><br></p>
                            <p>On the other hand, ThingsBoard Cloud offers the ThingsBoard Professional Edition as a fully managed service, hosted on ThingsBoard's infrastructure. This eliminates the need for separate infrastructure costs and maintenance efforts.<br><br></p>
                            <p>For example, the self-managed Prototype subscription costs $99, whereas the ThingsBoard Cloud Prototype subscription is priced at $149. The price difference is due to the hosting fee included in the Cloud subscription.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-additional-costs" data-title="Are there any additional costs beyond the subscription fee?">
                        <div class="container">
                            <p>No, all standard features are included in the subscription. However, additional services such as application configuration, integrations, or consulting may incur extra costs.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-exceed-plan-limits" data-title="What happens if I exceed my plan’s limits?">
                        <div class="container">
                            <p>If you exceed your limits, you may need to upgrade to a higher plan or reduce your usage.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-custom-plan" data-title="Can I create a custom plan with the ability to choose limits for devices, assets, users, etc.?">
                        <div class="container">
                            <p>ThingsBoard Cloud does not offer fully customizable plans with user-defined limits. However, the Enterprise subscription provides a dedicated environment with no device number or data point limits. If you require a customized solution, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss available options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-short-term-project" data-title="Can I purchase ThingsBoard Cloud for a short-term project?">
                        <div class="container">
                            <p>Yes, you can subscribe for a single month and cancel anytime.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-how-cancel-supscription" data-title="How to cancel my subscription?">
                        <div class="container">
                            <p>Kindly refer to the guide <a href="https://thingsboard.io/docs/paas/eu/subscription/#how-to-cancel-my-subscription">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="migrate-cloud-to-sm" data-title="How to migrate from the Cloud to a self-managed platform instance?">
                        <div class="container">
                            <p>We recommend using the <a href="https://thingsboard.io/docs/user-guide/version-control/">Version control</a> feature to migrate your configurations. Telemetry data export can be achieved via REST API. Please, <a href="https://thingsboard.io/docs/contact-us/">contact us</a> in case migration assistence needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-us-to-eu" data-title="I need to move from US cloud to EU. How to achieve that?">
                        <div class="container">
                            <p>Technically, you have to follow the same flow as for How to migrate from the Cloud to a self-service platform copy. Please, <a href="https://thingsboard.io/docs/contact-us/">contact us</a> in case migration assistence needed.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="how-tb-cloud-billing-works" data-title="How does billing work for ThingsBoard Cloud?">
                        <div class="container">
                            <p>Billing is handled via Stripe and is charged monthly based on your selected plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-use-wire-instead-of-card" data-title="I cannot pay by card, may we use wire instead?">
                        <div class="container">
                            <p>Sure. In this case, you must reach out to our sales team via <a href="https://thingsboard.io/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-pay-monthly-or-annually" data-title="Can I pay monthly or annually?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a href="https://thingsboard.io/docs/contact-us/">contact</a> our team to arrange a wire transfer invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-volueme-discounts" data-title="Do you offer volume discounts for large deployments?">
                        <div class="container">
                            <p>We offer Enterprise plan for large-scale deployments; <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-billing-history-invoices" data-title="How do I view my billing history and invoices?">
                        <div class="container">
                            <p>You can access invoices and payment history via your ThingsBoard Cloud account dashboard.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-payment-fails" data-title="What happens if my payment fails?">
                        <div class="container">
                            <p>If a payment fails, Stripe will retry the charge. If unresolved, your account may be suspended until payment is completed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-hidden-fees" data-title="Are there any hidden fees?">
                        <div class="container">
                            <p>No, there are no hidden fees—pricing is transparent and includes all standard features.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-charge-for-data-transfer-api-calls-msg-processing" data-title="Do you charge for data transfer, API calls, or message processing?">
                        <div class="container">
                            <p>Each plan includes predefined usage limits; exceeding those may require an upgrade. API and Rate limits detals <a href="https://thingsboard.io/docs/paas/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-custom-plan" data-title="Can I create a custom plan with the ability to choose limits for devices, assets, users, etc.?">
                        <div class="container">
                            <p>ThingsBoard Cloud does not offer fully customizable plans with user-defined limits. However, the Enterprise subscription provides a dedicated environment with no device number or data point limits. If you require a customized solution, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss available options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-refund" data-title="Can I get a refund if I cancel my subscription?">
                        <div class="container">
                            <p>ThingsBoard Cloud does not offer refunds for unused time if you cancel before the billing cycle ends.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-refund" data-title="How does proration work when upgrading or downgrading my plan?">
                        <div class="container">
                            <p>When you change plans, Stripe automatically calculates the prorated charge based on your usage.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-how-to-bill-my-customers" data-title="How to bill my customers on Cloud?">
                        <div class="container">
                            <p>Currently, ThingsBoard Cloud does not provide a built-in billing module to charge end customers. However, you can create custom dashboards with backend integration between ThingsBoard and the payment system of your choice to set up billing for your application. If you would like our assistance with setting up billing, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>, and we’ll be happy to propose such a configuration as an additional service.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-usageAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-title="What are the device, message, and data storage limits for each plan?">
                        <div class="container">
                            <p>Limits vary by plan; details can be found on our plans definition <a href="https://thingsboard.io/docs/paas/subscription/">page</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-device-usage-calculation" data-title="How is device usage calculated?">
                        <div class="container">
                            <p>Device usage is determined by the number of device entities created within your account.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-charge-for-inactive-devices" data-title="Do you charge for inactive devices?">
                        <div class="container">
                            <p>Yes, ThingsBoard Cloud charges for all created device entities, whether active or inactive, since telemetry and attribute data for inactive devices are also stored.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-handle-overages" data-title="How does ThingsBoard Cloud handle overages?">
                        <div class="container">
                            <p>If you exceed your limits, you may need to upgrade to a higher plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-increase-resource-limits" data-title="Can I increase my resource limits if needed?">
                        <div class="container">
                            <p>Yes, you can upgrade your plan at any time to increase limits.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-white-labeling" data-title="Is white labeling available out of the box?">
                        <div class="container">
                            <p>White labeling functionality is available starting from the Prototype subscription.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-migration-to-sm-support" data-title="What support options are available for migrating to a self-managed system instead of switching to the Enterprise plan?">
                        <div class="container">
                            <p>You can perform the migration on your own using the Version Control feature to transfer your configurations. Telemetry data can be exported via the REST API. Alternatively, the ThingsBoard team can provide additional migration assistance. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-telemetry-storage-billing" data-title="How is telemetry data storage billed?">
                        <div class="container">
                            <p>Storage is included in your plan, but exceeding limits may require an upgrade of subscription. Limits vary by plan. See details <a href="https://thingsboard.io/docs/paas/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-dashboard-costs" data-title="Are there additional costs for dashboards and visualization?">
                        <div class="container">
                            <p>No, dashboards are included in all plans.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-api-charges" data-title="Do you charge for API requests?">
                        <div class="container">
                            <p>API usage is included in your plan, but rate limits apply based on your selected tier.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-api-limits-exceed" data-title="What happens if I exceed my plan's API limits?">
                        <div class="container">
                            <p>API access may be throttled until the next billing cycle, or you can upgrade to a higher plan.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-users-limits-per-acc" data-title="Is there a limit on the number of users per account?">
                        <div class="container">
                            <p>Each plan has a predefined number of users. Limits vary by plan; details can be found on our plans definition <a href="https://thingsboard.io/docs/paas/subscription/">page</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-domain-certificate" data-title="Where can I put a domain certificate?">
                        <div class="container">
                            <p>ThingsBoard automatically provisions certificates for your domain name using Let's Encrypt. Refer to the guide <a href="https://thingsboard.io/docs/paas/domains/">here</a>. Custom certificate provisioning is available exclusively for Enterprise Cloud subscribers upon request.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-tenant-uptime-tracking" data-title="How can I track the uptime of my tenant?">
    <div class="container">
        <p>The status page is in progress. While we continuously monitor system performance and strive to maintain SLA, our team remains dedicated to delivering high availability and reliability. Updates regarding service status will be available as we develop the status page further.</p>
    </div>
</div>
                </div>
                <div id="faq-thingsboard-cloud-enterpriseSubscription" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-fixed-vs-enterprise-subscription" data-title="How do fixed-cost ThingsBoard Cloud subscriptions compare to the Enterprise subscription?">
                        <div class="container">
                            <p>The ThingsBoard Enterprise cloud subscription is a fully managed solution deployed upon customer request in a dedicated environment within a region of the customer’s choice. While other subscription plans offer shared infrastructure designed for simplicity and cost efficiency, the Enterprise plan provides a fully separate environment tailored to individual customer needs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-enterprise-pricing-calculation" data-title="How is the Enterprise plan price calculated?">
                        <div class="container">
                            <p>The ThingsBoard Enterprise plan price is based on resource usage, with a minimum starting fee and additional costs for extra resources. To receive a detailed price calculation, please contact our sales team by filling out the <a href="https://thingsboard.io/docs/contact-us/">contact us</a> form on our website.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-enterprise-support-options" data-title="What support options are included in the enterprise plan?">
                        <div class="container">
                            <p>Enterprise plans include priority support and dedicated account management.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-enterprise-sla" data-title="Is there a Service Level Agreement (SLA) for enterprise customers?">
                        <div class="container">
                            <p>Yes, enterprise customers receive an SLA with uptime and response time guarantees.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-private-cloud-hosting" data-title="Can I host ThingsBoard Cloud on my private cloud infrastructure?">
                        <div class="container">
                            <p>No, but you can use our on-premise version for private hosting.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-professional-services-large-deployments" data-title="Do you provide professional services for large-scale deployments?">
                        <div class="container">
                            <p>Yes, we offer a range of services including managed services, consulting, application design, and development/configuration services. For more detail please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-data-security" data-title="How is my data secured in ThingsBoard Cloud?">
                        <div class="container">
                            <p>We use encryption, access controls, and best security practices to protect your data.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-iso-compliance" data-title="Are you ISO compliant?">
                        <div class="container">
                            <p>The ThingsBoard Cloud is hosted in an IaaS asset compliant with multiple standards, including SOC II, and ISO 27001.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-data-storage-region" data-title="Where is my data stored, and can I choose the region?">
                        <div class="container">
                            <p>Your data is stored in either North America or the EU, depending on the cloud region (US or European) you choose. With the Enterprise subscription, you can choose any region or specific country for data storage.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-compliance-costs" data-title="Are there additional costs for compliance-related features?">
                        <div class="container">
                            <p>No, security and compliance features are included in all plans.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-multi-tenancy" data-title="Do you support multi-tenancy in ThingsBoard Cloud?">
                        <div class="container">
                            <p>Yes, ThingsBoard Cloud supports multi-tenancy, with each tenant requiring its own subscription. Within a tenant, a customer hierarchy can be established, allowing tenant administrators to manage multiple customers under a single subscription. This structure provides sufficient flexibility and access control for most use cases, ensuring a well-organized and efficient management model. ThingsBoard Enterprise subscription offers multi-tenancy within a single plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-data-export" data-title="Can I export my data at any time?">
                        <div class="container">
                            <p>Yes, you can export data via APIs or the ThingsBoard dashboard.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-data-retention" data-title="What happens to my data if I cancel my subscription?">
                        <div class="container">
                            <p>Your data will be retained for a short period before being permanently deleted.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-free-trial-start" data-title="How do I start a free trial?">
                        <div class="container">
                            <p>Simply sign up on our website—no credit card required (<a href="https://thingsboard.cloud/signup">North America</a> or <a href="https://eu.thingsboard.cloud/signup">EU</a>).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-free-trial-end" data-title="What happens when my free trial ends?">
                        <div class="container">
                            <p>Once your free trial ends, you will need to add billing details so the system can automatically charge you for the new monthly renewal period after the initial free month expires.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-trial-to-paid" data-title="Can I switch from a free trial to a paid plan without losing my data?">
                        <div class="container">
                            <p>Yes, all your data and configurations remain intact when upgrading.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-subscription-cancel" data-title="How to cancel my subscription?">
                        <div class="container">
                            <p>Kindly refer to the guide <a href="https://thingsboard.io/docs/paas/eu/subscription/#how-to-cancel-my-subscription">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-subscription-cancel-impact" data-title="What happens if I cancel my subscription before the billing period ends?">
                        <div class="container">
                            <p>Canceling your subscription before the end of the billing cycle will result in the loss of funds allocated for the unused period.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-refunds" data-title="Do you offer refunds for unused subscription time?">
                        <div class="container">
                            <p>No, refunds are not provided for mid-cycle cancellations.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-included" data-title="What support is included in my plan?">
                        <div class="container">
                            <p>The Maker and Prototype subscriptions include Community-level support. Starting from the Startup subscription, customers gain access to the ThingsBoard Support Portal for direct communication with the support team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-24-7" data-title="Do you offer 24/7 customer support?">
                        <div class="container">
                            <p>Yes, we do provide 24/7 support. If this is what you're looking for, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for a more detailed discussion about your specific needs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-billing" data-title="How can I contact ThingsBoard support for billing-related issues?">
                        <div class="container">
                            <p>You can use the <a href="https://thingsboard.io/docs/contact-us/">contact us</a> form and select the "Other" topic. Our account managers will assist you with any billing-related issues.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-knowledge-base" data-title="Is there a knowledge base or self-service support portal?">
                        <div class="container">
                            <p>All of our <a href="https://thingsboard.io/docs/paas/">documentation</a> is available on our website, with no hidden information. Additionally, you can use our Github issues for community support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-priority-support" data-title="Can I get priority support with my plan?">
                        <div class="container">
                            <p>Priority support is available for Enterprise subscription users based on the Service Level Agreement (SLA). Alternatively, you can purchase additional support based on your specific requirements and needs. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for a more detailed discussion.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-response-times" data-title="What response times can I expect for support tickets?">
                        <div class="container">
                            <p>Response times vary by plan; enterprise subscription customers receive better SLAs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="professional-edition-self-managed-pay-as-you-go" id="faq-pe-pay-as-you-go">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageDeploymentsAndLimits" onClick="switchFaqSection('usageDeploymentsAndLimits', this)">Usage, Deployments & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-pe-pay-as-you-go-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-definition" data-title="What is a self-managed subscription?">
                        <div class="container">
                            <p>A self-managed subscription allows you to host and manage ThingsBoard on your own infrastructure, either on-premises or in the cloud. You are responsible for the installation, configuration, and ongoing management of the system, while ThingsBoard provides the software and necessary documentation to support the process.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-purchase" data-title="How can I buy a self-managed subscription?">
                        <div class="container">
                            <p>To purchase a self-managed subscription, you can acquire a license through your <a href="https://license.thingsboard.io/">License Server</a> account. Each license comes with a unique activation key, which allows you to deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-license" data-title="What does it mean to get the license?">
                        <div class="container">
                            <p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-subscription-plans" data-title="What self-managed subscription plans does ThingsBoard offer?">
                        <div class="container">
                            <p>ThingsBoard offers flexible monthly subscription plans, with tiers based on the number of devices and assets. We support 4 predefined plans to cater to different needs. The beginner plan includes support for up to 10 devices. For more details, visit the ThingsBoard <a href="https://thingsboard.io/pricing/?product=thingsboard-pe">pricing page</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-differences" data-title="How do the self-managed subscription plans differ?">
                        <div class="container">
                            <p>Plans differ based on the number of devices, support level, and white-labeling availability.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-contract" data-title="Is there a contract or commitment for the subscription?">
                        <div class="container">
                            <p>No, all subscriptions are month-to-month, and you can cancel anytime.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-hosting" data-title="Do I need to host ThingsBoard myself with a subscription license?">
                        <div class="container">
                            <p>Yes, you are responsible for deploying and managing ThingsBoard on your own infrastructure.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-upgrade" data-title="Can I upgrade or downgrade my subscription at any time?">
                        <div class="container">
                            <p>Yes, you can change plans anytime, and billing will be prorated accordingly.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-limits" data-title="What happens if I exceed the device or asset limits in my plan?">
                        <div class="container">
                            <p>If you exceed your plan's limits, you will need to upgrade to a higher-tier plan.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-cloud-to-self-managed" data-title="Can I migrate from a ThingsBoard Cloud subscription to a self-managed license?">
                        <div class="container">
                            <p>Please, <a href="https://thingsboard.io/docs/contact-us/">contact us</a> in case migration assistance is needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-features" data-title="Are all ThingsBoard features included in every plan?">
                        <div class="container">
                            <p>White-labeling is offered starting from the Prototype plan and above.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-license-multi-location" data-title="Can I use my license across multiple locations or instances?">
                        <div class="container">
                            <p>By default, each license includes a single platform instance, meaning you can install it on one server. A server can be a virtual machine, a running Docker container, or a single OS process. If you need to run the platform across multiple locations or instances in a cluster, you can purchase additional instances within your license to scale as needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-subscription-to-perpetual" data-title="Is it possible to jump from subscription to perpetual?">
                        <div class="container">
                            <p>Customer may cancel the subscription and purchase a perpetual license. The remaining costs from the terminated subscription plan (if any) will be deducted from the total cost for the perpetual license. The perpetual license is non-refundable. Once purchased, it cannot be canceled.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-license-migration" data-title="Can I migrate from one server or Virtual machine to another using the same license?">
                        <div class="container">
                            <p>Yes! You can migrate your license by activating or deactivating it on the License Server. To move to a new server, deactivate the current instance, install the software on the new server, and reuse your existing license key. Be sure to back up your data if you want to maintain the same environment. Note: The license system prevents running ThingsBoard Professional Edition on multiple servers at the same time unless you purchase additional instances.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-billing-process" data-title="How does billing work for self-managed subscriptions?">
                        <div class="container">
                            <p>Billing is handled via Stripe and is charged monthly based on your selected plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-wire-payment" data-title="I cannot pay by card, may we use wire instead?">
                        <div class="container">
                            <p>Sure. In this case, you must reach out to our sales team via <a href="https://thingsboard.io/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-annual-payment" data-title="Do you offer an annual payment option?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a href="https://thingsboard.io/docs/contact-us/">contact</a> our team to arrange a wire transfer invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-payment-failure" data-title="What happens if my payment fails?">
                        <div class="container">
                            <p>If a payment fails, Stripe will retry the charge several times. If unsuccessful, your license will be suspended.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-cancel-subscription" data-title="Can I cancel my subscription anytime?">
                        <div class="container">
                            <p>Yes, you can cancel your subscription anytime.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-refund-policy" data-title="Are refunds available if I cancel my subscription?">
                        <div class="container">
                            <p>No, we do not offer refunds for unused time. However, the funds for the remaining period will be saved on your account balance for future use.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-proration" data-title="Is there proration when upgrading or downgrading my plan?">
                        <div class="container">
                            <p>Yes, Stripe automatically prorates the charges when you change plans.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-multiple-licenses" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container">
                            <p>Contact our <a href="https://thingsboard.io/docs/contact-us/">sales team</a> for bulk pricing options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-subscription-expiry" data-title="What happens if I don’t renew my subscription?">
                        <div class="container">
                            <p>Your license will become inactive, and your ThingsBoard instance will be suspended.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-subscription-transfer" data-title="Can I transfer my subscription to another entity?">
                        <div class="container">
                            <p>No, subscriptions are non-transferable. However, you can add users to your License Server account, allowing others to help manage the license subscription.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-additional-fees" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container">
                            <p>No, we do not charge extra unless you want an additional service that we offer: professional support, custom development and consulting, training, or managed service.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-usageDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-device-asset-limits" data-title="What are the device and asset limits for each plan?">
                        <div class="container">
                            <p>Maker: Up to 10 devices and 10 assets<br>Prototype: Up to 100 devices and 100 assets<br>Startup: Up to 500 devices and 500 assets<br>Enterprise: Unlimited devices and assets</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-exceed-limits" data-title="What happens if I exceed my plan’s device or asset limit?">
                        <div class="container">
                            <p>You will need to upgrade to a higher-tier plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-multiple-servers" data-title="Can I use my license on multiple servers?">
                        <div class="container">
                            <p>By default, each license includes a single platform instance, meaning you can install it on one server. A server can be a virtual machine, a running Docker container, or a single OS process. If you need to run the platform across multiple locations or instances in a cluster, you can purchase additional instances within your license to scale as needed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-api-storage-fees" data-title="Does ThingsBoard charge for API calls or storage?">
                        <div class="container">
                            <p>No, but you may be charged by your cloud provider for resource usage.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-internet-requirement" data-title="Do I need an internet connection to use the self-managed license?">
                        <div class="container">
                            <p>Yes, an internet connection is required for periodic license verification. The system checks the license once per hour, and if the connection is not restored within 24 hours, the platform may shut down. This process ensures proper license management while allowing temporary connectivity issues. For more details, please refer to the license check <a href="https://thingsboard.io/products/license-server/#architecture">description</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-offline-access" data-title="Can I run offline?">
                        <div class="container">
                            <p>By default, the platform requires active Internet access or at least access to license portal from your host machine. If Offline access is a must, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss options.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-cloud-migration" data-title="Can I move my deployment between cloud providers?">
                        <div class="container">
                            <p>Yes, self-managed ThingsBoard is cloud-agnostic and can be migrated as needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-high-availability" data-title="Does ThingsBoard support high-availability (HA) setups?">
                        <div class="container">
                            <p>Yes, High Availability (HA) is supported and can be achieved through ThingsBoard services and database replication. Please note that each ThingsBoard replica will require a separate license.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-backup" data-title="Can I back up my ThingsBoard instance?">
                        <div class="container">
                            <p>Yes, backups depend on your database and storage setup.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-telemetry-storage" data-title="How is telemetry data stored in self-managed ThingsBoard?">
                        <div class="container">
                            <p>ThingsBoard supports PostgreSQL or PostgreSQL + Cassandra (Hybrid mode) for telemetry storage. For more details on database options, you can check <a href="https://thingsboard.io/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-multi-tenancy" data-title="Does ThingsBoard support multi-tenancy?">
                        <div class="container">
                            <p>Yes, multi-tenancy is supported out of the box.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-customer-billing" data-title="How to charge my customers?">
                        <div class="container">
                            <p>So far, the ThingsBoard platform does not provide a billing module to charge end customers. At the same time, the platform exposes the <a href="https://thingsboard.cloud/swagger-ui/#/usage-info-controller">Usage API</a> that can be used by the external payment software to generate invoices.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-security" data-title="Is my ThingsBoard instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but ThingsBoard provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-data-storage" data-title="Where is my ThingsBoard data stored?">
                        <div class="container">
                            <p>Your data is stored on your own infrastructure, whether on-premise or in the cloud.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-region-storage" data-title="Can I store ThingsBoard data in my preferred region?">
                        <div class="container">
                            <p>Yes, you have full control over data storage location.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-data-export" data-title="Can I export my data at any time?">
                        <div class="container">
                            <p>Yes, you can export your data using the ThingsBoard dashboard, APIs, or by creating a full database backup.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-pentest" data-title="Do you provide pentest results?">
                        <div class="container">
                            <p>No, we do not do it for many reasons. Firstly, as a platform vendor, we cannot disclose detected vulnerabilities of certain versions of the platform as the disclosure affects the safety of our existing customers who use that particular version. Secondly, the self-declared pentest is less trustworthy as it is in the vendor’s interest to come up with clean results and you never know whether to believe them or not. Lastly, the penetration test makes more sense to be conducted over a ready-to-use end client software/application to define weak spots (if any). It is the Licensee’s responsibility to order independent testing. Having said that, the ThingsBoard platform gives one a tool to develop solutions. You may consider the platform a building that a banker rents to establish an office, vault, etc. Now you can see that testing a building itself does not make much sense. But things change when it hosts a bank (or whatever tenant).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-vulnerability-fixes" data-title="Where can I find the logged vulnerability fixes matrix: version + list of fixes?">
                        <div class="container">
                            <p>Please stay tuned with our <a href="https://thingsboard.io/docs/pe/reference/releases/">Release notes</a>. Critical vulnerabilities or security issues are mentioned in separate line items. Less threatful vulnerabilities appear as a single record (“Vulnerability fixes”) stating that, at the release date, the version is free of known HIGH and some MEDIUM CVEs.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-try-license" data-title="Can I try a self-managed license before subscribing?">
                        <div class="container">
                            <p>Yes, the Maker plan ($10/month) is a low-cost way to explore the platform.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-cancel-subscription" data-title="What happens if I cancel my subscription?">
                        <div class="container">
                            <p>Your license will become inactive, and your ThingsBoard instance will be stopped</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-switch-perpetual" data-title="Can I switch from a subscription license to a perpetual license?">
                        <div class="container">
                            <p>Customer may cancel the subscription and purchase a perpetual license. The remain costs from terminated subscription plan (if remain) will be deducted from Total cost for the perpetual license. The perpetual license is non-refundable. Once purchased, it cannot be canceled.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-refunds" data-title="Are refunds available for self-managed subscriptions?">
                        <div class="container">
                            <p>No, all sales are final.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-support-included" data-title="What support is included in my subscription?">
                        <div class="container">
                            <p>"Maker and Prototype: Community support<br>Startup: Support with 36-hour response time during regular working shifts via Support Portal<br>Enterprise: Support with 12-hour response time during regular working shifts via Support Portal"</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-24-7-support" data-title="Do you offer 24/7 support?">
                        <div class="container">
                            <p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-installation-help" data-title="How can I get help with installation and setup?">
                        <div class="container">
                            <p>If your subscription plan includes response time support and you have access to the Support Portal, the ThingsBoard support team can assist with system deployment as part of the subscription. However, this applies only if you follow recommended installation methods and architecture. Custom installation scripts or non-recommended deployment scenarios are not covered under included support. If your subscription plan does not include support, then we recommend using our documentation, tutorials, and optional professional services. To discuss options, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-contact-support" data-title="How do I contact support?">
                        <div class="container">
                            <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are automatically added to the ThingsBoard <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Support Portal</a> after purchasing a license.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-support-issues" data-title="What issues are included in subscription support?">
                        <div class="container">
                            <p>"Access to the ThingsBoard Support Portal is available for users with Startup and higher subscriptions, as well as perpetual license holders. Without the need for a separate support agreement, all support inquiries are seamlessly managed through a unified queue, ensuring efficient handling of your requests. Our support team is dedicated to providing an initial response within 24 hours to address your needs promptly.<br><br>The support service includes assistance with installation and migration for default deployments, as well as resolving any questions related to the platform's out-of-the-box functionalities, as detailed in our documentation. For specialized services such as consulting, code reviews, health assessments, or development projects, we offer tailored solutions to meet your specific requirements. Should your request involve additional expertise, our support engineers will guide you to the best resources to ensure your success."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="professional-edition-self-managed-perpetual" id="faq-pe-perpetual">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageDeploymentsAndLimits" onClick="switchFaqSection('usageDeploymentsAndLimits', this)">Usage, Deployments & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-pe-perpetual-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-perpetual-meaning" data-title="What does the Perpetual license mean?">
                        <div class="container">
                            <p>A Perpetual license allows you to use the software indefinitely with a one-time purchase. This grants you permanent access without the need for ongoing subscription fees.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-perpetual-vs-subscription" data-title="How does the perpetual license differ from a subscription license?">
                        <div class="container">
                            <p>A perpetual license grants you lifetime access to the platform with no programmatic limits on entities through a one-time payment. Subscription license offers flexible access based on your usage needs with regular, ongoing payments.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-perpetual-features" data-title="What features are included in the perpetual license?">
                        <div class="container">
                            <p>The perpetual license includes full access to ThingsBoard Professional Edition features, such as device management, data storage, rule engine, telemetry processing, and more. It also provides access to standard documentation, support, and updates for a specified period. Additional features or services, such as extended support or custom development, may be available for an extra fee.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-get-license" data-title="What does it mean to get the license?">
                        <div class="container">
                            <p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-perpetual-packages" data-title="What Perpetual License Packages do you offer?">
                        <div class="container">
                            <p>Perpetual, Perpetual Kit, Enterprise Bundle.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-prod-vs-dev" data-title="What is the difference between Production and Development instances?">
                        <div class="container">
                            <p>The Production instance is used for live environments with tested-in-advance applications. It can be branded (white-labelled), The development instance, meant for testing and staging, features a <b>DEVELOPMENT MODE</b> watermark in the UI.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-pachage-aim-for" data-title="What is the Perpetual package aim for?">
                        <div class="container">
                            <p>The Perpetual License Package includes a single license key (activation code) for one licensed deployment. This license allows the deployment of a single instance of ThingsBoard Professional Edition, whether as a standalone server, a Docker container, or another supported environment.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-kit-scope" data-title="What is within the scope of a Perpetual Kit package?">
                        <div class="container">
                            <p>The Perpetual Kit is a perpetual license package that includes two license keys (activation codes) in scope of a license. This package permits the deployment of one production instance and one development instance. No programmatic limits by entities for both servers.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-dev-instance" data-title="Can I purchase a Development Instance separately?">
                        <div class="container">
                            <p>Development instances can only be purchased separately by owners of Perpetual packages. To request an additional development instance, please contact the ThingsBoard sales team through the <a href="https://thingsboard.io/docs/contact-us/">Contact us</a> page.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-enterprise-bundle" data-title="What is within the scope of Enterprise Bundle?">
                        <div class="container">
                            <p>The ThingsBoard Enterprise Bundle includes:
                            <ul>
                                <li>2 ThingsBoard Perpetual Kits</li>
                                <li>Trendz production and development instances</li>
                                <li>3 Edge instances</li>
                                <li>Enhanced support response time</li>
                            </ul>
                            This bundle provides the most cost-effective solution for enterprise deployments, as purchasing these products separately would cost 27,000 USD. By choosing the Enterprise Bundle, you can maximize value while meeting your deployment needs.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-perpetual-servers" data-title="How many servers can I have with the Perpetual license?">
                        <div class="container">
                            <ul>
                                <li>Perpetual License – Allows one active instance at a time.</li>
                                <li>Perpetual Kit – Allows two active instances at a time (one production and one development).</li>
                            </ul>
                            <p>If you need to scale beyond a standalone deployment, you can purchase additional instances within the scope of your existing license to convert your deployment into a ThingsBoard cluster. This enables horizontal scaling while maintaining compliance with the licensing terms. For more details, please contact the ThingsBoard sales team.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-perpetual-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-perpetual-pricing" data-title="How is the perpetual license priced?">
                        <div class="container">
                            <p>The price of the perpetual license depends on the package you choose. However, it is always a one-time fixed fee, which includes one year of software updates and support. After the first year, you have the option to extend software updates and support, but the license will remain active even without renewal.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-renewal-reason" data-title="If the license is Perpetual, why do we pay renewals?">
                        <div class="container">
                            <p>The so-called license ‘renewal’ does not refer to the license itself but rather corresponds to Basic support service and access to the Latest releases. Each type of Perpetual license unlock support service and access to newer versions for 1 year. After the initial year, one can prolong this option.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-renewal-fee" data-title="What is the renewal fee per year?">
                        <div class="container">
                            <p>The annual renewal fees for the perpetual license are as follows:</p>
                            <ul>
                                <li>Perpetual: 1,199 USD</li>
                                <li>Perpetual Kit: 1,199 USD</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-renewal-impact" data-title="What happens to my license if I don't pay for the renewal?">
                        <div class="container">
                            <p>Your current license will remain active, allowing you to continue using the platform seamlessly. By renewing your license, you'll gain access to the latest version releases and ongoing support to enhance your experience.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-renewal-logic" data-title="I do not understand how the renewal logic works in relation to new version releases?">
                        <div class="container">
                            <p>Here’s how the renewal logic works:
                            If you purchased your license on January 1, 2024, your support period and access to new version releases will expire on January 1, 2025. You can continue using the version of the platform you have without any interruptions. However, after January 1, 2025, you will no longer have access to new versions that are released after that date. You can still use the version you have, and you are free to migrate your hardware or upgrade to any version that was available before January 2, 2025.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-renewal-delay" data-title="If I miss 1 year and then decide to prolong, how much should I pay?">
                        <div class="container">
                            <p>If you miss the renewal for one year and then decide to renew, you will need to pay the yearly renewal fee for the missed period, in addition to the fee for the new period. If you miss 6 months after the initial expiration date, you can still renew by paying the annual fee, and the renewal will be calculated based on the original expiration date of your license, not from the moment you choose to renew. If you require further clarifications on this, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>, and we will be happy to explain.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-additional-fees" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container">
                            <p>No, we do not charge extra unless you want an additional service that we offer: professional support, Custom development and consulting, Training, or Managed service.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-upgrade-perpetual" data-title="If I have a Perpetual license, can I upgrade it to a Perpetual Kit?">
                        <div class="container">
                            <p>Yes, it is possible to upgrade your Perpetual license to Perpetual Kit. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>, and we will assist you with the upgrade process.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-refund-policy" data-title="Can I request a refund after purchasing the license?">
                        <div class="container">
                            <p>Since the Perpetual License is a one-time purchase granting lifetime access, all sales are final. However, we encourage customers to explore our subscription options before committing to a perpetual license. Subscriptions provide full access to ThingsBoard Professional Edition, allowing you to evaluate its features and scalability. If you need guidance on selecting the best licensing option for your needs, our <a href="https://thingsboard.io/docs/contact-us/">sales team</a> is happy to assist you.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-discounts" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container">
                            <p>Contact our <a href="https://thingsboard.io/docs/contact-us/">sales team</a> for bulk pricing options.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-perpetual-usageDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-instances" data-title="How many instances can I deploy with my perpetual license?">
                        <div class="container">
                            <p>Each perpetual license package includes a specific number of production and development license keys. You can deploy as many active instances as the number of license keys you have, both for production and development environments.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-cloud-migration" data-title="Can I move my deployment between cloud providers?">
                        <div class="container">
                            <p>Yes, self-managed ThingsBoard is cloud-agnostic and can be migrated as needed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-cluster-license" data-title="Can I use a Production Key and Development Key in one cluster deployment?">
                        <div class="container">
                            <p>No, this will not work. If you deploy a cluster with replicated ThingsBoard nodes using both production and development license keys, your user interface will display a \"DEVELOPMENT MODE\" watermark. Additionally, this will be considered a breach of the agreement and terms of usage. For proper deployment, it's recommended to use consistent license keys across your cluster.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-ha-support" data-title="Does ThingsBoard support high-availability (HA) setups?">
                        <div class="container">
                            <p>Yes, High Availability (HA) is supported and can be achieved through ThingsBoard services and database replication. Please note that each ThingsBoard replica will require a separate license.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-migration" data-title="Can I migrate from one server or Virtual machine to another using the same license?">
                        <div class="container">
                            <p>Yes, definitely! For that purpose we made a possibility to Activate/Deactivate instance on License Server. In order to migrate between servers customer must deactivate its instance, install the software on new server and then use already existing license secret. Backup of all data from previous instance is necessary if customer wants to continue utilizing same environment after migration. Notice: license check mechanism won't allow using ThingsBoard Professional Edition on two or more servers simultaneously (unless you purchase two instances of the same subscription plan).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-usage-limits" data-title="Are there any device, asset, user, etc., limits for perpetual licenses?">
                        <div class="container">
                            <p>No, there are no limits from a software perspective on the number of devices, assets, users, etc. The only limits you may encounter would be related to hardware capacity and the chosen architecture deployment mode. For more details you can read our <a href="https://thingsboard.io/docs/pe/reference/">documentation</a> or <a href="https://thingsboard.io/docs/contact-us/">contact</a> our team.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-offline" data-title="Can I run offline?">
                        <div class="container">
                            <p>By default, the platform requires active Internet access or at least access to license.thingsboard.io:443 from your host machine. If Offline access is a must, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-move-deployment-cloud" data-title="Can I move my deployment between cloud providers?">
                        <div class="container">
                            <p>Yes, self-managed ThingsBoard is cloud-agnostic and can be migrated as needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-backup" data-title="Can I back up my ThingsBoard instance?">
                        <div class="container">
                            <p>Yes, backups depend on your database and storage setup.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-telemetry-storage" data-title="How is telemetry data stored in self-managed ThingsBoard?">
                        <div class="container">
                            <p>ThingsBoard supports PostgreSQL or PostgreSQL + Cassandra (Hybrid mode) for telemetry storage. For more details on database options, you can check <a href="https://thingsboard.io/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-multi-tenancy" data-title="Does ThingsBoard support multi-tenancy?">
                        <div class="container">
                            <p>Yes, multi-tenancy is supported out of the box.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-customer-billing" data-title="How to charge my customers?">
                        <div class="container">
                            <p>So far, the ThingsBoard platform does not provide a billing module to charge end customers. At the same time, the platform exposes the <a href="https://thingsboard.cloud/swagger-ui/#/subscription-controller/getTenantSubscriptionUsage">Subscription API</a> that can be used by external payment software to generate invoices.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-perpetual-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-security" data-title="Is my ThingsBoard instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but ThingsBoard provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-data-storage" data-title="Where is my ThingsBoard data stored?">
                        <div class="container">
                            <p>Your data is stored on your own infrastructure, whether on-premise or in the cloud.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-license-verification" data-title="What data does ThingsBoard collect for license verification?">
                        <div class="container">
                            <p>During the first launch of ThingsBoard PE, built-in License Server Client generates an “Activate Instance Request” to the License Server. This request contains the license key and version info about the current platform installation. License Server looks up the subscription info based on the license key and replies with the instance id, subscription plan data, and some magic bytes. License Client stores this information locally and uses instance id and some magic bytes for the next license check requests. More details <a href="https://thingsboard.io/products/license-server/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-data-region" data-title="Can I store ThingsBoard data in my preferred region?">
                        <div class="container">
                            <p>Yes, you have full control over data storage location.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-data-export" data-title="Can I export my data at any time?">
                        <div class="container">
                            <p>Yes, you can export your data using the ThingsBoard dashboard, APIs, or by creating a full database backup.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-pentest" data-title="Do you provide pentest results?">
                        <div class="container">
                            <p>No, we do not do it for many reasons. Firstly, as a platform vendor, we cannot disclose detected vulnerabilities of certain versions of the platform as the disclosure affects the safety of our existing customers who use that particular version. Secondly, the self-declared pentest is less trustworthy as it is in the vendor’s interest to come up with clean results and you never know whether to believe them or not. Lastly, the penetration test makes more sense to be conducted over a ready-to-use end client software/application to define weak spots (if any). It is the Licensee’s responsibility to order independent testing. Having said that, the ThingsBoard platform gives one a tool to develop solutions. You may consider the platform a building that a banker rents to establish an office, vault, etc. Now you can see that testing a building itself does not make much sense. But things change when it hosts a bank (or whatever tenant).</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-vulnerability-fixes" data-title="Where can I find the logged vulnerability fixes matrix: version + list of fixes?">
                        <div class="container">
                            <p>Please stay tuned with our <a href="https://thingsboard.io/docs/pe/reference/releases/">Release notes</a>. Critical vulnerabilities or security issues are mentioned in separate line items. Less threatful vulnerabilities appear as a single record (“Vulnerability fixes”) stating that, at the release date, the version is free of known HIGH and some MEDIUM CVEs.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-perpetual-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-trial-license" data-title="Is there a trial version of the perpetual license?">
                        <div class="container">
                            <p>No, there is no trial option for perpetual licenses. To trial a self-managed system, you can use self-managed subscriptions.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-license-cancel" data-title="What happens if I cancel my perpetual license?">
                        <div class="container">
                            <p>Cancellation of the perpetual license means the license key will be removed from the License Server. Once the license key is removed, the ThingsBoard environment using this key will be stopped immediately.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-trial-convert" data-title="Can I convert a trial instance into a perpetual license?">
                        <div class="container">
                            <p>Yes, you can convert your self-managed subscription to a perpetual license by purchasing the perpetual license and replacing the license key in the configuration file. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-license-refund" data-title="Do you offer refunds for perpetual license purchases?">
                        <div class="container">
                            <p>No, refunds are not offered for perpetual license purchases.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-perpetual-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-support-level" data-title="What level of support is included with my perpetual license?">
                        <div class="container">
                            <p>The perpetual license includes dedicated support, providing access to the support portal with an initial response time of 12 hours.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-license-support-issues" data-title="What issues are included in license support?">
                        <div class="container">
                            <p>Access to the ThingsBoard Support Portal is available for users with Startup and higher subscriptions, as well as perpetual license holders. Without the need for a separate support agreement, all support inquiries are seamlessly managed through a unified queue, ensuring efficient handling of your requests. Our support team is dedicated to providing an initial response within 24 hours to address your needs promptly.</p>
                            <p>The support service includes assistance with installation and migration for default deployments, as well as resolving any questions related to the platform's out-of-the-box functionalities, as detailed in our documentation. For specialized services such as consulting, code reviews, health assessments, or development projects, we offer tailored solutions to meet your specific requirements. Should your request involve additional expertise, our support engineers will guide you to the best resources to ensure your success.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-purchase-additional-support" data-title="Can I purchase additional support for my perpetual license?">
                        <div class="container">
                            <p>Yes, you can purchase additional services such as managed services, advanced SLAs, consultancy, development, and training. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact</a> our sales team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-247-support" data-title="Do you offer 24/7 support?">
                        <div class="container">
                            <p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-maintenance-services" data-title="Do you provide full maintenance services for ThingsBoard deployed on my infrastructure?">
                        <div class="container">
                            <p>Yes, ThingsBoard offers full maintenance services for instances deployed on your infrastructure. These services can be customized based on your needs and are provided under an additional SLA, ensuring regular monitoring, updates, and issue resolution. For more details please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-perpetual-contact-support" data-title="How do I contact support?">
                        <div class="container">
                            <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are automatically added to the ThingsBoard <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Support Portal</a> after purchasing a license.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-perpetual-installation-help" data-title="How can I get help with installation and setup?">
                        <div class="container">
                            <p>All perpetual license packages provide dedicated support with predefined response time and access to the ThingsBoard Support Portal. Our expert support team is available to assist you with system deployment by following our recommended installation methods and architecture, ensuring a smooth and efficient setup. For custom installation scripts or alternative deployment scenarios, additional support options are available and you can <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="trendz-analytics-cloud" id="faq-trendz-cloud">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageAndLimits" onClick="switchFaqSection('usageAndLimits', this)">Usage & Limits</div>
                <div class="faq-section-option" id="enterpriseSubscription" onClick="switchFaqSection('enterpriseSubscription', this)">Enterprise subscription</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-trendz-cloud-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-definition" data-title="What is Trendz Cloud?">
                        <div class="container">
                            <p>Trendz Cloud is a fully managed, scalable, and fault-tolerant platform for your IoT applications with combined subscription plans based on a monthly fee which already includes hosting costs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-pricing-plans" data-title="What pricing plans does Trendz Cloud offer?">
                        <div class="container">
                            <p>Trendz Cloud offers a range of monthly subscription plans tailored to different needs, with tiers based on device, message, and storage limits. Available plans include Maker, Prototype, Startup, Business, and Enterprise.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-pricing-structure" data-title="How is Trendz Cloud pricing structured?">
                        <div class="container">
                            <p>Pricing is based on the number of connected devices, data storage, and API usage, with a fixed monthly fee per plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-upgrade-downgrade" data-title="Can I upgrade or downgrade my plan at any time?">
                        <div class="container">
                            <p>Yes, you can change your plan at any time, and billing will be adjusted accordingly.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-pricing-comparison" data-title="How does Trendz Cloud pricing compare to the on-premise version?">
                        <div class="container">
                            <p>Trendz Cloud eliminates infrastructure management costs, offering a predictable monthly fee, whereas the on-premise version requires separate hosting and maintenance.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-additional-costs" data-title="Are there any additional costs beyond the subscription fee?">
                        <div class="container">
                            <p>No, all standard features are included in the subscription, but additional services like professional support may incur extra costs.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-exceed-limits" data-title="What happens if I exceed my plan’s limits?">
                        <div class="container">
                            <p>If you exceed your limits, you may need to upgrade to a higher plan or reduce your usage.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-custom-plan" data-title="Can I create a custom plan with the ability to choose limits for devices, assets, users, etc.?">
                        <div class="container">
                            <p>Trendz Cloud does not offer fully customizable plans with user-defined limits. However, the Enterprise subscription provides a dedicated environment where configurations can be tailored to your specific needs. If you require a customized solution, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss available options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-license-types" data-title="Can ThingsBoard and Trendz Analytics have different license types?">
                        <div class="container">
                            <p>No, ThingsBoard and Trendz Analytics must have the same license type to function correctly. Trendz Analytics automatically detects all devices and assets from your ThingsBoard instance, along with their relationships, and analyzes all entities without the option to select specific ones. You cannot select specific devices or assets; all entities will be analyzed and added to the 'business entity' column.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-enterprise-price-not-listed" data-title="Why is there no listed price for the Enterprise subscription?">
                        <div class="container">
                            <p>The Enterprise subscription is a fully managed cloud solution with a dedicated environment established for each customer upon request. Pricing is customized based on the specific infrastructure, resources, and service requirements of the customer. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss your needs and receive a tailored quote.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-any-limits" data-title="Are there any Limits?">
                        <div class="container">
                            <p>Yes, each plan has specific API limits. You can review the detailed limits for each plan <a href="https://thingsboard.io/docs/paas/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-pay-as-you-go" data-title="What is the difference between Pay-as-you-go option and Trendz Cloud?">
                        <div class="container">
                            <p>Pay-as-you-go subscription plans include license fees only with no hosting services, which means that you have to deploy Trendz on an external cloud (AWS, Azure, GCP, etc), or on the local server (On-premise). This means you have to pay separately for the infrastructure and manage Trendz server. Trendz Cloud allows you to use Trendz platform as a service on Trendz environment.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-cloud-to-self-service" data-title="How to migrate from the Cloud to a self-service platform copy?">
                        <div class="container">
                            <p>We recommend using the Version control feature to migrate your configurations. Telemetry data export can be achieved via REST API. Herewith, the team works on the Export Data feature. Once available, this FAQ item will be updated.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-short-term-project" data-title="Can I purchase Trendz Cloud for a short-term project?">
                        <div class="container">
                            <p>Yes, you can subscribe for a single month and cancel anytime.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-without-thingsboard" data-title="Can I use Trendz without ThingsBoard?">
                        <div class="container">
                            <p>No, you cannot use Trendz without ThingsBoard. Trendz automatically detects and analyzes all entities from your ThingsBoard instance. Without ThingsBoard, Trendz has no data source to work with, making it incompatible for use on its own.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-cloud-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-billing" data-title="How does billing work for Trendz Cloud?">
                        <div class="container">
                            <p>Billing is handled via Stripe and is charged monthly based on your selected plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-wire-payment" data-title="I cannot pay by card, can we use wire instead?">
                        <div class="container">
                            <p>Sure. In this case, you must reach out to our sales team via <a href="https://thingsboard.io/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-monthly-or-annual" data-title="Can I pay monthly or annually?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a href="https://thingsboard.io/docs/contact-us/">contact</a> our team to arrange a wire transfer invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-volume-discounts" data-title="Do you offer volume discounts for large deployments?">
                        <div class="container">
                            <p>We offer Enterprise plan for large-scale deployments; <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-view-billing-history" data-title="How do I view my billing history and invoices?">
                        <div class="container">
                            <p>You can access invoices and payment history via your ThingsBoard Cloud account dashboard.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-payment-failure" data-title="What happens if my payment fails?">
                        <div class="container">
                            <p>If a payment fails, Stripe will retry the charge. If unresolved, your account may be suspended until payment is completed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-data-transfer-fees" data-title="Do you charge for data transfer, API calls, or message processing?">
                        <div class="container">
                            <p>Each plan includes predefined usage limits; exceeding those may require an upgrade.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-refund-policy" data-title="Can I get a refund if I cancel my subscription?">
                        <div class="container">
                            <p>No, Trendz Cloud does not offer refunds for unused time if you cancel before the billing cycle ends.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-proration" data-title="How does proration work when upgrading or downgrading my plan?">
                        <div class="container">
                            <p>When you change plans, Stripe automatically calculates the prorated charge based on your usage.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-hidden-fees" data-title="Are there any hidden fees?">
                        <div class="container">
                            <p>No, there are no hidden fees—pricing is transparent and includes all standard features.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-cloud-usageAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-limits" data-title="What are the device, message, and data storage limits for each plan?">
                        <div class="container">
                            <p>Limits vary by plan; details can be found on our plans definition <a href="https://thingsboard.io/docs/paas/subscription/">page</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-device-usage" data-title="How is device usage calculated?">
                        <div class="container">
                            <p>Device usage is determined by the number of device entities created within your account.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-increase-limits" data-title="Can I increase my resource limits if needed?">
                        <div class="container">
                            <p>Yes, you can upgrade your plan at any time to increase limits.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-white-labeling" data-title="Is white labeling available out of the box?">
                        <div class="container">
                            <p>White labeling functionality is available starting from the Prototype subscription.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-self-managed-support" data-title="If I don’t want to switch to the Enterprise plan but prefer to migrate to a self-managed system, what kind of support do I get?">
                        <div class="container">
                            <p>You can perform the migration on your own using the Version Control feature to transfer your configurations. Telemetry data can be exported via the REST API. Alternatively, the Trendz team can provide additional migration assistance on an hourly basis. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-telemetry-billing" data-title="How is telemetry data storage billed?">
                        <div class="container">
                            <p>Storage is included in your plan, but exceeding limits may require an upgrade. Limits vary by plan; details can be found on our plans definition page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-dashboards-cost" data-title="Are there additional costs for dashboards and visualization?">
                        <div class="container">
                            <p>No, dashboards are included in all plans.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-api-requests" data-title="Do you charge for API requests?">
                        <div class="container">
                            <p>API usage is included in your plan, but rate limits apply based on your selected tier.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-cloud-self-managed-instance" data-title="Can I use Trendz Cloud with a ThingsBoard Self-managed instance?">
                        <div class="container">
                            <p>No, Trendz Cloud is only available as part of ThingsBoard Cloud and cannot be used with a Self-managed ThingsBoard instance. If you are using ThingsBoard Self-managed, you will need to deploy Trendz Self-managed as well.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-cloud-enterpriseSubscription" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-cloud-vs-enterprise" data-title="What is the difference between all cloud subscriptions and the Enterprise subscription?">
                        <div class="container">
                            <p>The ThingsBoard Enterprise cloud subscription is a fully managed solution deployed upon customer request in a fully isolated, dedicated environment within a region of the customer’s choice. Unlike other subscriptions, the Enterprise plan does not share resources, as the ThingsBoard team sets up a completely separate environment for each customer.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-enterprise-price" data-title="How is the Enterprise plan price calculated?">
                        <div class="container">
                            <p>The ThingsBoard Enterprise plan price is determined based on resource usage, starting with a fixed base price and additional fees for extra resources. To receive a detailed price calculation, please contact our sales team by filling out the <a href="https://thingsboard.io/docs/contact-us/">"Contact Us"</a> form on our website.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-enterprise-support" data-title="What support options are included in the enterprise plan?">
                        <div class="container">
                            <p>Enterprise plans include priority support and dedicated account management.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-enterprise-sla" data-title="Is there a Service Level Agreement (SLA) for enterprise customers?">
                        <div class="container">
                            <p>Yes, enterprise customers receive an SLA with uptime and response time guarantees.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-private-cloud" data-title="Can I host ThingsBoard Cloud on my private cloud infrastructure?">
                        <div class="container">
                            <p>No, but you can use our on-premise version for private hosting.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-cloud-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-data-security" data-title="How is my data secured in ThingsBoard Cloud?">
                        <div class="container">
                            <p>We use encryption, access controls, and best security practices to protect your data.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-iso-compliance" data-title="Are you ISO compliant?">
                        <div class="container">
                            <p>The ThingsBoard Cloud is hosted in an IaaS asset compliant with multiple standards, including SOC II, and ISO 27001.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-compliance-costs" data-title="Are there additional costs for compliance-related features?">
                        <div class="container">
                            <p>No, security and compliance features are included in all plans.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-multi-tenancy" data-title="Do you support multi-tenancy in ThingsBoard Cloud?">
                        <div class="container">
                            <p>Yes, multi-tenancy is supported on ThingsBoard Cloud.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-cloud-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-free-trial" data-title="Do you offer a free trial Trendz?">
                        <div class="container">
                            <p>Trendz Cloud testing is available upon request (excluding Trendz Cloud Maker). To apply, please fill out the <a href="https://thingsboard.io/docs/contact-us/">Contact us</a> form.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-cancel-subscription" data-title="How to cancel my subscription?">
                        <div class="container">
                            <p>To cancel your Trendz Cloud subscription, log in as the tenant administrator → go to the "Plan and Billing" section → select "Update Plan" → choose the subscription for ThingsBoard without Trendz.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-switch-paid-plan" data-title="Can I switch from a free trial to a paid plan without losing my data?">
                        <div class="container">
                            <p>Yes, all your data and configurations remain intact when upgrading.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-cancel-before-end" data-title="What happens if I cancel my subscription before the billing period ends?">
                        <div class="container">
                            <p>If you cancel your subscription before the billing period ends, the funds for the remaining period will stay on your balance but will not be refundable.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-no-refund" data-title="Do you offer refunds for unused subscription time?">
                        <div class="container">
                            <p>No, refunds are not provided for mid-cycle cancellations.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-cloud-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-support-included" data-title="What support is included in my plan?">
                        <div class="container">
                            <p>The Maker and Prototype subscriptions include Community-level support. Starting from the Startup subscription, customers gain access to the ThingsBoard Support Portal for direct communication with the support team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-contact-billing" data-title="How can I contact ThingsBoard support for billing-related issues?">
                        <div class="container">
                            <p>You can use the "<a href="https://thingsboard.io/docs/contact-us/">Contact Us</a>" form and select the "Other" topic. Our account managers will assist you with any billing-related issues.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-knowledge-base" data-title="Is there a knowledge base or self-service support portal?">
                        <div class="container">
                            <p>All of our <a href="https://thingsboard.io/docs/paas/">documentation</a> is available on our website, with no hidden information. Additionally, you can use our Git forum for further resources and community support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-priority-support" data-title="Can I get priority support with my plan?">
                        <div class="container">
                            <p>Priority support is available for Enterprise subscription users based on the Service Level Agreement (SLA).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-support-response-time" data-title="What response times can I expect for support tickets?">
                        <div class="container">
                            <p>Response times vary by plan; enterprise subscription customers receive faster SLAs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-cloud-community-support" data-title="What does community support mean?">
                        <div class="container">
                            <p>Community support is a free initiative provided by the Trendz team and other contributors as a voluntary effort. While our engineers often assist with community requests during their free time, this support comes with no formal obligation from the Trendz team. We highly encourage users to consult the documentation for guidance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="trendz-analytics-self-managed-pay-as-you-go" id="faq-trendz-pay-as-you-go">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageDeploymentsAndLimits" onClick="switchFaqSection('usageDeploymentsAndLimits', this)">Usage, Deployments & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-trendz-pay-as-you-go-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-self-managed" data-title="What is a self-managed subscription?">
                        <div class="container">
                            <p>A self-managed subscription allows you to host and manage Trendz on your own infrastructure, either on-premises or in the cloud. You are responsible for the installation, configuration, and ongoing management of the system, while Trendz provides the software and necessary documentation to support the process.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-buy-self-managed" data-title="How can I buy a self-managed subscription?">
                        <div class="container">
                            <p>To purchase a self-managed subscription, you can acquire a license through your <a href="https://license.thingsboard.io/">License Server</a> account. Each license comes with a unique activation key, which allows you to deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-license-meaning" data-title="What does it mean to get the license?">
                        <div class="container">
                            <p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-subscription-plans" data-title="What self-managed subscription plans does Trendz offer?">
                        <div class="container">
                            <p>Trendz offers several self-managed subscription plans, including different tiers based on the features and scale you require. Maker, Prototype, Startup, Business, Enterprise.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-plan-differences" data-title="How do the self-managed subscription plans differ?">
                        <div class="container">
                            <p>Plans differ based on device limits, support level, and white-labeling availability.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-license-compatibility" data-title="Can ThingsBoard and Trendz Analytics have different license types?">
                        <div class="container">
                            <p>No, ThingsBoard and Trendz Analytics must have the same license type to function correctly. Trendz Analytics automatically detects all devices and assets from your ThingsBoard instance, along with their relationships, and analyzes all entities without the option to select specific ones. You cannot select specific devices or assets; all entities will be analyzed and added to the "business entity" column.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-subscription-commitment" data-title="Is there a contract or commitment for the subscription?">
                        <div class="container">
                            <p>No, all subscriptions are month-to-month, and you can cancel anytime.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-host-thingsboard" data-title="Do I need to host ThingsBoard myself with a subscription license?">
                        <div class="container">
                            <p>Yes, you are responsible for deploying and managing ThingsBoard on your own infrastructure.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-upgrade-downgrade" data-title="Can I upgrade or downgrade my subscription at any time?">
                        <div class="container">
                            <p>Yes, you can change plans anytime, and billing will be prorated accordingly.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-cloud-to-self-managed" data-title="Can I migrate from a Trendz Cloud subscription to a self-managed license?">
                        <div class="container">
                            <p>We recommend using the Version control feature to migrate your configurations. Telemetry data export can be achieved via REST API. Herewith, the team works on the Export Data feature. Once available, this FAQ item will be updated.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-features-included" data-title="Are all Trendz features included in every plan?">
                        <div class="container">
                            <p>White-labeling is available only from the Prototype plan and higher, and support levels vary.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-license-multi-instance" data-title="Can I use my license across multiple locations or instances?">
                        <div class="container">
                            <p>The licensing is service-based. A single-instance license subscription allows you to run one platform copy at a time. On the License portal, next to your license key, you can see if the license key is in use and how many Trendz servers you can run simultaneously. By default, you should see 0/1. Once the platform is activated, the License details will change to 1/1.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-subscription-to-perpetual" data-title="Is it possible to jump from subscription to perpetual?">
                        <div class="container">
                            <p>Customer may cancel the subscription and purchase a perpetual license. The remaining costs from terminated subscription plan (if any) will be deducted from the total cost for the perpetual license. Keep in mind: perpetual license is non-cancelable. So, the customer cannot stop using the perpetual license and rely on the total price for any subscription plan to be decreased.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-payg-vs-cloud" data-title="What is the difference between Pay-as-you-go option and Trendz Cloud?">
                        <div class="container">
                            <p>Pay-as-you-go subscription plans include license fees only with no hosting services, which means that you have to deploy Trendz on an external cloud (AWS, Azure, GCP, etc), or on the local server (On-premise). This means you have to pay separately for the infrastructure and manage Trendz server. Trendz Cloud allows you to use Trendz platform as a service on Trendz environment.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-migration-license" data-title="Can I migrate from one server or Virtual machine to another using the same license?">
                        <div class="container">
                            <p>Yes, definitely! For that purpose we made a possibility to Activate/Deactivate instance on License Server. In order to migrate between servers customer must deactivate its instance, install the software on new server and then use already existing license secret. Backup of all data from previous instance is necessary if customer wants to continue utilizing same environment after migration. Notice: license check mechanism won't allow using Trendz on two or more servers simultaneously (unless you purchase two instances of the same subscription plan).</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-thingsboard-compatibility" data-title="Does Trendz work with both ThingsBoard PE and CE?">
                        <div class="container">
                            <p>Yes, Trendz can be integrated with both ThingsBoard Professional Edition (PE) and ThingsBoard Community Edition (CE). It is fully compatible with either version, offering analytics and visualization capabilities across both platforms.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-standalone" data-title="Can I use Trendz without ThingsBoard?">
                        <div class="container">
                            <p>No, you cannot use Trendz without ThingsBoard. Trendz automatically detects and analyzes all entities from your ThingsBoard instance. Without ThingsBoard, Trendz has no data source to work with, making it incompatible for use on its own.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-pay-as-you-go-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-billing" data-title="How does billing work for self-managed subscriptions?">
                        <div class="container">
                            <p>Billing is processed monthly via Stripe, and your payment method is charged automatically.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-annual-payment" data-title="Do you offer an annual payment option?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to arrange a wire transfer invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-payment-failure" data-title="What happens if my payment fails?">
                        <div class="container">
                            <p>If a payment fails, Stripe will retry the charge several times. If unsuccessful, your license will be suspended.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-cancel-anytime" data-title="Can I cancel my subscription anytime?">
                        <div class="container">
                            <p>Yes, you can cancel your subscription anytime.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-refunds" data-title="Are refunds available if I cancel my subscription?">
                        <div class="container">
                            <p>No, we do not offer refunds for unused time. However, the funds for the remaining period will be saved on your account balance for future use.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-proration" data-title="Is there proration when upgrading or downgrading my plan?">
                        <div class="container">
                            <p>Yes, Stripe automatically prorates the charges when you change plans.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-discounts" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container">
                            <p>Contact our <a href="https://thingsboard.io/docs/contact-us/">sales team</a> for bulk pricing options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-non-renewal" data-title="What happens if I don’t renew my subscription?">
                        <div class="container">
                            <p>Your license will become inactive, and your Trendz instance will be suspended.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-transfer" data-title="Can I transfer my subscription to another entity?">
                        <div class="container">
                            <p>No, subscriptions are non-transferable. However, you can add users to your License Server account, allowing others to help manage the license subscription.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-additional-payments" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container">
                            <p>No, we do not charge extra unless you want an additional service that we offer: professional support, custom development and consulting, training, or managed service.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-pay-as-you-go-usageDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-device-and-assets-limits" data-title="What are the device and asset limits for each plan?">
                        <div class="container">
                            <p>
                                <ul>
                                    <li>Maker: Up to 10 devices and 10 assets</li>
                                    <li>Prototype: Up to 100 devices and 100 assets</li>
                                    <li>Startup: Up to 500 devices and 500 assets</li>
                                    <li>Business: Up to 1000 devices and 1000 assets</li>
                                    <li>Enterprise: Unlimited devices and assets</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-exceed-limits" data-title="What happens if I exceed my plan’s device or asset limit?">
                        <div class="container">
                            <p>You will need to upgrade to a higher-tier plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-internet-connection" data-title="Do I need an internet connection to use the self-managed license?">
                        <div class="container">
                            <p>Yes, a constant internet connection is required for license verification and periodic license checks. This ensures communication between the ThingsBoard License Server and the License Secret Key, helping to prevent unauthorized copying of binaries.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-cloud-migration" data-title="Can I move my deployment between cloud providers?">
                        <div class="container">
                            <p>Yes, self-managed Trendz is cloud-agnostic and can be migrated as needed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-backup" data-title="Can I back up my Trendz instance?">
                        <div class="container">
                            <p>Yes, backups depend on your database and storage setup.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-multi-tenancy" data-title="Does Trendz support multi-tenancy?">
                        <div class="container">
                            <p>Yes, multi-tenancy is supported out of the box.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-thingsboard-integration" data-title="Can I use Trendz Cloud with a ThingsBoard Self-managed instance?">
                        <div class="container">
                            <p>No, Trendz Cloud is only available as part of ThingsBoard Cloud and cannot be used with a Self-managed ThingsBoard instance. If you are using ThingsBoard Self-managed, you will need to deploy Trendz Self-managed as well.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-pay-as-you-go-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-security" data-title="Is my Trendz instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but Trendz provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-data-region" data-title="Can I store Trendz data in my preferred region?">
                        <div class="container">
                            <p>Yes, you have full control over data storage location.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-pay-as-you-go-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-free-trial" data-title="Do you offer a free trial for Trendz Analytics?">
                        <div class="container">
                            <p>Yes, we provide a 30-day free trial for Trendz Analytics. You can activate the trial yourself on the <a href="https://thingsboard.io/pricing/?section=trendz-options&product=trendz-self-managed">Pricing</a> page. If you need a perpetual license, please fill out the <a href="https://thingsboard.io/docs/contact-us/">Contact us</a> form.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-cancel-subscription" data-title="What happens if I cancel my subscription?">
                        <div class="container">
                            <p>Your license will become inactive, and your Trendz instance will be stopped.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-switch-to-perpetual" data-title="Can I switch from a subscription license to a perpetual license?">
                        <div class="container">
                            <p>You may cancel the subscription and purchase a perpetual license. The remaining costs from the terminated subscription plan (if applicable) will be deducted from the total cost for the perpetual license. Keep in mind: perpetual license is non-cancelable. So, the customer cannot stop using the perpetual license and rely on the total price for any subscription plan to be decreased.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-refunds" data-title="Are refunds available for self-managed subscriptions?">
                        <div class="container">
                            <p>No, all sales are final.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-trial-ends" data-title="What happens after the trial ends?">
                        <div class="container">
                            <p>If you don’t cancel your subscription before the trial ends, you will be charged for the next month’s subscription or license renewal. Remember to cancel manually if you don’t plan to continue using the product.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-pay-as-you-go-supportAndAssistance" class="pi-accordion">
                        <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-support-included" data-title="What support is included in my subscription?">
                            <div class="container">
                                <p>
                                    <ul>
                                        <li>Maker and Prototype: Community support</li>
                                        <li>Startup: Basic support (36-hour response time during regular working shifts) via Support Portal</li>
                                        <li>Enterprise: Priority email support (12-hour response time during regular working shifts) via Support Portal</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-24-7-support" data-title="Do you offer 24/7 support?">
                            <div class="container">
                                <p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for more details.</p>
                            </div>
                        </div>
                        <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-installation-help" data-title="How can I get help with installation and setup?">
                            <div class="container">
                                <p>If your subscription plan includes basic support and you have access to the Support Portal, the Trendz support team can assist with system deployment as part of basic support. However, this applies only if you follow recommended installation methods and architecture. Custom installation scripts or non-recommended deployment scenarios are not covered under basic support. If your subscription plan does not include basic support, we recommend using our documentation, tutorials, and optional professional services. To discuss options, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                            </div>
                        </div>
                        <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-contact-support" data-title="How do I contact support?">
                            <div class="container">
                                <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are automatically added to the ThingsBoard Support Portal after purchasing a license.</p>
                            </div>
                        </div>
                        <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-basic-support" data-title="What issues are included in basic support?">
                            <div class="container">
                                <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are added to the ThingsBoard Support Portal. If a separate support agreement is not signed, all basic support tickets are processed in a common queue. Basic support guarantees an initial response time of 24 hours. The scope of the service covers installation or migration support (only default deployments) and issues with the out-of-the-box functionality of the platform (e.g. if something does not work as per documentation). Consulting, code review, health check, and development are not included in the scope of Basic support service. If the request is beyond the support engineer’s capacity, you will be promptly informed.</p>
                            </div>
                        </div>
                        <div class="item" data-tag="h4" data-item-id="trendz-pay-as-you-go-server-requirements" data-title="Which server should Trendz Analytics be installed on?">
                            <div class="container">
                                <p>Trendz can be installed on the same server as your ThingsBoard instance or on a separate server, depending on your preferences and infrastructure.</p>
                            </div>
                        </div>
                        <div class="load-more" onClick="loadMoreFaq(this)">
                            <h4 class="title">Load more FAQ</h4>
                        </div>
                        <div class="item hidden" data-tag="h4" data-item-id="trendz-pay-as-you-go-community-support" data-title="What does community support mean?">
                            <div class="container">
                                <p>Community support is a free initiative provided by the Trendz team and other contributors as a voluntary effort. While our engineers often assist with community requests during their free time, this support comes with no formal obligation from the Trendz team. We highly encourage users to consult the documentation for guidance.</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <section class="trendz-analytics-self-managed-perpetual" id="faq-trendz-perpetual">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageDeploymentsAndLimits" onClick="switchFaqSection('usageDeploymentsAndLimits', this)">Usage, Deployments & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-trendz-perpetual-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-license-meaning" data-title="What does the Perpetual license mean?">
                        <div class="container">
                            <p>A Perpetual license is a lifetime right to use the platform if the License terms are not in breach.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-vs-subscription" data-title="How does the perpetual license differ from a subscription license?">
                        <div class="container">
                            <p>Unlike the pay-as-you-go subscription model, the perpetual license has no programmatic limits on entities and requires a one-time payment.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-license-activation" data-title="What does it mean to get the license?">
                        <div class="container">
                            <p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-packages" data-title="What Perpetual Packages do you offer?">
                        <div class="container">
                            <p>Standalone and Enterprise Bundle.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-standalone" data-title="What is the Standalone package aim for?">
                        <div class="container">
                            <p>The Standalone is a perpetual license package that includes two license keys (activation codes) in the scope of a license. This package permits the deployment of one production server and one development server. No programmatic limits by entities for both servers.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-prod-dev-difference" data-title="What is the difference between Production and Development instances?">
                        <div class="container">
                            <p>The Production instance is used for live environments with tested-in-advance applications. It can be branded (white-labelled). The Development instance, meant for testing and staging, features a DEVELOPMENT MODE watermark in the UI.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-perpetual-enterprise-bundle" data-title="What is within the scope of Enterprise Bundle?">
                        <div class="container">
                            <p>
                                The ThingsBoard Enterprise Bundle includes:
                                <ul>
                                    <li>2 Cluster kits</li>
                                    <li>Trendz production and development instances</li>
                                    <li>3 Edge instances</li>
                                    <li>Enhanced support response time</li>
                                </ul>
                                This bundle provides the most cost-effective solution for enterprise deployments, as purchasing these products separately would cost approximately 33,000 USD. By choosing the Enterprise Bundle, you can maximize value while meeting your deployment needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-perpetual-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-license-pricing" data-title="How is the perpetual license priced?">
                        <div class="container">
                            <p>The price of the perpetual license depends on the package you choose. However, it is always a one-time fixed fee, which includes one year of software updates and basic support. After the first year, you have the option to extend software updates and support, but the license will remain active even without renewal.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-renewals" data-title="If the license is Perpetual, why do we pay renewals?">
                        <div class="container">
                            <p>The so-called license ‘renewal’ does not refer to the license itself but rather corresponds to Basic support service and access to the latest releases. Each type of Perpetual license unlocks Basic support service and access to newer versions for 1 year. After the initial year, one can prolong this option.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-renewal-fee" data-title="What is the renewal fee per year?">
                        <div class="container">
                            <p>After the first year, updates and customer portal access can be purchased separately at 40% of the full perpetual license price.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-no-renewal" data-title="What happens to my license if I don't pay for the renewal?">
                        <div class="container">
                            <p>If you do not pay for the renewal, your license will remain active and continue running. However, you will not be able to use new version releases that are released after the expiration of the initial year, and you will no longer have access to basic support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-renewal-logic" data-title="I do not understand how the renewal logic works in relation to new version releases?">
                        <div class="container">
                            <p>Here’s how the renewal logic works:<br>
                            If you purchased your license on January 1, 2024, your support period and access to new version releases will expire on January 1, 2025. You can continue using the version of the platform you have without any interruptions. However, after January 1, 2025, you will no longer have access to new versions that are released after that date. You can still use the version you have, and you are free to migrate your hardware or upgrade to any version that was available before January 2, 2025.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-missed-renewal" data-title="If I miss 1 year and then decide to prolong, how much should I pay?">
                        <div class="container">
                            <p>If you miss the renewal for one year and then decide to renew, you will need to pay the yearly renewal fee for the missed period, in addition to the fee for the new period. If you miss 6 months after the initial expiration date, you can still renew by paying the annual fee, and the renewal will be calculated based on the original expiration date of your license, not from the moment you choose to renew. If you require further clarifications on this, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>, and we will be happy to explain.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-perpetual-additional-payments" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container">
                            <p>No, we do not charge extra unless you want an additional service that we offer: professional support, custom development and consulting, training, or managed service.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-perpetual-refunds" data-title="Can I request a refund after purchasing the license?">
                        <div class="container">
                            <p>No, all sales are final.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-perpetual-discounts" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container">
                            <p><a href="https://thingsboard.io/docs/contact-us/">Contact us</a> for bulk pricing options.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-perpetual-usageDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-instances" data-title="How many instances can I deploy with my perpetual license?">
                        <div class="container">
                            <p>Each perpetual license package includes a specific number of production and development license keys. You can deploy as many active instances as the number of license keys you have, both for production and development environments.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-cloud-migration" data-title="Can I move my deployment between cloud providers?">
                        <div class="container">
                            <p>Yes, self-managed Trendz is cloud-agnostic and can be migrated as needed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-prod-dev-keys-one-cluster" data-title="Can I use a Production Key and Development Key in one cluster deployment?">
                        <div class="container">
                            <p>No, this will not work. If you deploy a cluster with replicated ThingsBoard nodes using both production and development license keys, your user interface will display a "DEVELOPMENT MODE" watermark. Additionally, this will be considered a breach of the agreement and terms of usage. For proper deployment, it's recommended to use consistent license keys across your cluster.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-migrate-server" data-title="Can I migrate from one server or Virtual machine to another using the same license?">
                        <div class="container">
                            <p>Yes, definitely! For that purpose we made a possibility to Activate/Deactivate instance on License Server. In order to migrate between servers, the customer must deactivate its instance, install the software on a new server and then use the already existing license secret. A backup of all data from the previous instance is necessary if the customer wants to continue utilizing the same environment after migration. Notice: the license check mechanism won't allow using Trendz on two or more servers simultaneously (unless you purchase two instances of the same subscription plan).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-limits" data-title="Are there any device, asset, user, etc., limits for perpetual licenses?">
                        <div class="container">
                            <p>No, there are no limits from a software perspective on the number of devices, assets, users, etc. The only limits you may encounter would be related to hardware capacity and the chosen architecture deployment mode. For more details, you can read our <a href="https://thingsboard.io/docs/pe/reference/">documentation</a> or <a href="https://thingsboard.io/docs/contact-us/">contact</a> our team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-backup" data-title="Can I back up my Trendz instance?">
                        <div class="container">
                            <p>Yes, backups depend on your database and storage setup.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-perpetual-multi-tenancy" data-title="Does Trendz support multi-tenancy?">
                        <div class="container">
                            <p>Yes, multi-tenancy is supported out of the box.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-perpetual-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-security" data-title="Is my Trendz instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but Trendz provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-data-region" data-title="Can I store Trendz data in my preferred region?">
                        <div class="container">
                            <p>Yes, you have full control over data storage location.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-perpetual-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-trial" data-title="Is there a trial version of the perpetual license?">
                        <div class="container">
                            <p>Yes, we provide a 30-day free trial for Trendz Analytics. If you need a perpetual license, please fill out the <a href="https://thingsboard.io/docs/contact-us/">Contact us</a> form.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-license-cancel" data-title="What happens if I cancel my perpetual license?">
                        <div class="container">
                            <p>Cancellation of the perpetual license means the license key will be removed from the License Server. Once the license key is removed, the ThingsBoard environment using this key will be stopped immediately.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-convert-trial" data-title="Can I convert a trial instance into a perpetual license?">
                        <div class="container">
                            <p>Yes, you can convert your self-managed subscription to a perpetual license by purchasing the perpetual license and replacing the license key in the configuration file. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-refunds" data-title="Do you offer refunds for perpetual license purchases?">
                        <div class="container">
                            <p>No, refunds are not offered for perpetual license purchases.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-trendz-perpetual-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-support-level" data-title="What level of support is included with my perpetual license?">
                        <div class="container">
                            <p>The perpetual license includes basic level support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-basic-support" data-title="What issues are included in basic support?">
                        <div class="container">
                            <p>The Basic support guarantees an initial response time within certain hours. The scope of the service covers installation or migration support (only default deployments) and issues with the out-of-the-box functionality of the platform (e.g. if something does not work as per documentation). Neither consulting, code review, health check, nor development are in the scope of Basic support service. If the request is beyond the support engineer’s capacity, you will be promptly informed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-additional-support" data-title="Can I purchase additional support for my perpetual license?">
                        <div class="container">
                            <p>Yes, you can purchase additional services such as managed services, advanced SLAs, consultancy, development, and training. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact</a> our sales team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-contact-support" data-title="How do I contact support?">
                        <div class="container">
                            <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are automatically added to the ThingsBoard <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Support Portal</a> after purchasing a license.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-perpetual-installation-support" data-title="How can I get help with installation and setup?">
                        <div class="container">
                            <p>If your subscription plan includes basic support and you have access to the Support Portal, the Trendz support team can assist with system deployment as part of basic support. However, this applies only if you follow recommended installation methods and architecture. Custom installation scripts or non-recommended deployment scenarios are not covered under basic support. If your subscription plan does not include basic support, we recommend using our documentation, tutorials, and optional professional services. To discuss options, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="edge-comunity-edition" id="faq-edge-community">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="installationAndDeployment" onClick="switchFaqSection('installationAndDeployment', this)">Installation & Deployment</div>
                <div class="faq-section-option" id="featuresAndLimitations" onClick="switchFaqSection('featuresAndLimitations', this)">Features & Limitations</div>
                <div class="faq-section-option" id="supportAndCommunityAssistance" onClick="switchFaqSection('supportAndCommunityAssistance', this)">Support & Community Assistance</div>
                <div class="faq-section-option" id="upgradingToEnterpriseEdition" onClick="switchFaqSection('upgradingToEnterpriseEdition', this)">Upgrading to Enterprise Edition</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
            </div>
            <div class="answers">
                <div id="faq-edge-community-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="edge-community-what-is" data-title="What is ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>The Community Edition of ThingsBoard Edge is a free, open-source platform. It offers essential features for managing and analyzing IoT data at the edge.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-free" data-title="Is the ThingsBoard Edge Community Edition free to use?">
                        <div class="container">
                            <p>Yes, it is completely free, with no licensing fees or hidden costs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-intended-for" data-title="Who is the Community Edition intended for?">
                        <div class="container">
                            <p>It is ideal for individuals, startups, educational purposes, and organizations conducting small to medium-sized IoT projects without the need for advanced enterprise features.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-commercial-use" data-title="Can I use ThingsBoard Edge Community Edition for commercial projects?">
                        <div class="container">
                            <p>Yes, ThingsBoard Edge Community Edition can be used for commercial purposes. You can develop and deploy IoT solutions based on the Community Edition as part of your business operations. It is distributed under the Apache 2.0 license, which allows commercial use without the license or royalty fees.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-compatibility" data-title="What ThingsBoard Edge compatibility means?">
                        <div class="container">
                            <p>ThingsBoard Edge Community Edition is able to connect only to ThingsBoard Community Edition server.<br>ThingsBoard Edge Professional Edition is able to connect only to ThingsBoard Professional Edition server (it can be ThingsBoard Cloud or on-premise instances).<br>ThingsBoard Edge Community Edition cannot be connected to ThingsBoard Professional Edition and vice versa.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-difference" data-title="How does the ThingsBoard Edge Community Edition differ from Professional Edition?">
                        <div class="container">
                            <p>Community Edition includes essential features for IoT device management, data collection, visualization, and rule processing. The Professional Edition offers advanced features such as white-labeling, RBAC, integrations, etc.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-migration" data-title="Is it possible to migrate from the Edge Community Edition to the Edge Professional Edition?">
                        <div class="container">
                            <p>Yes, migration from the Community Edition to the Professional Edition is possible. Since both editions share a similar architecture, the transition process will involve backing up relevant data, deploying the Professional Edition, and restoring the data. As the Professional Edition includes advanced features, some additional configuration may be required.<br>To simplify migration, we recommend using the <a href="https://thingsboard.io/docs/user-guide/version-control/#usage">version control</a> feature to transfer all entities. You can then move telemetry data using the <a href="https://thingsboard.io/docs/reference/rest-api/">REST API</a>. For more details on the migration process, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-clustering" data-title="Does the Edge Community Edition support clustering?">
                        <div class="container">
                            <p>No, ThingsBoard Edge does not support clustering at the moment. But cluster support will be added in next releases.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-customization" data-title="Can I customize and modify the Edge Community Edition?">
                        <div class="container">
                            <p>Yes, the source code is available on GitHub, and you can fork and modify it to suit your needs. By the way, please consider starring <a href="https://github.com/thingsboard/thingsboard-edge">our repository</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-offline" data-title="Do I need an internet connection to use the ThingsBoard Edge?">
                        <div class="container">
                            <p>No, you can run it completely offline if you need to. The only connection required is to the ThingsBoard Server via <a href="https://grpc.io/">gRPC</a>.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-community-installationAndDeployment" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-community-installation" data-title="How can I install ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>You can install the Community Edition following the <a href="https://thingsboard.io/docs/user-guide/install/edge/installation-options/">installation guides</a> available in the official documentation.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-system-requirements" data-title="What are the system requirements for deploying the Community Edition?">
                        <div class="container">
                            <p>The Community Edition is compatible with various operating systems, including Linux, Windows, and macOS. Specific requirements depend on the deployment method and can be found in the <a href="https://thingsboard.io/docs/user-guide/install/edge/installation-options/">installation guide</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-multi-tenancy" data-title="Does the ThingsBoard Edge Community Edition support multi-tenancy?">
                        <div class="container">
                            <p>No, ThingsBoard Edge Community Edition does not support multi-tenancy. It is designed for a single tenant and a single customer, which means that you cannot share a single instance of ThingsBoard Edge between multiple tenants or customers. Also, devices from different tenants cannot be connected to the same instance of ThingsBoard Edge.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-docker-support" data-title="Does the Community Edition support Docker deployment?">
                        <div class="container">
                            <p>Yes, ThingsBoard Edge Community Edition supports Docker. Detailed instructions for Docker-based installation are provided in the <a href="https://thingsboard.io/docs/user-guide/install/edge/docker/">Docker deployment</a> guide.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-database-support" data-title="What databases does the ThingsBoard Edge Community Edition support?">
                        <div class="container">
                            <p>The Community Edition supports pure SQL or a hybrid SQL + NoSQL (for telemetry storage). For more details on database options, you can check <a href="https://thingsboard.io/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach">here</a>.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-time-series-storage" data-title="Where does ThingsBoard Edge store time-series data?">
                        <div class="container">
                            <p>Depending on your database approach, there are two options. If you've chosen a hybrid approach, the time series data will be stored in Cassandra. Otherwise, the data is stored in the PostgreSQL database, which is well suited for storing and querying entities and local time series data.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-docker-image" data-title="Is there an official Docker image for Community Edition?">
                        <div class="container">
                            <p>Yes, official Docker images are available on Docker Hub.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-edge-hardware" data-title="Can I run ThingsBoard Edge on Raspberry Pi or other edge devices?">
                        <div class="container">
                            <p>Yes, ThingsBoard Edge is specifically designed to run on a variety of Edge hardware platforms, including single-board computers like Raspberry Pi and other devices with sufficient processing power and memory.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-legacy-devices" data-title="What should I do if I have legacy devices to connect?">
                        <div class="container">
                            <p>If you have legacy devices that don't natively speak one of the protocols supported by ThingsBoard Edge (such as MQTT, CoAP, or HTTP), you can still connect them by installing <a href="https://thingsboard.io/docs/iot-gateway/">ThingsBoard IoT Gateway</a>. It will act as a bridge between your legacy devices and ThingsBoard Edge.<br>ThingsBoard IoT Gateway is available out-of-the-box and requires no additional fees.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-community-featuresAndLimitations" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-community-core-features" data-title="What core features are available in the Community Edition?">
                        <div class="container">
                            <p>
                                <ul>
                                    <li>Device management and telemetry</li>
                                    <li>Rule engine for data processing</li>
                                    <li>Dashboard creation</li>
                                    <li>Support for MQTT, CoAP, and HTTP protocols</li>
                                    <li>Open-source extensibility through plugins</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-device-support" data-title="How many devices does ThingsBoard Edge Community Edition support?">
                        <div class="container">
                            <p>ThingsBoard Edge Community Edition doesn’t impose a fixed limit on the number of devices you can connect. In practice, the number of devices you can support depends largely on your hardware resources, system configuration, and the specific use case.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-white-labeling" data-title="Does the Community Edition support white-labeling?">
                        <div class="container">
                            <p>No, white-labeling is available only in the Professional Edition.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-security-features" data-title="Are there any built-in security features?">
                        <div class="container">
                            <p>Yes, the Community Edition supports secure device connectivity options, OAuth configuration, and domain management.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-third-party-integration" data-title="Can I integrate third-party systems with ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>Yes, you can integrate the ThingsBoard Edge Community Edition with third-party systems through REST APIs. However, the <a href="https://thingsboard.io/docs/pe/edge/user-guide/integrations/">platform integrations</a>, which are available only in the Professional Edition, are not included in the Community Edition.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-automation" data-title="Can I automate device management and telemetry processing?">
                        <div class="container">
                            <p>Yes, using the rule engine, which allows event-based processing and alerts.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-ota" data-title="Does Community Edition support OTA (Over-the-Air) firmware updates?">
                        <div class="container">
                            <p>Yes, the Community Edition supports <a href="https://thingsboard.io/docs/edge/user-guide/ota-updates/">OTA (Over-the-Air)</a> firmware updates.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-mobile-app" data-title="Is there a mobile app for ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>No, there is no dedicated mobile app for ThingsBoard Edge Community Edition. However, you can access and manage ThingsBoard Edge through a web browser on any device, including mobile devices, by visiting the ThingsBoard Edge dashboard (typically hosted on port 8080).</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-ai-ml" data-title="Does ThingsBoard Edge Community Edition support AI or machine learning integrations?">
                        <div class="container">
                            <p>Not natively, but you can incorporate AI or ML into your ThingsBoard Edge deployment using custom development or third-party integrations.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-upgrade" data-title="How do I upgrade to the latest version of ThingsBoard Edge?">
                        <div class="container">
                            <p>In order to upgrade to the latest version of ThingsBoard Edge, please follow <a href="https://thingsboard.io/docs/user-guide/install/edge/upgrade-instructions/">these instructions</a>.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-community-supportAndCommunityAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-community-support-options" data-title="What support options are available for the Community Edition?">
                        <div class="container">
                            <p>Support for the Community Edition is primarily community-driven, including:</p>
                            <ul>
                                <li>Community Forums: Engage with other users and developers.</li>
                                <li>GitHub Issues: Report bugs or request features.</li>
                                <li>Documentation: Comprehensive guides and API references available on the ThingsBoard Documentation.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-official-support" data-title="Is official support available for the Community Edition?">
                        <div class="container">
                            <p>No, official support is not included in the Community Edition. For official support, consider upgrading to a paid edition.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-help" data-title="Where can I get help if I run into issues?">
                        <div class="container">
                            <p>
                                <ul>
                                    <li><a href="https://github.com/thingsboard/thingsboard-edge">GitHub</a> (report issues, contribute)</li>
                                    <li><a href="https://stackoverflow.com/questions/tagged/thingsboard">Stack Overflow</a> (for developer-related questions)</li>
                                    <li><a href="https://thingsboard.io/docs/edge/">Documentation & Tutorials</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-updates" data-title="Are software updates available for ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>Yes, updates for all <a href="https://thingsboard.io/docs/edge/releases/">versions</a> are available.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-bug-report" data-title="What should I do if I find a bug in Community Edition?">
                        <div class="container">
                            <p>You can report it on <a href="https://github.com/thingsboard/thingsboard-edge">GitHub</a>, and the open-source community may help fix it.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-contribute" data-title="Can I contribute to the development of ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>Yes! Pull requests and contributions are welcome on <a href="https://github.com/thingsboard/thingsboard-edge">GitHub</a>. By the way, please consider starring our repository.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-community-upgradingToEnterpriseEdition" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-community-upgrade" data-title="Can I upgrade from the Community Edition to a paid edition?">
                        <div class="container">
                            <p>Yes, upgrading is straightforward. Contact the ThingsBoard Sales Team or visit the Pricing Page to select a suitable paid plan. The transition will be guided to ensure data integrity and feature migration.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-upgrade-benefits" data-title="What benefits do I gain by upgrading to an Enterprise Edition?">
                        <div class="container">
                            <p>Upgrading provides access to advanced features, dedicated support, and integrations not available in the Community Edition.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-updates" data-title="Are software updates available for Community Edition?">
                        <div class="container">
                            <p>Yes, updates for all <a href="https://thingsboard.io/docs/edge/releases/">versions</a> are available.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-developer-help" data-title="Can I get ThingsBoard developers to help with my Community Edition deployment?">
                        <div class="container">
                            <p>Yes, you can request such assistance as an additional paid service. Please, <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss how we can help.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-community-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-community-security" data-title="Is my ThingsBoard Edge instance secure?">
                        <div class="container">
                            <p>Yes, but security depends on your deployment setup and infrastructure.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-encryption" data-title="Does Community Edition include encryption?">
                        <div class="container">
                            <p>Yes, the ThingsBoard Edge Community Edition includes transport encryption and a secure connection to ThingsBoard Server.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-cloud-storage" data-title="Can I store ThingsBoard Edge data in the cloud?">
                        <div class="container">
                            <p>ThingsBoard Edge data is stored locally.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-compliance" data-title="Does Edge Community Edition comply with industry standards (GDPR, ISO, etc.)?">
                        <div class="container">
                            <p>Compliance depends on your hosting environment and data security practices.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-data-export" data-title="Can I export my data at any time?">
                        <div class="container">
                            <p>Yes, you can export data via APIs or the ThingsBoard dashboard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="edge-pay-as-you-go" id="faq-edge-pay-as-you-go">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="featuresAndLimitations" onClick="switchFaqSection('featuresAndLimitations', this)">Features & Limitations</div>
                <div class="faq-section-option" id="supportAndCommunityAssistance" onClick="switchFaqSection('supportAndCommunityAssistance', this)">Support & Community Assistance</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
            </div>
            <div class="answers">
                <div id="faq-edge-pay-as-you-go-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-model" data-title="What is the Pay-As-You-Go (PAYG) model for ThingsBoard Edge?">
                        <div class="container">
                            <p>The PAYG model allows users to pay based on their actual usage of ThingsBoard Edge services. It's ideal for projects with variable workloads or businesses seeking scalability without long-term commitments.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-for-whom" data-title="Who should consider the PAYG model?">
                        <div class="container">
                            <p>Organizations experiencing fluctuating IoT workloads, startups scaling their operations, or businesses preferring flexible pricing without upfront investments.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-compatibility" data-title="What ThingsBoard Edge compatibility means?">
                        <div class="container">
                            <p>ThingsBoard Edge Community Edition is able to connect only to ThingsBoard Community Edition server.<br>ThingsBoard Edge Professional Edition is able to connect only to ThingsBoard Professional Edition server (it can be ThingsBoard Cloud or on-premise instances).<br>ThingsBoard Edge Community Edition cannot be connected to ThingsBoard Professional Edition and vice versa.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-self-managed" data-title="What is a self-managed subscription?">
                        <div class="container">
                            <p>A self-managed subscription allows you to host and manage Edge on your own edge infrastructure. You are responsible for the installation, configuration, and ongoing management of the system, while the ThingsBoard team provides the software and necessary documentation to support the process.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-purchase" data-title="How can I buy a self-managed subscription?">
                        <div class="container">
                            <p>To purchase a self-managed subscription, you can acquire a license through your <a href="https://license.thingsboard.io/">License Server</a> account. Each license comes with a unique activation key, which allows you to deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-license" data-title="What does it mean to get the license?">
                        <div class="container">
                            <p>Each license comes with a unique license key (activation code) that is automatically generated in your <a href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the Edge by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-pricing-plans" data-title="What are the pricing plans for the Pay-As-You-Go (PAYG) model for ThingsBoard Edge?">
                        <div class="container">
                            <p>ThingsBoard Edge PAYG offers flexible monthly subscription plans, with tiers based on the number of devices and assets. We support 4 predefined plans to cater to different needs. The beginner plan includes support for up to 50 devices and 50 assets. All subscription plans include unlimited dashboards, API calls, data points & messages. For more details, visit the ThingsBoard Edge <a href="https://thingsboard.io/pricing/?section=thingsboard-edge">pricing page</a>.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-trial" data-title="Do you offer a free trial?">
                        <div class="container">
                            <p>Yes, we offer a free 30-day trial to let you explore ThingsBoard Edge before committing to a paid plan.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-trial-included" data-title="What is included in the free trial?">
                        <div class="container">
                            <p>The free trial includes access to all core features with limited usage of devices and without the white-labeling feature.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-upgrade" data-title="Can I upgrade or downgrade my plan at any time?">
                        <div class="container">
                            <p>Yes, you can change your plan at any time, and billing will be adjusted accordingly.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-migration" data-title="Can I migrate from one subscription plan to another?">
                        <div class="container">
                            <p>Yes. One of the greatest features of <a href="https://thingsboard.io/products/license-server/">ThingsBoard License Server</a> is the ability to change subscription plans. Now it is as simple as that. The flow is: Subscription details — Update subscription — Choose a plan. Also, there is an Update subscription button in the action icons tray.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-custom-plan" data-title="Can I create a custom plan with the ability to choose limits for devices, assets, users, etc.?">
                        <div class="container">
                            <p>ThingsBoard Edge does not offer fully customizable plans with user-defined limits. However, the Mega subscription provides a dedicated environment with no device number or assets limits. If you require a customized solution, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss available options.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-additional-costs" data-title="Are there any additional costs beyond the subscription fee?">
                        <div class="container">
                            <p>No, all standard features are included in the subscription. However, additional services such as application configuration, integrations, or consulting may incur extra costs.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-pay-as-you-go-featuresAndLimitations" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-limitations" data-title="Are there any limitations in the PAYG model?">
                        <div class="container">
                            <p>There are limitations in the PAYG model, particularly concerning the number of devices and assets.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-exceed-limits" data-title="What happens if I exceed my plan’s limits?">
                        <div class="container">
                            <p>If you exceed your limits and need to add more devices or assets to the Edge, you may need to upgrade to a higher plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-multi-tenancy" data-title="Does the ThingsBoard Edge Professional Edition support multi-tenancy?">
                        <div class="container">
                            <p>No, ThingsBoard Edge Professional Edition does not support multi-tenancy. It is designed for a single tenant and multiple customers, but the customer hierarchy must be taken into account.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-white-labeling" data-title="Does the Professional Edition support white-labeling?">
                        <div class="container">
                            <p>Yes, white-labeling is available for the Professional Edition.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-limits" data-title="What are the device, message, and data storage limits for each plan?">
                        <div class="container">
                            <p>Limits for devices and assets vary by plan; messages and data storage are not limited; details can be found on our plans definition <a href="https://thingsboard.io/pricing/?section=thingsboard-edge">page</a>.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-pay-as-you-go-supportAndCommunityAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-support-included" data-title="What support is included in my plan?">
                        <div class="container">
                            <p>All subscriptions include optional support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-optional-support" data-title="What is optional support?">
                        <div class="container">
                            <p>This means that Edge support is not bundled with the license. For now, we provide basic support to customers with more than 25 Edge licenses of any type.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-refund-delivery" data-title="Refund and Delivery Policy">
                        <div class="container">
                            <p><strong>Refund Policy</strong></p>
                            <p>The License fee is non-refundable, regardless of any circumstances. Customers may manage their subscription plans: update or cancel them. Once the subscription is deleted before expiration, Stripe will keep the balance. After a certain time period (about an hour), a positive Amount due with the remaining credits will appear in the Billing section of the License portal. This sum is deducted from the Total fee whenever a particular customer purchases a new plan or a perpetual license.</p>
                            <p><strong>Delivery Policy</strong></p>
                            <p>The software is available for download and installation from our website. See <a href="https://thingsboard.io/docs/user-guide/install/pe/installation-options/">Installation Guides</a> for more details. In order to activate the software, you will need to obtain the license key. Instructions on how to obtain and use the license key are provided in the installation guide. See <a href="https://www.youtube.com/watch?v=dK-QDFGxWek">How-to get pay-as-you-go</a> subscription or <a href="https://www.youtube.com/watch?v=GPe0lHolWek">How-to get a perpetual license</a> for more details. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> if you have any questions or require support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-billing-support" data-title="How can I contact ThingsBoard support for billing-related issues?">
                        <div class="container">
                            <p>You can use the <a href="https://thingsboard.io/docs/contact-us/">contact us</a> form and select the "Other" topic. Our account managers will assist you with any billing-related issues.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-knowledge-base" data-title="Is there a knowledge base or self-service support portal?">
                        <div class="container">
                            <p>All of our <a href="https://thingsboard.io/docs/pe/edge/">documentation</a> is available on our website, with no hidden information. Additionally, you can use our <a href="https://github.com/thingsboard/thingsboard-edge/issues">GitHub issues</a> for community support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-24-7-support" data-title="Do you offer 24/7 customer support?">
                        <div class="container">
                            <p>Yes, we do provide 24/7 support. If this is what you're looking for, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for a more detailed discussion about your specific needs.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-pay-as-you-go-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-bulk-discount" data-title="Can we have a discounted price for ThingsBoard Edges in case of bulk purchase?">
                        <div class="container">
                            <p>We do understand that you may need multiple edge computing services. Price reduction starts from 10 licenses. Discount tiers are as follows: 10–50 Edges — 10%, 51–100 Edges — 12%, above 100 Edges — 15%+ off the license cost regardless of the plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-billing" data-title="How does billing work for ThingsBoard Edge?">
                        <div class="container">
                            <p>Billing is handled via Stripe and is charged monthly based on your selected plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-wire-transfer" data-title="I cannot pay by card, may we use wire instead?">
                        <div class="container">
                            <p>Sure. In this case, you must reach out to our sales team via <a href="https://thingsboard.io/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-payment-frequency" data-title="Can I pay monthly or annually?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a href="https://thingsboard.io/docs/contact-us/">contact our team</a> to arrange a wire transfer invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-payment-failure" data-title="What happens if my payment fails?">
                        <div class="container">
                            <p>If a payment fails, Stripe will retry the charge. If unresolved, your account may be suspended until payment is completed.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-refund-policy" data-title="Can I get a refund if I cancel my subscription?">
                        <div class="container">
                            <p>ThingsBoard Edge does not offer refunds for unused time if you cancel before the billing cycle ends.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-pay-as-you-go-proration" data-title="How does proration work when upgrading or downgrading my plan?">
                        <div class="container">
                            <p>When you change plans, Stripe automatically calculates the prorated charge based on your usage.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-pay-as-you-go-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-free-trial-start" data-title="How do I start a free trial?">
                        <div class="container">
                            <p>The Edge free trial license key is provided when you create an Edge instance inside ThingsBoard <a href="https://thingsboard.io/pricing/?product=thingsboard-pe">Professional Edition</a> or <a href="https://thingsboard.io/pricing/?product=thingsboard-cloud">Cloud</a>. This key is only active for 30 days after activation. To obtain the permanent license key, please navigate to the <a href="https://thingsboard.io/pricing/?section=thingsboard-edge">pricing page</a> and select the best licensing option for your case.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-trial-end" data-title="What happens when my free trial ends?">
                        <div class="container">
                            <p>Once your free trial ends, you must purchase a permanent license key and update the Edge instance trial license key with a new permanent key inside ThingsBoard Professional Edition or Cloud.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-trial-upgrade" data-title="Can I switch from a free trial to a paid plan without losing my data?">
                        <div class="container">
                            <p>Yes, all your data and configurations remain intact when upgrading.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-subscription-cancel" data-title="What happens if I cancel my subscription before the billing period ends?">
                        <div class="container">
                            <p>Canceling your subscription before the end of the billing cycle will result in the loss of funds allocated for the unused period.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-pay-as-you-go-refund-policy" data-title="Do you offer refunds for unused subscription time?">
                        <div class="container">
                            <p>No, refunds are not provided for mid-cycle cancellations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="edge-perpetual" id="faq-edge-perpetual">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billing" onClick="switchFaqSection('billing', this)">Billing</div>
                <div class="faq-section-option" id="usageAndDeploymentsAndLimits" onClick="switchFaqSection('usageAndDeploymentsAndLimits', this)">Usage, Deployments & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-edge-perpetual-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-license" data-title="What is Perpetual license?">
                        <div class="container">
                            <p>Perpetual fallback license is a license that allows you to use a specific version of the software, without an active subscription to it. Whenever you purchase a perpetual fallback license, you get one year of software updates included. You can purchase additional updates if required. The typical price for a one-year update package is 159 USD. <br><br></p>
                            <p><strong>Example 1:</strong> Let's assume you purchased one license for ThingsBoard Edge v3.7 in August 2024 and received an update to ThingsBoard Edge v4.0 in April 2025. This means you can continue using this ThingsBoard v4.0 instance forever. You can also migrate to different hardware without issues.<br><br></p>
                            <p><strong>Example 2:</strong> Let's assume you purchased one license for ThingsBoard Edge v3.7 in August 2024 and received an update to ThingsBoard Edge v4.0 in April 2025. This means you can continue using this ThingsBoard v4.0 instance forever. Later, in September 2025, we released v4.1. In order to get the v4.1 update, you will need to purchase an additional year of software updates for ThingsBoard Edge PE, which will cost 159 USD. However, you can continue using v4.0 without updates.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-switch" data-title="Is it possible to jump from subscription to perpetual?">
                        <div class="container">
                            <p>Customers may cancel the subscription and purchase a perpetual license. The remaining costs from the terminated subscription plan (if any remain) will be deducted from the total cost of the perpetual license. Keep in mind: the perpetual license is non-cancelable. So, customers cannot stop using the perpetual license and rely on the total price for any subscription plan to be decreased.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-compatibility" data-title="What ThingsBoard Edge compatibility means?">
                        <div class="container">
                            <p>ThingsBoard Edge Community Edition can connect only to ThingsBoard Community Edition server.<br>ThingsBoard Edge Professional Edition can connect only to ThingsBoard Professional Edition server (it can be ThingsBoard Cloud or on-premise instances).<br>ThingsBoard Edge Community Edition cannot be connected to ThingsBoard Professional Edition and vice versa.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-unlimited" data-title="What ThingsBoard Edge unlimited Devices and Assets means?">
                        <div class="container">
                            <p>Unlimited number of devices and assets means there are no software limits on creating devices and assets on the edge side. However, in real-world deployments, several factors must be considered to host a large number of devices:</p>
                            <ul>
                                <li>Hardware must be powerful enough to process messages from an 'unlimited' number of devices and assets.</li>
                                <li>Internet connection speed between ThingsBoard Edge and ThingsBoard Server must be fast to deliver large volumes of data.</li>
                                <li>Payload size and message rate should be taken into consideration—gRPC channel limits can affect message delivery rates.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-vs-subscription" data-title="How does the perpetual license differ from a subscription license?">
                        <div class="container">
                            <p>A perpetual license grants you lifetime access to the Edge service with no programmatic limits on entities through a one-time payment. A subscription license offers flexible access based on your entity limits with regular, ongoing payments.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-features" data-title="What features are included in the perpetual license?">
                        <div class="container">
                            <p>The perpetual license includes full access to ThingsBoard Edge Professional Edition features, such as device management, data storage, rule engine, telemetry processing, and more. It also provides access to standard documentation, support, and updates for a specified period. Additional features or services, such as extended support or custom development, may be available for an extra fee.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-perpetual-billing" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-bulk-discount" data-title="Can we have a discounted price for ThingsBoard Edges in case of bulk purchase?">
                        <div class="container">
                            <p>We do understand that you may need multiple edge computing services. Price reduction starts from 10 licenses. Discount tiers are as follows: 10–50 Edges — 10%, 51–100 Edges — 12%, above 100 Edges — 15%+ off the license cost regardless of the plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-pricing" data-title="How is the perpetual license priced?">
                        <div class="container">
                            <p>The price of the perpetual license depends on the package you choose. However, it is always a one-time fixed fee, which includes one year of software updates and support. After the first year, you have the option to extend software updates and support, but the license will remain active even without renewal.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-renewal" data-title="If the license is Perpetual, why do we pay renewals?">
                        <div class="container">
                            <p>The so-called license ‘renewal’ does not refer to the license itself but rather corresponds to Basic support service and access to the Latest releases. Each type of Perpetual license unlocks support service and access to newer versions for 1 year. After the initial year, one can prolong this option.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-renewal-fee" data-title="What is the renewal fee per year?">
                        <div class="container">
                            <p>The Edge Perpetual Fallback License is 159 USD.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-license-status" data-title="What happens to my license if I don't pay for the renewal?">
                        <div class="container">
                            <p>Your current license will remain active, allowing you to continue using the Edge service seamlessly. By renewing your license, you'll gain access to the latest version releases and ongoing support to enhance your experience.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-renewal-logic" data-title="I do not understand how the renewal logic works in relation to new version releases?">
                        <div class="container">
                            <p>Here’s how the renewal logic works:<br>If you purchased your license on January 1, 2024, your support period and access to new version releases will expire on January 1, 2025. You can continue using the version of the platform you have without any interruptions. However, after January 1, 2025, you will no longer have access to new versions that are released after that date. You can still use the version you have, and you are free to migrate your hardware or upgrade to any version that was available before January 2, 2025.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-perpetual-renewal-delay" data-title="If I miss 1 year and then decide to prolong, how much should I pay?">
                        <div class="container">
                            <p>If you miss the renewal for one year and then decide to renew, you will need to pay the yearly renewal fee for the missed period, in addition to the fee for the new period. If you miss 6 months after the initial expiration date, you can still renew by paying the annual fee, and the renewal will be calculated based on the original expiration date of your license, not from the moment you choose to renew. If you require further clarifications on this, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>, and we will be happy to explain.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-perpetual-additional-costs" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container">
                            <p>No, we do not charge extra unless you want an additional service that we offer: professional support, custom development and consulting, training, or managed service.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-perpetual-refund" data-title="Can I request a refund after purchasing the license?">
                        <div class="container">
                            <p>No, all sales are final.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-perpetual-bulk-pricing" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container">
                            <p>Price reduction starts from 10 licenses. Discount tiers are as follows: 10–50 Edges — 10%, 51–100 Edges — 12%, above 100 Edges — 15%+ off the license cost regardless of the plan. Contact our <a href="https://thingsboard.io/docs/contact-us/">sales team</a> for bulk pricing options.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-perpetual-usageAndDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-instances" data-title="How many instances can I deploy with my perpetual license?">
                        <div class="container">
                            <p>The perpetual license package includes one Edge instance with an unlimited number of devices and assets.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-migration" data-title="Can I migrate from one server or Virtual machine to another using the same license?">
                        <div class="container">
                            <p>Yes, definitely! For that purpose, we made it possible to Activate/Deactivate instances on the License Server. To migrate between servers, the customer must deactivate its instance, install the software on the new server, and then use the already existing license secret. A backup of all data from the previous instance is necessary if the customer wants to continue utilizing the same environment after migration. Notice: the license check mechanism won't allow using ThingsBoard Edge on two or more servers simultaneously (unless you purchase two instances of the same subscription plan).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-limits" data-title="Are there any device, asset, user, etc., limits for perpetual licenses?">
                        <div class="container">
                            <p>No, there are no limits from a software perspective on the number of devices, assets, users, etc. The only limits you may encounter would be related to hardware capacity and the chosen architecture deployment mode. For more details, you can read our <a href="https://thingsboard.io/docs/pe/edge/edge-architecture/">documentation</a> or <a href="https://thingsboard.io/docs/contact-us/">contact</a> our team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-offline" data-title="Can I run offline?">
                        <div class="container">
                            <p>Partially. You can run it without an internet connection if you need to. The only connection required is to the ThingsBoard Server via gRPC and HTTP(s) for license validation.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-telemetry-storage" data-title="How is telemetry data stored in self-managed ThingsBoard Edge?">
                        <div class="container">
                            <p>ThingsBoard Edge supports PostgreSQL or PostgreSQL + Cassandra (Hybrid mode) for telemetry storage.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-multi-tenancy" data-title="Does ThingsBoard Edge support multi-tenancy?">
                        <div class="container">
                            <p>No, ThingsBoard Edge does not support multi-tenancy.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-perpetual-customer-charging" data-title="How to charge my customers?">
                        <div class="container">
                            <p>So far, the ThingsBoard platform does not provide a billing module to charge end customers. At the same time, the platform exposes the <a href="https://thingsboard.cloud/swagger-ui/#/subscription-controller/getTenantSubscriptionUsage">Subscription API</a> that can be used by external payment software to generate invoices.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-perpetual-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-security" data-title="Is my ThingsBoard instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but ThingsBoard provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-data-storage" data-title="Where is my ThingsBoard Edge data stored?">
                        <div class="container">
                            <p>Your data is stored locally on your own infrastructure.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-data-export" data-title="Can I export my data at any time?">
                        <div class="container">
                            <p>Yes, you can export your data using the ThingsBoard dashboard, APIs, or by creating a full database backup.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-perpetual-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-trial" data-title="Is there a trial version of the perpetual license?">
                        <div class="container">
                            <p>No, there is no trial option for perpetual licenses. To trial a self-managed system, you can use self-managed subscriptions.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-cancel" data-title="What happens if I cancel my perpetual license?">
                        <div class="container">
                            <p>Cancellation of the perpetual license means the license key will be removed from the License Server. Once the license key is removed, the ThingsBoard environment using this key will be stopped immediately.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-convert" data-title="Can I convert a trial instance into a perpetual license?">
                        <div class="container">
                            <p>Yes, you can convert your self-managed subscription to a perpetual license by purchasing the perpetual license and replacing the license key in the Edge configuration. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-refund" data-title="Do you offer refunds for perpetual license purchases?">
                        <div class="container">
                            <p>No, refunds are not offered for perpetual license purchases.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-edge-perpetual-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-support-level" data-title="What level of support is included with my perpetual license?">
                        <div class="container">
                            <p>We provide email response on any issue within 24 hours, if a separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with our team member.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-support-issues" data-title="What issues are included in license support?">
                        <div class="container">
                            <p>Access to the ThingsBoard Support Portal is available for perpetual license holders. Without the need for a separate support agreement, all support inquiries are seamlessly managed through a unified queue, ensuring efficient handling of your requests. Our support team is dedicated to providing an initial response within 24 hours to address your needs promptly.</p>
                            <p>The support service includes assistance with installation and migration for default deployments, as well as resolving any questions related to the platform's out-of-the-box functionalities, as detailed in our documentation. For specialized services such as consulting, code reviews, health assessments, or development projects, we offer tailored solutions to meet your specific requirements. Should your request involve additional expertise, our support engineers will guide you to the best resources to ensure your success.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-additional-support" data-title="Can I purchase additional support for my perpetual license?">
                        <div class="container">
                            <p>Yes, you can purchase additional services such as managed services, advanced SLAs, consultancy, development, and training. For more details, please contact <a href="https://thingsboard.io/docs/contact-us/">our sales</a> team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-24-7-support" data-title="Do you offer 24/7 support?">
                        <div class="container">
                            <p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-maintenance" data-title="Do you provide full maintenance services for ThingsBoard Edge deployed on my infrastructure?">
                        <div class="container">
                            <p>Yes, ThingsBoard offers full maintenance services for instances deployed on your infrastructure. These services can be customized based on your needs and are provided under an additional SLA, ensuring regular monitoring, updates, and issue resolution. For more details, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-perpetual-contact-support" data-title="How do I contact support?">
                        <div class="container">
                            <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are automatically added to the <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">ThingsBoard Support Portal</a> after purchasing a license.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-perpetual-installation-help" data-title="How can I get help with installation and setup?">
                        <div class="container">
                            <p>All perpetual license packages provide dedicated support with predefined response time and access to the ThingsBoard Support Portal. Our expert support team is available to assist you with system deployment by following our recommended installation methods and architecture, ensuring a smooth and efficient setup. For custom installation scripts or alternative deployment scenarios, additional support options are available, and you can <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to discuss your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
