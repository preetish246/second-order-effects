// Second Order Effects — small, restrained scroll-in effect.
// Progressive enhancement: if this script fails to load or run, every element
// is still fully visible by default (see .fade-up rules in styles.css).
document.addEventListener('DOMContentLoaded', function () {
  var selectors = [
    '.intro',
    '.post-item',
    'article.post > h1',
    'article.post > .post-dek',
    'article.post > p',
    'article.post > h2',
    'article.post > blockquote',
    'article.post > .sources',
    'article.post > .comments',
    'article.post > .post-nav',
    '.form-row',
    'button[type="submit"]'
  ];

  var targets = Array.prototype.slice.call(
    document.querySelectorAll(selectors.join(','))
  );

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    return; // no-op: content is already visible without the fade-up class
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  targets.forEach(function (el, i) {
    el.classList.add('fade-up');
    // tiny stagger for elements that are visible together (e.g. the post list)
    el.style.transitionDelay = Math.min(i % 6, 5) * 40 + 'ms';
    observer.observe(el);
  });
});
