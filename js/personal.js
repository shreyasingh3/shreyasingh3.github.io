// ---- Tabs ----
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('.tab-panel');

function showTab(name) {
  if (!document.getElementById(name)) name = tabs[0].dataset.tab;
  tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.tab === name));
  panels.forEach(p => { p.hidden = p.id !== name; });
  history.replaceState(null, '', '#' + name);
}

tabs.forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));
showTab(location.hash.slice(1));

// ---- Recipes ----
const searchInput = document.getElementById('recipe-search');
const list = document.getElementById('recipe-list');
const count = document.getElementById('recipe-count');
const tagFilters = document.getElementById('tag-filters');
const dialog = document.getElementById('recipe-dialog');
const detail = document.getElementById('recipe-detail');

let activeTag = null;

const escapeHtml = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const searchText = r =>
  [r.title, r.description, ...(r.ingredients || []), ...(r.tags || [])].join(' ').toLowerCase();

function matches(recipe, query) {
  const text = searchText(recipe);
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const tagOk = !activeTag || (recipe.tags || []).includes(activeTag);
  return tagOk && words.every(w => text.includes(w));
}

function renderTags() {
  const allTags = [...new Set(RECIPES.flatMap(r => r.tags || []))].sort();
  tagFilters.innerHTML = allTags.map(tag =>
    `<button class="tag${tag === activeTag ? ' active' : ''}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`
  ).join('');
}

function renderList() {
  const results = RECIPES
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => matches(r, searchInput.value));

  count.textContent = `${results.length} of ${RECIPES.length} recipes`;
  list.innerHTML = results.length
    ? results.map(({ r, i }) => `
        <article class="card recipe-card" data-index="${i}" tabindex="0">
          <h3>${escapeHtml(r.title)}</h3>
          <p>${escapeHtml(r.description || '')}</p>
          <p class="muted">${[r.time, r.servings && `serves ${r.servings}`].filter(Boolean).map(escapeHtml).join(' · ')}</p>
          <div>${(r.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
        </article>`).join('')
    : '<p class="muted">No recipes match your search.</p>';
}

function openRecipe(i) {
  const r = RECIPES[i];
  detail.innerHTML = `
    <h2>${escapeHtml(r.title)}</h2>
    <p>${escapeHtml(r.description || '')}</p>
    <p class="muted">${[r.time, r.servings && `serves ${r.servings}`].filter(Boolean).map(escapeHtml).join(' · ')}</p>
    <h3>Ingredients</h3>
    <ul>${(r.ingredients || []).map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
    <h3>Steps</h3>
    <ol>${(r.steps || []).map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ol>`;
  dialog.showModal();
}

searchInput.addEventListener('input', renderList);

tagFilters.addEventListener('click', e => {
  const btn = e.target.closest('[data-tag]');
  if (!btn) return;
  activeTag = activeTag === btn.dataset.tag ? null : btn.dataset.tag;
  renderTags();
  renderList();
});

list.addEventListener('click', e => {
  const card = e.target.closest('.recipe-card');
  if (card) openRecipe(card.dataset.index);
});
list.addEventListener('keydown', e => {
  const card = e.target.closest('.recipe-card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openRecipe(card.dataset.index); }
});

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

renderTags();
renderList();
