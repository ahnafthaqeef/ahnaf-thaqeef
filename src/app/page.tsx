import Link from "next/link";
import Image from "next/image";

// ── Data ──────────────────────────────────────────────────────────────────────

const experience = [
  {
    company: "aibizmy.com",
    role: "AI Systems Architect & Founder",
    period: "2023 – Present",
    location: "Malaysia (Remote)",
    accent: "#10b981",
    highlights: [
      { metric: "20+", desc: "production AI apps independently architected, deployed, and maintained for the Malaysian and SEA market" },
      { metric: "Multi-LLM", desc: "self-healing n8n automation engine orchestrating Claude, Groq, OpenAI, Gemini — zero manual intervention on mission-critical workflows" },
      { metric: "RAG + pgvector", desc: "retrieval-augmented pipelines with vector DB integration (Pinecone, Weaviate, pgvector) for context-aware, memory-enabled AI outputs" },
      { metric: "BYOK", desc: "multi-tenant SaaS architecture with per-user API key isolation and Supabase Row Level Security" },
    ],
  },
  {
    company: "Nestlé Malaysia",
    role: "THUB Specialist, Nestlé",
    period: "Jan 2025 – Present",
    location: "Selangor, Malaysia",
    accent: "#7c3aed",
    highlights: [
      { metric: "~MYR 200k", desc: "dispute cost avoidance — designed & deployed AI + telematics POC for 3PL fleet management, integrated AI dashcam evidence into dispute workflows" },
      { metric: "40%", desc: "pipeline automation completion — authored 120+ user stories and ACs for ERP-to-freight automation (SAP TM integration)" },
      { metric: "80%", desc: "active system usage in 3 months — engineered automated Fleet Safety Inspection reporting (Power BI + Power Automate)" },
      { metric: "~MYR 50k/mo", desc: "surcharge reduction — delivered stakeholder analytics and negotiated data-driven routing changes to reduce Singapore surcharge exposure by ~50%" },
      { metric: "21 providers", desc: "real-time OTC/OTD visibility via Power BI analytics platform — replaced manual weekly reporting across all 3PL relationships" },
    ],
  },
  {
    company: "Nestlé Malaysia",
    role: "First Line Manager — Shah Alam Complex",
    period: "May 2024 – Jan 2025",
    location: "Selangor, Malaysia",
    accent: "#06b6d4",
    highlights: [
      { metric: "~MYR 300k/mo", desc: "operational savings — spearheaded AI-driven DMO: digital dashboards, automated OPLs, leadership analytics; unplanned stoppages reduced to 5.3%" },
      { metric: "95%", desc: "process adoption in 2 months — structured training, runbooks, and change management across the production floor" },
      { metric: "ISA-95 L3", desc: "MES capability map designed — architecture documentation adopted as production deployment blueprint" },
    ],
  },
  {
    company: "Biocon Biologics",
    role: "Production Associate — Drug Substance",
    period: "Jan 2023 – Apr 2024",
    location: "Johor, Malaysia",
    accent: "#8b5cf6",
    highlights: [
      { metric: "USD 20k", desc: "cost reduction per batch — implemented chemical preparation scheduling optimisation" },
      { metric: "ISA-95 L3", desc: "MES interface test cases designed for SAP-to-MES integration in regulated pharmaceutical environment (Honeywell)" },
      { metric: "FDA/EMA/NPRA", desc: "regulatory audit readiness — led deviation investigations and CAPA implementation" },
    ],
  },
];

