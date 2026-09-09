// TODO: вставить ссылку на Telegram-бота. Например: https://t.me/your_bot
const TELEGRAM_BOT_URL = '#';
const launchDialog = document.querySelector('#launch-dialog');
document.querySelectorAll('[data-telegram]').forEach(link => {
  link.href = TELEGRAM_BOT_URL;
  link.addEventListener('click', event => {
    if (TELEGRAM_BOT_URL === '#') { event.preventDefault(); launchDialog.showModal(); }
  });
});
document.querySelectorAll('.close-dialog, .close-dialog-action').forEach(button => button.addEventListener('click', () => launchDialog.close()));
launchDialog.addEventListener('click', event => { if (event.target === launchDialog) { const r = launchDialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) launchDialog.close(); } });

// Content stays visible when JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(section => {
    section.classList.add('pending');
    observer.observe(section);
  });
}
