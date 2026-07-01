(() => {
  const navigation = document.querySelector('[data-section-navigation]');

  if (!navigation) {
    return;
  }

  const navigationItems = Array.from(
    navigation.querySelectorAll('[data-section-navigation-link]'),
  );

  const sections = navigationItems
    .map((item) => {
      const targetId = item.getAttribute('href');

      if (!targetId || !targetId.startsWith('#')) {
        return null;
      }

      const section = document.querySelector(targetId);

      if (!section) {
        return null;
      }

      return {
        item,
        section,
      };
    })
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const setActiveItem = (activeItem) => {
    sections.forEach(({ item }) => {
      item.setAttribute(
        'aria-current',
        String(item === activeItem),
      );
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => (
          second.intersectionRatio - first.intersectionRatio
        ))[0];

      if (!visibleEntry) {
        return;
      }

      const matchingItem = sections.find(
        ({ section }) => section === visibleEntry.target,
      )?.item;

      if (matchingItem) {
        setActiveItem(matchingItem);
      }
    },
    {
      rootMargin: '-20% 0px -68% 0px',
      threshold: [0.05, 0.2, 0.5],
    },
  );

  sections.forEach(({ section }) => {
    observer.observe(section);
  });
})();