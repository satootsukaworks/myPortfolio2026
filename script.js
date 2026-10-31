// Portfolio interactions: intro reveal, scroll-in elements, and mobile navigation.
(() => {
  const loader = document.querySelector('.loader');
  const finishLoading = () => window.setTimeout(() => loader?.classList.add('done'), 900);

  if (document.readyState === 'complete') finishLoading();
  else window.addEventListener('load', finishLoading, { once: true });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.topbar nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');
    navigation?.classList.toggle('open', !isOpen);
  });
  navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'メニューを開く');
  }));

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Keep the work cards on a slow orbit; hover, keyboard focus, and the pause
  // button all give the visitor control over the motion.
  const stage = document.querySelector('.orbit-stage');
  const carousel = document.querySelector('.orbit-carousel');
  const cards = [...document.querySelectorAll('.orbit-card')];
  const status = document.querySelector('.orbit-status');
  const pauseButton = document.querySelector('.orbit-pause');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (stage && carousel && cards.length) {
    const spacing = (Math.PI * 2) / cards.length;
    let angle = Math.PI / 2;
    let previousTime = 0;
    let isVisible = true;
    let isHovered = false;
    let isFocused = false;
    let isManuallyPaused = prefersReducedMotion.matches;
    let frameId;

    const updateControls = () => {
      pauseButton?.setAttribute('aria-pressed', String(isManuallyPaused));
      pauseButton?.setAttribute('aria-label', isManuallyPaused ? '自動回転を再開' : '自動回転を一時停止');
      if (pauseButton) pauseButton.textContent = isManuallyPaused ? '▶' : 'Ⅱ';
    };

    const render = (time = 0) => {
      const width = stage.clientWidth;
      const radiusX = Math.min(width * (width < 600 ? 0.32 : 0.31), width < 600 ? 210 : 300);
      const radiusY = width < 600 ? 32 : 50;
      let frontIndex = 0;

      if (!isManuallyPaused && !isHovered && !isFocused && isVisible && !prefersReducedMotion.matches && previousTime) {
        angle += Math.min(time - previousTime, 40) * 0.00016;
      }
      previousTime = time;

      cards.forEach((card, index) => {
        const cardAngle = angle + index * spacing;
        const depth = (Math.sin(cardAngle) + 1) / 2;
        const x = Math.cos(cardAngle) * radiusX;
        const y = -Math.cos(cardAngle) * radiusY;
        const scale = 0.78 + depth * 0.22;
        const yaw = -Math.cos(cardAngle) * 13;
        card.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale}) rotateY(${yaw}deg)`;
        card.style.zIndex = String(Math.round(depth * 10));
        card.setAttribute('aria-hidden', depth < 0.12 ? 'true' : 'false');
        card.toggleAttribute('inert', depth < 0.12);
        card.style.pointerEvents = depth < 0.12 ? 'none' : '';
        card.classList.toggle('is-front', depth > 0.96);
        if (depth > (Math.sin(angle + frontIndex * spacing) + 1) / 2) frontIndex = index;
      });
      if (status) status.innerHTML = `${String(frontIndex + 1).padStart(2, '0')} <i>/</i> ${String(cards.length).padStart(2, '0')} <b>— AUTO ROTATE / HOVER TO PAUSE</b>`;
      frameId = window.requestAnimationFrame(render);
    };

    stage.addEventListener('mouseenter', () => { isHovered = true; });
    stage.addEventListener('mouseleave', () => { isHovered = false; });
    carousel.addEventListener('focusin', () => { isFocused = true; });
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) isFocused = false;
    });
    document.querySelector('.orbit-prev')?.addEventListener('click', () => { angle += spacing; });
    document.querySelector('.orbit-next')?.addEventListener('click', () => { angle -= spacing; });
    pauseButton?.addEventListener('click', () => {
      isManuallyPaused = !isManuallyPaused;
      updateControls();
    });
    prefersReducedMotion.addEventListener?.('change', (event) => {
      if (event.matches) isManuallyPaused = true;
      updateControls();
    });

    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) previousTime = 0;
      }, { threshold: 0.05 });
      visibilityObserver.observe(stage);
    }
    updateControls();
    frameId = window.requestAnimationFrame(render);
    window.addEventListener('pagehide', () => window.cancelAnimationFrame(frameId), { once: true });
  }
})();
