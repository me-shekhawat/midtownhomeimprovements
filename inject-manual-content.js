const fs = require('fs');

const pages = {
    nashville: {
        title: "Top-Rated Exterior Cleaning in Nashville, TN | Gutter & Driveway Washing",
        description: "Lollie's provides professional gutter cleaning and pressure washing services in Nashville and Davidson County. Protect your Music City home. Free estimates!",
        heroTitle: "Nashville's Premier <span class=\"highlight-green\">Exterior Cleaning.</span>",
        heroDesc: "From the historic homes in East Nashville to modern estates in Green Hills, we keep Music City properties pristine with expert gutter cleaning, upholstery sanitization, and driveway pressure washing.",
        canonical: "https://lolliesexteriorcleaningservices.com/nashville.html",
        faqData: [
            { q: "How much does gutter cleaning cost in Nashville?", a: "In Nashville, gutter cleaning typically starts at $99. The final price depends on the square footage of your home and whether you have a single or two-story property. Give us a call for an exact quote!" },
            { q: "Do you clean gutters in East Nashville and Green Hills?", a: "Yes, we serve all neighborhoods within Davidson County, including East Nashville, Green Hills, Belle Meade, and Donelson. Our team is familiar with the unique needs of Nashville's varying property types." },
            { q: "Is your pressure washing safe for older Nashville homes?", a: "Absolutely. For older or historic homes, we use a 'soft wash' technique. This uses lower pressure combined with eco-friendly cleaning solutions to safely remove grime without damaging delicate brick or siding." }
        ]
    },
    murfreesboro: {
        title: "Expert Driveway & Gutter Cleaning in Murfreesboro, TN | Lollie's",
        description: "Trusted exterior cleaning in Murfreesboro, TN. We specialize in driveway pressure washing, couch cleaning, and gutter maintenance in Rutherford County.",
        heroTitle: "Murfreesboro's Trusted <span class=\"highlight-green\">Property Care.</span>",
        heroDesc: "Serving families across Rutherford County. Whether you need deep driveway pressure washing in Blackman or gutter cleaning near MTSU, Lollie's delivers affordable, top-tier results.",
        canonical: "https://lolliesexteriorcleaningservices.com/murfreesboro.html",
        faqData: [
            { q: "What is the best time of year for driveway pressure washing in Murfreesboro?", a: "Spring and early summer are ideal for driveway pressure washing in Murfreesboro to remove the winter grime and pollen buildup. However, we offer professional power washing year-round to keep your concrete looking new." },
            { q: "Do you offer couch and upholstery cleaning in Rutherford County?", a: "Yes! Alongside our exterior services, we provide deep extraction couch and upholstery cleaning directly at your Murfreesboro home, safely removing pet stains, odors, and allergens." },
            { q: "Are your gutter cleaning services available near MTSU?", a: "Yes, we service the entire Murfreesboro area, including neighborhoods surrounding Middle Tennessee State University (MTSU), Blackman, and Siegel." }
        ]
    },
    franklin: {
        title: "Premium Soft Wash & Gutter Cleaning in Franklin, TN",
        description: "Protect your Franklin, TN historic home with Lollie's premium exterior cleaning. Expert soft washing, gutter clearing, and couch cleaning in Williamson County.",
        heroTitle: "Premium Exterior Care for <span class=\"highlight-green\">Franklin Homes.</span>",
        heroDesc: "Franklin's beautiful historic properties and luxury estates require specialized care. We offer gentle soft-washing, thorough gutter clearing, and premium interior upholstery cleaning in Williamson County.",
        canonical: "https://lolliesexteriorcleaningservices.com/franklin.html",
        faqData: [
            { q: "Is pressure washing safe for historic brick homes in Franklin?", a: "Standard high-pressure washing can damage older brick and mortar. That's why we use a specialized 'soft wash' method for Franklin's historic properties, which uses low pressure and safe detergents to gently lift dirt and algae." },
            { q: "How often should Williamson County homes get their gutters cleaned?", a: "Due to the mature trees in Franklin and Williamson County, we highly recommend professional gutter cleaning at least twice a year—once after the spring pollen drop and once after the heavy autumn leaf fall." },
            { q: "Do you service luxury estates and large properties?", a: "Yes, we are fully equipped and insured to handle premium exterior cleaning for large luxury estates and extensive driveways throughout Franklin and surrounding areas." }
        ]
    },
    brentwood: {
        title: "Luxury Exterior Cleaning & Pressure Washing in Brentwood, TN",
        description: "Lollie's offers elite exterior cleaning, driveway pressure washing, and upholstery care for luxury homes in Brentwood, TN. Book your free estimate today.",
        heroTitle: "Elite Exterior Washing in <span class=\"highlight-green\">Brentwood.</span>",
        heroDesc: "Maintaining Brentwood's upscale properties with uncompromising quality. From massive driveway pressure washing to meticulous gutter maintenance, we are Williamson County's elite choice.",
        canonical: "https://lolliesexteriorcleaningservices.com/brentwood.html",
        faqData: [
            { q: "Do you offer premium driveway pressure washing in Brentwood?", a: "Yes, we specialize in cleaning large, upscale concrete and paver driveways common in Brentwood. Our commercial-grade equipment ensures a deep, uniform clean without streaks." },
            { q: "Can you install gutter guards on large Brentwood properties?", a: "Absolutely. We offer complete gutter cleaning and can install high-quality gutter shields to protect your home from debris, reducing the need for frequent cleanings." },
            { q: "Is your upholstery cleaning safe for designer couches?", a: "Yes. Our deep extraction method is tough on stains but gentle on premium fabrics. We test all designer upholstery before cleaning to ensure colorfastness and fabric safety." }
        ]
    },
    smyrna: {
        title: "Affordable Gutter & Driveway Cleaning in Smyrna, TN",
        description: "Fast, reliable, and affordable exterior cleaning in Smyrna, TN. Get your gutters cleared and driveway power washed by Lollie's professional team.",
        heroTitle: "Reliable Exterior Cleaning for <span class=\"highlight-green\">Smyrna.</span>",
        heroDesc: "Protecting Smyrna's growing neighborhoods from Tennessee weather. We provide fast, affordable, and highly effective gutter cleaning and pressure washing services you can count on.",
        canonical: "https://lolliesexteriorcleaningservices.com/smyrna.html",
        faqData: [
            { q: "How quickly can you clean my gutters in Smyrna?", a: "We strive to offer fast turnaround times for our Smyrna customers. In many cases, we can schedule your gutter cleaning within 24 to 48 hours of your estimate approval." },
            { q: "Is your power washing affordable for standard suburban homes?", a: "Yes! We pride ourselves on offering top-tier, professional exterior cleaning at competitive and transparent prices perfect for Smyrna homeowners. Driveway washing starts at just $120." },
            { q: "Do you clean exterior siding and patios?", a: "Yes, our pressure washing and soft washing services cover driveways, patios, walkways, and home siding, instantly boosting your property's curb appeal." }
        ]
    },
    antioch: {
        title: "Local Gutter Cleaning & Pressure Washing in Antioch, TN",
        description: "Need gutter cleaning or power washing in Antioch, TN? Lollie's delivers straight-to-the-point, high-quality exterior maintenance for your home.",
        heroTitle: "Antioch's Dedicated <span class=\"highlight-green\">Home Maintenance.</span>",
        heroDesc: "Practical, high-quality exterior cleaning for Antioch residents. We specialize in removing heavy leaf buildup from gutters and restoring dirty driveways to look brand new.",
        canonical: "https://lolliesexteriorcleaningservices.com/antioch.html",
        faqData: [
            { q: "How do I know if my gutters in Antioch need cleaning?", a: "Signs you need gutter cleaning include water overflowing the edges during rain, sagging gutters, visible plant growth, or water pooling near your foundation. Antioch's heavy tree coverage often requires bi-annual cleaning." },
            { q: "Do you remove oil stains from driveways?", a: "While completely removing old, set-in oil stains is extremely difficult, our professional pressure washing and specialized degreasers can significantly lighten and lift most driveway oil and rust stains." },
            { q: "Are you a locally operated business serving Antioch?", a: "Yes! We are a local Middle Tennessee business proudly serving the Antioch community with personalized, dedicated customer service." }
        ]
    },
    'mt-juliet': {
        title: "Mt. Juliet Exterior Washing | Gutter & Driveway Care",
        description: "Professional exterior cleaning in Mt. Juliet, TN. We safely remove lake-effect algae, mold, and dirt from your driveway, siding, and gutters.",
        heroTitle: "Cleaning the City Between <span class=\"highlight-green\">The Lakes.</span>",
        heroDesc: "Living near the lakes in Mt. Juliet means dealing with extra moisture, algae, and mold on your home's exterior. Lollie's provides specialized power washing and gutter care to combat lake-effect wear.",
        canonical: "https://lolliesexteriorcleaningservices.com/mt-juliet.html",
        faqData: [
            { q: "How do I remove lake-effect algae from my driveway in Mt. Juliet?", a: "The high moisture near Mt. Juliet's lakes causes rapid algae and mildew growth. Our professional pressure washing utilizes eco-friendly biocides that kill the algae at the root and blast it away safely." },
            { q: "Do you clean gutters for homes near Old Hickory Lake?", a: "Yes, we serve all areas of Mt. Juliet, including properties surrounding Old Hickory Lake and Percy Priest Lake. We ensure your gutters are clear to handle heavy Tennessee rainstorms." },
            { q: "Are your cleaning products safe for lake environments?", a: "100%. We use biodegradable, eco-friendly cleaning solutions that are completely safe for your family, pets, landscaping, and the local lake ecosystems." }
        ]
    }
};

