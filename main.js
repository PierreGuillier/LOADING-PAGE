// Agri-IA : comportements partagés sur toutes les pages.
(function () {
  var header = document.getElementById('gr-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    });
  }

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (el) {
        if (el.isIntersecting) {
          el.target.classList.add('is-visible');
          obs.unobserve(el.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.gr-reveal').forEach(function (el) {
    obs.observe(el);
  });

  var menuBtn = document.getElementById('gr-menu-btn');
  var mobNav = document.getElementById('gr-mob-nav');
  if (menuBtn && mobNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobNav.classList.toggle('is-open');
      menuBtn.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobNav.classList.remove('is-open');
        menuBtn.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
