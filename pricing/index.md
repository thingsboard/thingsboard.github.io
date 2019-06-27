---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing

---

<div class="pricing-header">
   <div class="pricing-hero">
      <div class="container">
        <div class="pricing-hero-content">
            <h1>Achieve your plan <span class="a-full-green">Deploy anywhere</span></h1>
        </div>
      </div>
   </div>
   <nav id="inner-navigation" class="inner-navigation">
     <ul id="menu-pricing-navigation-1" class="menu">
        <li id="menu-item-thingsboard-ce" class="menu-item">
            <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-ce')">Community Edition</a>
        </li>
        <li id="menu-item-thingsboard-pe" class="menu-item active">
            <a href="javascript:void(0);" onClick="activatePricingSection('thingsboard-pe')">Professional Edition</a>
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
                                <p>100% Open source</p>
                            </div>
                            <h4 class="pricing-square-price no-sign mb-0">
                                YES, IT'S FREE
                            </h4>
                            <a class="btn btn-full-green btn-pricing" href="/docs/user-guide/install/installation-options/">
                                Install
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item1">
                                Community support
                            </div><br>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div><br>
                            <div class="pricing-square-item">Unlimited software updates</div><br>
                            <div class="pricing-square-item">Ability to contribute</div>
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
 <div class="indicator text-center pt-2 pb-2">
                            <a class="btn" href="" target="blank">BECOME A PARTNER</a> 
 </div> 
 <div class="col-lg-12">
    <div class="solution-selector">
        <div class="solution active" data-toggle="#payAsYouGo">
            <input type="radio" class="magic-radio" name="pricing-radio-selector" id="PricingPayAsYouGo" value="Pricing Pay As You Go Details" checked>
            <label for="PricingPayAsYouGo">
                <div class="solution-icon-div d-inline-block">
                    <img src="/images/pricing/pay-as-you-go.png" alt="pay as you go icon" class="pay-as-you-go-icon d-inline">
                </div>
                <h2 class="d-none d-md-inline-block" data-faq-id="what-is-pay-as-you-go" data-faq-link-size="50%">Pay-as-you-go</h2>
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
                   <div class="col-lg-12">
                   <p>&nbsp;</p>
                        <div class="pricing-square-item text-center">
                            All subscription plans include <span class="a-full-green">unlimited</span> customers, dashboards, integrations, api calls, datapoints & messages  
                        </div>
                   </div>                    
               </div>
               <div class="row d-none d-lg-flex mb-4"></div>
               <div class="row justify-content-center">
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Maker</h2>
                            <div class="pricing-square-description">
                                <p>To become familiar with ThingsBoard PE features</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                10
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Up to 10 Devices</div>
                            <div class="pricing-square-item">and 10 Assets</div> 
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item1">
                                Community support
                            </div><br>
                            <div class="pricing-square-item">—</div><br>
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
                            <div class="pricing-square-item">Up to 100 Devices</div>
                            <div class="pricing-square-item"> and 100 Assets</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item1">
                                Community support
                            </div><br>
                            <div class="pricing-square-item"><span class="a-full-green">White-labeling</span></div><br>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Startup</h2>
                            <div class="pricing-square-description">
                                <p>For upcoming IoT Unicorns</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                199
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Up to 500 Devices</div>
                            <div class="pricing-square-item"> and 500 Assets</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item2">
                                Email support within 36 hours
                            </div><br>
                            <div class="pricing-square-item"><span class="a-full-green">White-labeling</span></div><br>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl mb-4">
                        <div class="pricing-square">
                            <h2>Business</h2>
                            <div class="pricing-square-description">
                                <p>The subscription is designed for established mid-level market players</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                299
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Up to 1000 Devices</div>
                            <div class="pricing-square-item"> and 1000 Assets</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item2">
                                Email support within 24 hours
                            </div><br>
                            <div class="pricing-square-item"><span class="a-full-green">White-labeling</span></div><br>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4 col-xl flex-xl-grow-0 mb-4">
                        <div class="pricing-square">
                            <h2>Enterprise</h2>
                            <div class="pricing-square-description">
                                <p>Consider youself a Fortune 500 company in the field? Subscribe this plan</p>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                500
                                <span>/Month</span>
                            </h4>
                            <div class="pricing-square-item">Unlimited number</div> 
                            <div class="pricing-square-item"> of Devices and Assets</div>
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                false,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item2">
                                Email support within 12 hours
                            </div><br>
                            <div class="pricing-square-item"> <span class="a-full-green">White-labeling</span></div><br>
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
                            <h2>Perpetual Fallback License</h2>
                            <div class="pricing-square-description">
                                <h3>Use your ThingsBoard instance forever</h3>
                            </div>
                            <h4 class="pricing-square-price mb-0">
                                2999
                            </h4>                  
                            <a class="btn btn-full-green btn-pricing" href="javascript:void(0);" 
                                onClick="getLicense(event,
                                true,
                                '127a2600-8ec4-11e9-88c4-2bcc77e2d2cd',
                                '26d44280-9337-11e9-8d13-8ba32b237cce')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="section3-item2">
                                Email support within 24 hours
                            </div><br>
                            <div class="pricing-square-item">1 year of software updates</div><br>
                            <div class="pricing-square-item">Unlimited Devices and Assets</div><br>
                            <div class="pricing-square-item">White-labeling</div><br>
                            <div class="pricing-square-item">Integrations feature</div><br>
                            <div class="pricing-square-item">Unlimited datapoints</div>
                            <div class="pricing-square-item">and messages</div><br>
                            <div class="pricing-square-item">Unlimited API calls</div><br>
                            <div class="pricing-square-item">
                                <p>&nbsp;</p>
                            </div>
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
        <br>
