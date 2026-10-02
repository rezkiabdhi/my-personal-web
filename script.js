const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const translations = {
  id: {
    pageTitle: 'Abdhi Rezki — Personal Site',
    pageDescription: 'Profil Abdhi Rezki, siswa SMK 6 Tangerang Selatan.',
    navAbout: 'Tentang', navJourney: 'Pengalaman', navContact: 'Kontak', switchLabel: 'EN',
    languageLabel: 'Ganti bahasa ke Inggris', brandLabel: 'Kembali ke atas',
    navigationLabel: 'Navigasi utama', focusLabel: 'Fokus: menggambar, bermain, menonton, belajar',
    sayHello: 'Sapa saya', imageLabel: 'TERUS INGIN TAHU / 01',
    noteTop: '<span>✳</span> terbuka pada ide', schoolLabel: 'SMK 6<br />TANGSEL',
    tickerDraw: 'GAMBAR', tickerPlay: 'MAIN', tickerWatch: 'TONTON', tickerLearn: 'BELAJAR',
    heroEyebrow: 'Siswa · Tangerang Selatan',
    heroTitle: 'Belajar hari ini,<br /><em>membuat esok.</em>',
    heroLede: 'Halo, saya Abdhi Rezki, siswa SMK Negeri 6 Tangerang Selatan. Saya senang menggambar, bermain game, dan terus mencoba hal baru.',
    aboutButton: 'Kenalan lebih dekat', journeyButton: 'Lihat pengalaman',
    heroImageAlt: 'Potret Abdhi Rezki',
    heroStamp: 'Bikin<br /><strong>penasaran</strong>', profileIndex: '01 / PROFIL',
    profileTitle: 'Tidak harus<br /><span>langsung jago.</span>',
    profileLead: 'Yang penting mau mulai, mau bertanya, dan mau mengulang sampai jadi lebih baik.',
    profileBody: 'Saya siswa SMK Negeri 6 Tangerang Selatan yang menikmati proses belajar dan mencoba hal-hal baru, satu langkah dalam satu waktu.',
    hobbiesTitle: 'Hobi',
    hobbyArt: 'Menggambar: semi-realistis dan anime; masih belajar gaya realistis.',
    hobbyGames: 'Bermain Roblox, Blood Strike, dan Minecraft.', hobbyMovies: 'Menonton film Marvel.',
    admiredTitle: 'Orang yang dikagumi', admiredBody: 'Simo Häyhä, pahlawan nasional Finlandia.',
    factLearning: 'Terus<br />belajar', factLocation: 'Di<br />Tangsel', factCreator: 'Calon<br />kreator',
    experienceIndex: '02 / PENGALAMAN',
    experienceTitle: 'Proses yang<br /><span>membentuk saya.</span>',
    experienceIntro: 'Pengalaman yang saya jalani sambil terus belajar dan berkembang.',
    experienceCadetTitle: 'Ketarunaan di SMK Negeri 6',
    experienceCadetBody: 'Menjalani pengalaman ketarunaan sebagai bagian dari kehidupan sekolah.',
    experienceArtTitle: 'Mencoba gaya realistis',
    experienceArtBody: 'Pertama kali mencoba menggambar dengan gaya realistis selama satu minggu.',
    motto: 'Konsisten<br /><em>di satu waktu.</em>', mottoCaption: 'motto hidup',
    contactIndex: '03 / KONTAK', contactEyebrow: 'Punya ide atau ingin menyapa?',
    contactTitle: 'Mari buat<br /><em>sesuatu yang baik.</em>',
    footerMade: 'Dibuat dengan rasa ingin tahu <span class="footer-star">✳</span>', backToTop: 'Kembali ke atas ↑'
  },
  en: {
    pageTitle: 'Abdhi Rezki — Personal Site',
    pageDescription: 'The personal profile of Abdhi Rezki, a student at SMK 6 South Tangerang.',
    navAbout: 'About', navJourney: 'Experience', navContact: 'Contact', switchLabel: 'ID',
    languageLabel: 'Switch language to Indonesian', brandLabel: 'Back to top',
    navigationLabel: 'Main navigation', focusLabel: 'Focus: drawing, gaming, films, and learning',
    sayHello: 'Say hello', imageLabel: 'STAY CURIOUS / 01',
    noteTop: '<span>✳</span> open to ideas', schoolLabel: 'SMK 6<br />SOUTH TANGERANG',
    tickerDraw: 'DRAW', tickerPlay: 'PLAY', tickerWatch: 'WATCH', tickerLearn: 'LEARN',
    heroEyebrow: 'Student · South Tangerang',
    heroTitle: 'Learning today,<br /><em>shaping tomorrow.</em>',
    heroLede: "Hi, I'm Abdhi Rezki, a student at SMK Negeri 6 South Tangerang. I enjoy drawing, gaming, and trying new things.",
    aboutButton: 'Get to know me', journeyButton: 'See my experience',
    heroImageAlt: 'Portrait of Abdhi Rezki',
    heroStamp: 'Stay<br /><strong>curious</strong>', profileIndex: '01 / ABOUT',
    profileTitle: "You don't have to be<br /><span>great right away.</span>",
    profileLead: 'What matters is starting, asking questions, and practicing until you get better.',
    profileBody: 'I am a student at SMK Negeri 6 South Tangerang who enjoys learning and trying new things, one step at a time.',
    hobbiesTitle: 'Hobbies',
    hobbyArt: 'Drawing: semi-realistic and anime; still learning realistic art.',
    hobbyGames: 'Playing Roblox, Blood Strike, and Minecraft.', hobbyMovies: 'Watching Marvel movies.',
    admiredTitle: 'Someone I admire', admiredBody: 'Simo Häyhä, a Finnish national hero.',
    factLearning: 'Always<br />learning', factLocation: 'Based in<br />Tangsel', factCreator: 'Future<br />creator',
    experienceIndex: '02 / EXPERIENCE',
    experienceTitle: 'Experiences that<br /><span>shape me.</span>',
    experienceIntro: 'Some experiences from my ongoing journey of learning and growing.',
    experienceCadetTitle: 'Cadet training at SMK Negeri 6',
    experienceCadetBody: 'Taking part in cadet training as a part of school life.',
    experienceArtTitle: 'Trying realistic art',
    experienceArtBody: 'My first attempt at drawing in a realistic style, practiced for a week.',
    motto: 'Stay consistent,<br /><em>one moment at a time.</em>', mottoCaption: 'my life motto',
    contactIndex: '03 / CONTACT', contactEyebrow: 'Have an idea or just want to say hello?',
    contactTitle: "Let's make<br /><em>something good.</em>",
    footerMade: 'Made with curiosity <span class="footer-star">✳</span>', backToTop: 'Back to top ↑'
  }
};

const languageToggle = document.querySelector('#languageToggle');
const pageDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const content = translations[language];
  document.documentElement.lang = language;
  document.title = content.pageTitle;
  pageDescription.content = content.pageDescription;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = content[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = content[element.dataset.i18nAlt];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', content[element.dataset.i18nAria]);
  });

  languageToggle.setAttribute('aria-label', content.languageLabel);
  languageToggle.title = content.languageLabel;
  localStorage.setItem('site-language', language);
}

const savedLanguage = localStorage.getItem('site-language');
setLanguage(savedLanguage === 'en' ? 'en' : 'id');
languageToggle.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'id' ? 'en' : 'id');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));