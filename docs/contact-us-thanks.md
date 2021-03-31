---
layout: common
notitle: "true"
hidetoc: "true"

---

<div id="contact-us-thanks" class="center">
    <div class="thanks-content">
        <i class="fa fa-check" aria-hidden="true"></i>
        <p class="thank-you">Thank you for getting in touch!</p>
        <p>We appreciate you contacting us and will try to respond as soon as possible. Have a great day!</p>
    </div>
</div>
<script type="text/javascript">
    jqueryDefer(function () {
        $('html, body').animate({
                    scrollTop: $('#contact-us-thanks').offset().top - 100
                  }, 0);
        $('#contact-us-thanks .thanks-content').addClass("animated zoomIn");        
    });
</script>