const projects = [
  {
    title: "FinAI Intel",
    label: "FLAGSHIP",
    desc: "Enterprise financial intelligence platform — 6 AI tools purpose-built for finance teams and credit analysts.",
    tools: [
      "Bank Statement Analyzer — PDF ingestion, LLM transaction categorisation, anomaly flagging",
      "Financial Doc Q&A — RAG pipeline with keyword-ranked retrieval, streaming responses",
      "Credit Report Explainer — CTOS/CCRIS intelligence with 300-850 health scoring",
      "Fraud Signal Brief Generator — multi-signal risk synthesis with case reference IDs",
      "Document Consistency Checker — cross-validates payslip, bank statement, SSM cert",
      "AI ROI Calculator — real-time financial modelling with streamed business case",
    ],
    stack: ["Next.js 16", "TypeScript", "Groq Llama 3.3 70B", "pdf-parse v2", "RAG", "Vercel"],
    url: "https://finai.ahnafthaqeef.com",
    accent: "#8b5cf6",
  },
  {
    title: "AI Resume Builder",
    label: "LIVE",
    desc: "2,000+ documents processed. ATS-optimised resume tailoring with streaming AI — JD analysis, PDF/DOCX parsing, match scoring, and cover letter generation. BYOK architecture with Supabase RLS for secure multi-tenant access.",
    tools: [],
    stack: ["Next.js 15", "Groq SDK", "Supabase", "BYOK", "Streaming SSE"],
    url: "https://resume.aibizmy.com",
    accent: "#7c3aed",
  },
  {
    title: "n8n Automation Engine",
    label: "PRODUCTION",
    desc: "Self-healing automation engine managing complex multi-step AI workflows with zero manual intervention. Custom error handling with automatic retries, fallback routing, and instant Telegram/Slack alerting on failure.",
    tools: [],
    stack: ["n8n", "Multi-LLM", "Webhook Engineering", "Vector DB", "Telegram API"],
    url: "https://aibizmy.com",
    accent: "#f59e0b",
  },
  {
    title: "AcaraHQ",
    label: "LIVE",
    desc: "Enterprise event management SaaS. Multi-role auth (admin / organiser / attendee), event builder, registration workflows, attendee analytics, and Row Level Security.",
    tools: [],
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "Vercel"],
    url: "https://events.aibizmy.com",
    accent: "#06b6d4",
  },
  {
    title: "Halal Scanner",
    label: "LIVE",
    desc: "Scan product ingredients against halal criteria. Instant AI verdict with detailed ingredient breakdown and compliance classification.",
    tools: [],
    stack: ["AI", "Mobile-first", "Next.js"],
    url: "https://halal.aibizmy.com",
    accent: "#10b981",
  },
  {
    title: "CX Intelligence Suite",
    label: "LIVE",
    desc: "4-in-1 customer experience AI platform for SEA enterprise CX teams. Agentic AI architecture with multi-tool orchestration.",
    tools: [
      "Agentic Telco Service Bot — billing disputes, plan changes, technical support, complaint triage, and live CSAT capture via Claude tool use",
      "Contact Center Intelligence — real-time CSAT tracking, AHT & FCR analytics, agent performance leaderboard, and AI-powered QA scoring",
      "GenAI ROI Value Case Builder — input CC metrics → modelled ROI projection with cost savings, CSAT uplift, FTE productivity, and boardroom-ready PDF",
      "Service Blueprint Generator — company type + scenario → structured service blueprint with CX journey, AI intervention points, and operating model implications",
    ],
    stack: ["Next.js", "TypeScript", "Claude API", "Agentic AI", "Tool Use", "Vercel"],
    url: "https://cx.aibizmy.com",
    accent: "#06b6d4",
  },
];

const skillGroups = [
  {
    label: "AI & LLM",
    accent: "#8b5cf6",
    items: ["Large Language Models", "Generative AI", "RAG Architecture", "Prompt Engineering", "Streaming AI (SSE)", "Anthropic Claude", "Groq SDK", "OpenAI API", "AWS Bedrock", "AWS Textract", "Document Intelligence", "PDF/DOCX Parsing"],
  },
  {
    label: "Full-Stack Dev",
    accent: "#06b6d4",
    items: ["Next.js 15/16", "TypeScript", "React", "Python", "REST API Design", "Tailwind CSS", "Node.js"],
  },
  {
    label: "Cloud & Infra",
    accent: "#7c3aed",
    items: ["AWS (Bedrock, Textract, S3, Lambda, IAM)", "Vercel", "Cloudflare", "Supabase"],
  },
  {
    label: "Data",
    accent: "#06b6d4",
    items: ["PostgreSQL", "pgvector", "Vector Databases", "SQL", "Power BI", "Data Modelling"],
  },
  {
    label: "Enterprise",
    accent: "#8b5cf6",
    items: ["SAP ECC / SAP TM / SAP PP-PI", "MES (ISA-95 L3)", "ERP Integration", "SIT/SAT Testing", "Solution Architecture"],
  },
  {
    label: "Tools",
    accent: "#475569",
    items: ["Git", "Jira", "Confluence", "Power Automate", "n8n", "Playwright", "Whisper ASR", "FFmpeg", "WhatsApp Business API", "CRM Integration", "Real-time Data Synchronisation"],
  },
];


