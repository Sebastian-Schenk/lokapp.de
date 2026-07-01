(() => {
  const header = document.querySelector('[data-site-header]');
  const languageTrigger = document.querySelector('[data-language-trigger]');
  const languageMenu = document.querySelector('[data-language-menu]');

  const updateHeader = () => {
    if (!header) {
      return;
    }

    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();

  window.addEventListener('scroll', updateHeader, {
    passive: true,
  });

  if (languageTrigger && languageMenu) {
    const closeLanguageMenu = ({ returnFocus = false } = {}) => {
      if (languageMenu.hidden) {
        return;
      }

      languageMenu.hidden = true;
      languageTrigger.setAttribute('aria-expanded', 'false');

      if (returnFocus) {
        languageTrigger.focus();
      }
    };

    const openLanguageMenu = () => {
      languageMenu.hidden = false;
      languageTrigger.setAttribute('aria-expanded', 'true');
    };

    window.LokAppLanguageMenu = {
      close: closeLanguageMenu,
    };

    languageTrigger.addEventListener('click', () => {
      if (languageMenu.hidden) {
        openLanguageMenu();
        return;
      }

      closeLanguageMenu();
    });

    document.addEventListener('click', (event) => {
      const clickedInsideMenu = languageMenu.contains(event.target);
      const clickedTrigger = languageTrigger.contains(event.target);

      if (!clickedInsideMenu && !clickedTrigger) {
        closeLanguageMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !languageMenu.hidden) {
        closeLanguageMenu({
          returnFocus: true,
        });
      }
    });
  }

  const currentHash = window.location.hash;

  if (currentHash) {
    const target = document.querySelector(currentHash);

    if (target) {
      window.setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 80);
    }
  }
})();