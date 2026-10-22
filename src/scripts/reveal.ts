// Scroll reveals with IntersectionObserver and CSS transitions. Elements that
// start in view are shown immediately; reduced motion skips the effect.
export function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach((el) => io.observe(el));
}
