"use strict";

// Publications Data
const publicationsData = {
    "papers": [
        {
            "title": "MVCustom: Multi-View Customized Diffusion via Geometric Latent Rendering and Completion",
            "authors": "<strong>Minjung Shin</strong>, Hyunin Choi, Sooyeon Go, Jin-Hwa Kim, Youngjung Uh",
            "venue": "ICLR 2026",
            "url": "https://minjung-s.github.io/mvcustom",
            "paper_pdf": "https://arxiv.org/abs/2510.13702",
            "media": "/assets/publications/2026_ICLR/MVCustom.gif",
            "highlight": true
        },
        {
            "title": "ASemConsist: Adaptive Semantic Feature Control for Training-Free Identity-Consistent Generation",
            "authors": "Shin seong Kim*, <strong>Minjung Shin</strong>*, Hyunin Choi, Youngjung Uh",
            "venue": "Preprint",
            "url": "https://minjung-s.github.io/asemconsist",
            "paper_pdf": "https://arxiv.org/abs/2512.23245",
            "media": "/assets/publications/2025_arxiv_2/AsemConsist.png",
            "highlight": true
        },
        {
            "title": "Eye‑for‑an‑eye: Appearance Transfer with Semantic Correspondence in Diffusion Models",
            "authors": "Sooyeon Go, Kyungmook Choi, <strong>Minjung Shin</strong>, Youngjung Uh",
            "venue": "WACV 2026",
            "url": "https://sooyeon-go.github.io/eye_for_an_eye/",
            "paper_pdf": "https://arxiv.org/pdf/2406.07008",
            "media": "/assets/publications/2026_WACV/teaser.png",
            "highlight": false
        },
        {
            "title": "BallGAN: 3D-aware Image Synthesis with a Spherical Background",
            "authors": "<strong>Minjung Shin</strong>, Yunji Seo, Jeongmin Bae, Young Sun Choi, Hyunsu Kim, Hyeran Byun, Youngjung Uh",
            "venue": "ICCV 2023",
            "url": "https://minjung-s.github.io/ballgan",
            "paper_pdf": "https://arxiv.org/abs/2301.09091",
            "media": "/assets/publications/2023_ICCV/teaser.gif",
            "highlight": true
        },
        {
            "title": "Source-free Subject Adaptation for EEG-based Visual Recognition",
            "authors": "Pilhyeon Lee, Seogkyu Jeon, Sunhee Hwang, <strong>Minjung Shin</strong>, Hyeran Byun",
            "venue": "BCI 2023",
            "url": null,
            "paper_pdf": "https://arxiv.org/abs/2301.08448",
            "media": "/assets/publications/2023_BCI/teaser.png",
            "highlight": false
        },
        {
            "title": "Inter-subject contrastive learning for subject adaptive eeg-based visual recognition",
            "authors": "Pilhyeon Lee, Sunhee Hwang, Jewook Lee, <strong>Minjung Shin</strong>, Seogkyu Jeon, Hyeran Byun",
            "venue": "BCI 2022",
            "url": null,
            "paper_pdf": "https://arxiv.org/abs/2202.02901",
            "media": "/assets/publications/2022_BCI/teaser.png",
            "highlight": false
        },
        {
            "title": "Detectable Object-Sizes Range Estimation Based Multi-Task Cascaded Convolutional Neural Networks in the Vehicle Environments",
            "authors": "Whui Kim, Hyunkyun Choi, <strong>Minjung Shin</strong>",
            "venue": "VTC 2019-fall",
            "url": null,
            "paper_pdf": "https://ieeexplore.ieee.org/document/8890976",
            "media": "/assets/publications/2019_VTC/VTC2019.PNG",
            "highlight": false
        }
    ]
};

// Experience Data
const experienceData = {
    "experience": [
        {
            "company": "NAVER AI Lab",
            "title": "Research Scientist, Intern",
            "subtitle": "Generation Research",
            "time": "Dec 2022 – Jun 2023",
            "logo": "assets/experiences/NAVER.png",
            "logo_bg": "#ffffff"
        },
        {
            "company": "ETRI",
            "title": "Research Scientist, Intern",
            "subtitle": "AI Research Lab",
            "time": "Jan 2019 – Feb 2019",
            "logo": "assets/experiences/ETRI.png",
            "logo_bg": "#ffffff"
        }
    ],
    "education": [
        {
            "company": "Yonsei University",
            "title": "Ph.D. Student",
            "subtitle": "Artificial Intelligence<br>Under the supervision of Prof. Youngjung Uh.",
            "time": "Mar 2021 – now",
            "logo": "https://www.yonsei.ac.kr/_res/sc/img/intro/img_symbol9.png",
            "logo_bg": "#ffffff"
        },
        {
            "company": "Kwangwoon University",
            "title": "B.S. Student",
            "subtitle": "Electronics and Communications Engineering",
            "time": "2016 - 2021",
            "logo": "https://www.kw.ac.kr/ko/img/symbol01.png",
            "logo_bg": "#ffffff"
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    initTheme();
    displayExperience(experienceData.experience, 'timeline-experience');
    displayPublications(publicationsData.papers);
    initSectionNav();
});

/**
 * Theme Management
 */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            // Update profile image if you have different versions for dark/light mode
            // profileImage.src = theme === 'dark' ? 'assets/img/profile_dark.jpg' : 'assets/img/profile.jpg';
        }

        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme || systemTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

