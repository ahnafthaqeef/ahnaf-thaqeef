import Link from "next/link";

const capabilities = [
  {
    icon: "🧠",
    title: "LLM Applications",
    desc: "RAG pipelines, AI copilots, intelligent automation. End-to-end from prompt engineering to production deployment.",
  },
  {
    icon: "📄",
    title: "Document Intelligence",
    desc: "PDF parsing, data extraction, contract analysis, and financial document Q&A — powered by AI.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    desc: "Financial analysis, anomaly detection, data visualisation tools that turn raw data into business decisions.",
  },
  {
    icon: "⚡",
    title: "Rapid Prototyping",
    desc: "Idea to working demo in days. MVP to production-ready in weeks. No over-engineering.",
  },
];

const projects = [
  {
    title: "FinAI Intel",
    desc: "Bank statement analyzer, financial doc Q&A (RAG), and AI ROI calculator — built for enterprise finance teams.",
    tags: ["RAG", "Document AI", "LLM"],
    url: "https://finai.aibizmy.com",
    accent: "#FFB400",
  },
  {
    title: "AcaraHQ",
    desc: "Full-featured event management platform. Multi-role auth, event builder, registration, and analytics.",
    tags: ["SaaS", "Full-stack", "Supabase"],
    url: "https://events.aibizmy.com",
    accent: "#00AAEF",
  },
  {
    title: "AI Resume Builder",
    desc: "ATS-optimised resume tailoring with streaming AI. Job scanner, cover letter gen, and match scoring.",
    tags: ["LLM", "Streaming", "PDF Parsing"],
    url: "https://resume.aibizmy.com",
    accent: "#FFD166",
  },
  {
    title: "Cash Flow Forecaster",
    desc: "AI-powered cash flow projection for SMEs. Input transactions, get 90-day AI forecast with risk flags.",
    tags: ["Financial AI", "Analytics"],
    url: "https://cashflow.aibizmy.com",
    accent: "#FFB400",
  },
  {
    title: "AI Contract Builder",
    desc: "Generate legally structured contracts from plain English. Clause suggestions, export-ready output.",
    tags: ["Document AI", "LLM"],
    url: "https://contract.aibizmy.com",
    accent: "#00AAEF",
  },
  {
    title: "Halal Scanner",
    desc: "Scan product ingredients against halal criteria. Instant AI verdict with detailed ingredient breakdown.",
    tags: ["AI", "Mobile-first"],
    url: "https://halal.aibizmy.com",
    accent: "#FFD166",
  },
];

const skills = [
  "LLM / Generative AI", "RAG Systems", "Prompt Engineering",
  "Next.js 15/16", "TypeScript", "Python",
  "Supabase / PostgreSQL", "pgvector", "REST APIs",
  "Groq API", "Anthropic Claude", "OpenAI API",
  "AWS Bedrock", "AWS Textract", "Vercel", "Cloudflare",
  "PDF / Document Parsing", "Streaming AI (SSE)",
  "TailwindCSS", "Playwright", "FFmpeg", "Whisper ASR",
  "FastAPI", "Solution Architecture",
];

const stats = [
  { value: "16+", label: "AI Apps Built" },
  { value: "< 1 wk", label: "Idea to Live Demo" },
  { value: "100%", label: "Free-Tier Infra" },
  { value: "3+", label: "Active SaaS Products" },
];

