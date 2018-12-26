---
layout: docwithnav
notitle: "true"
hidetoc: "true"

---

<div id="install-thanks" class="center">
    <div class="thanks-content">
        <i class="fa fa-check" aria-hidden="true"></i>
        <p class="thank-you">Thank you!</p>
        <p>Please check your email for further instructions.</p>
    </div>
</div>

<script type="text/javascript">
    jqueryDefer(function () {
        $('html, body').animate({
                    scrollTop: $('#install-thanks').offset().top - 100
                  }, 0);
        $('#install-thanks .thanks-content').addClass("animated zoomIn");        
    });
</script>
