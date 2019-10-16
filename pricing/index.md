---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing

---

<div class="pricing-header">
   <div class="pricing-hero">
      <div class="container">
        <div class="pricing-hero-content">
            <h1>Get your product  <span class="a-full-green">Deploy anywhere</span></h1>
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
                            <div class="pricing-square-item" data-faq-id="community-support">
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
 <div class="text-center pt-4 pb-4">
    <a class="btn btn-full-green btn-pricing" href="/docs/contact-us/?subject=Partnership">Become a partner</a> 
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
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '7ef31a80-a18e-11e9-8e16-03828ff5271c')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="community-support">
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
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '0e236dc0-a196-11e9-8e16-03828ff5271c')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="community-support">
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
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '8ac6d190-a197-11e9-8e16-03828ff5271c')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
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
                                <p>For established mid-level market players with mature IoT approach</p>
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
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                'd82185c0-a197-11e9-8e16-03828ff5271c')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
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
                                '20be6f50-a18e-11e9-8e16-03828ff5271c',
                                '34530df0-a198-11e9-8e16-03828ff5271c')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
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
                                '90b6c9b0-a198-11e9-8e16-03828ff5271c',
                                '4c711b60-a199-11e9-8e16-03828ff5271c')">
                                Get your license
                            </a>
                            <div class="pricing-square-item" data-faq-id="subscription-support">
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
                    Customer may still use <a href="https://cloud.thingsboard.io" target="blank">ThingsBoard Professional Edition Live Demo</a> for that. 
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
                For StartUp, Business and Enterprise licensees as well as Perpetual licensees we provide email response on any issue within certain amount of time, if separate support agreement is not signed. Solution time depends on issue severity and may require a meeting with out team member
                </p>    
            </div>    
        </div>
    </div>    
</div>
