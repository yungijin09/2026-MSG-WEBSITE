const highlight = document.querySelector(".highlight");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      highlight.classList.add("active");
    }
  });
}, { threshold: 0.5 });

observer.observe(highlight);

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,      // ✅ loop 끄기
  spaceBetween: 200,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const activities = [
  {
    title: "IT SHOW",
    sub: "2학년이 되면 부원들과 함께  IT SHOW에 참여하게 됩니다!",
    desc: "지브리 등장인물로 알아보는 성격유형테스트 “그대들 어떤 캐릭터처럼 살 것인가” 를 제작했습니다.",
    top: "/image/activity/itshow01.jpg",
    images: [
      "/image/activity/itshow02.jpg",
      "/image/activity/itshow03.jpg",
      "/image/activity/itshow04.jpg",
    ]
  },
  {
    title: "STUDY",
    sub: "동아리 내에서 자체적으로 진행하는 전공 스터디",
    desc: "전공 스터디와 함께 1학년끼리 팀별 프로젝트를 진행합니다. ",
    top: "/image/activity/study01.jpg",
    images: [
      "/image/activity/study02.jpg",
      "/image/activity/study03.jpg",
      "/image/activity/study04.jpg",
    ]
  },
  {
    title: "SOCIALIZING",
    sub: "동아리 내에서 친목을 도모하는 활동을 합니다",
    desc: "회식과 교내 모임을 통해 선후배 간 친목을 다집니다",
    top: "/image/activity/social01.jpg",
    images: [
      "/image/activity/social02.jpg",
      "/image/activity/social03.jpg",
      "/image/activity/social04.jpg",
    ]
  }
];

let currentIndex = 0;

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
  currentIndex = (currentIndex + 1) % activities.length;
  updateActivity();
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