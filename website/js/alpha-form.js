(() => {
  const form = document.querySelector('[data-alpha-form]');

  if (!form) {
    return;
  }

  const feedback = form.querySelector('[data-alpha-feedback]');
  const submitButton = form.querySelector('button[type="submit"]');
  const submitText = submitButton?.querySelector('span:first-child');
  const originalSubmitText = submitText?.textContent?.trim() || '';
  const emailInput = form.elements.email;
  const platformInput = form.elements.platform;
  const privacyInput = form.elements.privacy;

  const translate = (key, fallback) => {
    const translated = window.LokAppI18n?.t?.(key);

    return translated && translated !== key ? translated : fallback;
  };

  const showFeedback = (message, type = 'info') => {
    if (!feedback) {
      return;
    }

    feedback.hidden = false;
    feedback.textContent = message;
    feedback.dataset.state = type;
  };

  const clearFeedback = () => {
    if (!feedback) {
      return;
    }

    feedback.hidden = true;
    feedback.textContent = '';
    delete feedback.dataset.state;
  };

  const setSubmitting = (isSubmitting) => {
    if (!submitButton) {
      return;
    }

    submitButton.disabled = isSubmitting;
    submitButton.setAttribute('aria-busy', String(isSubmitting));

    if (!submitText) {
      return;
    }

    submitText.textContent = isSubmitting
      ? translate('alphaPage.submitting', 'Anmeldung wird gesendet …')
      : originalSubmitText;
  };

  const confirmationState = new URLSearchParams(window.location.search).get(
    'confirmed',
  );

  if (confirmationState === '1') {
    showFeedback(
      translate(
        'alphaPage.confirmed',
        'Deine E-Mail-Adresse wurde bestätigt. Danke für dein Interesse an der LokApp Alpha.',
      ),
      'success',
    );
  }

  if (confirmationState === '0') {
    showFeedback(
      translate(
        'alphaPage.confirmationFailed',
        'Dieser Bestätigungslink ist ungültig oder bereits abgelaufen.',
      ),
      'error',
    );
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearFeedback();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const email = String(emailInput?.value || '').trim();
    const platform = String(platformInput?.value || '').trim();
    const privacyAccepted = Boolean(privacyInput?.checked);

    if (!email || !platform || !privacyAccepted) {
      showFeedback(
        translate(
          'alphaPage.validationError',
          'Bitte fülle alle Pflichtfelder aus und bestätige die Datenschutzerklärung.',
        ),
        'error',
      );
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/v1/alpha/signups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          platform,
          privacyAccepted,
        }),
      });

      if (response.status === 429) {
        showFeedback(
          translate(
            'alphaPage.rateLimited',
            'Zu viele Anfragen. Bitte warte kurz und versuche es später erneut.',
          ),
          'error',
        );
        return;
      }

      if (response.status === 503) {
        showFeedback(
          translate(
            'alphaPage.serviceUnavailable',
            'Die Anmeldung ist gerade nicht verfügbar. Bitte versuche es später erneut.',
          ),
          'error',
        );
        return;
      }

      if (!response.ok) {
        showFeedback(
          translate(
            'alphaPage.submitError',
            'Die Anmeldung konnte nicht gespeichert werden. Bitte prüfe deine Angaben und versuche es erneut.',
          ),
          'error',
        );
        return;
      }

      form.reset();

      showFeedback(
        translate(
          'alphaPage.submitSuccess',
          'Fast geschafft: Prüfe jetzt dein E-Mail-Postfach und bestätige deine Anmeldung über den Link.',
        ),
        'success',
      );
    } catch {
      showFeedback(
        translate(
          'alphaPage.networkError',
          'Keine Verbindung zum Server. Bitte prüfe deine Internetverbindung und versuche es erneut.',
        ),
        'error',
      );
    } finally {
      setSubmitting(false);
    }
  });
})();