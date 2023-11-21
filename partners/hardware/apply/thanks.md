---
layout: common
notitle: "true"
hidetoc: "true"

---

<div id="background">
    <div class="main1"></div><div class="small1"></div><div class="small2"></div><div class="small3"></div><div class="small4"></div>
</div>

<div id="install-thanks" class="center">
    <div class="thanks-content">
        <p class="thank-you">Thank you!</p>
        <div id="silver-form" style="display: none;">
            <p>Thanks for applying for Silver Hardware Partner Program.<br>Please check your email for further instructions.</p>
        </div>    
        <div id="gold-form" style="display: none;">
            <p>Thanks for applying for Gold Hardware Partner Program.<br>Please check your email for further instructions.</p>
        </div>    
        <div id="platinum-form" style="display: none;">
            <p>Thanks for applying for Platinum Hardware Partner Program.<br>Please check your email for further instructions.</p>
        </div>   
        <a class="homepage" href="/">Homepage</a>
    </div>
</div>

<script type="text/javascript">
    jqueryDefer(function () {
       $( document ).ready(function() {
             $('#contact-us-thanks').addClass("opened");
             $('#background').addClass("opened");
       });
    });
</script>

<script type="text/javascript">
    var typeForms = {
        "silver": "#silver-form",
        "gold": "#gold-form",
        "platinum": "#platinum-form"
    };

    jqueryDefer(function () {
        $( document ).ready(function() {
            $.urlParam = function (name) {
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                return results ? results[1] : null;
            };                 
            var type = $.urlParam('type');
            if (!type) {
                type = "silver";
            }             
            var formId = typeForms[type];
            if (formId) {
                var typeForm = $(formId);
                typeForm.css('display', '');
            }
        });        
    });
</script>
