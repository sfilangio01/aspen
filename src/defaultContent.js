export const ASSET_REPO = {
  owner: 'sfilangio01',
  repo: 'aspen-assets',
  contentPath: 'content/site.json',
}

export const DEFAULT_CONTENT = {
  theme: {
    background: '#fbf3e4',
    surface: '#fff9ef',
    softBand: '#e6ddd0',
    dark: '#24211d',
    text: '#191816',
    accent: '#2f6f79',
    pink: '#d99bb4',
    yellow: '#efe1ad',
    blue: '#b9d5de',
  },
  navName: 'Aspen McNealey',
  contactEmail: 'aspenmcnealey@gmail.com',
  contactPhone: '503-884-5729',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/aspenmcnealey/',
    whatsapp: 'https://wa.me/15038845729',
  },
  hero: {
    eyebrow: 'Creative marketing portfolio',
    titleTop: 'Smart work.',
    titleAccent: 'Playful pulse.',
    body: 'Aspen McNealey turns brand ideas, content concepts, and people-first instincts into work that feels warm, memorable, and ready for a creative team.',
    primaryCta: 'See the work',
    pdfCta: 'Portfolio PDF',
    coverImage: '/assets/pdf-pages/page-01.png',
    featureImage: '/assets/pdf-pages/page-08.png',
    chips: ['branding', 'content'],
  },
  capabilities: [
    'Brand concepts',
    'Content direction',
    'Campaign ideas',
    'Hospitality instincts',
    'Talent-minded energy',
    'Visual storytelling',
  ],
  workIntro: {
    eyebrow: 'Selected work',
    title: 'Ideas with a point of view.',
    body: 'The portfolio mixes branding concepts, visual direction, and campaign-ready content. It feels casual on purpose, but the thinking is structured: audience, shelf appeal, mood, and momentum.',
  },
  projects: [
    {
      title: 'Good Ode Branding',
      kicker: 'Brand system draft',
      copy: 'A better-for-you condiment concept built around clean ingredients, shelf appeal, and a retro-meets-modern personality.',
      image: '/assets/pdf-pages/page-08.png',
      color: '#dcebf0',
      stats: ['Brand mockup', 'Color psychology', 'Social thumbnails'],
    },
    {
      title: 'Coastal Cafe Concept',
      kicker: 'Lincoln City, Oregon',
      copy: 'A sunny cafe direction with breezy visuals, approachable voice, and a local coastal feel made for food, coffee, and casual discovery.',
      image: '/assets/pdf-pages/page-09.png',
      color: '#ead2bd',
      stats: ['Naming energy', 'Visual tone', 'Hospitality brand'],
    },
    {
      title: 'Mock Instagram Feed',
      kicker: 'Content direction',
      copy: 'A set of feed concepts for food and beverage moments, designed to feel scroll-stopping without losing clarity.',
      image: '/assets/pdf-pages/page-10.png',
      color: '#eee2b9',
      stats: ['Feed planning', 'Visual rhythm', 'Campaign ideas'],
    },
  ],
  slideIntro: {
    eyebrow: 'Portfolio slides',
    title: 'A closer look.',
    body: 'Brand boards, campaign ideas, and content concepts presented with the same playful polish as the full portfolio.',
  },
  slides: [
    { src: '/assets/pdf-pages/page-01.png', title: 'Portfolio Cover', tag: 'Intro' },
    { src: '/assets/pdf-pages/page-03.png', title: 'About Aspen', tag: 'Personal story' },
    { src: '/assets/pdf-pages/page-07.png', title: 'Photography', tag: 'Visual direction' },
    { src: '/assets/pdf-pages/page-08.png', title: 'Good Ode', tag: 'Brand system' },
    { src: '/assets/pdf-pages/page-09.png', title: 'Coastal Cafe', tag: 'Concept branding' },
    { src: '/assets/pdf-pages/page-10.png', title: 'Mock Instagram Feed', tag: 'Content planning' },
  ],
  about: {
    image: '/assets/pdf-pages/page-03.png',
    sticker: 'hi, Aspen here',
    eyebrow: 'About',
    title: 'Creative mind, people person.',
    paragraphs: [
      'Aspen graduated in 2025 with a B.S. in Design and Innovation Management from Oregon State University. She is looking for her next role in marketing and talent management, bringing a visual eye, a team-first attitude, and eight years of customer service experience.',
      'Outside work, she is into cooking, traveling, and wine tasting with friends. That mix shows up in the work: warm, curious, social, and built for real people.',
    ],
    stats: [
      { number: '8+', label: 'years customer service' },
      { number: '2025', label: 'B.S. Design & Innovation Management' },
      { number: '3 mo.', label: 'Europe au pair travel chapter' },
    ],
  },
  toolkit: {
    eyebrow: 'Toolkit',
    title: 'Skills with sparkle.',
    cta: 'Start a conversation',
    items: [
      { icon: 'Palette', title: 'Brand Identity', text: 'Color, type, moodboards, and clear visual systems.' },
      { icon: 'Megaphone', title: 'Marketing Concepts', text: 'Campaign angles that make products feel memorable.' },
      { icon: 'Camera', title: 'Photo Direction', text: 'Styled product shots with personality and intent.' },
      { icon: 'Users', title: 'Talent Mindset', text: 'People-first energy from years of service experience.' },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Real-world rhythm.',
    body: 'Service work, sales, and project management give Aspen practical instincts: read the room, stay organized, communicate clearly, and keep people moving toward a good outcome.',
    education: {
      title: 'Oregon State University',
      text: 'B.S. in Design and Innovation Management, class of 2025. Earlier foundation at Cascade High School in Turner, Oregon.',
    },
    jobs: [
      { years: '2025-2026', role: 'Office Assistant, Sales, & Project Management', place: 'The Marble Center', icon: 'BriefcaseBusiness' },
      { years: '2024-2025', role: 'Restaurant Server', place: 'Masonry Grill', icon: 'Store' },
      { years: '2019-2024', role: 'Barista', place: 'Dutch Bros Coffee', icon: 'Coffee' },
    ],
  },
  contact: {
    badges: ['Open to creative roles', 'Marketing + talent'],
    title: "Let's make something people remember.",
    body: 'For creative teams, hospitality brands, agencies, or talent-led businesses that need someone upbeat, organized, and visually fluent.',
    location: 'Oregon roots, travel-ready mindset.',
    social: 'LinkedIn + WhatsApp ready for direct outreach.',
  },
}

export const contentUrl = () =>
  `https://cdn.jsdelivr.net/gh/${ASSET_REPO.owner}/${ASSET_REPO.repo}@main/${ASSET_REPO.contentPath}`
