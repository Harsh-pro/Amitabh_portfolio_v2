import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AssemblyScene } from "@/components/AssemblyScene";
import {
  Cog,
  Wrench,
  Ruler,
  Factory,
  FileCog,
  Boxes,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowDown,
  CircuitBoard,
  Layers3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amitabh Singh — Mechanical Design Engineer Portfolio" },
      { name: "description", content: "Mechanical Design Engineer with 3+ years designing wind energy access systems, service lifts, and large sheet-metal assemblies for GE Vernova, Siemens Gamesa, Suzlon and Adani Green." },
    ],
  }),
  component: Portfolio,
});

const experience = [
  {
    company: "Hailo Wind Systems India Pvt. Ltd.",
    role: "Design Engineer",
    period: "Jan 2023 – Present",
    location: "Pune, Maharashtra",
    points: [
      "Own end-to-end NPD from customer requirements through concept, detailed design, reviews and final release.",
      "Design complex sheet metal parts, weldments and large assemblies in Creo Parametric with DFMA and cost optimization.",
      "Author manufacturing-ready 3D models, GD&T (ASME Y14.5) drawings, BOMs and ECNs; manage data in Windchill PLM and SAP.",
      "Support prototype build, design validation, RCA and manufacturing issue resolution across the product lifecycle.",
    ],
  },
];

const projects = [
  {
    client: "GE Vernova",
    period: "Aug 2023 – Dec 2023",
    tag: "Industrial Design Release",
    detail:
      "Led mechanical design from requirement analysis through validation and engineering release for customized industrial products, ensuring DFM, GD&T and customer compliance.",
    icon: FileCog,
  },
  {
    client: "Suzlon Energy Ltd.",
    period: "Sep 2023 – Present",
    tag: "New Product Development",
    detail:
      "Developed a Single Human Climber for lattice tower access — full documentation, design reviews and customer coordination through the project lifecycle.",
    icon: Layers3,
  },
  {
    client: "Siemens Gamesa Renewable Energy",
    period: "Jan 2024 – Present",
    tag: "Structural Optimization",
    detail:
      "Optimized sheet metal and structural assemblies for access and safety systems — improving structural integrity, manufacturability and installation efficiency.",
    icon: CircuitBoard,
  },
  {
    client: "Adani Green Energy Ltd.",
    period: "Oct 2023 – Present",
    tag: "3.3 MW Turbine Program",
    detail:
      "Delivered service lift ladder assemblies for 3.3 MW wind turbine towers — 3D modeling, manufacturing drawings, BOM and design validation.",
    icon: Boxes,
  },
];

