(() => {
  const storageKey = 'lokapp-theme';
  const root = document.documentElement;
  const themeToggles = document.querySelectorAll('[data-theme-toggle]');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const getSystemTheme = () => (
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  const getStoredTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Theme funktioniert auch ohne Local Storage.
    }
  };

  const updateThemeColor = (theme) => {
    if (!themeColorMeta) {
      return;
    }

    themeColorMeta.setAttribute(
      'content',
      theme === 'dark' ? '#0F172A' : '#F8FAFC',
    );
  };

  const updateToggleLabels = (theme) => {
    themeToggles.forEach((toggle) => {
      const isDark = theme === 'dark';

      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute(
        'aria-label',
        isDark
          ? 'Light Mode aktivieren'
          : 'Dark Mode aktivieren',
      );
    });
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    updateThemeColor(theme);
    updateToggleLabels(theme);
  };

  const initialTheme = getStoredTheme() || root.dataset.theme || getSystemTheme();

  applyTheme(initialTheme);

  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const currentTheme = root.dataset.theme === 'dark'
        ? 'dark'
        : 'light';

      const nextTheme = currentTheme === 'dark'
        ? 'light'
        : 'dark';

      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  });
})();