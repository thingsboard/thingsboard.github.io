---
layout: trainings
title: Training sessions
notitle: "true"
description: ThingsBoard training sessions

---


<div class="trainings">
    <div class="trainings-hero trainings-wrapper">
        <div class="trainings-hero-top">
            <h1 class="trainings-h1">ThingsBoard training sessions</h1>
            <div class="trainings-hero-top-images">
                <img src="/images/trainings/thingsboard-home-page.png" class="trainings-hero-image" alt="Thingsboard dashboards and menus">
                <img src="/images/trainings/thingsboard-tenant-list.png" class="trainings-hero-image-2" alt="Thingsboard tenant list">
                <img src="/images/trainings/thingsboard-alarm-list.png" class="trainings-hero-image-3" alt="Thingsboard alarm list">
                <img src="/images/trainings/thingsboard-scada-example.png" class="trainings-hero-image-4" alt="Thingsboard SCADA">
                <img src="/images/trainings/thingsboard-rule-chains-list.png" class="trainings-hero-image-5" alt="Thingsboard rule chains list">
            </div>
        </div>
        <div class="trainings-contact">
            <div class="contact">
                <div class="contact-label">
                    <h4 class="trainings-h4">Training sessions</h4>
                    <p>Fast, informative, and engaging</p>
                </div>
                <a class="contact-us-button" href="/docs/contact-us/">Contact Us</a>
            </div>
            <p class="contact-text">
                Our ThingsBoard training sessions are practical workshops led by experts from the ThingsBoard team, created especially for your company’s engineers. We offer fifteen 2-hour sessions that explain the basics of using ThingsBoard. Even though our documentation is detailed, these sessions focus on the most important points, helping you start IoT solution development quickly and easily.
            </p>
            <a class="contact-us-button contact-us-button-hidden" href="/docs/contact-us/">Contact Us</a>
        </div>
    </div>
    <div class="trainings-cards">
        <div class="trainings-wrapper">
            <div class="trainings-cards-wrapper">
                <div class="trainings-card">
                    <h4 class="trainings-h4">Who is this for</h4>
                    <ul>
                        <li>
                            <img src="/images/trainings/icon_people.svg" alt="Users icon">
                            <span>Teams of <b>up to 8 people</b> who need to learn at the same pace.</span>
                        </li>
                        <li>
                            <img src="/images/trainings/icon_trophy.svg" alt="Trophy icon">
                            <span>Individuals ready to get a <b>solid foundation and fully leverage</b> ThingsBoard.</span>
                        </li>
                        <li>
                            <img src="/images/trainings/icon_target-line.svg" alt="Target icon">
                            <span>Those eager to quickly create <b>top-notch solutions</b>.</span>
                        </li>
                    </ul>
                </div>       
                <div class="trainings-card">
                    <h4 class="trainings-h4">Primary goals of the training</h4>
                    <ul>
                        <li>
                            <img src="/images/trainings/icon_arrow-growth.svg" alt="Graph icon">
                            <span>Enhance your <b>experience</b> with ThingsBoard. </span>
                        </li>
                        <li>
                            <i class="far fa-question-circle fa-lg" style="color: #2A7DEC"></i>
                            <span>Answer <b>practical questions</b> related to your specific use cases. </span>
                        </li>
                        <li>
                            <img src="/images/trainings/akar-icons_reduce.svg" alt="Akar icons">
                            <span>Reduce your <b>time-to-market</b> for IoT products or solutions.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="courses">
        <div class="trainings-wrapper">
            <h3 class="trainings-h3">Training courses</h3>
            {% include carousel.liquid items = 3 itemsHigher960 = 1 itemsHigher600 = 1 itemsHigher0 = 1 dotButtonMode = "circle" collectionMap = "trainings-carousel" cardMode = true carouselMargin = 0 stagePadding = 0 navMode = "smallArrow" titleSize = "28px" titleColor = "#000000DE" titleWeight = "500" titleLineHeight = "38px" descriptionSize = "18px" descriptionColor = "#0000008A" descriptionLineHeight = "24px" linkSize = "16px" linkLineHeight = "24px" linkWeight = "400" %}
            <div class="owl-carousel-toggle-content" id="owl-carousel-0">
                <div class="owl-carousel-toggle-content-item" id="data-visualization">
                    <div class="trainings-contact">
                        <div class="contact">
                            <div>
                                <h4 class="trainings-h4">Data visualization</h4>
                            </div>
                            <a class="contact-us-button" href="/docs/contact-us/">Contact Us</a>
                        </div>
                        <p class="contact-text">
                            Learn how to effectively model and visualize data using the ThingsBoard platform. This training block covers the essentials of ThingsBoard's Web UI, entity management, and advanced data visualization techniques. You will gain hands-on experience with creating and customizing widgets, as well as building comprehensive dashboards that provide insightful data representations for your IoT projects.            
                        </p>
                        <a class="contact-us-button contact-us-button-hidden" href="/docs/contact-us/">Contact Us</a>
                    </div>                
                    {% include accordion.liquid collectionMap = "trainings-data-visualization-accordion-collection" openStatus = "firstOpened" %}
                </div>
                <div class="owl-carousel-toggle-content-item" id="administration">
                    <div class="trainings-contact">
                        <div class="contact">
                            <div>
                                <h4 class="trainings-h4">ThingsBoard administration</h4>
                            </div>
                            <a class="contact-us-button" href="/docs/contact-us/">Contact Us</a>
                        </div>
                        <p class="contact-text">
                            This training provides administrators with the skills needed to successfully deploy, configure, and manage ThingsBoard in various environments. You will learn monolithic and cluster-based deployment strategies, understand architecture components. This training covers hands-on AWS deployment, troubleshooting common issues using logs and diagnostic tools, and improving ThingsBoard’s performance and stability.                        
                        </p>
                        <a class="contact-us-button contact-us-button-hidden" href="/docs/contact-us/">Contact Us</a>
                    </div>   
                    {% include accordion.liquid collectionMap = "trainings-thingsboard-administration-accordion-collection" openStatus = "firstOpened" %}
                </div>
                <div class="owl-carousel-toggle-content-item" id="scada">
                    <div class="trainings-contact">
                        <div class="contact">
                            <div>
                                <h4 class="trainings-h4">SCADA system</h4>
                            </div>
                            <a class="contact-us-button" href="/docs/contact-us/">Contact Us</a>
                        </div>
                        <div class="contact-text">
                            <p class="test">
                                You will learn how to utilize existing SCADA symbols, add new ones, work with SVG tags, and define behaviors and properties with a full description of their capabilities. By the end of the course, participants will be able to build powerful dashboards that optimize process management and monitoring.
                            </p> 
                            <p class="tip">
                                <i class="fas fa-exclamation-circle" style="color: #F36500"></i>
                                <span>
                                    Recommended for users with knowledge of the platform or after completing the "Data Visualization" training
                                </span>
                            </p>  
                        </div>
                        <a class="contact-us-button contact-us-button-hidden" href="/docs/contact-us/">Contact Us</a>
                    </div>   
                    {% include accordion.liquid collectionMap = "trainings-scada-accordion-collection" openStatus = "firstOpened" %}
                </div>
                <div class="owl-carousel-toggle-content-item" id="management">
                    <div class="trainings-contact">
                        <div class="contact">
                            <div>
                                <h4 class="trainings-h4">Platform management and security</h4>
                            </div>
                            <a class="contact-us-button" href="/docs/contact-us/">Contact Us</a>
                        </div>
                        <p class="contact-text">
                            This training program helps participants gain a strong understanding of ThingsBoard’s main features through hands-on practice. It covers data automation using the Rule Engine, user access control with RBAC, alarm management, and API interaction. Advanced users will also learn custom rule node development to extend the system capabilities. This program is perfect for professionals who want to build scalable, secure, high-performing IoT solutions using ThingsBoard.                        
                        </p>
                        <a class="contact-us-button contact-us-button-hidden" href="/docs/contact-us/">Contact Us</a>
                    </div>   
                    {% include accordion.liquid collectionMap = "trainings-platform-management-accordion-collection" openStatus = "firstOpened" %}                
                </div>
            </div>
        </div>
    </div>
    <div class="trainings-cards trainings-cards-bottom">
        <div class="trainings-bottom trainings-wrapper">
            <div class="trainings-cards-wrapper">
                <div class="trainings-card">
                    <span class="trainings-card-icon">
                        <i class="fas fa-users fa-5x" style="color: #2A7DEC"></i>
                    </span>
                    <div class="trainings-card-title-text">
                        <span class="trainings-card-title" style="display: flex">
                            {% include number-animation.html startNum = 1 targetNum = 1200 %}+
                        </span>
                        <span class="trainings-card-subtitle">Participants</span>
                    </div>
                    <p class="trainings-card-text">More than 1200 participants took part in ThingsBoard training sessions</p>
                </div>       
                <div class="trainings-card">
                    <div class="trainings-card-icon">
                        <i class="fas fa-comments fa-5x" style="color: #2A7DEC"></i>
                    </div>
                    <div class="trainings-card-title-text">
                        <span class="trainings-card-title" style="display: flex">
                            {% include number-animation.html startNum = 1 targetNum = 200 %}+
                        </span>
                        <span class="trainings-card-subtitle">Sessions</span>
                    </div>
                    <p class="trainings-card-text">More than 200 sessions were organized for ThingsBoard clients</p>
                </div>    
            </div>    
            <div class="trainings-card-contact-us">
                <p>
                    Professional training tailored for your needs. Get in touch and start learning!
                </p>
                <a class="contact-us-button" href="/docs/contact-us/">Contact Us</a>
            </div>
        </div>
    </div>
</div>

