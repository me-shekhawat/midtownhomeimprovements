const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const headSection = indexHtml.split('<main>')[0];
const footerSection = indexHtml.split('</main>')[1];
const contactSection = indexHtml.match(/<!-- Contact Section \/ Lead Form -->[\s\S]*?<\/section>/)[0];

const cities = [
    {
        filename: 'franklin.html',
        cityName: 'Franklin',
        county: 'Williamson County',
        imageName: 'franklin_hero.png',
        metaTitle: "Premium Exterior Cleaning in Franklin, TN | Gutter & Driveway Pros",
        metaDesc: "Protect your historic Franklin home with Lollie's expert soft-washing, gutter cleaning, and driveway pressure washing in Williamson County. Get a free quote!",
        faqs: [
            { q: "How do you clean historic brick homes in Franklin, TN?", a: "We use a specialized soft-wash system that utilizes low pressure and eco-friendly detergents to melt away algae and mold without damaging aged mortar or delicate brick on historic Franklin properties." },
            { q: "Do you offer driveway pressure washing in Williamson County?", a: "Yes, we provide commercial-grade driveway and patio pressure washing across all of Williamson County, removing deep oil stains and tire marks safely." },
            { q: "How often should gutters be cleaned in Franklin?", a: "Given the mature trees in Franklin's older neighborhoods, we recommend professional gutter cleaning at least twice a year—once in late spring and once after the autumn leaf drop." }
        ],
        heroSubtitle: "Preserving the beauty of Williamson County. From historic downtown properties to luxurious new builds, we provide top-tier soft-washing, gutter cleaning, and upholstery sanitization across Franklin.",
        climateHeading: "Defending Franklin Homes from Southern Humidity",
        climateDesc: "Living in Franklin means experiencing the dense humidity of the South. This specific climate creates the perfect breeding ground for <strong>green algae and black mold</strong> to grow on your home's exterior siding, brick, and driveway. Not only does this destroy your property's historic charm, but if left untreated, organic growth can eat away at paint and rot wood fascia boards.",
        damagePrev: "We specialize in combating Williamson County's harsh elements. Whether clearing heavy autumn leaves from mature oaks or deep-cleaning concrete driveways.",
        softWash: "Using our specialized <strong>low-pressure soft wash</strong> system to safely remove years of grime from delicate historic homes in downtown Franklin, ensuring your property stays immaculate.",
        whyDesc: "Franklin's historic charm requires a cleaning company that truly understands delicate architecture. You wouldn't treat a 100-year-old historic home the same way you'd treat a newly poured concrete driveway. Our certified technicians use the exact right combination of pressure and environmentally-safe detergents.",
        neighborhoods: ["Downtown Franklin", "Cool Springs", "Fieldstone Farms", "Westhaven", "McKay's Mill", "Leiper's Fork", "Grassland"]
    },
    {
        filename: 'murfreesboro.html',
        cityName: 'Murfreesboro',
        county: 'Rutherford County',
        imageName: 'murfreesboro_hero.png',
        metaTitle: "Expert Pressure Washing & Gutter Cleaning in Murfreesboro, TN",
        metaDesc: "Lollie's provides top-rated exterior cleaning, upholstery sanitization, and pressure washing services in Murfreesboro and Rutherford County.",
        faqs: [
            { q: "What is the cost of pressure washing a driveway in Murfreesboro?", a: "Driveway pressure washing in Murfreesboro typically starts around $150, depending on the square footage and severity of oil stains or algae buildup." },
            { q: "Can you remove green algae from my siding in Rutherford County?", a: "Yes! Our soft-washing technique effectively kills and removes green algae, mold, and mildew from vinyl, brick, and stucco siding without high pressure." },
            { q: "Do you provide interior couch cleaning in Murfreesboro?", a: "Absolutely. We offer deep-water extraction for couches, sofas, and upholstery right in your living room to remove pet dander and stains." }
        ],
        heroSubtitle: "Keeping Rutherford County spotless. We provide fast, reliable, and eco-friendly gutter cleaning, driveway pressure washing, and window cleaning to homes across Murfreesboro.",
        climateHeading: "Protecting Murfreesboro from Mold & Mildew",
        climateDesc: "Murfreesboro's rapidly growing neighborhoods are constantly exposed to Middle Tennessee's high humidity and spring storms. This weather combo causes rapid growth of <strong>mold, mildew, and algae</strong> on concrete patios and home siding. Beyond being an eyesore, these contaminants can cause permanent etching on concrete and rot on wooden decks.",
        damagePrev: "We prevent costly repairs in Rutherford County by regularly clearing clogged gutters that can lead to flooded basements and foundation damage.",
        softWash: "We apply safe, eco-friendly biocides through our soft-washing equipment to instantly kill mold spores at their root, keeping your Murfreesboro home cleaner for longer.",
        whyDesc: "With Murfreesboro's expanding suburban landscape, homeowners need a reliable, fast, and professional exterior cleaning service. We bring commercial-grade equipment directly to your driveway, ensuring perfect results without any hidden fees.",
        neighborhoods: ["Blackman", "Siegel", "Cason Lane", "Barfield", "Puckett Station", "Marymont Springs", "Downtown Murfreesboro"]
    },
    {
        filename: 'smyrna.html',
        cityName: 'Smyrna',
        county: 'Rutherford County',
        imageName: 'smyrna_hero.png',
        metaTitle: "Top-Rated Exterior Cleaning in Smyrna, TN | Lollie's Services",
        metaDesc: "Need reliable gutter cleaning or driveway washing in Smyrna? Lollie's offers eco-friendly exterior and interior cleaning for Smyrna homeowners.",
        faqs: [
            { q: "Do you offer window cleaning services in Smyrna, TN?", a: "Yes, we provide both interior and exterior streak-free window cleaning for single and multi-story homes in Smyrna." },
            { q: "Is soft-washing safe for vinyl siding?", a: "Yes, soft-washing is the only manufacturer-recommended way to clean vinyl siding. It uses low pressure and safe soaps, preventing water from getting behind the siding." },
            { q: "How quickly can you come to Smyrna for a gutter inspection?", a: "We typically offer next-day or within-48-hours service for gutter inspections and cleanouts in the Smyrna area." }
        ],
        heroSubtitle: "Your trusted local partners for a cleaner home. From detailed window washing to heavy-duty driveway cleaning, we serve all neighborhoods in Smyrna.",
        climateHeading: "Combatting Dirt & Grime in Smyrna",
        climateDesc: "Homes in Smyrna face a mix of suburban dust, vehicle exhaust, and Tennessee's infamous pollen seasons. When pollen mixes with high humidity, it creates a sticky green film on windows, screens, and siding. If not washed away properly, it can permanently stain exterior surfaces and worsen indoor allergies.",
        damagePrev: "Our thorough exterior washing and window screen cleaning services drastically reduce the amount of allergens entering your home.",
        softWash: "Our soft-washing eliminates the stubborn sticky pollen and dirt layer from your siding, restoring your home's original bright color instantly.",
        whyDesc: "Smyrna homeowners value honesty, affordability, and hard work. We deliver exactly that. Our technicians treat your property with the utmost respect, ensuring no damage to your landscaping or pets while providing a superior clean.",
        neighborhoods: ["Cedar Grove", "Florence", "Rocky Fork", "Stewarts Creek", "Lee Victory", "Sam Davis Home Area"]
    },
    {
        filename: 'antioch.html',
        cityName: 'Antioch',
        county: 'Davidson County',
        imageName: 'antioch_hero.png',
        metaTitle: "Best Gutter & Couch Cleaning in Antioch, TN | Lollie's",
        metaDesc: "Affordable and professional exterior cleaning, gutter clearing, and upholstery washing in Antioch, TN. Call Lollie's for a free estimate today!",
        faqs: [
            { q: "Can you clean gutters on a two-story home in Antioch?", a: "Yes, our technicians are fully equipped and trained in ladder safety to safely clean and inspect gutters on two and three-story homes in Antioch." },
            { q: "Do you remove pet stains from couches in Antioch?", a: "Yes, our deep-water extraction process is highly effective at removing pet stains, odors, and dander from living room upholstery." },
            { q: "What is included in driveway washing?", a: "Our driveway washing includes pre-treating oil and rust stains, using a high-pressure surface cleaner for even results, and a final rinse to wash away all debris." }
        ],
        heroSubtitle: "Affordable, professional, and local. We provide top-tier residential exterior cleaning and deep upholstery sanitization to the growing Antioch community.",
        climateHeading: "Protecting Antioch Properties from the Elements",
        climateDesc: "As Antioch continues to develop and grow, homes are exposed to construction dust and typical Middle Tennessee humidity. This combination leads to grimy driveways, clogged gutters, and dirty windows. Regular maintenance is essential to preserve your property value in this booming market.",
        damagePrev: "We help Antioch homeowners avoid expensive water damage by ensuring their gutters and downspouts are 100% clear and flowing away from the foundation.",
        softWash: "Our specialized exterior cleaning methods safely wash away construction dust and organic growth, keeping your Antioch property looking brand new.",
        whyDesc: "We understand that Antioch residents want high-quality service without being overcharged. We provide upfront pricing, transparent communication, and a 100% satisfaction guarantee on every single job, whether it's interior couch cleaning or exterior washing.",
        neighborhoods: ["Cane Ridge", "Nashboro Village", "Hickory Hollow", "Percy Priest Lake Area", "Rural Hill", "Bell Road Corridor"]
    },
    {
        filename: 'brentwood.html',
        cityName: 'Brentwood',
        county: 'Williamson County',
        imageName: 'brentwood_hero.png',
        metaTitle: "Luxury Estate Exterior Cleaning in Brentwood, TN | Lollie's",
        metaDesc: "Premium soft-washing, driveway cleaning, and gutter maintenance for luxury estates in Brentwood, TN. Fully licensed, insured, and damage-free.",
        faqs: [
            { q: "Is your company insured to work on luxury estates in Brentwood?", a: "Absolutely. We carry comprehensive commercial liability insurance, giving you total peace of mind when we work on your high-value property." },
            { q: "Do you offer gentle soft-washing for stucco and dryvit?", a: "Yes, we specialize in cleaning delicate exterior surfaces like stucco, dryvit, and painted brick using our no-pressure soft-washing system." },
            { q: "Can you clean very large, long driveways?", a: "Yes, we have commercial-grade equipment capable of rapidly and evenly cleaning extensive estate driveways and large concrete courtyards." }
        ],
        heroSubtitle: "Premium property care for Brentwood's finest homes. We offer discrete, highly professional soft-washing, gutter maintenance, and window cleaning for luxury estates.",
        climateHeading: "Maintaining Brentwood's High Standards",
        climateDesc: "Brentwood's luxury estates feature beautiful architectural details, from expansive stucco walls to intricate stone walkways. However, Tennessee's climate doesn't discriminate. Algae and mold will eventually take hold, severely detracting from your estate's immaculate appearance and potentially damaging expensive siding materials.",
        damagePrev: "We provide meticulous preventative maintenance, including gutter inspections, to protect your high-value property from unexpected water damage.",
        softWash: "Our premium soft-washing service is the ONLY safe way to clean delicate luxury exteriors like stucco and imported stone without etching or damage.",
        whyDesc: "Brentwood homeowners demand perfection, reliability, and discretion. Our professional crews arrive in uniform, use state-of-the-art equipment, and treat your estate with the highest level of care. We are fully licensed, heavily insured, and highly reviewed.",
        neighborhoods: ["Governors Club", "Annandale", "McGavock Farms", "Brenthaven", "Meadowlake", "Fountainbrooke", "Princeton Hills"]
    },
    {
        filename: 'mt-juliet.html',
        cityName: 'Mt. Juliet',
        county: 'Wilson County',
        imageName: 'mt_juliet_hero.png',
        metaTitle: "Gutter & Driveway Cleaning in Mt. Juliet, TN | Lollie's",
        metaDesc: "Protect your Mt. Juliet home from lake-effect moisture. We provide expert soft-washing, gutter cleaning, and upholstery washing in the City Between The Lakes.",
        faqs: [
            { q: "Does living near the lakes in Mt. Juliet increase mold on my house?", a: "Yes, the increased moisture from Old Hickory and Percy Priest lakes creates a microclimate that accelerates the growth of green algae and mildew on siding and decks." },
            { q: "Can you pressure wash wooden decks and boat docks?", a: "Yes, we carefully wash wooden surfaces to remove slippery algae and prepare them for staining or sealing without splintering the wood." },
            { q: "Do you clean gutters filled with pine needles?", a: "Yes, pine needles are notorious for causing severe clogs. We manually clear them and can discuss installing specialized gutter guards to prevent future buildup." }
        ],
        heroSubtitle: "Serving the City Between The Lakes. We combat lake-effect moisture with professional soft-washing, gutter clearing, and driveway cleaning across Mt. Juliet.",
        climateHeading: "Combating Lake-Effect Moisture in Mt. Juliet",
        climateDesc: "Because Mt. Juliet sits between Old Hickory Lake and Percy Priest Lake, homes here experience higher ambient moisture levels. This unique 'lake-effect' environment drastically accelerates the growth of <strong>fungus, green algae, and slippery moss</strong> on siding, decks, and driveways, requiring specialized cleaning to control.",
        damagePrev: "We help Mt. Juliet residents maintain safe, slip-free patios and driveways by stripping away thick layers of water-fed algae and moss.",
        softWash: "Our soft-wash biocides are highly effective at neutralizing the heavy lake-effect mold spores, keeping your siding clean for much longer than standard pressure washing.",
        whyDesc: "We know Mt. Juliet is a community that loves the outdoors and their beautiful homes. We provide eco-friendly cleaning solutions that won't harm your lawn or the local watershed, all while delivering a spectacular, long-lasting clean.",
        neighborhoods: ["Providence", "Baird Farms", "Lakeview", "Green Hill", "Sugartree", "Wynfield", "Willoughby Station"]
    }
];

