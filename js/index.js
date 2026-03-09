const highlight = document.querySelector(".highlight");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      highlight.classList.add("active");
    }
  });
}, { threshold: 0.5 });

observer.observe(highlight);

// content-desc 멘트 스크롤 시 페이드인 애니메이션
const contentDesc = document.getElementById("content-desc");
if (contentDesc) {
  const descObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contentDesc.classList.add("animate-in");
      }
    });
  }, { threshold: 0.2 });
  descObserver.observe(contentDesc);
}

// 활동 섹션 스크롤 시 자연스럽게 등장
const activitySection = document.getElementById("section-activity");
if (activitySection) {
  const activityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activitySection.classList.add("animate-in");
      }
    });
  }, { threshold: 0.15 });
  activityObserver.observe(activitySection);
}

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 200,
  watchSlidesProgress: true,
  initialSlide: 0,
  speed: 700,
  resistanceRatio: 0.6,
  longSwipesRatio: 0.35,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const activities = [
  {
    title: "COOPERATION",
    sub: "동아리 내에서 다양한 경험을 할 수 있는 협업 활동",
    desc: "다양한 공모전과 토이 프로젝트를 진행합니다.",
    top: "/image/activity/cooperation01.jpg",
    images: [
      "/image/activity/cooperation02.png",
      "/image/activity/cooperation03.png",
      "/image/activity/cooperation04.png",
    ]
  },
  {
    title: "STUDY",
    sub: "동아리 내에서 자체적으로 진행하는 전공 스터디",
    desc: "전공 스터디와 함께 1학년은 코딩테스트를 진행합니다. ",
    top: "/image/activity/study01.jpg",
    images: [
      "/image/activity/study02.jpg",
      "/image/activity/study03.jpg",
      "/image/activity/study04.jpg",
    ]
  },
  {
    title: "SOCIALIZING",
    sub: "동아리 내에서 선후배 간의 친목 활동",
    desc: "회식과 교내 모임을 통해 유대감을 쌓을 수 있습니다.",
    top: "/image/activity/social01.jpg",
    images: [
      "/image/activity/social02.jpg",
      "/image/activity/social03.jpg",
      "/image/activity/social04.png",
    ]
  }
];

let currentIndex = 0;

const activityWrap = document.querySelector(".activity_wrap");

function updateActivity() {
  const data = activities[currentIndex];

  document.querySelector(".activity_title").textContent = data.title;
  document.querySelector(".activity_sub").textContent = data.sub;
  document.querySelector(".activity_desc").textContent = data.desc;
  document.querySelector(".activity_top img").src = data.top;

  const imgs = document.querySelectorAll(".activity_bottom img");
  imgs.forEach((img, i) => {
    img.src = data.images[i];
  });
}

document.querySelector(".activity_next").addEventListener("click", () => {
  if (activityWrap.classList.contains("activity-changing")) return;

  activityWrap.classList.add("activity-changing");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % activities.length;
    updateActivity();
    activityWrap.classList.remove("activity-changing");
  }, 350);
});

const awards = [
  { title: "학생 스마트기기 활용 학습 사례 공모전 금상", date: "2025.10.31", source: "서울특별시교육청" },
  { title: "학생 마음건강 컨텐츠 공모전 대상", date: "2025.10.22", source: "SK 플래닛(주)" },
  { title: "MOS 월드 챔피언쉽 장려상", date: "2025.07.21", source: "YBM" },
  { title: "창의 아이디어 경진대회 은상", date: "2025.07.02", source: "미림마이스터고" },
  { title: "미림 해커톤 우수상", date: "2024.10.19", source: "미림마이스터고" },
  { title: "뉴미디어디자인 어워드", date: "2024.10.04", source: "미림마이스터고" },
  { title: "창의 아이디어 경진대회 금상", date: "2024.07.08", source: "미림마이스터고" },
  { title: "창의 아이디어 경진대회 은상", date: "2024.07.08", source: "미림마이스터고" },
  { title: "APP JAM 장려상", date: "2024.06.23", source: "SK 플래닛(주)" },
  { title: "APP JAM 우수상", date: "2024.04.21", source: "SK 플래닛(주)" }
];

