// Portfolio interactions: intro reveal, scroll-in elements, and mobile navigation.
(() => {
  const translations = [
    ["TOP", "トップ"], ["WORKS", "制作物"], ["CONTACT", "お問い合わせ"],
    ["SATO OTSUKA", "SATO OTSUKA"], ["A little mystery.", "少しのミステリー。"],
    ["A lot of curiosity.", "たくさんの好奇心。"], ["View selected works", "制作物を見る"],
    ["A little about me", "プロフィール"], ["Built with logic.", "ロジックでつくる。"],
    ["people.", "人と共有する。"], ["Get in touch ↗", "お問い合わせ ↗"],
    ["Practical code.", "実用的なコード。"], ["Thoughtful outcomes.", "考え抜かれた成果。"],
    ["Selected works / the collection", "制作物 / コレクション"], ["03 records", "3つの記録"],
    ["Event website", "イベント用Webサイト制作"],
    ["An event website built with HTML, CSS, and JavaScript, with interactive page details.", "HTML・CSS・JavaScriptを用いてイベント用Webサイトを制作。動きのあるページを実装しました。"],
    ["Internal systems development", "社内システム開発・運用"],
    ["Developing and maintaining internal systems, with project details kept confidential.", "社内システムの開発・運用を担当。社外秘のため、公開可能な範囲で課題解決のプロセスを紹介します。"],
    ["Drinking log & wellness app", "お酒の記録・健康管理アプリ"],
    ["An iOS app in development for tracking drinks and health data, with AI-powered feedback.", "飲酒ログ・身体データの記録とAIリアクションを備えたiOSアプリを開発中。"],
    ["Explore all works", "すべての制作物を見る"], ["Professional experience", "実務経験"],
    ["Creative practice & teaching", "制作・指導経験"], ["In practice & in progress", "実務・学習中"],
    ["Backend & automation", "業務を支える開発"], ["Web & creative development", "見た目と体験をつくる"],
    ["Tools & learning", "学びを広げる技術"], ["Experience", "取り組み"],
    ["Systems engineer", "SE / 開発"], ["Learning coach", "指導"],
    ["Good things start", "いいことは始まる"], ["with a conversation.", "会話から。"],
    ["Start a conversation", "会話を始める"], ["Back to top ↑", "トップへ戻る ↑"],
    ["Internal tools & automation", "社内ツール・自動化"], ["Technical guidance", "技術サポート"],
    ["Websites & content", "Webサイト・コンテンツ"],
    ["Hello, curious mind", "好奇心を持つあなたへ"], ["Between code & records", "コードとレコードのあいだ"],
    ["Skills & experience", "スキルと経験"], ["Say hello", "こんにちは"],
    ["Three projects, each shaped by curiosity and practical work.", "好奇心と実践から生まれた3つのプロジェクト。"],
    ["A collection of things I've built.", "これまでにつくったもの。"],
    ["I'm SATO OTSUKA, a systems engineer building internal systems and event websites. As a learning coach at TUMO Gunma, I teach Blender and help students stay motivated. I enjoy making technical ideas clear and useful, and I'm working toward building across backend, iOS, and AWS.", "SATO OTSUKAです。社内システムやイベント用Webサイトをつくるシステムエンジニアです。TUMO GunmaではラーニングコーチとしてBlenderを教え、受講生のモチベーションを支えています。技術的なアイデアをわかりやすく役立つ形にすることを大切にし、バックエンド、iOS、AWSまで幅広く開発できるエンジニアを目指しています。"],
    ["Skills and experience across engineering, creative practice, and teaching.", "エンジニアリング、制作、指導にわたるスキルと経験。"],
    ["Developing and maintaining internal systems. Building a personal app while learning SwiftUI, Java (Spring Boot), and AWS.", "社内システムの開発・運用に従事。SwiftUI、Java（Spring Boot）、AWSを学びながら個人アプリを開発中です。"],
    ["Teaching creative technology such as Blender and supporting students' growth and motivation at TUMO Gunma.", "TUMO GunmaでBlenderなどの技術を指導し、受講生の成長とモチベーションを支援しています。"],
    ["Tell me what you're thinking. A clear next step starts with a note.", "考えていることを聞かせてください。まずはメッセージから次の一歩を始めましょう。"],
    ["A website, an internal tool, a repetitive task, or a technical idea you'd like to make clearer. Tell me what you're thinking.", "Webサイト、社内ツール、繰り返し作業、技術的なアイデアなど、気軽にご相談ください。"],
    ["A selection of work across web, systems, and creative technology.", "Web、システム、クリエイティブ技術に関する制作物を紹介します。"],
    ["Practical code. Thoughtful outcomes.", "実用的なコード。考え抜かれた成果。"],
    ["An iOS app in development for tracking drinks and health data, with AI-powered feedback.", "飲酒ログと健康データを記録し、AIによるフィードバックを備えた開発中のiOSアプリ。"],
    ["English (business)", "英語（ビジネス）"], ["French (conversational)", "フランス語（日常会話）"],
    ["Security", "セキュリティ"], ["Fundamental Information Technology Engineer", "基本情報技術者"],
    ["A collection of things I've built.", "これまでにつくったもの。"],
    ["Three projects, each shaped by curiosity and practical work.", "好奇心と実践から生まれた3つのプロジェクト。"],
    ["Interactive event pages · HTML / CSS / JavaScript", "動きのあるイベントページ · HTML / CSS / JavaScript"],
    ["Internal system development and operations · project details confidential", "社内システムの開発・運用 · 詳細非公開"],
    ["In development · SwiftUI / Spring Boot / AWS", "開発中 · SwiftUI / Spring Boot / AWS"],
    ["A website, an internal tool, a repetitive task, or a technical idea you'd like to make clearer. Tell me what you're thinking.", "Webサイト、社内ツール、繰り返し作業、技術的なアイデアなど、気軽にご相談ください。"],
    ["Website creation with PHP and WordPress. Clear content, sensible structure, and maintainable pages.", "PHPとWordPressによるWebサイト制作。明快なコンテンツ、わかりやすい構成、保守しやすいページをつくります。"],
    ["Spring Boot web applications and VBA workflows to support everyday business operations.", "日々の業務を支えるSpring BootのWebアプリケーションとVBAワークフロー。"],
    ["Patient explanations, practical learning support, and help making technical concepts approachable.", "丁寧な説明と実践的な学習支援で、技術的な概念をわかりやすく伝えます。"],
    ["Let's talk", "お話ししましょう"], ["Main navigation", "メインナビゲーション"],
    ["Open menu", "メニューを開く"], ["Close menu", "メニューを閉じる"],
    ["THE FULL TRACKLIST", "全作品リスト"], ["BACK TO TOP ↑", "トップへ戻る ↑"],
    ["Email me at sato.otsuka.works@gmail.com", "sato.otsuka.works@gmail.com にメールする"],
    ["A useful tool, a thoughtful website, or a question worth exploring.", "役立つツール、丁寧なWebサイト、考えてみたい質問など。"],
    ["Your next track / start here", "次のトラック / ここから始める"],
  ];
  const languageButtonLabel = (language) => language === "en" ? "日本語" : "English";
  const currentLanguage = () => localStorage.getItem("portfolio-language") || "en";
  const applyLanguage = (language) => {
    const pairs = language === "ja" ? translations : translations.map(([en, ja]) => [ja, en]);
    const lookup = new Map(pairs);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const key = node.nodeValue.trim();
      if (lookup.has(key)) node.nodeValue = node.nodeValue.replace(key, lookup.get(key));
    }
    document.documentElement.lang = language;
    document.querySelectorAll(".language-toggle").forEach((button) => {
      button.textContent = languageButtonLabel(language);
      button.setAttribute("aria-label", language === "en" ? "Switch language to Japanese" : "Switch language to English");
    });
    localStorage.setItem("portfolio-language", language);
  };
  document.querySelectorAll(".language-toggle").forEach((button) => button.addEventListener("click", () => applyLanguage(currentLanguage() === "en" ? "ja" : "en")));
  if (currentLanguage() !== "en") applyLanguage(currentLanguage());

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
      isOpen ? (document.documentElement.lang === "en" ? "Open menu" : "メニューを開く") : (document.documentElement.lang === "en" ? "Close menu" : "メニューを閉じる"),
    );
    navigation?.classList.toggle("open", !isOpen);
  });
  navigation?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", document.documentElement.lang === "en" ? "Open menu" : "メニューを開く");
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
