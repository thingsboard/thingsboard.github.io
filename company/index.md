---
layout: company
title: Our Company
notitle: "true"

---

<div class="company-content">
    <div class="company-hero-carousel">
        {% include carousel.liquid items = 4 collectionMap = "company-photos-carousel" autoplay = true smoothAutoPlay = true autoWidth = true nonActiveItemsVisibility = false carouselMargin = 0 transitionAnimation = false navMode = "disableNav" dotButtonMode = "disableDots" imageBorderRadius = 0 %}
    </div>
    <div class="company-aboutus">
        <h2 class="company-content-title">About Us</h2>
        <div class="company-aboutus-container">
            <div class="company-wrapper">
                <div class="company-flex-content-default">
                    <div class="company-aboutus-image-block">
                        <img class="company-aboutus-image" src="/images/thingsboard_blue.svg" alt="Thingsboard logo">
                        <span>ThingsBoard</span>
                    </div>
                    <div class="company-text-content-default">
                        <p class="company-text">ThingsBoard, Inc. was founded in 2016. We develop IoT software products under ThingsBoard™ umbrella. Our flagship IoT platform is the most popular open-source project in its class. ThingsBoard's freeware and licensed software is widely used by both IoT enthusiasts who design and prototype their smart solutions in their garages and industrial customers with a wide range of requirements for device management, data processing, security, privacy, analysis, etc.</p>
                        <p class="company-text">ThingsBoard, Inc. evolved from a startup with 2 employees to a renowned IoT enabler with hundreds of licensees and thousands of community users in a very short period. Currently, our R&D office is in Kyiv, Ukraine. However, the company is fast-growing and new offices will appear in the future. Stay in touch with us.</p>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="company-content-title">Our history</h2>
        <div class="company-history-container">
            <div class="company-wrapper">
                <div class="company-flex-content-default">
                    <div class="company-text-content-default">
                        <p class="company-text">Our journey began with a simple idea and a strong belief in our capabilities. We knew the future lay in IoT, so we set out to create software that enables users to develop exceptional IoT solutions worldwide. With this mission, two visionary programmers started building a product that would be accessible to everyone.</p>
                        <p class="company-text">And it succeeded.</p>
                        <p class="company-text">As we grew, so did our product. We introduced subproducts like EDGE, Trendz, Gateway, and TBMQ, each enhancing our platform’s efficiency and user experience. These additions brought new features and functionalities, empowering our clients to harness the full potential of IoT.</p>
                        <p class="company-text">Today, ThingsBoard Inc. is a testament to ingenuity and hard work. Our platform is used globally by businesses and developers, driving innovation across various industries. From smart cities to industrial automation, our solutions lead the IoT revolution.</p>
                        <p class="company-text">But our journey doesn’t end here. We continue to push the boundaries of IoT with a dedicated team and a commitment to excellence. ThingsBoard Inc. is more than a company; it’s a community of innovators, dreamers, and doers building a smarter, more connected world.</p>
                    </div>
                    <img class="company-aboutus-image" src="/images/companyImages/history_image.webp" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="company-timeline">
        <div class="company-wrapper">
            {% include carousel.liquid items = 5 itemsHigher960 = 3 itemsHigher600 = 2 itemsHigher0 = 1 collectionMap = "company-timeline-carousel" timeline = true autoplay = false loop = false carouselMargin = 50 stagePadding = 0 dotButtonMode = "disableDots" navMode = "smallArrow" titleHoverScale = 1.6 titleSize = "24px" titleColor = "#305680" descriptionColor = "#00000c2" titleWeight = "600" titleLineHeight = "40px" descriptionLineHeight = "30px" %}
        </div>
    </div>
    <div class="company-values">
        <div class="company-values-wrapper">
            {% include carousel.liquid collectionMap = "company-values-carousel" contentDirection = "imageBackground" darkenedImage = true navMode = "disableNav" carouselMargin = 0 stagePadding = 0 titleSize = "96px" titleSizeLower1280 = "64px" titleSizeLower960 = "56px" titleSizeLower600 = "40px" descriptionSize = "36px" descriptionSizeLower960 = "32px" descriptionSizeLower600 = "28px" titleLineHeight = "125%" descriptionLineHeight = "140%" titleColor = "#FFF" descriptionColor = "#FFF" backgroundImageMode = true thingsboardStyledBackground = true dotButtonMode = "square" dotButtonInCarouselContainer = true dotButtonColor = "#FFF" %}
        </div>
    </div>
    <div class="company-team">
        <div class="company-team-wrapper">
            <h2 class="company-content-title">Meet our team</h2>
            {% include bubble-tabs.liquid collectionMap = "thingsboard-team-bubble-tabs-collection" columnsPerRowArray = "4,6" %}
            <a class="join-link" href="/careers/">
                <span>Join our team</span>
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
    {% include thingsboard-contacts.html %}
</div>

<script type="text/javascript">

    function getThresholdValue (property) {
        return Number(getComputedStyle(companyContent).getPropertyValue(property));
    }

    const animatedBlocks = [
        {
            classToSearch: ".company-hero-carousel",
            classToAdd: "company-hero-carousel-animation",
            threshold: 0.1,
            carousel: true
        },
        {
            classToSearch: ".company-aboutus-container",
            classToAdd: "company-aboutus-content-animation",
            threshold: getThresholdValue ('--company-aboutus-content-animation')
        },
        {
            classToSearch: ".company-history-container",
            classToAdd: "company-history-content-animation",
            threshold: getThresholdValue ('--company-history-content-animation')
        },
        {
            classToSearch: ".company-timeline",
            classToAdd: "company-timeline-content-animation",
            threshold: getThresholdValue ('--company-timeline-content-animation'),
            carousel: true
        },
        {
            classToSearch: ".company-values",
            classToAdd: "company-values-content-animation",
            threshold: getThresholdValue ('--company-values-content-animation'),
            carousel: true
        }
    ];

    function searchForAnimation(block) {
        const searchedBlock = document.querySelector(block.classToSearch);
    
        const searchedBlockObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (block.carousel) {
                        const mutationObserver = new MutationObserver((mutationsList, observer) => {
                            for (let mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    const carouselStatus = entry.target.querySelector('.owl-loaded');
                                    if (carouselStatus) {
                                        entry.target.classList.add(block.classToAdd);
                                        observer.disconnect();
                                        searchedBlockObserver.unobserve(entry.target);
                                    }
                                }
                            }
                        });

                        mutationObserver.observe(entry.target, {
                            childList: true,
                            subtree: true
                        });
    
                        const carouselStatus = entry.target.querySelector('.owl-loaded');
                        if (carouselStatus) {
                            entry.target.classList.add(block.classToAdd);
                            searchedBlockObserver.unobserve(entry.target);
                        }
    
                    } else {
                        entry.target.classList.add(block.classToAdd);
                        searchedBlockObserver.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: block.threshold
        });
    
        if (searchedBlock) {
            searchedBlockObserver.observe(searchedBlock);
        }
    }
    
    
    animatedBlocks.forEach(block => {
        searchForAnimation(block);
    });


</script>