function populateAwards() {
  const tableBody = document.getElementById("awardTable");
  awards.forEach(award => {
      let title = award.title;

      const highlightColor = "#B3A0FF";
      const highlightKeywords = ["장려상","대상","2위, 3위","우수상", "가작상", "금상", "은상", "동상"];
      
      highlightKeywords.forEach(keyword => {
          if (title.includes(keyword)) {
              title = title.replace(
                  keyword,
                  `<span style="color: ${highlightColor}; font-weight: bold;">${keyword}</span>`
              );
          }
      });

      let row = document.createElement("tr");
      row.innerHTML = `<td>${title}</td><td>${award.date}</td><td>${award.source}</td>`;
      tableBody.appendChild(row);
  });
}

// 실행
populateAwards();
updateActivity();

document.querySelectorAll(".member-track").forEach((track) => {
  if (track.dataset.duped === "1") return;

  // 1) 원본 아이템들만 가져오기
  const items = Array.from(track.children);

  // 2) 원본 길이(px) 측정 (복제 전)
  const originalWidth = track.scrollWidth;

  // 3) 아이템만 복제해서 뒤에 붙이기 (A A 만들기)
  items.forEach((item) => track.appendChild(item.cloneNode(true)));

  // 4) 이동해야 할 정확한 거리(px)를 CSS 변수로 저장
  track.style.setProperty("--loopWidth", `${originalWidth}px`);

  track.dataset.duped = "1";
});

