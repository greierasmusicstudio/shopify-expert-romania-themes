const fs = require('fs');

const files = {
  'electronics/index.html': {
    '<h1 class="tech-title">Aura Sound</h1>': '<h1 class="tech-title" data-i18n="tech_hero_title">Aura Sound</h1>',
    '<p class="tech-desc">Experience absolute acoustic perfection. Active noise cancellation powered by neural networks, wrapped in aerospace-grade aluminum.</p>': '<p class="tech-desc" data-i18n="tech_hero_desc">Experience absolute acoustic perfection. Active noise cancellation powered by neural networks, wrapped in aerospace-grade aluminum.</p>',
    '<a href="#" class="tech-btn">Pre-order Now</a>': '<a href="#" class="tech-btn" data-i18n="tech_btn_shop">Pre-order Now</a>',
    '<h2 class="tech-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">Future Tech</h2>': '<h2 class="tech-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;" data-i18n="tech_latest_title">Future Tech</h2>',
    '<p class="tech-desc" style="text-align: center; margin: 0 auto 4rem auto;">Echipamente de ultimă generație pentru pasionații de inovație.</p>': '<p class="tech-desc" style="text-align: center; margin: 0 auto 4rem auto;" data-i18n="tech_latest_desc">Echipamente de ultimă generație pentru pasionații de inovație.</p>',
    '<h2 class="tech-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;">De ce Aura Tech?</h2>': '<h2 class="tech-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;" data-i18n="tech_features_title">De ce Aura Tech?</h2>',
    '<h3 class="feature-title">Căutare Inteligentă</h3>': '<h3 class="feature-title" data-i18n="tech_feat1_title">Căutare Inteligentă</h3>',
    '<p class="feature-desc">Integrare avansată a căutării cu filtre instantanee, esențială pentru cataloage complexe de electronice.</p>': '<p class="feature-desc" data-i18n="tech_feat1_desc">Integrare avansată a căutării cu filtre instantanee, esențială pentru cataloage complexe de electronice.</p>',
    '<h3 class="feature-title">Modelare 3D</h3>': '<h3 class="feature-title" data-i18n="tech_feat2_title">Modelare 3D</h3>',
    '<p class="feature-desc">Suport nativ pentru vizualizarea produselor în format 3D și AR direct în browser.</p>': '<p class="feature-desc" data-i18n="tech_feat2_desc">Suport nativ pentru vizualizarea produselor în format 3D și AR direct în browser.</p>',
    '<h3 class="feature-title">Dark Mode Nativ</h3>': '<h3 class="feature-title" data-i18n="tech_feat3_title">Dark Mode Nativ</h3>',
    '<p class="feature-desc">O estetică dark mode profundă, cu contrast ridicat, perfectă pentru produsele de tehnologie premium.</p>': '<p class="feature-desc" data-i18n="tech_feat3_desc">O estetică dark mode profundă, cu contrast ridicat, perfectă pentru produsele de tehnologie premium.</p>',
    '<h2 class="cta-title">Treci la Următorul Nivel</h2>': '<h2 class="cta-title" data-i18n="section_cta_title">Treci la Următorul Nivel</h2>',
    '<p class="cta-desc">Lansează-ți brandul de electronice cu o temă Shopify care reflectă inovația produselor tale.</p>': '<p class="cta-desc" data-i18n="section_cta_desc">Lansează-ți brandul de electronice cu o temă Shopify care reflectă inovația produselor tale.</p>'
  }
};

for (const [file, replaces] of Object.entries(files)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [a, b] of Object.entries(replaces)) {
      if (content.includes(a)) {
        content = content.replace(a, b);
      }
    }
    fs.writeFileSync(file, content);
  }
}

// Update translations.js dynamically
let trans = fs.readFileSync('public/translations.js', 'utf8');
trans = trans.replace('"tech_hero_title": { ro: "Depășește<br>Limitele.", en: "Push the<br>Limits." }', '"tech_hero_title": { ro: "Sunet Aura", en: "Aura Sound" }');
trans = trans.replace('"tech_hero_desc": { ro: "Tehnologie concepută pentru viteză, putere și precizie absolută. Următoarea generație de electronice este aici.", en: "Technology designed for absolute speed, power, and precision. The next generation of electronics is here." }', '"tech_hero_desc": { ro: "Experimentează perfecțiunea acustică absolută. Anulare activă a zgomotului cu rețele neuronale, într-o carcasă de aluminiu aerospațial.", en: "Experience absolute acoustic perfection. Active noise cancellation powered by neural networks, wrapped in aerospace-grade aluminum." }');
trans = trans.replace('"tech_btn_shop": { ro: "Explorează Produsele", en: "Explore Products" }', '"tech_btn_shop": { ro: "Precomandă Acum", en: "Pre-order Now" }');
trans = trans.replace('"tech_latest_title": { ro: "Cele Mai Noi Inovații", en: "Latest Innovations" }', '"tech_latest_title": { ro: "Tehnologia Viitorului", en: "Future Tech" }');
trans = trans.replace('"tech_latest_desc": { ro: "Echipează-te cu gadgeturile momentului.", en: "Equip yourself with the gadgets of the moment." }', '"tech_latest_desc": { ro: "Echipamente de ultimă generație pentru pasionații de inovație.", en: "Next-generation equipment for innovation enthusiasts." }');
trans = trans.replace('"tech_feat1_title": { ro: "Specificații Detaliate", en: "Detailed Specifications" }', '"tech_feat1_title": { ro: "Căutare Inteligentă", en: "Smart Search" }');
trans = trans.replace('"tech_feat1_desc": { ro: "Tabele cu specificații tehnice prezentate clar, cu fonturi monospaced tech.", en: "Technical specifications tables presented clearly, with tech monospaced fonts." }', '"tech_feat1_desc": { ro: "Integrare avansată a căutării cu filtre instantanee, esențială pentru cataloage complexe de electronice.", en: "Advanced search integration with instant filters, essential for complex electronics catalogs." }');
trans = trans.replace('"tech_feat2_title": { ro: "Dark Mode Nativ", en: "Native Dark Mode" }', '"tech_feat2_title": { ro: "Modelare 3D", en: "3D Modeling" }');
trans = trans.replace('"tech_feat2_desc": { ro: "Contrast optim pentru evidențierea produselor electronice și a display-urilor.", en: "Optimal contrast to highlight electronic products and displays." }', '"tech_feat2_desc": { ro: "Suport nativ pentru vizualizarea produselor în format 3D și AR direct în browser.", en: "Native support for 3D and AR product visualization directly in the browser." }');
trans = trans.replace('"tech_feat3_title": { ro: "Comparație Rapidă", en: "Quick Comparison" }', '"tech_feat3_title": { ro: "Dark Mode Nativ", en: "Native Dark Mode" }');
trans = trans.replace('"tech_feat3_desc": { ro: "Funcționalități gândite pentru a ajuta clienții să ia decizii bazate pe specificații.", en: "Functionalities designed to help customers make spec-based decisions." }', '"tech_feat3_desc": { ro: "O estetică dark mode profundă, cu contrast ridicat, perfectă pentru produsele de tehnologie premium.", en: "A deep dark mode aesthetic with high contrast, perfect for premium tech products." }');

fs.writeFileSync('public/translations.js', trans);
console.log("Done electronics");
