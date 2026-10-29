import { useState, useEffect } from 'react'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

/* ================= ПЕРЕВОДЫ (i18n) =================
   Чтобы поменять текст, правь его здесь. Чтобы добавить язык,
   скопируй блок en, назови ключ (например de) и добавь его в LANGS. */

const resources = {
  ru: { translation: {
    nav: { about: 'Обо мне', skills: 'Навыки', projects: 'Работы', gallery: 'Галерея', contact: 'Контакты' },
    hero: { iam: 'Я —', name: ' Himmatov', roles: ['Frontend-разработчик', 'React-энтузиаст'], works: 'Мои работы', contact: 'Связаться' },
    about: { title: 'Обо мне',
      text: 'Привет! Я делаю сайты на React и люблю, когда интерфейс выглядит как кадр из любимого аниме. Расскажи здесь о себе: чем занимаешься, что изучаешь и что хочешь создать.',
      stats: [{ v: 'Lv. 21', l: 'уровень' }, { v: '12', l: 'проектов' }, { v: '∞', l: 'чашек чая' }] },
    skills: { title: 'Навыки' },
    projects: { title: 'Работы', view: 'Смотреть проект', items: [
      { title: 'Каталог товаров', desc: 'React + axios, JWT, поиск и пагинация.' },
      { title: 'Аниме-трекер', desc: 'Список просмотренного с оценками.' },
      { title: 'Мой блог', desc: 'Заметки о фронтенде и играх.' } ] },
    gallery: { title: 'Галерея', items: ['Сакура', 'Токио ночью', 'Храм', 'Аниме-кафе', 'Фонарики', 'Закат'] },
    contact: { title: 'Контакты', text: 'Есть идея или проект? Напиши мне.', mail: 'Написать на почту' },
  } },
  en: { translation: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', gallery: 'Gallery', contact: 'Contact' },
    hero: { iam: "I'm", name: 'Himmatov', roles: ['Frontend developer', 'React enthusiast'], works: 'My work', contact: 'Get in touch' },
    about: { title: 'About me',
      text: 'Hi! I build websites with React and love interfaces that look like a frame from my favorite anime. Tell about yourself here: what you do, what you are learning and what you want to create.',
      stats: [{ v: 'Lv. 21', l: 'level' }, { v: '12', l: 'projects' }, { v: '∞', l: 'cups of tea' }] },
    skills: { title: 'Skills' },
    projects: { title: 'Projects', view: 'View project', items: [
      { title: 'Product catalog', desc: 'React + axios, JWT, search and pagination.' },
      { title: 'Anime tracker', desc: 'A watched list with ratings.' },
      { title: 'My blog', desc: 'Notes about frontend and games.' } ] },
    gallery: { title: 'Gallery', items: ['Sakura', 'Tokyo at night', 'Temple', 'Anime cafe', 'Lanterns', 'Sunset'] },
    contact: { title: 'Contact', text: 'Got an idea or a project? Write to me.', mail: 'Send an email' },
  } },
}

const LANGS = ['ru', 'en']

i18n
  .use(LanguageDetector) // запоминает выбор в localStorage
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    supportedLngs: LANGS,
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
  })

/* ================= ДАННЫЕ, КОТОРЫЕ НЕ ПЕРЕВОДЯТСЯ ================= */

const SECTIONS = ['about', 'skills', 'projects', 'gallery', 'contact']

const SKILLS = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Git', level: 65 },
  { name: 'REST API (axios)', level: 70 },
  { name: 'Figma', level: 50 },
]

// Теги и ссылки проектов (тексты лежат в переводах, в том же порядке)
const PROJECTS_META = [
  { tags: ['React', 'axios', 'JWT'], link: '#' },
  { tags: ['React', 'API'], link: '#' },
  { tags: ['Vite', 'CSS'], link: '#' },
]

// ЗАМЕНИ эти ссылки на свои фото (подписи лежат в переводах gallery.items)
const PHOTOS = [
  'https://picsum.photos/seed/anime1/700/900',
  'https://picsum.photos/seed/anime2/700/900',
  'https://picsum.photos/seed/anime3/700/900',
  'https://picsum.photos/seed/anime4/700/900',
  'https://picsum.photos/seed/anime5/700/900',
  'https://picsum.photos/seed/anime6/700/900',
]

// Лепестки создаются один раз при загрузке файла, а не во время рендера
const PETALS = Array.from({ length: 22 }, (_, id) => ({
  id,
  left: Math.random() * 100,
  size: 10 + Math.random() * 12,
  dur: 9 + Math.random() * 9,
  delay: -Math.random() * 18,
}))

/* ================= ПЕРЕКЛЮЧАТЕЛИ ================= */

