const fs = require('fs');

let content = fs.readFileSync('nashville.html', 'utf8');

// 1. Replace Hero Section
const newHero = `
        <section id="home" class="local-hero-section">
            <div class="container">
                <h1 class="local-hero-title">
                    Nashville's Premier <span class="highlight-green">Exterior Cleaning.</span>
                </h1>
                <p class="local-hero-desc">
                    From the historic homes in East Nashville to modern estates in Green Hills, we keep Music City properties pristine with expert gutter cleaning, upholstery sanitization, and driveway pressure washing.
                </p>
                <a href="#contact" class="btn btn-primary btn-arrow" style="font-size: 1.1rem; padding: 14px 32px;">
                    Get Free Nashville Quote
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                
                <div class="local-hero-stats">
                    <div class="local-stat-item">
                        <span class="local-stat-number">100%</span>
                        <span class="local-stat-label">Local to TN</span>
                    </div>
                    <div class="local-stat-item">
                        <span class="local-stat-number">Eco-Safe</span>
                        <span class="local-stat-label">Cleaning Solutions</span>
                    </div>
                    <div class="local-stat-item">
                        <span class="local-stat-number">Fast</span>
                        <span class="local-stat-label">Turnaround</span>
                    </div>
                </div>
            </div>
        </section>
`;

content = content.replace(/<section id="home" class="hero-section">[\s\S]*?<\/section>/i, newHero);

// 2. Remove "Service Areas" Section
content = content.replace(/<!-- Service Areas Section -->[\s\S]*?<section id="service-areas" class="service-areas-section py-large bg-white">[\s\S]*?<\/section>/i, '<!-- Service Areas Removed for Local Page -->');

// 3. Remove "Before/After Slider" to simplify
content = content.replace(/<!-- Interactive Before\/After Slider -->[\s\S]*?<section id="before-after" class="before-after-section py-large bg-dark">[\s\S]*?<\/section>/i, '<!-- Showcase Removed for Local Page -->');

// 4. Update the Stats Section background so it doesn't clash
content = content.replace(/<section class="stats-bottom-bar bg-primary text-white py-medium">/i, '<section class="stats-bottom-bar text-white py-medium" style="background-color: var(--secondary);">');

fs.writeFileSync('nashville.html', content);
console.log('nashville.html redesigned!');
