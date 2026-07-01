/* ============================================================
   Anri — The Untranslatable Taste
   GSAP scroll animation + video controls + nav
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- NAV: scrolled state + mobile drawer ---------- */
  var nav = document.getElementById("nav");
  var lastNavY = window.scrollY;
  function onScrollNav() {
    var y = window.scrollY;
    if (y > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");

    /* Hide when scrolling down (past the hero), reveal when scrolling up.
       Never hide while the mobile drawer is open. */
    if (!nav.classList.contains("menu-open")) {
      if (y > lastNavY && y > 240) nav.classList.add("nav-hidden");
      else nav.classList.remove("nav-hidden");
    }
    lastNavY = y;
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  var burger = document.getElementById("navBurger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Preorder flow ----------
     Hero button: smooth-scrolls down to the final section on desktop only
     (tablet/mobile stay put). The final section shows a scan-to-preorder QR
     on desktop and a tappable button on touch devices — both point at the
     same URL. TODO: replace PREORDER_URL with the live link. */
  var PREORDER_URL = "https://anribakery.com/preorder";

  var heroPreorder = document.getElementById("heroPreorder");
  if (heroPreorder) {
    heroPreorder.addEventListener("click", function (e) {
      /* Desktop: let the native #end anchor jump run (smoothed by the
         html { scroll-behavior: smooth } rule). Tablet/mobile: cancel it so
         the page doesn't scroll down. */
      if (!window.matchMedia("(min-width: 769px)").matches) {
        e.preventDefault();
      }
    });
  }

  var endBtn = document.getElementById("endPreorder");
  if (endBtn) endBtn.setAttribute("href", PREORDER_URL);

  var qrHost = document.getElementById("endQrCode");
  if (qrHost && typeof QRCode !== "undefined") {
    new QRCode(qrHost, {
      text: PREORDER_URL,
      width: 168,
      height: 168,
      colorDark: "#2a1410",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M,
    });
  }

  /* ---------- VIDEO controls (pause + fullscreen) ---------- */
  var video = document.getElementById("storyVideo");
  var playBtn = document.getElementById("vcPlay");
  var fullBtn = document.getElementById("vcFull");

  if (video && playBtn) {
    function syncPlayIcon() {
      var paused = video.paused;
      playBtn.classList.toggle("is-paused", paused);
      playBtn.setAttribute("aria-label", paused ? "Play video" : "Pause video");
      playBtn.setAttribute("aria-pressed", paused ? "true" : "false");
    }
    playBtn.addEventListener("click", function () {
      if (video.paused) video.play();
      else video.pause();
    });
    video.addEventListener("play", syncPlayIcon);
    video.addEventListener("pause", syncPlayIcon);
    video.addEventListener("click", function () {
      if (video.paused) video.play();
      else video.pause();
    });
    syncPlayIcon();
  }

  if (video && fullBtn) {
    fullBtn.addEventListener("click", function () {
      var el = video;
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } else if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.webkitEnterFullscreen) {
        el.webkitEnterFullscreen(); /* iOS Safari */
      }
    });
  }

  /* Autoplay guard: some browsers block autoplay until interaction */
  if (video) {
    var tryPlay = video.play();
    if (tryPlay && typeof tryPlay.catch === "function") {
      tryPlay.catch(function () {/* poster shows; user can press play */});
    }
  }

  /* ---------- GSAP scroll animations ---------- */
  if (reduceMotion || typeof gsap === "undefined") {
    document.querySelectorAll(".anim").forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* Parallax + gentle Ken Burns zoom on each background layer */
  gsap.utils.toArray(".section").forEach(function (section) {
    var bg = section.querySelector(".bg");
    if (!bg) return;
    gsap.fromTo(
      bg,
      { yPercent: -6, scale: 1.04 },
      {
        yPercent: 6,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  /* Directional, staggered reveal of copy per section.
     Content anchored left slides in from the left, right from the right;
     ornaments spin-scale in and the CTA pops — so each element type reads as
     its own beat instead of one uniform fade-up. */
  gsap.utils.toArray(".section").forEach(function (section) {
    var items = Array.prototype.slice.call(section.querySelectorAll(".anim"));
    if (!items.length) return;

    var isHero = section.classList.contains("hero");
    var dir = section.querySelector(".content-left") ? -1
            : section.querySelector(".content-right") ? 1 : 0;

    var tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: isHero ? 0.25 : 0,
      /* Fire later (section well into view) so the centered copy is actually
         on-screen while it reveals, instead of animating below the fold. */
      scrollTrigger: isHero ? undefined : { trigger: section, start: "top 55%" },
    });

    items.forEach(function (el, i) {
      var at = i * 0.2;                  /* stagger cadence (a touch slower) */
      if (el.classList.contains("ornament")) {
        gsap.set(el, { opacity: 0, scale: 0.6, rotation: -25, transformOrigin: "50% 50%" });
        tl.to(el, { opacity: 0.75, scale: 1, rotation: 0, duration: 1.15 }, at);
      } else if (el.classList.contains("cta-btn")) {
        gsap.set(el, { opacity: 0, scale: 0.9, y: 22 });
        /* clearProps transform on finish so the CSS :hover lift isn't blocked
           by GSAP's leftover inline transform. */
        tl.to(el, { opacity: 1, scale: 1, y: 0, duration: 0.95, ease: "back.out(1.7)", clearProps: "transform" }, at);
      } else {
        gsap.set(el, { opacity: 0, y: 42, x: dir * 36 });
        tl.to(el, { opacity: 1, y: 0, x: 0, duration: 1.3 }, at);
      }
    });
  });

  /* Section 2 (video): reveal the framed player so it doesn't just pop in.
     The frame is centered via a CSS translate(-50%, -50%); mirror that with
     xPercent/yPercent so GSAP's transform keeps it centered while it lifts. */
  var videoFrame = document.querySelector(".video-frame");
  if (videoFrame) {
    gsap.set(videoFrame, { xPercent: -50, yPercent: -50 });
    gsap.fromTo(
      videoFrame,
      { opacity: 0, scale: 0.94, y: 34 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ".video-section", start: "top 55%" },
      }
    );
  }

  /* Refresh after fonts load to keep triggers accurate */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
})();
