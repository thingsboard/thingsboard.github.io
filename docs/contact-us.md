---
layout: common
title: Contact us
notitle: "true"
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
        
        if (isEmpty(subject)) {
            window.alert("Please select Subject.");
            return false;
        }
        
        /*if (subject === 'Please Select') {
            window.alert("Please select Subject.");
            return false;
        }*/
        
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
        return val === undefined || val === null || val.trim().length == 0;
    }

</script>
<h1 class="contact-us-title">Contact Us</h1>
<div class="background">
    <div class="main1"></div><div class="small1"></div><div class="small2"></div><div class="small3"></div><div class="small4"></div>
</div>
<form id="ContactUs" method="post" class="contact-form gtm_form" onsubmit="return validateContactForm(this)">
    <fieldset>
        <div class="form-section">
            <div class="form-element first half">
                <label for="first-name">
                    <input class="form-control" value="" placeholder="Enter First Name" name="first-name" type="text" size="40" maxlength="50">
                    <p>First Name*</p>
                </label>
            </div>
            <div class="form-element half">
                <label for="last-name">
                    <input class="form-control" value="" placeholder="Enter Last Name" name="last-name" type="text" size="40" maxlength="50">
                    <p>Last Name*</p>
                </label>
            </div>
            <div class="form-element first half">
                <label for="email">
                    <input class="form-control" value="" placeholder="Enter Email" name="email" type="email" size="40" maxlength="80">
                    <p>Email Address*</p>
                </label>
            </div>
            <div class="form-element half">
                <label for="company">
                    <input class="form-control" value="" placeholder="Enter Company" name="company" type="text" size="40" maxlength="80">
                    <p>Company*</p>
                </label>
            </div>
            <div class="form-element">
                <label for="subject" class="select-label">
                    <select class="form-control select" name="subject">
                        <option value="" disabled selected>Select Subject</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="ThingsBoard Products">ThingsBoard Products</option>
                        <option value="Deployment Options">Deployment Options</option>
                        <option value="Training">Training</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Press or Analyst Inquiry">Press or Analyst Inquiry</option>
                        <option value="General Feedback">General Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                    <p>Subject*</p>
                </label>
            </div>
            <div class="form-element">
                <label for="message">
                    <textarea class="form-control text-area" placeholder="Enter Message" name="message" cols="50" rows="4" maxlength="3000"></textarea>
                    <p class="text-area-label">Message*</p>
                </label>
            </div>
            <input type="hidden" name="_next" value="/docs/contact-us-thanks/">
            <input type="text" name="_gotcha" style="display:none">
        </div>
        <div class="submit-button-container">
             <input class="button" value="Submit" type="submit">
        </div>
    </fieldset>
</form>

<script type="text/javascript">



    jqueryDefer(
        function () {
            $( document ).ready(function() {
                var $contactForm =  $('#ContactUs');
                $contactForm.attr('action', 'https://formspree.io/f/xbjvbeln');
               /*  $('html, body').animate({
                            scrollTop: $('#contact-form').offset().top - 200
                          }, 0);*/
                 $contactForm.find('.form-element .form-control').addClass("input--empty");
                 $contactForm.find('.form-element .form-control').on('input', function() {
                      if( !$(this).val() ) {
                         $(this).addClass("input--empty");
                      } else {
                         $(this).removeClass("input--empty");
                      }
                 });
                 
                 $.urlParam = function (name) {
                     var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                     return results ? results[1] : null;
                 };
                 var subjectValue = $.urlParam('subject');
                 if (subjectValue != undefined && subjectValue.trim().length > 0) {                    
                    $contactForm.find('select[name=subject]').val(decodeURIComponent(subjectValue));
                    $contactForm.find('select[name=subject]').removeClass("input--empty");
                 }
            });
        }
    );

</script>
