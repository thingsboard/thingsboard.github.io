---
layout: common
title: Media Kit
notitle: "true"
description: ThingsBoard Media Kit

---

<h1 class="media-kit-title">ThingsBoard Media Kit</h1>
<p class="media-kit-subtitle">Company overview and official visuals — all in one place</p>
<h2 class="media-kit-assets-title">Media assets</h2>
<div class="thingsboard-logos">
    <h3>The ThingsBoard logo</h3>
    <p>The ThingsBoard logo is available in three colors. Use black and deep blue on light backgrounds,</p>
    <p>and white on dark backgrounds.</p>
    <p>Do not modify the logo colors and use only the logos provided you by ThingsBoard.</p>
    <p class="mb">Official ThingsBoard logos are trademarks of ThingsBoard, inc.</p>
    <div class="logos-images">
        <div><img src="/images/thingsboard_logo_white.svg" alt="White Thingsboard logo"></div>
        <div><img src="/images/thingsboard_logo_blue_media.svg" alt="Blue Thingsboard logo"></div>
        <div><img src="/images/thingsboard_logo_black.svg" alt="Black Thingsboard logo"></div>
    </div>
    <div class="logos-images">
        <div><img src="/images/thingsboard_logo_white_l.svg" alt="White Thingsboard logo"></div>
        <div><img src="/images/thingsboard_logo_blue_l.svg" alt="Blue Thingsboard logo"></div>
        <div><img src="/images/thingsboard_logo_black_l.svg" alt="Black Thingsboard logo"></div>
    </div>
    <h4>How to use our logo</h4>
    <p>Always provide a protected area of isolation around the logo, as illustrated in the diagram. </p>
    <p class="mb">This ensures the logo remains prominent and legible without interference from other design elements.</p>
    <div class="logos-examples">
        <div><img src="/images/thingsboard_logo_example.svg" alt="Thingsboard logo padding example"></div>
        <div><img src="/images/thingsboard_logo_example_sm.svg" alt="Small Thingsboard logo padding example"></div>
    </div>
    <a class="download" href="ThingsBoard_Logos.zip">Download logo kit <img src="/images/download-icon.svg" alt=""></a>
</div>
<div class="thingsboard-colors">
    <h3>Brand colors</h3>
    <p>Our brand palette reflects the versatility and clarity of the ThingsBoard platform.</p>
    <p>Please use these colors consistently when referencing our products or visual identity.</p>
    <p class="mb">Deep blue color used for our Community Edition, Green color represents our Professional Edition.</p>
    <div>
        <div class="color-block">
            <div class="color">CE</div>
            <div class="color-values">
                <p><span>HEX</span>#305680 <img src="/images/copy-icon.svg" alt="Copy icon"><span>Copy value</span></p>
                <p><span>RGB</span>48, 86, 128 <img src="/images/copy-icon.svg" alt="Copy icon"><span>Copy value</span></p>
                <p><span>CMYK</span>62.5, 32.81, 0, 49.8 <img src="/images/copy-icon.svg" alt="Copy icon"><span>Copy value</span></p>
            </div>
        </div>
        <div class="color-block">
            <div class="color pe">PE</div>
            <div class="color-values">
                <p><span>HEX</span>#00695C <img src="/images/copy-icon.svg" alt="Copy icon"><span>Copy value</span></p>
                <p><span>RGB</span>0, 105, 92 <img src="/images/copy-icon.svg" alt="Copy icon"><span>Copy value</span></p>
                <p><span>CMYK</span>100, 0, 12.38, 58.82 <img src="/images/copy-icon.svg" alt="Copy icon"><span>Copy value</span></p>
            </div>
        </div>
    </div>
</div>
<div class="trademarks">
    <h3>Using the ThingsBoard trademarks</h3>
    <div class="block">
        <div class="text">
            <h4>To identify ThingsBoard platform and link to website</h4>
            <p>You needn't ask us for permission to use the ThingsBoard logo on your own website solely as a hyperlink to <a target="_blank" href="https://thingsboard.io">thingsboard.io</a>  or to an appropriate ThingsBoard project, or in other materials, such as presentations and slides, solely as a means to refer to the ThingsBoard itself. All other uses of the ThingsBoard logo must be <a href="https://www.apache.org/foundation/marks/contact#other">approved in writing</a> by the ThingsBoard, inc.</p>
        </div>
        <img src="/images/tb-trademarks-1.webp" title="To identify ThingsBoard platform and link to website" alt="To identify ThingsBoard platform and link to website" width="450" height="241">
    </div>
    <div class="block">
        <div class="text">
            <h4>In software product branding</h4>
            <p>In general, you may not use ThingsBoard trademarks in any software product branding for software products except "Powered By ThingsBoard" in the dashboard footer. For example, it is not permitted to name a product either "MyCompany distribution of ThingsBoard", "ThingsBoard MyCompany Edition", or any similar kind of name. You may contact us to get a written permission to use ThingsBoard trademarks in your software product branding.</p>
        </div>
        <img src="/images/tb-trademarks-2.webp" title="In software product branding" alt="In software product branding" width="450" height="241">
    </div>
    <div class="block">
        <div class="text">
            <h4>The following uses of ThingsBoard trademarks are probably infringing:</h4>
            <ul>
                <li><p>Confusingly similar software product names.</p></li>
                <li><p>Software service offerings that are for anything other than official ThingsBoard-distributed software.</p></li>
                <li><p>Company names that may be associated in customer's minds with ThingsBoard or its trademarked project software.</p></li>
            </ul>
        </div>
        <img src="/images/tb-trademarks-3.webp" title="Uses of ThingsBoard trademarks" alt="Uses of ThingsBoard trademarks" width="450" height="241">
    </div>
</div>
<div class="contact-us-banner">
    <div class="contact-us-banner-content">
        <h2>Read more about ThingsBoard</h2>
        <p>ThingsBoard is continuously evolving to deliver more scalable, efficient, and future-proof solutions. Learn more about us and explore how we're helping companies solve real-world challenges and accelerate their IoT transformation.</p>
        <div class="contact-us-banner-buttons">
            <a class="gtm_button" href="/company/">About company</a>
            <a class="gtm_button" href="/iot-use-cases/">Use cases</a>
            <a class="gtm_button" href="/case-studies/">Case studies</a>
        </div>
    </div>
    <img src="/images/logo-fade.svg" width="380" height="267" alt="Thingsboard icon">
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.color-values img').forEach(elem => {
            elem.onclick = function(event) {
                event.stopPropagation();
                const $temp = $("<input>");
                $("body").append($temp);
                window.getSelection().removeAllRanges();
                $temp.val(elem.previousSibling.textContent).select();
                document.execCommand("copy");
                $temp.remove();
                const tooltipEl = elem.nextElementSibling;
                tooltipEl.innerHTML = "Copied";
                setTimeout(() => {
                    tooltipEl.innerHTML = 'Copy value'
                }, 1500);
            }
        })
    })
</script>