const ThemeSwitch = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      role="switch"
      aria-checked={dark}
      aria-label="Theme"
      onClick={() => setDark(!dark)}
      className="relative h-9 w-[68px] shrink-0 cursor-pointer rounded-full border-[3px] border-fg bg-panel shadow-[3px_3px_0_var(--pink)]"
    >
      <span
        className={`absolute top-[3px] grid h-6 w-6 place-items-center rounded-full bg-yellow text-sm transition-all duration-300 ${
          dark ? 'left-[35px]' : 'left-[3px]'
        }`}
      >
        {dark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

const LangSwitch = () => {
  const { i18n: i } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i.resolvedLanguage
  }, [i.resolvedLanguage])

  return (
    <div className="flex overflow-hidden rounded-full border-[3px] border-fg text-sm font-bold shadow-[3px_3px_0_var(--pink)]">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => i.changeLanguage(l)}
          className={`cursor-pointer px-3 py-1 uppercase transition-colors ${
            i.resolvedLanguage === l ? 'bg-yellow text-[#120e26]' : 'bg-panel text-fg hover:text-pink'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

/* ================= КОМПОНЕНТЫ ================= */

const Typewriter = ({ words, speed = 70, pause = 1500 }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    let w = 0, i = 0, deleting = false, timer
    const tick = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let delay = deleting ? speed / 2 : speed
      if (!deleting && i === word.length) { deleting = true; delay = pause }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [words, speed, pause])

  return <span>{text}<span className="cursor">|</span></span>
}

const Sakura = () => (
  <div className="sakura" aria-hidden="true">
    {PETALS.map((p) => (
      <i key={p.id} style={{
        left: `${p.left}%`, width: p.size, height: p.size,
        animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`,
      }} />
    ))}
  </div>
)

const SectionTitle = ({ jp, children }) => (
  <div className="stitle">
    <h2>{children}</h2>
    <span>{jp}</span>
  </div>
)

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <nav className="nav flex-wrap gap-y-2">
      <a href="#top" className="logo">桜 zeninxh</a>
      {/* На узких экранах ссылки переносятся на вторую строку */}
      <div className="order-last flex w-full justify-center lg:order-none lg:w-auto">
        {SECTIONS.map((id) => <a key={id} href={`#${id}`}>{t(`nav.${id}`)}</a>)}
      </div>
      <div className="flex items-center gap-3">
        <LangSwitch />
        <ThemeSwitch />
      </div>
    </nav>
  )
}

const Hero = () => {
  const { t } = useTranslation()
  return (
    <section id="top" className="hero">
      <div>
        <p className="hello">こんにちは！</p>
        <h1>{t('hero.iam')}<br />{t('hero.name')}</h1>
        <p className="role"><Typewriter words={t('hero.roles', { returnObjects: true })} /></p>
        <a href="#projects" className="btn">{t('hero.works')}</a>
        <a href="#contact" className="btn alt">{t('hero.contact')}</a>
      </div>
      {/* Файл zenin.jpg должен лежать в папке public/ */}
      <div className="avatar">
        <img src="/zenin.jpg" alt="Shed Himmatov" />
      </div>
    </section>
  )
}

const About = () => {
  const { t } = useTranslation()
  return (
    <section id="about">
      <SectionTitle jp="自己紹介">{t('about.title')}</SectionTitle>
      <div className="bubble">{t('about.text')}</div>
      <div className="stats">
        {t('about.stats', { returnObjects: true }).map(({ v, l }) => (
          <div className="panel" key={l}><b>{v}</b>{l}</div>
        ))}
      </div>
    </section>
  )
}

const Skills = () => {
  const { t } = useTranslation()
  return (
    <section id="skills">
      <SectionTitle jp="スキル">{t('skills.title')}</SectionTitle>
      <div className="grid">
        {SKILLS.map(({ name, level }) => (
          <div className="panel skill" key={name}>
            <b><span>{name}</span><span>{level}%</span></b>
            <div className="bar"><i style={{ width: `${level}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Projects = () => {
  const { t } = useTranslation()
  return (
    <section id="projects">
      <SectionTitle jp="作品">{t('projects.title')}</SectionTitle>
      <div className="grid">
        {t('projects.items', { returnObjects: true }).map((p, i) => (
          <article className="panel card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">{PROJECTS_META[i].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a href={PROJECTS_META[i].link}>{t('projects.view')}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

const Gallery = () => {
  const { t } = useTranslation()
  const captions = t('gallery.items', { returnObjects: true })
  return (
    <section id="gallery">
      <SectionTitle jp="ギャラリー">{t('gallery.title')}</SectionTitle>
      <Swiper
        className="gallery"
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
        coverflowEffect={{ rotate: 28, stretch: 0, depth: 140, modifier: 1, slideShadows: false }}
      >
        {PHOTOS.map((src, i) => (
          <SwiperSlide key={i}>
            <figure className="relative overflow-hidden border-[3px] border-fg bg-panel shadow-[8px_8px_0_var(--pink)]">
              <img src={src} alt={captions[i]} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-ink/85 px-3 py-2 text-center font-bold text-fg">
                {captions[i]}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section id="contact">
      <SectionTitle jp="連絡">{t('contact.title')}</SectionTitle>
      <p>{t('contact.text')}</p>
      <a className="btn" href="mailto:you@example.com">{t('contact.mail')}</a>
      <a className="btn alt" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      <a className="btn" href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
    </section>
  )
}

const Footer = () => {
  const { t } = useTranslation()
  return <footer className="footer">© 2026 {t('hero.name')} — ありがとう！</footer>
}

/* ================= ПРИЛОЖЕНИЕ ================= */

const App = () => (
  <>
    <Sakura />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </>
)

export default App