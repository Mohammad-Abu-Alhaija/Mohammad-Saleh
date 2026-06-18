/**
 * Scroll-triggered animations using Intersection Observer
 */
(function () {
  "use strict";

  const animated = document.querySelectorAll(".animate-on-scroll");
  if (!animated.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
    );
    animated.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animated.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
