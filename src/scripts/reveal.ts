// Subtle scroll reveals. GSAP is only downloaded when there is something to
// animate and the visitor has not asked for reduced motion.
export async function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const below = els.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
  if (!below.length) return;
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(below, { autoAlpha: 0, y: 28 });
  ScrollTrigger.batch(below, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, overwrite: true }),
  });
  // Counters (only used when real numbers are filled in)
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const obj = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(obj, { v: target, duration: 1.6, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString(); } }) });
  });
}
