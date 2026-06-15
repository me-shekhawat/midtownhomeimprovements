const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const headSection = indexHtml.split('<main>')[0];
const footerSection = indexHtml.split('</main>')[1];

const schema = `<!-- FAQ Schema for AEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does gutter cleaning cost in Nashville, TN?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Nashville, residential gutter cleaning typically ranges from $99 to $250. The final price depends on the square footage of your property, the steepness of the roof, and whether you have a single-story home in East Nashville or a massive two-story estate in Green Hills. We offer transparent, upfront pricing with zero hidden fees."
          }
        },
        {
          "@type": "Question",
          "name": "Do you clean gutters and pressure wash in East Nashville and Green Hills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we proudly serve all major neighborhoods within Davidson County. This includes East Nashville, Green Hills, Belle Meade, Donelson, Hermitage, and Madison. Our local technicians are familiar with the unique maintenance needs of Nashville's diverse architectural styles, from historic brick builds to modern developments."
          }
        },
        {
          "@type": "Question",
          "name": "Is your pressure washing safe for older Nashville historic homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. For older or historic homes in the Nashville area, traditional high-pressure washing can damage mortar and aged siding. We utilize a highly effective 'soft wash' technique. This method uses low-pressure water combined with eco-friendly, biodegradable cleaning solutions to safely melt away algae, dirt, and mildew without risking structural damage."
          }
        }
      ]
    }
    </script>`;

let finalHead = headSection;
finalHead = finalHead.replace(/<title>[\s\S]*?<\/title>/i, `<title>Top-Rated Exterior Cleaning in Nashville, TN | Gutter & Driveway Pros</title>`);
finalHead = finalHead.replace(/<meta name="description" content="[\s\S]*?">/i, `<meta name="description" content="Lollie's provides expert gutter cleaning, soft washing, and driveway pressure washing in Nashville and Davidson County. We protect Music City homes from mold and algae. Get a free quote!">`);
finalHead = finalHead.replace(/<!-- FAQ Schema for AEO -->[\s\S]*?<\/head>/i, `${schema}\n    <link rel="stylesheet" href="local-pages.css?v=2.9">\n</head>`);


