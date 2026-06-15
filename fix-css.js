const fs = require('fs');
let css = fs.readFileSync('local-pages.css', 'utf8');

const missingTop = `/* --------------------------------------------------
 * Lollie's Exterior Cleaning Services 
 * Custom Layout for Local City Pages
 * Completely distinct from index.html
 * -------------------------------------------------- */

/* FULL-WIDTH HERO SECTION */
.local-hero-full {
    position: relative;
    min-height: calc(100vh - 100px);
    padding-top: 100px; /* Header offset */
    padding-bottom: 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    z-index: 1;
}

.local-hero-overlay {
    position: absolute;
    top: 0;
`;

fs.writeFileSync('local-pages.css', missingTop + css);
console.log('Restored top of local-pages.css');
