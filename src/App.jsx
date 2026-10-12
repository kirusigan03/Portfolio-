import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
  Send,
  Code2,
  Terminal,
  Braces,
  Binary,
  Cpu,
  Database,
  Award,
  ExternalLink,
} from "lucide-react";

import profileImg from "./assets/profile.jpg";
import nextgenImg from "./assets/nextgen.jpg";
import seraniImg from "./assets/serani.jpg";

/* ---------------------------------------------------------------- */
/* Content                                                           */
/* ---------------------------------------------------------------- */

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "My Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "SmartJob",
    role: "AI-Powered Job Portal · Full-Stack Microservices",
    image: null,
    gradient: "from-violet-600 via-indigo-500 to-cyan-400",
    emoji: "✦",
    innovation: "AI matching + event-driven recruitment workflows",
    description:
      "A production-style recruitment platform connecting job seekers, employers, and administrators. Designed with seven Spring Boot microservices, API Gateway, Eureka service discovery, centralized configuration, and event-driven Kafka workflows.",
    tech: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Kafka", "Groq AI", "Docker"],
    repo: "https://github.com/kirusigan03",
  },
  {
    title: "Serani AI",
    role: "AI Personal Assistant — Web & Mobile",
    image: seraniImg,
    innovation: "Context-aware conversations with persistent memory",
    description:
      "An AI-powered personal assistant with persistent chat sessions, file uploads, and response analysis. Built the chatbot interface and wired it to OpenAI and LangChain for context-aware conversations, using ChromaDB to store and retrieve relevant context.",
    tech: ["React", "React Native", "Expo", "Python", "FastAPI", "MongoDB", "ChromaDB", "LangChain"],
    repo: "https://github.com/kirusigan03",
  },
  {
    title: "NextGen",
    role: "E-Commerce Platform",
    image: nextgenImg,
    innovation: "Secure checkout flow with real-time business insights",
    description:
      "A full-stack storefront with secure authentication, payments, and an admin dashboard. Built the product, cart, and order APIs end to end and handled state, payments, and image storage.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe", "Cloudinary"],
    repo: "https://github.com/kirusigan03",
  },
  {
    title: "Inventory Management System",
    role: "Full-Stack Business Tool",
    image: null,
    gradient: "from-orange-400 via-amber-400 to-yellow-300",
    emoji: "📦",
    innovation: "Role-based operations with visual transaction analytics",
    description:
      "A role-based inventory system for tracking products, suppliers, purchases, and sales. Built the REST API in Spring Boot and a React dashboard with analytics and transaction history.",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "React", "Vite", "Recharts"],
    repo: "https://github.com/kirusigan03",
  },
];

const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    ring: "from-indigo-400/40 to-indigo-500/10",
    pill: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-300",
    tags: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    ring: "from-pink-400/40 to-pink-500/10",
    pill: "bg-pink-500/15 text-pink-600 dark:text-pink-300",
    tags: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    ring: "from-emerald-400/40 to-emerald-500/10",
    pill: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
    tags: ["Spring Boot", "Spring Cloud", "Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "Mobile Development",
    ring: "from-amber-400/40 to-amber-500/10",
    pill: "bg-amber-500/15 text-amber-600 dark:text-amber-300",
    tags: ["React Native", "Expo"],
  },
  {
    title: "Database Systems",
    ring: "from-cyan-400/40 to-cyan-500/10",
    pill: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-300",
    tags: ["MySQL", "MSSQL", "PostgreSQL", "MongoDB", "ChromaDB"],
  },
  {
    title: "DevOps & Tools",
    ring: "from-rose-400/40 to-rose-500/10",
    pill: "bg-rose-500/15 text-rose-600 dark:text-rose-300",
    tags: ["Docker", "Docker Compose", "GitHub Actions", "Apache Kafka", "Git", "GitHub", "Maven"],
  },
  {
    title: "Architecture & Integrations",
    ring: "from-violet-400/40 to-violet-500/10",
    pill: "bg-violet-500/15 text-violet-600 dark:text-violet-300",
    tags: ["Microservices", "REST APIs", "API Gateway", "Eureka", "JWT", "Stripe", "PayHere"],
  },
  {
    title: "AI & LLM Engineering",
    ring: "from-fuchsia-400/40 to-fuchsia-500/10",
    pill: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-300",
    tags: ["LangChain", "OpenAI API", "Groq AI", "Resume Matching", "Prompt Workflows"],
  },
];

