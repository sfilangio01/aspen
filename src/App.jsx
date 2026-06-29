import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Coffee,
  Download,
  GraduationCap,
  HeartHandshake,
  ImagePlus,
  Instagram,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Phone,
  Save,
  Sparkles,
  Star,
  Store,
  Trash2,
  UploadCloud,
  Users,
  WandSparkles,
} from 'lucide-react'
import { DEFAULT_CONTENT } from './defaultContent'

const iconMap = {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Coffee,
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
}

const editableIconNames = ['Palette', 'Megaphone', 'Camera', 'Users', 'BriefcaseBusiness', 'Store', 'Coffee']

function mergeContent(base, incoming) {
  if (!incoming || typeof incoming !== 'object') return base
  if (Array.isArray(base)) return Array.isArray(incoming) ? incoming : base
  return Object.keys(base).reduce((next, key) => {
    const value = incoming[key]
    if (value === undefined) return next
    if (base[key] && typeof base[key] === 'object' && !Array.isArray(base[key])) {
      next[key] = mergeContent(base[key], value)
    } else {
      next[key] = value
    }
    return next
  }, { ...base })
}

function styleFor(theme) {
  return {
    '--bg': theme.background,
    '--surface': theme.surface,
    '--soft': theme.softBand,
    '--dark': theme.dark,
    '--text': theme.text,
    '--accent': theme.accent,
    '--pink': theme.pink,
    '--yellow': theme.yellow,
    '--blue': theme.blue,
  }
}

function useSiteContent() {
  const [content, setContent] = useState(DEFAULT_CONTENT)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    fetch(`/api/content?ts=${Date.now()}`, { cache: 'no-store' })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (alive && data?.content) setContent(mergeContent(DEFAULT_CONTENT, data.content))
      })
      .catch(() => {})
      .finally(() => alive && setLoading(false))

    return () => {
      alive = false
    }
  }, [])

  return { content, setContent, loading }
}

function Nav({ content }) {
  const links = ['Work', 'About', 'Experience', 'Contact']

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#191816]/20 bg-[color:var(--bg)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2 font-black uppercase tracking-normal">
          <span className="grid size-10 place-items-center rounded-full border-2 border-[color:var(--text)] bg-[color:var(--yellow)] transition-transform group-hover:rotate-12">
            AM
          </span>
          <span className="hidden sm:inline">{content.navName}</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold uppercase md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-[color:var(--accent)]">
              {link}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${content.contactEmail}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--pink)] px-4 text-sm font-black uppercase text-[color:var(--text)] shadow-[4px_4px_0_var(--text)] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--text)]"
        >
          <Mail size={17} />
          Hire Aspen
        </a>
      </nav>
    </header>
  )
}

