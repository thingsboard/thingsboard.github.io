---
layout: common
title: Contact us
notitle: "true"
---
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('encyclopedia').style.backgroundColor = '#F4F8FE';
        const header = document.getElementsByTagName('header')[0];
        header.style.backgroundColor = '#F4F8FE';
        header.style.boxShadow = 'none';
        const contentEl = document.getElementById('content');
        contentEl.style.backgroundImage = "url('/images/contact-us-bg.svg')";
        contentEl.style.backgroundPosition = "center";
        contentEl.style.backgroundRepeat = "no-repeat";
        contentEl.style.backgroundSize = "contain";
    });

    function isValidEmailFormat(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
        return emailRegex.test(email);
    }

    function clearErrorState(inputElement) {
        if (!inputElement) return;

        inputElement.classList.remove('invalid-input');
        inputElement.setAttribute('aria-invalid', 'false');
        inputElement.removeAttribute('aria-describedby');

        const parentLabel = inputElement.closest('label');
        let potentialErrorHint;


        if (parentLabel && parentLabel.nextElementSibling && parentLabel.nextElementSibling.classList.contains('error-message-hint')) {
            potentialErrorHint = parentLabel.nextElementSibling;
        } else {
            const formElementDiv = inputElement.closest('.form-element');
            if (formElementDiv) {
                 const hintsInDiv = formElementDiv.querySelectorAll('.error-message-hint');
                 hintsInDiv.forEach(hint => {
                     if (hint.previousElementSibling === parentLabel) {
                         potentialErrorHint = hint;
                     }
                 });
                 if (!potentialErrorHint && hintsInDiv.length > 0) {
                    if (inputElement.nextElementSibling && inputElement.nextElementSibling.classList.contains('error-message-hint')) {
                        potentialErrorHint = inputElement.nextElementSibling;
                    }
                 }
            }
        }

        if (potentialErrorHint && potentialErrorHint.classList.contains('error-message-hint')) {
            potentialErrorHint.remove();
        }
    }

    function setErrorState(inputElement, message) {
        if (!inputElement) return;

        clearErrorState(inputElement);

        inputElement.classList.add('invalid-input');
        inputElement.setAttribute('aria-invalid', 'true');

        const errorHintId = `error-hint-${inputElement.id || inputElement.name || 'element'}`;
        inputElement.setAttribute('aria-describedby', errorHintId);

        const errorMessageElement = document.createElement('p');
        errorMessageElement.className = 'error-message-hint';
        errorMessageElement.id = errorHintId;
        errorMessageElement.textContent = message;
        errorMessageElement.setAttribute('role', 'alert');

        const parentLabel = inputElement.closest('label');
        if (parentLabel) {
            parentLabel.insertAdjacentElement('afterend', errorMessageElement);
        }
    }

    function validateContactForm(form) {
        let isValid = true;
        const fieldsToValidate = [
            { name: 'first-name', prettyName: 'First Name', type: 'text', id: 'first-name' },
            { name: 'last-name', prettyName: 'Last Name', type: 'text', id: 'last-name' },
            { name: 'email', prettyName: 'Email Address', type: 'email', id: 'email' },
            { name: 'company', prettyName: 'Company', type: 'text', id: 'company' },
            { name: 'message', prettyName: 'Message', type: 'textarea', id: 'message' }
        ];

        fieldsToValidate.forEach(fieldSpec => {
            const inputElement = form.elements[fieldSpec.name];
            if (inputElement) {
                clearErrorState(inputElement);
            }
        });

        fieldsToValidate.forEach((fieldSpec) => {
            const inputElement = form.elements[fieldSpec.name];
            const value = inputElement.value.trim();
            let errorMessageText = '';

            if (value === '') {
                errorMessageText = `${fieldSpec.prettyName} is required.`;
            } else if (fieldSpec.type === 'email' && !isValidEmailFormat(value)) {
                errorMessageText = `Please enter a valid ${fieldSpec.prettyName.toLowerCase()}.`;
            }

            if (errorMessageText) {
                setErrorState(inputElement, errorMessageText);
                isValid = false;
            }
        });

        if (!isValid) {
            const firstInvalidField = form.querySelector('.invalid-input');
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
        }
        return isValid;
    }


    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('ContactUs');

        const fieldsToWatchForInput = [
            'first-name', 'last-name', 'email', 'company', 'message'
        ];

        fieldsToWatchForInput.forEach(fieldName => {
            const inputElement = form.elements[fieldName];
            if (inputElement) {
                inputElement.addEventListener('input', function() {
                    if (this.classList.contains('invalid-input')) {
                        clearErrorState(this);
                    }
                });
            }
        });
    });
