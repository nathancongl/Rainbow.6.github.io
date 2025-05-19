const data = [
  { name: 'Sledge', url: 'operators/sledge.html' },
  { name: 'Smoke', url: 'operators/smoke.html' },
  { name: 'Oregon 2F Dorms', url: 'maps/oregon/2f-dorms.html' },
  { name: 'Attack Strategy - Clubhouse Basement', url: 'strategies/clubhouse/attack-basement.html' }
];

const input = document.getElementById('operatorSearch');
const suggestionsBox = document.getElementById('suggestions');

input.addEventListener('input', () => {
  const inputValue = input.value.toLowerCase();
  suggestionsBox.innerHTML = '';
  if (inputValue) {
    const suggestions = data.filter(item => item.name.toLowerCase().includes(inputValue));
    suggestions.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item.name;
      div.style.padding = '10px';
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        window.location.href = item.url;
      });
      suggestionsBox.appendChild(div);
    });
    suggestionsBox.style.display = 'block';
  } else {
    suggestionsBox.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
  if (!document.querySelector('.search-box').contains(e.target)) {
    suggestionsBox.style.display = 'none';
  }
});
