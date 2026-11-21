(function () {
  "use strict"

  var root = document.documentElement
  var storageKey = "theme"
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  function storedTheme() {
    try {
      return localStorage.getItem(storageKey)
    } catch (error) {
      return null
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme)
    var toggle = document.getElementById("theme-toggle")
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"))
    }
  }

  function setupThemeToggle() {
    var toggle = document.getElementById("theme-toggle")
    if (!toggle) return
    applyTheme(root.getAttribute("data-theme") || "light")

    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark"
      applyTheme(next)
      try {
        localStorage.setItem(storageKey, next)
      } catch (error) {
        // Private mode or blocked storage: the theme still changes for this visit.
      }
    })

    darkQuery.addEventListener("change", function (event) {
      if (!storedTheme()) applyTheme(event.matches ? "dark" : "light")
    })
  }

  function setupScrollProgress() {
    var bar = document.getElementById("scroll-progress")
    if (!bar) return
    var ticking = false

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight
      var progress = max > 0 ? window.scrollY / max : 0
      bar.style.transform = "scaleX(" + Math.min(Math.max(progress, 0), 1) + ")"
      ticking = false
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true
          window.requestAnimationFrame(update)
        }
      },
      { passive: true }
    )
    update()
  }

  function setupMarquee() {
    var tracks = document.querySelectorAll(".app-marquee .marquee-track")
    if (tracks.length === 0 || typeof apps === "undefined") return

    var half = Math.ceil(apps.length / 2)
    var rows = [apps.slice(0, half), apps.slice(half)]

    tracks.forEach(function (track, index) {
      var rowApps = rows[index] || []
      // Two copies of the row make the loop seamless.
      for (var copy = 0; copy < 2; copy++) {
        rowApps.forEach(function (app) {
          var image = document.createElement("img")
          image.src = "images/portfolio/" + app.image
          image.alt = copy === 0 ? app.name : ""
          image.title = app.name
          image.loading = "lazy"
          image.decoding = "async"
          track.appendChild(image)
        })
      }
    })
  }

  function animateCount(element) {
    var target = parseInt(element.getAttribute("data-count-to"), 10)
    if (isNaN(target)) return
    var duration = 1400
    var start = null

    function step(timestamp) {
      if (start === null) start = timestamp
      var progress = Math.min((timestamp - start) / duration, 1)
      var eased = 1 - Math.pow(1 - progress, 3)
      element.textContent = String(Math.round(target * eased))
      if (progress < 1) window.requestAnimationFrame(step)
    }

    element.textContent = "0"
    window.requestAnimationFrame(step)
  }

  function setupCounters() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!("IntersectionObserver" in window)) return

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6 }
    )

    document.querySelectorAll("[data-count-to]").forEach(function (element) {
      observer.observe(element)
    })
  }

  var revealGroups = [
    { selector: ".header .text-container > *", step: 0.12 },
    { selector: ".hero-stats .stat", step: 0.1, pop: true },
    { selector: ".app-marquee", step: 0 },
    { selector: ".cards-1 .card", step: 0.08, pop: true },
    { selector: ".basic-1 .image-container, .basic-1 .text-container > *", step: 0.1 },
    { selector: ".tabs .tabs-container, .tabs .image-container", step: 0.15 },
    { selector: ".basic-2 h2, .basic-2 .p-heading", step: 0.1 },
    { selector: "#apps > div", step: 0.04, pop: true },
    { selector: ".basic-2 .btn-solid-lg", step: 0 },
    { selector: ".cards-2 h2, .cards-2 .card", step: 0.12 }
  ]

  function setupReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!("IntersectionObserver" in window)) return

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    )

    revealGroups.forEach(function (group) {
      var elements = document.querySelectorAll(group.selector)
      elements.forEach(function (element, index) {
        element.classList.add("reveal")
        if (group.pop) element.classList.add("reveal-pop")
        element.style.setProperty("--reveal-delay", Math.min(index * group.step, 0.6) + "s")
        observer.observe(element)
      })
    })
  }

  function hidePreloaderSoon() {
    var preloader = document.querySelector(".spinner-wrapper")
    if (!preloader) return
    window.setTimeout(function () {
      preloader.classList.add("is-hidden")
    }, 350)
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupThemeToggle()
    setupScrollProgress()
    setupMarquee()
    setupReveal()
    setupCounters()
    hidePreloaderSoon()
  })
})()
