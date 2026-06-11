import { useEffect } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Coffee,
  Download,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Phone,
  Sparkles,
  Star,
  Store,
  Users,
  WandSparkles,
} from 'lucide-react'

const portfolioSlides = [
  {
    src: '/assets/pdf-pages/page-07.png',
    title: 'Photography',
    tag: 'Visual direction',
  },
  {
    src: '/assets/pdf-pages/page-08.png',
    title: 'Good Ode',
    tag: 'Brand system',
  },
  {
    src: '/assets/pdf-pages/page-09.png',
    title: 'Coastal Cafe',
    tag: 'Concept branding',
  },
  {
    src: '/assets/pdf-pages/page-10.png',
    title: 'Mock Instagram Feed',
    tag: 'Content planning',
  },
]

const projects = [
  {
    title: 'Good Ode Branding',
    kicker: 'Brand system draft',
    copy:
      'A better-for-you condiment concept built around clean ingredients, shelf appeal, and a retro-meets-modern personality.',
    image: '/assets/pdf-pages/page-08.png',
    color: '#dcebf0',
    stats: ['Brand mockup', 'Color psychology', 'Social thumbnails'],
  },
  {
    title: 'Coastal Cafe Concept',
    kicker: 'Lincoln City, Oregon',
    copy:
      'A sunny cafe direction with breezy visuals, approachable voice, and a local coastal feel made for food, coffee, and casual discovery.',
    image: '/assets/pdf-pages/page-09.png',
    color: '#ead2bd',
    stats: ['Naming energy', 'Visual tone', 'Hospitality brand'],
  },
  {
    title: 'Mock Instagram Feed',
    kicker: 'Content direction',
    copy:
      'A set of feed concepts for food and beverage moments, designed to feel scroll-stopping without losing clarity.',
    image: '/assets/pdf-pages/page-10.png',
    color: '#eee2b9',
    stats: ['Feed planning', 'Visual rhythm', 'Campaign ideas'],
  },
]

const toolkit = [
  { icon: Palette, title: 'Brand Identity', text: 'Color, type, moodboards, and clear visual systems.' },
  { icon: Megaphone, title: 'Marketing Concepts', text: 'Campaign angles that make products feel memorable.' },
  { icon: Camera, title: 'Photo Direction', text: 'Styled product shots with personality and intent.' },
  { icon: Users, title: 'Talent Mindset', text: 'People-first energy from years of service experience.' },
]

const timeline = [
  {
    years: '2025-2026',
    role: 'Office Assistant, Sales, & Project Management',
    place: 'The Marble Center',
    icon: BriefcaseBusiness,
  },
  {
    years: '2024-2025',
    role: 'Restaurant Server',
    place: 'Masonry Grill',
    icon: Store,
  },
  {
    years: '2019-2024',
    role: 'Barista',
    place: 'Dutch Bros Coffee',
    icon: Coffee,
  },
]

const quickStats = [
  ['8+', 'years customer service'],
  ['2025', 'B.S. Design & Innovation Management'],
  ['3 mo.', 'Europe au pair travel chapter'],
]

