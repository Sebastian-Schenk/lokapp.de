(() => {
  const pollStorageKey = 'lokapp-active-poll-vote';

  const options = document.querySelectorAll('[data-poll-option]');
  const results = document.querySelector('[data-poll-results]');
  const confirmation = document.querySelector('[data-poll-confirmation]');

  if (!options.length || !results || !confirmation) {
    return;
  }

  const validOptionIds = new Set(
    Array.from(options, (option) => option.dataset.pollOption),
  );

  const getSavedVote = () => {
    try {
      return localStorage.getItem(pollStorageKey);
    } catch {
      return null;
    }
  };

  const saveVote = (optionId) => {
    try {
      localStorage.setItem(pollStorageKey, optionId);
    } catch {
      // Die Auswahl funktioniert visuell auch ohne lokale Speicherung.
    }
  };

  const revealConfirmation = () => {
    results.hidden = false;
    confirmation.hidden = false;
  };

  const selectOption = (optionId) => {
    options.forEach((option) => {
      const isSelected = option.dataset.pollOption === optionId;

      option.classList.toggle('is-selected', isSelected);
      option.setAttribute('aria-pressed', String(isSelected));
      option.disabled = true;
    });

    revealConfirmation();
  };

  options.forEach((option) => {
    option.setAttribute('aria-pressed', 'false');

    option.addEventListener('click', () => {
      if (getSavedVote()) {
        return;
      }

      const optionId = option.dataset.pollOption;

      if (!optionId) {
        return;
      }

      saveVote(optionId);
      selectOption(optionId);
    });
  });

  const savedVote = getSavedVote();

  if (savedVote && validOptionIds.has(savedVote)) {
    selectOption(savedVote);
  }
})();