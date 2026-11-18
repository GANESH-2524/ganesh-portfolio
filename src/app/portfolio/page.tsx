"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, BriefcaseBusiness,
  CakeSlice, CheckCircle2, Code2, Database, ExternalLink, FileCode2, FileText, Github, Globe2, Layers3, Mail,
  Menu, MessageCircle, Monitor, Server, Sparkles, Terminal, X, Zap,
} from "lucide-react";

const EMAIL = "anakapalliganesh942@gmail.com";
const WHATSAPP = "917036571124";
const GITHUB = "https://github.com/GANESH-2524";

const projects = [
  {
    number: "01", type: "WEB APPLICATION", title: "Voter Search Management System",
    description: "A record-search tool designed to make a large voter dataset easier to search, review and use, with a print-friendly mini-slip workflow.",
    tags: ["Next.js", "React", "Data search", "Printing"], visual: "voter", image: "/images/project-voter.svg",
    status: "Personal project", href: "", action: "Ask for a walkthrough",
  },
  {
    number: "02", type: "PORTFOLIO WEBSITE", title: "Video Editor Portfolio",
    description: "A portfolio website built for a video editor to present creative work, services and contact details in a polished, responsive layout.",
    tags: ["Web development", "Responsive design", "Portfolio"], visual: "editor", image: "/images/project-video-editor.svg",
    status: "Live website", href: "https://video-editor-portfolio-brown.vercel.app/", action: "View live website",
  },
  {
    number: "03", type: "GROCERY SHOPPING DEMO", title: "Grocery Shopping Application",
    description: "A quick-commerce-inspired grocery shopping demo with product browsing and cart interactions, created as a working project demonstration.",
    tags: ["JavaScript", "Cart experience", "Netlify"], visual: "grocery", image: "/images/project-grocery.svg",
    status: "Live demo", href: "https://grocery-vijayawada.netlify.app/", action: "Explore demo",
  },
];

const skills = [
  { name: "HTML & CSS", detail: "Responsive structure and visual styling", level: "Building", icon: FileCode2 },
  { name: "JavaScript", detail: "Interactive behaviour and browser logic", level: "Building", icon: Code2 },
  { name: "React & Next.js", detail: "Component-based web experiences", level: "Developing", icon: Layers3 },
  { name: "Node.js & Express", detail: "Server-side development and APIs", level: "Learning", icon: Server },
  { name: "MongoDB", detail: "Database connections and records", level: "Working knowledge", icon: Database },
  { name: "Git & GitHub", detail: "Version control and project sharing", level: "Using", icon: Github },
  { name: "AI-assisted development", detail: "Prototyping, learning and workflows", level: "Workflow", icon: Sparkles },
  { name: "Responsive design", detail: "Layouts across desktop and mobile", level: "Building", icon: Globe2 },
];

const services = [
  { icon: Monitor, image: "/images/service-business.svg", title: "Business websites", text: "Responsive websites that help local businesses explain what they offer and make it easy for customers to get in touch." },
  { icon: Layers3, image: "/images/service-portfolio.svg", title: "Portfolio websites", text: "Personal websites that present your work, skills and story in a clear, professional way." },
  { icon: Code2, image: "/images/service-landing.svg", title: "Landing pages", text: "Focused pages for a product, service, event or campaign, with clear calls to action." },
  { icon: BriefcaseBusiness, image: "/images/service-tools.svg", title: "Custom web tools", text: "Practical browser-based tools, search interfaces and dashboards shaped around a specific workflow." },
  { icon: FileText, image: "/images/service-resume.svg", title: "Resume building", text: "Well-structured, professional resumes designed to present your real education, skills, projects and experience clearly. I can help with layout, wording and an ATS-conscious format without inventing qualifications." },
  { icon: CakeSlice, image: "/images/service-birthday.svg", title: "Birthday wishing websites", text: "Personalized birthday surprise websites featuring photos, heartfelt messages, countdowns, animations, optional music and interactive surprises made for someone special." },
];

