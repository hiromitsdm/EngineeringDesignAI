/* Language handling for blog post pages. Shares the 'dfai-lang' choice with index.html.
   Load in <head> without defer so the language is set before first paint. */
(function () {
  let saved = null;
  try { saved = localStorage.getItem('dfai-lang'); } catch (e) {}
  const prefersJa = [navigator.language, ...(navigator.languages || [])]
    .some(l => (l || '').toLowerCase().startsWith('ja'));
  const root = document.documentElement;
  root.lang = saved || (prefersJa ? 'ja' : 'en');

  function apply(lang) {
    root.lang = lang;
    try { localStorage.setItem('dfai-lang', lang); } catch (e) {}
    const t = root.dataset[lang === 'ja' ? 'titleJa' : 'titleEn'];
    if (t) document.title = t;
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.addEventListener('click', () => apply(b.dataset.lang));
    });
    apply(root.lang);
  });
})();