function Hero({ content }) {
  const { hero } = content

  return (
    <section id="top" className="relative overflow-hidden pt-24">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_var(--text)]">
            <Sparkles size={16} />
            {hero.eyebrow}
          </div>
          <h1 className="display max-w-4xl text-[clamp(3.35rem,8.8vw,8rem)] leading-[0.88] text-[color:var(--text)]">
            {hero.titleTop}
            <span className="block text-[color:var(--accent)]">{hero.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#35302b] sm:text-xl">{hero.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--accent)] px-6 font-black uppercase text-white shadow-[5px_5px_0_var(--text)] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--text)]"
            >
              {hero.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a
              href="/aspen-mcnealey-marketing-portfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-white px-6 font-black uppercase text-[color:var(--text)] shadow-[5px_5px_0_var(--text)] transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--text)]"
            >
              {hero.pdfCta}
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute right-0 top-0 w-[88%] overflow-hidden rounded-[2rem] border-2 border-[color:var(--text)] bg-[color:var(--yellow)] p-3 shadow-[10px_10px_0_var(--text)]">
            <div className="slide-frame aspect-video rounded-[1.35rem]">
              <img src={hero.coverImage} alt={`${content.navName} portfolio cover`} className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="float-card absolute bottom-16 left-0 w-[68%] overflow-hidden rounded-3xl border-2 border-[color:var(--text)] bg-white p-3 shadow-[8px_8px_0_var(--text)]">
            <div className="slide-frame aspect-video rounded-2xl">
              <img src={hero.featureImage} alt="Featured portfolio slide" className="h-full w-full object-contain p-1" />
            </div>
          </div>
          {(hero.chips || []).slice(0, 2).map((chip, index) => (
            <div
              key={chip}
              className={`absolute rounded-full border-2 border-[color:var(--text)] px-5 py-3 font-black uppercase shadow-[5px_5px_0_var(--text)] ${
                index === 0 ? 'left-4 top-20 bg-[color:var(--pink)]' : 'bottom-6 right-6 bg-[color:var(--blue)]'
              }`}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>

      <div className="border-y-2 border-[color:var(--text)] bg-[color:var(--soft)] py-4 text-[color:var(--text)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {(content.capabilities || []).map((item) => (
            <span key={item} className="rounded-full border-2 border-[color:var(--text)] bg-[color:var(--bg)] px-4 py-2 text-sm font-black uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work({ content }) {
  return (
    <section id="work" className="bg-[color:var(--bg)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={content.workIntro.eyebrow} title={content.workIntro.title} body={content.workIntro.body} />
        <div className="grid gap-6 lg:grid-cols-3">
          {(content.projects || []).map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className={`group rounded-[1.75rem] border-2 border-[color:var(--text)] bg-white p-4 shadow-[7px_7px_0_var(--text)] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--text)] ${index === 1 ? 'lg:mt-8' : ''}`}
            >
              <div className="slide-frame relative overflow-hidden rounded-[1.25rem] border-2 border-[color:var(--text)]" style={{ backgroundColor: project.color }}>
                <img src={project.image} alt={`${project.title} portfolio page`} className="aspect-video w-full object-contain p-2 transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="pt-5">
                <p className="text-sm font-black uppercase text-[color:var(--accent)]">{project.kicker}</p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                <p className="mt-3 min-h-24 text-base font-semibold leading-7 text-[#51473f]">{project.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.stats || []).map((stat) => (
                    <span key={stat} className="rounded-full border-2 border-[color:var(--text)] bg-[color:var(--surface)] px-3 py-1 text-xs font-black uppercase">
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

function SectionIntro({ eyebrow, title, body }) {
  return (
    <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <p className="mb-3 inline-flex rounded-full border-2 border-[color:var(--text)] bg-[color:var(--yellow)] px-4 py-2 text-sm font-black uppercase">{eyebrow}</p>
        <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.9]">{title}</h2>
      </div>
      <p className="max-w-2xl text-lg font-semibold leading-8 text-[#4c433b]">{body}</p>
    </div>
  )
}

function PortfolioSlideWall({ content }) {
  return (
    <section className="border-y-2 border-[color:var(--text)] bg-[color:var(--soft)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[color:var(--text)] bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_var(--text)]">
              {content.slideIntro.eyebrow}
            </p>
            <h2 className="display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.9]">{content.slideIntro.title}</h2>
          </div>
          <p className="max-w-xl text-base font-semibold leading-7 text-[#51473f]">{content.slideIntro.body}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {(content.slides || []).map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={`rounded-[1.5rem] border-2 border-[color:var(--text)] bg-white p-3 shadow-[6px_6px_0_var(--text)] ${index % 3 === 1 ? 'xl:translate-y-6' : ''}`}
            >
              <div className="slide-frame aspect-video w-full rounded-[1rem]">
                <img src={image.src} alt={image.title} className="h-full w-full object-contain p-2" />
              </div>
              <figcaption className="flex min-h-20 flex-col justify-center px-1 pt-3">
                <span className="text-xs font-black uppercase text-[color:var(--accent)]">{image.tag}</span>
                <span className="text-lg font-black">{image.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function About({ content }) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div className="rounded-[2rem] border-2 border-[color:var(--text)] bg-white p-3 shadow-[10px_10px_0_var(--text)]">
            <div className="slide-frame aspect-video rounded-[1.35rem]">
              <img src={content.about.image} alt="About Aspen portfolio page" className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--pink)] px-5 py-3 font-black uppercase shadow-[5px_5px_0_var(--text)]">
            {content.about.sticker}
          </div>
        </div>
        <div>
          <p className="mb-3 inline-flex rounded-full border-2 border-[color:var(--text)] bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_var(--text)]">{content.about.eyebrow}</p>
          <h2 className="display text-[clamp(2.7rem,7vw,6rem)] leading-[0.9]">{content.about.title}</h2>
          {(content.about.paragraphs || []).map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg font-semibold leading-8 text-[#4c433b]">{paragraph}</p>
          ))}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(content.about.stats || []).map((stat) => (
              <div key={stat.label} className="rounded-3xl border-2 border-[color:var(--text)] bg-white p-5 shadow-[5px_5px_0_var(--text)]">
                <div className="display text-4xl text-[color:var(--accent)]">{stat.number}</div>
                <div className="mt-2 text-sm font-black uppercase leading-5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Toolkit({ content }) {
  const toolkit = content.toolkit

  return (
    <section className="bg-[color:var(--dark)] px-4 py-20 text-[#fff9ef] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[#fff9ef] bg-[color:var(--accent)] px-4 py-2 text-sm font-black uppercase">{toolkit.eyebrow}</p>
            <h2 className="display text-[clamp(2.7rem,7vw,5.8rem)] leading-[0.9]">{toolkit.title}</h2>
          </div>
          <a href={`mailto:${content.contactEmail}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#fff9ef] bg-[color:var(--yellow)] px-6 font-black uppercase text-[color:var(--text)] transition hover:-translate-y-0.5">
            {toolkit.cta}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {(toolkit.items || []).map((item) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <div key={item.title} className="rounded-[1.5rem] border-2 border-[#fff9ef] bg-[#302c26] p-6 transition hover:-translate-y-1">
                <div className="mb-5 grid size-13 place-items-center rounded-full border-2 border-[#fff9ef] bg-[color:var(--pink)] text-[color:var(--text)]">
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

function Experience({ content }) {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full border-2 border-[color:var(--text)] bg-[color:var(--yellow)] px-4 py-2 text-sm font-black uppercase">{content.experience.eyebrow}</p>
            <h2 className="display text-[clamp(2.7rem,7vw,5.8rem)] leading-[0.9]">{content.experience.title}</h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-[#4c433b]">{content.experience.body}</p>
          </div>

          <div className="space-y-5">
            <ExperienceCard icon="GraduationCap" kicker="Education" title={content.experience.education.title} text={content.experience.education.text} color="blue" />
            {(content.experience.jobs || []).map((item) => (
              <ExperienceCard key={`${item.years}-${item.role}`} icon={item.icon} kicker={item.years} title={item.role} text={item.place} color="pink" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ icon, kicker, title, text, color }) {
  const Icon = iconMap[icon] || BriefcaseBusiness
  return (
    <div className="rounded-[1.5rem] border-2 border-[color:var(--text)] bg-white p-6 shadow-[7px_7px_0_var(--text)]">
      <div className="flex items-start gap-4">
        <div className={`grid size-14 shrink-0 place-items-center rounded-full border-2 border-[color:var(--text)] ${color === 'blue' ? 'bg-[color:var(--blue)]' : 'bg-[color:var(--pink)]'}`}>
          <Icon size={26} />
        </div>
        <div>
          <p className="font-black uppercase text-[color:var(--accent)]">{kicker}</p>
          <h3 className="text-2xl font-black">{title}</h3>
          <p className="mt-2 font-semibold leading-7 text-[#51473f]">{text}</p>
        </div>
      </div>
    </div>
  )
}

function Contact({ content }) {
  return (
    <section id="contact" className="bg-[color:var(--soft)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border-2 border-[color:var(--text)] bg-[color:var(--surface)] p-6 shadow-[10px_10px_0_var(--text)] md:p-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div className="mb-5 flex flex-wrap gap-3">
            {(content.contact.badges || []).map((badge, index) => (
              <span key={badge} className={`inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--text)] px-4 py-2 font-black uppercase ${index === 0 ? 'bg-[color:var(--blue)]' : 'bg-[color:var(--pink)]'}`}>
                {index === 0 ? <BadgeCheck size={17} /> : <HeartHandshake size={17} />}
                {badge}
              </span>
            ))}
          </div>
          <h2 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.88]">{content.contact.title}</h2>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#4c433b]">{content.contact.body}</p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <ContactCard href={`mailto:${content.contactEmail}`} icon="Mail" kicker="Email" text={content.contactEmail} color="accent" />
          <ContactCard href={`tel:${content.contactPhone.replace(/[^+\d]/g, '')}`} icon="Phone" kicker="Phone" text={content.contactPhone} color="pink" />
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard icon="MapPin" text={content.contact.location} />
            <MiniCard icon="Instagram" text={content.contact.social} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ href, icon, kicker, text, color }) {
  const Icon = iconMap[icon]
  return (
    <a href={href} className="group rounded-[1.5rem] border-2 border-[color:var(--text)] bg-white p-5 shadow-[6px_6px_0_var(--text)] transition hover:-translate-y-1">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className={`grid size-13 place-items-center rounded-full border-2 border-[color:var(--text)] ${color === 'accent' ? 'bg-[color:var(--accent)] text-white' : 'bg-[color:var(--pink)]'}`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="text-sm font-black uppercase text-[color:var(--accent)]">{kicker}</p>
          <p className="break-all text-lg font-black sm:text-xl">{text}</p>
        </div>
      </div>
    </a>
  )
}

function MiniCard({ icon, text }) {
  const Icon = iconMap[icon]
  return (
    <div className="rounded-[1.5rem] border-2 border-[color:var(--text)] bg-white p-5 shadow-[6px_6px_0_var(--text)]">
      <Icon className="mb-3" />
      <p className="font-black">{text}</p>
    </div>
  )
}

function PublicSite({ content }) {
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
    <>
      <Nav content={content} />
      <main>
        <Hero content={content} />
        <Work content={content} />
        <PortfolioSlideWall content={content} />
        <About content={content} />
        <Toolkit content={content} />
        <Experience content={content} />
        <Contact content={content} />
      </main>
      <footer className="border-t-2 border-[color:var(--text)] bg-[color:var(--text)] px-4 py-8 text-[#fff9ef] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-bold uppercase md:flex-row md:items-center md:justify-between">
          <p>{content.navName} Portfolio</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1"><Star size={15} /> Creative marketing</span>
            <span className="inline-flex items-center gap-1"><WandSparkles size={15} /> Branding</span>
            <span className="inline-flex items-center gap-1"><Sparkles size={15} /> Talent-minded</span>
          </div>
        </div>
      </footer>
    </>
  )
}

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('aspenmcnealey@gmail.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json().catch(() => ({}))
    setLoading(false)
    if (!response.ok || !data.token) {
      setError(data.error || 'Login failed')
      return
    }
    window.localStorage.setItem('aspen-admin-token', data.token)
    onLogin(data.token, data.user)
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[color:var(--bg)] px-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-[2rem] border-2 border-[color:var(--text)] bg-white p-8 shadow-[10px_10px_0_var(--text)]">
        <div className="mb-5 grid size-14 place-items-center rounded-full border-2 border-[color:var(--text)] bg-[color:var(--yellow)]">
          <Lock />
        </div>
        <h1 className="display text-4xl leading-none">Aspen Admin</h1>
        <p className="mt-3 font-semibold text-[#51473f]">Login to update text, colors, portfolio images, and uploaded media.</p>
        <label className="mt-6 block text-sm font-black uppercase">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          className="mt-2 min-h-12 w-full rounded-2xl border-2 border-[color:var(--text)] px-4 font-semibold"
          autoComplete="email"
          autoFocus
        />
        <label className="mt-4 block text-sm font-black uppercase">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className="mt-2 min-h-12 w-full rounded-2xl border-2 border-[color:var(--text)] px-4 font-semibold"
          autoComplete="current-password"
        />
        {error ? <p className="mt-3 font-bold text-red-700">{error}</p> : null}
        <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--accent)] px-6 font-black uppercase text-white shadow-[5px_5px_0_var(--text)]">
          {loading ? <Loader2 className="animate-spin" /> : <Lock size={18} />}
          Login
        </button>
      </form>
    </div>
  )
}

function AdminPanel({ content, setContent }) {
  const [token, setToken] = useState(() => window.localStorage.getItem('aspen-admin-token') || '')
  const [user, setUser] = useState(null)
  const [draft, setDraft] = useState(content)
  const [media, setMedia] = useState([])
  const [status, setStatus] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    queueMicrotask(() => setDraft(content))
  }, [content])

  useEffect(() => {
    if (!token) return
    fetch('/api/me', { headers: authHeaders(token) })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Session expired'))))
      .then((data) => setUser(data.user || null))
      .catch(() => {
        window.localStorage.removeItem('aspen-admin-token')
        setToken('')
        setUser(null)
      })
  }, [token])

  useEffect(() => {
    if (!token) return
    fetch('/api/files', { headers: authHeaders(token) })
      .then((response) => (response.ok ? response.json() : { files: [] }))
      .then((data) => setMedia(data.files || []))
      .catch(() => setMedia([]))
  }, [token])

  if (!token) {
    return (
      <LoginForm
        onLogin={(nextToken, nextUser) => {
          setToken(nextToken)
          setUser(nextUser || null)
        }}
      />
    )
  }

  function update(path, value) {
    setDraft((current) => setIn(current, path, value))
  }

  async function save() {
    setSaving(true)
    setStatus('Saving...')
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: draft }),
    })
    const data = await response.json().catch(() => ({}))
    setSaving(false)
    if (!response.ok) {
      setStatus(data.error || 'Save failed')
      return
    }
    setContent(mergeContent(DEFAULT_CONTENT, data.content || draft))
    setStatus('Saved. The public site will refresh from GitHub automatically.')
  }

  function logout() {
    window.localStorage.removeItem('aspen-admin-token')
    setToken('')
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-[color:var(--bg)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 rounded-[2rem] border-2 border-[color:var(--text)] bg-white p-5 shadow-[8px_8px_0_var(--text)] md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[color:var(--accent)]">Authenticated editor</p>
            <h1 className="display text-4xl leading-none">Site controls</h1>
            {user?.email ? <p className="mt-1 text-sm font-bold text-[#51473f]">Logged in as {user.email}</p> : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="inline-flex min-h-11 items-center rounded-full border-2 border-[color:var(--text)] bg-white px-5 font-black uppercase shadow-[4px_4px_0_var(--text)]">View site</a>
            <button onClick={logout} className="inline-flex min-h-11 items-center rounded-full border-2 border-[color:var(--text)] bg-[color:var(--soft)] px-5 font-black uppercase shadow-[4px_4px_0_var(--text)]">Logout</button>
            <button onClick={save} disabled={saving} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--accent)] px-5 font-black uppercase text-white shadow-[4px_4px_0_var(--text)] disabled:opacity-60">
              {saving ? <Loader2 className="animate-spin" /> : <Save size={18} />}
              Save
            </button>
          </div>
        </div>
        {status ? <p className="mb-6 rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--yellow)] px-4 py-3 font-bold">{status}</p> : null}

        <div className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
          <div className="space-y-6">
            <EditorSection title="Brand and hero">
              <Field label="Name" value={draft.navName} onChange={(value) => update(['navName'], value)} />
              <Field label="Hero eyebrow" value={draft.hero.eyebrow} onChange={(value) => update(['hero', 'eyebrow'], value)} />
              <Field label="Hero title line 1" value={draft.hero.titleTop} onChange={(value) => update(['hero', 'titleTop'], value)} />
              <Field label="Hero title accent" value={draft.hero.titleAccent} onChange={(value) => update(['hero', 'titleAccent'], value)} />
              <Field label="Hero body" value={draft.hero.body} rows={4} onChange={(value) => update(['hero', 'body'], value)} />
              <Field label="Capabilities" value={(draft.capabilities || []).join('\n')} rows={4} onChange={(value) => update(['capabilities'], lines(value))} />
              <ImageField label="Hero cover image" value={draft.hero.coverImage} media={media} token={token} onUploaded={(file) => setMedia((items) => [file, ...items])} onChange={(value) => update(['hero', 'coverImage'], value)} />
              <ImageField label="Hero featured image" value={draft.hero.featureImage} media={media} token={token} onUploaded={(file) => setMedia((items) => [file, ...items])} onChange={(value) => update(['hero', 'featureImage'], value)} />
            </EditorSection>

            <EditorSection title="Colors">
              <div className="grid gap-4 sm:grid-cols-3">
                {Object.keys(draft.theme).map((key) => (
                  <ColorField key={key} label={key} value={draft.theme[key]} onChange={(value) => update(['theme', key], value)} />
                ))}
              </div>
            </EditorSection>

            <EditorSection title="Work section">
              <Field label="Section title" value={draft.workIntro.title} onChange={(value) => update(['workIntro', 'title'], value)} />
              <Field label="Section body" value={draft.workIntro.body} rows={3} onChange={(value) => update(['workIntro', 'body'], value)} />
              <CollectionEditor
                items={draft.projects}
                addLabel="Add project"
                blank={{ title: 'New Project', kicker: 'Category', copy: 'Project description.', image: '', color: '#dcebf0', stats: ['One detail'] }}
                onChange={(items) => update(['projects'], items)}
                render={(item, index, change) => (
                  <div className="grid gap-3">
                    <Field label="Title" value={item.title} onChange={(value) => change(index, { ...item, title: value })} />
                    <Field label="Kicker" value={item.kicker} onChange={(value) => change(index, { ...item, kicker: value })} />
                    <Field label="Description" value={item.copy} rows={3} onChange={(value) => change(index, { ...item, copy: value })} />
                    <ColorField label="Card color" value={item.color} onChange={(value) => change(index, { ...item, color: value })} />
                    <Field label="Stats, one per line" value={(item.stats || []).join('\n')} rows={3} onChange={(value) => change(index, { ...item, stats: lines(value) })} />
                    <ImageField label="Image" value={item.image} media={media} token={token} onUploaded={(file) => setMedia((items) => [file, ...items])} onChange={(value) => change(index, { ...item, image: value })} />
                  </div>
                )}
              />
            </EditorSection>

            <EditorSection title="Portfolio slides">
              <Field label="Slide section title" value={draft.slideIntro.title} onChange={(value) => update(['slideIntro', 'title'], value)} />
              <Field label="Slide section body" value={draft.slideIntro.body} rows={3} onChange={(value) => update(['slideIntro', 'body'], value)} />
              <CollectionEditor
                items={draft.slides}
                addLabel="Add slide"
                blank={{ src: '', title: 'New slide', tag: 'Tag' }}
                onChange={(items) => update(['slides'], items)}
                render={(item, index, change) => (
                  <div className="grid gap-3">
                    <Field label="Title" value={item.title} onChange={(value) => change(index, { ...item, title: value })} />
                    <Field label="Tag" value={item.tag} onChange={(value) => change(index, { ...item, tag: value })} />
                    <ImageField label="Slide image" value={item.src} media={media} token={token} onUploaded={(file) => setMedia((items) => [file, ...items])} onChange={(value) => change(index, { ...item, src: value })} />
                  </div>
                )}
              />
            </EditorSection>
          </div>

          <div className="space-y-6">
            <EditorSection title="About">
              <Field label="About title" value={draft.about.title} onChange={(value) => update(['about', 'title'], value)} />
              <Field label="Paragraphs, separated by blank line" value={(draft.about.paragraphs || []).join('\n\n')} rows={7} onChange={(value) => update(['about', 'paragraphs'], paragraphs(value))} />
              <ImageField label="About image" value={draft.about.image} media={media} token={token} onUploaded={(file) => setMedia((items) => [file, ...items])} onChange={(value) => update(['about', 'image'], value)} />
            </EditorSection>

            <EditorSection title="Toolkit and experience">
              <CollectionEditor
                items={draft.toolkit.items}
                addLabel="Add skill"
                blank={{ icon: 'Sparkles', title: 'New skill', text: 'Skill description.' }}
                onChange={(items) => update(['toolkit', 'items'], items)}
                render={(item, index, change) => (
                  <div className="grid gap-3">
                    <SelectField label="Icon" value={item.icon} options={editableIconNames} onChange={(value) => change(index, { ...item, icon: value })} />
                    <Field label="Title" value={item.title} onChange={(value) => change(index, { ...item, title: value })} />
                    <Field label="Text" value={item.text} rows={3} onChange={(value) => change(index, { ...item, text: value })} />
                  </div>
                )}
              />
              <Field label="Experience intro" value={draft.experience.body} rows={4} onChange={(value) => update(['experience', 'body'], value)} />
            </EditorSection>

            <EditorSection title="Contact">
              <Field label="Email" value={draft.contactEmail} onChange={(value) => update(['contactEmail'], value)} />
              <Field label="Phone" value={draft.contactPhone} onChange={(value) => update(['contactPhone'], value)} />
              <Field label="Contact title" value={draft.contact.title} onChange={(value) => update(['contact', 'title'], value)} />
              <Field label="Contact body" value={draft.contact.body} rows={4} onChange={(value) => update(['contact', 'body'], value)} />
            </EditorSection>

            <EditorSection title="Account">
              <PasswordEditor token={token} user={user} />
            </EditorSection>

            <EditorSection title="Media library">
              <div className="grid gap-3">
                {media.length ? media.map((file) => (
                  <button key={file.path} onClick={() => navigator.clipboard?.writeText(file.url)} className="grid grid-cols-[88px_1fr] gap-3 rounded-2xl border-2 border-[color:var(--text)] bg-white p-2 text-left">
                    <img src={file.url} alt={file.name} className="aspect-video w-full rounded-xl object-cover" />
                    <span className="self-center break-all text-sm font-bold">{file.name}</span>
                  </button>
                )) : <p className="font-semibold text-[#51473f]">No uploaded files yet. Upload from any image field.</p>}
              </div>
            </EditorSection>
          </div>
        </div>
      </div>
    </div>
  )
}

function PasswordEditor({ token, user }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState('')
  const [saving, setSaving] = useState(false)

  async function submit(event) {
    event.preventDefault()
    setStatus('')

    if (newPassword.length < 10) {
      setStatus('Use at least 10 characters for the new password.')
      return
    }
    if (newPassword !== confirmPassword) {
      setStatus('The new passwords do not match.')
      return
    }

    setSaving(true)
    const response = await fetch('/api/password', {
      method: 'POST',
      headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
    })
    const data = await response.json().catch(() => ({}))
    setSaving(false)

    if (!response.ok) {
      setStatus(data.error || 'Password update failed')
      return
    }

    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setStatus('Password updated. Use the new password next time.')
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {user?.email ? <p className="font-bold text-[#51473f]">Account: {user.email}</p> : null}
      <Field label="Current password" value={currentPassword} type="password" onChange={setCurrentPassword} />
      <Field label="New password" value={newPassword} type="password" onChange={setNewPassword} />
      <Field label="Confirm new password" value={confirmPassword} type="password" onChange={setConfirmPassword} />
      {status ? <p className="rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--yellow)] px-4 py-3 font-bold">{status}</p> : null}
      <button disabled={saving} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--accent)] px-5 font-black uppercase text-white shadow-[4px_4px_0_var(--text)] disabled:opacity-60">
        {saving ? <Loader2 className="animate-spin" size={18} /> : <Lock size={18} />}
        Change password
      </button>
    </form>
  )
}

function EditorSection({ title, children }) {
  return (
    <section className="rounded-[2rem] border-2 border-[color:var(--text)] bg-white p-5 shadow-[7px_7px_0_var(--text)]">
      <h2 className="mb-5 text-2xl font-black">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function Field({ label, value, onChange, rows = 1, type = 'text' }) {
  const inputClass = 'mt-2 w-full rounded-2xl border-2 border-[color:var(--text)] bg-white px-4 py-3 font-semibold'
  return (
    <label className="block">
      <span className="text-xs font-black uppercase text-[color:var(--accent)]">{label}</span>
      {rows > 1 ? (
        <textarea className={inputClass} rows={rows} value={value || ''} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input type={type} className={inputClass} value={value || ''} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  )
}

function ColorField({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="text-xs font-black uppercase text-[color:var(--accent)]">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-2xl border-2 border-[color:var(--text)] bg-white p-2">
        <input type="color" value={value || '#ffffff'} onChange={(event) => onChange(event.target.value)} className="size-11 shrink-0 rounded-xl" />
        <input value={value || ''} onChange={(event) => onChange(event.target.value)} className="min-w-0 flex-1 font-semibold outline-none" />
      </div>
    </label>
  )
}

function SelectField({ label, value, options, onChange }) {
  return (
    <label className="block">
      <span className="text-xs font-black uppercase text-[color:var(--accent)]">{label}</span>
      <select value={value || ''} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-2xl border-2 border-[color:var(--text)] bg-white px-4 py-3 font-semibold">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}

function ImageField({ label, value, media, token, onChange, onUploaded }) {
  const [uploading, setUploading] = useState(false)

  async function upload(event) {
    const file = event.target.files?.[0]
    if (!file) return
    setUploading(true)
    const dataUrl = await resizeImage(file)
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: file.name, dataUrl }),
    })
    const data = await response.json().catch(() => ({}))
    setUploading(false)
    if (response.ok && data.file?.url) {
      onUploaded(data.file)
      onChange(data.file.url)
    } else {
      alert(data.error || 'Upload failed')
    }
  }

  return (
    <div>
      <span className="text-xs font-black uppercase text-[color:var(--accent)]">{label}</span>
      <div className="mt-2 rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--surface)] p-3">
        <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
          <div className="slide-frame aspect-video overflow-hidden rounded-xl border-2 border-[color:var(--text)] bg-white">
            {value ? <img src={value} alt="" className="h-full w-full object-contain" /> : <ImagePlus />}
          </div>
          <div className="space-y-3">
            <input value={value || ''} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border-2 border-[color:var(--text)] bg-white px-3 py-2 text-sm font-semibold" placeholder="Image URL" />
            <div className="flex flex-wrap gap-2">
              <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--yellow)] px-4 text-sm font-black uppercase">
                {uploading ? <Loader2 className="animate-spin" size={16} /> : <UploadCloud size={16} />}
                Upload
                <input type="file" accept="image/*" onChange={upload} className="hidden" />
              </label>
              <select value="" onChange={(event) => event.target.value && onChange(event.target.value)} className="min-h-10 rounded-full border-2 border-[color:var(--text)] bg-white px-3 text-sm font-black uppercase">
                <option value="">Choose uploaded</option>
                {media.map((file) => <option key={file.path} value={file.url}>{file.name}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CollectionEditor({ items, onChange, render, blank, addLabel }) {
  function change(index, nextItem) {
    onChange(items.map((item, itemIndex) => (itemIndex === index ? nextItem : item)))
  }

  function remove(index) {
    onChange(items.filter((_, itemIndex) => itemIndex !== index))
  }

  return (
    <div className="space-y-4">
      {(items || []).map((item, index) => (
        <div key={index} className="rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--surface)] p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-black uppercase">Item {index + 1}</p>
            <button onClick={() => remove(index)} className="inline-flex size-9 items-center justify-center rounded-full border-2 border-[color:var(--text)] bg-white">
              <Trash2 size={16} />
            </button>
          </div>
          {render(item, index, change)}
        </div>
      ))}
      <button onClick={() => onChange([...(items || []), blank])} className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[color:var(--text)] bg-[color:var(--blue)] px-5 font-black uppercase shadow-[4px_4px_0_var(--text)]">
        <ImagePlus size={18} />
        {addLabel}
      </button>
    </div>
  )
}

function authHeaders(token) {
  return { Authorization: `Bearer ${token}` }
}

function setIn(object, path, value) {
  const clone = structuredClone(object)
  let cursor = clone
  path.slice(0, -1).forEach((key) => {
    cursor[key] = cursor[key] ?? {}
    cursor = cursor[key]
  })
  cursor[path.at(-1)] = value
  return clone
}

function lines(value) {
  return value.split('\n').map((line) => line.trim()).filter(Boolean)
}

function paragraphs(value) {
  return value.split(/\n\s*\n/).map((line) => line.trim()).filter(Boolean)
}

async function resizeImage(file) {
  const rawDataUrl = await readFile(file)
  if (!file.type.startsWith('image/')) return rawDataUrl

  const image = await new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = rawDataUrl
  })
  const max = 1800
  const scale = Math.min(1, max / Math.max(image.width, image.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(image.width * scale)
  canvas.height = Math.round(image.height * scale)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL('image/jpeg', 0.86)
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function App() {
  const { content, setContent } = useSiteContent()
  const isAdmin = window.location.pathname.startsWith('/admin')
  const mergedContent = useMemo(() => mergeContent(DEFAULT_CONTENT, content), [content])

  return (
    <div className="site-shell min-h-screen overflow-hidden text-[color:var(--text)]" style={styleFor(mergedContent.theme)}>
      {isAdmin ? <AdminPanel content={mergedContent} setContent={setContent} /> : <PublicSite content={mergedContent} />}
    </div>
  )
}

export default App
