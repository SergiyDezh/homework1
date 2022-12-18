(() => {
  const mobileMenu = документ.querySelector('.js-menu-container');
  const openMenuBtn = документ.querySelector('.js-open-menu');
  const closeMenuBtn = документ.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.перемикати('відкрито');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body); __
  };

  openMenuBtn.addEventListener('клацання', toggleMenu);
  closeMenuBtn.addEventListener('клацання', toggleMenu);

  // Закривати мобільне меню на широких екранах, якщо орієнтація пристрою змінюється
  вікно.matchMedia('(мін. ширина: 768 пікселів)').addEventListener('змінити', e => {
    if (!e.matches) return;
    mobileMenu.classList.видалити('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body); __
  });
})();