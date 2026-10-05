const filters = document.querySelectorAll('[data-filter]');
const papers = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  papers.forEach(paper => {
    paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter;
    if (!paper.hidden) visible++;
  });
  document.querySelector('.filter-status').textContent = `${visible} papers shown.`;
}));
document.querySelector('.print-button').addEventListener('click', () => window.print());
document.querySelector('#year').textContent = new Date().getFullYear();
