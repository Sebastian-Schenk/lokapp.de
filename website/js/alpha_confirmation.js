(() => {
  const state = new URLSearchParams(window.location.search).get('state');
  const language = (
    localStorage.getItem('lokapp-language')
    || document.documentElement.lang
    || 'de'
  ).slice(0, 2);

  const copy = {
    de: {
      confirmed: {
        eyebrow: 'LokApp Alpha',
        title: 'Deine Anmeldung ist bestätigt.',
        text: 'Danke. Deine E-Mail-Adresse wurde erfolgreich bestätigt. Sobald die nächste Testphase bereit ist, melden wir uns bei dir.',
        primary: 'Zur Startseite',
        primaryHref: '../../',
        secondary: 'Alpha-Seite öffnen',
        secondaryHref: '../alpha/',
      },
      invalid: {
        eyebrow: 'LokApp Alpha',
        title: 'Dieser Bestätigungslink ist nicht mehr gültig.',
        text: 'Der Link wurde bereits verwendet, ist abgelaufen oder konnte nicht zugeordnet werden. Du kannst dich jederzeit erneut für die Alpha anmelden.',
        primary: 'Zur Alpha-Anmeldung',
        primaryHref: '../alpha/',
        secondary: 'Zur Startseite',
        secondaryHref: '../../',
      },
    },

    en: {
      confirmed: {
        eyebrow: 'LokApp Alpha',
        title: 'Your registration is confirmed.',
        text: 'Thank you. Your email address has been confirmed successfully. We will contact you when the next testing phase is ready.',
        primary: 'Back to home',
        primaryHref: '../../',
        secondary: 'Open Alpha page',
        secondaryHref: '../alpha/',
      },
      invalid: {
        eyebrow: 'LokApp Alpha',
        title: 'This confirmation link is no longer valid.',
        text: 'The link has already been used, has expired, or could not be assigned. You can register for the Alpha again at any time.',
        primary: 'Register for Alpha',
        primaryHref: '../alpha/',
        secondary: 'Back to home',
        secondaryHref: '../../',
      },
    },

    nl: {
      confirmed: {
        eyebrow: 'LokApp Alpha',
        title: 'Je aanmelding is bevestigd.',
        text: 'Bedankt. Je e-mailadres is succesvol bevestigd. We nemen contact met je op zodra de volgende testfase klaar is.',
        primary: 'Naar de startpagina',
        primaryHref: '../../',
        secondary: 'Alpha-pagina openen',
        secondaryHref: '../alpha/',
      },
      invalid: {
        eyebrow: 'LokApp Alpha',
        title: 'Deze bevestigingslink is niet meer geldig.',
        text: 'De link is al gebruikt, verlopen of kon niet worden toegewezen. Je kunt je altijd opnieuw aanmelden voor de Alpha.',
        primary: 'Aanmelden voor Alpha',
        primaryHref: '../alpha/',
        secondary: 'Naar de startpagina',
        secondaryHref: '../../',
      },
    },

    es: {
      confirmed: {
        eyebrow: 'LokApp Alpha',
        title: 'Tu registro está confirmado.',
        text: 'Gracias. Tu dirección de correo electrónico se ha confirmado correctamente. Te avisaremos cuando esté lista la próxima fase de pruebas.',
        primary: 'Ir al inicio',
        primaryHref: '../../',
        secondary: 'Abrir página Alpha',
        secondaryHref: '../alpha/',
      },
      invalid: {
        eyebrow: 'LokApp Alpha',
        title: 'Este enlace de confirmación ya no es válido.',
        text: 'El enlace ya se ha utilizado, ha caducado o no se ha podido asignar. Puedes volver a registrarte para la Alpha en cualquier momento.',
        primary: 'Registrarse para la Alpha',
        primaryHref: '../alpha/',
        secondary: 'Ir al inicio',
        secondaryHref: '../../',
      },
    },
  };

  const applyCopy = () => {
    const activeLanguage = copy[language] ? language : 'de';
    const activeState = state === 'confirmed' ? 'confirmed' : 'invalid';
    const content = copy[activeLanguage][activeState];

    const eyebrow = document.querySelector('[data-confirmation-eyebrow]');
    const title = document.querySelector('[data-confirmation-title]');
    const text = document.querySelector('[data-confirmation-text]');
    const primary = document.querySelector('[data-confirmation-primary]');
    const secondary = document.querySelector('[data-confirmation-secondary]');

    if (eyebrow) {
      eyebrow.textContent = content.eyebrow;
    }

    if (title) {
      title.textContent = content.title;
    }

    if (text) {
      text.textContent = content.text;
    }

    if (primary) {
      primary.textContent = content.primary;
      primary.href = content.primaryHref;
    }

    if (secondary) {
      secondary.textContent = content.secondary;
      secondary.href = content.secondaryHref;
    }

    document.title = `${content.title} – LokApp`;
  };

  applyCopy();

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-language-option]')) {
      return;
    }

    window.setTimeout(applyCopy, 0);
  });
})();