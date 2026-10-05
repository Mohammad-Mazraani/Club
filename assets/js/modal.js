/**
 * Accessible Modal System for Computer Science Portal
 */

class ModalSystem {
  constructor() {
    this.overlay = document.getElementById('global-modal-overlay');
    this.titleEl = document.getElementById('modal-title');
    this.metaEl = document.getElementById('modal-meta');
    this.bodyEl = document.getElementById('modal-body');
    this.closeBtn = document.getElementById('modal-close-btn');

    if (this.overlay) {
      this.initEvents();
    }
  }

  initEvents() {
    // Close button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Overlay click (outside container)
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  isOpen() {
    return this.overlay.classList.contains('active');
  }

  open(title, metaHtml, bodyHtml) {
    this.titleEl.textContent = title;
    this.metaEl.innerHTML = metaHtml;
    this.bodyEl.innerHTML = bodyHtml;

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Pre-configured open method for Courses
  openCourseModal(courseData) {
    const title = `${courseData.code} - ${courseData.title}`;
    const metaHtml = `
      <span><i class="fa-regular fa-bookmark"></i> ${courseData.credits} Credits</span>
      <span>•</span>
      <span><i class="fa-regular fa-clock"></i> Year ${courseData.year}, Semester ${courseData.semester}</span>
      <span>•</span>
      <span><i class="fa-regular fa-folder"></i> ${courseData.category}</span>
    `;

    const topicsMarkup = courseData.topics
      .map(t => `<span class="topic-tag">${t}</span>`)
      .join('');

    const prereqMarkup = courseData.prerequisites.join(', ');

    const bodyHtml = `
      <p>${courseData.description}</p>
      
      <h4>Course Details</h4>
      <ul style="list-style: disc; margin-left: 1.25rem; font-size: 0.9rem;">
        <li><strong>Instructor:</strong> ${courseData.instructor}</li>
        <li><strong>Prerequisites:</strong> ${prereqMarkup}</li>
      </ul>

      <h4>Key Topics Covered</h4>
      <div class="topic-list">
        ${topicsMarkup}
      </div>
    `;

    this.open(title, metaHtml, bodyHtml);
  }

  // Pre-configured open method for Careers
  openCareerModal(careerData) {
    const title = careerData.title;
    const metaHtml = `
      <span><i class="fa-solid fa-money-bill-wave"></i> Average Salary: ${careerData.salary}</span>
    `;

    const bodyHtml = `
      <p><strong>Overview:</strong> ${careerData.subtext}. Computer Science graduates in this role build robust systems, collaborate across cross-functional teams, and solve complex technical challenges.</p>
      
      <h4>Core Tech Stack</h4>
      <p style="color: var(--color-primary); font-weight: 600;">${careerData.stack}</p>

      <h4>Recommended Major Electives</h4>
      <div class="topic-list">
        <span class="topic-tag">CS301 Algorithms</span>
        <span class="topic-tag">CS303 Web Development</span>
        <span class="topic-tag">CS306 Cloud Computing</span>
      </div>
    `;

    this.open(title, metaHtml, bodyHtml);
  }

  // Pre-configured open method for Campus Facilities
  openCampusModal(campusData) {
    const title = campusData.title;
    const metaHtml = `<span><i class="fa-solid fa-graduation-cap"></i> Campus Connect Showcase</span>`;
    const bodyHtml = `
      <p><strong>${campusData.desc}</strong></p>
      <div style="margin-top: 1rem; padding: 1rem; background: rgba(0,242,254,0.05); border-radius: 8px; border: 1px solid rgba(0,242,254,0.15);">
        <p>${campusData.fullDetail}</p>
      </div>
    `;
    this.open(title, metaHtml, bodyHtml);
  }
}

window.modalSystem = new ModalSystem();
