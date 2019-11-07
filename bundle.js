"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setScrollNav;

function setScrollNav(sections) {
  var sectionsContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector("body");
  var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  document.addEventListener("click", function (e) {
    var href = e.target.getAttribute("href");

    if (href && e.target.getAttribute("href")[0] === "#") {
      window.location.replace(href);
    }
  });
  var options = {
    threshold: threshold
  };

  function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio >= options.threshold) {
        var id = entry.target.id;
        var prevActive = document.querySelector(".navlink-active");
        var newActive = document.querySelector("[href=\"#".concat(id, "\"]"));
        prevActive && prevActive.classList.remove("navlink-active");
        newActive.classList.add("navlink-active");
        history.replaceState({}, id, "/#".concat(id));
      }
    });
  }

  try {
    var observer = new IntersectionObserver(callback, options);
    sections.forEach(function (section) {
      observer.observe(section);
    });
  } catch (error) {
    console.log("No intersection observer on this browser");
  }

  sectionsContainer.style.overflowY = "scroll";
  sectionsContainer.style.overflowX = "hidden";
  sectionsContainer.style.scrollBehavior = "smooth";
  var body = document.querySelector("body");
  body.style.height = "100vh";
  body.style.width = "100%";
  body.style.overflow = "hidden";
}
