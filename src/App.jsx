import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { FiExternalLink, FiMail, FiMapPin } from "react-icons/fi";

import freelanceFinderImg from "./assets/projects/freelance-finder.png";
import pathfindingImg from "./assets/projects/pathfinding-visualizer.png";
import bankingImg from "./assets/projects/banking-system.png";
import lruImg from "./assets/projects/lru-cache.png";
import profileImg from "./assets/profile.jpg";

const skills = [
  {
    title: "Languages",
    items: ["C/C++", "JavaScript", "SQL", "Java (Basic)"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    title: "Core Concepts",
    items: [
      "Data Structures",
      "Algorithms",
      "REST APIs",
      "OOP",
      "DBMS",
      "Problem Solving",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "MongoDB"],
  },
];

const projects = [
  {
    title: "Freelance Finder",
    period: "Sept 2024 – Oct 2024",
    description:
      "Full-stack MERN platform connecting clients and freelancers through role-based workflows and service discovery.",
    points: [
      "Built RESTful APIs for authentication, listings, and user interactions.",
      "Implemented JWT-based authentication and structured buyer-seller workflows.",
      "Designed scalable backend architecture and structured API endpoints to support modular and maintainable development.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    githubFrontend: "https://github.com/samba8897/freelancefinder-frontend",
    githubBackend: "https://github.com/samba8897/freelance_finder",
    live: "https://prolancer.netlify.app/",
    accent: "from-blue-500/20 to-cyan-400/10",
    image: freelanceFinderImg,
  },
  {
    title: "Banking Transaction System",
    period: "Feb 2026 – Mar 2026",
    description:
      "Backend-focused system handling account operations with transaction safety, validation rules, and reliable database workflows.",
    points: [
      "Implemented deposits, withdrawals, fund transfers, and account creation logic.",
      "Used SQL transactions for consistency, rollback safety, and reliable state updates.",
      "Focused on backend correctness, validations, and financial operation integrity.",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "SQL Transactions"],
    github: "https://github.com/samba8897/banking-transaction-system",
    live: null,
    accent: "from-violet-500/20 to-blue-400/10",
    image: bankingImg,
  },
  {
    title: "Pathfinding Visualizer",
    period: "Feb 2025",
    description:
      "Interactive visualizer for graph traversal and shortest-path algorithms using grid-based simulation.",
    points: [
      "Implemented BFS, DFS, and Dijkstra’s algorithm.",
      "Added dynamic grid interaction and real-time path animation.",
      "Turned algorithm behavior into a visual, easy-to-understand interface.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "BFS", "DFS", "Dijkstra"],
    github: "https://github.com/samba8897/Pathfinding-Visualizer",
    live: "https://samba8897.github.io/Pathfinding-Visualizer/",
    accent: "from-emerald-500/20 to-cyan-400/10",
    image: pathfindingImg,
  },
  {
    title: "LRU Cache System",
    period: "Jan 2026",
    description:
      "Optimized cache implementation using HashMap and Doubly Linked List with constant-time operations.",
    points: [
      "Achieved O(1) time complexity for GET and PUT operations.",
      "Used HashMap for fast access and Doubly Linked List for efficient eviction.",
      "Demonstrates strong understanding of data structure design and optimization.",
    ],
    stack: ["C++", "STL", "HashMap", "Doubly Linked List"],
    github: "https://github.com/samba8897/lru-cache",
    live: null,
    accent: "from-amber-500/20 to-orange-400/10",
    image: lruImg,
  },
];

const certifications = [
  "Google Android Development Virtual Internship",
  "Salesforce Developer Virtual Internship",
  "AWS Academy Cloud Foundations",
  "Problem-Solving Using C Language through CodeTantra",
];

const stats = [
  { label: "Core Focus", value: "Full-Stack + Backend" },
  { label: "Strong Area", value: "DSA & APIs" },
  { label: "Graduation", value: "2025" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="mb-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl leading-7 text-white/70">{description}</p>
      ) : null}
    </motion.div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {project.githubFrontend && (
        <a
          href={project.githubFrontend}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white/80 transition hover:text-white"
        >
          <FaGithub className="text-lg" />
          <span>Frontend Repo</span>
        </a>
      )}

      {project.githubBackend && (
        <a
          href={project.githubBackend}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white/80 transition hover:text-white"
        >
          <FaGithub className="text-lg" />
          <span>Backend Repo</span>
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white/80 transition hover:text-white"
        >
          <FaGithub className="text-lg" />
          <span>GitHub</span>
        </a>
      )}

      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
        >
          <FiExternalLink className="text-lg" />
          <span>Live</span>
        </a>
      )}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-5%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[25%] h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101c]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Sambasivarao
          </a>

          <div className="hidden gap-6 text-sm text-white/80 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="rounded-xl border border-white/10 p-2 text-white/80 transition hover:bg-white/5 md:hidden"
          >
            <FaBars className="text-lg" />
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] md:hidden"
            >
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-white/10 bg-[#0b1220]/95 backdrop-blur-xl p-6 shadow-2xl z-[70]">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-lg font-semibold">Menu</span>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl border border-white/10 p-2 text-white/80 transition hover:bg-white/5"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                <div className="flex flex-col gap-5 text-base text-white/80">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-auto grid gap-3 pt-8">
                  <a
                    href="mailto:sambasivarao3521@gmail.com"
                    className="rounded-xl bg-blue-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
                  >
                    Email Me
                  </a>
                  <a
                    href="https://github.com/samba8897"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-center text-white/85 transition hover:bg-white/5"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 py-16 md:py-20"
        >
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Full-Stack Developer
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                I build scalable web applications with strong backend logic and
                clean API architecture.
              </h1>

              <p className="mb-8 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                Full-stack developer with hands-on experience building scalable
                applications and system-level projects. Strong foundation in data
                structures, backend development, and database design, with a
                focus on performance, reliability, and clean architecture.
              </p>

              <div className="mb-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/45">
                      {stat.label}
                    </p>
                    <p className="text-sm font-semibold text-white/90">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 p-6 shadow-2xl shadow-black/30">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-300">
                    Available for opportunities
                  </span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="flex h-96 items-center justify-center rounded-3xl border border-white/10 bg-[#101827] overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Sambasivarao"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <SectionHeading
              eyebrow="About"
              title="Full-stack developer focused on real systems."
              description="I build applications that go beyond frontend interfaces — focusing on backend logic, API design, and scalable system behavior. My work combines full-stack development with strong fundamentals in data structures and problem solving."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Education",
                  text: "B.Tech in Computer Science Engineering, KHIT, graduated in April 2025 with GPA 7.67.",
                },
                {
                  title: "Strength",
                  text: "Strong foundation in data structures, backend development, database design, and API-based application building.",
                },
                {
                  title: "Approach",
                  text: "I focus on reliability, clean logic, scalable structure, and practical problem solving instead of cosmetic-only projects.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-[#101827] p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/70">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Skills"
            title="Tech stack and core strengths"
            description="My stack covers full-stack development, backend systems, and core computer science fundamentals used in real-world applications."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group, index) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
                <ul className="space-y-2 text-white/70">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Projects"
            title="Selected projects"
            description="A mix of full-stack applications, backend systems, and algorithm-focused implementations."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06]"
              >
                <div
                  className={`mb-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-3`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1725]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                        {project.period}
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/60 backdrop-blur">
                        Featured
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08101c] via-[#08101c]/85 to-transparent p-5">
                      <h3 className="mb-2 text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="max-w-md text-sm leading-6 text-white/75">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mb-6 space-y-2 text-sm leading-6 text-white/65">
                  {project.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#101827] px-3 py-1 text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={project} />
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          className="mx-auto max-w-6xl px-6 py-16 md:py-20"
        >
          <SectionHeading
            eyebrow="Certifications"
            title="Relevant certifications"
            description="Certifications support my profile, but the main proof is in the projects and problem-solving work."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition hover:border-blue-400/25"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something useful."
              description="You can reach me through email, GitHub, or LinkedIn."
            />

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="grid gap-4"
              >
                <div className="rounded-2xl border border-white/10 bg-[#101827] p-5">
                  <div className="mb-3 flex items-center gap-3 text-blue-400">
                    <FiMail />
                    <span className="font-semibold text-white">Email</span>
                  </div>
                  <p className="break-all text-white/70">
                    sambasivarao3521@gmail.com
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#101827] p-5">
                  <div className="mb-3 flex items-center gap-3 text-blue-400">
                    <FiMapPin />
                    <span className="font-semibold text-white">Location</span>
                  </div>
                  <p className="text-white/70">Tenali, Andhra Pradesh, India</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#101827] p-5">
                  <div className="mb-3 flex items-center gap-3 text-blue-400">
                    <FaCode />
                    <span className="font-semibold text-white">Interests</span>
                  </div>
                  <p className="text-white/70">
                    Full-stack apps, backend systems, APIs, DSA, and practical
                    engineering problems.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="rounded-2xl border border-white/10 bg-[#101827] p-6"
              >
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-semibold">
                    Preferred contact channels
                  </h3>
                  <p className="text-white/70">
                    Open to full-time roles and collaboration.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href="mailto:sambasivarao3521@gmail.com"
                    className="flex items-center gap-3 rounded-2xl bg-blue-500 px-5 py-4 font-semibold text-white transition hover:bg-blue-400"
                  >
                    <FiMail />
                    <span>Email Me</span>
                  </a>

                  <a
                    href="https://github.com/samba8897"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/5"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chsambasivarao/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/5"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="#projects"
                    className="flex items-center gap-3 rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/5"
                  >
                    <FaServer />
                    <span>View Work</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#08101c]/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Sambasivarao</h3>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4 text-white/70">
              <a
                href="mailto:sambasivarao3521@gmail.com"
                className="transition hover:text-white"
              >
                <FiMail />
              </a>
              <a
                href="https://github.com/samba8897"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chsambasivarao/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>

            <p className="text-xs text-white/40">
              © 2026 Sambasivarao.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;