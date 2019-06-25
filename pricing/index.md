---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing

---

<div class="pricing-header">
   <div class="pricing-hero">
      <div class="container">
        <div class="pricing-hero-content">
            <h1>Choose your plan</h1>
            <div class="pricing-hero-description">
              <p>Deploy anywhere, scale as you run, pay for the solution that fits your needs</p>  
            </div>
        </div>
      </div>
   </div>
   <nav id="inner-navigation" class="inner-navigation">
     <ul id="menu-pricing-navigation-1" class="menu">
        <li id="menu-item-thingsboard-ce" class="menu-item">
            <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-ce')">ThingsBoard Community Edition</a>
        </li>
        <li id="menu-item-thingsboard-pe" class="menu-item active">
            <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-pe')">ThingsBoard Professional Edition</a>
        </li>
     </ul>
   </nav> 
</div>
<section id="thingsboard-ce" class="pricing-content" style="display: none;">
    <div class="pricing-div">
        <div class="container">
            <div class="pricing-section pricing-community active" id="community">
               <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div class="pricing-square">
                            <h2>Community Edition</h2>
                            <div class="pricing-square-description">
                                <p>100% Open Source</p>
                            </div>
                            <h4 class="pricing-square-price no-sign mb-0">
                                FREE
                            </h4>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Unlimited software updates</div>
                            <a class="btn btn-full-green btn-pricing" href="/docs/user-guide/install/installation-options/">
                                Install
                            </a>
                            <div class="pricing-square-item">
                                Community support
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>     
</section>
<section id="thingsboard-pe" class="pricing-content">
    <div class="solution-selector">
        <div class="solution active" data-toggle="#payAsYouGo">
            <input type="radio" class="magic-radio" name="pricing-radio-selector" id="PricingPayAsYouGo" value="Pricing Pay As You Go Details" checked>
            <label for="PricingPayAsYouGo">
                <div class="solution-icon-div d-inline-block">
                    <img src="/images/pricing/pay-as-you-go.png" alt="pay as you go icon" class="pay-as-you-go-icon d-inline">
                </div>
                <h2 class="d-none d-md-inline-block" data-faq-id="what-is-pay-as-you-go" data-faq-link-size="50%">Pay as you go</h2>
            </label>
        </div>
        <div class="solution" data-toggle="#perpetual">
            <input type="radio" class="magic-radio" name="pricing-radio-selector" id="PricingPerpetual" value="Pricing Perpetual Details">
            <label for="PricingPerpetual">
                <div class="solution-icon-div d-inline-block">
                    <img src="/images/pricing/perpetual.png" alt="perpetual icon" class="perpetual-icon d-inline">
                </div>
                <h2 class="d-none d-md-inline-block" data-faq-id="what-is-perpetual" data-faq-link-size="50%">Perpetual</h2>
            </label>
        </div>
    </div>
    <div class="pricing-div">
        <div class="container">
            <div class="pricing-section pricing-pay-as-you-go active" id="payAsYouGo">
               <div class="row d-none d-lg-flex mb-4">
                   <div class="col-lg-12">
                        <div class="indicator gray-bg text-white text-center pt-2 pb-2">
                            SUBSCRIPTION PLANS
                        </div>
                   </div>                   
               </div>
               <div class="row justify-content-center">
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description">
                                <p>The subscription is designed for PoCs and prototyping</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                10
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item" data-faq-id="section1-item3">Up to 10 Devices and Assets</div>
                            <div class="pricing-square-item">No White-labeling</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get the license
                            </a>
                            <div class="pricing-square-item">
                                Community support
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Prototype</h2>
                            <div class="pricing-square-description">
                                <p>The subscription is designed for PoCs and prototyping</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                99
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Up to 100 Devices and Assets</div>
                            <div class="pricing-square-item">Advanced White-labeling</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get the license
                            </a>
                            <div class="pricing-square-item">
                                Community support
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>
                            <div class="pricing-square-description">
                                <p>The subscription is designed for PoCs and prototyping</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                199
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Up to 500 Devices and Assets</div>
                            <div class="pricing-square-item">Advanced White-labeling</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get the license
                            </a>
                            <div class="pricing-square-item">
                                Email support within 72 hours
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Business</h2>
                            <div class="pricing-square-description">
                                <p>The subscription is designed for PoCs and prototyping</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                299
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Up to 1000 Devices and Assets</div>
                            <div class="pricing-square-item">Advanced White-labeling</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get the license
                            </a>
                            <div class="pricing-square-item">
                                Email support within 48 hours
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl flex-xl-grow-0 mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description">
                                <p>The subscription is designed for PoCs and prototyping</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                500
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Advanced White-labeling</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get the license
                            </a>
                            <div class="pricing-square-item">
                                Email support within 24 hours
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            <div class="pricing-section pricing-perpetual" id="perpetual">
               <div class="row d-none d-lg-flex mb-4">
                   <div class="col-lg-12">
                        <div class="indicator gray-bg text-white text-center pt-2 pb-2">
                            LICENSE PACKAGES
                        </div>
                   </div>                   
               </div>
               <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-4 mb-4">
                        <div class="pricing-square">
                            <h2>Perpetual Fullback License<br/>& year of updates</h2>
                            <div class="pricing-square-description">
                                <p>Use your ThingsBoard instance forever</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                2999
                            </h4>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div>
                            <div class="pricing-square-item">Advanced White-labeling</div>
                            <div class="pricing-square-item">Includes 1 year of software updates</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                true,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get the license
                            </a>
                            <div class="pricing-square-item">
                                Email support within 24 hours
                            </div>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</section>

<div class="container faq-content">
    
    <h2 id="faq" class="text-center">Frequently asked questions</h2>
    
    <br/>
    
    <div class="pi-accordion">
        <h3 id="licensing">Licensing</h3>    
        <div class="item" data-tag="h4" data-item-id="what-is-pay-as-you-go" data-title="What is &quot;Pay as you go&quot; license?">
            <div class="container">
                <p>
                    Pay as you go license description
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="what-is-perpetual" data-title="What is &quot;Perpetual&quot; license?">
            <div class="container">
                <p>
                    Perpetual license description
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="section1-item3" data-title="Section1 Item3">
            <div class="container">
                <p>
                    Section1 Item3 description
                </p>    
            </div>    
        </div>
        <h3 id="section2">Section2</h3>
        <div class="item" data-tag="h4" data-item-id="section2-item1" data-title="Section2 Item1">
            <div class="container">
                <p>
                    Section2 Item1 description
                </p>    
            </div>    
        </div>
    </div>    
</div>
