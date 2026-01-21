---
layout: pricing
title: Pricing
description: ThingsBoard Products Pricing
defaultActivePricingSection: thingsboard-pe-options

---

<div class="container top">
    <div class="pricing-header">
        <div class="pricing-hero">
            <div class="pricing-hero-content">
                <h1>ThingsBoard Products Pricing</h1>
            </div>
        </div>
        <nav id="inner-navigation" class="inner-navigation">
            <ul id="menu-pricing-navigation-1" class="menu">
                <li id="menu-item-thingsboard-pe-options" class="menu-item tb-logo">
                    <a id="Pricing_PE" href="javascript:void(0);" class="gtm_button" onClick="activatePricingSection('thingsboard-pe-options', true)">ThingsBoard</a>
                </li>
                <li id="menu-item-tbmq-options" class="menu-item tb-logo">
                    <a id="Pricing_TBMQ" href="javascript:void(0);" class="gtm_button" onClick="activatePricingSection('tbmq-options', true)">TBMQ</a>
                </li>
            </ul>
        </nav>
    </div>
    <div id="thingsboard-pe-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector product-selector-outlined">
            <div id="Pricing_CE"
                 class="solution thingsboard-ce gtm_button"
                 data-product-id="thingsboard-ce"
                 onClick="activateProductSection('thingsboard-ce')">
                <h3 id="Pricing_CE" class="gtm_button" data-faq-id="what-is-tb-ce" data-faq-tooltip="Community Edition is the free, open-source starting point—perfect for fast pilots and proof-of-value. Start small, validate quickly, and scale up when you’re ready."
                    data-faq-link-size="70%">Community Edition</h3>
            </div>
            <div id="Pricing_PE_Cloud"
                 class="solution thingsboard-cloud active defaultselection gtm_button"
                 data-product-id="thingsboard-cloud"
                 onClick="activateProductSection('thingsboard-cloud')">
                <h3 id="Pricing_PE_Cloud" class="gtm_button" data-faq-id="tb-cloud-definition" data-faq-tooltip="Public Cloud is fully managed ThingsBoard—built for speed. We handle infrastructure, upgrades, and reliability so your team can focus on shipping IoT solutions faster."
                    data-faq-link-size="70%">Public Cloud</h3>
            </div>
            <div id="Pricing_PE_PrivateCloud"
                 class="solution thingsboard-private-cloud gtm_button"
                 data-product-id="thingsboard-private-cloud"
                 onClick="activateProductSection('thingsboard-private-cloud')">
                <h3 id="Pricing_PE_PrivateCloud" class="gtm_button" data-faq-id="tb-private-cloud-what-does-thingsboard-private-cloud-stand-for" data-faq-tooltip="Private Cloud is a dedicated, isolated ThingsBoard Professional Edition cluster run by us for you. You get enterprise-grade control and security—without the ops overhead."
                    data-faq-link-size="70%">Private Cloud</h3>
            </div>
            <div id="Pricing_PE_SM" class="solution thingsboard-pe gtm_button" data-product-id="thingsboard-pe" onClick="activateProductSection('thingsboard-pe')">
                <h3 id="Pricing_PE_SM" class="gtm_button" data-faq-id="pe-pay-as-you-go-self-managed-definition" data-faq-link-size="70%" data-faq-tooltip="Self-managed lets you run ThingsBoard on your own infrastructure (on-prem or cloud). Ideal when you need full environment control and prefer to manage operations in-house.">Self-managed</h3>
            </div>
        </div>
    </div>
    <div id="tbmq-options" class="select-product-content justify-content-center align-items-center" style="display: none;">
        <div class="product-selector product-selector-outlined">
            <div id="Pricing_TBMQ_CE"
                 class="solution thingsboard-ce tbmq-ce gtm_button"
                 data-product-id="tbmq-ce"
                 onClick="activateProductSection('tbmq-ce')">
                <h3 id="Pricing_TBMQ_CE" class="gtm_button" data-faq-id="what-is-tbmq-ce"
                    data-faq-link-size="70%">Community Edition</h3>
            </div>
            <div id="Pricing_TBMQ_PE"
                 class="solution thingsboard-pe tbmq-pe active defaultselection gtm_button"
                 data-product-id="tbmq-pe"
                 onClick="activateProductSection('tbmq-pe')">
                <h3 id="Pricing_TBMQ_PE" class="gtm_button" data-faq-id="tbmq-payg-sm-definition"
                    data-faq-link-size="70%">Self-managed</h3>
            </div>
            <div id="Pricing_TBMQ_PrivateCloud"
                 class="solution thingsboard-private-cloud tbmq-private-cloud gtm_button"
                 data-product-id="tbmq-private-cloud"
                 onClick="activateProductSection('tbmq-private-cloud')">
                <h3 id="Pricing_TBMQ_PrivateCloud" class="gtm_button" data-faq-id="tbmq-stand-for"
                    data-faq-link-size="70%">Private Cloud</h3>
            </div>
        </div>
    </div>
</div>

<div id="thingsboard-ce" class="pricing-content" style="display: none;">
    <div class="pricing-div">
        <div class="container">
            <div class="pricing-section pricing-community always-display active" id="community">
                <div class="crd-container">
                    <div class="crd">
                        <h3>Your free ticket to IoT</h3>
                        <p>Get started with Community Edition (CE): a free, open-source (Apache 2.0) IoT platform. It provides a powerful, scalable, multi-tenant solution for collecting, processing, visualizing, and managing your IoT data and devices with maximum agility.</p>
                        <ul>
                            <li>Unlimited devices and assets</li>
                            <li>Unlimited software updates</li>
                            <li>Ability to contribute</li>
                            <li>Community support</li>
                        </ul>
                        <a class="button btn-pricing gtm_button" href="/docs/user-guide/install/installation-options/">
                            Install
                            <span class="visually-hidden">Thingsboard Community Edition</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="thingsboard-cloud" class="pricing-content no-padding-bottom" style="display: none;">
    <div class="container no-padding">
        <div class="pricing-content-header">
            <div id="northAmericaHeader" class="pricing-content-description">
                <h2>Subscription plans</h2>
                <div class="pricing-content-details">
                    All subscription plans include hosting and email costs.
                </div>
            </div>
            <div id="europeHeader" class="pricing-content-description">
                <h2>Subscription plans</h2>
                <div class="pricing-content-details">
                    All subscription plans include hosting and email costs.
                </div>
            </div>
            <div class="col d-flex justify-content-end">
                <div class="toggle-container">
                    <div class="billing-toggle solution-selector">
                        <span style="width: 117px" id="Pricing_PE_Cloud_NorthAmerica" data-solutionId="cloud-north-america" data-toggle="#northAmerica" data-description-toggle="#northAmericaHeader" class="label-text selected solution north-america">North America</span>
                        <label class="switch">
                            <input onclick="activateServerSection(event)" type="checkbox" id="regionSelect">
                            <span class="slider"></span>
                        </label>
                        <span style="width: 42px" id="Pricing_PE_Cloud_Europe" data-solutionId="cloud-europe" data-toggle="#europe" data-description-toggle="#europeHeader" class="label-text solution europe">Europe</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-cloud active" id="northAmerica">
                <div class="cards-row">
                    <div class="pricing-square">
                        <h2>Free</h2>
                        <div class="pricing-square-description">
                            <p>Start exploring features</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $0
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Maker" class="button secondary btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                Start Free
                            </a>
                        </div>
                        <div class="pricing-square-item">5 devices</div>
                        <div class="pricing-square-item">5 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">10M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get help through our community channel <a href='https://github.com/thingsboard/thingsboard/issues' target='_blank'>on GitHub</a>">
                            Community support
                        </div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Prototype</h2>
                        <div class="pricing-square-description">
                            <p>For PoCs and MVPs</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $49
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Startup" class="button secondary btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">50 devices</div>
                        <div class="pricing-square-item">50 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">50M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get help through our community channel <a href='https://github.com/thingsboard/thingsboard/issues' target='_blank'>on GitHub</a>">
                            Community support
                        </div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square popular">
                        <span class="popular-badge">POPULAR</span>
                        <h2>Pilot</h2>
                        <div class="pricing-square-description">
                            <p>For upcoming IoT Unicorns</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $149
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Prototype" class="button btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">100 devices</div>
                        <div class="pricing-square-item">100 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">100M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get access to our official support desk for product questions and troubleshooting—so you can resolve issues faster and keep your rollout on track.">
                            Help desk
                        </div>
                        <div class="pricing-square-item highlight" data-faq-id="tb-cloud-white-labeling">White labeling</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Startup</h2>
                        <div class="pricing-square-description">
                            <p>Defined long term projects</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $399
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Business" class="button secondary btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">500 devices</div>
                        <div class="pricing-square-item">500 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">500M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Priority help desk
                        </div>
                        <div class="pricing-square-item highlight" data-faq-id="tb-cloud-white-labeling" data-faq-tooltip="White labeling lets you brand the platform as your own—use your logo, colors, and custom domain for a polished, client-ready experience that strengthens trust and keeps your brand front and center.\n You can add more devices anytime. After the 1,000 included devices, each additional device is $0.30 per month—so you can scale anytime.">White labeling</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Business</h2>
                        <div class="pricing-square-description">
                            <p>Built for scalable IoT growth</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $749
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Business" class="button secondary btn-pricing gtm_button" href="https://thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">1 000 devices</div>
                        <div class="pricing-square-item">1 000 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">1B data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Priority help desk
                        </div>
                        <div class="pricing-square-item highlight" data-faq-id="tb-cloud-white-labeling" data-faq-tooltip="White labeling lets you brand the platform as your own—use your logo, colors, and custom domain for a polished, client-ready experience that strengthens trust and keeps your brand front and center.\n You can add more devices anytime. After the 1,000 included devices, each additional device is $0.30 per month—so you can scale anytime.">White labeling</div>
                        <div class="pricing-square-item plus-icon highlight" data-faq-id="tb-cloud-exceed-plan-limits">$0.30 per extra device</div>
                    </div>
                    <div class="pricing-square additional">
                        <h2 class="no-margin">Require dedicated infrastructure for unique enterprise needs?</h2>
                        <button onclick="switchToPrivateCloud()" id="see_private_cloud_options" class="button gtm_button">See Private Cloud Options</button>
                    </div>
                </div>
            </div>
            <div class="pricing-section pricing-cloud" id="europe">
                <div class="cards-row">
                    <div class="pricing-square">
                        <h2>Free</h2>
                        <div class="pricing-square-description">
                            <p>Start exploring features</p>
                        </div>
                        <h4 class="pricing-square-price">
                            €0
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Maker" class="button secondary btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                Start Free
                            </a>
                        </div>
                        <div class="pricing-square-item">5 devices</div>
                        <div class="pricing-square-item">5 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">10M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get help through our community channel <a href='https://github.com/thingsboard/thingsboard/issues' target='_blank'>on GitHub</a>">
                            Community support
                        </div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Prototype</h2>
                        <div class="pricing-square-description">
                            <p>For PoCs and MVPs</p>
                        </div>
                        <h4 class="pricing-square-price">
                            €45
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Prototype" class="button secondary btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">50 devices</div>
                        <div class="pricing-square-item">50 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">50M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get help through our community channel <a href='https://github.com/thingsboard/thingsboard/issues' target='_blank'>on GitHub</a>">
                            Community support
                        </div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square popular">
                        <span class="popular-badge">POPULAR</span>
                        <h2>Pilot</h2>
                        <div class="pricing-square-description">
                            <p>For upcoming IoT Unicorns</p>
                        </div>
                        <h4 class="pricing-square-price">
                            €145
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Startup" class="button btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">100 devices</div>
                        <div class="pricing-square-item">100 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">100M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Help desk
                        </div>
                        <div class="pricing-square-item highlight" data-faq-id="tb-cloud-white-labeling">White labeling</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Startup</h2>
                        <div class="pricing-square-description">
                            <p>Defined long term projects</p>
                        </div>
                        <h4 class="pricing-square-price">
                            €385
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Business" class="button secondary btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">500 devices</div>
                        <div class="pricing-square-item">500 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">500M data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Priority help desk
                        </div>
                        <div class="pricing-square-item highlight" data-faq-id="tb-cloud-white-labeling">White labeling</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Business</h2>
                        <div class="pricing-square-description">
                            <p>Built for scalable IoT growth</p>
                        </div>
                        <h4 class="pricing-square-price">
                            €725
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_Cloud_Business" class="button secondary btn-pricing gtm_button" href="https://eu.thingsboard.cloud/signup">
                                Get started
                            </a>
                        </div>
                        <div class="pricing-square-item">1 000 devices</div>
                        <div class="pricing-square-item">1 000 assets</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-faq-tooltip="Data points/month is your monthly telemetry allowance. One data point = one measurement (one key/value). You can buy extra Traffic pack anytime to scale up. For full definitions, see the Plans definition <a target='_blank' href='/docs/paas/subscriptions/'>page</a>.">1B data points/month</div>
                        <div class="pricing-square-item" data-faq-id="tb-cloud-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Priority help desk
                        </div>
                        <div class="pricing-square-item highlight" data-faq-id="tb-cloud-white-labeling">White labeling</div>
                        <div class="pricing-square-item plus-icon highlight" data-faq-id="tb-cloud-exceed-plan-limits">€0.30 per extra device</div>
                    </div>
                    <div class="pricing-square additional">
                        <h2 class="no-margin">Require dedicated infrastructure for unique enterprise needs?</h2>
                        <button onclick="switchToPrivateCloud()" id="see_private_cloud_options" class="button gtm_button">See Private Cloud Options</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="additional-content">
            <div class="plan-calculator-block md-hide">
                <div class="text">
                    <h2 class="no-margin">Require dedicated infrastructure <br> for unique enterprise needs?</h2>
                </div>
                <button onclick="switchToPrivateCloud()" id="see_private_cloud_options" class="button gtm_button">See Private Cloud Options</button>
            </div>
        </div>
        <div class="add-ons" data-product-name="public-cloud"></div>
        <div class="top-ups-section">
            <div class="top-ups-header">
                <h2>Top-ups</h2>
                <p>Boost capacity beyond your plan's limits to scale on demand and avoid hard caps.</p>
            </div>
            <div class="top-ups-content">
                <div class="top-ups-column">
                    <h3>Entities</h3>
                    <div class="top-ups-list">
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Extra Device pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="15">$15</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Devices</span>
                                    <span class="detail-value">+50 Devices</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Assets</span>
                                    <span class="detail-value">+50 Assets</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Extra Customer pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="10">$10</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Customers</span>
                                    <span class="detail-value">+10 Customers</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Users</span>
                                    <span class="detail-value">+10 Users</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Extra Integration pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="10">$10</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Integrations</span>
                                    <span class="detail-value">+1 Integration</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Converters</span>
                                    <span class="detail-value">+3 Converters</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Extra Calculated Field</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="5">$5</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Max Calculated Fields per entity</span>
                                    <span class="detail-value">+1 Calculated Field</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="top-ups-column">
                    <h3>API calls</h3>
                    <div class="top-ups-list">
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Traffic pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="5">$5</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Transport messages</span>
                                    <span class="detail-value">+2.5M Transport messages</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Transport data points</span>
                                    <span class="detail-value">+5M Transport data points</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Compute pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="25">$25</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Rule engine executions</span>
                                    <span class="detail-value">+5M Rule engine executions</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">JS function executions</span>
                                    <span class="detail-value">+1M JS function executions</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Storage pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="10">$10</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Data points storage days</span>
                                    <span class="detail-value">+1B Data points storage days</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Alarm pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="1">$1</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Alarms created</span>
                                    <span class="detail-value">+1000 Alarms created</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>Email pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="1">$1</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">Emails</span>
                                    <span class="detail-value">+1000 Emails</span>
                                </div>
                            </div>
                        </div>
                        <div class="top-up-item">
                            <div class="top-up-header">
                                <div class="top-up-title">
                                    <span>SMS pack</span>
                                    <svg class="chevron-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12.5L10 7.5L15 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="top-up-price" data-price="15">$15</div>
                            </div>
                            <div class="top-up-details">
                                <div class="detail-row">
                                    <span class="detail-label">SMS</span>
                                    <span class="detail-value">+100 SMS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="thingsboard-private-cloud" class="pricing-content" style="display: none;">
    <div class="container">
        <div class="pricing-content-header">
            <div class="pricing-content-description always-display active">
                <h2>Choose your plan</h2>
                <div class="pricing-content-details">
                    All-inclusive hosting and infrastructure, so you can focus on building your solutions.
                </div>
            </div>
            <div class="toggle-container">
                <div class="billing-toggle">
                    <span class="label-text selected">Monthly</span>
                    <label class="switch">
                        <input onclick="switchPrice('thingsboard-private-cloud')" type="checkbox" id="billingSwitch">
                        <span class="slider"></span>
                    </label>
                    <span class="label-text">Annual</span>
                </div>
                <div class="bottom-text">Save 10% on annual plans</div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section always-display active" id="monthly">
                <div class="cards-row flex-square">
                    <div class="pricing-square popular">
                        <span class="popular-badge">POPULAR</span>
                        <h2>Launch</h2>
                        <div class="pricing-square-description">
                            <p>Suitable for pilots and early stage deployments.</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $1 499
                            <span>/month</span>
                        </h4>
                        <h4 class="pricing-square-price hidden">
                            $1 349
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_PrivateCloud_Launch" class="button btn-pricing gtm_button" href="/docs/contact-us/?subject=Private%20Cloud&pcorder&message=I%20am%20interested%20in%20Launch%20plan%20for%20Private%20Cloud">
                                Get Started
                                <span class="visually-hidden"> to discuss Launch plan of ThingsBoard Private Cloud</span>
                            </a>
                        </div>
                        <div class="pricing-square-item highlight">5 000 devices included</div>
                        <div class="pricing-square-item">99.9% uptime guarantee</div>
                        <div class="pricing-square-item" data-faq-id="tb-private-cloud-how-are-datapoints-defined-and-metered" data-faq-tooltip="Up to 50,000 msg/min sustained (all protocols + integrations). A message = telemetry / RPC / attributes / downlink. Telemetry: 1 key/value = 1 data point; messages without measurements count as 1.">50 000 msg/minute</div>
                        <div class="pricing-square-item" data-faq-id="tb-private-cloud-what-telemetry-storage-is-included-and-what-data-consumes-it" data-faq-tooltip="Includes 500 GB to store your platform data (telemetry, attributes, events, files). Near the limit: prune old data, add storage, or upgrade plan.">500 GB of storage included</div>
                        <div class="pricing-square-item plus-icon highlight" data-faq-id="tb-private-cloud-what-happens-if-i-exceed-my-included-device-limit" data-faq-tooltip="You can add more devices anytime. After 5,000 included devices, extra devices are $0.10 per device per month.">$0.10 per extra device</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Growth</h2>
                        <div class="pricing-square-description">
                            <p>Perfect for fast-growing deployments — adds capacity as you expand.</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $2 199
                            <span>/month</span>
                        </h4>
                        <h4 class="pricing-square-price hidden">
                            $1 979
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_PrivateCloud_Growth" class="button secondary btn-pricing gtm_button" href="/docs/contact-us/?subject=Private%20Cloud&pcorder&message=I%20am%20interested%20in%20Growth%20plan%20for%20Private%20Cloud">
                                Get Started
                                <span class="visually-hidden"> to discuss Growth plan of ThingsBoard Private Cloud</span>
                            </a>
                        </div>
                        <div class="pricing-square-item highlight">25 000 devices included</div>
                        <div class="pricing-square-item">99.9% uptime guarantee </div>
                        <div class="pricing-square-item" data-faq-id="tb-private-cloud-how-are-datapoints-defined-and-metered" data-faq-tooltip="Up to 100,000 msg/min sustained (all protocols + integrations). A message = telemetry/RPC/attributes/downlink. Telemetry: 1 key/value = 1 data point; messages without measurements count as 1.">100 000 msg/minute</div>
                        <div class="pricing-square-item" data-faq-id="tb-private-cloud-what-telemetry-storage-is-included-and-what-data-consumes-it" data-faq-tooltip="Includes 1 TB to store your platform data (telemetry, attributes, events, files). Near the limit: prune old data, add storage, or upgrade plan.">1 TB of storage included</div>
                        <div class="pricing-square-item plus-icon highlight" data-faq-id="tb-private-cloud-what-happens-if-i-exceed-my-included-device-limit" data-faq-tooltip="You can add more devices anytime. After 25,000 included devices, extra devices are $0.09 per device per month.">$0.09 per extra device</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Scale</h2>
                        <div class="pricing-square-description">
                            <p>Designed for mission-critical, high-scale workloads.</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $3 999
                            <span>/month</span>
                        </h4>
                        <h4 class="pricing-square-price hidden">
                            $3 599
                            <span>/month</span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_PrivateCloud_Scale" class="button secondary btn-pricing gtm_button" href="/docs/contact-us/?subject=Private%20Cloud&pcorder&message=I%20am%20interested%20in%20Scale%20plan%20for%20Private%20Cloud">
                                Get Started
                                <span class="visually-hidden"> to discuss Scale plan of ThingsBoard Private Cloud</span>
                            </a>
                        </div>
                        <div class="pricing-square-item highlight">50 000 devices included</div>
                        <div class="pricing-square-item">99.95% uptime guarantee</div>
                        <div class="pricing-square-item" data-faq-id="tb-private-cloud-how-are-datapoints-defined-and-metered" data-faq-tooltip="Up to 500,000 msg/min sustained (all protocols + integrations). A message = telemetry/RPC/attributes/downlink. Telemetry: 1 key/value = 1 data point; messages without measurements count as 1.">500 000 msg/minute</div>
                        <div class="pricing-square-item" data-faq-id="tb-private-cloud-what-telemetry-storage-is-included-and-what-data-consumes-it" data-faq-tooltip="Includes 2 TB to store your platform data (telemetry, attributes, events, files). Near the limit: prune old data, add storage, or upgrade plan.">2 TB of storage included</div>
                        <div class="pricing-square-item plus-icon highlight" data-faq-id="tb-private-cloud-what-happens-if-i-exceed-my-included-device-limit" data-faq-tooltip="You can add more devices anytime. After 50,000 included devices, extra devices are $0.08 per device per month.">$0.08 per extra device</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Enterprise</h2>
                        <div class="pricing-square-description">
                            <p>Tailored architecture, pricing, and SLAs to fit your business.</p>
                        </div>
                        <h4 class="pricing-square-price always-display">
                            Custom <span data-faq-id="tb-private-cloud-what-features-are-unique-to-the-enterprise-plan" data-faq-link-size="70%" data-faq-tooltip="Enterprise pricing built around your scale. Share your devices, msg/min, and retention and we’ll right-size the architecture and quote the best-fit package."></span>
                        </h4>
                        <div>
                            <a id="Pricing_PE_PrivateCloud_Enterprise" class="button secondary btn-pricing gtm_button" href="/docs/contact-us/?subject=Private%20Cloud&message=I%20am%20interested%20in%20Enterprise%20plan%20for%20Private%20Cloud">
                                Contact Us
                                <span class="visually-hidden"> to discuss Enterprise plan of ThingsBoard Private Cloud</span>
                            </a>
                        </div>
                        <div class="pricing-square-item highlight">100 000 devices included</div>
                        <div class="pricing-square-item">Custom SLA</div>
                        <div class="pricing-square-item">Unlimited message rate</div>
                        <div class="pricing-square-item">Unlimited storage</div>
                        <div class="pricing-square-item plus-icon highlight" data-faq-id="tb-private-cloud-what-happens-if-i-exceed-my-included-device-limit" data-faq-tooltip="Need more than 100,000 devices? Extra devices are < $0.05/device/month — contact us for the best rate."><$0.05 per extra device</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="additional-content no-margin-bottom">
            <div class="plan-calculator-block">
                <div class="text">
                    <h2>Not sure which plan fits?</h2>
                    <p>Use our calculator to estimate the best plan for your needs.</p>
                </div>
                <button id="openCalculatorBtn" class="button calculator gtm_button">Calculate your pricing</button>
            </div>
            <div class="add-ons" data-product-name="private-cloud"></div>
            <div class="plans-comparison">
                <h2>Additional features</h2>
                <p>Extra details and upgrade options for all subscription plans.</p>
                <div class="comparison-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Launch</th>
                                <th>Growth</th>
                                <th>Scale</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-is-automatic-backup">Automatic backups</td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-is-included-in-the-monthly-subscription-fee">24/7 Monitoring</td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td>Production support</td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td>Engineering support </td>
                                <td><a href="/docs/contact-us/">Contact us</a></td>
                                <td><a href="/docs/contact-us/">Contact us</a></td>
                                <td><a href="/docs/contact-us/">Contact us</a></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-are-the-database-options-in-each-plan">NoSQL Database</td>
                                <td>SQL + NoSQL</td>
                                <td>SQL + NoSQL</td>
                                <td>SQL + NoSQL</td>
                                <td>SQL + NoSQL</td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-are-custom-data-retention-policies">Custom data retention policies</td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-does-geo-region-deployment-selection-include">Geo-region deployment choice</td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-does-multi-az-database-replication-mean">Multi-AZ database replication</td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td>Priority Support Channel</td>
                                <td></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-are-high-availability-services-available-as-an-add-on">High availability services</td>
                                <td></td>
                                <td></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-can-i-choose-a-specific-maintenance-window">Maintenance window picking</td>
                                <td></td>
                                <td></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td data-faq-id="tb-private-cloud-what-is-included-in-service-reviews-and-architecture-consultations">Service reviews & architecture consults</td>
                                <td></td>
                                <td></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                            <tr>
                                <td>Dedicated customer success engineer</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src="/images/pricing/pricing-checkmark-icon.svg" alt="Checkmark icon" title="Option included in plan"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="thingsboard-pe" class="pricing-content  no-padding-bottom">
    <div class="container no-padding">
        <div class="pricing-content-header row">
            <div id="payAsYouGoHeader" class="pricing-content-description">
                <h2>Subscription plans</h2>
                <div class="pricing-content-details">
                    All subscription plans include unlimited customers, dashboards, integrations, api calls, data points & messages.
                </div>
            </div>
            <div class="col d-flex justify-content-end">
                <div class="solution-selector">
                    <div id="Pricing_PE_SM_PayAsYouGo"
                         data-solutionId="pe-pay-as-you-go"
                         class="solution pay-as-you-go active defaultselection gtm_button"
                         data-toggle="#payAsYouGo"
                         data-description-toggle="#payAsYouGoHeader"
                         onClick="activateSolutionSection('pe-pay-as-you-go')">
                        <h3 id="Pricing_PE_SM_PayAsYouGo" class="gtm_button" data-faq-tooltip="Pay-as-you-go is a flexible monthly subscription. Scale up as you grow and pay for the capacity you need (tiers based on devices/assets)." data-faq-id="pe-pay-as-you-go-self-managed-subscription-plans" data-faq-link-size="70%">Pay-as-you-go</h3>
                    </div>
                    <div id="Pricing_PE_SM_Perpetual"
                         data-solutionId="pe-perpetual"
                         class="solution perpetual gtm_button"
                         data-toggle="#perpetual"
                         data-description-toggle="#perpetualHeader"
                         onClick="activateSolutionSection('pe-perpetual')">
                        <h3 id="Pricing_PE_SM_Perpetual" class="gtm_button" data-faq-tooltip="Perpetual is a one-time license that turns your IoT platform into a long-term asset—predictable costs, full control of your roadmap, and a strong foundation for enterprise scale." data-faq-id="pe-perpetual-perpetual-meaning" data-faq-link-size="70%">Perpetual</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section pricing-pay-as-you-go active" id="payAsYouGo">
                <div class="cards-row margin-bottom">
                    <div class="pricing-square">
                        <h2>Maker</h2>
                        <div class="pricing-square-description">
                            <p>Start exploring features</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $10
                            <span>/month</span>
                        </h4>
                        <div>
                            <button id="Pricing_PE_SM_Maker" class="button secondary btn-pricing gtm_button"
                                    onClick="getLicense(event,
                            'b5a35ce0-f5ea-11f0-8e58-abbac8d0a38a',
                            'fe493b90-f5ea-11f0-8e58-abbac8d0a38a',
                            'Maker', null)">
                                Get started
                            </button>
                        </div>
                        <div class="pricing-square-item">10 devices</div>
                        <div class="pricing-square-item">10 assets</div>
                        <div class="pricing-square-item">1 production instance</div>
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included" data-faq-tooltip="Get help through our community channel <a href='https://github.com/thingsboard/thingsboard/issues' target='_blank'>on GitHub</a>">
                            Community support
                        </div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Prototype</h2>
                        <div class="pricing-square-description">
                            <p>For PoCs and MVPs</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $39
                            <span>/month</span>
                        </h4>
                        <div>
                            <button id="Pricing_PE_SM_Maker" class="button secondary btn-pricing gtm_button"
                                    onClick="getLicense(event,
                            'b5a35ce0-f5ea-11f0-8e58-abbac8d0a38a',
                            '648c95a0-f5eb-11f0-8e58-abbac8d0a38a',
                            'Prototype', null)">
                                Get started
                            </button>
                        </div>
                        <div class="pricing-square-item">50 devices</div>
                        <div class="pricing-square-item">50 assets</div>
                        <div class="pricing-square-item">1 production instance</div>
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included" data-faq-tooltip="Get help through our community channel <a href='https://github.com/thingsboard/thingsboard/issues' target='_blank'>on GitHub</a>">
                            Community support
                        </div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square popular">
                        <span class="popular-badge">POPULAR</span>
                        <h2>Pilot</h2>
                        <div class="pricing-square-description">
                            <p>For upcoming IoT Unicorns</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $99
                            <span>/month</span>
                        </h4>
                        <div>
                            <button id="Pricing_PE_SM_Prototype" class="button btn-pricing gtm_button"
                                    onClick="getLicense(event,
                            'b5a35ce0-f5ea-11f0-8e58-abbac8d0a38a',
                            '87f3b1e0-f5eb-11f0-8e58-abbac8d0a38a',
                            'Prototype', null)">
                                Get started
                            </button>
                        </div>
                        <div class="pricing-square-item">100 devices</div>
                        <div class="pricing-square-item">100 assets</div>
                        <div class="pricing-square-item">1 production instance</div>
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included" data-faq-tooltip="Get access to our official support desk for product questions and troubleshooting—so you can resolve issues faster and keep your rollout on track.">
                            Help desk
                        </div>
                        <div class="pricing-square-item highlight">White labeling</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Startup</h2>
                        <div class="pricing-square-description">
                            <p>Defined long term projects</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $299
                            <span>/month</span>
                        </h4>
                        <div>
                            <button id="Pricing_PE_SM_Startup" class="button secondary btn-pricing gtm_button"
                                    onClick="getLicense(event,
                            'b5a35ce0-f5ea-11f0-8e58-abbac8d0a38a',
                            'b8ad2500-f5eb-11f0-8e58-abbac8d0a38a',
                            'Startup', null)">
                                Get started
                            </button>
                        </div>
                        <div class="pricing-square-item">500 devices</div>
                        <div class="pricing-square-item">500 assets</div>
                        <div class="pricing-square-item">2 production instances</div>
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Priority help desk
                        </div>
                        <div class="pricing-square-item highlight">White labeling</div>
                        <div class="pricing-square-item no-icon">&nbsp;</div>
                    </div>
                    <div class="pricing-square">
                        <h2>Business</h2>
                        <div class="pricing-square-description">
                            <p>Built for scalable IoT growth</p>
                        </div>
                        <h4 class="pricing-square-price">
                            $499
                            <span>/month</span>
                        </h4>
                        <div>
                            <button id="Pricing_PE_SM_Business" class="button secondary btn-pricing gtm_button"
                                    onClick="getLicense(event,
                            'b5a35ce0-f5ea-11f0-8e58-abbac8d0a38a',
                            'f4b90050-f5eb-11f0-8e58-abbac8d0a38a',
                            'Business', null)">
                                Get started
                            </button>
                        </div>
                        <div class="pricing-square-item">1 000 devices</div>
                        <div class="pricing-square-item">1 000 assets</div>
                        <div class="pricing-square-item">3 production instances</div>
                        <div class="pricing-square-item" data-faq-id="pe-pay-as-you-go-support-included" data-faq-tooltip="Get priority handling in the support desk—faster response, faster resolution, and fewer blockers as you scale and run production workloads">
                            Priority help desk
                        </div>
                        <div class="pricing-square-item highlight">White labeling</div>
                        <div class="pricing-square-item plus-icon highlight">$0.1 per extra device</div>
                    </div>
                </div>
                <div class="additional-content no-margin-bottom">
                    <div class="plan-calculator-block">
                        <div class="text">
                            <h2>Not sure which plan fits?</h2>
                            <p>Use our calculator to estimate the best plan for your needs.</p>
                        </div>
                        <button id="openSMCalculatorBtn" class="button calculator gtm_button">Calculate your pricing</button>
                    </div>
                </div>
                <div class="add-ons" data-product-name="pay-as-you-go"></div>
            </div>
            <div class="pricing-section" id="perpetual">
                <div class="crd-container no-padding">
                    <div class="crd">
                        <h3>Own Your IoT Solution. Perpetually.</h3>
                        <p class="subtitle">The one-time, enterprise-grade license for maximum security, permanent data control, and predictable costs. </p>
                        <p>A perpetual license transforms your core IoT platform into a permanent asset, giving you a predictable financial model and complete control over your technology roadmap. It's the ideal foundation for a long-term, large-scale enterprise deployment.</p>
                        <h4>This solution is for you if:</h4>
                        <ul>
                            <li>Your security policy requires an isolated, on-premises, or offline deployment.</li>
                            <li>Your financial model favors a one-time capital investment (CAPEX) over recurring expenses.</li>
                            <li>Your business needs a unique, tailored solution, not a one-size-fits-all subscription.</li>
                        </ul>
                        <a class="button btn-pricing gtm_button" href="/docs/contact-us/?subject=ThingsBoard%20Products&message=I%20am%20interested%20in%20Self-managed%20perpetual%20license">
                            Contact us
                            <span class="visually-hidden">to get your perpetual license</span>
                        </a>
                    </div>
                    <div class="benefits">
                        <h3>Why choose a Perpetual License?</h3>
                        <div class="benefit-cards">
                            <div class="benefit">
                                <h4>Predictable CAPEX</h4>
                                <p>A single, transparent license fee simplifies long-term financial planning.</p>
                            </div>
                            <div class="benefit">
                                <h4>Lower TCO</h4>
                                <p>Eliminates recurring subscription fees, offering a lower total cost of ownership for long-term projects.</p>
                            </div>
                            <div class="benefit">
                                <h4>On-Premises & Offline Mode</h4>
                                <p>Deploy anywhere, including fully offline or isolated networks for 100% data sovereignty.</p>
                            </div>
                            <div class="benefit">
                                <h4>Customizable License</h4>
                                <p>A flexible license that can be tailored to your exact business strategy.</p>
                            </div>
                        </div>
                    </div>
                    <h3>Let us help you identify the best option for your business</h3>
                    <a class="button btn-pricing gtm_button" href="/docs/contact-us/?subject=ThingsBoard%20Products&message=I%20am%20interested%20in%20Self-managed%20perpetual%20license">
                        Contact us
                        <span class="visually-hidden">to get your perpetual license</span>
                    </a>
                </div>
            </div>
        </div>
        <button style="visibility: hidden" id="openPerpCalculatorBtn" class="button calculator gtm_button">Calculate your pricing</button>
    </div>
