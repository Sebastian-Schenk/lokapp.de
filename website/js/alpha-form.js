(() => {
  const form = document.querySelector('[data-alpha-form]');

  if (!form) {
    return;
  }

  const feedback = form.querySelector('[data-alpha-feedback]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (feedback) {
      feedback.hidden = false;
      feedback.textContent =
        window.LokAppI18n?.t('alpha.unavailable')
        || 'Die Alpha-Anmeldung wird bald freigeschaltet.';
    }
  });
})();