const skillGroups = [
  { title: "CAD", icon: Ruler, items: ["Creo Parametric", "SolidWorks", "AutoCAD"] },
  { title: "Design", icon: Cog, items: ["Product Design & Development", "Sheet Metal", "Large Assemblies", "Weldments", "FEA", "GD&T", "DFM"] },
  { title: "PLM / ERP", icon: Factory, items: ["Windchill", "SAP"] },
  { title: "Engineering", icon: Wrench, items: ["BOM Preparation", "ECN Management", "Design Reviews", "Cross-functional Collaboration"] },
];

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [progressState, setProgressState] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      progressRef.current = p;
      setProgressState(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pct = Math.round(progressState * 100);

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full bp-panel">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
            <span className="tracking-widest">AMITABH.SINGH</span>
          </a>
          <div className="hidden gap-8 md:flex">
            {["about", "experience", "projects", "skills", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="tick-label transition-colors hover:text-primary">
                {s}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-md border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block">
            Hire
          </a>
        </div>
      </nav>

      {/* HERO with 3D exploded assembly */}
      <section ref={heroRef} id="top" className="relative" style={{ height: "260vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <AssemblyScene progress={progressRef} />
          </div>

          {/* Overlay UI */}
          <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pt-24 pb-10">
            <div className="pointer-events-auto max-w-2xl">
              <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Mechanical Design Engineer
              </div>
              <h1 className="font-display text-6xl font-bold leading-[0.9] md:text-8xl">
                <span className="text-glow">Amitabh</span>
                <br />
                <span className="text-glow">Singh</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-foreground/80 md:text-xl">
                <span className="text-muted-foreground">From</span>{" "}
                <span className="text-primary">exploded view</span>{" "}
                <span className="text-muted-foreground">to</span>{" "}
                <span className="text-primary">production-ready</span>.
              </p>
              <p className="mt-4 max-w-xl font-mono text-xs text-muted-foreground md:text-sm">
                Product development · sheet-metal · gearboxes · structural
                assemblies · access systems — for GE Vernova, Siemens Gamesa,
                Suzlon and Adani Green.
              </p>
            </div>

            {/* HUD */}
            <div className="pointer-events-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="tick-label">ASSY-001</span>
                  <span className="h-px w-8 bg-border" />
                  <span>Service Lift · Ladder Cage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tick-label">Assembly</span>
                  <div className="relative h-1.5 w-56 overflow-hidden rounded-full bg-border">
                    <div
                      className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_16px_var(--primary)]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="tabular-nums text-primary">{pct.toString().padStart(3, "0")}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground animate-bounce">
                <span className="tick-label">Scroll to assemble</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Corner ticks */}
          <div className="pointer-events-none absolute inset-6 border border-border/40" />
          <div className="pointer-events-none absolute left-6 top-6 tick-label">N 18°32'</div>
          <div className="pointer-events-none absolute right-6 top-6 tick-label">Rev 1.2</div>
          <div className="pointer-events-none absolute bottom-6 right-6 tick-label">Scale 1:12</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader index="01" title="Profile" subtitle="Design philosophy" />
          <div className="mt-12 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-2xl leading-relaxed text-foreground/90 md:text-3xl">
                I take mechanical systems from{" "}
                <span className="text-primary text-glow">requirement</span> to{" "}
                <span className="text-primary text-glow">release</span> — turning
                customer intent into manufacturable, cost-optimised assemblies
                that survive the field.
              </p>
              <p className="mt-8 max-w-2xl text-muted-foreground">
                Three-plus years of new product development in wind energy —
                lattice-tower climbers, service lifts, gearboxes, structural
                brackets. Fluent in Creo, Windchill PLM and the language of
                manufacturing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:col-span-2">
              {[
                { k: "3+", v: "Years designing" },
                { k: "4", v: "Global OEMs" },
                { k: "3.3 MW", v: "Turbine programs" },
                { k: "ISO", v: "Standards compliant" },
              ].map((s) => (
                <div key={s.v} className="bp-panel rounded-lg p-5">
                  <div className="font-display text-3xl text-primary text-glow">{s.k}</div>
                  <div className="mt-1 tick-label">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative border-t border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader index="02" title="Experience" subtitle="Where the bolts got tightened" />
          <div className="mt-12 space-y-8">
            {experience.map((e) => (
              <div key={e.company} className="bp-panel group relative overflow-hidden rounded-xl p-8 transition-all hover:border-primary/40">
                <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/40 to-transparent" />
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">{e.company}</h3>
                    <div className="mt-1 font-mono text-sm text-primary">{e.role}</div>
                  </div>
                  <div className="tick-label">{e.period} · {e.location}</div>
                </div>
                <ul className="mt-6 space-y-3">
                  {e.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1 w-4 shrink-0 bg-primary/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bp-panel rounded-xl p-8">
              <div className="tick-label">Education</div>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">B.E. Mechanical Engineering</h3>
                <div className="font-mono text-sm text-muted-foreground">Aug 2018 – May 2022</div>
              </div>
              <div className="mt-1 text-muted-foreground">Abdul Kalam Technical University, Lucknow</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative border-t border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader index="03" title="Programs" subtitle="Assemblies that ship" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.client} className="bp-panel group relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 hover:border-primary/50">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/20" />
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg border border-border bg-secondary/40 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="tick-label">P-{String(i + 1).padStart(3, "0")}</div>
                  </div>
                  <div className="mt-6 tick-label text-primary">{p.tag}</div>
                  <h3 className="mt-2 font-display text-2xl">{p.client}</h3>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">{p.period}</div>
                  <p className="mt-4 text-muted-foreground">{p.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative border-t border-border/60 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader index="04" title="Toolchain" subtitle="Bill of capabilities" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="bp-panel rounded-xl p-6">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div className="font-mono text-sm uppercase tracking-widest">{g.title}</div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-border/60 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeader index="05" title="Contact" subtitle="Let's build something" center />
          <h2 className="mt-8 font-display text-4xl md:text-6xl">
            Have a system that needs to be
            <br />
            <span className="text-primary text-glow">engineered right?</span>
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <a href="mailto:amitabhsingh0012@gmail.com" className="group flex items-center gap-3 rounded-md border border-primary/40 bg-primary px-6 py-3 font-mono text-sm text-primary-foreground transition-transform hover:scale-105">
              <Mail className="h-4 w-4" />
              amitabhsingh0012@gmail.com
            </a>
            <a href="tel:+919532313004" className="flex items-center gap-3 rounded-md border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary">
              <Phone className="h-4 w-4" />
              +91 95323 13004
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2 tick-label"><MapPin className="h-3 w-3" /> Pune, India</span>
            <a href="https://www.linkedin.com/in/amitabh-singh-4b350920b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 tick-label transition-colors hover:text-primary"><Linkedin className="h-3 w-3" /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 tick-label">
          <span>© 2026 Amitabh Singh</span>
          <span>Rev 1.2 · Released</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ index, title, subtitle, center }: { index: string; title: string; subtitle: string; center?: boolean }) {
  return (
    <div className={center ? "flex flex-col items-center gap-3" : "flex flex-col gap-3"}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="font-mono text-sm text-primary">{index}</span>
        <span className="h-px w-12 bg-primary/60" />
        <span className="tick-label">{subtitle}</span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
