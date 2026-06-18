/**
 * Typing effect for the main title
 */
(function () {
  "use strict";

  const typingEl = document.getElementById("typingText");
  const title = "Full Stack Web Developer";
  if (!typingEl || !title) return;

  let i = 0;
  const typeSpeed = 80;
  const pauseEnd = 2000;
  const deleteSpeed = 45;

  function type() {
    if (i < title.length) {
      typingEl.textContent += title[i];
      i++;
      setTimeout(type, typeSpeed);
    } else {
      setTimeout(erase, pauseEnd);
    }
  }

  function erase() {
    if (i > 0) {
      typingEl.textContent = title.slice(0, i - 1);
      i--;
      setTimeout(erase, deleteSpeed);
    } else {
      setTimeout(type, typeSpeed * 2);
    }
  }

  setTimeout(type, 400);
})();