function generateCityPage(city) {
    // Generate Schema
    const schemaObj = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": city.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
            }
        }))
    };
    const schemaHtml = `<!-- FAQ Schema for AEO -->
    <script type="application/ld+json">
    ${JSON.stringify(schemaObj, null, 2)}
    </script>`;

    let finalHead = headSection;
    finalHead = finalHead.replace(/<title>[\s\S]*?<\/title>/i, `<title>${city.metaTitle}</title>`);
    finalHead = finalHead.replace(/<meta name="description" content="[\s\S]*?">/i, `<meta name="description" content="${city.metaDesc}">`);
    finalHead = finalHead.replace(/<!-- FAQ Schema for AEO -->[\s\S]*?<\/head>/i, `${schemaHtml}\n    <link rel="stylesheet" href="local-pages.css?v=2.9">\n</head>`);

    // Generate Neighborhood Chips
    const chipsHtml = city.neighborhoods.map(n => 
        `<span style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 1.05rem; letter-spacing: 0.5px;">📍 ${n}</span>`
    ).join('\n                    ');

    // Generate Visible FAQs
    const faqHtml = city.faqs.map(f => `
                    <div class="faq-item">
                        <button class="faq-question">
                            <span>${f.q}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>
                        </button>
                        <div class="faq-answer">
                            <p>${f.a}</p>
                        </div>
                    </div>`).join('');

    const newMain = `<main>
        <!-- Custom Local Hero -->
        <section class="local-hero-full" style="background-image: url('assets/images/${city.imageName}');">
            <div class="local-hero-overlay"></div>
            <div class="local-hero-content">
                <h1 class="local-hero-title">
                    ${city.cityName}'s Premier <span class="highlight-green">Exterior Cleaning.</span>
                </h1>
                <p class="local-hero-subtitle">
                    ${city.heroSubtitle}
                </p>
                <div class="local-hero-buttons">
                    <a href="#contact" class="btn btn-primary btn-arrow">Get a Free ${city.cityName} Quote
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
                    Serving ${city.county}
                </div>
                <div class="trust-item">
                    <svg viewBox="0 0 24 24" class="trust-icon" style="width:28px;height:28px" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    Affordable Pricing
                </div>
            </div>
        </div>

        <!-- NEW SEO SECTION: Climate & Home Protection (PREMIUM LAYOUT) -->
        <section class="py-large" style="background: linear-gradient(135deg, var(--light) 0%, var(--white) 100%);">
            <div class="container">
                <div class="grid grid-2" style="align-items: center; gap: 60px;">
                    <div>
                        <span class="section-tag">Local Climate Focus</span>
                        <h2 class="section-title" style="text-align: left;">${city.climateHeading}</h2>
                        <p style="font-size: 1.15rem; color: var(--gray); line-height: 1.8; margin-bottom: 20px; text-align: left;">
                            ${city.climateDesc}
                        </p>
                    </div>
                    <div style="background: var(--white); padding: 40px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                        <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 32px;">
                            <div style="background: rgba(122,193,67,0.1); color: var(--secondary); padding: 16px; border-radius: 50%;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <div>
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--dark); margin-bottom: 8px;">Damage Prevention</h4>
                                <p style="color: var(--gray); line-height: 1.6; font-size: 1.05rem; margin: 0;">${city.damagePrev}</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 20px;">
                            <div style="background: rgba(30,58,138,0.1); color: var(--primary); padding: 16px; border-radius: 50%;">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <div>
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--dark); margin-bottom: 8px;">Safe Soft-Washing</h4>
                                <p style="color: var(--gray); line-height: 1.6; font-size: 1.05rem; margin: 0;">${city.softWash}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="local-why-us">
            <div class="container why-grid">
                <div class="why-image-wrapper">
                    <img src="assets/images/${city.imageName}" alt="${city.cityName} Property Pressure Washing" style="max-width: 100%; border-radius: 20px; box-shadow: 0 15px 30px rgba(0,0,0,0.1);">
                </div>
                <div class="why-content">
                    <span class="section-tag">Local Expertise</span>
                    <h2>Why ${city.cityName} Trusts Lollie's</h2>
                    <p>
                        ${city.whyDesc}
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

        <!-- PREMIUM ZIG-ZAG SERVICES LAYOUT -->
        <section id="services" class="zig-zag-section bg-light">
            <div class="container">
                <div class="text-center mb-large">
                    <span class="section-tag">${city.cityName} Exterior Services</span>
                    <h2 class="section-title">Comprehensive Property Care</h2>
                    <p style="max-width: 700px; margin: 0 auto; color: var(--gray); font-size: 1.15rem; line-height: 1.6;">We offer a full suite of exterior and interior cleaning services designed specifically for the needs of ${city.cityName} homeowners and property managers.</p>
                </div>

                <!-- Zig Zag Row 1 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_gutter.png" alt="Professional Gutter Cleaning ${city.cityName}">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
                        </div>
                        <h3 class="zig-zag-title">Professional Gutter Cleaning</h3>
                        <p class="zig-zag-desc">Heavy spring rains and autumn leaf drops can quickly overwhelm your drainage system. We safely remove sludge, leaves, and debris from your gutters and downspouts in ${city.cityName}, ensuring proper water flow. This critical maintenance prevents water from pooling around your foundation, which can lead to flooded basements and expensive structural repairs.</p>
                        <a href="#contact" class="btn btn-secondary">Get a Gutter Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 2 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_driveway.png" alt="Driveway & Patio Washing ${city.cityName}">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        </div>
                        <h3 class="zig-zag-title">Driveway & Patio Washing</h3>
                        <p class="zig-zag-desc">Over time, concrete driveways and patios in ${city.county} accumulate deep oil stains, tire marks, and slippery green algae. Using commercial-grade surface cleaners and high-pressure washing, we strip away years of embedded grime, instantly boosting your property's curb appeal and eliminating slip hazards for your family.</p>
                        <a href="#contact" class="btn btn-secondary">Get a Washing Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 3 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_upholstery.png" alt="Couch & Upholstery Cleaning ${city.cityName}">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3 class="zig-zag-title">Couch & Upholstery Deep Cleaning</h3>
                        <p class="zig-zag-desc">We don't just clean the outside. Our advanced deep-water extraction process for couches, sofas, and living room upholstery pulls out trapped pet dander, tough stains, and odor-causing bacteria. Enjoy a fresher, healthier indoor environment right in the comfort of your ${city.cityName} home.</p>
                        <a href="#contact" class="btn btn-secondary">Get an Upholstery Quote</a>
                    </div>
                </div>

                <!-- Zig Zag Row 4 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_window.png" alt="Window Cleaning ${city.cityName}">
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
                        <img src="assets/images/srv_inspection.png" alt="Gutter Inspection ${city.cityName}">
                    </div>
                    <div class="zig-zag-content">
                        <div class="zig-zag-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                        </div>
                        <h3 class="zig-zag-title">Gutter Inspection & Maintenance</h3>
                        <p class="zig-zag-desc">Not sure if your gutters need cleaning or repairs? We offer thorough inspections to check for sagging sections, separated seams, and clogs. Preventative maintenance is the key to extending the life of your roofing and fascia boards during ${city.cityName}'s unpredictable weather seasons.</p>
                        <a href="#contact" class="btn btn-secondary">Schedule an Inspection</a>
                    </div>
                </div>

                <!-- Zig Zag Row 6 -->
                <div class="zig-zag-row">
                    <div class="zig-zag-image">
                        <img src="assets/images/srv_screen.png" alt="Screen Cleaning ${city.cityName}">
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

        <!-- SEO SECTION: Neighborhoods We Serve (PREMIUM DARK LAYOUT) -->
        <section class="py-large" style="background: var(--dark); color: var(--white); text-align: center; border-radius: 40px; margin: 80px auto; max-width: 95%; padding: 80px 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.2);">
            <div class="container">
                <span class="section-tag" style="background: rgba(255,255,255,0.1); color: var(--secondary);">Local Coverage</span>
                <h2 class="section-title text-white" style="margin-bottom: 24px;">Proudly Serving All of ${city.cityName} & ${city.county}</h2>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.15rem; line-height: 1.7; max-width: 800px; margin: 0 auto 48px;">
                    Whether you need emergency gutter clearing, driveway power washing, or delicate soft-washing for a historic estate, our local crews are ready to dispatch across ${city.cityName}.
                </p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; max-width: 1000px; margin: 0 auto;">
                    ${chipsHtml}
                </div>
            </div>
        </section>

        <!-- Local FAQ (Expanded) -->
        <section id="faq" class="faq-section py-large bg-light">
            <div class="container max-w-700">
                <div class="text-center mb-large">
                    <span class="section-tag">${city.cityName} FAQs</span>
                    <h2 class="section-title">Common Questions from <span class="highlight-green">Local Homeowners</span></h2>
                </div>
                <div class="faq-accordion">
                    ${faqHtml}
                </div>
            </div>
        </section>
        
        <!-- Extracted Contact Section from Homepage -->
        ${contactSection}
    </main>`;

    fs.writeFileSync(city.filename, finalHead + newMain + footerSection);
    console.log('Successfully generated ' + city.filename);
}

cities.forEach(generateCityPage);
console.log('All 6 local pages generated successfully with premium design and deep SEO content!');
