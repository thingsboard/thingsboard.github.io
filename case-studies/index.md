---
layout: case-studies
title: IoT Case Studies | How Businesses Succeed with ThingsBoard
notitle: "true"
customTitle: "true"
description: Discover how companies in retail, energy, logistics, and more drive digital transformation with ThingsBoard's IoT platform to boost efficiency, growth, and innovation.
formSubject: "General Feedback"
modalTitle: "Tell us about your success"
modalDescription: "Get your brand featured across our global channels — website, social media, and community."
pagination: "true"
containerId: "case-studies-clients"
filterSelector: ".filter[data-container-id='case-studies-clients']"
itemsSelector: ".client-card"
itemsPerPage: "9"

---

<div class="case-studies-wrapper">
    <section class="case-studies-hero">
        <h1>Case studies</h1>
        <h2>Learn how ThingsBoard helps clients build and improve their businesses</h2>
        <div class="card">
            <div class="image">
                <a href="/case-studies/schwarz"><img src="/images/case-studies/schwarz.svg" title="Schwarz Group" alt="Schwarz Group logo"></a>
            </div>
            <div class="text">
                <p class="category">SMART RETAIL</p>
                <h3>IoT in retail: how Schwarz Group accelerated digitalization with ThingsBoard</h3>
                <div class="image inner">
                    <img src="/images/case-studies/schwarz.svg" alt="Schwarz logo">
                </div>
                <p>The Schwarz Group is one of the largest retail companies in the world, based in Neckarsulm, Germany. It operates in 32 countries, managing around 13,900 stores and employing approximately 575,000 people. Millions of people shop at Schwarz Group supermarkets every day.</p>
                <a href="/case-studies/schwarz" class="button gtm_button">Learn more <span class="visually-hidden">about how Schwarz Group accelerated digitalization with ThingsBoard</span></a>
            </div>
        </div>
    </section>
    {% assign filters = "Industry 4.0,Smart energy,Smart infrastructure,Cold chain monitoring,Warehouse monitoring,Facility management,Smart IoT solution,Smart agriculture" | split: "," %}
    {% include filter.html filters = filters mode = "tab" containerId = "case-studies-clients" hyphenSplit = "true" %}
    {% assign linksCount = card.links | size %}
    <div class="links{% if linksCount >= 2 %} partnersCarousel owl-carousel owl-theme{% endif %}"{% if linksCount >= 2 %} data-settings='{"nav":true,"loop":false,"margin":10,"autoWidth":true,"dots":false,"autoplay":false,"smartSpeed":200}'{% endif %}>
        {% for link in card.links %}
            <a href="{{ link[1].href }}">{{ link[1].label }}</a>
        {% endfor %}
    </div>
    <section id="case-studies-clients">
        <div class="client-card" id="Industry 4.0">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/super-bock-group.webp');">
                <a class="content" href="/case-studies/super-bock">
                    <img class="logo" src="/images/case-studies/super-bock-group.svg" title="Super Bock Group" alt="Super Bock Group logo">
                    <p>Revolutionizing beer distribution: how ThingsBoard empowered Super Bock Group</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about how ThingsBoard empowered Super Bock Group</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart energy">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),url('/images/case-studies/oxi.webp');">
                <a class="content" href="/case-studies/oxi">
                    <img class="logo" src="/images/case-studies/oxi.svg" title="OXI Trade" alt="OXI Trade logo">
                    <p>Empowering alternative energy: how OXI TRADE streamlined IoT infrastructure with ThingsBoard</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about how OXI TRADE streamlined IoT infrastructure with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart infrastructure">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/obb.webp');">
                <a class="content" href="/case-studies/obb-infra">
                    <img class="logo" src="/images/case-studies/obb.svg" title="ÖBB-Infrastruktur AG" alt="ÖBB-Infrastruktur AG logo">
                    <p>Smart railway infrastructure: digital transformation of ÖBB-Infrastruktur AG <br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about digital transformation of ÖBB-Infrastruktur AG with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Cold chain monitoring">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/senseing.webp');">
                <a class="content" href="/case-studies/senseing">
                    <img class="logo" src="/images/case-studies/senseing.svg" title="SenseING GmbH" alt="SenseING GmbH logo">
                    <p>Transforming food logistics with IoT-powered temperature monitoring <br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about transforming food logistics with ThingsBoard-powered temperature monitoring</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Industry 4.0">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/iona.webp');">
                <a class="content" href="/case-studies/iona">
                    <img class="logo" src="/images/case-studies/iona.svg" title="IONA Tech" alt="IONA Tech logo">
                    <p>Protecting electronics and workers: IONA Tech’s IoT transformation with ThingsBoard</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about IONA Tech’s IoT transformation with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Warehouse monitoring">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/vypin.webp');">
                <a class="content" href="/case-studies/vypin">
                    <img class="logo" src="/images/case-studies/vypin.svg" title="Vypin LLC" alt="Vypin LLC logo">
                    <p>Smart reliable T&H monitoring with WhereView (ThingsBoard) <br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about Smart reliable T&H monitoring with WhereView (ThingsBoard)</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart infrastructure">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/kalitec.webp');">
                <a class="content" href="/case-studies/kalitec">
                    <img class="logo" src="/images/case-studies/kalitec.svg" title="Kalitec" alt="Kalitec logo">
                    <p>How Kalitec and ThingsBoard Redefined Urban Safety with IoT Innovation <br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about how Kalitec and ThingsBoard Redefined Urban Safety with IoT Innovation</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Facility management">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/suessco.webp');">
                <a class="content" href="/case-studies/suessco">
                    <img class="logo" src="/images/case-studies/suessco.svg" title="SuessCo Sensors GmbH" alt="SuessCo Sensors GmbH logo">
                    <p>SuessCo: IoT hub as a platform for monitoring sensors <br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about SuessCo: IoT hub as a platform for monitoring sensors</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart energy">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/nettra.webp');">
                <a class="content" href="/case-studies/nettra">
                    <img class="logo" src="/images/case-studies/nettra.svg" title="Nettra" alt="Nettra logo">
                    <p>Cutting time and costs: Nettra’s shortcut to IoT platform success <br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about Cutting time and costs: Nettra’s shortcut to IoT platform success</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart IoT solution">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/asg-tech.webp');">
                <a class="content" href="/case-studies/asg-tech">
                    <img class="logo" src="/images/case-studies/asg-tech.svg" title="ASG-Tech" alt="ASG-Tech logo">
                    <p>From Concept to Launch: ASG Tech’s Rapid IoT Innovation with ThingsBoard<br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about ASG Tech’s Rapid IoT Innovation with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart agriculture">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/agrolog.webp');">
                <a class="content" href="/case-studies/agrolog">
                    <img class="logo" src="/images/case-studies/agrolog.svg" title="Agrolog" alt="ASG-Tech logo">
                    <p>Revolutionizing Agriculture: How Supertech Agroline Built a Scalable IoT Platform with ThingsBoard</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about Smart Farming Platform by Supertech Agroline and ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart agriculture">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/keners.webp');">
                <a class="content" href="/case-studies/keners">
                    <img class="logo" src="/images/case-studies/keners.svg" title="Keners" alt="Keners logo">
                    <p>From Soil to Sensor: How Keners Revolutionized Farming with ThingsBoard<br> &nbsp;</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about From Soil to Sensor: How Keners Revolutionized Farming with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart energy">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/comet.webp');">
                <a class="content" href="/case-studies/comet">
                    <img style="height: 42px" class="logo" src="/images/case-studies/comet.svg" title="co.met" alt="comet logo">
                    <p>Powering the future of utilities: co.met GmbH’s IoT breakthrough with ThingsBoard</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about Powering the future of utilities: co.met GmbH’s IoT breakthrough with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart energy">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/berliner-energieinstitut.webp');">
                <a class="content" href="/case-studies/berliner-energieinstitut">
                    <img class="logo" src="/images/case-studies/berliner-energieinstitut.svg" title="Berliner Energieinstitut" alt="Berliner Energieinstitut logo">
                    <p>From idea to IoT in weeks: how Berliner Energieinstitut scaled fast with ThingsBoard</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about how Berliner Energieinstitut scaled fast with ThingsBoard</span>
                </a>
            </div>
        </div>
        <div class="client-card" id="Smart energy">
            <div class="bg-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/case-studies/e2cbms.webp');">
                <a class="content" href="/case-studies/e2cbms">
                    <img style="height: 87px" class="logo" src="/images/case-studies/e2cbms.svg" title="Environmental Energy Controls" alt="Environmental Energy Controls logo">
                    <p>Smarter buildings made simple: Environmental Energy Controls chooses ThingsBoard for scalable BMS Solutions</p>
                    <p class="link">Learn more <i class="fas fa-arrow-right"></i></p>
                    <span class="visually-hidden">about how Smarter buildings made simple by Environmental Energy Controls with ThingsBoard</span>
                </a>
            </div>
        </div>
    </section>
    <div id="successStoryBlock" class="success-story-promo" style="display: none;">
        <div class="content">
            <h2>Got a success story to tell?</h2>
            <p>Real stories, real impact — share your experience with ThingsBoard!</p>
        </div>
        <button id="caseStudiesContactUs" class="button gtm_button" onclick="openContactUsModal()">Contact Us</button>
    </div>
</div>