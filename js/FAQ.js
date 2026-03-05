function toggle(arrowId, answerId) {
    let arrow = document.getElementById(arrowId);
    let answer = document.getElementById(answerId);
    if (answer.style.maxHeight == "0px") {
        arrow.style.transform = "scaleY(-1)"
        answer.style.marginBottom = "24px";
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
    else {
        arrow.style.transform = "scaleY(1)"
        answer.style.marginBottom = "0px";
        answer.style.maxHeight = "0px";
    }
}

// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function() {
  console.log("FAQ.js loaded");

  // FAQ 헤더 메뉴 이벤트 리스너들
  const navProject = document.getElementById("nav-project");
  const navActivity = document.getElementById("nav-activity");
  const navMember = document.getElementById("nav-member");

  // FAQ 헤더 프로젝트 클릭 → index.html로 이동하며 오프셋 저장
  if (navProject) {
    console.log("nav-project found");
    navProject.addEventListener("click", (e) => {
      console.log("Header Project clicked");
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", "section-project");
      sessionStorage.setItem("scrollOffset", "150");
      window.location.href = "./index.html#section-project";
    });
  }

  // FAQ 헤더 활동 클릭 → index.html로 이동하며 오프셋 저장
  if (navActivity) {
    console.log("nav-activity found");
    navActivity.addEventListener("click", (e) => {
      console.log("Header Activity clicked");
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", "section-activity");
      sessionStorage.setItem("scrollOffset", "50");
      window.location.href = "./index.html#section-activity";
    });
  }

  // FAQ 헤더 부원 클릭 → index.html로 이동하며 오프셋 저장
  if (navMember) {
    console.log("nav-member found");
    navMember.addEventListener("click", (e) => {
      console.log("Header Member clicked");
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", "section-member");
      sessionStorage.setItem("scrollOffset", "150");
      window.location.href = "./index.html#section-member";
    });
  }

  // FAQ 푸터 링크 클릭 → 상단으로 스크롤
  const faqFooterTop = document.getElementById("faq-footer-top");
  if (faqFooterTop) {
    console.log("faq-footer-top found");
    faqFooterTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // FAQ 푸터 프로젝트 클릭 → index.html로 이동하며 오프셋 저장
  const faqFooterProject = document.getElementById("faq-footer-project");
  if (faqFooterProject) {
    console.log("faq-footer-project found");
    faqFooterProject.addEventListener("click", (e) => {
      console.log("Footer Project clicked");
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", "section-project");
      sessionStorage.setItem("scrollOffset", "-150");
      window.location.href = "./index.html#section-project";
    });
  }

  // FAQ 푸터 활동 클릭 → index.html로 이동하며 오프셋 저장
  const faqFooterActivity = document.getElementById("faq-footer-activity");
  if (faqFooterActivity) {
    console.log("faq-footer-activity found");
    faqFooterActivity.addEventListener("click", (e) => {
      console.log("Footer Activity clicked");
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", "section-activity");
      sessionStorage.setItem("scrollOffset", "50");
      window.location.href = "./index.html#section-activity";
    });
  }

  // FAQ 푸터 부원 클릭 → index.html로 이동하며 오프셋 저장
  const faqFooterMember = document.getElementById("faq-footer-member");
  if (faqFooterMember) {
    console.log("faq-footer-member found");
    faqFooterMember.addEventListener("click", (e) => {
      console.log("Footer Member clicked");
      e.preventDefault();
      sessionStorage.setItem("scrollTarget", "section-member");
      sessionStorage.setItem("scrollOffset", "-150");
      window.location.href = "./index.html#section-member";
    });
  }
});