export default function Home() {
  return (
    <main>
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-gold-gradient font-black text-xl">AT</span>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-400 hover:text-white transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-gold px-5 py-2 rounded-full text-sm hidden md:block">
            Hire Me
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Ambient glow */}
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div
            className="spin-slow absolute"
            style={{
              width: 580,
              height: 220,
              border: "1.5px solid rgba(255,180,0,0.18)",
              borderRadius: "50%",
              transform: "rotateX(72deg)",
            }}
          />
          <div
            className="spin-reverse absolute"
            style={{
              width: 800,
              height: 300,
              border: "1px solid rgba(0,170,239,0.07)",
              borderRadius: "50%",
              transform: "rotateX(72deg)",
            }}
          />
          {/* Sparks */}
          <div className="pulse-glow absolute w-2 h-2 rounded-full" style={{ background: "#FFD166", boxShadow: "0 0 14px #FFD166", top: "37%", left: "63%" }} />
          <div className="pulse-glow absolute w-1 h-1 rounded-full" style={{ background: "#00AAEF", boxShadow: "0 0 10px #00AAEF", top: "56%", left: "34%", animationDelay: "1.5s" }} />
          <div className="pulse-glow absolute w-1.5 h-1.5 rounded-full" style={{ background: "#FFB400", boxShadow: "0 0 10px #FFB400", top: "29%", left: "49%", animationDelay: "0.8s" }} />
          <div className="pulse-glow absolute w-1 h-1 rounded-full" style={{ background: "#FFD166", boxShadow: "0 0 8px #FFD166", top: "65%", left: "60%", animationDelay: "2s" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="section-label mb-6 tracking-widest">AI Innovation Leader · Malaysia</p>

          <h1
            className="text-gold-gradient font-black leading-none mb-5"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
          >
            Ahnaf<br />Thaqeef
          </h1>

          <p className="text-neon text-lg font-bold mb-4 tracking-wide">
            Building Enterprise AI · From Prototype to Production
          </p>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I design and ship AI-powered solutions — RAG systems, LLM copilots,
            document intelligence, and analytics tools — that convert business
            problems into working software within days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="btn-gold px-8 py-4 rounded-full">
              View My Work ↓
            </a>
            <a href="#contact" className="btn-outline px-8 py-4 rounded-full">
              Let&apos;s Connect
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10"
            style={{ borderTop: "1px solid rgba(255,180,0,0.1)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-gold-gradient font-black text-3xl">{s.value}</p>
                <p className="text-gray-600 text-xs mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="gold-divider mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">About</p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                I turn AI ideas into{" "}
                <span className="text-gold-gradient">working products</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Based in Malaysia, I build AI-powered applications at the intersection
                of business strategy and technical execution. My focus is enterprise AI —
                solutions that don&apos;t just demo well, but scale into production.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I&apos;ve shipped 16+ AI applications across financial intelligence,
                document processing, event management, and productivity — all live,
                running on lean infrastructure.
              </p>
            </div>
            <div className="space-y-4">
              {capabilities.map((cap) => (
                <div key={cap.title} className="card-glow rounded-xl p-5 flex gap-4">
                  <span className="text-2xl mt-0.5 shrink-0">{cap.icon}</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{cap.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="gold-divider mb-16" />
          <div className="text-center mb-14">
            <p className="section-label mb-3">Live Projects</p>
            <h2 className="text-4xl font-bold text-white">
              Things I&apos;ve <span className="text-gold-gradient">built &amp; shipped</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
              Every project is live, publicly accessible, and built to production standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <Link
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow rounded-2xl p-6 flex flex-col group"
              >
                <div
                  className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center font-black text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}44)`,
                    border: `1px solid ${p.accent}55`,
                    color: p.accent,
                  }}
                >
                  {p.title.charAt(0)}
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-gold-gradient transition-all">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${p.accent}11`,
                        border: `1px solid ${p.accent}33`,
                        color: p.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="https://aibizmy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-3 rounded-full inline-block text-sm"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────── */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="gold-divider mb-16" />
          <div className="text-center mb-14">
            <p className="section-label mb-3">Tech Stack</p>
            <h2 className="text-4xl font-bold text-white">
              What I <span className="text-gold-gradient">work with</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((s) => (
              <span key={s} className="skill-chip">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-16" />
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="text-5xl font-black text-white mb-4">
            Ready to <span className="text-gold-gradient">build?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Looking for an AI innovation leader who ships real products — not just decks.
            Let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="mailto:ahnafthaqeef@gmail.com"
              className="btn-gold px-8 py-4 rounded-full"
            >
              Email Me ↗
            </a>
            <a
              href="https://linkedin.com/in/ahnafthaqeef"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4 rounded-full"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Orbital decoration */}
          <div className="flex items-center justify-center h-16 opacity-25">
            <div
              className="spin-slow absolute"
              style={{ width: 100, height: 34, border: "1px solid #FFD166", borderRadius: "50%", transform: "rotateX(70deg)" }}
            />
            <div className="pulse-glow w-2 h-2 rounded-full" style={{ background: "#FFD166", boxShadow: "0 0 12px #FFD166" }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,180,0,0.08)" }} className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gold-gradient font-black text-lg">Ahnaf Thaqeef</span>
          <p className="text-gray-700 text-sm">© 2026 · Built with Next.js · Malaysia</p>
          <div className="flex items-center gap-5">
            <a href="https://aibizmy.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">aibizmy.com</a>
            <a href="https://linkedin.com/in/ahnafthaqeef" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
