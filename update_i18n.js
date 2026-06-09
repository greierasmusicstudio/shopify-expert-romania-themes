const fs = require('fs');
const path = require('path');

const filesToUpdate = {
  'bio/index.html': [
    ['<h1 class="bio-title">Pure nature,<br><span>bottled.</span></h1>', '<h1 class="bio-title" data-i18n="bio_hero_title">Pure nature,<br><span>bottled.</span></h1>'],
    ['<p class="bio-desc">Discover our new line of 100% organic, cruelty-free skincare. Nourish your skin with the powerful simplicity of botanical extracts.</p>', '<p class="bio-desc" data-i18n="bio_hero_desc">Discover our new line of 100% organic, cruelty-free skincare. Nourish your skin with the powerful simplicity of botanical extracts.</p>'],
    ['<a href="#" class="bio-btn">Shop Essentials</a>', '<a href="#" class="bio-btn" data-i18n="bio_btn_shop">Shop Essentials</a>'],
    ['<h2 class="bio-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">Rutina Ta <span>Zilnică</span></h2>', '<h2 class="bio-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;" data-i18n="bio_routine_title">Rutina Ta <span>Zilnică</span></h2>'],
    ['<p class="bio-desc" style="text-align: center; margin: 0 auto 4rem auto;">Formule curate, derivate natural, pentru o strălucire sănătoasă.</p>', '<p class="bio-desc" style="text-align: center; margin: 0 auto 4rem auto;" data-i18n="bio_routine_desc">Formule curate, derivate natural, pentru o strălucire sănătoasă.</p>'],
    ['<h2 class="bio-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;">De ce Botanica Bio?</h2>', '<h2 class="bio-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;" data-i18n="bio_features_title">De ce Botanica Bio?</h2>'],
    ['<h3 class="feature-title">Ingrediente Evidențiate</h3>', '<h3 class="feature-title" data-i18n="bio_feat1_title">Ingrediente Evidențiate</h3>'],
    ['<p class="feature-desc" style="color: #5d635a;">Secțiuni special create pentru a povesti proveniența și beneficiile fiecărui ingredient natural.</p>', '<p class="feature-desc" style="color: #5d635a;" data-i18n="bio_feat1_desc">Secțiuni special create pentru a povesti proveniența și beneficiile fiecărui ingredient natural.</p>'],
    ['<h3 class="feature-title">Design Organic</h3>', '<h3 class="feature-title" data-i18n="bio_feat2_title">Design Organic</h3>'],
    ['<p class="feature-desc" style="color: #5d635a;">Forme fluide, culori inspirate din natură și un layout care inspiră liniște și încredere.</p>', '<p class="feature-desc" style="color: #5d635a;" data-i18n="bio_feat2_desc">Forme fluide, culori inspirate din natură și un layout care inspiră liniște și încredere.</p>'],
    ['<h3 class="feature-title">Sustenabilitate</h3>', '<h3 class="feature-title" data-i18n="bio_feat3_title">Sustenabilitate</h3>'],
    ['<p class="feature-desc" style="color: #5d635a;">Iconografie dedicată pentru certificări (eco-friendly, cruelty-free, vegan) esențiale în această nișă.</p>', '<p class="feature-desc" style="color: #5d635a;" data-i18n="bio_feat3_desc">Iconografie dedicată pentru certificări (eco-friendly, cruelty-free, vegan) esențiale în această nișă.</p>'],
    ['<h2 class="cta-title">Crește-ți Brandul Natural</h2>', '<h2 class="cta-title" data-i18n="section_cta_title">Crește-ți Brandul Natural</h2>'],
    ['<p class="cta-desc" style="color: #5d635a;">Alege Botanica Bio și oferă clienților tăi o experiență de cumpărături la fel de pură precum produsele tale.</p>', '<p class="cta-desc" style="color: #5d635a;" data-i18n="section_cta_desc">Alege Botanica Bio și oferă clienților tăi o experiență de cumpărături la fel de pură precum produsele tale.</p>'],
    ['<a href="/" class="bio-btn">Contact Shopify Expert</a>', '<a href="/" class="bio-btn" data-i18n="btn_contact">Contact Shopify Expert</a>'],
    ['<a href="/" class="back-btn">← Back to Hub</a>', '<a href="/" class="back-btn" data-i18n="back_to_hub">← Back to Hub</a>']
  ],
  'tech/index.html': [
    ['<h1 class="tech-hero-title">Push the<br>Limits.</h1>', '<h1 class="tech-hero-title" data-i18n="tech_hero_title">Push the<br>Limits.</h1>'],
    ['<p class="tech-hero-desc">Technology designed for absolute speed, power, and precision. The next generation of electronics is here.</p>', '<p class="tech-hero-desc" data-i18n="tech_hero_desc">Technology designed for absolute speed, power, and precision. The next generation of electronics is here.</p>'],
    ['<a href="#" class="tech-btn">Explore Products</a>', '<a href="#" class="tech-btn" data-i18n="tech_btn_shop">Explore Products</a>'],
    ['<h2 class="section-title">Latest Innovations</h2>', '<h2 class="section-title" data-i18n="tech_latest_title">Latest Innovations</h2>'],
    ['<p class="section-text" style="text-align: center; margin-bottom: 4rem;">Equip yourself with the gadgets of the moment.</p>', '<p class="section-text" style="text-align: center; margin-bottom: 4rem;" data-i18n="tech_latest_desc">Equip yourself with the gadgets of the moment.</p>'],
    ['<h2 class="section-title" style="text-align: center;">The Aura Tech Advantage</h2>', '<h2 class="section-title" style="text-align: center;" data-i18n="tech_features_title">The Aura Tech Advantage</h2>'],
    ['<h3 class="feature-title">Detailed Specifications</h3>', '<h3 class="feature-title" data-i18n="tech_feat1_title">Detailed Specifications</h3>'],
    ['<p class="feature-desc">Technical specifications tables presented clearly, with tech monospaced fonts.</p>', '<p class="feature-desc" data-i18n="tech_feat1_desc">Technical specifications tables presented clearly, with tech monospaced fonts.</p>'],
    ['<h3 class="feature-title">Native Dark Mode</h3>', '<h3 class="feature-title" data-i18n="tech_feat2_title">Native Dark Mode</h3>'],
    ['<p class="feature-desc">Optimal contrast to highlight electronic products and displays.</p>', '<p class="feature-desc" data-i18n="tech_feat2_desc">Optimal contrast to highlight electronic products and displays.</p>'],
    ['<h3 class="feature-title">Quick Comparison</h3>', '<h3 class="feature-title" data-i18n="tech_feat3_title">Quick Comparison</h3>'],
    ['<p class="feature-desc">Functionalities designed to help customers make spec-based decisions.</p>', '<p class="feature-desc" data-i18n="tech_feat3_desc">Functionalities designed to help customers make spec-based decisions.</p>'],
    ['<h2 class="cta-title">Upgrade Your Store</h2>', '<h2 class="cta-title" data-i18n="section_cta_title">Upgrade Your Store</h2>'],
    ['<p class="cta-desc" style="color: #aaa;">Offer your tech customers an immersive shopping experience with the Aura Tech theme.</p>', '<p class="cta-desc" style="color: #aaa;" data-i18n="section_cta_desc">Offer your tech customers an immersive shopping experience with the Aura Tech theme.</p>'],
    ['<a href="/" class="tech-btn">Contact Shopify Expert</a>', '<a href="/" class="tech-btn" data-i18n="btn_contact">Contact Shopify Expert</a>'],
    ['<a href="/" class="back-btn">← Back to Hub</a>', '<a href="/" class="back-btn" data-i18n="back_to_hub">← Back to Hub</a>']
  ],
  'electronics/index.html': [ // Note: it's actually electronics/index.html
    ['<h1 class="tech-hero-title">Push the<br>Limits.</h1>', '<h1 class="tech-hero-title" data-i18n="tech_hero_title">Push the<br>Limits.</h1>'],
    ['<p class="tech-hero-desc">Technology designed for absolute speed, power, and precision. The next generation of electronics is here.</p>', '<p class="tech-hero-desc" data-i18n="tech_hero_desc">Technology designed for absolute speed, power, and precision. The next generation of electronics is here.</p>'],
    ['<a href="#" class="tech-btn">Explore Products</a>', '<a href="#" class="tech-btn" data-i18n="tech_btn_shop">Explore Products</a>'],
    ['<h2 class="section-title">Latest Innovations</h2>', '<h2 class="section-title" data-i18n="tech_latest_title">Latest Innovations</h2>'],
    ['<p class="section-text" style="text-align: center; margin-bottom: 4rem;">Equip yourself with the gadgets of the moment.</p>', '<p class="section-text" style="text-align: center; margin-bottom: 4rem;" data-i18n="tech_latest_desc">Equip yourself with the gadgets of the moment.</p>'],
    ['<h2 class="section-title" style="text-align: center;">The Aura Tech Advantage</h2>', '<h2 class="section-title" style="text-align: center;" data-i18n="tech_features_title">The Aura Tech Advantage</h2>'],
    ['<h3 class="feature-title">Detailed Specifications</h3>', '<h3 class="feature-title" data-i18n="tech_feat1_title">Detailed Specifications</h3>'],
    ['<p class="feature-desc">Technical specifications tables presented clearly, with tech monospaced fonts.</p>', '<p class="feature-desc" data-i18n="tech_feat1_desc">Technical specifications tables presented clearly, with tech monospaced fonts.</p>'],
    ['<h3 class="feature-title">Native Dark Mode</h3>', '<h3 class="feature-title" data-i18n="tech_feat2_title">Native Dark Mode</h3>'],
    ['<p class="feature-desc">Optimal contrast to highlight electronic products and displays.</p>', '<p class="feature-desc" data-i18n="tech_feat2_desc">Optimal contrast to highlight electronic products and displays.</p>'],
    ['<h3 class="feature-title">Quick Comparison</h3>', '<h3 class="feature-title" data-i18n="tech_feat3_title">Quick Comparison</h3>'],
    ['<p class="feature-desc">Functionalities designed to help customers make spec-based decisions.</p>', '<p class="feature-desc" data-i18n="tech_feat3_desc">Functionalities designed to help customers make spec-based decisions.</p>'],
    ['<h2 class="cta-title">Upgrade Your Store</h2>', '<h2 class="cta-title" data-i18n="section_cta_title">Upgrade Your Store</h2>'],
    ['<p class="cta-desc" style="color: #aaa;">Offer your tech customers an immersive shopping experience with the Aura Tech theme.</p>', '<p class="cta-desc" style="color: #aaa;" data-i18n="section_cta_desc">Offer your tech customers an immersive shopping experience with the Aura Tech theme.</p>'],
    ['<a href="/" class="tech-btn">Contact Shopify Expert</a>', '<a href="/" class="tech-btn" data-i18n="btn_contact">Contact Shopify Expert</a>'],
    ['<a href="/" class="back-btn">← Back to Hub</a>', '<a href="/" class="back-btn" data-i18n="back_to_hub">← Back to Hub</a>']
  ],
  'beauty/index.html': [
    ['<h1 class="beauty-hero-title">Unveil your<br>true <i>radiance</i></h1>', '<h1 class="beauty-hero-title" data-i18n="beauty_hero_title">Unveil your<br>true <i>radiance</i></h1>'],
    ['<p class="beauty-hero-desc">Premium cosmetics designed to enhance your natural beauty. Experience the luxury of Lumière.</p>', '<p class="beauty-hero-desc" data-i18n="beauty_hero_desc">Premium cosmetics designed to enhance your natural beauty. Experience the luxury of Lumière.</p>'],
    ['<a href="#" class="beauty-btn">Shop Collection</a>', '<a href="#" class="beauty-btn" data-i18n="beauty_btn_shop">Shop Collection</a>'],
    ['<h2 class="beauty-title" style="text-align: center; margin-bottom: 1rem;">Our Bestsellers</h2>', '<h2 class="beauty-title" style="text-align: center; margin-bottom: 1rem;" data-i18n="beauty_bestsellers_title">Our Bestsellers</h2>'],
    ['<p style="text-align: center; margin-bottom: 4rem; color: #7f6e65;">Our customers\' favorite products for a perfect routine.</p>', '<p style="text-align: center; margin-bottom: 4rem; color: #7f6e65;" data-i18n="beauty_bestsellers_desc">Our customers\' favorite products for a perfect routine.</p>'],
    ['<h2 class="beauty-title" style="text-align: center;">Lumière Beauty Elegance</h2>', '<h2 class="beauty-title" style="text-align: center;" data-i18n="beauty_features_title">Lumière Beauty Elegance</h2>'],
    ['<h3 class="feature-title">Refined Aesthetics</h3>', '<h3 class="feature-title" data-i18n="beauty_feat1_title">Refined Aesthetics</h3>'],
    ['<p class="feature-desc" style="color: #7f6e65;">Nude, pastel color palette denoting luxury and femininity.</p>', '<p class="feature-desc" style="color: #7f6e65;" data-i18n="beauty_feat1_desc">Nude, pastel color palette denoting luxury and femininity.</p>'],
    ['<h3 class="feature-title">Focus on Textures</h3>', '<h3 class="feature-title" data-i18n="beauty_feat2_title">Focus on Textures</h3>'],
    ['<p class="feature-desc" style="color: #7f6e65;">Photo galleries designed to highlight cosmetic product textures.</p>', '<p class="feature-desc" style="color: #7f6e65;" data-i18n="beauty_feat2_desc">Photo galleries designed to highlight cosmetic product textures.</p>'],
    ['<h3 class="feature-title">Integrated Reviews</h3>', '<h3 class="feature-title" data-i18n="beauty_feat3_title">Integrated Reviews</h3>'],
    ['<p class="feature-desc" style="color: #7f6e65;">Elegant visual rating system, essential for the beauty industry.</p>', '<p class="feature-desc" style="color: #7f6e65;" data-i18n="beauty_feat3_desc">Elegant visual rating system, essential for the beauty industry.</p>'],
    ['<h2 class="cta-title">Elevate Your Beauty Brand</h2>', '<h2 class="cta-title" data-i18n="section_cta_title">Elevate Your Beauty Brand</h2>'],
    ['<p class="cta-desc" style="color: #7f6e65;">Choose Lumière Beauty to offer your customers a truly premium online shopping experience.</p>', '<p class="cta-desc" style="color: #7f6e65;" data-i18n="section_cta_desc">Choose Lumière Beauty to offer your customers a truly premium online shopping experience.</p>'],
    ['<a href="/" class="beauty-btn">Contactează-ne</a>', '<a href="/" class="beauty-btn" data-i18n="btn_contact">Contact Shopify Expert</a>'],
    ['<a href="/" class="back-btn">← Back to Hub</a>', '<a href="/" class="back-btn" data-i18n="back_to_hub">← Back to Hub</a>']
  ],
  'pets/index.html': [
    ['<h1 class="pets-hero-title">Only the best<br><span>for your best friends</span></h1>', '<h1 class="pets-hero-title" data-i18n="pets_hero_title">Only the best<br><span>for your best friends</span></h1>'],
    ['<p class="pets-hero-desc">Premium toys, accessories, and treats. Because they deserve nothing but the best.</p>', '<p class="pets-hero-desc" data-i18n="pets_hero_desc">Premium toys, accessories, and treats. Because they deserve nothing but the best.</p>'],
    ['<a href="#" class="pets-btn">Shop Treats</a>', '<a href="#" class="pets-btn" data-i18n="pets_btn_shop">Shop Treats</a>'],
    ['<h2 class="pets-title" style="text-align: center; margin-bottom: 1rem;">Happy Tails Collection</h2>', '<h2 class="pets-title" style="text-align: center; margin-bottom: 1rem;" data-i18n="section_featured">Happy Tails Collection</h2>'],
    ['<p style="text-align: center; margin-bottom: 4rem; color: #555;">Discover our most loved products for your furry friends.</p>', '<p style="text-align: center; margin-bottom: 4rem; color: #555;" data-i18n="section_featured_desc">Discover our most loved products for your furry friends.</p>'],
    ['<h2 class="pets-title" style="text-align: center;">The Joyful Pets Magic</h2>', '<h2 class="pets-title" style="text-align: center;" data-i18n="pets_features_title">The Joyful Pets Magic</h2>'],
    ['<h3 class="feature-title">Friendly Design</h3>', '<h3 class="feature-title" data-i18n="pets_feat1_title">Friendly Design</h3>'],
    ['<p class="feature-desc" style="color: #555;">Warm colors, rounded edges, and a playful vibe that instantly attracts.</p>', '<p class="feature-desc" style="color: #555;" data-i18n="pets_feat1_desc">Warm colors, rounded edges, and a playful vibe that instantly attracts.</p>'],
    ['<h3 class="feature-title">Intuitive Navigation</h3>', '<h3 class="feature-title" data-i18n="pets_feat2_title">Intuitive Navigation</h3>'],
    ['<p class="feature-desc" style="color: #555;">Easy to access categories (Dogs, Cats, Birds) for a seamless experience.</p>', '<p class="feature-desc" style="color: #555;" data-i18n="pets_feat2_desc">Easy to access categories (Dogs, Cats, Birds) for a seamless experience.</p>'],
    ['<h3 class="feature-title">Visual Community</h3>', '<h3 class="feature-title" data-i18n="pets_feat3_title">Visual Community</h3>'],
    ['<p class="feature-desc" style="color: #555;">Integrated sections for social media and reviews with pet photos.</p>', '<p class="feature-desc" style="color: #555;" data-i18n="pets_feat3_desc">Integrated sections for social media and reviews with pet photos.</p>'],
    ['<h2 class="cta-title">Build a Loving Brand</h2>', '<h2 class="cta-title" data-i18n="section_cta_title">Build a Loving Brand</h2>'],
    ['<p class="cta-desc" style="color: #555;">Choose Joyful Pets to create a heartwarming online store for pet lovers.</p>', '<p class="cta-desc" style="color: #555;" data-i18n="section_cta_desc">Choose Joyful Pets to create a heartwarming online store for pet lovers.</p>'],
    ['<a href="/" class="pets-btn">Contact Shopify Expert</a>', '<a href="/" class="pets-btn" data-i18n="btn_contact">Contact Shopify Expert</a>'],
    ['<a href="/" class="back-btn">← Back to Hub</a>', '<a href="/" class="back-btn" data-i18n="back_to_hub">← Back to Hub</a>']
  ],
  'education/index.html': [
    ['<h1 class="edu-hero-title">The next step<br>in your career.</h1>', '<h1 class="edu-hero-title" data-i18n="edu_hero_title">The next step<br>in your career.</h1>'],
    ['<p class="edu-hero-desc">Interactive online courses, 1-on-1 mentorship, and recognized certifications.</p>', '<p class="edu-hero-desc" data-i18n="edu_hero_desc">Interactive online courses, 1-on-1 mentorship, and recognized certifications.</p>'],
    ['<a href="#" class="edu-btn">Start Learning</a>', '<a href="#" class="edu-btn" data-i18n="edu_btn_shop">Start Learning</a>'],
    ['<h2 class="edu-title" style="text-align: center; margin-bottom: 1rem;">Top Programs</h2>', '<h2 class="edu-title" style="text-align: center; margin-bottom: 1rem;" data-i18n="edu_programs_title">Top Programs</h2>'],
    ['<p style="text-align: center; margin-bottom: 4rem; color: #475569;">Choose the path to success from our selection of intensive courses.</p>', '<p style="text-align: center; margin-bottom: 4rem; color: #475569;" data-i18n="edu_programs_desc">Choose the path to success from our selection of intensive courses.</p>'],
    ['<h2 class="edu-title" style="text-align: center;">Why EduPremier?</h2>', '<h2 class="edu-title" style="text-align: center;" data-i18n="edu_features_title">Why EduPremier?</h2>'],
    ['<h3 class="feature-title">Absolute Clarity</h3>', '<h3 class="feature-title" data-i18n="edu_feat1_title">Absolute Clarity</h3>'],
    ['<p class="feature-desc" style="color: #475569;">Clean design that eliminates distractions, focusing exclusively on content.</p>', '<p class="feature-desc" style="color: #475569;" data-i18n="edu_feat1_desc">Clean design that eliminates distractions, focusing exclusively on content.</p>'],
    ['<h3 class="feature-title">Curriculum Structuring</h3>', '<h3 class="feature-title" data-i18n="edu_feat2_title">Curriculum Structuring</h3>'],
    ['<p class="feature-desc" style="color: #475569;">UI components specially created to present course modules and lessons.</p>', '<p class="feature-desc" style="color: #475569;" data-i18n="edu_feat2_desc">UI components specially created to present course modules and lessons.</p>'],
    ['<h3 class="feature-title">Social Proof</h3>', '<h3 class="feature-title" data-i18n="edu_feat3_title">Social Proof</h3>'],
    ['<p class="feature-desc" style="color: #475569;">Testimonial sections and logos of companies where alumni work.</p>', '<p class="feature-desc" style="color: #475569;" data-i18n="edu_feat3_desc">Testimonial sections and logos of companies where alumni work.</p>'],
    ['<h2 class="cta-title">Scale Your Academy</h2>', '<h2 class="cta-title" data-i18n="section_cta_title">Scale Your Academy</h2>'],
    ['<p class="cta-desc" style="color: #cbd5e1;">EduPremier is the ultimate theme for course creators and e-learning businesses.</p>', '<p class="cta-desc" style="color: #cbd5e1;" data-i18n="section_cta_desc">EduPremier is the ultimate theme for course creators and e-learning businesses.</p>'],
    ['<a href="/" class="edu-btn-secondary" style="border: none;">Cere o Ofertă</a>', '<a href="/" class="edu-btn-secondary" style="border: none;" data-i18n="btn_contact">Cere o Ofertă</a>'],
    ['<a href="/" class="back-btn">← Back to Hub</a>', '<a href="/" class="back-btn" data-i18n="back_to_hub">← Back to Hub</a>']
  ]
};

for (const [filepath, replacements] of Object.entries(filesToUpdate)) {
  const fullPath = path.join(__dirname, filepath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    for (const [oldStr, newStr] of replacements) {
      content = content.replace(oldStr, newStr);
    }
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${filepath}`);
  }
}