/**
 * Publications Logic
 */
let publications = publicationsData.papers;
let debounceTimer;

function toggleAbstract(index) {
    const card = document.getElementById(`publication-${index}`);
    const abstractContent = document.getElementById(`abstract-${index}`);
    
    if (!card || !abstractContent) return;

    const isExpanded = card.classList.contains("expanded");
    card.classList.toggle("expanded");
    
    // Animate height
    abstractContent.style.maxHeight = isExpanded ? "0" : `${abstractContent.scrollHeight}px`;
    
    const chevronIcon = card.querySelector(".fa-chevron-down");
    if (chevronIcon) chevronIcon.classList.toggle("rotate-180");
}

function createMediaElement(paper) {
    if (paper.media && paper.media.trim() !== "") {
        // Check if it's a video (excluding gif which should be treated as image)
        const isVideo = paper.media.match(/\.(mp4|webm|mov|avi|mkv)$/);
        const className = isVideo ? "video-media lazy-video" : "image-media lazy-image";
        const tag = isVideo ? "video" : "img";
        const extraAttrs = isVideo ? 'muted playsinline loop preload="none"' : '';
        const alt = isVideo ? '' : `alt="${paper.title} Preview"`;

        return `<${tag} class="${className}" data-src="${paper.media}" ${extraAttrs} ${alt} onerror="this.style.display='none'"></${tag}>`;
    }

    return `
        <div class="media-placeholder">
            <div class="media-placeholder-icon-container">
                <i class="fas fa-image media-icon" aria-hidden="true"></i>
            </div>
        </div>
    `;
}

function displayPublications(papers) {
    const container = document.getElementById("publications-container");
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
    
    papers.forEach((paper, index) => {
        const mediaContent = createMediaElement(paper);
        const authorsHtml = paper.authors;
        
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-12';
        
        const cardClass = `card publication-card publication-card-custom ${paper.abstract ? "pointer" : ""}`;
        const onClickAttr = paper.abstract ? `onclick="toggleAbstract(${index})"` : "";
        
        // Build links section
        let linksHtml = '';
        if (paper.url || paper.paper_pdf) {
            linksHtml = '<div class="mt-2 d-flex gap-2 flex-wrap">';
            if (paper.url) {
                linksHtml += `<a href="${paper.url}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                               <i class="fas fa-external-link-alt"></i>Project Page
                             </a>`;
            }
            if (paper.paper_pdf) {
                // Use arXiv icon for arXiv links, document icon for others
                const isArxiv = paper.paper_pdf.includes('arxiv.org');
                const icon = isArxiv ? '<i class="ai ai-arxiv"></i>' : '<i class="fas fa-file-alt"></i>';
                linksHtml += `<a href="${paper.paper_pdf}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                               ${icon}Paper
                             </a>`;
            }
            linksHtml += '</div>';
        }
        const projectLink = linksHtml;
            
        const abstractSection = paper.abstract
            ? `<div class="abstract-content" id="abstract-${index}">
                 <p class="mt-2 small">${paper.abstract}</p>
               </div>
               <div class="text-center mt-2 abstract-toggle">
                 <i class="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i>
               </div>`
            : "";

        // Always show venue badge, including for Preprint
        const venueBadge = `<span class="venue-badge">${paper.venue}</span>`;

        // Apply highlight style if highlight is true
        const titleStyle = paper.highlight ? ' style="color:rgb(67, 146, 207);"' : '';

        colDiv.innerHTML = `
        <div class="${cardClass}" id="publication-${index}" ${onClickAttr}>
            <div class="row g-0 align-items-stretch" style="min-height:0;">
                <div class="col-md-3 d-flex align-items-stretch justify-content-center" style="padding:0;">
                    <div class="media-container-custom">
                        ${mediaContent}
                    </div>
                </div>
                <div class="col-md-9 d-flex align-items-center" style="padding:0;">
                    <div class="publication-body-custom">
                        ${venueBadge}
                        <h5 class="mb-1"${titleStyle}>${paper.title}</h5>
                        <p class="mb-0 small">${authorsHtml}</p>
                        ${projectLink}
                        ${abstractSection}
                    </div>
                </div>
            </div>
        </div>`;
        
        fragment.appendChild(colDiv);
    });
    
    container.appendChild(fragment);
    initLazyLoading();
}

function filterPublications() {
    const searchInput = document.getElementById("publicationSearch");
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPapers = publications.filter((paper) =>
        paper.title.toLowerCase().includes(searchTerm) ||
        paper.authors.toLowerCase().includes(searchTerm) ||
        paper.venue.toLowerCase().includes(searchTerm) ||
        (paper.abstract && paper.abstract.toLowerCase().includes(searchTerm))
    );
    displayPublications(filteredPapers);
}

// Make accessible globally for the input oninput
window.debouncedFilterPublications = function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterPublications, 300);
};