</script>
<form id="ContactUs" method="post" class="contact-form gtm_form" onsubmit="return validateContactForm(this)" novalidate>
    <h1 class="contact-us-title">Contact Us</h1>
    <fieldset>
        <div class="form-section">
            <div class="form-element">
                <label for="first-name">
                   <input class="form-control" value="" placeholder="John" name="first-name" id="first-name" type="text" size="40" maxlength="50" aria-invalid="false">
                    <p>First Name</p>
                </label>
            </div>
            <div class="form-element">
                <label for="last-name">
                    <input class="form-control" value="" placeholder="Doe" name="last-name" id="last-name" type="text" size="40" maxlength="50" aria-invalid="false">
                    <p>Last Name</p>
                </label>
            </div>
            <div class="form-element">
                <label for="email">
                    <input class="form-control" value="" placeholder="john@example.com" name="email" id="email" type="email" size="40" maxlength="80" aria-invalid="false">
                    <p>Email Address</p>
                </label>
            </div>
            <div class="form-element">
                <label for="company">
                    <input class="form-control" value="" placeholder="My Company Inc." name="company" id="company" type="text" size="40" maxlength="80" aria-invalid="false">
                    <p>Company</p>
                </label>
            </div>
            <div class="form-element">
                <label for="subject" class="select-label">
                    <select class="form-control select" name="subject">
                        <option value="" disabled selected>Select Subject</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="ThingsBoard Products">ThingsBoard Products</option>
                        <option value="Private Cloud">Private Cloud</option>
                        <option value="Deployment Options">Deployment Options</option>
                        <option value="Custom Development">Custom Development</option>
                        <option value="Training">Training</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Press or Analyst Inquiry">Press or Analyst Inquiry</option>
                        <option value="General Feedback">General Feedback</option>
                        <option value="TBMQ">TBMQ</option>
                        <option value="Other">Other</option>
                    </select>
                    <p>Subject</p>
                </label>
            </div>
            <div class="form-element">
                <label for="message">
                    <textarea class="form-control text-area" placeholder="Enter Message" name="message" id="message" cols="50" rows="4" maxlength="3000" aria-invalid="false"></textarea>
                    <p class="text-area-label">Message</p>
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
    document.addEventListener('DOMContentLoaded', function() {
        let params = new URLSearchParams(window.location.search);
         if (params.has('pcorder')) {
            const titleEl = document.querySelector('.contact-us-title');
            titleEl.innerText = 'Get Your Private IoT Platform';
            titleEl.style.fontSize = '40px';
            document.querySelector('.select-label').parentElement.style.display = 'none';
        }
         if (params.has('tbmqorder')) {
            const titleEl = document.querySelector('.contact-us-title');
            titleEl.innerText = 'Get Your Private MQTT Broker';
            titleEl.style.fontSize = '40px';
            document.querySelector('.select-label').parentElement.style.display = 'none';
        }
    });
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
                 const subjectValue = $.urlParam('subject');
                 const messageValue = $.urlParam('message');

                 if (subjectValue != undefined && subjectValue.trim().length > 0) {
                    $contactForm.find('select[name=subject]').val(decodeURIComponent(subjectValue));
                    $contactForm.find('select[name=subject]').removeClass("input--empty");
                 }
                 if (messageValue != undefined && messageValue.trim().length > 0) {
                    $contactForm.find('textarea').val(decodeURIComponent(messageValue));
                 }
            });
        }
    );

</script>
