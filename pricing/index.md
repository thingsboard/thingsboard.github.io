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
                <h3 data-faq-id="what-is-cloud" 
                    data-faq-link-size="70%">Cloud</h3>
            </div>
            <div id="Pricing_PE_SM" class="solution thingsboard-pe gtm_button" data-product-id="thingsboard-pe" onClick="activateProductSection('thingsboard-pe')">
                <h3 data-faq-id="difference" data-faq-link-size="70%">Self-managed</h3>
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
                <h3 data-faq-id="what-is-trenz-cloud" data-faq-link-size="70%">Cloud</h3>
            </div>
            <div id="Pricing_TA_SM"
                 data-solutionId="trendz-self-managed"
                 class="solution trendz-self-managed active defaultselection gtm_button"
                 data-product-id="trendz-self-managed"
                 onClick="activateProductSection('trendz-self-managed')">
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
                                <a id="Pricing_PE_Cloud_Prototype" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
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
                                <a id="Pricing_PE_Cloud_Startup" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 500 Devices</div>
                            <div class="pricing-square-item">Up to 500 Assets</div>
                            <div class="pricing-square-item">500 million <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
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
                                <a id="Pricing_PE_Cloud_Business" class="btn-blue btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Up to 1000 Devices</div>
                            <div class="pricing-square-item">Up to 1000 Assets</div>
                            <div class="pricing-square-item">1 billion <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
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
                                <a id="Pricing_PE_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
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
                            <div class="pricing-square-item">500 million <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
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
                            <div class="pricing-square-item">1 billion <span data-faq-id="data-points">data points</span><br> per month</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
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
                                <a id="Pricing_PE_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
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
            <h2>License package</h2>
        </div>
        <div class="col d-flex justify-content-end">
            <div class="solution-selector">
                <div id="Pricing_PE_SM_PayAsYouGo"
                     data-solutionId="pe-pay-as-you-go"
                     class="solution pay-as-you-go active defaultselection gtm_button"
                     data-toggle="#payAsYouGo"
                     data-description-toggle="#payAsYouGoHeader"
                     onClick="activateSolutionSection('pe-pay-as-you-go')">
                    <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div id="Pricing_PE_SM_Perpetual"
                     data-solutionId="pe-perpetual"
                     class="solution perpetual gtm_button"
                     data-toggle="#perpetual"
                     data-description-toggle="#perpetualHeader"
                     onClick="activateSolutionSection('pe-perpetual')">
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
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Basic support within <b>36 hours</b>
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
                        <div class="pricing-square-item" data-faq-id="subscription-support">
                            Basic support within <b>12 hours</b>
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
                        <h2>Standalone</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>A lifetime of control with a single-instance</p>
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
                        <div class="pricing-square-item">1 production instance</div>
                        <div class="pricing-square-item">1 development instance</div>
                        <div class="pricing-square-item">Unlimited Devices and Assets</div>
                        <div class="pricing-square-item">Integrations feature</div>
                        <div class="pricing-square-item">Unlimited datapoints and messages</div>
                        <div class="pricing-square-item">Unlimited API calls</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">Basic support within 24 hours</div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Cluster Kit</h2>
                        <div class="pricing-square-description" style="min-height: 50px;">
                            <p>Optimized for high availability</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $8,999
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
                        <div class="pricing-square-item">2 production instances</div>
                        <div class="pricing-square-item">2 development instances</div>
                        <div class="pricing-square-item">Unlimited Devices and Assets</div>
                        <div class="pricing-square-item">Integrations feature</div>
                        <div class="pricing-square-item">Unlimited datapoints and messages</div>
                        <div class="pricing-square-item">Unlimited API calls</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">Basic support within 12 hours</div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 col-gt-xl mb-4">
                    <div class="pricing-square">
                        <h2>Enterprise Bundle</h2>
                        <div class="pricing-square-description" style="min-height: 50px">
                            <p>Supercharge your IoT solution</p>
                        </div>
                        <h4 class="pricing-square-price mb-0">
                            $19,999
                        </h4>
                        <div class="row justify-content-center">
                            <a id="Pricing_PE_SM_Enterprise_Bundle" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/" target="_blank">Get your license</a> 
                        </div>
                        <div class="pricing-square-item"><b>2 ThingsBoard Cluster Kits</b></div>
                        <div class="pricing-square-item">1 Trendz perpetual license</div>
                        <div class="pricing-square-item">1 Trendz development license</div>
                        <div class="pricing-square-item">3 Edge perpetual licenses</div>
                        <div class="pricing-square-item"><b>White-labeling</b></div>
                        <div class="pricing-square-item" data-faq-id="subscription-support">Basic support within 12 hours</div>
                        <div class="pricing-square-item">1 year of software updates and support</div>
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
                <h2>License packages</h2>
            </div>
            <div class="col d-flex justify-content-end">
                <div class="solution-selector">
                    <div id="Pricing_TA_SM_PayAsYouGo"
                         data-solutionId="trendz-pay-as-you-go"
                         class="solution pay-as-you-go active defaultselection trendz-pay-as-you-go gtm_button" 
                         data-toggle="#trendzPayAsYouGo"
                         data-description-toggle="#trendzPayAsYouGoHeader" 
                         onClick="activateSolutionSection('trendz-pay-as-you-go')">
                        <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                    </div>
                    <div id="Pricing_TA_SM_Perpetual" 
                         data-solutionId="trendz-perpetual"
                         class="solution perpetual trendz-perpetual gtm_button" 
                         data-toggle="#trendzPerpetual"
                         data-description-toggle="#trendzPerpetualHeader" 
                         onClick="activateSolutionSection('trendz-perpetual')">
                        <h3 data-faq-id="what-is-perpetual" data-faq-link-size="70%">Perpetual</h3>
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
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item"><b>White-labeling</b></div>
                            <div class="pricing-square-item" data-faq-id="community-support">
                                Community support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
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
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item"><b>White-labeling</b></div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
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
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item"><b>White-labeling</b></div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
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
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item"><b>White-labeling</b></div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support within <b>12 hours</b>
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
            <div class="pricing-section trendz-pricing-cloud active">
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
                                <a id="Pricing_TA_Cloud_Maker" class="btn-blue btn-pricing gtm_button" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'maker')">
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
                                <a id="Pricing_TA_Cloud_Prototype" class="btn-blue btn-pricing gtm_button" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'prototype')">
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
                                <a id="Pricing_TA_Cloud_Startup" class="btn-blue btn-pricing gtm_button" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'startup')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
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
                                <a id="Pricing_TA_Cloud_Business" class="btn-blue btn-pricing gtm_button" href="#" onClick="openTrendzWizard(event, 'cloud-content', 'business')">
                                    Get Started
                                </a>
                            </div>
                            <div class="pricing-square-item">Anomalies detection</div> 
                            <div class="pricing-square-item">Predictive Analytics</div>
                            <div class="pricing-square-item">Calculated Fields</div>
                            <div class="pricing-square-item">Self-service Interface</div>
                            <div class="pricing-square-item">Advanced Visualizations</div>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
                                Basic support
                            </div>
                            <br>
                            <div>
                                <a href="/products/trendz/"><span class="a-full-green">Learn More</span></a>
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
                                Custom <span data-faq-id="calculate" data-faq-link-size="70%"></span>
                            </h4>
                            <div class="row justify-content-center">
                                <a id="Pricing_TA_Cloud_Enterprise" class="btn-blue btn-pricing gtm_button" href="/docs/contact-us/">
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
                    <h3 data-faq-id="what-is-pay-as-you-go" data-faq-link-size="70%">Pay-as-you-go</h3>
                </div>
                <div id="Pricing_Edge_Perpetual"
                     data-solutionId="edge-perpetual"
                     class="solution perpetual"
                     data-toggle="#perpetual"
                     data-description-toggle="#perpetualHeader"
                     onClick="activateSolutionSection('edge-perpetual')">
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
                            <button id="Pricing_Edge_PayAsYouGo_Nano" class="btn-blue btn-pricing gtm_button" 
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
                            <button id="Pricing_Edge_PayAsYouGo_Micro" class="btn-blue btn-pricing gtm_button"
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
                            <button id="Pricing_Edge_PayAsYouGo_Macro" class="btn-blue btn-pricing gtm_button"
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
                            <button id="Pricing_Edge_PayAsYouGo_Mega" class="btn-blue btn-pricing gtm_button"
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
                            <button id="Pricing_Edge_Perpetual_EdgePerpetualFallbackLicense" class="btn-blue btn-pricing gtm_button" 
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
                            Basic support within <b>24 hours</b>
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
    <h2 style="display: inline-block;margin-bottom: 24px;font-weight: 600;">Frequently asked questions</h2>
    <div class="faq-section-selector">
        <div class="faq-section-option active" id="faq-option-licensing" onClick="switchFaqSection('licensing', this)">Licensing</div>
        <div class="faq-section-option" id="faq-option-billing" onClick="switchFaqSection('billing', this)">Billing</div>
        <div class="faq-section-option" id="faq-option-cloud" onClick="switchFaqSection('cloud', this)">ThingsBoard Cloud</div>
        <div class="faq-section-option" id="faq-option-support" onClick="switchFaqSection('support', this)">Support</div>
    </div>
    <div id="FAQ" class="answers">
        <section class="community-edition active" id="faq-thingsboard-ce">
            <div id="faq-thingsboard-ce-licensing-section" class="pi-accordion active">
                <div class="item" data-tag="h4" data-item-id="any-fee-for-ce" data-title="Is there any fee for using the Community Edition?">
                    <div class="container">
                        <p>No, ThingsBoard Community Edition is a free-of-charge, open-source platform.</p>
                    </div>
                </div>
                <div class="item" data-tag="h4" data-item-id="ce-for-commercial" data-title="Can ThingsBoard Community Edition be used for commercial purposes?">
                    <div class="container">
                        <p>Yes, ThingsBoard Community Edition can be used for commercial purposes. You can develop and deploy IoT solutions based on the Community Edition as part of your business operations. It is distributed under the Apache 2.0 license, which allows commercial use without licensing fees. However, please note that the Community Edition does not include advanced features which are available in the Professional Edition to better support commercial needs.</p>
                    </div>
                </div>
                <div class="item" data-tag="h4" data-item-id="upgrade-ce-to-pe" data-title="Is it possible to upgrade the ThingsBoard Community Edition to a Professional Edition version without losing data or configurations?">
                    <div class="container">
                        <p>Yes, you can upgrade from ThingsBoard Community Edition to Professional Edition without losing telemetry data or configurations. The upgrade process preserves your existing setup, ensuring a seamless transition. However, please note that any custom modifications made directly to the source code of the Community Edition will be removed during the upgrade process.</p>
                    </div>
                </div>
            </div>
            <div id="faq-thingsboard-ce-billing-section" class="pi-accordion">
            </div>
            <div id="faq-thingsboard-ce-cloud-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="ce-cloud-limitations" data-title="Are there any limitations for your Community Edition cloud?">
                    <div class="container">
                        <p>
                            The Community Edition cloud (we call it <a href="https://demo.thingsboard.io">Live Demo</a>) has a storage quota. You can use your subscription as long as you need but your tenant will not accept more than 4M data points. 
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="ce-cloud-limitations" data-title="Can I migrate from Live Demo to ThingsBoard Cloud of a chosen region?">
                    <div class="container">
                        <p>
                            Our Cloud team is working on the migration button. So far, one cannot upgrade from a Live Demo to a ThingsBoard Cloud in a simple way. 
                        </p>    
                    </div>    
                </div>
            </div>
            <div id="faq-thingsboard-ce-support-section" class="pi-accordion">
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
                <div class="item" data-tag="h4" data-item-id="ce-support" data-title="What support can I get with the Community Edition?">
                    <div class="container">
                        <p>
                            Community Edition users receive community-level support by default. This support is free of charge and provided as a volunteer initiative by our team and other ThingsBoard contributors. Please note that support services are a business area of ThingsBoard, Inc., and while our engineers handle community support requests in their free time, there is no obligation for ThingsBoard Inc. to provide direct support.
                        </p>
                        <p>
                            We encourage you to explore our <a href="/docs/">documentation</a>, subscribe to our <a href="https://www.youtube.com/c/thingsboard" target ="blank">YouTube channel</a> for free <a href="https://www.youtube.com/watch?v=M0CaascgDmg&list=PLYEKB_XwLCZJ6T8RPLTjRwMw0eoabpEKO" target="blank">educational content</a>, and check out tutorials, samples, and guides.
                            You can also seek help through the ThingsBoard <a href="https://github.com/thingsboard/thingsboard/issues" target="blank">community on GitHub</a> (issues page), our <a href="https://groups.google.com/forum/#!forum/thingsboard" target="blank">Q&A forum</a> and <a href="https://stackoverflow.com/questions/tagged/thingsboard" target="blank">Stack Overflow</a>.   
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="ce-support" data-title="Can I purchase additional support from the ThingsBoard team while using the Community Edition?">
                    <div class="container">
                        <p>
                            Yes, you can purchase additional support and services. However, pay attention that the support scope is limited by the functionality available in the Community Edition. Tailor-made features of yours are out of support.
                        </p>
                    </div>    
                </div>
            </div>
        </section>
        <section class="professional-edition-cloud" id="faq-thingsboard-cloud">
            <div id="faq-thingsboard-cloud-licensing-section" class="pi-accordion active">
                <div class="item" data-tag="h4" data-item-id="migrate-from-cloud-to-self-managed" data-title="How can I migrate from a cloud subscription to a self-managed license?">
                    <div class="container">
                        <p>
                            To migrate from a cloud subscription to a self-managed license, you need to: <br><br>
                        </p>
                        <p>
                            <b>1.</b> Install ThingsBoard PE on your environment using the self-managed license key. <br>
                        </p>
                        <p>
                            <b>2.</b> Migrate telemetry data and application configurations to the newly installed ThingsBoard instance. <br><br>
                        </p>
                        <p>
                            We recommend using the Version control feature to safely transfer your configurations. Telemetry data export can be achieved via REST API. Herewith, the team works on the Export Data feature. Once available, this FAQ item will be updated.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="how-cancel-subscription" data-title="How can I cancel my subscription?">
                    <div class="container">
                        <p>
                            In order to terminate your ThingsBoard Cloud subscription, you have to be logged in as the tenant administrator user. Once done, go to Account settings (top right screen; behind three dots icon) — Profile tab — Delete account orange button. Press and follow the guidelines. Spoiler: later on, the subscription termination button will migrate to a Plan and Billing section to improve UX. 
                        </p>
                    </div>    
                </div>
            </div>
            <div id="faq-thingsboard-cloud-billing-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="How can I enable free trial?">
                    <div class="container">
                        <p>
                            Customer may <a href="https://thingsboard.cloud/signup" target="blank">signup on ThingsBoard Professional Edition Cloud</a> and get 30 days of free trial on Maker plan. 
                            30 days of seamless experience and the newest features, except white-labeling!
                        </p>
                    </div>
                </div>
                <div class="item" data-tag="h4" data-item-id="cannot-pay-by-card" data-title="I can not pay by card. Can I use a wire transfer instead?">
                    <div class="container">
                        <p>
                            Yes, you can request a wire transfer invoice from the <a href="https://thingsboard.io/docs/contact-us/" target="blank">ThingsBoard sales team</a> if you wish to pay for a 1-year subscription upfront.
                        </p>
                    </div>
                </div>
                <div class="item" data-tag="h4" data-item-id="additional-payment-besides-license" data-title="Is there an additional payment for the software use besides the license fee?">
                    <div class="container">
                        <p>
                            No, we do not have extra charges unless you want an additional service that we offer: 
                        </p>
                        <p>
                            professional support, Custom development and consulting, Training or Managed service.
                        </p>
                    </div>
                </div>
            </div>
            <div id="faq-thingsboard-cloud-cloud-section" class="pi-accordion">
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
                <div class="item" data-tag="h4" data-item-id="calculate" data-title="How is the Enterprise plan price calculated?">
                    <div class="container">
                        <p>
                            The ThingsBoard Enterprise plan price is determined based on resource usage, starting with a fixed base price and additional fees for extra resources. To receive a detailed price calculation, please contact our sales team by filling out the <a href="https://thingsboard.io/docs/contact-us/">"Contact us"</a> form on our website.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="api-limits" data-title="Are there any API Limits?">
                    <div class="container">
                        <p>
                        Yes, ThingsBoard Cloud subscriptions have Entity, API and Rate limits. See subscription <a href="/docs/paas/subscription/" target="blank">documentation</a> for more details.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="data-points" data-title="What is a data point?">
                    <div class="container">
                        <p>
                        Data point is a key-value pair that your device telemetry messages contain. For example, the message <i>{"temperature":42, "humidity": 60}</i> contains two data points.  
                        Each ThingsBoard Cloud subscription plan has a maximum number of data points that can be sent from all your devices per month. 
                        There are other <a href="/docs/paas/subscription/" target ="blank">important parameters</a> of the subscription.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="white-labeling" data-title="What is white-labeling?">
                    <div class="container">
                        <p>
                       ThingsBoard web interface allows you to configure your company or product logo and color scheme in 2 minutes with zero coding efforts and no service restart required. 
                       See feature <a href="/docs/user-guide/white-labeling/" target ="blank">documentation</a> for more details. ThingsBoard Cloud extends white-labeling feature with ability to configure own domain name easily. But currently it is not possible to connect third-party SMTP servers, notifications will be sent from our system. We plan to add this ability in future releases.
                       See <a href="/docs/paas/domains/" target ="blank">managing domain</a> for more details.
                        </p>  
                    </div>    
                </div>
            </div>
            <div id="faq-thingsboard-cloud-support-section" class="pi-accordion">
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
                <div class="item" data-tag="h4" data-item-id="policies" data-title="Refund and Delivery Policy">
                    <div class="container">
                        <p><b>Refund Policy</b><br></p>
                        <p>
                        The License fee is non-refundable, regardless of any circumstances. 
                        Customers may manage their subscription plans: update or cancel them. 
                        Once the subscription is deleted before expiration, Stripe will keep the balance. 
                        After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
                        This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.<br><br>
                        </p>
                        <p><b>Delivery Policy</b><br></p>
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
                <div class="item" data-tag="h4" data-item-id="subscription-support" data-title="What issues are included in basic support?">
                    <div class="container">
                        <p>
                            For StartUp, Business and Enterprise license subscriptions as well as Perpetual licensees we provide basic support via ticketing system on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with our team member.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="access-ticketing-system" data-title="How to access the Ticketing system?">
                    <div class="container">
                        <p>
                            Customers and Partners can access the <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Ticketing Portal</a> if they have an account there. Perpetual licensees and paid support service customers receive the authorisation. If you do not have an account there but need support, contact the <a href="https://thingsboard.io/docs/contact-us/">sales team</a>.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="add-domain-for-customers" data-title="How to add domains for my customers?">
                    <div class="container">
                        <p>
                            On ThingsBoard Cloud, regardless of the region, your customer entities cannot have dedicated domains unless you are on an Enterprise plan subscription.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="where-put-domain-certificate" data-title="Where can I put a domain certificate?">
                    <div class="container">
                        <p>
                            Custom certificates are applicable for the Enterprise Cloud subscription plan only. Please proceed with the corresponding request.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="iso-compliant" data-title="Are you ISO compliant?">
                    <div class="container">
                        <p>
                            The ThingsBoard Cloud is hosted in an IaaS asset compliant with multiple standards, including SOC II, and ISO 27001.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="where-soc-reports" data-title="Where can I find SOC reports?">
                    <div class="container">
                        <p>
                            Please reach out to our sales team via <a href="/docs/contact-us/" target="blank">Contact us</a> or raise a relevant support ticket if you have access to a <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Ticketing Portal</a>.
                        </p>
                    </div>    
                </div>
            </div>
        </section>
        <section class="professional-edition-self-managed" id="faq-thingsboard-pe">
            <div id="faq-thingsboard-pe-licensing-section" class="pi-accordion active">
                <div class="item" data-tag="h4" data-item-id="what-is-pay-as-you-go" data-title="What is &quot;Pay-as-you-go&quot; license?">
                    <div class="container">
                        <p>Pay-as-you-go license is based on different subscription plans and represents a typical SaaS model. Each plan is usually limited by the number of devices or assets that ThingsBoard instance will manage. The billing is being provided either monthly or yearly. Your credit card will be charged once per billing period, at the beginning of the corresponding period.</p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="what-is-perpetual" data-title="What is &quot;Perpetual&quot; license??">
                    <div class="container">
                        <p>Perpetual license is a license that allows you to use specific version of software, without an active subscription to it. Whenever you purchase a perpetual license package (Standalone or Cluster Kit or Enterprise bunddle) you get one year of software updates included.</p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="recieve-self-managed-license" data-title="What does it mean to get the license?">
                    <div class="container">
                        <p>
                            Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a href="https://thingsboard.io/products/license-server/">License Portal</a> account. Using this license key, you can deploy and run the system by following our detailed <a href="https://thingsboard.io/docs/user-guide/install/pe/installation-options/">installation guides</a>.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="servers-pay-as-you-go" data-title="How many servers can I have with the Pay-as-you-go license?">
                    <div class="container">
                        <p>
                            The licensing is service-based. A single-instance license subscription  allows you to run one platform copy at a time. On the License portal, next to your license key, you can see if the license key is in use and how many ThingsBoard PE servers you can run simultaneously. By default, you should see 0/1. Once the platform is activated, the License details will change to 1/1.    
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="what-is-standalone" data-title="What is a Standalone?">
                    <div class="container">
                        <p>
                            The Standalone is a perpetual license package that includes license keys, allowing you to use a specific version of the software without the need for an active subscription. This package permits the deployment of one production instance and one development instance. <br><br>
                        </p>
                        <p>
                            When you purchase a Standalone, it includes one year of software updates for included keys. You can purchase additional updates if required. The typical cost for a one-year update package is 1,199 USD, which covers updates for both the production and development instances.<br>
                        </p>
                        <p>
                           <b>Example 1:</b> <br> Let's assume you purchased one license for ThingsBoard v3.6.2 in December (28th) 2023 and received an update to ThingsBoard v3.8.1 in October 2024. This means you can continue using this ThingsBoard v3.8.1 instance forever. You can also migrate to different hardware without issues. <br> <br>
                        </p>
                        <p>
                           <b>Example 2:</b> <br> Let's assume you purchased one license for ThingsBoard v3.6.2 in December (28th) 2023 and received an update to ThingsBoard v3.8.1 in October 2024. This means you can continue using this ThingsBoard v3.8.1 instance forever. You can also migrate to different hardware without issues. Later, in December 2024 (31st of December)  we released v3.9.0 In order to get the v3.9.0 update, you will need to purchase an additional year of software updates for ThingsBoard PE which will cost 1,199 USD. However, you can continue using v3.8.1 without updates.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="difference-production-development" data-title="What is the difference between Production and Development Instance?">
                    <div class="container">
                        <p>
                            A Standalone includes one production and one development instance (key per instance). The production instance is used for live environments and has no watermarks, while the development instance, meant for testing and staging, features a watermark in the UI indicating <b>DEVELOPMENT MODE</b>.         
                        </p>    
                    </div>    
                </div>  
                <div class="item" data-tag="h4" data-item-id="purchase-development-inst-license-separately" data-title="Can I purchase a Development license separately?">
                    <div class="container">
                        <p>
                            Development licenses can only be purchased separately by owners of Standalone or Cluster  kit. To request an additional development license, please contact the ThingsBoard sales team through the <a href="https://thingsboard.io/docs/contact-us/">Contact Us</a> page.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="what-is-cluster-kit" data-title="What is a Cluster Kit?">
                    <div class="container">
                        <p>
                            A Cluster Kit is a perpetual package that includes 4 license keys, enabling you to deploy ThingsBoard Professional Edition in a clustered mode with licenses for both production and development environments.        
                        </p>
                        <p>
                            When you purchase a Cluster Kit, it includes one year of software updates. Additional updates can be purchased as needed. The typical cost for a one-year update package is 2,399 USD, covering updates for all production and development instances.
                        </p>
                    </div>    
                </div>    
                <div class="item" data-tag="h4" data-item-id="can-run-offline" data-title="Can I run offline?">
                    <div class="container">
                        <p>
                            By default, the platform requires active Internet access or at least access to license.thingsboard.io:443 from your host machine. If Offline access is a must, please <a href="https://thingsboard.io/docs/contact-us/">contact us</a> to proceed with Offline licensing.
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
                <div class="item" data-tag="h4" data-item-id="can-i-migrate-from-cloud-to-on-premise" data-title="Can I migrate from external cloud providers to on-premise server using the same license?">
                    <div class="container">
                        <p>
                            Yes, definitely! For that purpose we made a possibility to Activate/Deactivate instance. In order to migrate between servers, customer must deactivate its instance, install the software on new server and then use already existing license secret. Backup of all data from previous instance is necessary if customer wants to continue utilizing same environment after migration. Notice: license check mechanism won't allow using ThingsBoard Professional Edition on two or more servers simultaneously (unless you purchase two instances of the same subscription plan).   
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
            </div>
            <div id="faq-thingsboard-pe-billing-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="additional-payment-besides-license" data-title="Is there an additional payment for the software use besides the license fee?">
                    <div class="container">
                        <p>
                            No, we do not have extra charges unless you want an additional service that we offer: Professional support, Custom development and consulting, Training or Managed service. 
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="why-pay-if-perpetual" data-title="If the license is Perpetual, why do we pay renewals?">
                    <div class="container">
                        <p>
                            The so-called license ‘renewal’ does not refer to the license itself, but rather corresponds to a Basic support service and access to the Latest releases. Each type of Perpetual license unlocks Basic support service and access to newer versions for 1 year. After the initial year, one can prolong this option.
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
                <div class="item" data-tag="h4" data-item-id="charge-my-customers" data-title="How to charge my customers?">
                    <div class="container">
                        <p>
                            So far, the ThingsBoard platform does not provide a billing module to charge end customers. At the same time, the platform exposes the Subscription API that can be used by the external payment software to generate invoices.      
                        </p>    
                    </div>    
                </div>
            </div>
            <div id="faq-thingsboard-pe-cloud-section" class="pi-accordion">
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
            </div>
            <div id="faq-thingsboard-pe-support-section" class="pi-accordion">
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
                <div class="item" data-tag="h4" data-item-id="policies" data-title="Refund and Delivery Policy">
                    <div class="container">
                        <p><b>Refund Policy</b><br></p>
                        <p>
                        The License fee is non-refundable, regardless of any circumstances. 
                        Customers may manage their subscription plans: update or cancel them. 
                        Once the subscription is deleted before expiration, Stripe will keep the balance. 
                        After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
                        This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.<br><br>
                        </p>
                        <p><b>Delivery Policy</b><br></p>
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
                <div class="item" data-tag="h4" data-item-id="activate-server-behind-proxy" data-title="How to activate ThingsBoard if the server is behind a proxy?">
                    <div class="container">
                        <p>
                            ThingsBoard platform can run behind an HTTP Proxy server. To have it, you must add your proxy server properties to your configuration files (*.conf for Ubuntu, *.yml for WinOS, docker-compose.yml for Docker installation):
                        </p>
                        <p>
                            <i>Dtb.proxy.system=true</i><br/>
                            <i>Dhttp.proxyHost=YOUR_PROXY_HOST</i><br/>
                            <i>Dhttp.proxyPort=YOUR_PROXY_PORT</i><br/>
                            <i>Dhttps.proxyHost=YOUR_PROXY_HOST</i><br/>
                            <i>Dhttps.proxyPort=YOUR_PROXY_PORT</i><br/>
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="subscription-support" data-title="What issues are included in basic support?">
                    <div class="container">
                        <p>
                            For StartUp, Business and Enterprise license subscriptions as well as Perpetual licensees we provide basic support via ticketing system on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with our team member.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="access-ticketing-system" data-title="How to access the Ticketing system?">
                    <div class="container">
                        <p>
                            Customers and Partners can access the <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Ticketing Portal</a> if they have an account there. Perpetual licensees and paid support service customers receive the authorisation. If you do not have an account there but need support, contact the <a href="https://thingsboard.io/docs/contact-us/">sales team</a>.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="pentest-results" data-title="Do you provide pentest results?">
                    <div class="container">
                        <p>
                            No, we do not do it for many reasons. Firstly, as a platform vendor, we can not disclose detected vulnerabilities of certain versions of the platform as the disclosure affects the safety of our existing customers who use that particular version. Secondly, the self-declared pentest is less trustworthy as it is in the vendor’s interest to come up with clean results and you never know whether to believe them or not. Lastly, the penetration test makes more sense to be conducted over a ready-to-use end client software/application to define weak spots (if any). It is the Licensee’s responsibility to order independent testing. Having said that, ThingsBoard platform gives one a tool to develop solutions. You may consider the platform a building that a banker rents to establish an office, vault, etc. Now you can see that testing a building itself does not make much sense. But things change when it hosts a bank (or whatever tenant).
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="logged-fixes-matrix" data-title="Where can I find the logged vulnerability fixes matrix: version + list of fixes?">
                    <div class="container">
                        <p>
                            Please stay tuned with our Release notes. Critical vulnerabilities or security issues are mentioned in separate line items. Less threatful vulnerabilities appear as a single record (“Vulnerability fixes”) stating that, at the release date, the version is free of known HIGH and some MEDIUM CVEs.
                        </p>
                    </div>
                </div>
                <div class="item" data-tag="h4" data-item-id="license-related-issues" data-title="License-related issues">
                    <div class="container">
                        <p>
                            1. Why do I get the "Unsupported software version" error during the upgrade?
                        </p><br>
                        <p>
                            This error message indicates that your Perpetual license key is not suitable for the platform version you are trying to upgrade to. To recall, the Perpetual license unlocks one-year access to latest releases: you can easily go with every newer version of the platform published during 365 days since your license key creation date. In one year, without prolongation (paid service), the key becomes locked for further platform versions.
                        </p><br><br>
                        <p>
                            2. My license is corrupted, and the server is down. I see an INSTANCE CAPACITY EXCEEDED (107) error. What a hack?
                        </p><br>
                        <p>
                            In the <b>How many servers can I have with the Pay-as-you-go license?</b> question we explained our licensing approach. Upon start your platform copy and the key that activates it create a fingerprint that we call an “instance ID”. This ID is reported to our online licensing servers. The ID you can see under the Manage instances section on your particular license key Details page. If the key is associated with a certain server instance ID or IDs, an attempt to start another server process or container above the quota will be blocked with the INSTANCE_CAPACITY_EXCEEDED error. You must unbundle the key from your previous instance ID to get a new service up and running. To unlink the license key, go to Manage instances section, choose the ID and press Deactivate or Delete icon. But, before that, make sure that the then-current instance is no longer needed and you will not affect your Production system.
                        </p><br><br>
                        <p>
                            3. I can not start the service, the license does not work. I see Failed to init license client error in my thingsboard.log. What to do?
                        </p><br>
                        <p>
                            This type of error usually means that the service does not have permissions to write on disk/target folder or, simply, the hosting machine if out of disk space.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="trendz-analytics-cloud" id="faq-trendz-cloud">
            <div id="faq-trendz-cloud-licensing-section" class="pi-accordion active">
                <div class="item" data-tag="h4" data-item-id="tb-trendz-different-licenses" data-title="Can ThingsBoard and Trendz Analytics have different license types?">
                    <div class="container">
                        <p>
                            No, ThingsBoard and Trendz Analytics must have the same license type to function correctly. Trendz Analytics automatically detects all devices and assets from your ThingsBoard instance, along with their relationships, and analyzes all entities without the option to select specific ones. You can not select specific devices or assets; all entities will be analyzed and added to the "business entity" column.         
                        </p>
                    </div>
                </div>
            </div>
            <div id="faq-trendz-cloud-billing-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="cancel-subscription" data-title="When I cancel the subscription, do I loose my credits?">
                    <div class="container">
                        <p>
                        Customers may manage their subscription plans: update or cancel them. Once the subscription is deleted before expiration, Stripe will keep the balance. After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.      
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="access-trenz-cloud-testing" data-title="How can I request access for Trendz Cloud testing?">
                    <div class="container">
                        <p>
                            Trendz Cloud testing is available upon request (excluding Trendz Cloud Maker). To apply, please fill out the <a href="https://thingsboard.io/docs/contact-us/?subject=ThingsBoard%20Products">Contact us</a> form.    
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="additional-payment-besides-license" data-title="Is there an additional payment for the software use besides the license fee?">
                    <div class="container">
                        <p>
                            No, we do not have extra charges unless you want an additional service that we offer: Professional support, Custom development and consulting, Training or Managed service.    
                        </p>    
                    </div>    
                </div>
            </div>
            <div id="faq-trendz-cloud-cloud-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="what-is-trenz-cloud" data-title="What is Trendz Cloud?">
                    <div class="container">
                        <p>
                            Trendz Cloud is a fully managed, scalable, and fault-tolerant platform for your IoT applications with combined subscription plans based on a monthly fee which already includes hosting costs.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="calculate" data-title="How is the Enterprise plan price calculated?">
                    <div class="container">
                        <p>
                            The ThingsBoard Enterprise plan price is determined based on resource usage, starting with a fixed base price and additional fees for extra resources. To receive a detailed price calculation, please contact our sales team by filling out the <a href="https://thingsboard.io/docs/contact-us/">"Contact us"</a> form on our website.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="difference-pay-as-you-go-trendz-cloud" data-title="What is the difference between Pay-as-you-go option and Trendz Cloud?">
                    <div class="container">
                        <p>
                            Pay-as-you-go subscription plans include license fees only with no hosting services, which means that you have to deploy Trendz on an external cloud (AWS, Azure, GCP, etc), or on the local server (On-premise). This means you have to pay separately for the infrastructure and manage Trendz server. Trendz Cloud allows you to use Trendz platform as a service on Trendz environment.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="data-points" data-title="What is a data point?">
                    <div class="container">
                        <p>
                        Data point is a key-value pair that your device telemetry messages contain. For example, the message <i>{"temperature":42, "humidity": 60}</i> contains two data points.  
                        Each ThingsBoard Cloud subscription plan has a maximum number of data points that can be sent from all your devices per month. 
                        There are other <a href="/docs/paas/subscription/" target ="blank">important parameters</a> of the subscription.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="trendz-sm-with-tbc" data-title="Is it possible to use ThingsBoard Cloud with a Trendz Self-managed instance or conversely?">
                    <div class="container">
                        <p>
                            ThingsBoard Cloud and Trendz Self-managed are separate deployment options and are not directly compatible. If you’re using ThingsBoard Cloud, your Trendz version will also be Cloud-based. Trendz Cloud is bundled with ThingsBoard Cloud and can not be purchased separately.
                        </p> 
                    </div>    
                </div>
            </div>
            <div id="faq-trendz-cloud-support-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="community-support" data-title="What does community support mean?">
                    <div class="container">
                        <p>
                            Community support is a free initiative provided by the Trendz team and other contributors as a voluntary effort. While our engineers often assist with community requests during their free time, this support comes with no formal obligation from the Trendz team. We highly encourage users to consult the documentation for guidance.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="policies" data-title="Refund and Delivery Policy">
                    <div class="container">
                        <p><b>Refund Policy</b><br></p>
                        <p>
                        The License fee is non-refundable, regardless of any circumstances. 
                        Customers may manage their subscription plans: update or cancel them. 
                        Once the subscription is deleted before expiration, Stripe will keep the balance. 
                        After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
                        This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.<br><br>
                        </p>
                        <p><b>Delivery Policy</b><br></p>
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
                <div class="item" data-tag="h4" data-item-id="subscription-support" data-title="What issues are included in basic support?">
                    <div class="container">
                        <p>
                            For StartUp, Business and Enterprise license subscriptions as well as Perpetual licensees we provide basic support via ticketing system on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with our team member.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="access-ticketing-system" data-title="How to access the Ticketing system?">
                    <div class="container">
                        <p>
                            Customers and Partners can access the <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Ticketing Portal</a> if they have an account there. Perpetual licensees and paid support service customers receive the authorisation. If you do not have an account there but need support, contact the <a href="https://thingsboard.io/docs/contact-us/">sales team</a>.
                        </p>
                    </div>    
                </div>
            </div>
        </section>
        <section class="trendz-analytics-self-managed" id="faq-trendz-self-managed">
            <div id="faq-trendz-self-managed-licensing-section" class="pi-accordion active">
                <div class="item" data-tag="h4" data-item-id="what-is-pay-as-you-go" data-title="What is &quot;Pay-as-you-go&quot; license?">
                    <div class="container">
                        <p>Pay-as-you-go license is based on different subscription plans and represents a typical SaaS model. Each plan is usually limited by the number of devices or assets that ThingsBoard instance will manage. The billing is being provided either monthly or yearly. Your credit card will be charged once per billing period, at the beginning of the corresponding period.</p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="what-is-perpetual" data-title="What is &quot;Perpetual&quot; license?">
                    <div class="container">
                        <p>
                            A perpetual license allows you to use a specific Trendz Analytics version indefinitely, and one year of software updates and customer portal access. After the first year, updates and customer portal access can be purchased separately at 40% of the full perpetual license price.                    
                            <br><br><b>Example 1</b>: You purchased a Trendz v1.11 perpetual license in June 2024. In June 2025, we released v1.12, which you can update to since it’s still your one-year update period. You can continue using v1.12 forever.
                            <br><br><b>Example 2</b>: You purchased v1.11 in June 2024. In August 2025, we released v1.12. However, since your update period ended in June 2025, you can not access v1.12 without purchasing an additional update package for 40% of the full perpetual license price.  
                            <br><br><b>Example 3</b>: You purchased a perpetual license in June 2024, and your access to updates and the customer portal ended in June 2025. If you decide to renew the updates in September 2025 for one year, the renewal will also cover the gap from June to September 2025, making the updates valid until June 2026.                    
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="can-i-migrate" data-title="Can I migrate from one subscription to another?">
                    <div class="container">
                        <p>
                            Yes. One of the greatest features of <a href="/products/license-server/">ThingsBoard License Server</a> is the ability to change subscription plans. Now it is as simple as that. The flow is: Subscription — Update Plan — Choose a plan.   
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="migrate-plan-to-perpetual" data-title="Is it possible to jump from subscription to perpetual?">
                    <div class="container">
                        <p>
                            Customer may cancel the subscription and purchase a perpetual license. The remaining costs from terminated subscription plan (if remain) will be deducted from Total cost for the perpetual license. Keep in mind: perpetual license is non-cancelable. So, customer can not stop using perpetual license and rely on total price for any subscription plan to be decreased.         
                        </p>    
                    </div>    
                </div>  
                <div class="item" data-tag="h4" data-item-id="tb-trendz-different-licenses" data-title="Can ThingsBoard and Trendz Analytics have different license types?">
                    <div class="container">
                        <p>
                            No, ThingsBoard and Trendz Analytics must have the same license type to function correctly. Trendz Analytics automatically detects all devices and assets from your ThingsBoard instance, along with their relationships, and analyzes all entities without the option to select specific ones. You can not select specific devices or assets; all entities will be analyzed and added to the "business entity" column.         
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="devices-exceeds-1000" data-title="What to do if the count of devices and assets exceeds 1,000?">
                    <div class="container">
                        <p>
                            You have two options: purchase an Enterprise Trendz cloud subscription or a Perpetual Trendz license. For more details, please <a href="https://thingsboard.io/docs/contact-us/?subject=ThingsBoard%20Products">Contact us</a> or reach out to your account manager.        
                        </p>    
                    </div>    
                </div>    
            </div>
            <div id="faq-trendz-self-managed-billing-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="trendz-trial-enable" data-title="Do you offer a free trial for Trendz Analytics?">
                    <div class="container">
                        <p>
                            Yes, we provide a 30-day free trial for Trendz Analytics, available for Cloud and Self-Managed users. Please note that Trendz Cloud Maker is not eligible for the trial. Send us your request on <a href="https://thingsboard.io/docs/contact-us/?subject=ThingsBoard%20Products">Contact us</a>.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="test-trendz-with-tb-perpetual" data-title="How to test Trendz Analytics with ThingsBoard Perpetual license?">
                    <div class="container">
                        <p>
                            We provide access to Trendz Analytics for ThingsBoard Perpetual license users. To request this license, please fill out the <a href="https://thingsboard.io/docs/contact-us/?subject=ThingsBoard%20Products">Contact us</a> form.   
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="cancel-subscription" data-title="When I cancel the subscription, do I lose my credits?">
                    <div class="container">
                        <p>
                        Customers may manage their subscription plans: update or cancel them. Once the subscription is deleted before expiration, Stripe will keep the balance. After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.      
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="trendz-trial-ends" data-title="What happens after the trial ends?">
                    <div class="container">
                        <p>
                            If you don’t cancel your subscription before the trial ends, you will be charged for the next month’s subscription or license renewal. Remember to cancel manually if you don’t plan to continue using the product.    
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="trenz-ce-pe" data-title="Does Trendz work with both ThingsBoard PE and CE?">
                    <div class="container">
                        <p>
                            Yes, Trendz can be integrated with both ThingsBoard Professional Edition (PE) and ThingsBoard Community Edition (CE). It is fully compatible with either version, offering analytics and visualization capabilities across both platforms.    
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="additional-payment-besides-license" data-title="Is there an additional payment for the software use besides the license fee?">
                    <div class="container">
                        <p>
                            No, we do not have extra charges unless you want an additional service that we offer: Professional support, Custom development and consulting, Training or Managed service.    
                        </p>  
                    </div>    
                </div>
            </div>
            <div id="faq-trendz-self-managed-cloud-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="difference" data-title="What is the difference between Pay-as-you-go option and Trendz Cloud?">
                    <div class="container">
                        <p>
                            Pay-as-you-go subscription plans include license fees only with no hosting services, which means that you have to deploy Trendz on an external cloud (AWS, Azure, GCP, etc), or on the local server (On-premise). This means you have to pay separately for the infrastructure and manage Trendz server. Trendz Cloud allows you to use Trendz platform as a service on Trendz environment.
                        </p>  
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="trendz-sm-with-tbc" data-title="Is it possible to use ThingsBoard Cloud with a Trendz Self-managed instance or conversely?">
                    <div class="container">
                        <p>
                            ThingsBoard Cloud and Trendz Self-managed are separate deployment options and are not directly compatible. If you’re using ThingsBoard Cloud, your Trendz version will also be Cloud-based. Trendz Cloud is bundled with ThingsBoard Cloud and can not be purchased separately.
                        </p> 
                    </div>    
                </div>
            </div>
            <div id="faq-trendz-self-managed-support-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="community-support" data-title="What does community support mean?">
                    <div class="container">
                        <p>
                            Community support is a free initiative provided by the Trendz team and other contributors as a voluntary effort. While our engineers often assist with community requests during their free time, this support comes with no formal obligation from the Trendz team. We highly encourage users to consult the documentation for guidance.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="policies" data-title="Refund and Delivery Policy">
                    <div class="container">
                        <p><b>Refund Policy</b><br></p>
                        <p>
                        The License fee is non-refundable, regardless of any circumstances. 
                        Customers may manage their subscription plans: update or cancel them. 
                        Once the subscription is deleted before expiration, Stripe will keep the balance. 
                        After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
                        This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.<br><br>
                        </p>
                        <p><b>Delivery Policy</b><br></p>
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
                <div class="item" data-tag="h4" data-item-id="subscription-support" data-title="What issues are included in basic support?">
                    <div class="container">
                        <p>
                            For StartUp, Business and Enterprise license subscriptions as well as Perpetual licensees we provide basic support via ticketing system on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with our team member.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="access-ticketing-system" data-title="How to access the Ticketing system?">
                    <div class="container">
                        <p>
                            Customers and Partners can access the <a href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Ticketing Portal</a> if they have an account there. Perpetual licensees and paid support service customers receive the authorisation. If you do not have an account there but need support, contact the <a href="https://thingsboard.io/docs/contact-us/">sales team</a>.
                        </p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="trendz-which-server" data-title="Which server should Trendz Analytics be installed on?">
                    <div class="container">
                        <p>
                            Trendz can be installed on the same server as your ThingsBoard instance or on a separate server, depending on your preferences and infrastructure.
                        </p>    
                    </div>    
                </div>
            </div>
        </section>
        <section class="edge" id="faq-thingsboard-edge">
            <div id="faq-thingsboard-edge-licensing-section" class="pi-accordion active">
                <div class="item" data-tag="h4" data-item-id="what-is-pay-as-you-go" data-title="What is &quot;Pay-as-you-go&quot; license?">
                    <div class="container">
                        <p>Pay-as-you-go license is based on different subscription plans and represents a typical SaaS model. Each plan is usually limited by the number of devices or assets that ThingsBoard Edge instance will manage. The billing is being provided either monthly or yearly. Your credit card will be charged once per billing period, at the beginning of the corresponding period.</p>
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="what-is-perpetual" data-title="What is &quot;Perpetual&quot; license?">
                    <div class="container">
                        <p>
                            Perpetual fallback license is a license that allows you to use specific version of software, without an active subscription to it. 
                            Whenever you purchase a perpetual fallback license you get one year of software updates included. 
                            You can purchase additional updates if required. 
                            Typical price for one year update package is 119 USD.
                            <br><br><b>Example 1</b>: Let's assume you purchased one license for ThingsBoard Edge v3.7 in August 2024 and received an update to ThingsBoard Edge v4.0 in April 2025.
                            This means you can continue using this ThingsBoard v4.0 instance forever. You can also migrate to different hardware without issues.
                            <br><br><b>Example 2</b>: Let's assume you purchased one license for ThingsBoard Edge v3.7 in August 2024 and received an update to ThingsBoard Edge v4.0 in April 2025.
                            This means you can continue using this ThingsBoard v4.0 instance forever. Later, in September 2025 we released v4.1. 
                            In order to get the v4.1 update, you will need to purchase an additional year of software updates for ThingsBoard Edge PE which will cost 119 USD. 
                            However, you can continue using v4.0 without updates.
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
                <div class="item" data-tag="h4" data-item-id="thingsboard-edge-discount" data-title="Can we have a discounted price for ThingsBoard Edges in case of bulk purchase?">
                    <div class="container">
                        <p>
                            We do understand that you may need multiple edge computing services. 
                            <br>Price reduction starts from 10 licenses. 
                            <br>Discount tiers are as follows: 10–50 Edges — <b>10%</b>, 51–100 Edges — <b>12%</b>, above 100 Edges — <b>15%</b> off the license cost regardless the plan.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="thingsboard-edge-compatibility" data-title="What ThingsBoard Edge compatibility means?">
                    <div class="container">
                        <p>
                            ThingsBoard Edge Community Edition is able to connect only to ThingsBoard Community Edition server.
                            <br>ThingsBoard Edge Professional Edition is able to connect only to ThingsBoard Professional Edition server (it can be <a href="https://thingsboard.cloud" target="blank">ThingsBoard Cloud</a> or on-premise instances).
                            <br>ThingsBoard Edge Community Edition <b>can not</b> be connected to ThingsBoard Professional Edition and vise-verse.
                        </p>    
                    </div>
                </div>
                <div class="item" data-tag="h4" data-item-id="thingsboard-edge-unlim-devices" data-title="What ThingsBoard Edge unlimited Devices and Assets means?">
                    <div class="container">
                        <p>
                            Unlimited number devices and assets - there is no any soft limits on creating devices and assets on the edge side. 
                            <br><b>But</b> in real case deployment there are couple additional factors, that must be considered to be able to host a lot of devices on edge side - <b>hardware, speed of internet connection and gRPC channel bound limits</b>.
                            <br>Edge <b>hardware</b> must be powerful enough to process messages from 'unlimited' number of devices and assets. 
                            <br>Additionally, <b>speed of internet connection</b> between ThingsBoard Edge and ThingsBoard server must be fast to deliver huge amount of data from 'unlimited' number of devices and assets.
                            <br>And last, but not least -  payload size and messages rate should be taken into consideration as well - <b>gRPC channel bound limits</b> affects messages delivery rate.
                        </p>
                    </div>
                </div>
            </div>
            <div id="faq-thingsboard-edge-billing-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="How can I enable free trial?">
                    <div class="container">
                        <p>
                            Once Edge instance is created on PE Server we are providing it with <b>Default</b> Edge License Key.
                            Up to 5 devices or assets, 30 days of seamless experience and the newest features, except white-labeling!
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="trial-enable" data-title="Are there any saving options?">
                    <div class="container">
                        <p>
                            You can get discounts on Edge licenses based on number of licenses you purchased. 
                            <br>Price reduction starts from 10 licenses. 
                            <br>Discount tiers are as follows: 10–50 Edges — <b>10%</b>, 51–100 Edges — <b>12%</b>, above 100 Edges — <b>15%</b> off the license cost regardless the plan.   
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
            </div>
            <div id="faq-thingsboard-edge-cloud-section" class="pi-accordion">
                <div class="item" data-tag="h4" data-item-id="can-edge-be-deployed-to-cloud" data-title="Can Edge be connected to ThingsBoard Cloud?">
                    <div class="container">
                        <p>
                        Yes, you can connect Edge, that is deployed on remote locations to ThingsBoard Cloud and do management of the Edge from there.
                        </p>
                    </div>
                </div>
            </div>
            <div id="faq-thingsboard-edge-support-section" class="pi-accordion">
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
                <div class="item" data-tag="h4" data-item-id="subscription-support" data-title="What issues are included in basic support?">
                    <div class="container">
                        <p>
                            For StartUp, Business and Enterprise license subscriptions as well as Perpetual licensees we provide basic support via ticketing system on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with our team member.
                        </p>    
                    </div>    
                </div>
                <div class="item" data-tag="h4" data-item-id="optional-support" data-title="What does this optional support for ThingsBoard Edge mean?">
                    <div class="container">
                        <p>
                        It means, that Edge support is not bundled to the license. For now, we provide basic support for customers with more than 25 edge licenses of any type.
                        </p>    
                    </div>    
                </div>        
                <div class="item" data-tag="h4" data-item-id="policies" data-title="Refund and Delivery Policy">
                    <div class="container">
                        <p><b>Refund Policy</b><br></p>
                        <p>
                        The License fee is non-refundable, regardless of any circumstances. 
                        Customers may manage their subscription plans: update or cancel them. 
                        Once the subscription is deleted before expiration, Stripe will keep the balance. 
                        After a certain time period (about an hour) positive Amount due with the remain credits will appear in Billing section of License portal. 
                        This sum is deducted from Total fee whenever particular customer purchase a new plan or a perpetual license.<br><br>
                        </p>
                        <p><b>Delivery Policy</b><br></p>
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
        </section>
    </div>
</div>