<div class="pi-accordion">
        <h3 id="licensing">Licensing</h3>    
        <div class="item" data-tag="h4" data-item-id="what-is-pay-as-you-go" data-title="What is &quot;Pay-as-you-go&quot; license?">
            <div class="container">
                <p>
                    Pay-as-you-go license is based on different subscription plans and represents a typical SaaS model. Each plan is usually limited by the amount of devices or assets that ThingsBoard instance will manage. The billing is being provided either monthly or yearly. The customer may put a sum of money in advance and this credits decrease while service is used. The same as pre-paid SIM-card using or VOD-service subscribing. 
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="what-is-perpetual" data-title="What is &quot;Perpetual&quot; license?">
            <div class="container">
                <p>
                    Perpetual license is a specific version of software, that you may use without an active subscription plan. Whenever purchasing perpetual fallback license, the customer gets one year of software updates included to constant use of the platform. ThingsBoard Inc. offers a discount for consequent years of updates. For more information proceed with "Rrequest a discount info" message via <a href="#">contact us</a> form.  
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="can-i-migrate" data-title="Can I migrate from subscription to Perpetual license?">
            <div class="container">
                <p>
                    Yes. One of the greatest features of ThingsBoard License Server is ability to change subscription plans or migrate from SaaS to perpetual and vice versa.  
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="cancel-subscription" data-title="Whenever I cancel the subscription, I'll loose my credits?">
            <div class="container">
                <p>
                Customers may manage their subscription plans: update or cancel them. Once the subscription is deleted before expiration, Stripe will keep the balance. After a certain time period (about an hour) positive Account due with the remain amount of credits will appear in Billing section of License portal. This sum is deducted from       
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
        <h3 id="section3">Section3</h3>
        <div class="item" data-tag="h4" data-item-id="section3-item1" data-title="Section3 Item1">
            <div class="container">
                <p>
                    Section3 Item1 description
                </p>    
            </div>    
        </div>
        <div class="item" data-tag="h4" data-item-id="section3-item2" data-title="Section3 Item2">
            <div class="container">
                <p>
                    Section3 Item2 description
                </p>    
            </div>    
        </div>
    </div>    
</div>
