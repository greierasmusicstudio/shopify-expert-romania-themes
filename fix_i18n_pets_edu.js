const fs = require('fs');

const data = {
  'pets/index.html': [
    ['<h1 class="pets-title">Happy Pets,<br>Happy Life!</h1>', '<h1 class="pets-title" data-i18n="pets_hero_title">Happy Pets,<br>Happy Life!</h1>'],
    ['<p class="pets-desc">Discover premium, safe, and fun accessories for your furry best friends. Because they deserve the best.</p>', '<p class="pets-desc" data-i18n="pets_hero_desc">Discover premium, safe, and fun accessories for your furry best friends. Because they deserve the best.</p>'],
    ['<a href="#" class="pets-btn">Shop Collection</a>', '<a href="#" class="pets-btn" data-i18n="pets_btn_shop">Shop Collection</a>'],
    ['<h2 class="pets-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">Noutăți Pufoase</h2>', '<h2 class="pets-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;" data-i18n="pets_latest_title">Noutăți Pufoase</h2>'],
    ['<p class="pets-desc" style="text-align: center; margin: 0 auto 4rem auto;">Cele mai iubite produse de către blănoșii noștri.</p>', '<p class="pets-desc" style="text-align: center; margin: 0 auto 4rem auto;" data-i18n="pets_latest_desc">Cele mai iubite produse de către blănoșii noștri.</p>'],
    ['<h2 class="pets-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;">De ce Joyful Pets?</h2>', '<h2 class="pets-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;" data-i18n="pets_features_title">De ce Joyful Pets?</h2>'],
    ['<h3 class="feature-title" style="font-weight: 700;">Design Jucăuș</h3>', '<h3 class="feature-title" style="font-weight: 700;" data-i18n="pets_feat1_title">Design Jucăuș</h3>'],
    ['<p class="feature-desc" style="color: #666;">O interfață plină de viață, culori vibrante și micro-interacțiuni care aduc zâmbete.</p>', '<p class="feature-desc" style="color: #666;" data-i18n="pets_feat1_desc">O interfață plină de viață, culori vibrante și micro-interacțiuni care aduc zâmbete.</p>'],
    ['<h3 class="feature-title" style="font-weight: 700;">Navigare Ușoară</h3>', '<h3 class="feature-title" style="font-weight: 700;" data-i18n="pets_feat2_title">Navigare Ușoară</h3>'],
    ['<p class="feature-desc" style="color: #666;">Categorii vizuale clare pentru câini, pisici și alte animale de companie.</p>', '<p class="feature-desc" style="color: #666;" data-i18n="pets_feat2_desc">Categorii vizuale clare pentru câini, pisici și alte animale de companie.</p>'],
    ['<h3 class="feature-title" style="font-weight: 700;">Comunitate</h3>', '<h3 class="feature-title" style="font-weight: 700;" data-i18n="pets_feat3_title">Comunitate</h3>'],
    ['<p class="feature-desc" style="color: #666;">Secțiuni integrate pentru recenzii cu poze și blog-uri pentru iubitorii de animale.</p>', '<p class="feature-desc" style="color: #666;" data-i18n="pets_feat3_desc">Secțiuni integrate pentru recenzii cu poze și blog-uri pentru iubitorii de animale.</p>'],
    ['<h2 class="pets-title" style="font-size: 3rem;">Iubești Animalele?</h2>', '<h2 class="pets-title" style="font-size: 3rem;" data-i18n="pets_cta_title">Iubești Animalele?</h2>'],
    ['<p class="pets-desc" style="margin: 0 auto 3rem auto;">Deschide-ți propriul pet shop online cu cea mai prietenoasă temă de la Shopify Expert Romania.</p>', '<p class="pets-desc" style="margin: 0 auto 3rem auto;" data-i18n="pets_cta_desc">Deschide-ți propriul pet shop online cu cea mai prietenoasă temă de la Shopify Expert Romania.</p>']
  ],
  'education/index.html': [
    ['<h1 class="edu-title">Master the skills of <span>tomorrow.</span></h1>', '<h1 class="edu-title" data-i18n="edu_hero_title">Master the skills of <span>tomorrow.</span></h1>'],
    ['<p class="edu-desc">Join over 100,000 students learning from industry experts. Get unlimited access to premium courses, interactive labs, and professional certificates.</p>', '<p class="edu-desc" data-i18n="edu_hero_desc">Join over 100,000 students learning from industry experts. Get unlimited access to premium courses, interactive labs, and professional certificates.</p>'],
    ['<a href="#" class="edu-btn-primary">Explore Courses</a>', '<a href="#" class="edu-btn-primary" data-i18n="edu_btn_explore">Explore Courses</a>'],
    ['<a href="#" class="edu-btn-secondary">View Syllabus</a>', '<a href="#" class="edu-btn-secondary" data-i18n="edu_btn_syllabus">View Syllabus</a>'],
    ['<h2 class="edu-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">Cursuri de Top</h2>', '<h2 class="edu-title" style="font-size: 3rem; text-align: center; margin-bottom: 1rem;" data-i18n="edu_courses_title">Cursuri de Top</h2>'],
    ['<p class="edu-desc" style="text-align: center; margin: 0 auto 4rem auto;">Alege din programele noastre de formare acreditate, dezvoltate alături de lideri din industrie.</p>', '<p class="edu-desc" style="text-align: center; margin: 0 auto 4rem auto;" data-i18n="edu_courses_desc">Alege din programele noastre de formare acreditate, dezvoltate alături de lideri din industrie.</p>'],
    ['<h2 class="edu-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;">De ce EduPremier?</h2>', '<h2 class="edu-title" style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem;" data-i18n="edu_features_title">De ce EduPremier?</h2>'],
    ['<h3 class="feature-title" style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">Certificări Recunoscute</h3>', '<h3 class="feature-title" style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;" data-i18n="edu_feat1_title">Certificări Recunoscute</h3>'],
    ['<p class="feature-desc">Integrare cu sisteme de generare a diplomelor și profile de studenți complet echipate.</p>', '<p class="feature-desc" data-i18n="edu_feat1_desc">Integrare cu sisteme de generare a diplomelor și profile de studenți complet echipate.</p>'],
    ['<h3 class="feature-title" style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">Player Video Dedicat</h3>', '<h3 class="feature-title" style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;" data-i18n="edu_feat2_title">Player Video Dedicat</h3>'],
    ['<p class="feature-desc">Suport avansat pentru streaming video fără întreruperi, cu opțiuni de subtitrări și notițe.</p>', '<p class="feature-desc" data-i18n="edu_feat2_desc">Suport avansat pentru streaming video fără întreruperi, cu opțiuni de subtitrări și notițe.</p>'],
    ['<h3 class="feature-title" style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">Gamificare</h3>', '<h3 class="feature-title" style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;" data-i18n="edu_feat3_title">Gamificare</h3>'],
    ['<p class="feature-desc">Puncte, insigne și progresie vizuală pentru a menține studenții motivați.</p>', '<p class="feature-desc" data-i18n="edu_feat3_desc">Puncte, insigne și progresie vizuală pentru a menține studenții motivați.</p>'],
    ['<h2 class="edu-title" style="font-size: 3rem; color: #fff;">Transformă Educația</h2>', '<h2 class="edu-title" style="font-size: 3rem; color: #fff;" data-i18n="edu_cta_title">Transformă Educația</h2>'],
    ['<p class="edu-desc" style="margin: 0 auto 3rem auto; color: #dbeafe;">Construiește propria academie online cu această temă avansată creată de Shopify Expert Romania.</p>', '<p class="edu-desc" style="margin: 0 auto 3rem auto; color: #dbeafe;" data-i18n="edu_cta_desc">Construiește propria academie online cu această temă avansată creată de Shopify Expert Romania.</p>']
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