const newMain = `<main>
        <!-- Custom Local Hero -->
        <section class="local-hero-full" style="background-image: url('assets/images/nashville_hero.png');">
            <div class="local-hero-overlay"></div>
            <div class="local-hero-content">
                <h1 class="local-hero-title">
                    Nashville's Premier <span class="highlight-green">Exterior Cleaning.</span>
                </h1>
                <p class="local-hero-subtitle">
                    Protecting Music City from the elements. From historic homes in East Nashville to modern luxury estates in Green Hills, we provide top-tier gutter cleaning, driveway pressure washing, and upholstery sanitization across Davidson County.
                </p>
                <div class="local-hero-buttons">
                    <a href="#contact" class="btn btn-primary btn-arrow">Get a Free Nashville Quote
                        <svg class="arrow-icon" style="width:20px;height:20px;margin-left:8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- Trust Bar -->
        <div class="trust-bar">
            <div class="trust-bar-container">
                <div class="trust-item">
                    <svg viewBox="0 0 24 24" class="trust-icon" style="width:28px;height:28px" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    100% Local to TN
                </div>
                <div class="trust-item">
                    <svg viewBox="0 0 24 24" class="trust-icon" style="width:28px;height:28px" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Serving Davidson County
                </div>
                <div class="trust-item">
                    <svg viewBox="0 0 24 24" class="trust-icon" style="width:28px;height:28px" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    Affordable Pricing
                </div>
            </div>
        </div>

        <!-- NEW SEO SECTION: The Nashville Climate & Home Protection (PREMIUM LAYOUT) -->
        <section class="py-large" style="background: linear-gradient(135deg, var(--light) 0%, var(--white) 100%);">
            <div class="container">
                <div class="grid grid-2" style="align-items: center; gap: 60px;">
                    <div>
                        <span class="section-tag">Middle Tennessee Climate</span>
                        <h2 class="section-title" style="text-align: left;">Protecting Nashville Homes from Humidity & Mold</h2>
                        <p style="font-size: 1.15rem; color: var(--gray); line-height: 1.8; margin-bottom: 20px; text-align: left;">
                            Living in Nashville means experiencing hot, highly humid summers and rainy springs. This specific Middle Tennessee climate creates the perfect breeding ground for <strong>green algae, black mold, and mildew</strong> to rapidly grow on your home's exterior siding, roof, and driveway. Not only does this destroy your property's curb appeal, but if left untreated, organic growth can eat away at paint, rot wood fascia boards, and cause thousands of dollars in structural damage.
                        </p>
                    </div>
                    <div style="background: var(--white); padding: 40px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                        <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 32px;">
                            <div style="background: rgba(122,193,67,0.1); color: var(--secondary); padding: 16px; border-radius: 50%;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <div>
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--dark); margin-bottom: 8px;">Damage Prevention</h4>
                                <p style="color: var(--gray); line-height: 1.6; font-size: 1.05rem; margin: 0;">We specialize in combating Nashville's harsh elements. Whether clearing heavy autumn leaves from mature oaks clogging gutters in Belle Meade, or deep-cleaning concrete.</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 20px;">
                            <div style="background: rgba(30,58,138,0.1); color: var(--primary); padding: 16px; border-radius: 50%;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <div>
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--dark); margin-bottom: 8px;">Safe Soft-Washing</h4>
                                <p style="color: var(--gray); line-height: 1.6; font-size: 1.05rem; margin: 0;">Using our specialized <strong>low-pressure soft wash</strong> system to safely remove years of grime from historic brick homes in East Nashville, ensuring your property stays immaculate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- NEW PREMIUM ZIG-ZAG SERVICES LAYOUT -->
        <section id="services" class="zig-zag-section bg-light">
            <div class="container">
                <div class="text-center mb-large">
                    <span class="section-tag">Nashville Exterior Services</span>
                    <h2 class="section-title">Comprehensive Property Care</h2>
                    <p style="max-width: 700px; margin: 0 auto; color: var(--gray); font-size: 1.15rem; line-height: 1.6;">We offer a full suite of exterior and interior cleaning services designed specifically for the needs of Nashville homeowners and property managers.</p>
                </div>

                <!-- Zig Zag Row 1 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_gutter.png" alt="Professional Gutter Cleaning Nashville">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
                        </div>
                        <h3 class="zig-zag-title">Professional Gutter Cleaning</h3>
                        <p class="zig-zag-desc">Nashville's heavy spring rains and autumn leaf drops can quickly overwhelm your drainage system. We safely remove sludge, leaves, and debris from your gutters and downspouts, ensuring proper water flow. This critical maintenance prevents water from pooling around your foundation, which can lead to flooded basements and expensive structural repairs.</p>
                        <a href="#contact" class="btn btn-secondary">Get a Gutter Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 2 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_driveway.png" alt="Driveway & Patio Washing Nashville">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        </div>
                        <h3 class="zig-zag-title">Driveway & Patio Washing</h3>
                        <p class="zig-zag-desc">Over time, concrete driveways and patios in Davidson County accumulate deep oil stains, tire marks, and slippery green algae. Using commercial-grade surface cleaners and high-pressure washing, we strip away years of embedded grime, instantly boosting your property's curb appeal and eliminating slip hazards for your family.</p>
                        <a href="#contact" class="btn btn-secondary">Get a Washing Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 3 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_upholstery.png" alt="Couch & Upholstery Cleaning Nashville">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3 class="zig-zag-title">Couch & Upholstery Deep Cleaning</h3>
                        <p class="zig-zag-desc">We don't just clean the outside. Our advanced deep-water extraction process for couches, sofas, and living room upholstery pulls out trapped pet dander, tough stains, and odor-causing bacteria. Enjoy a fresher, healthier indoor environment right in the comfort of your Nashville home.</p>
                        <a href="#contact" class="btn btn-secondary">Get an Upholstery Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 4 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_window.png" alt="Window Cleaning Nashville">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3 class="zig-zag-title">Streak-Free Window Cleaning</h3>
                        <p class="zig-zag-desc">Give your home a brighter feel. Our interior and exterior window cleaning leaves every single pane streak-free, spotless, and crystal clear. We use professional-grade squeegees and eco-safe solutions to remove hard water stains and dirt, allowing maximum natural Tennessee sunlight into your living spaces.</p>
                        <a href="#contact" class="btn btn-secondary">Get a Window Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 5 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_inspection.png" alt="Gutter Inspection Nashville">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                        </div>
                        <h3 class="zig-zag-title">Gutter Inspection & Maintenance</h3>
                        <p class="zig-zag-desc">Not sure if your gutters need cleaning or repairs? We offer thorough inspections to check for sagging sections, separated seams, and clogs. Preventative maintenance is the key to extending the life of your roofing and fascia boards during Nashville's unpredictable weather seasons.</p>
                        <a href="#contact" class="btn btn-secondary">Schedule an Inspection</a>
                    </div>
                </div>

                <!-- Zig Zag Row 6 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_screen.png" alt="Screen Cleaning Nashville">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>
                        </div>
                        <h3 class="zig-zag-title">Professional Screen Cleaning</h3>
                        <p class="zig-zag-desc">Window screens act as a filter, trapping pollen, dust, and dirt from entering your home. We carefully remove and wash your window screens using gentle but highly effective methods. This not only improves your air quality when you open your windows but also ensures your clear view isn't obstructed by grime.</p>
                        <a href="#contact" class="btn btn-secondary">Get a Screen Quote</a>
                    </div>
                </div>

            </div>
        </section>

        <!-- NEW SEO SECTION: Neighborhoods We Serve (PREMIUM DARK LAYOUT) -->
        <section class="py-large" style="background: var(--dark); color: var(--white); text-align: center; border-radius: 40px; margin: 80px auto; max-width: 95%; padding: 80px 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.2);">
            <div class="container">
                <span class="section-tag" style="background: rgba(255,255,255,0.1); color: var(--secondary);">Local Coverage</span>
                <h2 class="section-title text-white" style="margin-bottom: 24px;">Proudly Serving All of Nashville & Davidson County</h2>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.15rem; line-height: 1.7; max-width: 800px; margin: 0 auto 48px;">
                    Whether you need emergency gutter clearing, driveway power washing, or delicate soft-washing for a historic estate, our local crews are ready to dispatch across the metro area.
                </p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; max-width: 1000px; margin: 0 auto;">
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 East Nashville</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Green Hills</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Belle Meade</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Donelson</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Hermitage</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Madison</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Antioch</span>
                    <span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 Downtown Nashville</span>
                </div>
            </div>
        </section>

        <!-- Local FAQ (Expanded) -->
        <section id="faq" class="faq-section py-large bg-light">
            <div class="container max-w-700">
                <div class="text-center mb-large">
                    <span class="section-tag">Nashville FAQs</span>
                    <h2 class="section-title">Common Questions from <span class="highlight-green">Local Homeowners</span></h2>
                </div>
                <div class="faq-accordion">
                    <div class="faq-item">
                        <button class="faq-question">
                            <span>How much does gutter cleaning cost in Nashville, TN?</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>
                        </button>
                        <div class="faq-answer">
                            <p>In Nashville, residential gutter cleaning typically ranges from $99 to $250. The final price depends on the square footage of your property, the steepness of the roof, and whether you have a single-story home in East Nashville or a massive two-story estate in Green Hills. We offer transparent, upfront pricing with zero hidden fees.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">
                            <span>Do you clean gutters and pressure wash in East Nashville and Green Hills?</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>
                        </button>
                        <div class="faq-answer">
                            <p>Yes, we proudly serve all major neighborhoods within Davidson County. This includes East Nashville, Green Hills, Belle Meade, Donelson, Hermitage, and Madison. Our local technicians are familiar with the unique maintenance needs of Nashville's diverse architectural styles, from historic brick builds to modern developments.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <button class="faq-question">
                            <span>Is your pressure washing safe for older Nashville historic homes?</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>
                        </button>
                        <div class="faq-answer">
                            <p>Absolutely. For older or historic homes in the Nashville area, traditional high-pressure washing can damage mortar and aged siding. We utilize a highly effective 'soft wash' technique. This method uses low-pressure water combined with eco-friendly, biodegradable cleaning solutions to safely melt away algae, dirt, and mildew without risking structural damage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Extracted Contact Section from Homepage -->
        ${indexHtml.match(/<!-- Contact Section \/ Lead Form -->[\s\S]*?<\/section>/)[0]}
    </main>`;

fs.writeFileSync('nashville.html', finalHead + newMain + footerSection);
console.log('Heavy SEO content + ZIG ZAG LAYOUT injected into nashville.html');