// ─── 배너 웨이브 이미지 둥실둥실 애니메이션 ───────────────────────────
// 각 이미지마다 다른 속도·진폭·위상으로 위아래로 부드럽게 움직임
// 배너 웨이브 이미지 둥실둥실 애니메이션
(function initBannerFloat() {
  const banners = [
    { el: document.querySelector(".banner-02"), amplitude: 7, period: 3000, phase: 0 },
    { el: document.querySelector(".banner-03"), amplitude: 5, period: 3000, phase: Math.PI * 0.6 },
    { el: document.querySelector(".banner-04"), amplitude: 9, period: 3000, phase: Math.PI * 1.3 },
  ];

  const targets = banners.filter(b => b.el !== null);

  // 요소를 못 찾으면 콘솔에 알려줌
  if (targets.length === 0) {
    console.warn("배너 이미지 요소를 찾지 못했습니다. 클래스명을 확인하세요.");
    return;
  }

  function tick(timestamp) {
    targets.forEach(b => {
      const y = b.amplitude * Math.sin((2 * Math.PI * timestamp) / b.period + b.phase);
      b.el.style.transform = `translateY(${y}px)`;
    });
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();

// 로고 데코 이미지 둥실둥실 애니메이션 + 호버 시 크기 확대
(function initLogoDecoFloat() {
  const decos = [
    { el: document.querySelector(".about-item--make .about-logo img"),   amplitude: 12, period: 3200, phase: 0, offsetX: -165},
    { el: document.querySelector(".about-item--share .about-logo img"),  amplitude: 9,  period: 3800, phase: Math.PI * 0.7, offsetX: 200},
    { el: document.querySelector(".about-item--gather .about-logo img"), amplitude: 11, period: 3500, phase: Math.PI * 1.4, offsetX: -160 },
  ];

  const targets = decos.filter(d => d.el !== null);

  targets.forEach(d => {
    // scale 전용 wrapper 생성 — float과 scale 레이어 분리
    const wrapper = document.createElement("div");
    wrapper.style.cssText = `
      display: inline-block;
      transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
      will-change: transform;
    `;

    // img를 wrapper 안으로 이동
    d.el.parentNode.insertBefore(wrapper, d.el);
    wrapper.appendChild(d.el);

    d.wrapper = wrapper;
    d.hovered = false;

    wrapper.addEventListener("mouseenter", () => {
      d.hovered = true;
      wrapper.style.transform = "scale(1.12)";
    });
    wrapper.addEventListener("mouseleave", () => {
      d.hovered = false;
      wrapper.style.transform = "scale(1)";
    });
  });

  // float 애니메이션은 img에 직접 (scale wrapper와 독립)
  function tick(timestamp) {
    targets.forEach(d => {
      const y = d.amplitude * Math.sin((2 * Math.PI * timestamp) / d.period + d.phase);
      d.el.style.transform = `translateX(${d.offsetX}px) translateY(${y}px)`;
    });
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();

// 헤더 로고 클릭 → 첫 화면으로 스크롤
const headerLogoLink = document.getElementById("header-logo-link");
if (headerLogoLink) {
  headerLogoLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// MSG 소개 클릭 → 최상단으로 스크롤
const navLogoText = document.getElementById("nav-logo-text");
if (navLogoText) {
  navLogoText.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 프로젝트 클릭 → 섹션으로 스크롤 (추가 오프셋)
const navProject = document.getElementById("nav-project");
if (navProject) {
  navProject.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.getElementById("section-project");
    if (section) {
      // 프로젝트 제목이 화면 중앙 위로 살짝 더 올라오도록 오프셋을 크게 설정
      const offsetY = section.offsetTop - -150;
      window.scrollTo({ top: offsetY, behavior: "smooth" });
    }
  });
}

// 부원 클릭 → 섹션으로 스크롤 (추가 오프셋)
const navMember = document.getElementById("nav-member");
if (navMember) {
  navMember.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.getElementById("section-member");
    if (section) {
      const offsetY = section.offsetTop - -150;
      window.scrollTo({ top: offsetY, behavior: "smooth" });
    }
  });
}
// 푸터 MSG 소개 클릭 → 최상단으로 스크롤
const footerLogoText = document.getElementById("footer-logo-text");
if (footerLogoText) {
  footerLogoText.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 푸터 프로젝트 클릭 → 섹션으로 스크롤 (추가 오프셋)
const footerProject = document.getElementById("footer-project");
if (footerProject) {
  footerProject.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.getElementById("section-project");
    if (section) {
      const offsetY = section.offsetTop - -150;
      window.scrollTo({ top: offsetY, behavior: "smooth" });
    }
  });
}

// 푸터 활동 클릭 → 섹션으로 스크롤 (추가 오프셋)
const footerActivity = document.getElementById("footer-activity");
if (footerActivity) {
  footerActivity.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.getElementById("section-activity");
    if (section) {
      const offsetY = section.offsetTop - 50;
      window.scrollTo({ top: offsetY, behavior: "smooth" });
    }
  });
}

// 푸터 부원 클릭 → 섹션으로 스크롤 (추가 오프셋)
const footerMember = document.getElementById("footer-member");
if (footerMember) {
  footerMember.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.getElementById("section-member");
    if (section) {
      const offsetY = section.offsetTop - -150;
      window.scrollTo({ top: offsetY, behavior: "smooth" });
    }
  });
}

// FAQ에서 넘어온 경우 오프셋이 적용된 스크롤 처리
window.addEventListener("load", () => {
  const scrollTarget = sessionStorage.getItem("scrollTarget");
  const scrollOffset = sessionStorage.getItem("scrollOffset");
  
  if (scrollTarget && scrollOffset) {
    const section = document.getElementById(scrollTarget);
    if (section) {
      setTimeout(() => {
        const offsetY = section.offsetTop - parseInt(scrollOffset);
        window.scrollTo({ top: offsetY, behavior: "smooth" });
      }, 100);
    }
    // 사용 후 sessionStorage 초기화
    sessionStorage.removeItem("scrollTarget");
    sessionStorage.removeItem("scrollOffset");
  }
});