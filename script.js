// Portfolio interactions: intro reveal, scroll-in elements, and mobile navigation.
(() => {
  const loader = document.querySelector(".loader");
  const finishLoading = () =>
    window.setTimeout(() => loader?.classList.add("done"), 900);

  if (document.readyState === "complete") finishLoading();
  else window.addEventListener("load", finishLoading, { once: true });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".topbar nav");
  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "メニューを開く" : "メニューを閉じる",
    );
    navigation?.classList.toggle("open", !isOpen);
  });
  navigation?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "メニューを開く");
    }),
  );

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // 3D project carousel with a synchronized description panel.
  const stage = document.querySelector(".work-carousel-stage");
  const carousel = document.querySelector(".work-carousel");
  const cards = [
    ...document.querySelectorAll(".work-carousel-stage .orbit-card"),
  ];
  const title = document.querySelector(".detail-title");
  const description = document.querySelector(".detail-description");
  const number = document.querySelector(".detail-number");
  const tags = document.querySelector(".detail-tags");
  const detailLink = document.querySelector(".detail-link");
  const counter = document.querySelector(".carousel-count");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (
    stage &&
    carousel &&
    cards.length &&
    title &&
    description &&
    tags &&
    detailLink
  ) {
    let currentIndex = 0;
    let hovering = false;
    let focusing = false;
    let isTurning = false;

    const showProject = (index) => {
      const card = cards[index];
      const workInfo = card.querySelector(".work-info");
      const heading = workInfo?.querySelector("h3");
      const summary = workInfo?.querySelector("p");
      const workTags = workInfo?.querySelectorAll(".tags span") ?? [];
      const link = card.querySelector(".work-visual");
      if (heading) title.textContent = heading.textContent.trim();
      if (summary) description.textContent = summary.textContent.trim();
      if (number) number.textContent = String(index + 1).padStart(2, "0");
      if (counter)
        counter.innerHTML = `${String(index + 1).padStart(2, "0")} <i>/</i> ${String(cards.length).padStart(2, "0")}`;
      tags.replaceChildren(
        ...[...workTags].map((tag) => {
          const chip = document.createElement("span");
          chip.textContent = tag.textContent;
          return chip;
        }),
      );
      if (link) detailLink.href = link.href;
    };

    const render = () => {
      cards.forEach((card, index) => {
        card.classList.remove("is-current", "is-incoming", "is-turning-forward");
        card.removeAttribute("style");
        const isCurrent = index === currentIndex;
        const isNext = index === (currentIndex + 1) % cards.length;
        card.classList.toggle("is-current", isCurrent);
        card.classList.toggle("is-incoming", isNext);
        card.setAttribute("aria-hidden", isCurrent || isNext ? "false" : "true");
        card.toggleAttribute("inert", !isCurrent && !isNext);
      });
      showProject(currentIndex);
    };

    const turnPage = (direction) => {
      if (isTurning) return;
      const currentCard = cards[currentIndex];
      const nextIndex = (currentIndex + direction + cards.length) % cards.length;
      const nextCard = cards[nextIndex];
      isTurning = true;
      cards.forEach((card) => {
        if (card !== currentCard && card !== nextCard) {
          card.classList.remove("is-incoming");
          card.setAttribute("aria-hidden", "true");
          card.setAttribute("inert", "");
        }
      });
      nextCard.classList.add("is-incoming");
      nextCard.setAttribute("aria-hidden", "false");
      nextCard.removeAttribute("inert");

      const finish = () => {
        currentCard.removeEventListener("transitionend", onTransitionEnd);
        currentIndex = nextIndex;
        isTurning = false;
        render();
      };
      const onTransitionEnd = (event) => {
        if (event.target === currentCard && event.propertyName === "transform") finish();
      };
      if (prefersReducedMotion.matches) { finish(); return; }
      currentCard.addEventListener("transitionend", onTransitionEnd);
      currentCard.classList.add("is-turning-forward");
      window.setTimeout(() => { if (isTurning) finish(); }, 1100);
    };

    stage.addEventListener("mouseenter", () => {
      hovering = true;
    });
    stage.addEventListener("mouseleave", () => {
      hovering = false;
    });
    carousel.addEventListener("focusin", () => {
      focusing = true;
    });
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) focusing = false;
    });
    document.querySelector(".carousel-prev")?.addEventListener("click", () => {
      turnPage(-1);
    });
    document.querySelector(".carousel-next")?.addEventListener("click", () => {
      turnPage(1);
    });
    render();
    const autoTurn = window.setInterval(() => {
      if (!hovering && !focusing && !prefersReducedMotion.matches) turnPage(1);
    }, 6500);
    window.addEventListener(
      "pagehide",
      () => window.clearInterval(autoTurn),
      { once: true },
    );
  }
})();
