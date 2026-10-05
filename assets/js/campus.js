/**
 * Campus Connect & Career Paths Interactions
 */

document.addEventListener('DOMContentLoaded', async () => {
  await window.componentsReady;
  // Campus Connect Card Clicks
  const campusCards = document.querySelectorAll('.campus-card');
  campusCards.forEach(card => {
    card.addEventListener('click', () => {
      const cardId = card.getAttribute('data-campus-id');
      if (window.CS_DATA && window.CS_DATA.campus) {
        const item = window.CS_DATA.campus.find(c => c.id === cardId);
        if (item && window.modalSystem) {
          window.modalSystem.openCampusModal(item);
        }
      }
    });
  });

  // Career Cards Click Popup
  const careerCards = document.querySelectorAll('.career-card');
  careerCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title')?.textContent;
      if (window.CS_DATA && window.CS_DATA.careers) {
        const careerItem = window.CS_DATA.careers.find(c => c.title === title);
        if (careerItem && window.modalSystem) {
          window.modalSystem.openCareerModal(careerItem);
        }
      }
    });
  });
});
