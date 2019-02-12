---
layout: docwithnav
notitle: "true"
hidetoc: "true"

---

<div id="install-thanks" class="center">
    <div class="thanks-content">
        <i class="fa fa-check" aria-hidden="true"></i>
        <p class="thank-you">Thank you!</p>
        <div id="silver-form" style="display: none;">
            <p>Thanks for applying for Silver Hardware Partner Program.<br/>Please check your email for further instructions.</p>
        </div>    
        <div id="gold-form" style="display: none;">
            <p>Thanks for applying for Gold Hardware Partner Program.<br/>Please check your email for further instructions.</p>
        </div>    
        <div id="platinum-form" style="display: none;">
            <p>Thanks for applying for Platinum Hardware Partner Program.<br/>Please check your email for further instructions.</p>
        </div>    
    </div>
</div>

<script type="text/javascript">

    var typeForms = {
        "silver": "#silver-form",
        "gold": "#gold-form",
        "platinum": "#platinum-form"
    };

    jqueryDefer(function () {
        $( document ).ready(function() {
            $('html, body').animate({
                        scrollTop: $('#install-thanks').offset().top - 100
                      }, 0);
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
            $('#install-thanks .thanks-content').addClass("animated zoomIn");
        });        
    });
</script>
