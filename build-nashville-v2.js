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
finalHead = finalHead.replace(/<!-- FAQ Schema for AEO -->[\s\S]*?<\/head>/i, `${schema}\n    <link rel="stylesheet" href="local-pages.css?v=2.7">\n</head>`);


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

        <!-- NEW SEO SECTION: The Nashville Climate & Home Protection -->
        <section class="py-large bg-white">
            <div class="container max-w-900 text-center">
                <span class="section-tag">Middle Tennessee Climate</span>
                <h2 class="section-title">Protecting Nashville Homes from Humidity & Mold</h2>
                <p style="font-size: 1.15rem; color: var(--gray); line-height: 1.8; margin-bottom: 20px; text-align: left;">
                    Living in Nashville means experiencing hot, highly humid summers and rainy springs. This specific Middle Tennessee climate creates the perfect breeding ground for <strong>green algae, black mold, and mildew</strong> to rapidly grow on your home's exterior siding, roof, and driveway. Not only does this destroy your property's curb appeal, but if left untreated, organic growth can eat away at paint, rot wood fascia boards, and cause thousands of dollars in structural damage.
                </p>
                <p style="font-size: 1.15rem; color: var(--gray); line-height: 1.8; text-align: left;">
                    At Lollie's Exterior Cleaning Services, we specialize in combating Nashville's harsh environmental elements. Whether it's clearing out heavy autumn leaves from mature oak trees clogging your gutters in Belle Meade, or using our specialized <strong>low-pressure soft wash</strong> system to safely remove years of grime from historic brick homes in East Nashville, our localized expertise ensures your property stays immaculate and structurally sound year-round.
                </p>
            </div>
        </section>

        <!-- Why Choose Us in Nashville -->
        <section class="local-why-us">
            <div class="container why-grid">
                <div class="why-image-wrapper">
                    <img src="assets/images/nashville_hero.png" alt="Nashville Property Pressure Washing" style="max-width: 100%; border-radius: 20px; box-shadow: 0 15px 30px rgba(0,0,0,0.1);">
                </div>
                <div class="why-content">
                    <span class="section-tag">Local Expertise</span>
                    <h2>Why Davidson County Trusts Lollie's</h2>
                    <p>
                        Nashville's diverse neighborhoods require a cleaning company that truly understands local architecture. You wouldn't treat a 100-year-old historic home the same way you'd treat a newly poured concrete driveway. Our certified technicians use the exact right combination of pressure and environmentally-safe detergents to guarantee a perfect clean every time.
                    </p>
                    <ul class="why-list">
                        <li><svg viewBox="0 0 24 24" style="width:24px;height:24px; margin-right: 8px;" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Eco-Friendly Solutions:</strong> Safe for your pets, lawn, and Tennessee waterways.</li>
                        <li><svg viewBox="0 0 24 24" style="width:24px;height:24px; margin-right: 8px;" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Fully Licensed & Insured:</strong> Total peace of mind for residential and commercial properties.</li>
                        <li><svg viewBox="0 0 24 24" style="width:24px;height:24px; margin-right: 8px;" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Damage-Free Guarantee:</strong> We utilize soft-washing for delicate surfaces to prevent etching.</li>
                    </ul>
                    <a href="#contact" class="btn btn-secondary mt-small">Get a Free Evaluation</a>
                </div>
            </div>
        </section>

        <!-- Expanded 6 Card Grid with SEO text for ALL Services -->
        <section id="services" class="local-services-section">
            <div class="container">
                <span class="section-tag">Nashville Exterior Services</span>
                <h2 class="section-title">Comprehensive Property Care</h2>
                <p style="max-width: 700px; margin: 0 auto 48px; color: var(--gray); font-size: 1.1rem; line-height: 1.6;">We offer a full suite of exterior and interior cleaning services designed specifically for the needs of Nashville homeowners and property managers.</p>
                
                <div class="local-services-grid">
                    <!-- Service 1: Gutter Cleaning -->
                    <div class="local-service-card">
                        <div class="local-service-icon">
                            <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
                        </div>
                        <h3 class="local-service-title">Professional Gutter Cleaning</h3>
                        <p class="local-service-desc">Nashville's heavy spring rains and autumn leaf drops can quickly overwhelm your drainage system. We safely remove sludge, leaves, and debris from your gutters and downspouts, ensuring proper water flow. This critical maintenance prevents water from pooling around your foundation, which can lead to flooded basements and expensive structural repairs.</p>
                    </div>

                    <!-- Service 2: Driveway Washing -->
                    <div class="local-service-card">
                        <div class="local-service-icon">
                            <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        </div>
                        <h3 class="local-service-title">Driveway & Patio Washing</h3>
                        <p class="local-service-desc">Over time, concrete driveways and patios in Davidson County accumulate deep oil stains, tire marks, and slippery green algae. Using commercial-grade surface cleaners and high-pressure washing, we strip away years of embedded grime, instantly boosting your property's curb appeal and eliminating slip hazards for your family.</p>
                    </div>

                    <!-- Service 3: Upholstery Cleaning -->
                    <div class="local-service-card">
                        <div class="local-service-icon">
                            <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3 class="local-service-title">Couch & Upholstery Cleaning</h3>
                        <p class="local-service-desc">We don't just clean the outside. Our advanced deep-water extraction process for couches, sofas, and living room upholstery pulls out trapped pet dander, tough stains, and odor-causing bacteria. Enjoy a fresher, healthier indoor environment right in the comfort of your Nashville home.</p>
                    </div>

                    <!-- Service 4: Window Cleaning -->
                    <div class="local-service-card">
                        <div class="local-service-icon">
                            <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3 class="local-service-title">Streak-Free Window Cleaning</h3>
                        <p class="local-service-desc">Give your home a brighter feel. Our interior and exterior window cleaning leaves every single pane streak-free, spotless, and crystal clear. We use professional-grade squeegees and eco-safe solutions to remove hard water stains and dirt, allowing maximum natural Tennessee sunlight into your living spaces.</p>
                    </div>

                    <!-- Service 5: Gutter Inspection -->
                    <div class="local-service-card">
                        <div class="local-service-icon">
                            <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                        </div>
                        <h3 class="local-service-title">Gutter Inspection & Maintenance</h3>
                        <p class="local-service-desc">Not sure if your gutters need cleaning or repairs? We offer thorough inspections to check for sagging sections, separated seams, and clogs. Preventative maintenance is the key to extending the life of your roofing and fascia boards during Nashville's unpredictable weather seasons.</p>
                    </div>

                    <!-- Service 6: Screen Cleaning -->
                    <div class="local-service-card">
                        <div class="local-service-icon">
                            <svg viewBox="0 0 24 24" style="width:32px;height:32px" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>
                        </div>
                        <h3 class="local-service-title">Professional Screen Cleaning</h3>
                        <p class="local-service-desc">Window screens act as a filter, trapping pollen, dust, and dirt from entering your home. We carefully remove and wash your window screens using gentle but highly effective methods. This not only improves your air quality when you open your windows but also ensures your clear view isn't obstructed by grime.</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- NEW SEO SECTION: Neighborhoods We Serve -->
        <section class="py-medium bg-white" style="border-top: 1px solid var(--border);">
            <div class="container text-center">
                <h3 style="font-size: 1.5rem; color: var(--dark); margin-bottom: 16px;">Proudly Serving All of Nashville & Davidson County</h3>
                <p style="color: var(--gray); font-size: 1.05rem; line-height: 1.6; max-width: 800px; margin: 0 auto;">
                    Whether you need emergency gutter clearing in <strong>East Nashville</strong>, driveway power washing in <strong>Green Hills</strong>, or delicate soft-washing for an estate in <strong>Belle Meade</strong>, our crews are local and ready to dispatch. We regularly service homes in Donelson, Hermitage, Madison, Antioch, and the greater downtown Nashville metropolitan area.
                </p>
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
console.log('Heavy SEO content + ALL 6 SERVICES injected into nashville.html');