// Make accessible globally for onclick
window.toggleAbstract = toggleAbstract;

/**
 * Lazy Loading
 */
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.tagName === 'IMG') {
                    element.src = element.dataset.src;
                    element.classList.remove('lazy-image');
                } else if (element.tagName === 'VIDEO') {
                    element.src = element.dataset.src;
                    element.load();
                    // Only autoplay videos that are in viewport
                    element.play().catch(() => {});
                    element.classList.remove('lazy-video');
                }
                observer.unobserve(element);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    document.querySelectorAll('.lazy-image, .lazy-video').forEach(element => {
        imageObserver.observe(element);
    });
}

/**
 * Experience Section Logic
 */
function displayExperience(experience, timelineId = "timeline") {
    const timeline = document.getElementById(timelineId);
    if (!timeline) return;
    timeline.innerHTML = "";
    const fragment = document.createDocumentFragment();
    
    for (let i = experience.length - 1; i >= 0; i--) {
        const item = experience[i];
        const div = document.createElement('div');
        div.className = 'timeline-item';
        
        const bgStyle = item.logo_bg ? `style="background-color: ${item.logo_bg}"` : '';
        const onloadAttr = item.logo_bg ? '' : 'onload="adjustLogoBackground(this)"';

        const subtitleHtml = item.subtitle ? `<p class="mb-1 text-gray-600 small">${item.subtitle}</p>` : '';
        
        div.innerHTML = `
            <div class="d-flex align-items-center w-100">
                <div class="experience-logo-container me-3" ${bgStyle}>
                    <img src="${item.logo}" alt="${item.company}" class="experience-logo" crossorigin="anonymous" ${onloadAttr}>
                </div>
                <div>
                    <h4 class="mb-1">${item.company}</h4>
                    <p class="mb-1">${item.title}</p>
                    ${subtitleHtml}
                    <p class="time-range mb-0">${item.time}</p>
                </div>
            </div>
        `;
        fragment.insertBefore(div, fragment.firstChild);
    }
    timeline.appendChild(fragment);
    
    // Scroll to end of timeline
    requestAnimationFrame(() => {
        const container = document.querySelector(".timeline-container");
        if (container) {
            container.scrollLeft = container.scrollWidth;
        }
    });
}

// Global exposure for onload attribute
window.adjustLogoBackground = function(img) {
    if (!img.complete || img.naturalWidth === 0) return;

    try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let totalLuminance = 0;
        let pixelCount = 0;

        // Sample every 40th pixel to save performance
        for (let i = 0; i < data.length; i += 40) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            // Consider only pixels that are opaque enough
            if (a > 20) {
                // Perceived luminance: 0.299R + 0.587G + 0.114B
                const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
                totalLuminance += luminance;
                pixelCount++;
            }
        }

        if (pixelCount > 0) {
            const avgLuminance = totalLuminance / pixelCount;
            // Threshold: if average luminance > 200 (mostly white/light), switch to dark bg
            if (avgLuminance > 200) {
                img.parentElement.style.backgroundColor = '#1d1d1f';
            }
        }
    } catch (e) {
        console.warn('Could not analyze image for background adjustment:', e);
    }
};

/**
 * Section Navigation Logic
 */
function initSectionNav() {
    const navCurrent = document.getElementById('nav-current');
    const navList = document.getElementById('nav-list');
    const currentSectionName = document.getElementById('current-section-name');
    const sections = document.querySelectorAll('section');
    
    if (!navCurrent || !navList || !currentSectionName || sections.length === 0) return;

    // Populate list
    sections.forEach(section => {
        const id = section.id;
        // Use h1 for Home section if no h2, or default to ID
        let name = '';
        const h2 = section.querySelector('h2');
        if (h2) {
            name = h2.innerText;
        } else if (id === 'home') {
            name = 'Home';
        } else {
            name = id.charAt(0).toUpperCase() + id.slice(1);
        }
        
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.innerText = name;
        li.dataset.target = id;
        
        li.addEventListener('click', () => {
            const target = document.getElementById(id);
            if (target) {
                // Offset for fixed header if any (minimal here)
                const offset = 20; 
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            navList.classList.remove('show');
            navCurrent.classList.remove('active');
        });
        
        navList.appendChild(li);
    });
    
    // Toggle menu
    navCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        navList.classList.toggle('show');
        navCurrent.classList.toggle('active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!navCurrent.contains(e.target) && !navList.contains(e.target)) {
            navList.classList.remove('show');
            navCurrent.classList.remove('active');
        }
    });
    
    // Scroll spy
    const observerOptions = {
        root: null,
        // Trigger when section touches the top part of the screen (15% from top)
        rootMargin: '-15% 0px -85% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                // Update text
                let name = '';
                const h2 = entry.target.querySelector('h2');
                if (h2) {
                    name = h2.innerText;
                } else if (id === 'home') {
                    name = 'Home';
                } else {
                    name = id.charAt(0).toUpperCase() + id.slice(1);
                }
                
                currentSectionName.innerText = name;
                
                // Update list active state
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item.dataset.target === id) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}
