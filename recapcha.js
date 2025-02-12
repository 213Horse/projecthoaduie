
function onClick(e) {
  e.preventDefault();
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute('6Lcq_NQqAAAAAE2VTnoXNwxdz_2DjCfcxuCsMtoK', {action: 'LOGIN'});
    // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
    // reCAPTCHA to the end user's browser.
    // This token must be validated by creating an assessment.
    // See https://cloud.google.com/recaptcha/docs/create-assessment
  });
}