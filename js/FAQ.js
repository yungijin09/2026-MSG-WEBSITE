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

// FAQ 푸터 링크 클릭 → 상단으로 스크롤
const faqFooterTop = document.getElementById("faq-footer-top");
if (faqFooterTop) {
  faqFooterTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// FAQ 푸터 프로젝트 클릭 → index.html로 이동하며 오프셋 저장
const faqFooterProject = document.querySelector('a[href="./index.html#section-project"]');
if (faqFooterProject) {
  faqFooterProject.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("scrollTarget", "section-project");
    sessionStorage.setItem("scrollOffset", "-150");
    window.location.href = "./index.html#section-project";
  });
}

// FAQ 푸터 활동 클릭 → index.html로 이동하며 오프셋 저장
const faqFooterActivity = document.querySelector('a[href="./index.html#section-activity"]');
if (faqFooterActivity) {
  faqFooterActivity.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("scrollTarget", "section-activity");
    sessionStorage.setItem("scrollOffset", "50");
    window.location.href = "./index.html#section-activity";
  });
}

// FAQ 푸터 부원 클릭 → index.html로 이동하며 오프셋 저장
const faqFooterMember = document.querySelector('a[href="./index.html#section-member"]');
if (faqFooterMember) {
  faqFooterMember.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("scrollTarget", "section-member");
    sessionStorage.setItem("scrollOffset", "-150");
    window.location.href = "./index.html#section-member";
  });
}