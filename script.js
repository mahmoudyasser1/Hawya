// Placeholder for future interactivity and background animation
// Example: Animate stars or handle button clicks 

// Card flip accessibility for keyboard users
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hacker-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('focus', () => {
      card.querySelector('.card-inner').classList.add('flipped');
    });
    card.addEventListener('blur', () => {
      card.querySelector('.card-inner').classList.remove('flipped');
    });
  });

  // Protect cards expand/collapse
  const protectCards = document.querySelectorAll('.protect-card');
  protectCards.forEach(card => {
    card.addEventListener('click', () => {
      const isOpen = card.getAttribute('aria-expanded') === 'true';
      protectCards.forEach(c => {
        c.setAttribute('aria-expanded', 'false');
        c.querySelector('.card-details').setAttribute('hidden', '');
      });
      if (!isOpen) {
        card.setAttribute('aria-expanded', 'true');
        card.querySelector('.card-details').removeAttribute('hidden');
      }
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}); 