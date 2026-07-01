(() => {
  const roadmapItems = document.querySelectorAll('.roadmap__item');

  if (!roadmapItems.length) {
    return;
  }

  roadmapItems.forEach((item) => {
    const button = item.querySelector('.roadmap__button');
    const details = item.querySelector('.roadmap__details');

    if (!button || !details) {
      return;
    }

    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      const isExpanded = item.classList.contains('is-expanded');

      roadmapItems.forEach((otherItem) => {
        if (otherItem === item) {
          return;
        }

        otherItem.classList.remove('is-expanded');

        const otherButton = otherItem.querySelector('.roadmap__button');

        if (otherButton) {
          otherButton.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('is-expanded', !isExpanded);
      button.setAttribute('aria-expanded', String(!isExpanded));
    });
  });
})();