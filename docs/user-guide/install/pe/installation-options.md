---
layout: docwithnav-pe
assignees:
- ashvayka
title: ThingsBoard Professional Edition installation options
description: ThingsBoard Professional Edition installation instructions for various operation systems and cloud platforms
notitle: "true"
redirect_from: "/docs/pe/user-guide/install/installation-options/"
---

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>ThingsBoard Professional Edition installation options</h1>
                <div class="install-options-description">
                    <p>
                        ThingsBoard Professional Edition is designed to run and utilize on majority of hardware, from local Raspberry PI to powerful servers in the cloud
                    </p>
                </div>
            </div>
            <div class="deployment-container">
                <nav id="install-navigation" class="install-navigation" data-target-id="peInstallType">
                    <ul id="menu-install-navigation-1" class="menu">
                        <li id="menu-item-liveDemo" class="menu-item tb-live-demo" data-tab="liveDemo">
                            <p>
                                <img src="/images/pricing/saas-icon.svg" title="Try ThingsBoard Cloud" alt="Live demo icon" width="28" height="28">
                                <span>SaaS</span>
                            </p>
                        </li>
                        <li id="menu-item-onPremise" class="menu-item tb-on-premise" data-tab="onPremise">
                            <p>
                                <img src="/images/pricing/self-icon.svg" title="Install ThingsBoard on your own server" alt="On-premise installation icon" width="28" height="28">
                                <span>On-premises</span>
                            </p>
                        </li>
                        <li id="menu-item-cloud" class="menu-item tb-cloud" data-tab="cloud">
                            <p>
                                <img src="/images/pricing/cloud-icon.svg" title="Use ThingsBoard in the cloud" alt="Cloud deployment icon" width="28" height="28">
                                <span>Cloud</span>
                            </p>
                        </li>
                    </ul>
                </nav>
                <div class="deployment-div">
                    {% include installation-options-cards.liquid installationOptions="installation-options-pe" %}
                </div>
            </div>
          </div>
       </div>
    </div>
</div>

