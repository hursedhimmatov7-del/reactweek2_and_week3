import { useState, useEffect } from 'react'

/* ---------- Данные: меняй под себя ---------- */

const NAV_LINKS = [
  ['about', 'Обо мне'],
  ['skills', 'Навыки'],
  ['projects', 'Работы'],
  ['contact', 'Контакты'],
]

const ROLES = ['Frontend-разработчик', 'HTML , Css , JavaScript , React , Sass , Tailwind ']

const STATS = [
  ['Lv. 21', 'уровень'],
  ['12', 'проектов'],
  ['∞', 'чашек чая'],
]

const SKILLS = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML / CSS', level: 90 },
  { name: 'Git', level: 65 },
  { name: 'REST API (axios)', level: 70 },
  { name: 'Figma', level: 50 },
]

const PROJECTS = [
  { title: 'Каталог товаров', desc: 'React + axios, JWT, поиск и пагинация.', tags: ['React', 'axios', 'JWT'], link: '#' },
  { title: 'Аниме-трекер', desc: 'Список просмотренного с оценками.', tags: ['React', 'API'], link: '#' },
  { title: 'Мой блог', desc: 'Заметки о фронтенде и играх.', tags: ['Vite', 'CSS'], link: '#' },
]

// Лепестки создаются один раз при загрузке файла, а не во время рендера
const PETALS = Array.from({ length: 22 }, (_, id) => ({
  id,
  left: Math.random() * 100,
  size: 10 + Math.random() * 12,
  dur: 9 + Math.random() * 9,
  delay: -Math.random() * 18,
}))

/* ---------- Компоненты ---------- */

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

const Navbar = () => (
  <nav className="nav">
    <a href="#top" className="logo">桜 zeninxh</a>
    <div>
      {NAV_LINKS.map(([id, label]) => (
        <a key={id} href={`#${id}`}>{label}</a>
      ))}
    </div>
  </nav>
)

const Hero = () => (
  <section id="top" className="hero">
    <div>
      <p className="hello">こんにちは！</p>
      <h1>Я Shed<br />Himmatov</h1>
      <p className="role"><Typewriter words={ROLES} /></p>
      <a href="#projects" className="btn">Мои работы</a>
      <a href="#contact" className="btn alt">Связаться</a>
    </div>
    {/* Замени эмодзи на своё фото: <img src="/me.png" alt="Я" /> */}
    <div className="avatar" aria-label="Аватар">
      <img src="../public/zenin.jpg" alt="" />
    </div>
  </section>
)

const About = () => (
  <section id="about">
    <SectionTitle jp="自己紹介">Обо мне</SectionTitle>
    <div className="bubble">
      Привет! Я делаю сайты на React и люблю, когда интерфейс выглядит как
      кадр из любимого аниме. Расскажи здесь о себе: чем занимаешься, что
      изучаешь и что хочешь создать.
    </div>
    <div className="stats">
      {STATS.map(([value, label]) => (
        <div className="panel" key={label}>
          <b>{value}</b>{label}
        </div>
      ))}
    </div>
  </section>
)

const Skills = () => (
  <section id="skills">
    <SectionTitle jp="スキル">Навыки</SectionTitle>
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

const Projects = () => (
  <section id="projects">
    <SectionTitle jp="作品">Работы</SectionTitle>
    <div className="grid">
      {PROJECTS.map((p) => (
        <article className="panel card" key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <a href={p.link}>Смотреть проект</a>
        </article>
      ))}
    </div>
  </section>
)

const Contact = () => (
  <section id="contact">
    <SectionTitle jp="連絡">Контакты</SectionTitle>
    <p>Есть идея или проект? Напиши мне.</p>
    <a className="btn" href="mailto:you@example.com">Написать на почту</a>
    <a className="btn alt" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
    <a className="btn" href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
  </section>
)

const Footer = () => (
  <footer className="footer">© 2026 Твоё Имя — ありがとう！</footer>
)

/* ---------- Приложение ---------- */

const App = () => (
  <>
    <Sakura />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
)

export default App