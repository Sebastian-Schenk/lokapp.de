(() => {
  const toggle = document.querySelector('[data-mobile-menu-toggle]');
  const navigation = document.querySelector('[data-mobile-navigation]');

  if (!toggle || !navigation) {
    return;
  }

  const translate = (key, fallback) => (
    window.LokAppI18n?.t(key) || fallback
  );

  const isOpen = () => navigation.classList.contains('is-open');

  const updateToggleLabel = () => {
    toggle.setAttribute(
      'aria-label',
      isOpen()
        ? translate('mobileMenu.close', 'Menü schließen')
        : translate('mobileMenu.open', 'Menü öffnen'),
    );
  };

  const closeMenu = ({ returnFocus = false } = {}) => {
    if (!isOpen()) {
      return;
    }

    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');

    document.body.style.overflow = '';
    updateToggleLabel();

    if (returnFocus) {
      toggle.focus();
    }
  };

  const openMenu = () => {
    navigation.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');

    document.body.style.overflow = 'hidden';
    updateToggleLabel();
  };

  updateToggleLabel();

  toggle.addEventListener('click', () => {
    if (isOpen()) {
      closeMenu({
        returnFocus: true,
      });
      return;
    }

    openMenu();
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu({
        returnFocus: true,
      });
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });

  document.addEventListener('lokapp:languagechange', updateToggleLabel);
})();