const EDUCATION = [
  {
    period: "2023 — Present",
    title: "B.Sc (Hons) in Information Technology",
    place: "University of Moratuwa",
    detail: "GPA 3.12 / 4.00",
  },
  {
    period: "2019 — 2022",
    title: "G.C.E Advanced Level Examination",
    place: "Atchuvely Central College",
    detail: "Mathematics A · Physics B · Chemistry B · Z-Score 1.7741",
  },
];

// Add every certificate here — name, platform, year, and the verification link.
const CERTIFICATIONS = [
  {
    title: "Getting Started with Git and GitHub",
    platform: "Coursera",
    year: "2026",
    link: "https://coursera.org/share/384972a0e66dadf1ae5317defcc42f86",
  },
  {
    title: "Developing Front-End Apps with React",
    platform: "Coursera",
    year: "2026",
    link: "https://coursera.org/share/71b49b296bc394822013b103d1dc0e3c",
  },
];

const CONTACT = {
  email: "tkirusigan@gmail.com",
  phone: "+94 76 825 3185",
  github: "https://github.com/kirusigan03",
  githubLabel: "github.com/kirusigan03",
  linkedin: "https://www.linkedin.com/",
};

// Sends the contact form straight to your inbox with no mail-app popup.
// Sign up free at https://formspree.io, create a form pointed at
// tkirusigan@gmail.com, and paste your form's endpoint URL below.
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

/* ---------------------------------------------------------------- */
/* Theme handling                                                    */
/* ---------------------------------------------------------------- */

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");

  useEffect(() => {
    const root = document.documentElement;
    const apply = (mode) => {
      const isDark =
        mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", isDark);
    };
    apply(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => apply("system");
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    }
  }, [theme]);

  return [theme, setTheme];
}

