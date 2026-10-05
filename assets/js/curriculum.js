/**
 * Curriculum Dashboard Controller & Dynamic Filter Engine
 */

document.addEventListener('DOMContentLoaded', async () => {
  await window.componentsReady;
  const searchInput = document.getElementById('curriculum-search');
  const yearSelect = document.getElementById('filter-year');
  const semSelect = document.getElementById('filter-semester');
  const catSelect = document.getElementById('filter-category');

  const containerYear1Sem1 = document.getElementById('courses-y1-s1');
  const containerYear1Sem2 = document.getElementById('courses-y1-s2');
  const containerYear2Sem1 = document.getElementById('courses-y2-s1');
  const containerYear2Sem2 = document.getElementById('courses-y2-s2');
  const containerYear3Sem1 = document.getElementById('courses-y3-s1');
  const containerYear3Sem2 = document.getElementById('courses-y3-s2');

  const totalY1CreditsEl = document.getElementById('credits-y1');
  const totalY2CreditsEl = document.getElementById('credits-y2');
  const totalY3CreditsEl = document.getElementById('credits-y3');

  if (!window.CS_DATA || !window.CS_DATA.curriculum) return;

  function renderCurriculum() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedYear = yearSelect ? yearSelect.value : 'all';
    const selectedSem = semSelect ? semSelect.value : 'all';
    const selectedCat = catSelect ? catSelect.value : 'all';

    const containers = {
      '1-1': { el: containerYear1Sem1, credits: 0, items: [] },
      '1-2': { el: containerYear1Sem2, credits: 0, items: [] },
      '2-1': { el: containerYear2Sem1, credits: 0, items: [] },
      '2-2': { el: containerYear2Sem2, credits: 0, items: [] },
      '3-1': { el: containerYear3Sem1, credits: 0, items: [] },
      '3-2': { el: containerYear3Sem2, credits: 0, items: [] }
    };

    let totalY1 = 0;
    let totalY2 = 0;
    let totalY3 = 0;

    window.CS_DATA.curriculum.forEach(course => {
      // Apply filters
      const matchSearch = course.code.toLowerCase().includes(searchTerm) || 
                          course.title.toLowerCase().includes(searchTerm) ||
                          course.description.toLowerCase().includes(searchTerm);
      
      const matchYear = selectedYear === 'all' || course.year.toString() === selectedYear;
      const matchSem = selectedSem === 'all' || course.semester.toString() === selectedSem;
      const matchCat = selectedCat === 'all' || course.category.toLowerCase() === selectedCat.toLowerCase();

      if (matchSearch && matchYear && matchSem && matchCat) {
        const key = `${course.year}-${course.semester}`;
        if (containers[key]) {
          containers[key].items.push(course);
          containers[key].credits += course.credits;

          if (course.year === 1) totalY1 += course.credits;
          if (course.year === 2) totalY2 += course.credits;
          if (course.year === 3) totalY3 += course.credits;
        }
      }
    });

    // Render HTML into each semester block
    Object.keys(containers).forEach(key => {
      const group = containers[key];
      if (!group.el) return;

      if (group.items.length === 0) {
        group.el.innerHTML = `<div style="padding:0.5rem; font-size:0.8rem; color:var(--color-text-subtle); text-align:center;">No matching courses</div>`;
      } else {
        group.el.innerHTML = group.items.map(course => `
          <div class="course-item" data-course-id="${course.id}">
            <div class="course-name">
              <span style="color:var(--color-primary); display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--color-primary);"></span>
              <span><strong class="course-code">${course.code}</strong> – ${course.title}</span>
            </div>
            <span class="credit-badge">(${course.credits})</span>
          </div>
        `).join('');
      }
    });

    // Update Totals
    if (totalY1CreditsEl) totalY1CreditsEl.textContent = `${totalY1} Credits`;
    if (totalY2CreditsEl) totalY2CreditsEl.textContent = `${totalY2} Credits`;
    if (totalY3CreditsEl) totalY3CreditsEl.textContent = `${totalY3} Credits`;

    // Attach click listeners to course items
    document.querySelectorAll('.course-item').forEach(item => {
      item.addEventListener('click', () => {
        const courseId = item.getAttribute('data-course-id');
        const courseData = window.CS_DATA.curriculum.find(c => c.id === courseId);
        if (courseData && window.modalSystem) {
          window.modalSystem.openCourseModal(courseData);
        }
      });
    });
  }

  // Attach Filter Listeners
  if (searchInput) searchInput.addEventListener('input', renderCurriculum);
  if (yearSelect) yearSelect.addEventListener('change', renderCurriculum);
  if (semSelect) semSelect.addEventListener('change', renderCurriculum);
  if (catSelect) catSelect.addEventListener('change', renderCurriculum);

  // Initial render
  renderCurriculum();
});