const navItems = ["About", "Projects", "Skills", "Services", "Contact"];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const reply = String(form.get("reply") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${reply}\n\nProject details:\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-page">
      <div className="site-noise" aria-hidden="true" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ganesh home">G<span>.</span></a>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
            <span className="status-dot" /> OPEN TO FREELANCE PROJECTS & COLLABORATIONS
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }}>
            I build digital<br /><span>experiences</span><br />that make sense<span className="period">.</span>
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .65, delay: .3 }}>
            Hey, I&apos;m <strong>Ganesh</strong> — a Computer Science engineering student and aspiring web developer who enjoys turning practical ideas into useful, engaging websites.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Let&apos;s talk <ArrowRight size={16} /></a>
          </motion.div>
          <div className="hero-meta"><span>ANDHRA PRADESH, INDIA</span><span className="meta-line" /><span>WEB DEVELOPMENT · DIGITAL PRODUCTS</span></div>
        </div>

        <motion.div className="hero-art photo-art" initial={{ opacity: 0, scale: .92, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .85, delay: .18 }}>
          <div className="photo-orbit photo-orbit-one" /><div className="photo-orbit photo-orbit-two" />
          <div className="portrait-frame">
            {!photoFailed && <img className="portrait-image" src="/images/ganesh-profile.png" alt="Portrait of Ganesh" onError={() => setPhotoFailed(true)} />}
            {photoFailed && <div className="portrait-fallback"><span>G.</span><small>YOUR PHOTO GOES HERE</small></div>}
            <div className="portrait-shade" />
            <div className="portrait-label"><span>GANESH</span><span>WEB DEVELOPER</span></div>
          </div>
          <div className="photo-chip photo-chip-top"><Sparkles size={15} /> BUILD WITH PURPOSE</div>
          <div className="photo-chip photo-chip-bottom"><Code2 size={15} /> IDEAS INTO INTERFACES</div>
          <div className="photo-caption">Curious mind.<br /><b>Builder&apos;s mindset.</b></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-kicker">01 / ABOUT ME</div>
        <div className="about-grid">
          <div><h2>Learning today.<br /><span>Building for tomorrow.</span></h2><div className="about-facts"><span><b>02</b> Year B.Tech CSE</span><span><b>03</b> Featured projects</span><span><b>01</b> Curious mindset</span></div></div>
          <div className="about-copy">
            <p>I&apos;m pursuing a B.Tech in Computer Science and Engineering at NRI University, Agiripalli. I&apos;m interested in web development and in using technology to solve everyday problems.</p>
            <p>I learn by building: from a voter-record search tool to portfolio websites and a grocery-shopping demo. I enjoy exploring new tools, improving the user experience and turning an idea into something people can actually try.</p>
            <p>I&apos;m still growing as a developer, and I value clear communication, practical solutions and honest collaboration.</p>
            <div className="about-note"><span className="note-icon"><Zap size={17} /></span><span>Currently improving my development skills and open to suitable freelance projects, internships and collaborations.</span></div>
          </div>
        </div>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <div className="section-heading"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Ideas turned into <span>projects.</span></h2></div><p>A selection of projects I&apos;ve worked on while learning, experimenting and solving practical problems.</p></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .5, delay: index * .08 }}>
              <div className={`project-visual ${project.visual}`}>
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                <span className="visual-index">{project.number}</span>
              </div>
              <div className="project-info"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-footer"><span>{project.status}</span>
                  {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={project.action}>{project.action} <ExternalLink size={14} /></a> : <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Voter Search System walkthrough")}`}>{project.action} <ArrowUpRight size={15} /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="skills section-wrap section-pad" id="skills">
        <div className="section-kicker">03 / SKILLS & TECHNOLOGIES</div>
        <div className="section-heading"><h2>My current <span>toolkit.</span></h2><p>I&apos;m continuously learning. These are the tools and areas I&apos;ve been using or actively developing.</p></div>
        <div className="galaxy-toolkit" aria-label="Animated technology toolkit">
          <div className="galaxy-core"><span>G.</span><small>MY TOOLKIT</small></div>
          <div className="galaxy-orbit orbit-a" />
          <div className="galaxy-orbit orbit-b" />
          <div className="galaxy-orbit orbit-c" />
          {skills.map((skill, index) => { const ToolIcon = skill.icon; return (
            <motion.div className={`galaxy-tool tool-${index + 1}`} key={skill.name}
              initial={{ opacity: 0, scale: .55, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: index * .16 }}>
              <span className="tool-icon"><ToolIcon size={22} /></span><span className="tool-name">{skill.name}</span>
            </motion.div>
          ); })}
        </div>
        <div className="toolkit-list">{skills.map((skill, index) => { const ToolIcon = skill.icon; return <motion.div className="toolkit-row" key={skill.name} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><span className="toolkit-icon"><ToolIcon size={17}/></span><div className="skill-copy"><h3>{skill.name}</h3><p>{skill.detail}</p></div><span className="skill-level">{skill.level}</span></motion.div>; })}</div>
      </section>

      <section className="services section-wrap section-pad" id="services">
        <div className="section-kicker">04 / SERVICES</div>
        <div className="section-heading"><h2>How I can <span>help.</span></h2><p>From business websites and custom web tools to resumes and personal birthday surprises — practical digital experiences for people, creators and businesses.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, image, title, text }, index) => <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: index * .08 }}><div className="service-image"><img src={image} alt={`${title} illustration`} loading="lazy"/><span className="service-count">0{index + 1}</span><span className="service-icon"><Icon size={20}/></span></div><div className="service-content"><h3>{title}</h3><p>{text}</p><a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Ganesh, I'm interested in your ${title} service.`)}`} target="_blank" rel="noreferrer" className="service-enquire">Discuss this service <ArrowUpRight size={15}/></a></div></motion.article>)}</div>
      </section>

      <section className="process section-wrap section-pad" id="process">
        <div className="section-kicker">05 / HOW I WORK</div><div className="section-heading"><h2>Simple, clear <span>process.</span></h2><p>A collaborative approach that keeps the goal and the next step clear.</p></div>
        <div className="process-grid"><div><span>01</span><h3>Understand</h3><p>Discuss your idea, audience, goals and essential features.</p></div><div><span>02</span><h3>Plan & build</h3><p>Agree on the scope, then create and refine the experience.</p></div><div><span>03</span><h3>Review & deliver</h3><p>Test the result, collect feedback and prepare it for handover.</p></div></div>
      </section>

      <section className="contact section-wrap section-pad" id="contact">
        <div className="contact-layout">
          <div className="contact-panel"><div className="section-kicker">06 / CONTACT</div><h2>Have an idea?<br /><span>Let&apos;s talk.</span></h2><p>If you need a website, have a project idea or want to collaborate, send me a message. Tell me what you&apos;re trying to build and we can discuss the next step.</p>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}><Mail size={17} /><span><small>EMAIL</small>{EMAIL}</span><ArrowUpRight size={16} /></a>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Ganesh, I saw your portfolio and would like to discuss a project.")}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /><span><small>WHATSAPP</small>+91 70365 71124</span><ArrowUpRight size={16} /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GITHUB</small>github.com/GANESH-2524</span><ArrowUpRight size={16} /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading"><span>START A CONVERSATION</span><CheckCircle2 size={19} /></div>
            <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" placeholder="Enter your name" required />
            <label htmlFor="contact-reply">Email or phone</label><input id="contact-reply" name="reply" placeholder="How can I reach you?" required />
            <label htmlFor="contact-message">Tell me about your project</label><textarea id="contact-message" name="message" rows={5} placeholder="A short description of what you need..." required />
            <button className="button button-primary form-submit" type="submit">Send project enquiry <ArrowUpRight size={16} /></button>
            <p className="form-note">This opens your email app with the enquiry details ready to send.</p>
          </form>
        </div>
      </section>

      <footer className="footer section-wrap"><a className="brand" href="#home">G<span>.</span></a><span>Designed & built with curiosity by Ganesh.</span><div className="footer-socials"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17} /></a><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a></div><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>

      {showScrollTop && <button className="scroll-top-button" type="button" aria-label="Scroll to top" title="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={21} strokeWidth={2.4} /></button>}
    </main>
  );
}
