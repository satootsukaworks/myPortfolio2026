// Portfolio interactions: intro reveal, scroll-in elements, and mobile navigation.
(() => {
  const translations = [
    ["TOP", "トップ"], ["WORKS", "制作物"], ["CONTACT", "お問い合わせ"],
    ["SATO OTSUKA", "SATO OTSUKA"], ["A little mystery.", "A little mystery."],
    ["Systems engineer & learning coach, exploring the intersection of technology and creativity.", "システムエンジニア兼学習コーチ。テクノロジーと創造性の交差点を探求している。"],
    ["A lot of curiosity.", "A lot of curiosity."], ["View works", "制作物を見る"],
    ["A little about me", "私について"], ["Built with logic.", "Built with logic."],
    ["people.", "people."],
    ["Practical code.", "Practical code."], ["Thoughtful outcomes.", "Thoughtful outcomes."],
    ["works / collection", "works / collection"], ["records", "records"],
    ["03 RECORDS", "03 作品"], ["WEB APPLICATIONS", "Webアプリケーション"], ["WEBSITES", "Webサイト"], ["IOS APPS", "iOSアプリ"],
    ["Website production", "Webサイト制作"],
    ["A website built with HTML, CSS, and JavaScript, with interactive page details.", "HTML・CSS・JavaScriptを用いたWebサイトを制作。動きのあるページを実装しました。"],
    ["Internal systems development", "社内システム開発・運用"],
    ["Developing and maintaining internal systems, with project details kept confidential.", "社内システムの開発・運用を担当。社外秘のため、公開可能な範囲で課題解決のプロセスを紹介します。"],
    ["Developing and maintaining internal systems. Project specifics remain confidential.", "社内システムの開発・保守を担当しています。案件の詳細は機密情報のため公開していません。"],
    ["Drinking log & wellness app", "お酒の記録・健康管理アプリ"],
    ["An iOS app in development for tracking drinks and health data, with AI-powered feedback.", "飲酒ログ・身体データの記録とAIリアクションを備えたiOSアプリを開発中。"],
    ["Explore all works", "すべての制作物を見る"], ["Professional experience", "実務経験"],
    ["Creative practice & teaching", "制作・指導経験"], ["In practice & in progress", "実務・学習中"],
    ["Backend & automation", "業務を支える開発"], ["Web & creative development", "見た目と体験をつくる"],
    ["Tools & learning", "Tools & learning"], ["Experience", "Experience"],
    ["Systems engineer", "Systems engineer"], ["Learning coach", "Learning coach"],
    ["Good things start", "Systems engineer"], ["with a conversation.", "with a conversation."],
    ["Start a conversation", "お話ししましょう"], ["Back to top ↑", "トップへ戻る ↑"],
    ["Internal tools & automation", "社内ツール・自動化"], ["Technical guidance", "技術サポート"],
    ["Websites & content", "Webサイト・コンテンツ"],
    ["Hello, curious mind", "Hello, curious mind"], ["Between code & records", "Between code & records"],
    ["Skills & experience", "スキルと経験"], ["Say hello", "Say hello"],
    ["Three projects, each shaped by curiosity and practical work.", "Three projects, each shaped by curiosity and practical work."],
    ["A collection of things I've built.", "これまでの制作物"],
    ["I'm just a girl working as a system engineer building internal systems, websites, and applications. As a learning coach at TUMO Gunma, I teach technical skills especially programming and help students stay motivated. I enjoy making technical ideas clear and useful, and I'm working toward building across backend, iOS, and AWS.", "社内システムやWebサイト、アプリケーションをつくる一人のシステムエンジニアです。TUMO Gunmaではラーニングコーチとしてプログラミングを始めとするITスキルを教え、受講生のモチベーションを支えています。技術的なアイデアをわかりやすく役立つ形にすることを大切にし、バックエンド、iOS、AWSまで幅広く開発できるエンジニアを目指しています。"],
    ["Skills and experience across engineering, creative practice, and teaching.", "エンジニアリング、制作、指導にわたるスキルと経験。"],
    ["Developing and maintaining internal systems. Building a personal app while learning SwiftUI, Java (Spring Boot), and AWS.", "社内システムの開発・運用に従事。SwiftUI、Java（Spring Boot）、AWSを学びながら個人アプリを開発中です。"],
    ["Teaching creative technology such as Blender and supporting students' growth and motivation at TUMO Gunma.", "TUMO GunmaでBlenderなどの技術を指導し、受講生の成長とモチベーションを支援しています。"],
    ["Tell me what you're thinking. A clear next step starts with a note.", "Tell me what you're thinking. A clear next step starts with a note."],
    ["A website, an internal tool, a repetitive task, or a technical idea you'd like to make clearer. Tell me what you're thinking.", "Webサイト、社内ツール、繰り返し作業、技術的なアイデアなど、気軽にご相談ください。"],
    ["A selection of work across web, systems, and creative technology.", "Web、システム、クリエイティブ技術に関する制作物を紹介します。"],
    ["Practical code. Thoughtful outcomes.", "実用的なコード。考え抜かれた成果。"],
    ["An iOS app in development for tracking drinks and health data, with AI-powered feedback.", "飲酒ログと健康データを記録し、AIによるフィードバックを備えた開発中のiOSアプリ。"],
    ["English (business)", "英語（ビジネス）"], ["French (conversational)", "フランス語（日常会話）"],
    ["Security", "セキュリティ"], ["Fundamental Information Technology Engineer", "基本情報技術者"],
    ["A collection of things I've built.", "これまでにつくったもの。"],
    ["Three projects, each shaped by curiosity and practical work.", "Three projects, each shaped by curiosity and practical work."],
    ["Interactive website pages · HTML / CSS / JavaScript", "動きのあるWebサイト · HTML / CSS / JavaScript"],
    ["Internal system development and operations", "社内システムの開発・運用"],
    ["In development · SwiftUI / Spring Boot / AWS", "開発中 · SwiftUI / Spring Boot / AWS"],
    ["A website, an internal tool, a repetitive task, or a technical idea you'd like to make clearer. Tell me what you're thinking.", "Webサイト、社内ツール、繰り返し作業、技術的なアイデアなど、気軽にご相談ください。"],
    ["Website creation with PHP and WordPress. Clear content, sensible structure, and maintainable pages.", "PHPとWordPressによるWebサイト制作。明快なコンテンツ、わかりやすい構成、保守しやすいページをつくります。"],
    ["Spring Boot web applications and VBA workflows to support everyday business operations.", "日々の業務を支えるSpring BootのWebアプリケーションとVBAワークフロー。"],
    ["Patient explanations, practical learning support, and help making technical concepts approachable.", "丁寧な説明と実践的な学習支援で、技術的な概念をわかりやすく伝えます。"],
    ["Let's talk", "Let's talk"], ["Main navigation", "メインナビゲーション"],
    ["Open menu", "メニューを開く"], ["Close menu", "メニューを閉じる"],
    ["THE FULL TRACKLIST", "THE FULL TRACKLIST"], ["BACK TO TOP ↑", "トップへ戻る ↑"],
    ["Email me at sato.otsuka.works@gmail.com", "sato.otsuka.works@gmail.com にメールする"],
    ["A useful tool, a thoughtful website, or a question.", "役立つツール、丁寧なWebサイト、質問など。"],
    ["A website with a little more movement.", "動きのあるWebサイト。"],
    ["I built a website with HTML, CSS, and JavaScript, bringing motion and interaction into the page while keeping the information clear.", "HTML・CSS・JavaScriptでWebサイトを制作。情報をわかりやすく保ちながら、動きとインタラクションを加えました。"],
    ["Interactive page details and clear website content", "明快なWebコンテンツとインタラクション"],
    ["Practical code shaped around the needs of the website", "Webサイトの要件に合わせた実用的なコード"],
    ["Tell me a little", "あなたのアイデアを"], ["about your idea.", "聞かせてください。"],
    ["You don't need a perfect brief. A little context is a good place to begin.", "完璧な説明でなくて大丈夫です。まずは背景を少し教えてください。"],
    ["Leave a note", "メッセージを送る"], ["Name *", "お名前 *"], ["Email *", "メールアドレス *"], ["Message *", "メッセージ *"],
    ["Compose email", "メールを作成する"],
    ["Your mail app will open with your message addressed to Sato Otsuka.", "メールアプリが開き、Sato Otsuka宛てのメッセージが作成されます。"],
    ["THE BUILD", "制作技術"], ["THE FOCUS", "重視した点"], ["THE APPROACH", "アプローチ"],
    ["SYSTEMS ENGINEERING", "システム開発"], ["WEBSITES & AUTOMATION", "Webサイト・自動化"],
    ["LEARNING & COMMUNICATION", "学びとコミュニケーション"],
    ["02 / THE LINER NOTES", "02 / ライナーノート"],
    ["03 / ALWAYS IN ROTATION", "03 / いつも更新中"],
    ["Built with logic.", "Built with logic."],
    ["Shared with people.", "Shared with people."],
    ["I started as a systems engineer, building internal systems, creating websites and working with Git in a professional setting.", "システムエンジニアとして、社内システムやWebサイトをつくり、仕事でGitを使ってきました。"],
    ["Alongside engineering, I’m a Learning Coach at TUMO Gunma. I help students work through technical ideas and find the motivation to keep creating.", "エンジニアの仕事と並行して、TUMO Gunmaでラーニングコーチをしています。技術的なアイデアを一緒に考え、受講生が創作を続ける力を支えています。"],
    ["Make the complex clear", "複雑なことをわかりやすく"],
    ["Explaining technical concepts in a way people can actually use.", "技術的な概念を、実際に役立てられる形で伝えます。"],
    ["Connect code to everyday work", "コードを日々の仕事につなげる"],
    ["Spring Boot web apps, internal tools and VBA business automation.", "Spring BootのWebアプリ、社内ツール、VBAによる業務自動化。"],
    ["Support the next step", "次の一歩を支える"],
    ["Technical guidance with patience, encouragement and a learning mindset.", "学ぶ姿勢を大切に、根気強く励ましながら技術面をサポートします。"],
    ["The current set", "The current set"], ["The next track", "The next track"],
    ["OFF THE CLOCK", "OFF THE CLOCK"],
    ["Good records.", "Good records."], ["Fresh perspectives.", "Fresh perspectives."],
    ["Western music, coffee and the idea of working from somewhere new. English & French along for the journey.", "洋楽とコーヒー、世界中の新しい場所で働くことが夢。"],
    ["Java / Spring Boot / Thymeleaf", "Java / Spring Boot / Thymeleaf"],
    ["PHP / WordPress / VBA / Git", "PHP / WordPress / VBA / Git"],
    ["PROFESSIONAL EXPERIENCE", "実務経験"],
    ["CREATIVE PRACTICE / 3D MODELING", "制作 / 3Dモデリング"],
    ["Studying for the Fundamental Information Technology Engineer Examination.", "各種資格取得に向けて勉強中。"],
    ["Longer-term direction: full-stack freelance work, AWS & security, deeper Java backend skills and native iOS development.", "今後はフルスタックでの仕事、AWS・セキュリティ、Javaバックエンドの専門性、iOSネイティブ開発を目指しています。"],
    ["LEARNING & FUTURE DIRECTION", "学びと今後の方向性"],
    ["01 / ON THE TURNTABLE", "01 / ON THE TURNTABLE"],
    ["Practical code. Thoughtful outcomes.", "Practical code. Thoughtful outcomes."],
    ["One practical, people-first approach.", "実用性と人を大切にする姿勢。"],
    ["NEXT TRACK / LET'S TALK", "NEXT TRACK / LET'S TALK"],
    ["Something in mind?", "Something in mind?"],
    ["A useful tool, a thoughtful website, or a question.", "役立つツール、丁寧なWebサイト、質問など。"],
  ];
  const languageButtonLabel = (language) => language === "en" ? "日本語" : "English";
  const currentLanguage = () => localStorage.getItem("portfolio-language") || "en";
  const applyLanguage = (language) => {
    const pairs = language === "ja" ? translations : translations.map(([en, ja]) => [ja, en]);
    const lookup = new Map(pairs);
    const attributePairs = [
      ["Your name", "お名前"],
      ["Your email address", "メールアドレス"],
      ["I'm thinking about…", "相談したい内容"],
    ];
    const attributeLookup = new Map(language === "ja" ? attributePairs : attributePairs.map(([en, ja]) => [ja, en]));
    document.querySelectorAll("[placeholder]").forEach((element) => {
      const placeholder = element.getAttribute("placeholder");
      if (attributeLookup.has(placeholder)) element.setAttribute("placeholder", attributeLookup.get(placeholder));
    });
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
    document.dispatchEvent(new Event("portfolio:languagechange"));
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

  const collectionStage = document.querySelector(".collection-stage");
  const collectionItems = [...document.querySelectorAll(".collection-item")];
  const collectionDetail = document.querySelector(".track-detail");
  if (collectionStage && collectionItems.length && collectionDetail) {
    const projects = [
      {
        code: "STW—001",
        type: ["01 / WEB PROJECT", "01 / Webサイト制作"],
        title: ["A website with a little more movement.", "動きのあるWebサイト。"],
        description: [
          "A website built with HTML, CSS and JavaScript, with interactive details that make the experience feel clear and engaging.",
          "HTML・CSS・JavaScriptで、情報が伝わりやすく、動きも楽しめるWebサイトを制作しました。",
        ],
        build: ["HTML, CSS, and JavaScript", "HTML・CSS・JavaScript"],
        focus: ["Interactive page details and clear website content", "わかりやすい情報設計とページ上のインタラクション"],
        approach: ["Practical code shaped around the needs of the website", "Webサイトの目的に合わせた実用的な実装"],
        cardTitle: ["Website production", "Webサイト制作"],
        coverTitle: ["Stories that\nmove online.", "Webで、伝わる\n体験を。"],
      },
      {
        code: "STW—002",
        type: ["02 / WEB APPLICATION", "02 / Webアプリケーション"],
        title: ["An everyday workflow, made easier to follow.", "日々の業務の流れを、もっとわかりやすく。"],
        description: [
          "A sample request-management workflow for submitting requests, reviewing details and following their status.",
          "依頼の登録、内容の確認、進捗の把握までをひとつにつなぐ、リクエスト管理システムのサンプルです。",
        ],
        build: ["Java, Spring Boot, and Thymeleaf", "Java・Spring Boot・Thymeleaf"],
        focus: ["Readable screens, straightforward validation and maintainable application logic", "読みやすい画面、わかりやすい入力確認、保守しやすいアプリケーション設計"],
        approach: ["A practical internal tool, with confidential project details kept private", "機密情報を守りながら、実務に役立つ社内ツールとして設計"],
        cardTitle: ["Internal systems development", "社内システム開発"],
        coverTitle: ["Less friction.\nMore flow.", "手間を減らして、\n流れをつくる。"],
      },
      {
        code: "STW—003",
        type: ["03 / IOS APP", "03 / iOSアプリ"],
        title: ["A little more care in every log.", "記録から、日々の健康を考える。"],
        description: [
          "An iOS app in development for tracking drinks and health data, with thoughtful feedback to support healthier habits.",
          "飲酒や健康データを記録し、日々の習慣を見直すきっかけを届けるiOSアプリを開発しています。",
        ],
        build: ["SwiftUI, Spring Boot, and AWS", "SwiftUI・Spring Boot・AWS"],
        focus: ["Simple daily logging and useful personal insights", "続けやすい記録と、振り返りに役立つ情報"],
        approach: ["A personal project developed alongside learning native iOS and cloud services", "iOSアプリとクラウド技術を学びながら進める個人開発"],
        cardTitle: ["Drinking log & wellness app", "お酒の記録・健康管理アプリ"],
        coverTitle: ["Drink well.\nFeel better.", "記録から、\n健やかな毎日へ。"],
      },
    ];
    let selectedIndex = 0;
    const field = (selector) => collectionDetail.querySelector(selector);
    const renderCollection = () => {
      const japanese = currentLanguage() === "ja";
      const languageIndex = japanese ? 1 : 0;
      const project = projects[selectedIndex];
      collectionItems.forEach((item, index) => {
        const offset = (index - selectedIndex + collectionItems.length) % collectionItems.length;
        item.classList.remove("is-current", "is-prev", "is-next");
        item.classList.add(offset === 0 ? "is-current" : offset === 1 ? "is-next" : "is-prev");
        item.setAttribute("aria-pressed", String(index === selectedIndex));
        item.setAttribute("aria-label", `${japanese ? "選択" : "Select"}: ${projects[index].cardTitle[languageIndex]}`);
        const cardTitle = item.querySelector(".collection-card strong");
        if (cardTitle) cardTitle.textContent = projects[index].coverTitle[languageIndex];
      });
      field(".detail-eyebrow").textContent = `${project.code} / ${project.type[languageIndex]}`;
      field(".track-title").textContent = project.title[languageIndex];
      field(".track-description").textContent = project.description[languageIndex];
      field(".track-build").textContent = project.build[languageIndex];
      field(".track-focus").textContent = project.focus[languageIndex];
      field(".track-approach").textContent = project.approach[languageIndex];
      document.querySelector(".collection-selected").textContent = `${japanese ? "選択中" : "NOW SELECTED"} / ${project.code}`;
      document.querySelector(".collection-count").textContent = `${String(selectedIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
      document.querySelector(".collection-prev")?.setAttribute("aria-label", japanese ? "前の作品" : "Previous record");
      document.querySelector(".collection-next")?.setAttribute("aria-label", japanese ? "次の作品" : "Next record");
    };
    const selectCollection = (index) => {
      selectedIndex = (index + projects.length) % projects.length;
      renderCollection();
    };
    collectionItems.forEach((item, index) => item.addEventListener("click", () => selectCollection(index)));
    document.querySelector(".collection-prev")?.addEventListener("click", () => selectCollection(selectedIndex - 1));
    document.querySelector(".collection-next")?.addEventListener("click", () => selectCollection(selectedIndex + 1));
    collectionStage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); selectCollection(selectedIndex - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); selectCollection(selectedIndex + 1); }
    });
    document.addEventListener("portfolio:languagechange", renderCollection);
    renderCollection();
  }
})();
