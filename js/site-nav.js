// Common site navigation helpers
function navigateToPage() {
  window.location.href = './index.html';
}

function goToPage() {
  window.location.href = './apply.html';
}

// Expose for inline handlers (older pages use onclick HTML attributes)
window.navigateToPage = navigateToPage;
window.goToPage = goToPage;
