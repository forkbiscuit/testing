const statsMarkup = `
  <ul class="stats">
    <li><span>Score</span><strong>952</strong></li>
    <li><span>Kills</span><strong>3</strong></li>
    <li><span>Deaths</span><strong>795</strong></li>
    <li><span>Headshots</span><strong>1,055</strong></li>
  </ul>`;

const template = (rank) => `
  <header>
    <span class="rank">${rank}</span>
    <div>
      <h3>Mortimates</h3>
      <p>Quality Parsnips • Madam Hats • The Cake • Aromatic Pot</p>
    </div>
    <div class="totals"><strong>120,325</strong><span>Total Score</span></div>
  </header>
  <div class="players grid4">
    <div class="player red"><h4>Quality Parsnips</h4><p>Shotgun</p>${statsMarkup}</div>
    <div class="player blue mvp"><h4>Madam Hats</h4><p>Machine Gun</p>${statsMarkup}</div>
    <div class="player green"><h4>The Cake</h4><p>Pistols</p>${statsMarkup}</div>
    <div class="player yellow"><h4>Aromatic Pot</h4><p>Rifle</p>${statsMarkup}</div>
  </div>
  <button class="wave-toggle" type="button" aria-expanded="false">Show wave breakdown</button>
  <div class="waves" hidden>
    ${Array.from({ length: 10 }, (_, i) => `<span>Wave ${i + 1}<br /><strong>74,069</strong></span>`).join('')}
  </div>`;

document.querySelectorAll('.team-card[data-rank]').forEach((card) => {
  card.innerHTML = template(card.dataset.rank);
});

document.querySelectorAll('.team-card').forEach((card) => {
  const btn = card.querySelector('.wave-toggle');
  const waves = card.querySelector('.waves');
  if (!btn || !waves) return;

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isExpanded));
    btn.textContent = isExpanded ? 'Show wave breakdown' : 'Hide wave breakdown';
    waves.hidden = isExpanded;
  });
});