</div>

<div id="tbmq-ce" class="pricing-content no-padding-bottom" style="display: none;">
    <div class="pricing-div">
        <div class="container no-padding">
            <div class="pricing-section padding-top always-display active" id="community">
                <div class="crd-container">
                    <div class="crd crd-only">
                        <h3>Your free ticket to IoT</h3>
                        <p>Community Edition is the fastest way to explore TBMQ, the open-source MQTT broker built for your success. TBMQ is engineered with massive scalability, fault-tolerance, and durability as core features, ensuring reliable messaging at any scale — from small pilots to millions of MQTT clients. It delivers millions of messages per second with very low latency while efficiently managing millions of concurrent client connections.</p>
                        <h4>This solution is for you if:</h4>
                        <ul>
                            <li>Unlimited sessions</li>
                            <li>Unlimited message throughput</li>
                            <li>Unlimited software updates</li>
                            <li>Ability to contribute</li>
                            <li>Community support</li>
                        </ul>
                        <a class="button btn-pricing gtm_button" href="/docs/mqtt-broker/install/installation-options/">
                            Install
                            <span class="visually-hidden">TBMQ CE</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="tbmq-pe" class="pricing-content no-padding-bottom" style="display: none;">
    <div class="container no-padding">
        <div class="pricing-content-header">
            <div id="tbmqPayAsYouGoHeader" class="pricing-content-description active">
                <h2>Your self-managed MQTT broker instance</h2>
                <div class="pricing-content-details">
                    The TBMQ Professional Edition's highly flexible, consumption-based licensing model
                </div>
            </div>
            <div id="tbmqPerpetualHeader" class="pricing-content-description">
                <h2>Your self-managed MQTT broker instance</h2>
                <div class="pricing-content-details">
                    The TBMQ Professional Edition's long-term asset ownership model
                </div>
            </div>
            <div>
                <div class="solution-selector">
                    <div id="Pricing_TBMQ_PE_PAYG"
                         data-solutionId="tbmq-pe-pay-as-you-go"
                         class="solution pay-as-you-go active defaultselection gtm_button"
                         data-toggle="#tbmqPayAsYouGo"
                         data-description-toggle="#tbmqPayAsYouGoHeader"
                         onClick="activateSolutionSection('tbmq-pe-pay-as-you-go')">
                        <h3 id="Pricing_TBMQ_PE_PAYG" class="gtm_button" data-faq-id="tbmq-payg-plans" data-faq-link-size="70%">Pay-as-you-go</h3>
                    </div>
                    <div id="Pricing_TBMQ_PE_Perpetual"
                         data-solutionId="tbmq-pe-perpetual"
                         class="solution perpetual gtm_button"
                         data-toggle="#tbmqPerpetual"
                         data-description-toggle="#tbmqPerpetualHeader"
                         onClick="activateSolutionSection('tbmq-pe-perpetual')">
                        <h3 id="Pricing_TBMQ_PE_Perpetual" class="gtm_button" data-faq-id="tbmq-perp-def" data-faq-link-size="70%">Perpetual</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-div padding-bottom">
            <div class="pricing-section tbmq-pay-as-you-go active" id="tbmqPayAsYouGo">
                {% include pricing/tbmq-payg-calculator.html %}
            </div>
            <div class="pricing-section tbmq-perpetual" id="tbmqPerpetual">
                {% include pricing/tbmq-perpetual-calculator.html %}
                <div class="crd-container">
                    <div class="benefits">
                        <h3>Why choose a Perpetual License?</h3>
                        <div class="benefit-cards">
                            <div class="benefit">
                                <h4>Predictable CAPEX</h4>
                                <p>A single, transparent license fee simplifies long-term financial planning.</p>
                            </div>
                            <div class="benefit">
                                <h4>Lower TCO</h4>
                                <p>Eliminates recurring subscription fees, offering a lower total cost of ownership for long-term projects.</p>
                            </div>
                            <div class="benefit">
                                <h4>On-Premises & Offline Mode</h4>
                                <p>Deploy anywhere, including fully offline or isolated networks for 100% data sovereignty.</p>
                            </div>
                            <div class="benefit">
                                <h4>Customizable License</h4>
                                <p>A flexible license that can be tailored to your exact business strategy.</p>
                            </div>
                        </div>
                    </div>
                    <h3>Let us help you identify the best option for your business</h3>
                    <a class="button btn-pricing gtm_button" href="/docs/contact-us/?subject=ThingsBoard%20Products&message=I%20am%20interested%20in%20Self-managed%20perpetual%20license">
                        Contact us
                        <span class="visually-hidden">to get your perpetual license</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="tbmq-private-cloud" class="pricing-content" style="display: none;">
    <div class="container no-padding">
        <div class="pricing-content-header">
            <div class="pricing-content-description always-display active">
                <h2>Your private MQTT broker instance</h2>
                <div class="pricing-content-details">
                    We host your own private MQTT broker instance, so you can focus on building your solutions.
                </div>
            </div>
        </div>
        <div class="pricing-div">
            <div class="pricing-section tbmq always-display active">
                {% include pricing/tbmq-private-cloud-calculator.html %}
            </div>
        </div>
        <div class="additional-content">
            <div class="plan-calculator-block">
                <div class="text">
                    <h2 class="no-margin">Want to know more about the subscription?</h2>
                </div>
                <a class="button reset gtm_button" href="/docs/mqtt-broker/subscription/">See full details</a>
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
                <div class="faq-section-option" id="edge" onClick="switchFaqSection('edge', this)">Edge</div>
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
                    <div class="item" data-tag="h4" data-item-id="ce-for-commercial" data-title="Can I use ThingsBoard Community Edition for commercial projects?">
                        <div class="container">
                            <p>Yes, ThingsBoard Community Edition can be used for commercial purposes. You can develop and deploy IoT solutions based on the Community Edition as part of your business operations. It is distributed under the Apache 2.0 license, which allows commercial use without the license or royalty fees.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-pe-difference" data-title="How does the Community Edition differ from Professional Edition?">
                        <div class="container">
                            <p>Community Edition includes essential features for IoT device management, data collection, visualization, and rule processing. The Professional Edition offers advanced features such as white-labeling, RBAC, integrations, etc. You can find a more detailed comparison <a target="_blank" href="/products/thingsboard-pe/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-connect-devices-limit" data-title="Is there a limit on the number of devices I can connect?">
                        <div class="container">
                            <p>No, there are no programatic limits, but performance depends on your server(s) capacity.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="possible-migrate-ce-to-pe-sm" data-title="Is it possible to migrate from the Community Edition to the self-managed ThingsBoard Professional Edition?">
                        <div class="container">
                            <p>Yes, you can upgrade from ThingsBoard Community Edition to Professional Edition without losing telemetry data and/or configurations. The upgrade process preserves your existing setup, ensuring a seamless transition. However, <b>please note</b> that any custom modifications made directly to the source code of the Community Edition will be removed during the upgrade process. For more information about the migration procedure, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="possible-migrate-ce-to-cloud" data-title="Is it possible to migrate from the Community Edition to the ThingsBoard Cloud?">
                        <div class="container">
                            <p>Yes, migration from the Community Edition to ThingsBoard Cloud is possible but is not 100% automatic. We recommend to use <a target="_blank" href="/docs/user-guide/version-control/#usage">version control</a> feature to migrate all entities. Then you may transfer telemetry data using the <a target="_blank" href="/docs/reference/rest-api/">REST API</a>. For more information about the migration procedure, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-clustering" data-title="Does the Community Edition support clustering?">
                        <div class="container">
                            <p>Yes, clustering is fully supported in the Community Edition. You can find more details about deployment scenarios <a target="_blank" href="/docs/reference/iot-platform-deployment-scenarios/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-customize" data-title="Can I customize and modify the Community Edition?">
                        <div class="container">
                            <p>Yes, the source code is available on <a target="_blank" href="https://github.com/thingsboard/thingsboard">GitHub</a>, and you can fork and modify it according to your requirements. By the way, please consider starring our repository★</p>
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
                            <p>Installation guides are available in the <a target="_blank" href="/docs/user-guide/install/installation-options/?ceInstallType=onPremise">documentation</a>. The Community Edition can be installed in monolith or microservice cluster mode, and supports deployment on Docker, Kubernetes, or directly on Linux/Windows OS.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="where-to-install-ce" data-title="Where can I install the Community Edition?">
                        <div class="container">
                            <p>You can install the Community Edition on your virtual machine, local servers, or any cloud provider infrastructure of your choice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-database-support" data-title="What databases does the Community Edition support?">
                        <div class="container">
                            <p>The Community Edition supports pure SQL or a hybrid SQL + NoSQL (for telemetry storage) . For more details on database options, you can check <a target="_blank" href="/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="official-docker-ce" data-title="Is there an official Docker image for Community Edition?">
                        <div class="container">
                            <p>Yes, official Docker images are available on Docker Hub.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-on-raspberry-edge" data-title="Can I run the Community Edition on Raspberry Pi or other edge devices?">
                        <div class="container">
                            <p>Yes, but performance may be limited due to hardware constraints. You can check details <a target="_blank" href="/docs/user-guide/install/installation-options/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-multi-tenancy" data-title="Does the Community Edition support multi-tenancy?">
                        <div class="container">
                            <p>Yes, the ThingsBoard Community Edition supports <a target="_blank" href="/docs/user-guide/ui/tenants/">multi-tenancy</a> out of the box.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-scale-deployment" data-title="How can I scale a Community Edition deployment?">
                        <div class="container">
                            <p>You can scale the Community Edition horizontally by using a <a target="_blank" href="/docs/reference/msa/">microservice</a> deployment.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-ce-featuresAndLimitations" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="ce-features" data-title="What features are included in ThingsBoard Community Edition?">
                        <div class="container">
                            <p>
                                The Community Edition includes device and asset management, data visualization, rule engine automation, and API integrations. You can find all features and descriptions <a target="_blank" href="/docs/">here</a>.
                            </p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-exclusive-features" data-title="What features are exclusive to the Professional Edition?">
                        <div class="container">
                            <p>The Professional Edition offers advanced features such as white-labeling, RBAC, advanced rule engine capabilities, platform integrations, etc. You can find a more detailed comparison <a target="_blank" href="/products/thingsboard-pe/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-white-labeling-support" data-title="Does the Community Edition support white-labeling?">
                        <div class="container">
                            <p>No, white-labeling is available only in the Professional Edition.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-other-build-in-security-features" data-title="Are there any built-in security features?">
                        <div class="container">
                            <p>Yes, the Community Edition supports secure <a target="_blank" href="/docs/user-guide/device-credentials/">device connectivity</a> options, <a target="_blank" href="/docs/user-guide/oauth-2-support/">OAuth</a> configuration, and <a target="_blank" href="/docs/domains/">domain management</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-third-party-systems" data-title="Can I integrate third-party systems with Community Edition?">
                        <div class="container">
                            <p>Yes, you can integrate the ThingsBoard Community Edition with third-party systems through REST APIs or Rule Engine. Please note that the Professional Edition of the platform provides more integration option via <a target="_blank" href="/docs/user-guide/integrations/">platform integrations</a>.</p>
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
                            <p>Yes, the Community Edition supports <a target="_blank" href="/docs/user-guide/ota-updates/">OTA</a> (Over-the-Air) firmware updates.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-mobile-app" data-title="Is there a mobile app for Community Edition?">
                        <div class="container">
                            <p>Yes, there is an <a target="_blank" href="/products/mobile/">mobile app</a> for the Community Edition, based on the Flutter SDK. It is free of charge and open-source under Apache 2.0 license.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-ai-ml-integrations" data-title="Does Community Edition support AI or machine learning integrations?">
                        <div class="container">
                            <p>Not natively, but you can use it with <a target="_blank" href="/products/trendz/">Trendz Analytics</a> or integrate external AI/ML services via APIs or use </p>
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
                            <p>Depending on the type of support you are looking for, the ThingsBoard team may be able to offer certain types of additional support packages. To discuss your unique case and requirements, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-help-issue" data-title="Where can I get help if I run into issues?">
                        <div class="container">
                            <p><a target="_blank" href="https://github.com/thingsboard/">GitHub</a> (report issues, contribute)</p>
                            <p><a target="_blank" href="https://stackoverflow.com/questions/tagged/thingsboard">Stack Overflow</a> (for developer-related questions)</p>
                            <p><a target="_blank" href="/docs/">Documentation & Tutorials</a></p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-request-custom-feature" data-title="Can I request custom features or improvements?">
                        <div class="container">
                            <p>Yes, you are welcome to submit feature requests on GitHub. After the product team reviews them, they may be added to the backlog.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-pay-for-development" data-title="Can I pay for additional features to be developed?">
                        <div class="container">
                            <p>The ThingsBoard team can propose application configuration services. To discuss your unique case and requirements, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="ce-soft-updates" data-title="Are software updates available for Community Edition?">
                        <div class="container">
                            <p>Yes, updates for all <a target="_blank" href="/docs/reference/releases/">versions</a> are available.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-tb-developers-paid-service" data-title="Can I get ThingsBoard developers to help with my Community Edition deployment?">
                        <div class="container">
                            <p>Yes, you can request such assistance as an additional paid service. Please, <a target="_blank" href="/docs/contact-us/">contact us</a> to discuss how we can help.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-bug-found" data-title="What should I do if I find a bug in Community Edition?">
                        <div class="container">
                            <p>You can report it on <a target="_blank" href="https://github.com/thingsboard/">GitHub</a>, and the open-source community may help fix it.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-contribute" data-title="Can I contribute to the development of ThingsBoard Community Edition?">
                        <div class="container">
                            <p>Yes! Pull requests and contributions are welcome on <a target="_blank" href="https://github.com/thingsboard/">GitHub</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="ce-development-services" data-title="Can you provide an IoT development service tailored to my specific needs?">
                        <div class="container">
                            <p>Yes, we offer custom <a target="_blank" href="/services/development-services/">IoT development services</a> designed to match your exact requirements. Whether you need a full-featured IoT platform, scalable architecture, or specific integrations, our IoT development team can help you accelerate time-to-market and reduce internal workload while ensuring long-term maintainability.</p>
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
                                <li>White labeling for branding</li>
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
                            <p>Migration depends on factors such as whether you are migrating to a self-managed system or ThingsBoard Cloud, the version, source code changes, and more. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for personalized suggestions and a clear strategy on how to perform the migration.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="enterprise-trial" data-title="Can I get a trial of the Enterprise Edition before upgrading?">
                        <div class="container">
                            <p>Yes, we offer a one-month trial on ThingsBoard Cloud for users considering an upgrade. If you would like to try the system in self-managed mode, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
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
                <div id="faq-thingsboard-ce-edge" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-community-what-is" data-title="What is ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>The Community Edition of ThingsBoard Edge is a free, open-source platform. It offers essential features for managing and analyzing IoT data at the edge.</p>
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
                    <div class="item" data-tag="h4" data-item-id="edge-community-installation" data-title="How can I install ThingsBoard Edge Community Edition?">
                        <div class="container">
                            <p>You can install the Community Edition following the <a target="_blank" href="https://thingsboard.io/docs/user-guide/install/edge/installation-options/">installation guides</a> available in the official documentation.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-community-system-requirements" data-title="What are the system requirements for deploying the Community Edition?">
                        <div class="container">
                            <p>The Community Edition is compatible with various operating systems, including Linux, Windows, and macOS. Specific requirements depend on the deployment method and can be found in the <a target="_blank" href="https://thingsboard.io/docs/user-guide/install/edge/installation-options/">installation guide</a>.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-docker-support" data-title="Does the Community Edition support Docker deployment?">
                        <div class="container">
                            <p>Yes, ThingsBoard Edge Community Edition supports Docker. Detailed instructions for Docker-based installation are provided in the <a target="_blank" href="https://thingsboard.io/docs/user-guide/install/edge/docker/">Docker deployment</a> guide.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-core-features" data-title="What core features are available in the Community Edition?">
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
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-support-options" data-title="What support options are available for the Community Edition?">
                        <div class="container">
                            <p>Support for the Community Edition is primarily community-driven, including:</p>
                            <ul>
                                <li>Community Forums: Engage with other users and developers.</li>
                                <li>GitHub Issues: Report bugs or request features.</li>
                                <li>Documentation: Comprehensive guides and API references available on the ThingsBoard Documentation.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-official-support" data-title="Is official support available for the Community Edition?">
                        <div class="container">
                            <p>No, official support is not included in the Community Edition. For official support, consider upgrading to a paid edition.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-upgrade" data-title="Can I upgrade from the Community Edition to a paid edition?">
                        <div class="container">
                            <p>Yes, upgrading is straightforward. Contact the ThingsBoard Sales Team or visit the Pricing Page to select a suitable paid plan. The transition will be guided to ensure data integrity and feature migration.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-community-upgrade-benefits" data-title="What benefits do I gain by upgrading to an Enterprise Edition?">
                        <div class="container">
                            <p>Upgrading provides access to advanced features, dedicated support, and integrations not available in the Community Edition.</p>
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
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
                <div class="faq-section-option" id="trendz" onClick="switchFaqSection('trendz', this)">Trendz</div>
                <div class="faq-section-option" id="edge" onClick="switchFaqSection('edge', this)">Edge</div>
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
                            <p>ThingsBoard Cloud offers flexible monthly subscription plans, with tiers based on the number of devices and the volume of messages they generate. We support 5 predefined plans to cater to different needs. The beginner plan includes up to 5 devices and 10 million data points. For more details, visit the ThingsBoard Cloud <a target="_blank" href="/pricing/?product=thingsboard-cloud">pricing</a> page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-pricing-structure" data-title="How is ThingsBoard Cloud pricing structured?">
                        <div class="container">
                            <p>Pricing is based on the number of connected devices and the volume of messages they generate. Each plan has a fixed monthly fee, with the option to purchase additional entity packs and API call packs. In this case, the total monthly cost consists of the base fee for the selected plan plus additional charges for extra features. More details are available on the <a target="_blank" href="/docs/paas/subscription/">subscription plans</a> page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-api-rate-limits" data-title="Are there any API or rate limits?">
                        <div class="container">
                            <p>Yes, each plan includes specific API and rate limits. If needed, you can extend these limits by purchasing additional API call packs. Detailed limits for each plan are available on the <a target="_blank" href="/docs/paas/subscription/">subscription plans</a> page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-free-trial" data-title="Do you offer a free trial?">
                        <div class="container">
                            <p>Yes, we offer a free 30-day trial to let you explore ThingsBoard Cloud before committing to a paid plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-what-included-in-free-trial" data-title="What is included in the free trial?">
                        <div class="container">
                            <p>The free trial includes access to all core features and Trendz Analytics tool with limited usage of devices, messages, and storage.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
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
                            <p>No, all standard features are included in the subscription. However, additional services such as application configuration, integrations, or consulting may incur extra costs. In addition, if you exceed the limits of your selected plan, you can purchase extra entity packs and API call packs for an additional fee.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-exceed-plan-limits" data-title="What happens if I exceed my plan’s limits?">
                        <div class="container">
                            <p>If you exceed your limits, you may need to upgrade to a higher plan or reduce your usage. You can also purchase additional entity packs and API call packs; however, extra devices can only be purchased with the Business plan. If you reach the device limit, you will need to upgrade your plan.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-custom-plan" data-title="Can I create a custom plan with the ability to choose limits for devices, assets, users, etc.?">
                        <div class="container">
                            <p>ThingsBoard Cloud offers predefined base plans that can be further customized with additional entity packs and API call packs.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-short-term-project" data-title="Can I purchase ThingsBoard Cloud for a short-term project?">
                        <div class="container">
                            <p>Yes, you can subscribe for a single month and cancel anytime.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-how-cancel-supscription" data-title="How to cancel my subscription?">
                        <div class="container">
                            <p>Kindly refer to the guide <a target="_blank" href="/docs/paas/eu/subscription/#how-to-cancel-my-subscription">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="migrate-cloud-to-sm" data-title="How to migrate from the Cloud to a self-managed platform instance?">
                        <div class="container">
                            <p>We recommend using the <a target="_blank" href="/docs/user-guide/version-control/">Version control</a> feature to migrate your configurations. Telemetry data export can be achieved via REST API. Please, <a target="_blank" href="/docs/contact-us/">contact us</a> in case migration assistence needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-us-to-eu" data-title="I need to move from US cloud to EU. How to achieve that?">
                        <div class="container">
                            <p>Technically, you have to follow the same flow as for How to migrate from the Cloud to a self-service platform copy. Please, <a target="_blank" href="/docs/contact-us/">contact us</a> in case migration assistence needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-what-is-included-in-the-white-labeled-mobile-app-add-on" data-title="What is included in the White-Labeled Mobile App add-on?">
                        <div class="container">
                            <p>The White-Labeled Mobile App add-on provides you with a branded version of the ThingsBoard Mobile application. This includes your company’s name, logo, colors, and other branding elements. The cost is $99 per month, plus a one-time setup fee of $1,000 to cover branding and configuration.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="how-tb-cloud-billing-works" data-title="How does billing work for ThingsBoard Cloud?">
                        <div class="container">
                            <p>Billing is handled via Stripe and is charged monthly based on your selected plan. You can also pay annually with card or wire transfer. Please <a target="_blank" href="/docs/contact-us/">contact us</a> to receive a custom invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe. You can also pay annually with card or wire transfer. Please <a target="_blank" href="/docs/contact-us/">contact us</a> to receive a custom invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-use-wire-instead-of-card" data-title="I cannot pay by card, may we use wire instead?">
                        <div class="container">
                            <p>Sure. In this case, you must reach out to our sales team via <a target="_blank" href="/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-pay-monthly-or-annually" data-title="Can I pay monthly or annually?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a target="_blank" href="/docs/contact-us/">contact</a> our team to arrange a wire transfer invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-volueme-discounts" data-title="Do you offer volume discounts for large deployments?">
                        <div class="container">
                            <p>We offer Private Cloud plans for large-scale deployments with 10% discounts for annual payments; <a target="_blank" href="/docs/contact-us/">contact us</a> for details.</p>
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
                            <p>Each plan includes predefined usage limits that you can find <a target="_blank" href="/docs/paas/subscription/">here</a>. You can also purchase additional entity and API call packs if required.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-custom-plan" data-title="Can I create a custom plan with the ability to choose limits for devices, assets, users, etc.?">
                        <div class="container">
                            <p>ThingsBoard Cloud offers predefined base plans that can be further customized with additional entity packs and API call packs.</p>
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
                            <p>Currently, ThingsBoard Cloud does not provide a built-in billing module to charge end customers. However, you can create custom dashboards with backend integration between ThingsBoard and the payment system of your choice to set up billing for your application. If you would like our assistance with setting up billing, please <a target="_blank" href="/docs/contact-us/">contact us</a>, and we’ll be happy to propose such a configuration as an additional service.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-usageAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-device-msg-data-storage-limits-for-plans" data-title="What are the device, message, and data storage limits for each plan?">
                        <div class="container">
                            <p>Limits vary by plan; details can be found on our plans definition <a target="_blank" href="/docs/paas/subscription/">page</a>.</p>
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
                            <p>If you exceed your limits, you may need to upgrade to a higher plan or purchase additional entity and API call packs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-increase-resource-limits" data-title="Can I increase my resource limits if needed?">
                        <div class="container">
                            <p>Yes, you can upgrade your plan at any time to increase your limits, or you can purchase additional entity and API call packs as needed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-white-labeling" data-title="Is white labeling available out of the box?">
                        <div class="container">
                            <p>White labeling functionality is available starting from the Pilot subscription.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-migration-to-sm-support" data-title="What support options are available for migrating to a self-managed system instead of switching to the Enterprise plan?">
                        <div class="container">
                            <p>You can perform the migration on your own using the Version Control feature to transfer your configurations. Telemetry data can be exported via the REST API. Alternatively, the ThingsBoard team can provide additional migration assistance. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-telemetry-storage-billing" data-title="How is telemetry data storage billed?">
                        <div class="container">
                            <p>Storage is included in your plan, but exceeding the limits may require upgrading your subscription or purchasing an additional storage pack. Storage limits vary by plan, you may see details <a target="_blank" href="/docs/paas/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-dashboard-costs" data-title="Are there additional costs for dashboards and visualization?">
                        <div class="container">
                            <p>No, dashboards are included in all plans.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-api-charges" data-title="Do you charge for API requests?">
                        <div class="container">
                            <p>API usage is included in your plan, but rate limits apply based on your selected tier. If needed, you can purchase additional API call packs to extend these limits.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-api-limits-exceed" data-title="What happens if I exceed my plan's API limits?">
                        <div class="container">
                            <p>API access may be throttled until the next billing cycle, or you can upgrade to a higher plan. Alternatively, you can purchase additional API call packs to extend your access.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-users-limits-per-acc" data-title="Is there a limit on the number of users per account?">
                        <div class="container">
                            <p>Each plan has a predefined number of users. Limits vary by plan; details can be found on our <a target="_blank" href="/docs/paas/subscription/">plans definition page</a>. If needed, you can purchase additional user packs to increase the number of users.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-domain-certificate" data-title="Where can I put a domain certificate?">
                        <div class="container">
                            <p>ThingsBoard automatically provisions certificates for your domain name using Let's Encrypt. Refer to the guide <a target="_blank" href="/docs/paas/domains/">here</a>. Custom certificate provisioning is available exclusively for Enterprise Cloud subscribers upon request.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-cloud-tenant-uptime-tracking" data-title="How can I track the uptime of my tenant?">
                        <div class="container">
                            <p>The status page is in progress. While we continuously monitor system performance and strive to maintain SLA, our team remains dedicated to delivering high availability and reliability. Updates regarding service status will be available as we develop the status page further.</p>
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
                            <p>Simply sign up on our website—no credit card required (<a target="_blank" href="https://thingsboard.cloud/signup">North America</a> or <a target="_blank" href="https://eu.thingsboard.cloud/signup">EU</a>).</p>
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
                            <p>Kindly refer to the guide <a target="_blank" href="/docs/paas/eu/subscription/#how-to-cancel-my-subscription">here</a>.</p>
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
                            <p>All paid subscriptions provide access to the ThingsBoard Support Portal, allowing customers to submit support tickets and communicate directly with the support team. Startup and Business plans also include priority support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-24-7" data-title="Do you offer 24/7 customer support?">
                        <div class="container">
                            <p>Yes, we do provide 24/7 support. If this is what you're looking for, please <a target="_blank" href="/docs/contact-us/">contact us</a> for a more detailed discussion about your specific needs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-billing" data-title="How can I contact ThingsBoard support for billing-related issues?">
                        <div class="container">
                            <p>You can use the <a target="_blank" href="/docs/contact-us/">contact us</a> form and select the "Other" topic. Our account managers will assist you with any billing-related issues.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-knowledge-base" data-title="Is there a knowledge base or self-service support portal?">
                        <div class="container">
                            <p>All of our <a target="_blank" href="/docs/paas/">documentation</a> is available on our website, with no hidden information. Additionally, you can use our Github issues for community support.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-priority-support" data-title="Can I get priority support with my plan?">
                        <div class="container">
                            <p>Priority support is included with the Startup and Business plans.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-response-times" data-title="What response times can I expect for support tickets?">
                        <div class="container">
                            <p>Response times vary by plan; Private Cloud customers receive better SLAs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-cloud-support-development-services" data-title="Can you provide an IoT development service tailored to my specific needs?">
                        <div class="container">
                            <p>Yes, we offer custom <a target="_blank" href="/services/development-services/">IoT development services</a> designed to match your exact requirements. Whether you need a full-featured IoT platform, scalable architecture, or specific integrations, our IoT development team can help you accelerate time-to-market and reduce internal workload while ensuring long-term maintainability.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-trendz" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-what-is" data-title="What is Trendz?">
                        <div class="container">
                            <p>Trendz is an add-on for advanced IoT Data Analytics. It allows you to analyze, detect anomalies, and predict outcomes — all in one unified analytics workspace that works seamlessly with ThingsBoard. You can check pricing in the Plan calculator.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-pricing-plans" data-title="What pricing plans does Trendz offer?">
                        <div class="container">
                            <p>Trendz pricing depends on your ThingsBoard model. You can check the relevant pricing in the Plan Calculator on this page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-additional-costs" data-title="Are there any additional costs beyond the subscription fee?">
                        <div class="container">
                            <p>No, all standard features are included in the subscription. However, additional services like professional support may incur extra costs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-license-compatibility" data-title="Can ThingsBoard and Trendz Analytics have different license types?">
                        <div class="container">
                            <p>No, ThingsBoard and Trendz Analytics must have the same license type to function correctly. Trendz Analytics automatically detects all devices and assets from your ThingsBoard instance, along with their relationships.</p>
                            <p>It analyzes all entities without the option to select specific ones; all entities will be analyzed and added to the 'business entity' column.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-standalone-usage" data-title="Can I use Trendz without ThingsBoard?">
                        <div class="container">
                            <p>No, you cannot use Trendz without ThingsBoard. Trendz automatically detects and analyzes all entities from your ThingsBoard instance. Without ThingsBoard, Trendz has no data source to work with, making it incompatible for use on its own.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-activate-cancel" data-title="How to activate or cancel Trendz subscription?">
                        <div class="container">
                            <p>To activate your Trendz license, follow this path:</p>
                            <p><b>Billing page &rarr; ThingsBoard license details &rarr; Manage Add-ons &rarr; Enable the checkbox for Trendz &rarr; Save the changes.</b></p>
                            <p>If you cancel your subscription before the billing period ends, the funds for the remaining period will stay on your balance but will not be refundable.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-white-labeling" data-title="Is white labeling available out of the box?">
                        <div class="container">
                            <p>White labeling functionality is available starting from the <b>Pilot</b> subscription.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-free-trial" data-title="Do you offer a free trial for Trendz?">
                        <div class="container">
                            <p>ThingsBoard Public Cloud Free plan includes Trendz for free. If you need a free trial for other subscriptions, please <a target="_blank" href="/docs/contact-us/">Contact us</a> for details.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-support-included" data-title="What support is included in my plan?">
                        <div class="container">
                            <p>The <b>Free</b> and <b>Prototype</b> subscriptions include Community-level support. Starting from the <b>Startup</b> subscription, customers gain access to the ThingsBoard Support Portal for direct communication with the support team.</p>
                            <p><i>Note: Community support is a free initiative provided by the Trendz team and other contributors as a voluntary effort. While our engineers often assist with community requests during their free time, this support comes with no formal obligation. We highly encourage users to consult the documentation for guidance.</i></p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-cloud-edge" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-addon-cloud-what-is" data-title="What is Edge Computing add-on?">
                        <div class="container">
                            <p>The Edge Computing add-on enables local data processing at remote sites through ThingsBoard Edge PE instances. Edge runs independently with offline capability and automatically syncs with your central ThingsBoard PE Server when connectivity returns.</p>
                            <p>It is available for all ThingsBoard PE deployments: Cloud, Private Cloud, and self-managed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-cloud-pricing-plans" data-title="What pricing plans does Edge Computing add-on offer?">
                        <div class="container">
                            <p>Edge Computing add-on pricing depends on your ThingsBoard model. Check the relevant pricing in the Plan Calculator.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-cloud-compatibility" data-title="Does Edge work with both ThingsBoard PE and CE?">
                        <div class="container">
                            <p>Edge edition must match your ThingsBoard Server edition:</p>
                            <ul>
                                <li><b>Edge PE</b> connects to ThingsBoard PE Server.</li>
                                <li><b>Edge CE</b> connects to ThingsBoard CE Server.</li>
                            </ul>
                            <p>Note: Community Editions are free and open-source.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-cloud-standalone" data-title="Can I use Edge without ThingsBoard?">
                        <div class="container">
                            <p>No, Edge PE requires a ThingsBoard PE Server (Cloud, Private Cloud, or self-managed) to provision devices, sync configurations, and exchange data. However, it processes data locally and can operate offline when the connection drops.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-cloud-free-trial" data-title="Do you offer a free trial for Edge?">
                        <div class="container">
                            <p>You can start with the <b>Free</b> plan (limited to 5 devices) with the Edge Computing add-on permanently enabled. This lets you explore Edge PE features at no cost.</p>
                            <p>For larger deployments, you can upgrade to paid plans with higher device limits and additional features.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-cloud-capacity" data-title="Can Edge handle my device volume?">
                        <div class="container">
                            <p>We recommend up to 1,000 devices per Edge instance based on typical edge hardware and connectivity constraints. You can exceed this number depending on your hardware capabilities. For more capacity, deploy multiple Edge instances or, starting with version 4.0, cluster Edge nodes for high availability.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-instances-included" data-title="How many edge instances are included in Edge Computing add-on?">
                        <div class="container">
                            <p>The number of included Edge instances depends on your subscription plan. Additional instances can be purchased separately. Check your plan details or <a target="_blank" href="/docs/contact-us/">contact us</a> for specifics.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-inclusions" data-title="What's included in the Edge Computing add-on price?">
                        <div class="container">
                            <p>The Edge add-on includes: software license, software updates (duration varies by license type), and support level based on your ThingsBoard PE plan. Hardware and infrastructure are not included — you provide your own edge hardware.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-activate-cancel" data-title="How to activate or cancel Edge Computing add-on license?">
                        <div class="container">
                            <p>To activate your Edge Computing add-on, log in to the License Portal and follow this path:</p>
                            <p><b>ThingsBoard license details &rarr; Manage Add-ons &rarr; Enable the checkbox for Edge Computing add-on &rarr; Save the changes.</b></p>
                            <p>If you cancel your license before the billing period ends, the funds for the remaining period will stay on your balance but will not be refundable.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-hardware" data-title="What hardware is required to run Edge Instance?">
                        <div class="container">
                            <p>Edge runs on any machine meeting these minimums:</p>
                            <ul>
                                <li><b>Light workloads:</b> 1GB+ RAM, 2 CPU cores, 10GB storage (e.g., Raspberry Pi).</li>
                                <li><b>Heavy use:</b> 4GB+ RAM, 4+ CPU cores, 20GB+ storage (e.g., Industrial PCs, Edge servers, VMs).</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-billing" data-title="How is Edge Computing add-on billed?">
                        <div class="container">
                            <p>Edge Computing add-on is billed monthly, along with your main ThingsBoard subscription. The price depends on your plan plus any additional instances you purchase.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-protocols" data-title="I have devices that use proprietary protocols. Can Edge connect to them?">
                        <div class="container">
                            <p>Yes. Edge natively supports MQTT, CoAP, HTTP, SNMP, and LwM2M. For other protocols, use:</p>
                            <ul>
                                <li>The <b>ThingsBoard IoT Gateway</b> to bridge legacy devices. The Gateway supports Modbus, BACnet, OPC-UA, and more, and is available at no extra cost.</li>
                                <li>The <b>Platform Integrations</b> to connect via OPC-UA, ChirpStack, and 30+ other systems using the converter library.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-ui-customization" data-title="Is UI customization available out of the box?">
                        <div class="container">
                            <p>The Edge Computing add-on includes UI customization out of the box, such as white-labeling (custom branding throughout the interface) and custom menu configuration — both available without code changes.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-security" data-title="Is my Edge instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but Edge provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-updates" data-title="Are software updates included?">
                        <div class="container">
                            <p>Yes. Software updates are included with active Edge licenses:</p>
                            <ul>
                                <li><b>Subscription licenses:</b> Receive updates throughout the subscription period.</li>
                                <li><b>Perpetual licenses:</b> Include 1 year of updates, renewable annually.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-expiration" data-title="What happens when my Edge subscription expires?">
                        <div class="container">
                            <p>Your Edge instance will stop functioning when the license expires. You'll need to renew your Edge license to continue using the instance.</p>
                            <p>For <b>perpetual licenses</b>, only updates and support expire — the Edge instance continues running.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-upgrade-ce-pe" data-title="Can I upgrade from Edge CE to Edge PE?">
                        <div class="container">
                            <p>Yes, but you'll need to upgrade your entire system: upgrade your ThingsBoard Server from CE to PE, purchase the Edge Computing add-on, and reinstall Edge using PE packages. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for migration assistance.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-cloud-separate-license" data-title="Do I need a separate license to use Edge Computing add-on?">
                        <div class="container">
                            <p>No. Once you have an active ThingsBoard PE license (Cloud, Private Cloud, or self-managed), you can purchase and activate the Edge Computing add-on directly. The add-on itself serves as the license for your Edge instances. No additional licensing is required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="professional-edition-private-cloud active" id="faq-thingsboard-private-cloud">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageAndLimits" onClick="switchFaqSection('usageAndLimits', this)">Usage & Limits</div>
                <div class="faq-section-option" id="enterpriseSubscription" onClick="switchFaqSection('enterpriseSubscription', this)">Enterprise plan</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="addOns" onClick="switchFaqSection('addOns', this)">Add-ons and Optional Features</div>
            </div>
            <div class="answers">
                <div id="faq-thingsboard-private-cloud-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-does-thingsboard-private-cloud-stand-for" data-title="What does “ThingsBoard Private Cloud” stand for?">
                        <div class="container">
                            <p>ThingsBoard Private Cloud is a fully managed, isolated ThingsBoard Professional Edition cluster that our team deploys and operates for you. We provision the infrastructure, keep the platform patched and monitored 24×7, run automated backups, and provide an SLA-backed uptime guarantee (99%–99.99%, depending on plan). During onboarding, you choose the region that best fits your compliance or latency requirements—EU, North America, or APAC. All environments are hosted in ISO 27001/PCI-DSS-certified data centers. Your engineers can stay focused on building IoT applications instead of managing DevOps.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-how-does-private-cloud-compare-to-thingsboard-cloud-community-edition-and-self-managed" data-title="How Private Cloud compares to ThingsBoard Cloud, Community Edition and Self-Managed?">
                        <div class="container">
                            <ul>
                                <li>Community Edition itself is the open-source core—perfect for experiments and hobby projects, but offers less features and no SLA.</li>
                                <li>Self-Managed deployments (using either the paid Professional Edition or free Community Edition) live on infrastructure you operate; you gain total control and customisation, yet you also own every patch, backup and compliance task.</li>
                                <li>ThingsBoard Cloud is the quickest way to try ThingsBoard: a SaaS environment that we maintain for you, but shared with other tenants.</li>
                                <li>Private Cloud is a fully managed, isolated cluster run by the ThingsBoard team, with a contractual 99.9–99.99 % SLA and your choice of region—ideal when you need zero DevOps and hard uptime guarantees.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-are-the-benefits-of-private-cloud-versus-self-hosting" data-title="What are the benefits of Private Cloud versus self-hosting?">
                        <div class="container">
                            <ul>
                                <li>Zero DevOps overhead – no servers to set up, patch or monitor.</li>
                                <li>Guaranteed availability – written SLA of 99.9 – 99.99 %, with service-credit remedies.</li>
                                <li>Faster time-to-market – we stand up production clusters in 1-2 hours, not weeks.</li>
                                <li>Scalability – Kubernetes-based plans grow as device traffic spikes.</li>
                                <li>Predictable cost – one all-inclusive monthly fee replaces cap-ex plus staffing.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-is-uptime-and-how-do-you-calculate-it" data-title="What is ‘uptime’ and how do you calculate it?">
                        <div class="container">
                            <p>Uptime (%) = ((Total Time – Downtime) / Total Time) × 100. <br><br></p>
                            <p>Total Time – number of minutes in the billing month. <br><br></p>
                            <p>Downtime – minutes when core platform services are unavailable for the tenant (device endpoints, REST/WebSocket APIs, Rule Engine infrastructure, dashboards, telemetry DB). <br><br></p>
                            <p>We measure Downtime from incident detection to full service restoration. <br><br></p>
                            <p>Excluded from Downtime: <br></p>
                            <ul>
                                <li>Scheduled maintenance announced ≥ 48 h in advance</li>
                                <li>Emergency security patches</li>
                                <li>Force-majeure events or upstream cloud failures (e.g., AWS region outage)</li>
                                <li>Issues caused by customer-side logic (mis-configured Rule Chains, custom JS, connector errors, abusive API use, edge gateways, etc.)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-deployment-options-are-available-within-private-cloud" data-title="What deployment options are available within Private Cloud?">
                        <div class="container">
                            <p>Private Cloud is offered in three fixed tiers—Launch, Growth, and Scale—each designed to support different stages of your IoT deployment journey. The Enterprise plan is tailored for your use case and offers flexible architecture, pricing and custom SLA. <br> <br></p>
                            <p>All plans are powered by Kubernetes, with built-in load balancers to ensure resilient, scalable operations. AWS is our first-choice IaaS, but Azure or GCP regions are also supported on request.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-is-automatic-backup" data-title="What is Automatic Backup?">
                        <div class="container">
                            <p>It is a configured process that regularly creates secure copies of the database with all telemetry, configurations, entities, and related data to avoid data loss in case of failure and enable recovery.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-support-is-included" data-title="What support is included?">
                        <div class="container">
                            <p>All plans include access to the ThingsBoard Support Portal for direct communication with the support team in case of questions related to ThingsBoard functionality.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-who-should-choose-private-cloud" data-title="Who should choose Private Cloud?">
                        <div class="container">
                            <p>Private Cloud ideal for companies that want to avoid investing in DevOps resources, reduce operational risk, and accelerate time to market. They are particularly beneficial for startups, SMBs, or enterprises scaling production systems who prefer to offload platform operations and upgrades to the ThingsBoard team under a clear SLA.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-are-the-prerequisites-to-get-started" data-title="What are the prerequisites to get started?">
                        <div class="container">
                            <p>1. Use our online calculator to size a Launch, Growth or Scale cluster.</p>
                            <p>2. Submit the request form – we schedule a short onboarding call.</p>
                            <p>3. For Enterprise deals we run a light discovery workshop and issue a custom proposal. <br> <br></p>
                            <p>You are welcome to reach out at any stage — we’ll help you choose the most suitable plan and guide you through the next steps.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-determine-right-plan" data-title="How do I determine the right Private Cloud plan for my workload?">
                        <div class="container">
                            <p>To select an appropriate Private Cloud plan, you’ll need to estimate your expected platform usage based on three key indicators: <br> <br></p>
                            <p>1. Number of devices:</p>
                            <ul>
                                <li>Navigate to the Home page of your ThingsBoard Tenant account.</li>
                                <li>Check the total number of devices currently connected.</li>
                            </ul>
                            <p>2. Number of Messages per Day per Device:</p>
                            <ul>
                                <li>Navigate to API Usage → Transport Messages chart</li>
                                <li>Find the monthly total of transport messages</li>
                                <li>Use this formula: Messages per day per device = (Monthly Transport Messages) / (Number of devices × Number of Days in Month)</li>
                            </ul>
                            <p>3. Number of Data Points per Message:</p>
                            <ul>
                                <li>In the same API Usage → Transport Messages chart</li>
                                <li>Identify the Data Points per Month figure</li>
                                <li>Use this formula: Data Points per Message = Data Points per Month / Transport Messages per Month</li>
                            </ul>
                            <p>Once you’ve collected these three values, you can match your usage against the limits defined in each Private Cloud plan tier (Launch, Growth, Scale, Enterprise) to determine the best fit.<br> <br></p>
                            <p>For more guidance, you can share these metrics with our team, we’ll be happy to help you size your environment.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-is-there-a-minimum-commitment" data-title="Is there a minimum commitment?">
                        <div class="container">
                            <p>No long-term lock-in. We simply ask for a 30-day written notice before shutdown so we can decommission resources cleanly.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-where-will-my-data-be-hosted" data-title="Where will my data be hosted?">
                        <div class="container">
                            <p>During onboarding you pick the region that best fits compliance or latency needs (EU, North America, or APAC). All sites reside in ISO 27001/PCI-DSS-certified data centres.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-how-can-i-get-my-data-in-line-with-gdpr-requirements" data-title="How can I get my data in line with GDPR requirements?">
                        <div class="container">
                            <p>You can request a complete encrypted database dump at any time. We generate a full PostgreSQL dump of all tenant-level tables (entities, telemetry, audit logs, custom metadata) and transfer it to you over a secure channel (SFTP or your own cloud bucket). <br><br></p>
                            <p>Because the export is a raw DB dump, you retain 100 % data fidelity and can immediately restore it in another PostgreSQL instance or transform it into any machine-readable format you need. We normally fulfill export requests within 5 business days, and—in line with GDPR—can also execute verified deletion of all tenant data within 30 days of your erase request.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-is-your-private-cloud-service-gdpr-compliant" data-title="Is your Private Cloud service GDPR-compliant?">
                        <div class="container">
                            <p>Yes. You remain the sole Data Controller; ThingsBoard acts as a Data Processor under a standard DPA. Data never leaves the region you select, and you have the right to access, port or delete it at will.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-will-i-have-a-sysadmin-user" data-title="Will I have a sysadmin user?">
                        <div class="container">
                            <p>For security and SLA integrity we do not expose Sysadmin by default. If your workflow truly needs low-level access, we can provide read-only credentials to metrics/Kubernetes dashboards under an additional NDA.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-kind-of-security-measurements-do-you-provide" data-title="What kind of security measurements do you provide?">
                        <div class="container">
                            <p>Private Cloud is designed with enterprise-grade security at its core. Access to the infrastructure is limited to authorized ThingsBoard personnel only, with regular audits and monitoring in place. We follow industry best practices for patch management, vulnerability scanning, and secure software development. For added protection, customers may also enable 2FA, dedicated VPN tunnels, and audit logging depending on their plan.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-how-often-are-upgrades-conducted" data-title="How often are upgrades conducted?">
                        <div class="container">
                            <p>All Private Cloud upgrades—whether minor patches or major version releases—are scheduled in coordination with the customer. This ensures full transparency, minimizes disruption, and allows your team to prepare in advance. Our team handles the entire upgrade process and provides clear communication before and after each change to maintain operational continuity and SLA compliance.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-can-i-upgrade-my-plan-at-any-time" data-title="Can I upgrade my plan at any time?">
                        <div class="container">
                            <p>Upgrades are possible at any time, but they are not initiated automatically. The ThingsBoard team continuously monitors your resource usage and data point throughput. If your consumption exceeds the thresholds defined for your current tier, our team will notify you and guide the process of upgrading to a higher plan. This ensures uninterrupted service and compliance with SLA guarantees. You can also request an upgrade proactively if you anticipate growth or require additional capabilities.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-is-included-in-service-reviews-and-architecture-consultations" data-title="What is included in service reviews and architecture consultations?">
                        <div class="container">
                            <p>Service reviews and architecture consultations are a specialized, ongoing service available exclusively to ThingsBoard Private Cloud customers. These sessions provide structured, high-level guidance from a senior ThingsBoard engineer who collaborates with your team regularly. You’ll receive proactive recommendations on best practices, performance tuning, and scalable architecture design tailored to your evolving use case. <br><br></p>
                            <p>This service is not included by default and can be purchased separately for customers who require advanced architectural guidance and regular expert engagement. <a target="_blank" href="/docs/contact-us/?subject=Private%20Cloud&message=Architecture%20reviews%20and%20consults">Contact us</a> for more details.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-private-cloud-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-how-is-the-pricing-structured-for-private-cloud" data-title="How is the pricing structured for Private Cloud?">
                        <div class="container">
                            <p>The pricing for Private Cloud is based on the selected service tier. Each plan includes a specific device and data point rate limit to ensure proper resource allocation and SLA compliance. The available plans are: <br><br></p>
                            <ul>
                                <li>Launch: $1,499/month — includes up to 5,000 devices and up to 50,000 data points per minute; additional devices are billed at $0.1/device/month.</li>
                                <li>Growth: $2,199/month — includes up to 25,000 devices and up to 100,000 data points per minute; additional devices are billed at $0.09/device/month.</li>
                                <li>Scale: $3,999/month — includes up to 50,000 devices and up to 500,000 data points per minute; additional devices are billed at $0.08/device/month.</li>
                                <li>Enterprise: Custom pricing — includes 100,000 devices by default and no data point rate limits. Extendable as needed based on specific deployment requirements.</li>
                                <li>Short-term bursts up to 20% over the dp/minute ceiling for ≤ 15 min are tolerated. Sustained overages require a plan upgrade.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-do-you-offer-a-discount-for-annual-payments" data-title="Do you offer a discount for annual payments?">
                        <div class="container">
                            <p>Yes, we offer a 10% discount on all Private Cloud plans—including Launch, Growth, Scale, and Enterprise—if you choose to pay annually upfront. The annual subscription provides cost savings and simplifies billing by consolidating charges into a single yearly invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-payment-methods-are-accepted" data-title="What payment methods are accepted?">
                        <div class="container">
                            <p>We accept bank wire/ACH and credit- or debit-card payments. Card payments are processed securely via Stripe. All billing and invoicing is handled directly by the ThingsBoard Team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-is-included-in-the-monthly-subscription-fee" data-title="What is included in the monthly subscription fee?">
                        <div class="container">
                            <p>The monthly subscription fee for Private Cloud covers the full provisioning and maintenance of your dedicated environment. This includes platform licensing, infrastructure and system monitoring, software updates, security patching, 24/7 availability monitoring, and SLA-backed support. Each plan tier comes with a predefined allocation of devices, storage, and data point rate capacity. Any usage beyond those included limits (e.g., additional devices, storage, or add-ons) is calculated on top of your regular subscription fee according to your selected plan.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-are-there-any-setup-or-cancellation-fees" data-title="Are there any setup or cancellation fees?">
                        <div class="container">
                            <p>No. Start or stop whenever you like. We do ask for 30 days’ notice before cancellation so we can export your data and decommission the cluster cleanly.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-are-there-any-additional-costs-beyond-the-fixed-monthly-fee" data-title="Are there any additional costs beyond the fixed monthly fee?">
                        <div class="container">
                            <p>In addition to the base monthly fee for each plan, you may incur additional monthly charges for the following: <br></p>
                            <ul>
                                <li>devices beyond the included limit for your selected plan (see pricing table)</li>
                                <li>Additional storage usage beyond the included capacity - $0.50 per GB</li>
                                <li>Optional add-ons:
                                    <ul>
                                        <li>Dev/Test environment - $299/month</li>
                                        <li>White-labeled Mobile App - $99/month + one-time $1 000 build fee</li>
                                    </ul>
                                </li>
                            </ul>
                            <p>There are no data point rate overage fees—sustained traffic above plan limits requires an upgrade. Short-term bursts up to 20 % over the dp/minute ceiling for ≤ 15 min are tolerated. Sustained overages require a plan upgrade.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-are-there-any-payment-processing-fees" data-title="Are there any payment processing fees?">
                        <div class="container">
                            <p>No, we do not charge any additional processing fees for payments made via wire transfer or credit/debit card.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-are-invoices-issued-automatically" data-title="Are invoices issued automatically?">
                        <div class="container">
                            <p>Invoices are currently generated manually and sent to you at the start of each billing month, so you have the invoice in hand before the service period begins. We’re building a self-service billing portal with fully automated invoicing and expect to roll it out later this year.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-does-your-invoice-include-taxes" data-title="Does your invoice include taxes?">
                        <div class="container">
                            <p>Invoices are issued net of tax in USD. You are responsible for any local taxes that may apply in your jurisdiction.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-how-can-i-estimate-my-tco" data-title="How can I estimate my TCO?">
                        <div class="container">
                            <p>Use our online pricing calculator (link on the Plans page) to model monthly spend: select a tier, enter device count, expected message rate, storage needs and any add-ons. The tool instantly shows your projected bill; for Enterprise scenarios our sales engineers will build a custom cost model on request.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-can-i-switch-from-monthly-to-annual-billing-later" data-title="Can I switch from monthly to annual billing later?">
                        <div class="container">
                            <p>Yes, you can switch from monthly to annual billing at any time. Simply contact the ThingsBoard team, and we will coordinate the transition, apply the discount, and adjust your invoicing accordingly from your next billing cycle.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-happens-if-my-plan-upgraded-to-higher-tier-during-an-annual-subscription" data-title="What happens if my plan upgraded to higher tier during an annual subscription?">
                        <div class="container">
                            <p>If you upgrade your Private Cloud plan during an active annual subscription, the price difference will be calculated on a monthly basis for the remainder of the subscription term. The 10% annual discount will still apply to the new plan. This ensures billing transparency and flexibility while preserving your discount, even if your needs change mid-term.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-happens-if-i-add-an-add-on-during-an-annual-subscription" data-title="What happens if I add an add-on during an annual subscription?">
                        <div class="container">
                            <p>If you add an add-on (such as Trendz, TBMQ, or Mobile App) during an active annual subscription, the additional cost will be calculated on a monthly basis for the remainder of the subscription period. The 10% annual discount will still apply to the added feature (not for storage and additional device fee) for the months it is active within the billing year. This ensures consistent billing logic across upgrades and add-on usage without requiring a full plan change.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-private-cloud-usageAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-exactly-counts-as-a-device" data-title="What exactly counts as a “device”?">
                        <div class="container">
                            <p>A device is any distinct IoT endpoint that the platform tracks as its own entity—i.e. a row in the Device table. A record can be created in three ways: <br></p>
                            <ul>
                                <li>Direct connection – the physical unit authenticates itself (token, X-509, access key). One unit → one record.</li>
                                <li>Gateway proxy – a gateway authenticates once, then forwards data for subordinate nodes. The gateway is one device, and each proxied node is an additional device (e.g., 1 gateway + 10 meters = 11 devices).</li>
                                <li>Server-side integration – data arrives through an integration connector (REST, Kafka, Pub/Sub, OPC-UA, etc.). If the payload identifies a new deviceName/deviceType, ThingsBoard auto-creates the record. Every such auto-created entry counts as a separate device.</li>
                                <li>Deleting or disabling a Device entry immediately frees that slot for a replacement, so you only pay for the active records shown in your Device list.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-how-are-datapoints-defined-and-metered" data-title="How are “messages” and “data points” defined and metered?">
                        <div class="container">
                            <p><b>What is a “message”?</b></p>
                            <p>A message is any application-layer packet that enters or leaves the platform—whether it’s uplink telemetry, an RPC call, an attribute update, or a downlink—regardless of transport protocol (MQTT, HTTP, CoAP, LwM2M) or integration. We measure sustained messages per minute, aggregated across all protocols.<br><br></p>
                            <p><b>What is a “data point”?</b></p>
                            <p>A data point is a single key/value pair (e.g., "temperature": 23.5) within a message payload. Because some messages bundle multiple measurements, the total number of data points often exceeds the raw message count.<br><br></p>
                            <p><b>How we count the data point limit?</b></p>
                            <p>Telemetry messages carry one or more data points (sensor readings, attribute updates, etc.). Each data point in a telemetry message counts as 1 toward your per-minute limit.</p>
                            <p>Non-telemetry messages (RPC calls or downlinks with no measurements) carry zero data points—but we still count each such message as 1 toward your per-minute limit.<br><br></p>
                            <p><b>Total data points per minute = telemetry data points + count of messages with zero data points.</b><br><br></p>
                            <p><b>Examples:</b></p>
                            <p>Telemetry Payload { "temperature": 23.5, "humidity": 62 } counts as 2 data points</p>
                            <p>Telemetry Payload { "latitude": 42.222222, "longitude": 73.333333, "speed": 55.5, "fuel": 92, "batteryLevel": 81 } counts as 5 data points.</p>
                            <p>RPC call payload { "method": "setGPIO", "params": {"pin": 4, "value": 1} } counts as 1 message/data point.<br><br></p>
                            <p>By treating messages without payload as one data point and counting every actual measurement as one data point, we ensure your plan’s per-minute limit reflects your true platform usage.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-happens-if-i-exceed-my-sustained-data-point-rate-limit" data-title="What happens if I exceed my sustained data point rate limit?">
                        <div class="container">
                            <p>The cluster tolerates brief spikes (see next answer). If sustained traffic stays above your tier’s ceiling, our monitoring flags it and we’ll ask you to upgrade. Plan upgrades are provisioned within three business days; remaining over-quota traffic may be throttled to protect platform stability.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-can-i-burst-above-the-data-point-limit-and-for-how-long" data-title="Can I burst above the data point limit and for how long?">
                        <div class="container">
                            <p>Yes. Short-term bursts up to 20% above the stated dp-per-minute ceiling for 15 minutes or less are absorbed automatically and carry no penalty.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-how-do-i-monitor-my-current-device-data-point-and-storage-usage" data-title="How do I monitor my current device, data point, and storage usage?">
                        <div class="container">
                            <p>The Home dashboard contains information about number of devices and The API Usage dashboard contains information about hourly data point rates. The storage usage information is calculated from multiple data sources and available upon request. We are working on a way to embed it into the platform dashboards.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-telemetry-storage-is-included-and-what-data-consumes-it" data-title="What telemetry storage is included and what data consumes it?">
                        <div class="container">
                            <p>Each plan bundles a block-storage pool (Launch 500 GB, Growth 1 TB, Scale 2 TB; Enterprise custom). Telemetry, attributes, events, and file assets all consume this pool. When usage approaches the quota you can: (a) request to prune old data, (b) expand storage at $0.50 / GB / month, or (c) upgrade the plan. <br> <br></p>
                            <p><strong>Replication overhead</strong> <br></p>
                            <p>The figures above represent raw logical data. For durability the underlying databases keep multiple physical copies:</p>
                            <ul>
                                <li>PostgreSQL (metadata, latest-timeseries) is synchronously replicated 2×.</li>
                                <li>Cassandra (long-term telemetry) keeps 3× replicas by default.</li>
                            </ul>
                            <p>Therefore, 100 GB of logical telemetry stored in Cassandra will be accounted as 300 GB of physical disk space inside your pool, and 100 GB of metadata in PostgreSQL will consume roughly 200 GB. <br><br></p>
                            <p><strong>Note for Cassandra-backed deployments:</strong> <br></p>
                            <p>Telemetry rows receive a TTL (time-to-live) at the moment they are written. If the TTL is missing or longer than intended, those rows cannot be purged retrospectively; they will live until the TTL expires or the table is truncated. Be sure to set an appropriate TTL in your Rule Engine or integration pipeline when inserting data to keep storage growth predictable.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-how-long-is-telemetry-retained" data-title="How long is telemetry retained?">
                        <div class="container">
                            <p>Retention is 100 % customer-controlled through the built-in TTL settings or Rule Engine logic. Keep data for days or years—just remember that longer retention consumes more storage and may raise your bill.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-are-custom-data-retention-policies" data-title="What are Custom Data Retention Policies?">
                        <div class="container">
                            <p>These policies allow customers to control how long their data is kept. Storage limits are defined by the plan, and more can be added if needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-are-there-rest-websocket-api-rate-limits" data-title="Are there REST / WebSocket API rate limits?">
                        <div class="container">
                            <p>Yes. Per tenant, device and user limits prevent abuse and protect cluster health. The full tables are published <a target="_blank" href="/docs/private-cloud/subscription/">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-are-there-limits-on-dashboards-widgets-rule-chains-or-alarms" data-title="Are there limits on dashboards, widgets, rule chains, or alarms?">
                        <div class="container">
                            <p>In practice no—you may create as many dashboards, widgets, rule chains, and alarms as your project needs. Keep in mind, though, that the msg/minute SLA applies only to the default rule-chain templates we provision. Heavy or inefficient custom logic can slow processing. <br><br></p>
                            <p>To protect data integrity while you troubleshoot, every cluster ships with a Kafka buffer of up to 50 GB (roughly several hours of traffic, depending on throughput). Incoming telemetry is queued there until the Rule Engine catches up. If the buffer fills completely, the oldest data points are discarded first, so maintaining efficient rule chains is essential for uninterrupted data flow.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-how-many-user-accounts-and-tenants-can-i-create" data-title="How many user accounts and tenants can I create?">
                        <div class="container">
                            <p>User accounts are unlimited. Your Private Cloud instance is provisioned for a single top-level system administrator; that system administrator can create any number of tenants, customers and sub-customers and users without extra charge.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-whats-the-maximum-size-for-firmware-or-file-uploads-ota-assets" data-title="What’s the maximum size for firmware or file uploads (OTA, assets)?">
                        <div class="container">
                            <p>Individual file uploads are limited to 5 MB. Larger OTA bundles can be delivered by hosting them externally and serving the URL to edge devices.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-how-often-are-backups-taken-and-how-long-are-they-kept" data-title="How often are backups taken and how long are they kept?">
                        <div class="container">
                            <p>Nightly snapshots (full or incremental, depending on data churn) are stored in a separate cloud region. We retain backups for 7 days by default; longer retention can be arranged under the Enterprise tier.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-if-i-outgrow-my-plan-how-quickly-can-i-upgrade-and-will-there-be-downtime" data-title="If I outgrow my plan, how quickly can I upgrade and will there be downtime?">
                        <div class="container">
                            <p>Notify us as soon as you foresee sustained traffic growth. We provision the larger tier within three business days. Upgrades are performed live on Kubernetes; no downtime is expected, though brief reconnections (&lt;1 min) may occur when scaling nodes.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-are-the-device-limits-private-cloud-plans" data-title="What are the device limits Private Cloud plans?">
                        <div class="container">
                            <p>Each plan includes a different default device capacity:</p>
                            <ul>
                                <li>Launch: 5,000 devices</li>
                                <li>Growth: 25,000 devices</li>
                                <li>Scale: 50,000 devices</li>
                                <li>Enterprise: unlimited devices</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-happens-if-i-exceed-my-included-device-limit" data-title="What happens if I exceed my included device limit?">
                        <div class="container">
                            <p>If you exceed the included device count, you can continue adding more devices by paying an additional per-device fee according to your plan. Exceeding the device limit does not automatically require a plan upgrade, as long as your data point rate per minute remains within the predefined operational thresholds.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-is-the-data-point-rate-limit-and-why-is-it-important" data-title="What is the data point rate limit and why is it important?">
                        <div class="container">
                            <p>Each Private Cloud plan includes a predefined data point rate limit measured in data points per minute. This is the most critical technical limit in our offering, as it defines how much telemetry and integration data your system can process without impacting performance or SLA. <br><br></p>
                            <p>The message rate limits per plan are:</p>
                            <ul>
                                <li>Launch: up to 50,000 data points per minute</li>
                                <li>Growth: up to 100,000 data points per minute</li>
                                <li>Scale: up to 200,000 data points per minute</li>
                                <li>Enterprise: Unlimited</li>
                            </ul>
                            <p>If your usage exceeds the limit of your current plan, a mandatory upgrade will be required to maintain service stability and SLA guarantees. Data points throughput is actively monitored by the ThingsBoard team.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-are-the-database-options-in-each-plan" data-title="What is the underlying database structure?">
                        <div class="container">
                            <p>All plans use PostgreSQL (SQL) with replication factor of 2 for entities storage and NoSQL (Cassandra) with a replication factor of 3 to store time-series data. Cassandra storage is more efficient—each data point occupies on average five times less space before replication.<br><br></p>
                            <p>PostgreSQL (SQL) is a relational database ideal for structured queries, transactional operations, and smaller workloads. It offers simplicity and consistency, making it perfect for monolithic deployments like the Launch plan.<br><br></p>
                            <p>Cassandra is a distributed NoSQL database designed for high availability and horizontal scalability. It is more than five times more efficient for storing large volumes of telemetry data, requiring significantly less storage space, while also delivering high performance and enabling seamless horizontal scaling.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-is-the-difference-between-2x-and-3x-replication" data-title="What is the difference between 2x and 3x replication?">
                        <div class="container">
                            <p>Data replication ensures durability and high availability of your data within the Private Cloud infrastructure. The replication level defines how many copies of your data are stored across different Availability Zones: <br></p>
                            <ul>
                                <li><b>PostgreSQL (SQL) — 2× replication:</b> data is stored in two copies across separate Availability Zones, using a primary–standby architecture.</li>
                                <li><b>Cassandra (NoSQL) — 3× replication:</b> data is stored in three copies across different Availability Zones, enabling quorum-based consistency.</li>
                            </ul>
                            <p>These replication settings apply to all planes. Higher replication improves fault tolerance and system resilience, making it especially important for production-grade deployments.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-does-multi-az-database-replication-mean" data-title="What does multi-AZ database replication mean?">
                        <div class="container">
                            <p>Multi-AZ (Availability Zone) database replication refers to the distribution of data copies across multiple physical data center locations within the same region. This provides enhanced fault tolerance, automatic failover, and increased uptime by ensuring that even if one availability zone goes down, your data and services remain accessible through other zones. It is a key feature in Growth, Scale, and Enterprise plans to support high availability and disaster resilience.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-what-does-geo-region-deployment-selection-include" data-title="What does geo-region deployment selection include?">
                        <div class="container">
                            <p>Geo-region deployment selection allows you to choose the specific geographic region where your Private Cloud instance will be hosted. This ensures your data is stored and processed in a location that meets your compliance or data sovereignty requirements. During onboarding, you can select region, and our team will deploy your environment accordingly. This feature is particularly valuable for organizations subject to regional data protection regulations or those with distributed global operations.<br><br></p>
                            <p><b>For the Launch plan, region selection is limited to the following supported regions:</b>
                            <ul>
                                <li><b>North America:</b> US West, US East, Mexico;</li>
                                <li><b>Europe:</b> Ireland, Stockholm;</li>
                                <li><b>Asia:</b> Taipei, Thailand, Mumbai.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tb-private-cloud-can-i-choose-a-specific-maintenance-window" data-title="Can I choose a specific maintenance window?">
                        <div class="container">
                            <p>Yes, you can. All Private Cloud plans imply scheduled maintenance windows. For Launch and Growth plans, our team will suggest available time slots within our standard working hours for you to choose from. For Scale and Enterprise plans, you can define any preferred maintenance window that best fits your operations. We coordinate with you to ensure that any upgrades or maintenance activities are performed within the agreed timeframe to minimize disruption.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-private-cloud-enterpriseSubscription" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-features-are-unique-to-the-enterprise-plan" data-title="What features are unique to the Enterprise plan?">
                        <div class="container">
                            <p>The Enterprise plan is tailored for customers with complex operational and business needs. While it builds on the same platform features, it introduces a separate, flexible billing model and the option for advanced engineering support at the application level. This combination enables organizations to manage Private Cloud at scale with greater control, specialized assistance, and the ability to align infrastructure with their unique workflows and compliance requirements.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-can-i-get-a-custom-sla" data-title="Can I get a custom SLA?">
                        <div class="container">
                            <p>The Enterprise plan includes a default SLA with a guaranteed uptime of 99.95%, which already meets the needs of most mission-critical applications. While fully custom SLAs are typically not required, we are open to discussing specific availability or support requirements on a case-by-case basis to ensure alignment with your business expectations.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-how-is-the-pricing-determined-for-the-enterprise-plan" data-title="How is the pricing determined for the Enterprise plan?">
                        <div class="container">
                            <p>Enterprise pricing is calculated based on multiple components to reflect the scale, flexibility, and support level required. The total cost typically consists of: <br></p>
                            <ul>
                                <li>Base fee – foundational cost for core platform access and services</li>
                                <li>Infrastructure processing costs – reflects actual compute and networking usage</li>
                                <li>Management fee – covers monitoring, updates, and support</li>
                                <li>Storage costs – based on allocated capacity and retention policy</li>
                                <li>Per-device fee – applies after the included 100,000 device threshold is exceeded</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-private-cloud-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-is-there-a-trial-option-for-private-cloud" data-title="Is there a trial option for Private Cloud?">
                        <div class="container">
                            <p>Trial access is available on <a target="_blank" href="/installations/choose-region/">ThingsBoard Cloud</a>, which allows you to explore the core features and capabilities of ThingsBoard without setup overhead.</p>
                            <p>For ThingsBoard Private Cloud, trials are not applicable due to the use of dedicated infrastructure and custom deployment.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-can-i-downgrade-my-plan-later" data-title="Can I downgrade my plan later?">
                        <div class="container">
                            <p>Yes, you can downgrade your Private Cloud plan if your data point rate and resource usage fall within the thresholds of a lower-tier Private Cloud plan. Downgrades are coordinated with the ThingsBoard team to ensure service continuity and SLA compliance. If a downgrade results in a remaining balance, the unused portion of your subscription can either be refunded or applied as store credits for future use. However, it is not possible to downgrade from Private Cloud to ThingsBoard Cloud, as the architectures, infrastructure models, and operational processes differ entirely.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-are-there-any-fees-for-early-cancellation" data-title="Are there any fees for early cancellation?">
                        <div class="container">
                            <p>There are no cancellation fee for Private Cloud. However, since your Private Cloud instance runs on dedicated infrastructure, we kindly ask for at least 30 days' advance notice prior to cancellation to ensure smooth resource decommissioning and service wrap-up.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-if-i-cancel-will-you-return-my-data" data-title="If I cancel, will you return my data?">
                        <div class="container">
                            <p>Yes. Once we receive your cancellation notice, we prepare a full encrypted PostgreSQL/Cassandra dump of all your tenant data—including entities, telemetry, files, and audit logs—and deliver it to you over a secure channel (SFTP link or your own cloud bucket). You have up to 60 days after the cancellation date to download and verify the dump. After that 60-day grace period, all remaining backups and cluster data are permanently and securely deleted from our systems.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-thingsboard-private-cloud-addOns" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-can-i-purchase-additional-storage" data-title="Can I purchase additional storage?">
                        <div class="container">
                            <p>Yes, additional storage is available and automatically calculated based on your actual usage and retention policy. There's no need to make a separate manual request. At the end of each month, we assess your storage consumption, and any overage beyond your plan’s default quota is billed at $0.50 per GB. This ensures accurate, usage-based billing without administrative overhead on your side.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-is-included-in-the-dev-test-environment" data-title="What is included in the Dev/Test Environment?">
                        <div class="container">
                            <p>The Dev/Test Environment is a standalone deployment. It is designed to help you safely test configurations, validate integrations, and simulate real workflows before applying them in production—ensuring accuracy, minimizing risks, and supporting continuous development processes.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-are-high-availability-services-available-as-an-add-on" data-title="Are high-availability services available as an add-on?">
                        <div class="container">
                            <p>High-availability (HA) services are built into the structure of Private Cloud starting Scale plan and are not offered separately as an add-on. <br><br></p>
                            <p>If your usage or operational requirements indicate the need for HA, the ThingsBoard team will proactively recommend an upgrade to the appropriate tier.<br><br></p>
                            <p>This approach ensures consistent architecture, SLA alignment, and reliability without complicating plan configurations.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-edge-addon-cloud-what-is" data-title="What is Edge Computing add-on?">
                        <div class="container">
                            <p>The Edge Computing add-on enables local data processing at remote sites through ThingsBoard Edge PE instances. Edge runs independently with offline capability and automatically syncs with your central ThingsBoard PE Server when connectivity returns.</p>
                            <p>It is available for all ThingsBoard PE deployments: Cloud, Private Cloud, and self-managed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-edge-addon-cloud-pricing-plans" data-title="What pricing plans does Edge Computing add-on offer?">
                        <div class="container">
                            <p>Edge Computing add-on pricing depends on your ThingsBoard model. Check the relevant pricing in the <a href="/pricing/?section=thingsboard-pe-options&product=thingsboard-private-cloud&calculator/">Plan Calculator</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-trendz-what-is" data-title="What is Trendz?">
                        <div class="container">
                            <p>Trendz is an add-on for advanced IoT Data Analytics. It allows you to analyze, detect anomalies, and predict outcomes — all in one unified analytics workspace that works seamlessly with ThingsBoard. You can check pricing in the Plan calculator.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-trendz-pricing-plans" data-title="What pricing plans does Trendz offer?">
                        <div class="container">
                            <p>Trendz pricing depends on your ThingsBoard model. You can check the relevant pricing in the <a href="/pricing/?section=thingsboard-pe-options&product=thingsboard-private-cloud&calculator/">Plan Calculator</a> on this page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tb-private-cloud-what-is-included-in-the-white-labeled-mobile-app-add-on" data-title="What is included in the White-Labeled Mobile App add-on?">
                        <div class="container">
                            <p>The White-Labeled Mobile App add-on provides you with a branded version of the ThingsBoard Mobile application. This includes your company’s name, logo, colors, and other branding elements. The cost is $99 per month, plus a one-time setup fee of $1,000 to cover branding and configuration.</p>
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
                <div class="faq-section-option" id="edge" onClick="switchFaqSection('edge', this)">Edge</div>
                <div class="faq-section-option" id="trendz" onClick="switchFaqSection('trendz', this)">Trendz</div>
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
                            <p>To purchase a self-managed subscription, you can acquire a license through your <a target="_blank" href="https://license.thingsboard.io/">License Server</a> account. Each license comes with a unique activation key, which allows you to deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-purchase-perpetual-license" data-title="How to purchase a Perpetual license?">
                        <div class="container">
                            <p>If you would like to explore the Perpetual option, please <a target="_blank" href="/docs/contact-us/">contact our sales team</a></p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-license" data-title="What does it mean to get the license?">
                        <div class="container">
                            <p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a target="_blank" href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed installation guides.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-subscription-plans" data-title="What self-managed subscription plans does ThingsBoard offer?">
                        <div class="container">
                            <p>ThingsBoard offers flexible monthly subscription plans, with tiers based on the number of devices and assets. We support 5 predefined plans to cater to different needs. The beginner plan includes support for up to 10 devices. For more details, visit the ThingsBoard <a target="_blank" href="/pricing/?product=thingsboard-pe">pricing page</a>.</p>
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
                            <p>If you exceed your plan’s limits, you will need to upgrade to a higher-tier plan. With the Business plan, you can also purchase additional devices on a monthly basis at a rate of $0.10 per extra device.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-cloud-to-self-managed" data-title="Can I migrate from a ThingsBoard Cloud subscription to a self-managed license?">
                        <div class="container">
                            <p>Please, <a target="_blank" href="/docs/contact-us/">contact us</a> in case migration assistance is needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-self-managed-features" data-title="Are all ThingsBoard features included in every plan?">
                        <div class="container">
                            <p>White labeling is offered starting from the Prototype plan and above.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-license-multi-location" data-title="Can I use my license across multiple locations or instances?">
                        <div class="container">
                            <p>A platform instance can be installed on a single server, which may be a virtual machine, a running Docker container, or a single OS process. If you need to run the platform across multiple locations or as part of a clustered deployment, you can purchase additional instances for any plan as required. <br><br></p>
                            <p>By default, each license includes a predefined number of platform instances. The Maker, Prototype, and Pilot plans include one instance, the Startup plan includes two instances, and the Business plan includes three instances.</p>
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
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-what-is-included-in-the-white-labeled-mobile-app-add-on" data-title="What is included in the White-Labeled Mobile App add-on?">
                        <div class="container">
                            <p>The White-Labeled Mobile App add-on provides you with a branded version of the ThingsBoard Mobile application. This includes your company’s name, logo, colors, and other branding elements. The cost is $99 per month, plus a one-time setup fee of $1,000 to cover branding and configuration.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-billing-process" data-title="How does billing work for self-managed subscriptions?">
                        <div class="container">
                            <p>Billing is handled via Stripe and is charged monthly based on your selected plan. You can also pay annually with card or wire transfer. Please <a target="_blank" href="/docs/contact-us/">contact us</a> to receive a custom invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container">
                            <p>We accept credit and debit cards through Stripe. You can also pay annually with card or wire transfer. Please <a target="_blank" href="/docs/contact-us/">contact us</a> to receive a custom invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-wire-payment" data-title="I cannot pay by card, may we use wire instead?">
                        <div class="container">
                            <p>Sure. In this case, you must reach out to our sales team via <a target="_blank" href="/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-annual-payment" data-title="Do you offer an annual payment option?">
                        <div class="container">
                            <p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a target="_blank" href="/docs/contact-us/">contact</a> our team to arrange a wire transfer invoice.</p>
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
                            <p>Contact our <a target="_blank" href="/docs/contact-us/">sales team</a> for bulk pricing options.</p>
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
                            <p>No, we do not charge extra unless you want an additional service that we offer: professional support, Custom development and consulting, Training, or Managed service. </p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-usageDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-device-asset-limits" data-title="What are the device and asset limits for each plan?">
                        <div class="container">
                            <p>Maker: 10 devices<br>Prototype: 50 devices<br>Pilot: 100 devices<br>Startup: 500 devices<br>Business: 1000 devices, with the option to purchase additional devices at $0.10 per device per month</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-exceed-limits" data-title="What happens if I exceed my plan’s device or asset limit?">
                        <div class="container">
                            <p>You will need to upgrade to a higher-tier plan. With the Business plan, you also have the option to purchase additional devices at $0.10 per device per month.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-multiple-servers" data-title="Can I use my license on multiple servers?">
                        <div class="container">
                            <p>A platform instance can be installed on a single server, which may be a virtual machine, a running Docker container, or a single OS process. If you need to run the platform across multiple locations or as part of a clustered deployment, you can purchase additional instances for any plan as required. <br><br></p>
                            <p>By default, each license includes a predefined number of platform instances. The Maker, Prototype, and Pilot plans include one instance, the Startup plan includes two instances, and the Business plan includes three instances.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-api-storage-fees" data-title="Does ThingsBoard charge for API calls or storage?">
                        <div class="container">
                            <p>No, but you may be charged by your cloud provider for resource usage.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-internet-requirement" data-title="Do I need an internet connection to use the self-managed license?">
                        <div class="container">
                            <p>Yes, an internet connection is required for periodic license verification. The system checks the license once per hour, and if the connection is not restored within 24 hours, the platform may shut down. This process ensures proper license management while allowing temporary connectivity issues. For more details, please refer to the license check <a target="_blank" href="/products/license-server/#architecture">description</a>. Offline mode is also possible as an add-on to the Perpetual license. <a target="_blank" href="/docs/contact-us/">Contact our sales team</a> to know more.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-offline-access" data-title="Can I run offline?">
                        <div class="container">
                            <p>By default, the platform requires active Internet access or at least access to license portal from your host machine. If Offline access is a must, please <a target="_blank" href="/docs/contact-us/">contact us</a> to discuss options.</p>
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
                            <p>ThingsBoard supports PostgreSQL or PostgreSQL + Cassandra (Hybrid mode) for telemetry storage. For more details on database options, you can check <a target="_blank" href="/docs/reference/#sql-vs-nosql-vs-hybrid-database-approach">here</a>.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-multi-tenancy" data-title="Does ThingsBoard support multi-tenancy?">
                        <div class="container">
                            <p>Yes, multi-tenancy is supported out of the box.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="pe-pay-as-you-go-customer-billing" data-title="How to charge my customers?">
                        <div class="container">
                            <p>So far, the ThingsBoard platform does not provide a billing module to charge end customers. At the same time, the platform exposes the <a target="_blank" href="https://thingsboard.cloud/swagger-ui/#/usage-info-controller">Usage API</a> that can be used by the external payment software to generate invoices.</p>
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
                            <p>Please stay tuned with our <a target="_blank" href="/docs/pe/reference/releases/">Release notes</a>. Critical vulnerabilities or security issues are mentioned in separate line items. Less threatful vulnerabilities appear as a single record (“Vulnerability fixes”) stating that, at the release date, the version is free of known HIGH and some MEDIUM CVEs.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-try-license" data-title="Can I try a self-managed license before subscribing?">
                        <div class="container">
                            <p>Yes, the Maker plan ($10/month) is a low-cost way to explore the platform. It also includes trial license for Edge and Trendz products, so you can fully test the ThingsBoard ecosystem.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-cancel-subscription" data-title="What happens if I cancel my subscription?">
                        <div class="container">
                            <p>Your license will become inactive, and your ThingsBoard instance will be stopped.</p>
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
                            <p>- Maker and Prototype: Community support.<br>- Startup: Support with 36-hour response time during regular working shifts via Support Portal.<br>&#8195;Please note: Support for the Startup plan becomes available from the second month of usage.<br>- Business: Support with 12-hour response time during regular working shifts via Support Portal.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-24-7-support" data-title="Do you offer 24/7 support?">
                        <div class="container">
                            <p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for more details.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-installation-help" data-title="How can I get help with installation and setup?">
                        <div class="container">
                            <p>If your subscription plan includes response time support and you have access to the Support Portal, the ThingsBoard support team can assist with system deployment as part of the subscription. However, this applies only if you follow recommended installation methods and architecture. Custom installation scripts or non-recommended deployment scenarios are not covered under included support. If your subscription plan does not include support, then we recommend using our documentation, tutorials, and optional professional services. To discuss options, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-contact-support" data-title="How do I contact support?">
                        <div class="container">
                            <p>Users of Startup and higher subscriptions, as well as perpetual license holders, are automatically added to the ThingsBoard <a target="_blank" href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Support Portal</a> after purchasing a license.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-support-issues" data-title="What issues are included in subscription support?">
                        <div class="container">
                            <p>Access to the ThingsBoard Support Portal is available for users with Startup and higher subscriptions, as well as perpetual license holders. Without the need for a separate support agreement, all support inquiries are seamlessly managed through a unified queue, ensuring efficient handling of your requests. Our support team is dedicated to providing an initial response within 24 hours to address your needs promptly. <br><br></p>
                            <p>The support service includes assistance with installation and migration for default deployments, as well as resolving any questions related to the platform's out-of-the-box functionalities, as detailed in our documentation. For specialized services such as consulting, code reviews, health assessments, or development projects, we offer tailored solutions to meet your specific requirements. Should your request involve additional expertise, our support engineers will guide you to the best resources to ensure your success.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="pe-pay-as-you-go-development-services" data-title="Can you provide an IoT development service tailored to my specific needs?">
                        <div class="container">
                            <p>Yes, we offer custom <a target="_blank" href="/services/development-services/">IoT development services</a> designed to match your exact requirements. Whether you need a full-featured IoT platform, scalable architecture, or specific integrations, our IoT development team can help you accelerate time-to-market and reduce internal workload while ensuring long-term maintainability.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-edge" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="edge-addon-payg-what-is" data-title="What is Edge Computing add-on?">
                        <div class="container">
                            <p>The Edge Computing add-on enables local data processing at remote sites through ThingsBoard Edge PE instances. Edge runs independently with offline capability and automatically syncs with your central ThingsBoard PE Server when connectivity returns.</p>
                            <p>It is available for all ThingsBoard PE deployments: Cloud, Private Cloud, and self-managed.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-payg-pricing-plans" data-title="What pricing plans does Edge Computing add-on offer?">
                        <div class="container">
                            <p>Edge Computing add-on pricing depends on your ThingsBoard model. Check the relevant pricing in the <a href="/pricing/?product=thingsboard-pe&calculatorPayg">Plan Calculator</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-payg-compatibility" data-title="Does Edge work with both ThingsBoard PE and CE?">
                        <div class="container">
                            <p>Edge edition must match your ThingsBoard Server edition:</p>
                            <ul>
                                <li><b>Edge PE</b> connects to ThingsBoard PE Server.</li>
                                <li><b>Edge CE</b> connects to ThingsBoard CE Server.</li>
                            </ul>
                            <p>Note: Community Editions are free and open-source.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-payg-standalone" data-title="Can I use Edge without ThingsBoard?">
                        <div class="container">
                            <p>No, Edge PE requires a ThingsBoard PE Server (Cloud, Private Cloud, or self-managed) to provision devices, sync configurations, and exchange data. However, it processes data locally and can operate offline when the connection drops.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-payg-free-trial" data-title="Do you offer a free trial for Edge?">
                        <div class="container">
                            <p>You can start with the <b>Free</b> plan (limited to 10 devices) with the Edge Computing add-on permanently enabled. This lets you explore Edge PE features at no cost.</p>
                            <p>For larger deployments, you can upgrade to paid plans with higher device limits and additional features.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="edge-addon-payg-capacity" data-title="Can Edge handle my device volume?">
                        <div class="container">
                            <p>We recommend up to 1,000 devices per Edge instance based on typical edge hardware and connectivity constraints. You can exceed this number depending on your hardware capabilities. For more capacity, deploy multiple Edge instances or, starting with version 4.0, cluster Edge nodes for high availability.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-instances-included" data-title="How many edge instances are included in Edge Computing add-on?">
                        <div class="container">
                            <p>The number of included Edge instances depends on your subscription plan. Additional instances can be purchased separately. Check your plan details or <a target="_blank" href="/docs/contact-us/">contact us</a> for specifics.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-inclusions" data-title="What's included in the Edge Computing add-on price?">
                        <div class="container">
                            <p>The Edge add-on includes: software license, software updates (duration varies by license type), and support level based on your ThingsBoard PE plan. Hardware and infrastructure are not included — you provide your own edge hardware.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-activate-cancel" data-title="How to activate or cancel Edge Computing add-on license?">
                        <div class="container">
                            <p>To activate your Edge Computing add-on, log in to the License Portal and follow this path:</p>
                            <p><b>ThingsBoard license details &rarr; Manage Add-ons &rarr; Enable the checkbox for Edge Computing add-on &rarr; Save the changes.</b></p>
                            <p>If you cancel your license before the billing period ends, the funds for the remaining period will stay on your balance but will not be refundable.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-hardware" data-title="What hardware is required to run Edge Instance?">
                        <div class="container">
                            <p>Edge runs on any machine meeting these minimums:</p>
                            <ul>
                                <li><b>Light workloads:</b> 1GB+ RAM, 2 CPU cores, 10GB storage (e.g., Raspberry Pi).</li>
                                <li><b>Heavy use:</b> 4GB+ RAM, 4+ CPU cores, 20GB+ storage (e.g., Industrial PCs, Edge servers, VMs).</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-billing" data-title="How is Edge Computing add-on billed?">
                        <div class="container">
                            <p>Edge Computing add-on is billed monthly, along with your main ThingsBoard subscription. The price depends on your plan plus any additional instances you purchase.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-protocols" data-title="I have devices that use proprietary protocols. Can Edge connect to them?">
                        <div class="container">
                            <p>Yes. Edge natively supports MQTT, CoAP, HTTP, SNMP, and LwM2M. For other protocols, use:</p>
                            <ul>
                                <li>The <b>ThingsBoard IoT Gateway</b> to bridge legacy devices. The Gateway supports Modbus, BACnet, OPC-UA, and more, and is available at no extra cost.</li>
                                <li>The <b>Platform Integrations</b> to connect via OPC-UA, ChirpStack, and 30+ other systems using the converter library.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-ui-customization" data-title="Is UI customization available out of the box?">
                        <div class="container">
                            <p>The Edge Computing add-on includes UI customization out of the box, such as white-labeling (custom branding throughout the interface) and custom menu configuration — both available without code changes.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-security" data-title="Is my Edge instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but Edge provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-updates" data-title="Are software updates included?">
                        <div class="container">
                            <p>Yes. Software updates are included with active Edge licenses:</p>
                            <ul>
                                <li><b>Subscription licenses:</b> Receive updates throughout the subscription period.</li>
                                <li><b>Perpetual licenses:</b> Include 1 year of updates, renewable annually.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-expiration" data-title="What happens when my Edge subscription expires?">
                        <div class="container">
                            <p>Your Edge instance will stop functioning when the license expires. You'll need to renew your Edge license to continue using the instance.</p>
                            <p>For <b>perpetual licenses</b>, only updates and support expire — the Edge instance continues running.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-upgrade-ce-pe" data-title="Can I upgrade from Edge CE to Edge PE?">
                        <div class="container">
                            <p>Yes, but you'll need to upgrade your entire system: upgrade your ThingsBoard Server from CE to PE, purchase the Edge Computing add-on, and reinstall Edge using PE packages. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for migration assistance.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="edge-addon-payg-separate-license" data-title="Do I need a separate license to use Edge Computing add-on?">
                        <div class="container">
                            <p>No. Once you have an active ThingsBoard PE license (Cloud, Private Cloud, or self-managed), you can purchase and activate the Edge Computing add-on directly. The add-on itself serves as the license for your Edge instances. No additional licensing is required.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-pe-pay-as-you-go-trendz" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="trendz-payg-what-is" data-title="What is Trendz?">
                        <div class="container">
                            <p>Trendz is an add-on for advanced IoT Data Analytics. It allows you to analyze, detect anomalies, and predict outcomes — all in one unified analytics workspace that works seamlessly with ThingsBoard. You can check pricing in the <a target="_blank"  href="/pricing/?section=thingsboard-pe-options&product=thingsboard-pe&solution=pe-perpetual&calculatorPayg">Plan Calculator</a>.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-payg-pricing-plans" data-title="What pricing plans does Trendz offer?">
                        <div class="container">
                            <p>Trendz pricing depends on your ThingsBoard model. You can check the relevant pricing in the <a target="_blank" href="/pricing/?section=thingsboard-pe-options&product=thingsboard-pe&solution=pe-perpetual&calculatorPayg">Plan Calculator</a> on this page.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-payg-activate-cancel" data-title="How to activate or cancel Trendz license?">
                        <div class="container">
                            <p>To activate your Trendz license, log in to the License Portal and follow this path:</p>
                            <p><b>ThingsBoard license details &rarr; Manage Add-ons &rarr; Enable the checkbox for Trendz &rarr; Save the changes.</b></p>
                            <p>If you cancel your license before the billing period ends, the funds for the remaining period will stay on your balance but will not be refundable.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-payg-additional-fees" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container">
                            <p>No, we do not charge extra unless you want an additional service that we offer, such as:</p>
                            <ul>
                                <li>Professional support</li>
                                <li>Custom development and consulting</li>
                                <li>Training</li>
                                <li>Managed services</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-payg-pe-vs-ce" data-title="Does Trendz work with both ThingsBoard PE and CE?">
                        <div class="container">
                            <p>No, Trendz can be integrated with ThingsBoard Professional Edition (PE), but it is not available in ThingsBoard Community Edition (CE).</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="trendz-payg-license-types" data-title="Can ThingsBoard and Trendz Analytics have different license types?">
                        <div class="container">
                            <p>No, ThingsBoard and Trendz Analytics must have the same license type to function correctly. Trendz Analytics automatically detects all devices and assets from your ThingsBoard instance, along with their relationships.</p>
                            <p>It analyzes all entities without the option to select specific ones. You can't select specific devices or assets; all entities will be analyzed and added to the 'business entity' column.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-standalone" data-title="Can I use Trendz without ThingsBoard?">
                        <div class="container">
                            <p>No, you cannot use Trendz without ThingsBoard. Trendz automatically detects and analyzes all entities from your ThingsBoard instance. Without ThingsBoard, Trendz has no data source to work with, making it incompatible for use on its own.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-white-labeling" data-title="Is white labeling available out of the box?">
                        <div class="container">
                            <p>White labeling functionality is available starting from the <b>Pilot</b> subscription.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-free-trial" data-title="Do you offer a free trial for Trendz?">
                        <div class="container">
                            <p>ThingsBoard Maker includes Trendz for free. If you need a free trial for other subscriptions, <a target="_blank" href="/docs/contact-us/">Contact us</a> for details.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-support-types" data-title="What support is included in my plan?">
                        <div class="container">
                            <p>The <b>Maker</b> and <b>Prototype</b> subscriptions include Community-level support. Starting from the <b>Startup</b> subscription, customers gain access to the ThingsBoard Support Portal for direct communication with the support team.</p>
                            <p><i>Community support is a free initiative provided by the Trendz team and other contributors as a voluntary effort. While our engineers often assist with community requests during their free time, this support comes with no formal obligation from the Trendz team. We highly encourage users to consult the documentation for guidance.</i></p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-server-location" data-title="Which server should Trendz Analytics be installed on?">
                        <div class="container">
                            <p>Trendz can be installed on the same server as your ThingsBoard instance or on a separate server, depending on your preferences and infrastructure.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-backup" data-title="Can I back up my Trendz instance?">
                        <div class="container">
                            <p>Yes, backups depend on your database and storage setup.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-security" data-title="Is my Trendz instance secure?">
                        <div class="container">
                            <p>Security depends on your infrastructure setup, but Trendz provides built-in authentication, role-based access control, and encryption.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="trendz-payg-installation-help" data-title="How can I get help with installation and setup?">
                        <div class="container">
                            <p>If your subscription plan includes basic support and you have access to the Support Portal, the Trendz support team can assist with system deployment as part of basic support. However, this applies only if you follow recommended installation methods and architecture. Custom installation scripts or non-recommended deployment scenarios are not covered under basic support.</p>
                            <p>If your subscription plan does not include basic support, we recommend using our documentation, tutorials, and optional professional services. To discuss options, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="tbmq-private-cloud" id="faq-tbmq-private-cloud">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billing" onClick="switchFaqSection('billing', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageAndLimits" onClick="switchFaqSection('usageAndLimits', this)">Usage & Limits</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="addOns" onClick="switchFaqSection('addOns', this)">Add-ons and Optional Features</div>
            </div>
            <div class="answers">
                <div id="faq-tbmq-private-cloud-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="tbmq-stand-for" data-title="What does “TBMQ Private Cloud” stand for?">
                        <div class="container">
                            <p>TBMQ Private Cloud is a fully managed, isolated deployment of the TBMQ Professional Edition that our team provisions and operates for you. We handle the infrastructure setup, apply security patches, monitor your environment 24×7, run automated backups, and provide an SLA-backed uptime guarantee (99.9 %–99.99 %, depending on subscription). Your engineering team can stay focused on developing IoT solutions and business logic without worrying about maintaining and scaling the MQTT infrastructure.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-diff-tb" data-title="What is the difference between TBMQ and ThingsBoard?">
                        <div class="container">
                            <p>TBMQ and ThingsBoard serve distinct purposes for customers:</p>
                            <ul>
                                <li>TBMQ is a high-performance, fault-tolerant MQTT broker designed solely for ingesting, routing, and distributing MQTT messages at massive scale. It focuses on efficient topic multiplexing into Kafka topics, enabling reliable, low-latency messaging for millions of devices.</li>
                                <li>ThingsBoard is an end-to-end IoT platform that includes device management, data collection, storage, visualization, rule engines, and dashboards. It integrates various protocols (MQTT, HTTP, CoAP) and offers user-friendly UI components, customizable workflows, and analytics.</li>
                            </ul>
                            <p>In practice, you might deploy TBMQ when you need a dedicated, scalable message pipeline—especially if you already use Kafka. ThingsBoard, on the other hand, provides a complete solution for IoT applications, enabling customers to onboard devices, process telemetry, and build dashboards without managing separate messaging infrastructure.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-compare-to-community-pe" data-title="How does TBMQ Private Cloud compare to TBMQ Community Edition or TBMQ Professional Edition?">
                        <div class="container">
                            <ul>
                                <li>TBMQ Community Edition is the open-source, highly scalable, and fault-tolerant MQTT broker. It is fully compliant with the MQTT protocol—suitable for custom setups where you manage everything yourself.</li>
                                <li>TBMQ Professional Edition (PE) is the fully licensed, commercial version of the TBMQ broker, engineered for massive scalability, high performance, and compliance. It is the right choice when you require full control over your deployment environment, seamless integration into your existing private infrastructure or cloud, and a flexible OPEX or CAPEX purchasing model.</li>
                                <li>TBMQ Private Cloud is a fully managed, production-grade deployment of TBMQ PE, isolated per customer, with 24×7 monitoring, automated backups, and an SLA-backed uptime guarantee. It’s the right choice when you need reliable MQTT infrastructure without managing DevOps.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-used-with-tb" data-title="Can TBMQ be used together with ThingsBoard?">
                        <div class="container">
                            <p>Yes, TBMQ can be used together with ThingsBoard or completely separately. TBMQ is an independent MQTT broker designed for high performance and scalability, while ThingsBoard is a full IoT platform with advanced features like dashboards, rule engine, and device management. When used together, TBMQ handles all MQTT messaging, and ThingsBoard processes, visualizes, and manages the data. However, there is no dependency between them—TBMQ works perfectly on its own if you only need a reliable MQTT layer, and ThingsBoard can also run with its built-in MQTT transport.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-pc-vs-sh" data-title="What are the benefits of Private Cloud versus self-hosting?">
                        <div class="container">
                            <ul>
                                <li>Zero DevOps overhead – no servers to set up, patch or monitor.</li>
                                <li>Guaranteed availability – written SLA of 99.9 – 99.99 %, with service-credit remedies.</li>
                                <li>Faster time-to-market – we stand up production clusters in 1-2 hours, not weeks.</li>
                                <li>Scalability – Kubernetes-based plans grow as device traffic spikes.</li>
                                <li>Predictable cost – one all-inclusive monthly fee replaces cap-ex plus staffing.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-uptime-calc" data-title="What is ‘uptime’ and how do you calculate it?">
                        <div class="container">
                            <p>Uptime (%) = ((Total Time – Downtime) / Total Time) × 100 <br><br></p>
                            <p>Total Time – number of minutes in the billing month.</p>
                            <p>Downtime – minutes when core broker services are unavailable for the administrator.</p>
                            <p>We measure Downtime from incident detection to full service restoration. <br><br></p>
                            <p>Excluded from Downtime:</p>
                            <ul>
                                <li>Scheduled maintenance announced ≥ 48 h in advance</li>
                                <li>Emergency security patches</li>
                                <li>Force-majeure events or upstream cloud failures (e.g., AWS region outage)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-deployment-options" data-title="What deployment options are available within Private Cloud?">
                        <div class="container">
                            <p>The TBMQ Private Cloud service offers a single, unified, fully managed deployment model that is isolated per customer. This service includes a base capacity of 5,000 Sessions and 1,000 messages per second Throughput, backed by a default Uptime SLA of 99.9%. If your deployment requires capacity or features beyond these base limits, you can easily purchase additional Sessions, Throughput, and add-ons (such as Network Traffic scaling) to meet your specific operational demands.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-for-whom" data-title="Who should choose Private Cloud?">
                        <div class="container">
                            <p>Private Cloud ideal for companies that want to avoid investing in DevOps resources, reduce operational risk, and accelerate time to market. They are particularly beneficial for startups, SMBs, or enterprises scaling production systems who prefer to offload platform operations and upgrades to the ThingsBoard team under a clear SLA.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-prerequisites" data-title="What are the prerequisites to get started?">
                        <div class="container">
                            <p>To get started with TBMQ Private Cloud, the primary prerequisite is a submission of the request form. Once your request is received, we schedule a short onboarding call with our team. This call is used to assess your specific workload and requirements, ensuring we configure the TBMQ Private Cloud deployment to perfectly align with your expected scale, capacity needs, and architectural preferences.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-minimum-commitment" data-title="Is there a minimum commitment?">
                        <div class="container">
                            <p>No long-term lock-in. We simply ask for a 30-day written notice before shutdown so we can decommission resources cleanly.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-data-hosted" data-title="Where will my data be hosted?">
                        <div class="container">
                            <p>During onboarding you pick the region that best fits compliance or latency needs (EU, North America, or APAC). All sites reside in ISO 27001/PCI-DSS-certified data centres.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-data-gdpr" data-title="How can I get my data in line with GDPR requirements?">
                        <div class="container">
                            <p>You can request a complete encrypted database dump at any time. We generate a full PostgreSQL dump of all system-level tables and transfer it to you over a secure channel (SFTP or your own cloud bucket). Because the export is a raw DB dump, you retain 100 % data fidelity and can immediately restore it in another PostgreSQL instance or transform it into any machine-readable format you need. We normally fulfill export requests within 5 business days, and—in line with GDPR—can also execute verified deletion of all system data within 30 days of your erase request.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-pc-gdpr-compliant" data-title="Is your Private Cloud service GDPR-compliant?">
                        <div class="container">
                            <p>Yes. You remain the sole Data Controller; TBMQ acts as a Data Bridge under a standard DPA. Data never leaves the region you select, and you have the right to access, port or delete it at will.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-cancel-return-data" data-title="If I cancel, will you return my data?">
                        <div class="container">
                            <p>Yes. Once we receive your cancellation notice, we prepare a full encrypted PostgreSQL/Redis/Kafka dump of all your admin data—including clients, subscriptions, telemetry—and deliver it to you over a secure channel (SFTP link or your own cloud bucket). You have up to 60 days after the cancellation date to download and verify the dump. After that 60-day grace period, all remaining backups and cluster data are permanently and securely deleted from our systems.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-security-measurements" data-title="What kind of security measurements do you provide?">
                        <div class="container">
                            <p>Private Cloud is designed with enterprise-grade security at its core. Access to the infrastructure is limited to authorized ThingsBoard personnel only, with regular audits and monitoring in place. We follow industry best practices for patch management, vulnerability scanning, and secure software development.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-upgrades-conductment" data-title="How often are upgrades conducted?">
                        <div class="container">
                            <p>All Private Cloud upgrades—whether minor patches or major version releases—are scheduled in coordination with the customer. This ensures full transparency, minimizes disruption, and allows your team to prepare in advance. Our team handles the entire upgrade process and provides clear communication before and after each change to maintain operational continuity and SLA compliance.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-tbmq-private-cloud-billing" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-pricing-structure" data-title="How is the pricing structured for Private Cloud?">
                        <div class="container">
                            <p>The pricing for TBMQ Private Cloud is structured around a single, transparent model based on the capacity and features you require. Every deployment includes a base capacity of 5,000 Sessions and 1,000 messages per second (msg/sec) of Throughput, backed by a 99.9% Uptime SLA. Your total monthly cost is determined by the purchased capacity beyond these base limits and any selected add-ons, such as Multi-AZ Deployment or scaling of Network Traffic capacity. If you exceed your licensed Session or Throughput capacity, this is considered an overage and requires an immediate license capacity adjustment to maintain continuous service.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-annual-discount" data-title="Do you offer a discount for annual payments?">
                        <div class="container">
                            <p>Yes, we offer a 10% discount on the TBMQ Private Cloud service if you choose to pay annually upfront. The annual subscription provides cost savings and simplifies billing by consolidating all monthly capacity, instance, and add-on charges into a single yearly invoice.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payment-methods" data-title="What payment methods are accepted?">
                        <div class="container">
                            <p>We accept bank wire/ACH and credit- or debit-card payments. Card payments are processed securely via Stripe. All billing and invoicing is handled directly by the ThingsBoard Team.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-monthly-fee-includes" data-title="What is included in the monthly subscription fee?">
                        <div class="container">
                            <p>The monthly subscription fee for Private Cloud covers the complete provisioning and maintenance of your dedicated environment. This includes platform licensing, system monitoring, infrastructure management, software updates, security patching, 24/7 availability monitoring, and SLA-backed support. The fee also includes a default allocation of sessions limit, storage, and message rate capacity depending on your needs.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-setup-cancellation-fees" data-title="Are there any setup or cancellation fees?">
                        <div class="container">
                            <p>No. Start or stop whenever you like. We do ask for 30 days’ notice before cancellation so we can export your data and decommission the cluster cleanly.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-additional-costs" data-title="Are there any additional costs beyond the fixed monthly fee?">
                        <div class="container">
                            <p>In addition to the base monthly fee, you may incur additional monthly charges for Network Traffic usage that exceeds the included monthly limit. This usage is billed at the rate of $0.10 per GB.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payment-processing-fees" data-title="Are there any payment processing fees?">
                        <div class="container">
                            <p>No, we do not charge any additional processing fees for payments made via wire transfer or credit/debit card.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-invoice-automation" data-title="Are invoices issued automatically?">
                        <div class="container">
                            <p>Invoices are currently generated manually and sent to you at the start of each billing month, so you have the invoice in hand before the service period begins. We’re building a self-service billing portal with fully automated invoicing and expect to roll it out later this year.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-invoice-taxes" data-title="Does your invoice include taxes?">
                        <div class="container">
                            <p>Invoices are issued net of tax in USD. You are responsible for any local taxes that may apply in your jurisdiction.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-switch-to-annual-billing" data-title="Can I switch from monthly to annual billing later?">
                        <div class="container">
                            <p>Yes, you can switch from monthly to annual billing at any time. Simply contact the ThingsBoard team, and we will coordinate the transition, apply the discount, and adjust your invoicing accordingly from your next billing cycle.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-annual-upgrade-higher-tier" data-title="What happens if my plan is upgraded to higher tier during an annual subscription?">
                        <div class="container">
                            <p>If you upgrade your Private Cloud plan during an active annual subscription, the price difference will be calculated on a monthly basis for the remainder of the subscription term. The 10% annual discount will still apply to the new plan. This ensures billing transparency and flexibility while preserving your discount, even if your needs change mid-term.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-dev-qa-price" data-title="What is the price for extra Dev & QA Instances?">
                        <div class="container">
                            <p>Additional Dev & QA Instances are priced at a fixed rate of $100 per instance, per month.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-sessions-price" data-title="What is the unit price for additional Sessions capacity?">
                        <div class="container">
                            <p>Sessions capacity is licensed on a flexible per-session, per-month basis. You can license any amount you require. The effective unit rate is calculated as $5.00 per 100 Sessions.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-throughput-price" data-title="What is the unit price for additional Throughput capacity?">
                        <div class="container">
                            <p>Throughput capacity is licensed on a flexible per-message-per-second (msg/sec), per-month basis. You can license any amount you require. The effective unit rate is calculated as $10.00 per 100 messages per second (msg/sec).</p>
                        </div>
                    </div>
                </div>
                <div id="faq-tbmq-private-cloud-usageAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-session-definition" data-title="What exactly counts as a “session”?">
                        <div class="container">
                            <p>A session is any active connection between an MQTT client and the TBMQ broker. Each session represents a single client, uniquely identified by its client ID, and counts toward your session quota.<br><br></p>
                            <p>If a client connects and maintains an active session, it occupies one slot in the session quota. When session persistence is enabled, a disconnected client still occupies a session slot, since its session data (subscriptions, messages, etc.) is retained by the broker.<br><br></p>
                            <p>A session slot is released only when the session has either expired or been explicitly removed. This means your session quota includes both currently connected clients and any disconnected clients with persisted sessions. Only clients with fully expired or deleted sessions free up capacity for new connections.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-total-msg-sec-definition" data-title="How is “throughput (msg/sec)” defined and metered?">
                        <div class="container">
                            <p>Total messages per second refers to the combined number of MQTT PUBLISH packets processed by the TBMQ each second. This includes both incoming messages from publishers and outgoing messages delivered to subscribers.<br><br></p>
                            <p>For example, if 100 devices each publish 10 messages per second, that results in 1,000 incoming messages per second. If each message is delivered to 2 subscribers, the outgoing volume is 2,000 messages per second. In this case, the total messages per second will be 3,000.<br><br></p>
                            <p>Only MQTT PUBLISH packets are counted—control packets like CONNECT, SUBSCRIBE, PINGREQ, etc., are excluded. This metric reflects the actual messaging throughput of your deployment and is used to ensure performance and SLA compliance.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-add-ons-subscription" data-title="Can I add anything to the subscription?">
                        <div class="container">
                            <p>Yes, you can enhance your Private Cloud subscription with several optional add-ons to customize your deployment. The available add-ons are Multi-AZ Deployment, which ensures greater fault tolerance by spreading your service across multiple availability zones; Dev and QA Instances, which provide dedicated, isolated environments for testing and staging; and Network Traffic, which allows you to purchase data transfer capacity beyond the included monthly limit.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-exceed-message-rate-limit" data-title="What happens if I exceed my sustained message-rate limit?">
                        <div class="container">
                            <p>The cluster tolerates brief spikes (see next answer). If sustained traffic stays above your tier’s ceiling, our monitoring flags it and we’ll ask you to upgrade. Plan upgrades are provisioned within three business days; remaining over-quota traffic may be throttled to protect platform stability.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-burst-message-limit" data-title="Can I burst above the message limit and for how long?">
                        <div class="container">
                            <p>Yes. Short-term bursts up to 10% above the stated msgs-per-second ceiling for 5 minutes or less are absorbed automatically and carry no penalty.</p>
                        </div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)">
                        <h4 class="title">Load more FAQ</h4>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-monitor-usage" data-title="How do I monitor my current session, message, traffic, and storage usage?">
                        <div class="container">
                            <p>The Home dashboard contains information about the number of active and persisted sessions. The monitoring dashboard shows per-minute message rates for both incoming and outgoing MQTT traffic. Storage usage is calculated from multiple internal sources and is available upon request. We are working on making storage metrics visible directly within the platform dashboards.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-undelivered-message-retention" data-title="How long are undelivered messages for persistent sessions retained?">
                        <div class="container">
                            <p>Undelivered messages for persistent sessions are retained for 1 day. After that period, they are automatically discarded.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-user-admin-creation" data-title="How many user admins can I create?">
                        <div class="container">
                            <p>User accounts are unlimited. Your TBMQ Private Cloud instance is provisioned for a top-level system administrator; that administrator can create any number of additional admin users without extra charge.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-backup-frequency-retention" data-title="How often are backups taken and how long are they kept?">
                        <div class="container">
                            <p>Nightly snapshots (full or incremental, depending on data churn) are stored in a separate cloud region. We retain backups for 7 days by default.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-outgrow-plan-upgrade" data-title="If I outgrow my plan, how quickly can I upgrade and will there be downtime?">
                        <div class="container">
                            <p>Notify us as soon as you foresee sustained traffic growth. We provision the larger tier within three business days. Upgrades are performed live on Kubernetes; no downtime is expected, though brief reconnections (&lt;1 min) may occur when scaling nodes.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-telemetry-storage-included" data-title="What telemetry storage is included and what data consumes it?">
                        <div class="container">
                            <p>TBMQ Private Cloud includes persistent storage for undelivered messages, used by Kafka (for Application clients) and Redis (for Device clients). While there is no fixed storage quota, the system enforces internal limits to ensure stability and performance.</p>
                            <p>Kafka and Redis can be both deployed with replication for durability (if add-on is enabled), which means actual disk usage is higher than the logical size of retained data. Undelivered messages are retained based on session type and expiration settings.</p>
                            <p>If storage usage grows beyond safe thresholds, the system will clean up old persistent messages. We monitor usage and can work with you to tune limits or expand capacity if needed.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-message-rate-limit-importance" data-title="What is the message rate limit and why is it important?">
                        <div class="container">
                            <p>The message rate limit, also referred to as Throughput, is measured in total messages processed per second (msg/sec). This is a critical technical limit because it defines the maximum amount of telemetry data your system can reliably process without impacting performance or our Uptime SLA. The Private Cloud service includes a base limit of 1,000 total messages per second, which you can increase by purchasing additional capacity. If your usage exceeds the licensed limit, a mandatory capacity adjustment will be required to maintain service stability and SLA guarantees. Message throughput is actively monitored by the TBMQ Team.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-geo-region-deployment" data-title="What does geo-region deployment selection include?">
                        <div class="container">
                            <p>Geo-region deployment selection allows you to choose the specific geographic region where your Private Cloud instance will be hosted. This ensures your data is stored and processed in a location that meets your compliance or data sovereignty requirements. During onboarding, you can select region, and our team will deploy your environment accordingly. This feature is particularly valuable for organizations subject to regional data protection regulations or those with distributed global operations.<br><br></p>
                            <p><b>For the Launch plan, region selection is limited to the following supported regions:</b>
                            <ul>
                                <li><b>North America:</b> US West, US East, Mexico;</li>
                                <li><b>Europe:</b> Ireland, Stockholm;</li>
                                <li><b>Asia:</b> Taipei, Thailand, Mumbai.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-maintenance-window-selection" data-title="Can I choose a specific maintenance window?">
                        <div class="container">
                            <p>Yes, you can. Private Cloud subscription allow customers to request and define a preferred maintenance window. This ensures any upgrades or maintenance activities are scheduled at a time that minimizes disruption to your operations. Our team coordinates with you to honor this window whenever changes are required.</p>
                        </div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-additional-limits" data-title="Are there any additional limits?">
                        <div class="container">
                            <p>Yes, TBMQ Private Cloud subscription has sessions, messages, and storage limits. See subscription <a target="_blank" href="/docs/mqtt-broker/subscription/">documentation</a> for more details.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-tbmq-private-cloud-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-trial-option" data-title="Is there a trial option for Private Cloud?">
                        <div class="container">
                            <p>Trial access is available by deploying TBMQ Community Edition, which lets you explore the core MQTT features in your own environment. <br><br></p>
                            <p>For TBMQ Private Cloud, trials are not applicable due to the use of dedicated infrastructure and custom deployment.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-downgrade-plan" data-title="Can I downgrade my plan later?">
                        <div class="container">
                            <p>Yes, you can reduce your licensed capacity in the TBMQ Private Cloud service if your message rate and resource usage decrease. Since we operate on a single flexible model, reducing capacity means coordinating with the TBMQ team to adjust your licensed Sessions, Throughput, and Instance count to a level that matches your current operational needs. These adjustments are coordinated to ensure service continuity and SLA compliance.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-upgrade-plan" data-title="Can I upgrade my plan at any time?">
                        <div class="container">
                            <p>Upgrades are possible at any time, but they are not initiated automatically. The ThingsBoard team continuously monitors your resource usage and message throughput. If your consumption exceeds the thresholds defined for your current tier, our team will notify you and guide the process of upgrading to a higher plan. This ensures uninterrupted service and compliance with SLA guarantees. You can also request an upgrade proactively if you anticipate growth or require additional capabilities.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-early-cancellation-fees" data-title="Are there any fees for early cancellation?">
                        <div class="container">
                            <p>There is no cancellation fee for Private Cloud. However, since your Private Cloud instance runs on dedicated infrastructure, we kindly ask for at least 30 days' advance notice prior to cancellation to ensure smooth resource decommissioning and service wrap-up.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-cancel-return-data" data-title="If I cancel, will you return my data?">
                        <div class="container">
                            <p>Yes. Once we receive your cancellation notice, we prepare a full encrypted PostgreSQL/Redis/Kafka dump of all your admin data—including clients, subscriptions, telemetry—and deliver it to you over a secure channel (SFTP link or your own cloud bucket). You have up to 60 days after the cancellation date to download and verify the dump. After that 60-day grace period, all remaining backups and cluster data are permanently and securely deleted from our systems.</p>
                        </div>
                    </div>
                </div>
                <div id="faq-tbmq-private-cloud-addOns" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-ha-services-addon" data-title="Are high-availability services available as an add-on?">
                        <div class="container">
                            <p>Yes, high-availability services are available as an optional add-on for the TBMQ Private Cloud service. This feature, known as Multi-AZ Deployment, ensures greater fault tolerance and reliability by deploying your dedicated environment across multiple availability zones and is backed by an enhanced Uptime SLA.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-dev-qa-addon-reason" data-title="Why would I need the Dev & QA Instances add-on?">
                        <div class="container">
                            <p>The Dev and QA Instances add-on provides dedicated, isolated broker environments specifically for development, staging, testing, and CI/CD workflows. The primary purpose is to ensure that all testing, integration, and code changes are executed without impacting the stability, performance, or data integrity of your live Production environment.</p>
                        </div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-network-traffic-addon" data-title="What is the Network Traffic add-on and how is it billed?">
                        <div class="container">
                            <p>Network Traffic refers to the total volume of data transfer, including both incoming data to the broker and outgoing data to your applications. The base Private Cloud service includes a specific allocation of network traffic (200 GB). The Network Traffic add-on allows you to extend the usage that exceeds the included allocation. Any usage beyond the included monthly limit is billed monthly at the rate of $0.10 per GB.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="community-edition" id="faq-tbmq-ce">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="installationAndDeployment" onClick="switchFaqSection('installationAndDeployment', this)">Installation & Deployment</div>
                <div class="faq-section-option" id="featuresAndLimitations" onClick="switchFaqSection('featuresAndLimitations', this)">Features & Limitations</div>
                <div class="faq-section-option" id="supportAndCommunityAssistance" onClick="switchFaqSection('supportAndCommunityAssistance', this)">Support & Community Assistance</div>
                <div class="faq-section-option" id="upgradingToEnterpriseEdition" onClick="switchFaqSection('upgradingToEnterpriseEdition', this)">Upgrading to Enterprise Edition</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
            </div>
            <div class="answers">
                <div id="faq-tbmq-ce-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="what-is-tbmq-ce" data-title="What is TBMQ Community Edition?">
                        <div class="container"><p>TBMQ Community Edition (CE) is the free and open-source version of the TBMQ - a highly scalable and fault-tolerant MQTT broker designed for efficient and reliable message routing between connected devices and applications using the MQTT protocol. TBMQ CE is available under the Apache 2.0 license.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="is-tbmq-ce-free" data-title="Is the Community Edition free to use?">
                        <div class="container"><p>Yes, it is completely free, with no licensing fees or hidden costs.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-commercial-use" data-title="Can I use TBMQ Community Edition for commercial projects?">
                        <div class="container"><p>Yes, TBMQ Community Edition can be used for commercial purposes. You can develop and deploy IoT solutions based on the Community Edition as part of your business operations. It is distributed under the Apache 2.0 license, which allows commercial use without the license or royalty fees.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-diff-pe" data-title="How does the Community Edition differ from Professional Edition?">
                        <div class="container"><p>Community Edition includes essential MQTT broker features with full support for MQTT 3.x and MQTT 5.0. The Professional Edition offers advanced features such as White Labeling, RBAC, Single sign-on, etc. You can find a more detailed comparison <a target="_blank" href="/products/mqtt-broker/">here</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-session-limits" data-title="Is there a limit on the number of sessions I can connect?">
                        <div class="container"><p>No, there are no programmatic limits, but performance depends on your server(s) capacity.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-message-limits" data-title="Is there a limit on the number of messages it can process?">
                        <div class="container"><p>No, there are no programmatic limits. TBMQ can handle high loads of millions of messages processed per second. Performance depends on your server(s) capacity.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-migration-pe" data-title="Is it possible to migrate from the Community Edition to the self-managed TBMQ Professional Edition?">
                        <div class="container"><p>Yes, you can upgrade from TBMQ Community Edition to Professional Edition without losing any data and/or configurations. The upgrade process preserves your existing setup, ensuring a seamless transition. However, please note that any custom modifications made directly to the source code of the Community Edition will be removed during the upgrade process. For more information about the migration procedure, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-clustering" data-title="Does the Community Edition support clustering?">
                        <div class="container"><p>Yes, clustering is fully supported in the Community Edition. You can find more details about deployment scenarios <a target="_blank" href="/docs/mqtt-broker/install/deployment-options/">here</a>.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-customize" data-title="Can I customize and modify the Community Edition?">
                        <div class="container"><p>Yes, the source code is available on <a target="_blank" href="https://github.com/thingsboard/tbmq">GitHub</a>, and you can fork and modify it according to your requirements. By the way, please consider starring our <a target="_blank" href="https://github.com/thingsboard/tbmq">repository★</a>.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-internet" data-title="Do I need an internet connection to use the Community Edition?">
                        <div class="container"><p>No, you can run it completely offline if needed.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-ce-installationAndDeployment" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-install-guide" data-title="How do I install TBMQ Community Edition?">
                        <div class="container"><p>Installation guides are available in the <a target="_blank" href="/docs/mqtt-broker/install/installation-options/">documentation</a>. The Community Edition can be installed in monolith or cluster mode, and supports deployment on Docker and Kubernetes.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-install-location" data-title="Where can I install the Community Edition?">
                        <div class="container"><p>You can install the Community Edition on your virtual machine, local servers, or any cloud provider infrastructure of your choice.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-db-support" data-title="What databases does the Community Edition support?">
                        <div class="container"><p>The Community Edition supports Kafka, Redis/Valkey, and PostgreSQL. For more details on database options, you can check <a target="_blank" href="/docs/mqtt-broker/architecture/">here</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-docker" data-title="Is there an official Docker image for Community Edition?">
                        <div class="container"><p>Yes, official Docker images are available on <a target="_blank" href="https://hub.docker.com/r/thingsboard/tbmq">Docker Hub</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-multitenancy" data-title="Does the Community Edition support multi-tenancy?">
                        <div class="container"><p>No, the TBMQ Community Edition does not support multi-tenancy.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-scaling" data-title="How can I scale a Community Edition deployment?">
                        <div class="container"><p>You can scale the Community Edition vertically by adding more resources for the server, and horizontally by using a cluster deployment.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-ce-featuresAndLimitations" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-features-list" data-title="What features are included in TBMQ Community Edition?">
                        <div class="container"><p>The Community Edition includes all essential MQTT broker features with full support for MQTT 3.x and MQTT 5.0. You can find all features and descriptions <a target="_blank" href="/docs/mqtt-broker/">here</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-pe-exclusive" data-title="What features are exclusive to the Professional Edition?">
                        <div class="container"><p>The Professional Edition offers advanced features such as White Labeling, RBAC, Single sign-on, etc. You can find a more detailed comparison <a target="_blank" href="/products/mqtt-broker/">here</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-white-label" data-title="Does the Community Edition support white-labeling?">
                        <div class="container"><p>No, white-labeling is available only in the Professional Edition.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-security-features" data-title="Are there any built-in security features?">
                        <div class="container"><p>Yes, the Community Edition supports secure MQTT connectivity, authentication, and authorization for MQTT clients.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-integrations" data-title="Can I integrate third-party systems with Community Edition?">
                        <div class="container"><p>Yes, you can integrate the TBMQ Community Edition with third-party systems through <a target="_blank" href="/docs/mqtt-broker/integrations/">platform integrations</a>.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-ce-supportAndCommunityAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-support" data-title="Is there out-of-the-box support from TBMQ team for Community Edition users?">
                        <div class="container"><p>The TBMQ team does not provide dedicated support for Community Edition users. However, users can access community-driven resources such as <a target="_blank" href="https://github.com/thingsboard/tbmq/discussions">forums</a>, <a target="_blank" href="/docs/mqtt-broker/">documentation</a>, and <a target="_blank" href="https://github.com/thingsboard/tbmq">GitHub</a> for assistance.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-paid-support" data-title="Can I purchase additional support for the Community Edition?">
                        <div class="container"><p>Depending on the type of support you are looking for, the TBMQ team may be able to offer certain types of additional support packages. To discuss your unique case and requirements, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-help" data-title="Where can I get help if I run into issues?">
                        <div class="container"><p><a target="_blank" href="https://github.com/thingsboard/tbmq/issues">GitHub</a> (report issues, contribute)<br><a target="_blank" href="https://stackoverflow.com/questions/tagged/thingsboard">Stack Overflow</a> (for developer-related questions)<br><a target="_blank" href="/docs/mqtt-broker/">Documentation & Tutorials</a></p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-feature-request" data-title="Can I request custom features or improvements?">
                        <div class="container"><p>Yes, you are welcome to submit feature requests on <a target="_blank" href="https://github.com/thingsboard/tbmq/issues">GitHub</a>. After the product team reviews them, they may be added to the backlog.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-dev-services" data-title="Can I pay for additional features to be developed?">
                        <div class="container"><p>The TBMQ team can propose application configuration services. To discuss your unique case and requirements, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-updates" data-title="Are software updates available for Community Edition?">
                        <div class="container"><p>Yes, updates for all <a target="_blank" href="https://github.com/thingsboard/tbmq/releases">versions</a> are available.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-dev-assist" data-title="Can I get TBMQ developers to help with my Community Edition deployment?">
                        <div class="container"><p>Yes, you can request such assistance as an additional paid service. Please, <a target="_blank" href="/docs/contact-us/">contact us</a> to discuss how we can help.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-bug-report" data-title="What should I do if I find a bug in Community Edition?">
                        <div class="container"><p>You can report it on <a target="_blank" href="https://github.com/thingsboard/tbmq/issues">GitHub</a>, and the open-source community may help fix it.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-ce-contribute" data-title="Can I contribute to the development of TBMQ Community Edition?">
                        <div class="container"><p>Yes! Pull requests and contributions are welcome on <a target="_blank" href="https://github.com/thingsboard/tbmq">GitHub</a>.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-ce-upgradingToEnterpriseEdition" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-upgrade-pe" data-title="Can I upgrade from Community Edition to the Professional Edition?">
                        <div class="container"><p>Yes, you can migrate your data and configuration to an Professional Edition at any time.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-upgrade-benefits" data-title="What are the benefits of upgrading to the Professional Edition?">
                        <div class="container"><p>* White labeling<br>* RBAC<br>* SSO<br>* Audit logs, etc.<br>TBMQ Professional Edition is designed for production and enterprise IoT solutions, offering comprehensive features to meet all your potential needs.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-migration-strategy" data-title="How do I migrate from Community Edition to Enterprise?">
                        <div class="container"><p>Migration depends on factors such as the version, source code changes, and more. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for personalized suggestions and a clear strategy on how to perform the migration.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-pe-trial" data-title="Can I get a trial of the Enterprise Edition before upgrading?">
                        <div class="container"><p>Yes, we offer a one-month trial for default subscription plan in self-managed mode.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-ce-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-secure-instance" data-title="Is my TBMQ instance secure?">
                        <div class="container"><p>Yes, but security depends on your deployment setup and infrastructure.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-encryption" data-title="Does Community Edition include encryption?">
                        <div class="container"><p>Yes, the Community Edition includes transport encryption, as well as authentication and authorization.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-data-region" data-title="Can I store TBMQ data in my preferred region?">
                        <div class="container"><p>Yes, you have full control over where your data is stored.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-ce-compliance" data-title="Does TBMQ Community Edition comply with industry standards (GDPR, ISO, etc.)?">
                        <div class="container"><p>Compliance depends on your hosting environment and data security practices.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pay-as-you-go" id="faq-tbmq-pe-pay-as-you-go">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageAndLimits" onClick="switchFaqSection('usageAndLimits', this)">Usage & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-tbmq-pe-pay-as-you-go-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-sm-definition" data-title="What is a self-managed subscription?">
                        <div class="container"><p>A self-managed subscription allows you to host and manage TBMQ on your own infrastructure, either on-premises or in the cloud. You are responsible for the installation, configuration, and ongoing management of the system, while TBMQ team provides the software and necessary documentation to support the process.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-buy" data-title="How can I buy a self-managed subscription?">
                        <div class="container"><p>To purchase a self-managed subscription, you can acquire a license through your <a target="_blank" href="https://license.thingsboard.io/">License Server</a> account. Each license comes with a unique activation key, which allows you to deploy and run the system by following our detailed <a target="_blank" href="/docs/mqtt-broker/install/installation-options/">installation guides</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-license-meaning" data-title="What does it mean to get the license?">
                        <div class="container"><p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a target="_blank" href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed <a target="_blank" href="/docs/mqtt-broker/install/installation-options/">installation guides</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-plans" data-title="What self-managed subscription plans does TBMQ offer?">
                        <div class="container"><p>TBMQ Professional Edition operates on a flexible, consumption-based licensing model rather than using predefined subscription tiers. We offer a single Pay-as-you-go (PAYG) subscription model for self-managed deployments. This structure provides complete control over your licensing costs, as your monthly fee is calculated precisely based on the capacity you configure in the calculator for Sessions, Throughput, and Instances. This ensures you only pay for the exact resources and features you require, allowing your deployment to scale dynamically without being restricted by fixed plan limits.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-calculator-reason" data-title="Why does the TBMQ Self-managed Subscription utilize a detailed capacity calculator instead of offering fixed plans?">
                        <div class="container"><p>TBMQ utilizes a detailed capacity calculator to ensure our licensing model is highly flexible and fully transparent. We do not offer fixed subscription plans because we want you to be in complete control of your deployment costs. The calculator is your primary tool for licensing, allowing you to define the exact capacity required for Sessions, Throughput, and Instances. This approach ensures optimal cost efficiency by matching your payment precisely to the resources you consume, allowing for dynamic scaling without the constraints of predefined tiers.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-min-cost" data-title="What is the minimum configuration and cost for a TBMQ Self-managed Subscription?">
                        <div class="container"><p>The minimum configuration for the TBMQ Self-managed Subscription grants you the base licensing capacity required to run the TBMQ Professional Edition. This configuration is priced at $15.00 per month and includes the following minimum licensed resources:<br>* 100 Sessions<br>* 100 messages per second (msg/sec) Throughput<br>* 1 Production Instance<br>* Community Support<br>This configuration is typically used for initial testing, proof-of-concept deployments, and qualifies for the 30-day free trial.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-commitment" data-title="Is there a contract or commitment for the subscription?">
                        <div class="container"><p>No, all subscriptions are month-to-month, and you can cancel anytime.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-self-host" data-title="Do I need to host TBMQ myself with a subscription license?">
                        <div class="container"><p>Yes, you are responsible for deploying and managing TBMQ on your own infrastructure.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-upgrade-downgrade" data-title="Can I upgrade or downgrade my subscription at any time?">
                        <div class="container"><p>Yes, the TBMQ Self-managed Pay-as-you-go model is explicitly designed for complete flexibility. You can adjust your licensed capacity for Sessions, Throughput, and Instances at any time using the self-managed calculator. Any changes you make will take effect immediately and will be reflected proportionally in your next monthly billing cycle. This allows you to dynamically scale your resources up or down to perfectly match your deployment's current demands.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-exceed-limits" data-title="What happens if I exceed the total messages per second or session limit in my subscription?">
                        <div class="container"><p>If your TBMQ deployment exceeds the licensed limit for either Sessions or Throughput messages per second, the broker software will enforce the capacity defined in your license key. This typically means that new client connections or incoming messages will be rejected, or your deployment performance may be throttled until usage falls back below the purchased capacity. To maintain continuous service and prevent disruption, we recommend proactively monitoring your capacity usage and adjusting your licensed limits via the <a target="_blank" href="https://license.thingsboard.io/">License Portal</a> before reaching your peak operational thresholds.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-features" data-title="Are all TBMQ features included in the subscription?">
                        <div class="container"><p>Yes, all core TBMQ features are included. The only exception to the comprehensive feature set is White Labeling, which is available as an optional add-on that can be purchased separately.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-multi-location" data-title="Can I use my license across multiple locations or instances?">
                        <div class="container"><p>Yes, your TBMQ Professional Edition license is fully portable across your self-managed infrastructure. By default, your license includes one Production Instance, and you have the option to purchase additional Production or Development Instances as needed for increased scale, high availability (HA), or isolated testing. Once these resources are licensed, you are free to deploy them anywhere you need—across multiple data centers, regions, or cloud environments—to support your architectural and redundancy requirements. The license covers the total number of purchased instances, Sessions, and Throughput regardless of their geographical location.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-migration-server" data-title="Can I migrate from one server or container to another using the same license?">
                        <div class="container"><p>Yes! You can migrate your license by activating or deactivating it on the License Server. To move to a new server, deactivate the current instance, install the software on the new server, and reuse your existing license key. Be sure to back up your data if you want to maintain the same environment. Note: The license system prevents running TBMQ Professional Edition on more servers than allowed by the subscription at the same time unless you purchase additional instances.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-switch-perpetual" data-title="Is it possible to jump from subscription to perpetual?">
                        <div class="container"><p>Customer may cancel the subscription and purchase a perpetual license. The remaining costs from the terminated subscription plan (if any) will be deducted from the total cost for the perpetual license. The perpetual license is non-refundable. Once purchased, it cannot be canceled.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-pay-as-you-go-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-billing" data-title="How does billing work for self-managed subscriptions?">
                        <div class="container"><p>Billing is handled via Stripe and is charged monthly based on your configured subscription.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-payment-methods" data-title="What payment methods do you accept?">
                        <div class="container"><p>We accept credit and debit cards through Stripe.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-wire" data-title="I cannot pay by card, may we use wire instead?">
                        <div class="container"><p>Sure. In this case, you must reach out to our sales team via <a target="_blank" href="/docs/contact-us/">contact us</a>. If you have ongoing communication with the account manager or success manager on our end, please refer your request to that person.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-annual" data-title="Do you offer an annual payment option?">
                        <div class="container"><p>We currently offer only a monthly subscription with automatic payments via Stripe. For annual payments, please <a target="_blank" href="/docs/contact-us/">contact</a> our team to arrange a wire transfer invoice.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-failed-payment" data-title="What happens if my payment fails?">
                        <div class="container"><p>If a payment fails, Stripe will retry the charge several times. If unsuccessful, your license will be suspended.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-cancel" data-title="Can I cancel my subscription anytime?">
                        <div class="container"><p>Yes, you can cancel your subscription anytime.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-refunds" data-title="Are refunds available if I cancel my subscription?">
                        <div class="container"><p>No, we do not offer refunds for unused time. However, the funds for the remaining period will be saved on your account balance for future use.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-proration" data-title="Is there proration when upgrading or downgrading my plan?">
                        <div class="container"><p>Yes, Stripe automatically prorates the charges when you change plans.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-discounts" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container"><p>Contact our <a target="_blank" href="/docs/contact-us/">sales team</a> for bulk pricing options.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-renew-fail" data-title="What happens if I don’t renew my subscription?">
                        <div class="container"><p>Your license will become inactive, and your TBMQ instance will be suspended.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-transfer" data-title="Can I transfer my subscription to another entity?">
                        <div class="container"><p>No, subscriptions are non-transferable. However, you can add users to your License Server account, allowing others to help manage the license subscription.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-extra-fees" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container"><p>No, we do not charge extra unless you want an additional service that we offer: professional support, custom development and consulting, training, or managed service.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-instance-price" data-title="What is the price for extra Production and Development Instances?">
                        <div class="container"><p>Additional Production and Development Instances are priced at a fixed rate of $100 and $50 per instance per month, respectively. This allows you to scale your fault-tolerance and dedicated testing environments as needed, ensuring you only pay for the extra nodes you license.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-session-price" data-title="What is the unit price for additional Sessions capacity?">
                        <div class="container"><p>Sessions capacity is licensed on a flexible per-session, per-month basis. You can license any amount you require. The effective unit rate is calculated as $5.00 per 100 Sessions.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-throughput-price" data-title="What is the unit price for additional Throughput capacity?">
                        <div class="container"><p>Throughput capacity is licensed on a flexible per-message-per-second (msg/sec), per-month basis. You can license any amount you require. The effective unit rate is calculated as $10.00 per 100 messages per second (msg/sec).</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-pay-as-you-go-usageAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-session-def" data-title="What exactly counts as a “session”?">
                        <div class="container"><p>A session is any active connection between an MQTT client and the TBMQ broker. Each session represents a single client, uniquely identified by its client ID, and counts toward your session quota.<br><br>If a client connects and maintains an active session, it occupies one slot in the session quota. When session persistence is enabled, a disconnected client still occupies a session slot, since its session data (subscriptions, messages, etc.) is retained by the broker.<br><br>A session slot is released only when the session has either expired or been explicitly removed. This means your session quota includes both currently connected clients and any disconnected clients with persisted sessions. Only clients with fully expired or deleted sessions free up capacity for new connections.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-throughput-def" data-title="How is “throughput (msg/sec)” defined and metered?">
                        <div class="container"><p>Throughput (total messages per second) refers to the combined number of MQTT PUBLISH packets processed by the TBMQ each second. This includes both incoming messages from publishers and outgoing messages delivered to subscribers.<br><br>For example, if 100 devices each publish 10 messages per second, that results in 1,000 incoming messages per second. If each message is delivered to 2 subscribers, the outgoing volume is 2,000 messages per second. In this case, the total messages per second would be 3,000.<br><br>Only MQTT PUBLISH packets are counted—control packets like CONNECT, SUBSCRIBE, PINGREQ, etc., are excluded. This metric reflects the actual messaging throughput of your deployment and is used to ensure performance and SLA compliance.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-prod-instance" data-title="What is production instance?">
                        <div class="container"><p>A Production Instance is the core unit of deployment for TBMQ Professional Edition, representing a single, dedicated TBMQ broker node. This node is licensed exclusively for processing live client traffic, including all licensed Sessions and Throughput. In a self-managed environment, an instance is typically deployed as a Docker container or a Kubernetes pod. While one instance is usually included in the base license, customers often purchase additional instances to create a fault-tolerant cluster for high availability (HA) and increased reliability.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-dev-instance" data-title="What is development instance?">
                        <div class="container"><p>A Development Instance is a dedicated TBMQ broker node—typically deployed as a Docker container or Kubernetes pod—that is licensed exclusively for non-production activities. This includes staging, testing, QA, and CI/CD workflows. The primary purpose of using a dedicated Development Instance is to ensure isolated environments for testing and integration without risking the integrity or performance of your live Production deployment or contaminating production data.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-addons" data-title="Can I add anything to the subscription?">
                        <div class="container"><p>Yes, the self-managed subscription allows you to enhance your license with two specialized add-ons. The White Labeling add-on enables full customization of the broker interface to seamlessly match your corporate branding. The Priority Help Desk add-on moves your support requests into a high-priority queue managed by the expert TBMQ team, ensuring they are triaged and addressed ahead of standard tickets for faster processing of critical operations.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-wl-addon" data-title="What is White Labeling add-on?">
                        <div class="container"><p>The White Labeling add-on is an optional feature that allows you to fully customize the TBMQ broker interface and deployment components to match your corporate branding. This removes all TBMQ branding from the control panel and deployment environment, enabling you to deliver a unified and seamless experience to your end-users or internal teams. This is primarily used by organizations integrating TBMQ as a core part of their own product or corporate infrastructure.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-priority-support" data-title="What is Priority Help Desk add-on?">
                        <div class="container"><p>The Priority Help Desk add-on provides an elevated support service level by moving your support requests directly into a high-priority queue managed by the TBMQ expert team. This ensures your critical operations receive front-of-line attention, and your requests are triaged and addressed ahead of standard tickets. It is important to note that while priority status accelerates processing within the queue, it does not guarantee a faster response time.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-capacity-establishment" data-title="Since there are no fixed plans, how is my maximum Session and Throughput capacity established?">
                        <div class="container"><p>Since the TBMQ Self-managed Subscription operates on a Pay-as-you-go model, your maximum Session and Throughput capacities are established entirely by you. You use the self-managed calculator to configure the exact limits needed for your deployment. The license then grants you a total aggregate capacity up to those chosen values. Your license fee is calculated based on the unit rates for the selected Sessions and Throughput capacity, rather than being determined by fixed tiers.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-exceed-usage" data-title="What happens if I exceed my subscription’s throughput (messages per second) or session limit?">
                        <div class="container"><p>If your TBMQ deployment exceeds the licensed limit for either Sessions or Throughput messages per second, the broker software will enforce the capacity defined in your license key. This typically means that new client connections or incoming messages will be rejected, or your deployment performance may be throttled until usage falls back below the purchased capacity. To maintain continuous service and prevent disruption, we recommend proactively monitoring your capacity usage and adjusting your licensed limits via the calculator before reaching your peak operational thresholds.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-multi-server" data-title="Can I use my license on multiple servers?">
                        <div class="container"><p>Yes, your TBMQ Professional Edition license is portable across multiple physical and virtual servers, data centers, and cloud environments. The license grants you a total pool of Sessions, Throughput, and Instances. Each server running a broker must be covered by one of your licensed Production or Development Instances. Crucially, the license key enforces a strict one-to-one mapping: you cannot use a single license entitlement (e.g., 1 Production Instance) to run concurrently on two separate servers or nodes. You can purchase additional Instances as needed for high availability, fault tolerance, and scale, and deploy those licensed units wherever they are required to meet your architectural needs.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-api-storage-charge" data-title="Does TBMQ charge for API calls or storage?">
                        <div class="container"><p>No, but you may be charged by your cloud provider for resource usage.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-internet-connection" data-title="Do I need an internet connection to use the self-managed license?">
                        <div class="container"><p>Yes, an internet connection is required for periodic license verification. The system checks the license once per hour, and if the connection is not restored within 24 hours, the platform may shut down. This process ensures proper license management while allowing temporary connectivity issues. For more details, please refer to the license check <a target="_blank" href="/docs/mqtt-broker/install/license-server/#architecture">description</a>.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-offline" data-title="Can I run offline?">
                        <div class="container"><p>By default, the platform requires active Internet access or at least access to license portal from your host machine. If Offline access is a must, please <a target="_blank" href="/docs/contact-us/">contact us</a> to discuss options.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-cloud-agnostic" data-title="Can I move my deployment between cloud providers?">
                        <div class="container"><p>Yes, self-managed TBMQ is cloud-agnostic and can be migrated as needed.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-ha" data-title="Does TBMQ support high-availability (HA) setups?">
                        <div class="container"><p>Yes, High Availability (HA) is supported and can be achieved through TBMQ services and database replication. Please note that each TBMQ replica will require a separate license.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-payg-backup" data-title="Can I back up my TBMQ instance?">
                        <div class="container"><p>Yes, backups depend on your database and storage setup.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-pay-as-you-go-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-security" data-title="Is my TBMQ instance secure?">
                        <div class="container"><p>Security depends on your infrastructure setup, but TBMQ provides built-in authentication, role-based access control, and encryption.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-data-location" data-title="Where is my TBMQ data stored?">
                        <div class="container"><p>Your data is stored on your own infrastructure, whether on-premise or in the cloud.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-data-region" data-title="Can I store TBMQ data in my preferred region?">
                        <div class="container"><p>Yes, you have full control over data storage location.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-pentest" data-title="Do you provide pentest results?">
                        <div class="container"><p>No, we do not do it for many reasons. Firstly, as a broker vendor, we cannot disclose detected vulnerabilities of certain versions of the platform as the disclosure affects the safety of our existing customers who use that particular version. Secondly, the self-declared pentest is less trustworthy as it is in the vendor’s interest to come up with clean results and you never know whether to believe them or not. Lastly, the penetration test makes more sense to be conducted over a ready-to-use end client software/application to define weak spots (if any). It is the Licensee’s responsibility to order independent testing.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-vulnerability-matrix" data-title="Where can I find the logged vulnerability fixes matrix: version + list of fixes?">
                        <div class="container"><p>Please stay tuned with our <a target="_blank" href="/docs/mqtt-broker/reference/releases/">Release notes</a>. Critical vulnerabilities or security issues are mentioned in separate line items. Less threatful vulnerabilities appear as a single record (“Vulnerability fixes”) stating that, at the release date, the version is free of known HIGH and some MEDIUM CVEs.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-pay-as-you-go-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-trial" data-title="Can I try a self-managed license before subscribing?">
                        <div class="container"><p>Yes, TBMQ offers a 30-day free trial for the self-managed Professional Edition license, which is available exclusively for the minimum capacity configuration: 100 Sessions, 100 messages per second (msg/sec), and 1 Production Instance. This trial allows you to fully test the broker's performance and core features within your own infrastructure without any financial commitment. At the end of the 30 days, you can choose to transition to a paid subscription, either maintaining that minimum configuration or scaling up your capacity as required.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-cancel-sub" data-title="What happens if I cancel my subscription?">
                        <div class="container"><p>Your license will become inactive, and your TBMQ instance will be stopped.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-refund" data-title="Are refunds available for self-managed subscriptions?">
                        <div class="container"><p>No, all sales are final.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-switch-to-perp" data-title="Can I switch from a subscription license to a perpetual license?">
                        <div class="container"><p>Customer may cancel the subscription and purchase a perpetual license. The remain costs from terminated subscription plan (if remain) will be deducted from Total cost for the perpetual license. The perpetual license is non-refundable. Once purchased, it cannot be canceled.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-pay-as-you-go-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-support-tier" data-title="What support is included in my subscription?">
                        <div class="container"><p>The included Support tier for the TBMQ Self-managed Subscription is tied to the total monthly cost of the license. The foundational Community support tier (which provides access to our public knowledge base and forums) is included when the total subscription cost is less than $300. Once the total subscription cost reaches or exceeds $300, the Direct Help Desk tier is automatically unlocked, providing ticketed access to our expert team. Alternatively, the Direct Help Desk tier can be accessed immediately by purchasing the Priority Help Desk add-on, regardless of the subscription's total monthly cost.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-support-247" data-title="Do you offer 24/7 support?">
                        <div class="container"><p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for more details.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-install-help" data-title="How can I get help with installation and setup?">
                        <div class="container"><p>If your subscription includes response time support and you have access to the Support Portal, the TBMQ support team can assist with system deployment as part of the subscription. However, this applies only if you follow recommended installation methods and architecture. Custom installation scripts or non-recommended deployment scenarios are not covered under included support. If your subscription plan does not include support, then we recommend using our documentation, tutorials, and optional professional services. To discuss options, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-contact-support" data-title="How do I contact support?">
                        <div class="container"><p>The method for contacting support depends on your current license tier. If you are using the Community support tier, support is provided via self-service resources, including our comprehensive public documentation, knowledge base, and peer-to-peer forums. If you have the Direct Help Desk or Priority Help Desk tier (which is included when your subscription cost is over $300 or purchased as an add-on), you will access support through our dedicated ticketed system via the <a target="_blank" href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Support portal</a>, where requests are managed directly by our TBMQ expert team.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-payg-support-scope" data-title="What issues are included in subscription support?">
                        <div class="container"><p>Access to our dedicated Support Portal is included with the Direct Help Desk and Priority Help Desk support tiers, as well as for Perpetual license holders. The support service includes expert assistance with platform installation and migration for default deployments, along with resolving any questions related to the platform's out-of-the-box functionalities, as detailed in our documentation. All support inquiries are managed through a single queue, and our commitment is to provide an initial response within 24 hours to address your needs promptly. For specialized services such as custom consulting, code reviews, health assessments, or bespoke development projects, tailored solutions are available; our support engineers will efficiently guide you to the best resources if a request falls outside the standard platform scope.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="perpetual" id="faq-tbmq-pe-perpetual">
            <div class="faq-section-selector">
                <div class="faq-section-option active" id="general" onClick="switchFaqSection('general', this)">General</div>
                <div class="faq-section-option" id="billingAndPayments" onClick="switchFaqSection('billingAndPayments', this)">Billing & Payments</div>
                <div class="faq-section-option" id="usageDeploymentsAndLimits" onClick="switchFaqSection('usageDeploymentsAndLimits', this)">Usage, Deployments & Limits</div>
                <div class="faq-section-option" id="securityAndCompliance" onClick="switchFaqSection('securityAndCompliance', this)">Security & Compliance</div>
                <div class="faq-section-option" id="trialsCancellationsAndRefunds" onClick="switchFaqSection('trialsCancellationsAndRefunds', this)">Trials, Cancellations & Refunds</div>
                <div class="faq-section-option" id="supportAndAssistance" onClick="switchFaqSection('supportAndAssistance', this)">Support & Assistance</div>
            </div>
            <div class="answers">
                <div id="faq-tbmq-pe-perpetual-general" class="pi-accordion active">
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-def" data-title="What does the Perpetual license mean?">
                        <div class="container"><p>A Perpetual license allows you to use the software indefinitely with a one-time purchase. This grants you permanent access without the need for ongoing subscription fees.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-diff" data-title="How does the perpetual license differ from a subscription license?">
                        <div class="container"><p>A perpetual license provides lifetime access to TBMQ Professional Edition through a one-time payment, including a predefined capacity (e.g., sessions, message throughput, and processing instances). It can be expanded at any time by purchasing additional capacity units. In contrast, a subscription license offers flexible, usage-based access with regular payments, allowing you to scale resources as your deployment grows, without an upfront lifetime commitment.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-features" data-title="What features are included in the perpetual license?">
                        <div class="container"><p>The perpetual license includes full access to TBMQ Professional Edition features, such as MQTT 3.x and MQTT 5.0 support, White labeling, RBAC, SSO, and more. It also provides access to standard documentation, support, and updates for a specified period. Additional features or services, such as extended support or custom development, may be available for an extra fee.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-buy" data-title="How can I buy a perpetual license?">
                        <div class="container"><p>To purchase a perpetual license, you can acquire a license through your <a target="_blank" href="https://license.thingsboard.io/">License Server</a> account. Each license comes with a unique activation key, which allows you to deploy and run the system by following our detailed <a target="_blank" href="/docs/mqtt-broker/install/installation-options/">installation guides</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-license-meaning" data-title="What does it mean to get the license?">
                        <div class="container"><p>Licensing is applicable to self-hosted platform versions only. Each license comes with a unique license key (activation code) that is automatically generated in your <a target="_blank" href="https://license.thingsboard.io/">License Server</a> account. Using this license key, you can deploy and run the system by following our detailed <a target="_blank" href="/docs/mqtt-broker/install/installation-options/">installation guides</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-aim" data-title="What is the perpetual license aim for?">
                        <div class="container"><p>The Perpetual License includes a single license key (activation code) for one licensed deployment. This license allows the deployment of predefined number of instances of TBMQ Professional Edition.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-servers" data-title="How many servers can I have with the Perpetual license?">
                        <div class="container"><p>The Perpetual License initially includes a base of one licensed Production Instance. If your deployment needs to scale horizontally for increased performance, fault tolerance, or High Availability (HA), you can purchase additional Production or Development Instances at any time. This scaling enables you to permanently expand your licensed instance count, allowing for seamless horizontal scaling across your infrastructure while ensuring continuous compliance with your license terms. For purchasing details or specialized capacity needs, please <a target="_blank" href="/docs/contact-us/">contact our sales team</a>.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-min-cost" data-title="What is the minimum configuration and cost for a TBMQ Perpetual license?">
                        <div class="container"><p>The minimum configuration for the TBMQ Perpetual license is defined by the capacity included in the Base Price. The minimum cost is a one-time fee of $2,999.00.<br>This minimum configuration includes the following licensed resources:<br>* 10,000 Sessions<br>* 1,000 messages per second (msg/sec) Throughput<br>* 1 Production Instance</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-self-host" data-title="Do I need to host TBMQ myself with a perpetual license?">
                        <div class="container"><p>Yes, you are responsible for deploying and managing TBMQ on your own infrastructure.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-exceed-limits" data-title="What happens if I exceed the total messages per second or session limit in my subscription?">
                        <div class="container"><p>If your TBMQ deployment exceeds the licensed limit for either Sessions or Throughput messages per second, the broker software will enforce the capacity defined in your license key. This typically means that new client connections or incoming messages will be rejected, or your deployment performance may be throttled until usage falls back below the purchased capacity. To maintain continuous service and prevent disruption, we recommend proactively monitoring your capacity usage and adjusting your licensed limits via the <a target="_blank" href="https://license.thingsboard.io/">License Portal</a> before reaching your peak operational thresholds.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-perpetual-billingAndPayments" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-pricing" data-title="How is the perpetual license priced?">
                        <div class="container"><p>The Perpetual License for TBMQ is offered as a one-time payment that grants lifetime access to the software. It includes a predefined capacity for sessions, message throughput, and production instances, along with one year of software updates and support. You can expand your deployment at any time by purchasing additional capacity. After the first year, updates and support can be renewed annually, while your license remains permanently active even without renewal.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-renewals" data-title="If the license is Perpetual, why do we pay renewals?">
                        <div class="container"><p>The so-called license ‘renewal’ does not refer to the license itself but rather corresponds to Support service and access to the Latest releases. Perpetual license unlocks support service and access to newer versions for 1 year. After the initial year, one can prolong this option.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-renewal-fee" data-title="What is the renewal fee per year?">
                        <div class="container"><p>The annual renewal fee for the Perpetual License depends on the total value of your license. <a target="_blank" href="/docs/contact-us/">Contact us</a> for more details.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-no-renew" data-title="What happens to my license if I don't pay for the renewal?">
                        <div class="container"><p>Your current license will remain active, allowing you to continue using the platform seamlessly. By renewing your license, you'll gain access to the latest version releases and ongoing support to enhance your experience.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-renewal-logic" data-title="I do not understand how the renewal logic works in relation to new version releases?">
                        <div class="container"><p>Here’s how the renewal logic works: If you purchased your license on January 1, 2024, your support period and access to new version releases will expire on January 1, 2025. You can continue using the version of the platform you have without any interruptions. However, after January 1, 2025, you will no longer have access to new versions that are released after that date. You can still use the version you have, and you are free to migrate your hardware or upgrade to any version that was available before January 2, 2025.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-missed-renewal" data-title="If I miss 1 year and then decide to prolong, how much should I pay?">
                        <div class="container"><p>If you miss the renewal for one year and then decide to renew, you will need to pay the yearly renewal fee for the missed period, in addition to the fee for the new period. If you miss 6 months after the initial expiration date, you can still renew by paying the annual fee, and the renewal will be calculated based on the original expiration date of your license, not from the moment you choose to renew. If you require further clarifications on this, please <a target="_blank" href="/docs/contact-us/">contact us</a>, and we will be happy to explain.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-extra-fees" data-title="Is there an additional payment for the software use besides the license fee?">
                        <div class="container"><p>No, we do not charge extra unless you want an additional service that we offer: professional support, Custom development and consulting, Training, or Managed service.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-refund" data-title="Can I request a refund after purchasing the license?">
                        <div class="container"><p>Since the Perpetual License is a one-time purchase granting lifetime access, all sales are final. However, we encourage customers to explore our subscription options before committing to a perpetual license. Subscriptions provide full access to TBMQ Professional Edition, allowing you to evaluate its features and scalability. If you need guidance on selecting the best licensing option for your needs, our <a target="_blank" href="/docs/contact-us/">sales team</a> is happy to assist you.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-bulk-discount" data-title="Do you offer discounts for multiple licenses?">
                        <div class="container"><p><a target="_blank" href="/docs/contact-us/">Contact our sales team</a> for bulk pricing options.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-instance-price" data-title="What is the price for extra Production and Development Instances?">
                        <div class="container"><p>Additional Production and Development Instances are priced at a fixed rate of $1999 and $999 per instance, respectively, as a one-time purchase. This allows you to scale your fault-tolerance and dedicated testing environments as needed, ensuring you only pay for the extra nodes you license.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-session-price" data-title="What is the unit price for additional Sessions capacity?">
                        <div class="container"><p>Sessions capacity is licensed on a per-session, one-time basis. You can license any amount you require. The effective unit rate is calculated as $250.00 per 1000 Sessions.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-throughput-price" data-title="What is the unit price for additional Throughput capacity?">
                        <div class="container"><p>Throughput capacity is licensed on a flexible per-message-per-second (msg/sec), one-time basis. You can license any amount you require. The effective unit rate is calculated as $500.00 per 1000 messages per second (msg/sec).</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-perpetual-usageDeploymentsAndLimits" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-session-def" data-title="What exactly counts as a “session”?">
                        <div class="container"><p>A session is any active connection between an MQTT client and the TBMQ broker. Each session represents a single client, uniquely identified by its client ID, and counts toward your session quota.<br><br>If a client connects and maintains an active session, it occupies one slot in the session quota. When session persistence is enabled, a disconnected client still occupies a session slot, since its session data (subscriptions, messages, etc.) is retained by the broker.<br><br>A session slot is released only when the session has either expired or been explicitly removed. This means your session quota includes both currently connected clients and any disconnected clients with persisted sessions. Only clients with fully expired or deleted sessions free up capacity for new connections.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-throughput-def" data-title="How is “throughput (msg/sec)” defined and metered?">
                        <div class="container"><p>Throughput (total messages per second) refers to the combined number of MQTT PUBLISH packets processed by the TBMQ each second. This includes both incoming messages from publishers and outgoing messages delivered to subscribers.<br><br>For example, if 100 devices each publish 10 messages per second, that results in 1,000 incoming messages per second. If each message is delivered to 2 subscribers, the outgoing volume is 2,000 messages per second. In this case, the total messages per second would be 3,000.<br><br>Only MQTT PUBLISH packets are counted—control packets like CONNECT, SUBSCRIBE, PINGREQ, etc., are excluded. This metric reflects the actual messaging throughput of your deployment and is used to ensure performance and SLA compliance.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-prod-instance" data-title="What is production instance?">
                        <div class="container"><p>A Production Instance is the core unit of deployment for TBMQ Professional Edition, representing a single, dedicated TBMQ broker node. This node is licensed exclusively for processing live client traffic, including all licensed Sessions and Throughput. In a self-managed environment, an instance is typically deployed as a Docker container or a Kubernetes pod. While one instance is usually included in the base license, customers often purchase additional instances to create a fault-tolerant cluster for high availability (HA) and increased reliability.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-dev-instance" data-title="What is development instance?">
                        <div class="container"><p>A Development Instance is a dedicated TBMQ broker node—typically deployed as a Docker container or Kubernetes pod—that is licensed exclusively for non-production activities. This includes staging, testing, QA, and CI/CD workflows. The primary purpose of using a dedicated Development Instance is to ensure isolated environments for testing and integration without risking the integrity or performance of your live Production deployment or contaminating production data.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-instance-count" data-title="How many instances can I deploy with my perpetual license?">
                        <div class="container"><p>The total number of instances you can deploy is determined by the specific license purchase you make. Your Perpetual License grants you a fixed count of licensed instances, beginning with one Production Instance included in the Base Price. You can increase this total count permanently at any time by purchasing additional Production or Development Instances with a one-time fee. The license covers the total number of instances you have purchased, and you cannot run more nodes concurrently than your total licensed instance count.</p></div>
                    </div>
                    <div class="load-more" onClick="loadMoreFaq(this)"><h4 class="title">Load more FAQ</h4></div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-cloud-migration" data-title="Can I move my deployment between cloud providers?">
                        <div class="container"><p>Yes, self-managed TBMQ is cloud-agnostic and can be migrated as needed.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-ha" data-title="Does TBMQ support high-availability (HA) setups?">
                        <div class="container"><p>Yes. TBMQ fully supports high-availability (HA) deployments, allowing multiple nodes to operate together as a cluster. This ensures fault tolerance, load balancing, and continuous operation.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-migrate-deploy" data-title="Can I migrate from one deployment to another using the same license?">
                        <div class="container"><p>Yes, absolutely. The Perpetual License allows you to migrate between deployments through the License Server’s activation management. To transfer your deployment, simply deactivate your existing instances, install TBMQ on the new cluster, and reactivate it using your existing license key. If you wish to preserve your environment, make sure to back up all data from the previous deployment before migration. Once the new setup is complete, you can restore the backup and continue operating seamlessly.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-limits" data-title="Are there any sessions, message throughput, etc., limits for perpetual licenses?">
                        <div class="container"><p>Yes, the Perpetual License is a commercial product defined by the specific Sessions, Throughput, and Instance count you purchase. These limits are set by your licensed capacity, and the software will enforce them to ensure compliance. However, the TBMQ Professional Edition is engineered for indefinite scalability to meet your long-term growth. You are not locked into your initial configuration: you can permanently expand your licensed capacity at any time by making a new one-time purchase of additional Sessions, Throughput, and Instances. This ensures the license can always be scaled to support your evolving operational demands, constrained only by your total purchased capacity.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-offline" data-title="Can I run offline?">
                        <div class="container"><p>By default, the platform requires active Internet access or at least access to License server from your host machine. If Offline access is a must, please <a target="_blank" href="/docs/contact-us/">contact us</a> to discuss options.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-backup" data-title="Can I back up my TBMQ deployment?">
                        <div class="container"><p>Yes. You can back up your TBMQ deployment to preserve configurations, data, and system state.</p></div>
                    </div>
                    <div class="item hidden" data-tag="h4" data-item-id="tbmq-perp-multitenancy" data-title="Does TBMQ support multi-tenancy?">
                        <div class="container"><p>No, it does not support multi-tenancy for now.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-perpetual-securityAndCompliance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-security" data-title="Is my TBMQ instance secure?">
                        <div class="container"><p>Security depends on your infrastructure setup, but TBMQ provides built-in authentication, role-based access control, and encryption.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-storage-loc" data-title="Where is my TBMQ data stored?">
                        <div class="container"><p>Your data is stored on your own infrastructure, whether on-premise or in the cloud.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-data-region" data-title="Can I store TBMQ data in my preferred region?">
                        <div class="container"><p>Yes, you have full control over data storage location.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-pentest" data-title="Do you provide pentest results?">
                        <div class="container"><p>No, we do not do it for many reasons. Firstly, as a broker vendor, we cannot disclose detected vulnerabilities of certain versions of the platform as the disclosure affects the safety of our existing customers who use that particular version. Secondly, the self-declared pentest is less trustworthy as it is in the vendor’s interest to come up with clean results and you never know whether to believe them or not. Lastly, the penetration test makes more sense to be conducted over a ready-to-use end client software/application to define weak spots (if any). It is the Licensee’s responsibility to order independent testing.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-vuln-matrix" data-title="Where can I find the logged vulnerability fixes matrix: version + list of fixes?">
                        <div class="container"><p>Please stay tuned with our <a target="_blank" href="/docs/mqtt-broker/reference/releases/">Release notes</a>. Critical vulnerabilities or security issues are mentioned in separate line items. Less threatful vulnerabilities appear as a single record (“Vulnerability fixes”) stating that, at the release date, the version is free of known HIGH and some MEDIUM CVEs.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-license-data" data-title="What data does ThingsBoard collect for license verification?">
                        <div class="container"><p>During the first launch of ThingsBoard PE, built-in License Server Client generates an “Activate Instance Request” to the License Server. This request contains the license key and version info about the current platform installation. License Server looks up the subscription info based on the license key and replies with the instance id, subscription plan data, and some magic bytes. License Client stores this information locally and uses instance id and some magic bytes for the next license check requests. More details <a target="_blank" href="/docs/mqtt-broker/install/license-server/">here</a>.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-perpetual-trialsCancellationsAndRefunds" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-trial" data-title="Is there a trial version of the perpetual license?">
                        <div class="container"><p>No, there is no trial option for perpetual licenses. To trial a self-managed system, you can use self-managed subscriptions.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-cancel" data-title="What happens if I cancel my perpetual license?">
                        <div class="container"><p>Cancellation of the perpetual license means the license key will be removed from the License Server. Once the license key is removed, the TBMQ environment using this key will be stopped immediately.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-convert-trial" data-title="Can I convert a trial instance into a perpetual license?">
                        <div class="container"><p>Yes, you can convert your self-managed subscription to a perpetual license by purchasing the perpetual license and replacing the license key in the configuration files. For more details, please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-refunds" data-title="Do you offer refunds for perpetual license purchases?">
                        <div class="container"><p>No, refunds are not offered for perpetual license purchases.</p></div>
                    </div>
                </div>
                <div id="faq-tbmq-pe-perpetual-supportAndAssistance" class="pi-accordion">
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-support-level" data-title="What level of support is included with my perpetual license?">
                        <div class="container"><p>The perpetual license includes dedicated support, providing access to the support portal with an initial response time of 24 hours.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-support-issues" data-title="What issues are included in license support?">
                        <div class="container"><p>Access to our dedicated Support Portal is included with the Direct Help Desk and Priority Help Desk support tiers, as well as for Perpetual license holders. The support service includes expert assistance with platform installation and migration for default deployments, along with resolving any questions related to the platform's out-of-the-box functionalities, as detailed in our documentation. All support inquiries are managed through a single queue, and our commitment is to provide an initial response within 24 hours to address your needs promptly. For specialized services such as custom consulting, code reviews, health assessments, or bespoke development projects, tailored solutions are available; our support engineers will efficiently guide you to the best resources if a request falls outside the standard platform scope.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-additional-support" data-title="Can I purchase additional support for my perpetual license?">
                        <div class="container"><p>Yes, you can purchase additional services such as managed services, advanced SLAs, consultancy, development, and training. For more details, please <a target="_blank" href="/docs/contact-us/">contact our sales team</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-24-7" data-title="Do you offer 24/7 support?">
                        <div class="container"><p>Yes, we can provide 24/7 support as part of our managed services with an additional signed SLA. Please <a target="_blank" href="/docs/contact-us/">contact us</a> for more details.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-maintenance" data-title="Do you provide full maintenance services for TBMQ deployed on my infrastructure?">
                        <div class="container"><p>Yes, we offer full maintenance services for instances deployed on your infrastructure. These services can be customized based on your needs and are provided under an additional SLA, ensuring regular monitoring, updates, and issue resolution. For more details please <a target="_blank" href="/docs/contact-us/">contact us</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-contact-support" data-title="How do I contact support?">
                        <div class="container"><p>If your license is a Perpetual License or if you have the Direct Help Desk or Priority Help Desk tier on your subscription, you will access support through our dedicated ticketed system managed directly by our TBMQ expert team. You can log in and submit requests via the <a target="_blank" href="https://thingsboard-portal.atlassian.net/servicedesk/customer/portal/1">Support portal</a>.</p></div>
                    </div>
                    <div class="item" data-tag="h4" data-item-id="tbmq-perp-setup-help" data-title="How can I get help with installation and setup?">
                        <div class="container"><p>All perpetual license packages provide dedicated support with predefined response time and access to the ThingsBoard Support Portal. Our expert support team is available to assist you with system deployment by following our recommended <a target="_blank" href="/docs/mqtt-broker/install/installation-options/">installation methods</a> and architecture, ensuring a smooth and efficient setup. For custom installation scripts or alternative deployment scenarios, additional support options are available and you can <a target="_blank" href="/docs/contact-us/">contact us</a> to discuss your needs.</p></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
