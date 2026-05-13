// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll state
const nav = document.getElementById('navbar');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { rootMargin: '-80px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
