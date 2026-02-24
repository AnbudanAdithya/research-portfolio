# 📊 Research & Analytics Portfolio

Welcome to the source code for my **Research & Analytics Portfolio**. This is a custom-built, responsive web portfolio designed to showcase my multidisciplinary academic and personal work, spanning market studies, business analytics, strategy reports, and pedagogy.

**Note:** *This is an active, living repository. I am continuously working on new academic reports and analytics projects, and further files and case studies will be regularly added to this website.*

## 🌟 Features

* **Dark Theme UI:** A sleek, modern aesthetic using CSS custom variables (`--bg-primary`, `--accent`) for a consistent and professional look.
* **Dynamic Project Grid:** Project cards are injected dynamically via vanilla JavaScript, making it easy to seamlessly add new reports as I complete them.
* **Integrated Document Viewer:** Dedicated HTML sub-pages feature embedded `<iframe>` PDF viewers, allowing visitors to read full academic reports directly on the site.
* **Animated Statistics:** Custom JavaScript counters track and display the total number of projects, models, and unique core skills.
* **Responsive Design:** A fully fluid layout utilizing Flexbox and CSS Grid to ensure the portfolio looks great on desktops, tablets, and mobile devices.

## 📂 Featured Projects

The portfolio currently hosts the following research and analytics projects (with more on the way!):
1.  **Pfizer Strategic Analysis:** An academic business strategy report dissecting Pfizer's operations using Porter's Value Chain Analysis and the Business Model Canvas.
2.  **Product Idea Market Study:** An in-depth market research study evaluating feasibility, target demographics, and the competitive landscape for a new product concept.
3.  **FinTech Banks Report:** A detailed research report analyzing the rise of FinTech banks, their operational models, and their disruption of the traditional banking sector.
4.  **Academic Book Review:** A comprehensive critical analysis exploring foundational business management principles.

## 🛠️ Tech Stack

This project was built without any heavy frameworks to keep it lightweight, fast, and easy to maintain:
* **HTML5:** Semantic structuring and seamless PDF `<iframe>` embedding.
* **CSS3:** Custom styling, smooth transitions, and responsive media queries.
* **Vanilla JavaScript:** DOM manipulation, scroll-spy navigation, and dynamic content rendering.
* **Custom SVG:** Minimalist, scalable vector graphics used for the site favicon and iconography.

## 📁 Repository Structure

```text
📂 research-portfolio/
 ├── 📄 index.html              # Main homepage and portfolio grid
 ├── 📄 README.md               # Repository documentation
 ├── 📂 css/
 │    └── 📄 style.css          # Core stylesheet
 ├── 📂 js/
 │    └── 📄 main.js            # Dynamic rendering and animations
 ├── 📂 images/
 │    └── 🖼️ favicon.svg        # Custom analytics icon
 ├── 📂 HTML/                   # Sub-pages for individual projects
 │    ├── 📄 BMC.html
 │    ├── 📄 book-review.html
 │    ├── 📄 fintech-report.html
 │    └── 📄 product-study.html
 └── 📂 assets/
      └── 📂 PDF/               # Hosted research reports and case studies
           ├── 📄 BMC.pdf
           ├── 📄 Book_Review.pdf
           ├── 📄 FinTech_Banks.pdf
           └── 📄 Guardian_X.pdf

```

## 🚀 How to Run Locally

Since this is a static website built with pure HTML/CSS/JS, no build steps or package managers are required!

1. Clone the repository:
```bash
git clone [https://github.com/AnbudanAdithya/research-portfolio.git](https://github.com/AnbudanAdithya/research-portfolio.git)
```
2. Navigate to the project folder.
3. Simply double-click `index.html` to open it in your default web browser, or use a tool like VS Code's "Live Server" extension for a better development experience.
---
*Built with 💛 by S Adithya*