function Nav() {
  const links = ['Work', 'About', 'Experience', 'Contact']

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-[#191816] bg-[#fff9ef]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2 font-black uppercase tracking-normal">
          <span className="grid size-10 place-items-center rounded-full border-2 border-[#191816] bg-[#f7d94c] transition-transform group-hover:rotate-12">
            AM
          </span>
          <span className="hidden sm:inline">Aspen McNealey</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold uppercase md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-[#13707f]">
              {link}
            </a>
          ))}
        </div>
        <a
          href="mailto:aspenmcnealey@gmail.com"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[#191816] bg-[#ff6cae] px-4 text-sm font-black uppercase text-[#191816] shadow-[4px_4px_0_#191816] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#191816]"
        >
          <Mail size={17} />
          Hire Aspen
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#191816] bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_#191816]">
            <Sparkles size={16} />
            Creative marketing + talent energy
          </div>
          <h1 className="display max-w-4xl text-[clamp(3.6rem,10vw,8.7rem)] leading-[0.86] text-[#191816]">
            Not boring.
            <span className="block text-[#13707f]">Still booked.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#35302b] sm:text-xl">
            Aspen McNealey builds playful brand moments, styled content, and marketing ideas for teams that care about taste, people, and a good first impression.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#191816] bg-[#13707f] px-6 font-black uppercase text-white shadow-[5px_5px_0_#191816] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#191816]"
            >
              See the work
              <ArrowRight size={18} />
            </a>
            <a
              href="/aspen-mcnealey-marketing-portfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#191816] bg-white px-6 font-black uppercase text-[#191816] shadow-[5px_5px_0_#191816] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#191816]"
            >
              Portfolio PDF
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[540px]">
          <div className="absolute right-0 top-2 w-[78%] overflow-hidden rounded-[2rem] border-2 border-[#191816] bg-[#f3df8f] p-3 shadow-[10px_10px_0_#191816]">
            <img
              src="/assets/pdf-pages/page-01.png"
              alt="Aspen McNealey portfolio cover"
              className="h-[350px] w-full rounded-[1.35rem] object-cover object-center sm:h-[430px]"
            />
          </div>
          <div className="float-card absolute bottom-12 left-0 w-[58%] overflow-hidden rounded-3xl border-2 border-[#191816] bg-white p-3 shadow-[8px_8px_0_#191816]">
            <div className="slide-frame h-72 rounded-2xl">
              <img src="/assets/pdf-pages/page-08.png" alt="Good Ode branding slide" className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="absolute left-4 top-16 rounded-full border-2 border-[#191816] bg-[#e9a0bd] px-5 py-3 font-black uppercase shadow-[5px_5px_0_#191816]">
            branding
          </div>
          <div className="absolute bottom-1 right-6 rounded-full border-2 border-[#191816] bg-[#b9d5de] px-5 py-3 font-black uppercase shadow-[5px_5px_0_#191816]">
            content
          </div>
        </div>
      </div>

      <div className="border-y-2 border-[#191816] bg-[#191816] py-3 text-[#fff9ef]">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-lg font-black uppercase">
          {Array.from({ length: 2 }).map((_, group) => (
            <div key={group} className="flex gap-8">
              <span>Branding</span>
              <span>Photography</span>
              <span>Marketing Concepts</span>
              <span>Hospitality Energy</span>
              <span>Talent Management Curious</span>
              <span>Social Content</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="bg-[#fbf3e4] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[#191816] bg-[#efe1ad] px-4 py-2 text-sm font-black uppercase">
              Selected work
            </p>
            <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9]">Color, copy, click.</h2>
          </div>
          <p className="max-w-2xl text-lg font-semibold leading-8 text-[#4c433b]">
            The portfolio mixes branding concepts, visual direction, and campaign-ready content. It feels casual on purpose, but the thinking is structured: audience, shelf appeal, mood, and momentum.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group rounded-[1.75rem] border-2 border-[#191816] bg-white p-4 shadow-[7px_7px_0_#191816] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#191816] ${index === 1 ? 'lg:mt-10' : ''}`}
            >
              <div className="slide-frame relative overflow-hidden rounded-[1.25rem] border-2 border-[#191816]" style={{ backgroundColor: project.color }}>
                <img
                  src={project.image}
                  alt={`${project.title} portfolio page`}
                  className="aspect-[4/3] w-full object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-5">
                <p className="text-sm font-black uppercase text-[#13707f]">{project.kicker}</p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                <p className="mt-3 min-h-24 text-base font-semibold leading-7 text-[#51473f]">{project.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span key={stat} className="rounded-full border-2 border-[#191816] bg-[#fff9ef] px-3 py-1 text-xs font-black uppercase">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioSlideWall() {
  return (
    <section className="border-y-2 border-[#191816] bg-[#e6ddd0] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[#191816] bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_#191816]">
              Portfolio slides
            </p>
            <h2 className="display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.9]">A closer look.</h2>
          </div>
          <p className="max-w-xl text-base font-semibold leading-7 text-[#51473f]">
            Brand boards, campaign ideas, and content concepts presented with the same playful polish as the full portfolio.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
        {portfolioSlides.map((image, index) => (
          <figure
            key={image.src}
            className={`rounded-[1.5rem] border-2 border-[#191816] bg-white p-3 shadow-[6px_6px_0_#191816] ${index % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
          >
            <div className="slide-frame aspect-[4/5] w-full rounded-[1rem]">
              <img src={image.src} alt={image.title} className="h-full w-full object-contain p-2" />
            </div>
            <figcaption className="flex min-h-20 flex-col justify-center px-1 pt-3">
              <span className="text-xs font-black uppercase text-[#13707f]">{image.tag}</span>
              <span className="text-lg font-black">{image.title}</span>
            </figcaption>
          </figure>
        ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <img
            src="/assets/pdf-pages/page-03.png"
            alt="About Aspen portfolio page"
            className="w-full rounded-[2rem] border-2 border-[#191816] object-cover shadow-[10px_10px_0_#191816]"
          />
          <div className="absolute -bottom-5 left-6 rounded-full border-2 border-[#191816] bg-[#ff6cae] px-5 py-3 font-black uppercase shadow-[5px_5px_0_#191816]">
            hi, Aspen here
          </div>
        </div>
        <div>
          <p className="mb-3 inline-flex rounded-full border-2 border-[#191816] bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_#191816]">
            About
          </p>
          <h2 className="display text-[clamp(2.7rem,7vw,6rem)] leading-[0.9]">
            Creative mind, people person.
          </h2>
          <p className="mt-6 text-lg font-semibold leading-8 text-[#4c433b]">
            Aspen graduated in 2025 with a B.S. in Design and Innovation Management from Oregon State University. She is looking for her next role in marketing and talent management, bringing a visual eye, a team-first attitude, and eight years of customer service experience.
          </p>
          <p className="mt-4 text-lg font-semibold leading-8 text-[#4c433b]">
            Outside work, she is into cooking, traveling, and wine tasting with friends. That mix shows up in the work: warm, curious, social, and built for real people.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {quickStats.map(([number, label]) => (
              <div key={label} className="rounded-3xl border-2 border-[#191816] bg-white p-5 shadow-[5px_5px_0_#191816]">
                <div className="display text-4xl text-[#13707f]">{number}</div>
                <div className="mt-2 text-sm font-black uppercase leading-5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Toolkit() {
  return (
    <section className="bg-[#191816] px-4 py-20 text-[#fff9ef] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[#fff9ef] bg-[#2f6f79] px-4 py-2 text-sm font-black uppercase">
              Toolkit
            </p>
            <h2 className="display text-[clamp(2.7rem,7vw,5.8rem)] leading-[0.9]">Skills with sparkle.</h2>
          </div>
          <a
            href="mailto:aspenmcnealey@gmail.com"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#fff9ef] bg-[#efe1ad] px-6 font-black uppercase text-[#191816] transition hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {toolkit.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[1.5rem] border-2 border-[#fff9ef] bg-[#27231e] p-6 transition hover:-translate-y-1">
                <div className="mb-5 grid size-13 place-items-center rounded-full border-2 border-[#fff9ef] bg-[#d99bb4] text-[#191816]">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 font-semibold leading-7 text-[#eadfcb]">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[#191816] bg-[#efe1ad] px-4 py-2 text-sm font-black uppercase">
              Experience
            </p>
            <h2 className="display text-[clamp(2.7rem,7vw,5.8rem)] leading-[0.9]">Real-world rhythm.</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#4c433b]">
              Service work, sales, and project management give Aspen practical instincts: read the room, stay organized, communicate clearly, and keep people moving toward a good outcome.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.5rem] border-2 border-[#191816] bg-white p-6 shadow-[7px_7px_0_#191816]">
              <div className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-[#191816] bg-[#b9d5de]">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <p className="font-black uppercase text-[#13707f]">Education</p>
                  <h3 className="text-2xl font-black">Oregon State University</h3>
                  <p className="mt-2 font-semibold leading-7 text-[#51473f]">
                    B.S. in Design and Innovation Management, class of 2025. Earlier foundation at Cascade High School in Turner, Oregon.
                  </p>
                </div>
              </div>
            </div>

            {timeline.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.role} className="rounded-[1.5rem] border-2 border-[#191816] bg-white p-6 shadow-[7px_7px_0_#191816]">
                  <div className="flex items-start gap-4">
                    <div className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-[#191816] bg-[#d99bb4]">
                      <Icon size={25} />
                    </div>
                    <div>
                      <p className="font-black uppercase text-[#13707f]">{item.years}</p>
                      <h3 className="text-2xl font-black">{item.role}</h3>
                      <p className="mt-2 font-semibold text-[#51473f]">{item.place}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#efe1ad] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border-2 border-[#191816] bg-[#fff9ef] p-6 shadow-[10px_10px_0_#191816] md:p-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#191816] bg-[#b9d5de] px-4 py-2 font-black uppercase">
              <BadgeCheck size={17} />
              Open to creative roles
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#191816] bg-[#d99bb4] px-4 py-2 font-black uppercase">
              <HeartHandshake size={17} />
              Marketing + talent
            </span>
          </div>
          <h2 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.88]">
            Let&apos;s make something people remember.
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#4c433b]">
            For creative teams, hospitality brands, agencies, or talent-led businesses that need someone upbeat, organized, and visually fluent.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <a href="mailto:aspenmcnealey@gmail.com" className="group rounded-[1.5rem] border-2 border-[#191816] bg-white p-5 shadow-[6px_6px_0_#191816] transition hover:-translate-y-1">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="grid size-13 place-items-center rounded-full border-2 border-[#191816] bg-[#13707f] text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-black uppercase text-[#13707f]">Email</p>
                <p className="break-all text-lg font-black sm:text-xl">aspenmcnealey@gmail.com</p>
              </div>
            </div>
          </a>
          <a href="tel:+15038845729" className="group rounded-[1.5rem] border-2 border-[#191816] bg-white p-5 shadow-[6px_6px_0_#191816] transition hover:-translate-y-1">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="grid size-13 place-items-center rounded-full border-2 border-[#191816] bg-[#d99bb4]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-black uppercase text-[#13707f]">Phone</p>
                <p className="text-xl font-black">503-884-5729</p>
              </div>
            </div>
          </a>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border-2 border-[#191816] bg-white p-5 shadow-[6px_6px_0_#191816]">
              <MapPin className="mb-3" />
              <p className="font-black">Oregon roots, travel-ready mindset.</p>
            </div>
            <div className="rounded-[1.5rem] border-2 border-[#191816] bg-white p-5 shadow-[6px_6px_0_#191816]">
              <Instagram className="mb-3" />
              <p className="font-black">Made for content, community, and culture.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return
      const target = document.querySelector(window.location.hash)
      target?.scrollIntoView({ block: 'start' })
    }

    const timers = [0, 120, 650, 1400].map((delay) => window.setTimeout(scrollToHash, delay))
    window.addEventListener('hashchange', scrollToHash)
    window.addEventListener('load', scrollToHash)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener('hashchange', scrollToHash)
      window.removeEventListener('load', scrollToHash)
    }
  }, [])

  return (
    <div className="min-h-screen overflow-hidden text-[#191816]">
      <Nav />
      <main>
        <Hero />
        <Work />
        <PortfolioSlideWall />
        <About />
        <Toolkit />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t-2 border-[#191816] bg-[#191816] px-4 py-8 text-[#fff9ef] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-bold uppercase md:flex-row md:items-center md:justify-between">
          <p>Aspen McNealey Portfolio</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1"><Star size={15} /> Creative marketing</span>
            <span className="inline-flex items-center gap-1"><WandSparkles size={15} /> Branding</span>
            <span className="inline-flex items-center gap-1"><Sparkles size={15} /> Talent-minded</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
