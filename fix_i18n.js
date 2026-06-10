const fs = require('fs');

const data = {
  'beauty/index.html': [
    ['<h1 class="beauty-title">Reveal your<br><i>inner glow.</i></h1>', '<h1 class="beauty-title" data-i18n="beauty_hero_title">Reveal your<br><i>inner glow.</i></h1>'],
    ['<p class="beauty-desc">Experience our award-winning Radiance Serum. Formulated with rare botanicals to deeply nourish and rejuvenate your complexion overnight.</p>', '<p class="beauty-desc" data-i18n="beauty_hero_desc">Experience our award-winning Radiance Serum. Formulated with rare botanicals to deeply nourish and rejuvenate your complexion overnight.</p>'],
    ['<a href="#" class="beauty-btn">Shop Now</a>', '<a href="#" class="beauty-btn" data-i18n="beauty_btn_shop">Shop Now</a>'],
    ['<h2 class="beauty-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem; font-family: \'Playfair Display\', serif;">Esențialele <i>Lumière</i></h2>', '<h2 class="beauty-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem; font-family: \'Playfair Display\', serif;" data-i18n="beauty_bestsellers_title">Esențialele <i>Lumière</i></h2>'],
    ['<p class="beauty-desc" style="text-align: center; margin: 0 auto 4rem auto;">O selecție rafinată pentru frumusețea ta atemporală.</p>', '<p class="beauty-desc" style="text-align: center; margin: 0 auto 4rem auto;" data-i18n="beauty_bestsellers_desc">O selecție rafinată pentru frumusețea ta atemporală.</p>'],
    ['<h2 class="beauty-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;">De ce Lumière Beauty?</h2>', '<h2 class="beauty-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;" data-i18n="beauty_features_title">De ce Lumière Beauty?</h2>'],
    ['<h3 class="feature-title" style="font-family: \'Playfair Display\', serif;">Detalii Fine</h3>', '<h3 class="feature-title" style="font-family: \'Playfair Display\', serif;" data-i18n="beauty_feat1_title">Detalii Fine</h3>'],
    ['<p class="feature-desc" style="color: #7b6d65;">O tipografie elegantă și animații diafane care pun în valoare luxul produselor cosmetice.</p>', '<p class="feature-desc" style="color: #7b6d65;" data-i18n="beauty_feat1_desc">O tipografie elegantă și animații diafane care pun în valoare luxul produselor cosmetice.</p>'],
    ['<h3 class="feature-title" style="font-family: \'Playfair Display\', serif;">Galerii Imersive</h3>', '<h3 class="feature-title" style="font-family: \'Playfair Display\', serif;" data-i18n="beauty_feat2_title">Galerii Imersive</h3>'],
    ['<p class="feature-desc" style="color: #7b6d65;">Prezentarea produselor prin imagini de înaltă rezoluție și video-uri integrate fluid.</p>', '<p class="feature-desc" style="color: #7b6d65;" data-i18n="beauty_feat2_desc">Prezentarea produselor prin imagini de înaltă rezoluție și video-uri integrate fluid.</p>'],
    ['<h3 class="feature-title" style="font-family: \'Playfair Display\', serif;">Checkout Fluid</h3>', '<h3 class="feature-title" style="font-family: \'Playfair Display\', serif;" data-i18n="beauty_feat3_title">Checkout Fluid</h3>'],
    ['<p class="feature-desc" style="color: #7b6d65;">Un proces de achiziție simplificat, optimizat pentru a maximiza conversiile brandurilor premium.</p>', '<p class="feature-desc" style="color: #7b6d65;" data-i18n="beauty_feat3_desc">Un proces de achiziție simplificat, optimizat pentru a maximiza conversiile brandurilor premium.</p>'],
    ['<h2 class="beauty-title" style="font-size: 3rem;">Inspiră <i>Eleganță</i></h2>', '<h2 class="beauty-title" style="font-size: 3rem;" data-i18n="section_cta_title">Inspiră <i>Eleganță</i></h2>'],
    ['<p class="beauty-desc" style="margin: 0 auto 3rem auto;">Lansează-ți brandul de beauty cu o temă care respiră lux. O creație Shopify Expert Romania.</p>', '<p class="beauty-desc" style="margin: 0 auto 3rem auto;" data-i18n="section_cta_desc">Lansează-ți brandul de beauty cu o temă care respiră lux. O creație Shopify Expert Romania.</p>']
  ]
};

for (const [file, replaces] of Object.entries(data)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [a, b] of replaces) {
      if (content.includes(a)) {
        content = content.replace(a, b);
      } else if (!content.includes(b)) {
        console.log("NOT FOUND in " + file + ": " + a);
      }
    }
    fs.writeFileSync(file, content);
    console.log("Updated " + file);
  }
}
