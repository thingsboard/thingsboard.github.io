---
layout: company
title: Our Company
notitle: "true"

---

<div class="company-content">
    <div class="company-hero-carousel">
        {% include smooth-carousel.liquid collectionMap = "company-photos-carousel" %}
    </div>
    <div class="company-aboutus">
        <div class="company-aboutus-container">
            <h2 class="company-content-title">About Us</h2>
            <div class="company-wrapper">
                <div class="company-flex-content-default">
                    <div class="company-aboutus-image-block">
                        <img class="company-aboutus-image" src="/images/thingsboard_blue.svg" alt="Thingsboard logo" width="257" height="257">
                        <span>ThingsBoard</span>
                    </div>
                    <div class="company-text-content-default">
                        <p class="company-text">At ThingsBoard, we help organizations worldwide unlock the full potential of IoT. Established with a vision to simplify and speed up IoT adoption, we provide a complete open-source IoT platform that enables easy device connectivity, data collection, processing, visualization, and management.</p>
                        <p class="company-text">Our mission is to make IoT technology accessible, scalable, and flexible for organizations of all sizes. We empower businesses to optimize operations, reduce costs, and unlock new opportunities using cutting-edge tools and technologies.</p>
                        <p class="company-text">Over a thousand organizations across industries such as energy, agriculture, retail, telecom, healthcare, and Industry 4.0 trust ThingsBoard to manage their devices and produce insights. Together, we are driving the future of IoT.</p>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="company-content-title">Our history</h2>
        <div class="company-history-container">
            <div class="company-wrapper">
                <div class="company-flex-content-default">
                    <div class="company-text-content-default">
                        <p class="company-text">ThingsBoard started in 2016 as a vision shared by two co-founders: to create an open-source IoT platform that would simplify the complex process of connecting devices, managing data, and visualizing insights. From the very beginning, we were driven by the belief that IoT should be accessible to businesses of all sizes.</p>
                        <p class="company-text">What began as a small project quickly grew into a global movement. Our first release captured the attention of developers and businesses worldwide, laying the foundation for a vibrant community. In 2018, we established ThingsBoard Inc., a company focused on scaling our mission and supporting our growing global customer and user base.</p>
                        <p class="company-text">As we listened to our community, we expanded the ThingsBoard ecosystem with powerful tools like ThingsBoard Gateway, enabling seamless integration of legacy systems, and ThingsBoard Edge, bringing real-time processing and reliability to on-site deployments. In 2019, we introduced Trendz, a dedicated data analytics tool for advanced visualization. In 2020, we launched ThingsBoard Cloud, a fully managed IoT platform, offering a quick and hassle-free way to deploy and scale IoT solutions. Most recently, in 2023, we released TBMQ, our scalable and fault-tolerant MQTT broker designed to handle deployments with hundreds of millions of clients.</p>
                        <p class="company-text">From just two co-founders, ThingsBoard has grown into a team of over 100 talented innovators. Trusted by thousands of organizations globally, we continue to innovate and shape the future of IoT, one device at a time.</p> 
                    </div>
                    <img class="company-aboutus-image" src="/images/company-images/history-image.webp" alt="Co-founders of ThingsBoard" width="400" height="600">
                </div>
            </div>
        </div>
    </div>
    <div class="company-timeline">
        <div class="company-wrapper">
            {% include timeline-carousel.liquid collectionMap = "company-timeline-carousel" %}
        </div>
    </div>
    <div class="company-values">
        <h2 class="company-content-title">Our values</h2>
        <div class="company-values-wrapper">
            {% include tb-carousel.liquid collectionMap = "company-values-carousel" %}
        </div>
    </div>
    <div class="company-team">
        <div class="company-team-wrapper">
            <h2 class="company-content-title">Meet our team</h2>
            {% include bubble-tabs.liquid collectionMap = "thingsboard-team-bubble-tabs-collection" %}
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
            threshold: getThresholdValue ('--company-hero-carousel-animation'),
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

        function showCarouselIfLoaded () {
            const mutationObserver = new MutationObserver((mutationsList, observer) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        const carouselStatus = searchedBlock.querySelector('.owl-loaded');
                        if (carouselStatus) {
                            searchedBlock.classList.add(block.classToAdd);
                            observer.disconnect();
                        }
                    }
                }
            });

            mutationObserver.observe(searchedBlock, {
                childList: true,
                subtree: true
            });

            const carouselStatus = searchedBlock.querySelector('.owl-loaded');

            if (carouselStatus) {
                searchedBlock.classList.add(block.classToAdd);
                mutationObserver.disconnect();
            }
        }

        function showBlockByThreshold () {
            const searchedBlockObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (block.carousel) {
                            showCarouselIfLoaded();
                        } else {
                            entry.target.classList.add(block.classToAdd);
                        }
                        searchedBlockObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: block.threshold
            });

            searchedBlockObserver.observe(searchedBlock);
        }

        showBlockByThreshold();

    }

    window.onload = function() {
        animatedBlocks.forEach(block => {
            searchForAnimation(block);
        });
    };



</script>