function ThemeToggle({ theme, setTheme }) {
  const options = [
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
    { id: "system", icon: Monitor, label: "System" },
  ];
  return (
    <div className="hidden md:flex items-center gap-1 rounded-full glass p-1">
      {options.map((o) => {
        const Icon = o.icon;
        const active = theme === o.id;
        return (
          <button
            key={o.id}
            onClick={() => setTheme(o.id)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              active
                ? "bg-white/80 dark:bg-white/15 text-slate-900 dark:text-white shadow-sm"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white"
            }`}
          >
            <Icon size={14} />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Scroll reveal                                                     */
/* ---------------------------------------------------------------- */

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Animated background: gradient blobs + drifting IT icons           */
/* ---------------------------------------------------------------- */

const BG_ICONS = [
  { Icon: Code2, top: "8%", left: "6%", size: 46, anim: "animate-float-a", delay: "0s" },
  { Icon: Braces, top: "18%", left: "88%", size: 60, anim: "animate-float-b", delay: "1s" },
  { Icon: Terminal, top: "34%", left: "18%", size: 38, anim: "animate-float-c", delay: "0.5s" },
  { Icon: Binary, top: "48%", left: "78%", size: 50, anim: "animate-drift", delay: "1.5s" },
  { Icon: Cpu, top: "62%", left: "10%", size: 44, anim: "animate-float-a", delay: "2s" },
  { Icon: Database, top: "72%", left: "90%", size: 40, anim: "animate-float-b", delay: "0.8s" },
  { Icon: Code2, top: "85%", left: "22%", size: 34, anim: "animate-float-c", delay: "1.2s" },
  { Icon: Braces, top: "92%", left: "60%", size: 30, anim: "animate-drift", delay: "0.3s" },
  { Icon: Terminal, top: "5%", left: "45%", size: 30, anim: "animate-float-b", delay: "1.8s" },
];

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none app-bg">
      <div className="absolute inset-0 dotted-bg opacity-40 dark:opacity-10" />

      {/* soft blurred gradient blobs (glassmorphism backdrop) */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob-a" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-pink-400/25 blur-3xl animate-blob-b" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-purple-400/25 blur-3xl animate-blob-c" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-blob-a" />

      {BG_ICONS.map(({ Icon, top, left, size, anim, delay }, i) => (
        <Icon
          key={i}
          className={`absolute text-accent/15 dark:text-accent/20 ${anim}`}
          style={{ top, left, animationDelay: delay }}
          size={size}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Small building blocks                                             */
/* ---------------------------------------------------------------- */

function TechPill({ children }) {
  return (
    <span className="rounded-full glass px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
      {children}
    </span>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <h2
        className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        style={{ filter: "drop-shadow(0 8px 16px rgba(30, 20, 90, 0.12))" }}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">{subtitle}</p>}
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/* App                                                                */
/* ---------------------------------------------------------------- */

export default function App() {
  const [theme, setTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 relative text-slate-900 dark:text-slate-100">
      <AnimatedBackground />

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/40 dark:border-white/10 glass-nav">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-display font-bold text-lg text-slate-900 dark:text-white">
            <Code2 size={20} className="text-accent" />
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              className="md:hidden text-slate-700 dark:text-slate-200"
              onClick={() => setMenuOpen((m) => !m)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-1 px-6 pb-4">
            {NAV_LINKS.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left py-2 text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for Internships
            </span>

            <h1
              className="mt-6 font-display text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white"
              style={{ filter: "drop-shadow(0 10px 18px rgba(30, 20, 90, 0.14))" }}
            >
              Kirusigan
              <br />
              <span className="text-gradient">Thevarasa</span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-accent">Full-Stack Developer</p>

            <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Software Engineer Intern and Information Technology undergraduate building efficient, scalable
              products from responsive interfaces to secure backend services. I work across React, Spring Boot,
              Node.js, microservices, event-driven systems, and AI-powered integrations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-gradient-to-r from-accent to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/30 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/40 transition-all"
              >
                Hire Me
              </button>
              <a
                href="/Kirusigan_Thevarasa_CV.pdf"
                download="Kirusigan_Thevarasa_CV.pdf"
                className="flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-accent shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">Email</a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex flex-col items-center md:items-end md:mt-10">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent via-purple-400 to-pink-300 opacity-70 blur-lg" />
              <img
                src={profileImg}
                alt="Kirusigan Thevarasa"
                style={{ objectPosition: "50% 25%" }}
                className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover border-4 border-white/70 dark:border-white/10 shadow-2xl shadow-accent/30"
              />
            </div>
            <span className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">Jaffna, Sri Lanka</span>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeading title="Selected work" subtitle="Real-world products built with modern architecture, thoughtful UX, and measurable engineering depth." />

        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group rounded-2xl glass-strong overflow-hidden shadow-xl shadow-slate-900/5 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="h-48 w-full overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      style={{ objectPosition: "50% 15%" }}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`h-full w-full flex items-center justify-center text-5xl bg-gradient-to-br ${p.gradient}`}>
                      {p.emoji}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{p.role}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                    Innovation · {p.innovation}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <TechPill key={t}>{t}</TechPill>
                    ))}
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-accent transition-colors"
                  >
                    <Github size={15} /> Repository
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="My Skills" subtitle="Technologies and tools I work with to build modern, scalable applications." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br ${g.ring} h-full`}>
                  <div className="rounded-2xl glass-strong p-6 h-full shadow-lg shadow-slate-900/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-4">{g.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {g.tags.map((t) => (
                        <span key={t} className={`rounded-full px-3 py-1 text-xs font-semibold ${g.pill}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-24">
        <SectionHeading title="Education" subtitle="My academic background." />
        <div className="space-y-6">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <div className="rounded-2xl glass-strong p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-lg shadow-slate-900/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white">{e.title}</h3>
                  <p className="text-sm text-accent font-semibold mt-1">{e.place}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{e.detail}</p>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="🏆 Certifications" subtitle="Courses and certificates I've completed." />

          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.title + i} delay={i * 100}>
                <div className="rounded-2xl glass-strong p-6 shadow-lg shadow-slate-900/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-purple-500 text-white shadow-md">
                      <Award size={20} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-slate-900 dark:text-white leading-snug">{c.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {c.platform} · {c.year}
                      </p>
                    </div>
                  </div>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full glass px-4 py-2 text-sm font-semibold text-accent hover:-translate-y-0.5 hover:shadow-md transition-all self-start"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Get in touch"
            subtitle="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
          />

          <Reveal className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl glass-strong p-8 shadow-2xl shadow-slate-900/10 hover:-translate-y-1 transition-transform duration-300 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-purple-500 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/30 hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                <Send size={16} /> {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Thanks! Your message has been sent — I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-xs text-rose-500">
                  Something went wrong sending that. You can also email me directly at {CONTACT.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/40 dark:border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={15} /> Email
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Github size={15} /> GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={15} /> {CONTACT.phone}
            </a>
          </div>
          <span>© {new Date().getFullYear()} Kirusigan Thevarasa. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
