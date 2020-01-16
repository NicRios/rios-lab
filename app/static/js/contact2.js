jQuery(document).ready(function($)
{
  var contactForm = $('.wpcf7-form'),
      inputs = contactForm.find('.form-field input, .form-field textarea'),
      scrollingTag, acceptPolicyCheckbox = contactForm.find('#accept-policy input'),
      submitBtn = $('.wpcf7-submit'),
      textareaField = contactForm.find('.form-field textarea');


  $(window).load(function() {
      inputs.each(function() {
          var inputField = $(this);
          if ($(this).val().length !== 0) {
              inputField.parent().siblings('.form-field__label').addClass('focused');
          }
      });
      submitBtn.prop('disabled', true);
  });
  submitBtn.on('click', function(e) {
      e.preventDefault();
      var ajaxLoader = submitBtn.siblings('.ajax-loader');
      submitBtn.hide();
      ajaxLoader.css('visibility', 'visible');
      $('.wpcf7-response-output').css('display', 'none');


          if (isFormValid()) {
              contactForm.submit();
          } else {
              ajaxLoader.css('visibility', 'hidden');
              submitBtn.show();
          }
  });
  function isFormValid() {
      var requiredInputs = $('input[aria-required="true"], textarea[aria-required="true"]'),
          isValidForm = true;
      requiredInputs.each(function() {
          var value = $(this).val();
          if (value.length === 0) {
              isValidForm = false;
              return false;
          }
          if ($(this).attr('name') === 'your-international-phone') {
              var activePhoneCode = listOfCountries.find('[data-country-iso="' + chosenPhoneCode.data('country-iso') + '"]').data('phone-code');
              if (value === activePhoneCode) {
                  isValidForm = false;
                  return false;
              }
          }
      });
      return isValidForm;
  }

}
