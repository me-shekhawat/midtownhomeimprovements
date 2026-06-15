const fs = require('fs');

let content = fs.readFileSync('nashville.html', 'utf8');

// Replace technician image with the generated Nashville image
content = content.replace(
    /<img src="assets\/images\/hero_technician\.png" alt="[^"]+" class="technician-img">/i,
    '<img src="assets/images/nashville_hero.png" alt="Nashville Urban Home Exterior Cleaning" class="city-hero-img">'
);

// Remove the large Service Areas Section
content = content.replace(
    /<!-- Service Areas Section -->[\s\S]*?<section id="service-areas" class="service-areas-section py-large bg-white">[\s\S]*?<\/section>/i,
    '<!-- Service Areas Section Removed for cleaner local page -->'
);

fs.writeFileSync('nashville.html', content);
console.log('nashville.html updated with custom image!');
