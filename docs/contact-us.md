---
layout: docwithnav
title: Contact us

---
<script type="text/javascript">

    function validateContactForm(form) {
        var firstName = $('input[name=first-name]', form).val();
        var lastName = $('input[name=last-name]', form).val();
        var email = $('input[name=email]', form).val();
        var company = $('input[name=company]', form).val();
        var subject = $('select[name=subject]', form).val();
        var message = $('textarea[name=message]', form).val();
        
        if (!validateValue('First Name', firstName)) {
            return false;
        }
        if (!validateValue('Last Name', lastName)) {
            return false;
        }
        if (!validateValue('Email Address', email)) {
            return false;
        }
        
        var emailExp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(email.match(emailExp)==null) {
            window.alert("Entered Email Address is not valid.");
            return false; 
        }
        
        if (!validateValue('Company', company)) {
            return false;
        }
        
        if (subject === 'Please Select') {
            window.alert("Please select Subject.");
            return false;
        }
        if (!validateValue('Message', message)) {
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

<form id="contact-form" method="post" class="contact-form" onsubmit="return validateContactForm(this)">
    <fieldset>
        <p class="form-element first half">
            <label for="first-name">
                First Name
                <abbr class="required" title="required">*</abbr>
            </label>
            <input class="text-input" name="first-name" type="text" size="40" maxlength="50">
        </p>
        <p class="form-element half">
            <label for="last-name">
                Last Name
                <abbr class="required" title="required">*</abbr>
            </label>
            <input class="text-input" name="last-name" type="text" size="40" maxlength="50">
        </p>
        <p class="form-element first half">
            <label for="email">
                Email Address
                <abbr class="required" title="required">*</abbr> 
            </label>
            <input class="text-input" name="email" type="text" size="40" maxlength="80">
        </p>
        <p class="form-element half">
            <label for="company">
                Company
                <abbr class="required" title="required">*</abbr> 
            </label>
            <input class="text-input" name="company" type="text" size="40" maxlength="80">
        </p>
        <p class="form-element">
            <label for="subject">
                Subject
                <abbr class="required" title="required">*</abbr>
            </label>
            <select class="select" name="subject">
                <option value="Please Select">Please Select</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Training">Training</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Partnership">Partnership</option>
                <option value="Press or Analyst Inquiry">Press or Analyst Inquiry</option>
                <option value="General Feedback">General Feedback</option>
                <option value="Other">Other</option>
            </select>            
        </p>        
        <p class="form-element">
            <label for="message">
                Message
                <abbr class="required" title="required">*</abbr>
            </label>
            <textarea class="text-area" name="message" cols="50" rows="8" maxlength="3000"></textarea>
        </p>
        <input type="hidden" name="_next" value="/docs/contact-us-thanks/" />
        <input type="text" name="_gotcha" style="display:none" />
        <p class="form-element">
             <input class="button" value="Submit" type="submit">
        </p>
    </fieldset>
</form>

<script type="text/javascript">

    var contactform =  document.getElementById('contact-form');
    contactform.setAttribute('action', 'https://formspree.io/' + 'support' + '@' + 'thingsboard' + '.' + 'io');

</script>