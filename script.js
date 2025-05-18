const sections = document.querySelectorAll('.operator');
const bg = document.getElementById('background-overlay');

const options = {
  threshold: 0.5,
};

let currentBg = '';

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const newBg = entry.target.getAttribute('data-bg');
      if (newBg !== currentBg) {
        bg.style.opacity = 0;
        setTimeout(() => {
          bg.style.backgroundImage = `url(${newBg})`;
          bg.style.opacity = 1;
          currentBg = newBg;
        }, 300);
      }
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