const fileList = Object.keys(pages);

fileList.forEach(cityId => {
    let content = fs.readFileSync(`${cityId}.html`, 'utf8');
    const data = pages[cityId];

    // 1. Replace Title
    content = content.replace(/<title>[\s\S]*?<\/title>/i, `<title>${data.title}</title>`);
    
    // 2. Replace Meta Description
    content = content.replace(/<meta name="description" content="[\s\S]*?">/i, `<meta name="description" content="${data.description}">`);
    
    // 3. Replace OG Title
    content = content.replace(/<meta property="og:title" content="[\s\S]*?">/i, `<meta property="og:title" content="${data.title}">`);
    
    // 4. Replace Canonical URL
    content = content.replace(/<link rel="canonical" href="[\s\S]*?">/i, `<link rel="canonical" href="${data.canonical}">`);

    // 5. Replace Hero Title
    content = content.replace(/<h1 class="hero-title">[\s\S]*?<\/h1>/i, `<h1 class="hero-title">\n                        ${data.heroTitle}\n                    </h1>`);

    // 6. Replace Hero Description
    content = content.replace(/<p class="hero-description">[\s\S]*?<\/p>/i, `<p class="hero-description">\n                        ${data.heroDesc}\n                    </p>`);

    // 7. Active Nav Link (Home -> nav-link, Areas -> active)
    content = content.replace(/<a href="#home" class="nav-link active">Home<\/a>/i, '<a href="index.html" class="nav-link">Home</a>');
    content = content.replace(/<a href="#service-areas" class="nav-link">Areas<\/a>/i, '<a href="#service-areas" class="nav-link active">Areas</a>');

    // 8. Generate AEO FAQ Schema
    const schemaEntities = data.faqData.map(faq => {
        return `{
          "@type": "Question",
          "name": "${faq.q}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${faq.a}"
          }
        }`;
    }).join(',\n        ');

    const newSchema = `<!-- FAQ Schema for AEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${schemaEntities}
      ]
    }
    </script>
</head>`;

    content = content.replace(/<!-- FAQ Schema for AEO -->[\s\S]*?<\/head>/i, newSchema);

    // 9. Generate FAQ HTML Section
    const faqHtmlItems = data.faqData.map(faq => {
        return `                    <div class="faq-item">
                        <button class="faq-question">
                            <span>${faq.q}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>
                        </button>
                        <div class="faq-answer">
                            <p>${faq.a}</p>
                        </div>
                    </div>`;
    }).join('\n');

    const newFaqSection = `<div class="faq-accordion">\n${faqHtmlItems}\n                </div>`;

    content = content.replace(/<div class="faq-accordion">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/i, `${newFaqSection}\n            </div>\n        </section>`);

    fs.writeFileSync(`${cityId}.html`, content);
    console.log(`Manually compiled unique content for ${cityId}.html`);
});
