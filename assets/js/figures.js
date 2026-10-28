// Animated schematic figures: respect reduced-motion and pause while off screen.
(function () {
  'use strict';
  var figs = Array.prototype.slice.call(document.querySelectorAll('svg.fig'));
  if (!figs.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  figs.forEach(function (svg) {
    if (!svg.pauseAnimations) return;
    if (reduce) { svg.setCurrentTime(parseFloat(svg.getAttribute('data-still')) || 4); svg.pauseAnimations(); }
  });
  if (reduce || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.unpauseAnimations(); else e.target.pauseAnimations();
    });
  }, { rootMargin: '100px' });
  figs.forEach(function (svg) { if (svg.pauseAnimations) io.observe(svg); });
})();
