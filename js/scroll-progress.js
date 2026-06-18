/**
 * Scroll progress indicator - shows reading progress at top of page
 */
(function () {
  "use strict";

  const scrollProgress = document.getElementById("scrollProgress");
  if (!scrollProgress) return;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    scrollProgress.style.width = percent + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();
