---
layout: docwithnav
title: Subscribe to Thingsboard Newsletter

---
<script type="text/javascript">

    function validateNewsletterForm(form) {
        var email = $('input[name=email]', form).val();
        
        if (!validateValue('Email Address', email)) {
            return false;
        }
        
        var emailExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(email.match(emailExp)==null) {
            window.alert("Entered Email Address is not valid.");
            return false; 
        }
        return true;
    }
    
    function validateValue(name, val) {
        if (isEmpty(val)) {
            window.alert("Please fill '" + name + "' field.");
            return false;
        }
        return true;
    }
    
    function isEmpty(val) {
        return val === undefined || val.trim().length == 0;
    }

</script>

<form id="newsletter-form" method="post" class="contact-form" onsubmit="return validateNewsletterForm(this)">
    <fieldset>
        <p class="form-element first half">
            <label for="email">
                Email Address
                <abbr class="required" title="required">*</abbr> 
            </label>
            <input class="text-input" name="email" type="text" size="40" maxlength="80">
        </p>
        <input type="hidden" name="_next" value="/docs/newsletter-thanks/" />
        <input type="text" name="_gotcha" style="display:none" />
        <p class="form-element">
             <input class="button" value="Submit" type="submit">
        </p>
    </fieldset>
</form>

<script type="text/javascript">

    var contactform =  document.getElementById('newsletter-form');
    contactform.setAttribute('action', 'https://formspree.io/' + 'newsletter' + '@' + 'thingsboard' + '.' + 'io');

</script>