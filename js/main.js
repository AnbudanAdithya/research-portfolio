// ── PROJECT DATA ──────────────────────────────────────────────
const projects = [
    {
        icon: '🎯',
        title: 'Product Idea Market Study',
        description: 'An in-depth market research study evaluating the feasibility, target demographic, and competitive landscape for a new product concept.',
        tags: ['Market Research', 'Strategy', 'Consumer Behavior'],
        status: 'Completed',
        year: '2024',
        link: 'product-study.html',
        modelCount: 0
    },
    {
        icon: '📱',
        title: 'FinTech Banks Report',
        description: 'A detailed research report analyzing the rise of FinTech banks, their operational models, and their disruption of the traditional banking sector.',
        tags: ['Research', 'FinTech', 'Business Strategy'],
        status: 'Completed',
        year: '2023',
        link: 'fintech-report.html',
        modelCount: 0
    },
    {
        icon: '📖',
        title: 'Academic Book Review',
        description: 'A comprehensive book review and critical analysis completed during my B.Com studies, exploring foundational business management principles.',
        tags: ['Academic', 'B.Com', 'Critical Analysis'],
        status: 'Completed',
        year: '2023',
        link: 'book-review.html',
        modelCount: 0
    },
    {
        icon: '📈',
        title: 'Business Analytics Dashboard',
        description: 'An interactive data visualization dashboard integrating Power BI and RScript to track, analyze, and present key business performance metrics.',
        tags: ['Power BI', 'RScript', 'Data Analytics'],
        status: 'Completed',
        year: '2026',
        link: null, /* ← UPDATED THIS LINE */
        modelCount: 1
    },
]

// ── INJECT PROJECT CARDS ──────────────────────────────────────
function renderProjects() {
    const grid = document.getElementById('projects-grid')
    grid.innerHTML = ''

    projects.forEach(p => {
        const statusColor = p.status === 'Completed'   ? '#00e599'
                          : p.status === 'In Progress' ? '#f0c040'
                          : '#606070'

        const tags   = p.tags.map(t => `<span class="tag">${t}</span>`).join('')
        const button = p.link
            ? `<a href="${p.link}" class="btn-primary" style="font-size:0.85rem; padding:8px 20px;">
                   View Details →
               </a>`
            : `<span style="font-size:0.82rem; color:var(--text-muted); font-style:italic;">
                   Report Available on Request
               </span>`

        grid.innerHTML += `
            <div class="project-card">
                <div class="project-icon">${p.icon}</div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tags">${tags}</div>
                <div class="project-footer">
                    <span style="color:${statusColor}; font-weight:600;">● ${p.status}</span>
                    <span>${p.year}</span>
                </div>
                <div style="margin-top:1.2rem;">
                    ${button}
                </div>
            </div>
        `
    })
}

// ── ANIMATE STATS COUNTER ─────────────────────────────────────
function animateCounter(id, target, duration = 1500) {
    const el = document.getElementById(id)
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
        current += step
        if (current >= target) {
            current = target
            clearInterval(timer)
        }
        el.textContent = Math.floor(current)
    }, 16)
}

// ── NAVBAR SCROLL EFFECT ──────────────────────────────────────
function initNavbar() {
    const navbar = document.getElementById('navbar')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)'
        } else {
            navbar.style.boxShadow = 'none'
        }
    })
}

// ── SMOOTH ACTIVE NAV LINKS ───────────────────────────────────
function initScrollSpy() {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav-links a')

    window.addEventListener('scroll', () => {
        let current = ''
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) {
                current = s.getAttribute('id')
            }
        })
        navLinks.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${current}`
                ? 'var(--accent)'
                : 'var(--text-secondary)'
        })
    })
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProjects()
    
    const totalProjects = projects.length;
    const totalModels = projects.reduce((sum, project) => sum + (project.modelCount || 0), 0);
    const uniqueToolsCount = new Set(projects.flatMap(p => p.tags)).size;

    animateCounter('stat-projects', totalProjects)
    animateCounter('stat-models', totalModels)
    animateCounter('stat-tools', uniqueToolsCount)
    
    initNavbar()
    initScrollSpy()
})