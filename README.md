# Computer Science Portal - Figma Web Design Implementation

A high-fidelity, interactive, modern web implementation of the **Computer Science Major Landing Page & Curriculum Portal** Figma design. Built with **100% Native HTML5, CSS3, and Vanilla JavaScript (ES6+)** with zero external frameworks or npm dependencies.

![Project Status](https://img.shields.io/badge/Status-Complete-success)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)
![Design](https://img.shields.io/badge/Design-Figma%20Pixel%20Perfect-violet)

---

## 📁 File Division & Architecture Schema

The codebase is engineered with a modular separation of concerns for maximum readability, scalability, and maintainability:

```
computer-science-portal/
├── index.html                      # Primary semantic HTML5 structure & accessibility tags
├── README.md                       # Comprehensive architecture guide & documentation
└── assets/
    ├── css/
    │   ├── variables.css           # Color tokens, glassmorphic filters, font definitions
    │   ├── base.css                # Global CSS reset, typography, custom scrollbars, layout containers
    │   ├── components.css          # Reusable UI components (Navbar, Buttons, Badges, Search Inputs, Modals)
    │   ├── sections.css            # Section layouts (Hero, Stats, Curriculum, Campus Connect, Skills & Careers)
    │   └── animations.css          # Keyframes for floating 3D glass geometry and glowing light halos
    └── js/
        ├── data.js                 # Centralized JSON schema data repository (Courses, Campus, Careers)
        ├── modal.js                # Accessible Modal Dialog Engine (Course & Career detail popups)
        ├── curriculum.js           # Interactive Curriculum Filter & Search rendering engine
        ├── campus.js               # Campus Connect & Career card event bindings
        └── main.js                 # App orchestrator (Scrollspy, sticky blur navbar, mobile hamburger menu)
```

---

## 🎨 Design System & Visual Palette

The UI recreates the glowing midnight-dark aesthetic from the Figma blueprint:

- **Background Palette**: Deep Midnight Blue (`#080c14`, `#0d1527`, `#0f172a`)
- **Primary Accent**: Electric Cyan Gradient (`#00f2fe` → `#4facfe`) with glowing drop-shadows
- **Secondary Accent**: Vibrant Violet Gradient (`#a855f7` → `#6366f1`) for Year 3 specialization items
- **Glassmorphism**: Backdrop blur filter (`blur(16px)`), semi-transparent card borders (`rgba(255, 255, 255, 0.08)`), and subtle ambient background glows.
- **Typography**: `Plus Jakarta Sans` for clean modern headings, `Fira Code` for interactive code snippets, and `Caveat` for handwriting accent annotations.

---

## ⚡ Interactive Features

1. **Real-time Curriculum Filter Engine**:
   - Live search input matching course codes (e.g. `CS101`), titles (e.g. `Algorithms`), or descriptions.
   - Filter dropdowns by **Year** (Year 1, Year 2, Year 3), **Semester** (Semester 1, 2), and **Category** (Core, Math, Systems, AI/ML, Web, Security).
   - Dynamic recalculation of total active credit counts per academic year.

2. **Interactive Course & Career Detail Modals**:
   - Clicking any course item opens a rich detail modal showing course overview, instructor, prerequisites, and syllabus topic tags.
   - Clicking any career path card displays average salary ranges, core tech stacks, and suggested electives.
   - Accessible keyboard support (`ESC` key to dismiss modal, backdrop click dismiss).

3. **Responsive Sticky Navigation with Scrollspy**:
   - Navbar switches to a frosted glass background on page scroll down.
   - Navigation links automatically update active highlights as the user scrolls through sections (`Home`, `Program`, `Curriculum`, `Campus Connect`, `Careers`).
   - Mobile-responsive hamburger overlay menu.

4. **Hero 3D Visual Art & Live Code Card**:
   - SVG vector rendering of laptop hardware and floating geometric polygons.
   - Animated code snippet preview window with typing cursor emulation.

---

## 🚀 How to Run Locally

Since this project uses native web technologies without complex build steps, you can run it using any web server or directly in your browser:


### Method 1: Opening Directly in Browser
Simply double-click `index.html` or drag and drop `index.html` into Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 2: VS Code Live Server Extension
Open the `computer-science-portal` folder in VS Code, right-click `index.html`, and select **Open with Live Server**.

---

## 📄 License & Attribution

Designed and created for the Computer Science Department landing page. All rights reserved.
=======
# Club