const education = [
  {
    inst: "University Malaya (UM)",
    degree: "Bachelor of Chemical Engineering",
    detail: "CGPA 3.16 / 4.00 · Second Class Upper · Dean's Honours List",
    year: "Oct 2022",
  },
  {
    inst: "University Malaya (UM)",
    degree: "Foundation in Physical Sciences",
    detail: "CGPA 4.00 / 4.00 · First Class",
    year: "May 2017",
  },
  {
    inst: "MRSM Tun Abdul Razak",
    degree: "SPM",
    detail: "10A's",
    year: "Nov 2015",
  },
];

const certs = [
  { name: "ISO 9001, 14001 & 45001 Internal Auditor", issuer: "Meta Minds International", date: "May 2025" },
  { name: "ISO 9001, 14001 & 45001 Awareness", issuer: "Meta Minds International", date: "May 2025" },
  { name: "Graduate Engineer", issuer: "Board of Engineers Malaysia", date: "Feb 2023" },
  { name: "Six Sigma Yellow Belt", issuer: "6sigmastudy", date: "Jun 2023" },
];

const stats = [
  { value: "20+", label: "AI Apps Shipped" },
  { value: "MYR 3M+", label: "Measurable Business Impact" },
  { value: "5+", label: "Live SaaS Products" },
  { value: "4+", label: "Years with AI" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>

      {/* ── NAV ── */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-gradient font-black text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AT</span>
          <div className="hidden md:flex items-center gap-7">
            {[["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Skills", "skills"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        {/* Orbital rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="spin-slow absolute" style={{ width: 560, height: 200, border: "1.5px solid rgba(124,58,237,0.18)", borderRadius: "50%", transform: "rotateX(72deg)" }} />
          <div className="spin-reverse absolute" style={{ width: 780, height: 290, border: "1px solid rgba(6,182,212,0.07)", borderRadius: "50%", transform: "rotateX(72deg)" }} />
          <div className="pulse-glow absolute w-2 h-2 rounded-full" style={{ background: "#8b5cf6", boxShadow: "0 0 14px #8b5cf6", top: "37%", left: "63%" }} />
          <div className="pulse-glow absolute w-1 h-1 rounded-full" style={{ background: "#06b6d4", boxShadow: "0 0 10px #06b6d4", top: "56%", left: "34%", animationDelay: "1.5s" }} />
          <div className="pulse-glow absolute w-1.5 h-1.5 rounded-full" style={{ background: "#7c3aed", boxShadow: "0 0 10px #7c3aed", top: "29%", left: "49%", animationDelay: "0.8s" }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="section-label mb-5 tracking-widest">AI Automation Educator · Malaysia</p>

          <h1
            className="text-gradient font-black leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ahnaf Thaqeef
          </h1>

          <p className="text-neon text-base font-semibold mb-3 tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Building AI Tools · Teaching Automation · Made for Malaysia
          </p>

          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Nestlé Malaysia professional who builds AI tools and automations — and teaches Malaysians how to do the same. 20+ live apps shipped. Documenting every build in public so you can learn from it.
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <a href="mailto:ahnafthaqeef@gmail.com" className="data-val hover:opacity-80 transition-opacity">ahnafthaqeef@gmail.com</a>
            <a href="https://www.linkedin.com/in/muhamad-ahnaf-thaqeef-949ab014a/" target="_blank" rel="noopener noreferrer" className="data-val hover:opacity-80 transition-opacity">linkedin.com/in/muhamad-ahnaf-thaqeef</a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#experience" className="btn-primary px-8 py-3.5 rounded-full">
              Watch Me Build ↓
            </a>
            <a href="#projects" className="btn-outline px-8 py-3.5 rounded-full">
              Live Projects ↗
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8" style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-gradient font-black text-2xl" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.value}</p>
                <p className="text-slate-600 text-xs mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="violet-divider mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Photo + quick facts */}
            <div className="flex flex-col items-center gap-5">
              {/* Profile photo with gradient ring */}
              <div
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  padding: "3px",
                  borderRadius: "20px",
                  display: "inline-block",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Ahnaf Thaqeef"
                  width={220}
                  height={264}
                  className="object-cover object-top"
                  style={{ display: "block", borderRadius: "17px" }}
                />
              </div>

              {/* Quick-facts */}
              <div className="w-full space-y-2.5">
                {[
                  { label: "Employer", val: "Nestlé Malaysia" },
                  { label: "Role", val: "THUB Specialist" },
                  { label: "Location", val: "Cyberjaya, MY" },
                  { label: "Education", val: "BEng Chemical, UM" },
                  { label: "AI Apps", val: "20+ shipped" },
                  { label: "Experience", val: "4+ yrs with AI" },
                ].map((item) => (
                  <div key={item.label} className="card-glow rounded-xl px-3 py-2.5 flex items-center justify-between gap-3">
                    <span className="text-slate-600 text-xs uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.label}</span>
                    <span className="text-slate-200 text-xs font-medium text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio — spans 2 cols */}
            <div className="md:col-span-2">
              <p className="section-label mb-3">Professional Summary</p>
              <h2 className="text-3xl font-bold text-white mb-5 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Building AI that delivers <span className="text-gradient">measurable outcomes</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Based in Malaysia, I operate at the intersection of enterprise operations and applied AI. My day job is Supply Chain at Nestlé — where I design and deploy AI systems that reduce costs, automate workflows, and generate analytics that inform leadership decisions. Outside of that, I independently ship AI applications that demonstrate what&apos;s possible when AI thinking meets product execution.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                I don&apos;t just build demos. Every project I ship is live, publicly accessible, and built to production standard — running on lean cloud infrastructure, with real AI capabilities that solve real problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Enterprise AI", "RAG / LLM", "Document Intelligence", "Supply Chain Analytics", "Full-Stack Dev", "Solution Architecture"].map((tag) => (
                  <span key={tag} className="skill-chip text-xs">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="violet-divider mb-14" />
          <div className="text-center mb-12">
            <p className="section-label mb-3">Work Experience</p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Enterprise <span className="text-gradient">impact delivered</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="card-glow rounded-2xl p-7" style={{ borderLeft: `3px solid ${job.accent}66` }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{job.company}</p>
                    <h3 className="text-white font-bold text-lg leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{job.role}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="data-val">{job.period}</span>
                    <span className="text-xs text-slate-600">{job.location}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {job.highlights.map((h, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <span
                        className="shrink-0 mt-0.5 px-2 py-0.5 rounded text-xs font-bold"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          background: `${job.accent}18`,
                          border: `1px solid ${job.accent}40`,
                          color: job.accent,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h.metric}
                      </span>
                      <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="violet-divider mb-14" />
          <div className="text-center mb-12">
            <p className="section-label mb-3">AI Portfolio</p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Built & <span className="text-gradient">live in production</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">
              Every project is publicly accessible. No concept decks — working software.
            </p>
          </div>

          {/* Flagship card */}
          <div className="card-glow rounded-2xl p-7 mb-5" style={{ borderLeft: `3px solid #8b5cf6`, borderTop: "1px solid rgba(139,92,246,0.2)" }}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>FinAI Intel</h3>
                  <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ fontFamily: "'JetBrains Mono', monospace", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.4)", color: "#a78bfa" }}>FLAGSHIP</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  Enterprise financial intelligence suite — 6 AI tools built for finance teams and credit analysts. Purpose-built with CTOS/CCRIS domain knowledge.
                </p>
              </div>
              <Link href="https://finai.ahnafthaqeef.com" target="_blank" rel="noopener noreferrer" className="shrink-0 btn-primary px-4 py-2 rounded-xl text-xs">
                Live Demo ↗
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {projects[0].tools.map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-violet-400 shrink-0 mt-0.5">→</span>
                  <span className="text-slate-400">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {projects[0].stack.map((s) => (
                <span key={s} className="data-val" style={{ color: "#a78bfa", borderColor: "rgba(139,92,246,0.25)" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(1).map((p) => (
              <Link
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow rounded-2xl p-6 flex flex-col group"
                style={{ borderLeft: `3px solid ${p.accent}55` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{ fontFamily: "'JetBrains Mono', monospace", background: `${p.accent}15`, border: `1px solid ${p.accent}35`, color: p.accent }}>{p.label}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}25`, color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}>{s}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── TOOLS FUNNEL ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="card-glow rounded-2xl p-8 text-center"
            style={{
              borderTop: "1px solid rgba(139,92,246,0.3)",
              borderBottom: "1px solid rgba(6,182,212,0.2)",
            }}
          >
            <p className="section-label mb-3">My AI Toolkit</p>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore All <span className="text-gradient">20+ Live Tools</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              Everything I&apos;ve shipped is publicly accessible at aibizmy.com — no login required.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["FinAI Intel", "AI Resume Builder", "AcaraHQ", "Halal Scanner", "and more"].map((t) => (
                <span key={t} className="data-val">{t}</span>
              ))}
            </div>
            <a
              href="https://aibizmy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 rounded-full inline-block"
            >
              Open aibizmy.com →
            </a>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="violet-divider mb-14" />
          <div className="text-center mb-12">
            <p className="section-label mb-3">Technical Skills</p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What I <span className="text-gradient">work with</span>
            </h2>
          </div>
          <div className="space-y-6">
            {skillGroups.map((g) => (
              <div key={g.label} className="card-glow rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: g.accent, fontFamily: "'Space Grotesk', sans-serif" }}>{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="skill-chip text-xs">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & CERTS ── */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="violet-divider mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <p className="section-label mb-6">Education</p>
              <div className="space-y-4">
                {education.map((e, i) => (
                  <div key={i} className="card-glow rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <p className="font-bold text-white text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{e.inst}</p>
                      <span className="data-val shrink-0">{e.year}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-1">{e.degree}</p>
                    <p className="text-slate-600 text-xs">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div>
              <p className="section-label mb-6">Certifications</p>
              <div className="space-y-3">
                {certs.map((c, i) => (
                  <div key={i} className="card-glow rounded-xl p-5">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <p className="font-semibold text-white text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.name}</p>
                      <span className="data-val shrink-0">{c.date}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="violet-divider mb-14" />
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to <span className="text-gradient">build?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            I build AI tools for Malaysian businesses and document every step. Whether you want to collaborate, hire, or just learn how it&apos;s done — reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://mail.google.com/mail/?view=cm&to=ahnafthaqeef@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-full">
              Email Me ↗
            </a>
            <a href="https://www.linkedin.com/in/muhamad-ahnaf-thaqeef-949ab014a/" target="_blank" rel="noopener noreferrer" className="btn-outline px-8 py-4 rounded-full">
              LinkedIn ↗
            </a>
          </div>
          <div className="flex items-center justify-center h-14 opacity-30">
            <div className="spin-slow absolute" style={{ width: 100, height: 34, border: "1px solid #7c3aed", borderRadius: "50%", transform: "rotateX(70deg)" }} />
            <div className="pulse-glow w-2 h-2 rounded-full" style={{ background: "#8b5cf6", boxShadow: "0 0 12px #8b5cf6" }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }} className="py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gradient font-black text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ahnaf Thaqeef</span>
          <p className="text-slate-700 text-sm">© 2026 · Cyberjaya, Malaysia</p>
          <div className="flex items-center gap-5">
            <a href="https://aibizmy.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">aibizmy.com</a>
            <a href="https://finai.ahnafthaqeef.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">FinAI Intel</a>
            <a href="https://www.linkedin.com/in/muhamad-ahnaf-thaqeef-949ab014a/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
