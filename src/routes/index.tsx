import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, TrendingUp, FileCheck2, ClipboardCheck, Send, Wallet, Activity,
  Workflow, LineChart, CheckCircle2, ChevronRight, ShieldCheck, Gauge, BarChart3,
  Sparkles, Eye, Target, ClipboardList, Clock,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eladent Consulting — Dental Revenue Cycle & Operations Consulting" },
      { name: "description", content: "Eladent Consulting helps dental practices increase collections, reduce insurance aging, secure prior authorizations faster and build scalable revenue cycle operations." },
      { property: "og:title", content: "Eladent Consulting — Dental Revenue Cycle & Operations Consulting" },
      { property: "og:description", content: "Revenue cycle management and operational growth solutions for dental practices." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: FileCheck2, title: "Insurance Verification & Benefits", desc: "Accurate eligibility and benefit verification before every appointment.", to: "/services/insurance-verification" },
  { icon: ClipboardCheck, title: "Prior Authorizations", desc: "Faster approvals on Medicaid and PPO cases to protect production.", to: "/services/prior-authorizations" },
  { icon: Send, title: "Claim Submission & Insurance Management", desc: "Accurate claim submission, tracking, corrections and denial management.", to: "/services/claim-submission" },
  { icon: Wallet, title: "Payment Posting & Reconciliation", desc: "EFT, ERA, check and virtual credit card posting with full reconciliation.", to: "/services/payment-posting" },
  { icon: Activity, title: "Accounts Receivable Follow-Up", desc: "Active aging review, appeals assistance and underpayment recovery.", to: "/services/accounts-receivable" },
  { icon: Workflow, title: "Practice Operations Optimization", desc: "Workflow analysis, SOP development and operational KPI tracking.", to: "/services/practice-operations" },
  { icon: LineChart, title: "Revenue Cycle Analytics & Reporting", desc: "Meaningful reporting on collections, aging, posting and KPIs.", to: "/services/analytics-reporting" },
];

const why = [
  { icon: Clock, title: "Faster payment posting turnaround", desc: "Specialized posting workflows keep ledgers current and AR ready to work." },
  { icon: TrendingUp, title: "Reduced insurance aging", desc: "Active aging review and disciplined follow-up bring aging back under control." },
  { icon: BarChart3, title: "Improved collections", desc: "Cleaner claims, faster reimbursements and stronger AR recovery." },
  { icon: Workflow, title: "Better operational efficiency", desc: "Workflows and SOPs that reduce rework and free up your team's time." },
  { icon: Sparkles, title: "Increased production opportunities", desc: "Faster prior authorizations and better treatment acceptance unlock production." },
  { icon: Eye, title: "Stronger revenue visibility", desc: "Reporting and KPIs that make financial performance impossible to miss." },
  { icon: ClipboardList, title: "Customized reporting and accountability", desc: "Reporting tailored to your practice, with clear ownership at every step." },
  { icon: Target, title: "Strategic partnership", desc: "We act like an embedded RCM team, not a faceless outsourcing vendor." },
];

const steps = [
  { n: "01", title: "Free consultation", desc: "We learn about your practice, current revenue cycle and operational pain points." },
  { n: "02", title: "Revenue cycle assessment", desc: "Deep dive into collections, aging, posting, denials and operational workflows." },
  { n: "03", title: "Recommendations", desc: "Clear, prioritized recommendations on where to focus first for highest impact." },
  { n: "04", title: "Onboarding", desc: "Secure access to your PMS and structured workflow setup with your team." },
  { n: "05", title: "Execution", desc: "Daily execution across verification, authorizations, claims, posting and AR." },
  { n: "06", title: "Review & growth", desc: "Recurring KPI reviews and continuous improvement to support practice growth." },
];

const metrics = [
  { value: 99, suffix: "%+", label: "Payment posting accuracy" },
  { value: 98, suffix: "%", label: "Same-day posting rate" },
  { value: 95, suffix: "%+", label: "Clean claim submission" },
  { value: 100, suffix: "%", label: "Focused on dental RCM" },
];

const performanceList = [
  "Reduced insurance aging",
  "Faster prior authorization turnaround",
  "Improved revenue cycle visibility",
  "Customized KPI reporting",
  "Process-driven workflows",
  "Operational efficiency improvements",
];

const targetClients = [
  "Solo Dental Practices",
  "Multi-Provider Practices",
  "Group Practices",
  "Emerging DSOs",
  "Specialty Dental Practices",
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-prose pt-12 md:pt-20 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-brand ring-1 ring-border">
              <ShieldCheck className="h-3.5 w-3.5 text-teal" /> Dental revenue cycle & operations consulting
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl md:text-6xl font-bold text-brand leading-[1.05] text-balance">
              Revenue Cycle Management & <span className="bg-gradient-teal bg-clip-text text-transparent">Operational Growth Solutions</span> for Dental Practices
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl">
              We help dental practices increase collections, reduce insurance aging, improve operational efficiency,
              secure prior authorizations faster, and create scalable systems that support long-term growth.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold shadow-soft hover:shadow-elevated transition-all">
                Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand ring-1 ring-border px-6 py-3.5 font-semibold hover:bg-secondary transition-colors">
                Request a Revenue Cycle Assessment
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> 99%+ posting accuracy</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> 98% same-day posting</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> 95%+ clean claim submission</div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border bg-white">
              <img src={hero} alt="Dental practice leader reviewing revenue cycle analytics" width={1536} height={1024} className="w-full h-auto" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs text-muted-foreground">Payment posting</div>
              <div className="text-2xl font-bold text-brand"><Counter to={99} suffix="%+" /></div>
              <div className="mt-1 text-[10px] text-teal font-medium">Accuracy</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-teal/10 grid place-items-center"><Gauge className="h-5 w-5 text-teal" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Same-day posting</div>
                  <div className="text-sm font-semibold text-brand">98% rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Target clients strip */}
        <div className="border-t border-border bg-white/60 backdrop-blur">
          <div className="container-prose py-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-xs uppercase tracking-widest text-muted-foreground">
            {targetClients.map((t) => (
              <span key={t} className="text-center">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-prose">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Featured services</div>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance max-w-2xl">A complete dental revenue cycle, under one partner</h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-brand font-semibold hover:text-teal">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <Link to={s.to} className="group block h-full rounded-2xl bg-white border border-border p-6 hover:border-teal/40 hover:shadow-elevated transition-all">
                    <div className="h-12 w-12 rounded-xl bg-gradient-teal grid place-items-center text-white shadow-soft group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-brand">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal">
                      Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ELADENT */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img src={dashboard} alt="Dental revenue cycle reporting dashboard" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-elevated ring-1 ring-border" />
              <div className="absolute -bottom-6 -right-4 hidden md:flex glass rounded-2xl p-4 shadow-soft items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand grid place-items-center text-white"><TrendingUp className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Focus</div>
                  <div className="text-lg font-bold text-brand">Collections & operations</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Why Eladent</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance">Why dental practices choose Eladent</h2>
              <p className="mt-4 text-muted-foreground">
                Our team brings real-world experience supporting dental practices through every stage of the revenue cycle.
                We understand the daily challenges dental offices face with insurance delays, claim denials, payment posting
                backlogs, aging receivables and operational inefficiencies. Our approach combines revenue cycle expertise with
                operational insight to help practices improve collections, strengthen workflows and increase profitability.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {why.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={i * 0.05}>
                    <div className="rounded-xl p-4 bg-surface border border-border h-full">
                      <Icon className="h-5 w-5 text-teal" />
                      <div className="mt-2 font-semibold text-brand">{w.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{w.desc}</div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND TRADITIONAL DENTAL BILLING */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-prose grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Beyond traditional dental billing</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance">More than billing. A strategic operating partner.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eladent Consulting goes beyond basic billing services. We partner with dental practices to improve operational
              performance, strengthen revenue cycle processes, streamline insurance workflows and identify opportunities to
              increase production and profitability.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Our goal is not only to help practices collect more — but also to help them operate more effectively.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Performance</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance">Performance-focused revenue cycle management</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {metrics.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-brand">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {performanceList.map((p) => (
              <div key={p} className="flex items-center gap-2 rounded-xl border border-border bg-white p-4 text-sm text-foreground/85">
                <CheckCircle2 className="h-4 w-4 text-teal shrink-0" /> {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(800px 400px at 80% 0%, #00A6A6, transparent 60%)" }} />
        <div className="container-prose relative">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Our process</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">From assessment to sustained growth</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={(i % 3) * 0.08}>
                <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="text-teal font-display font-bold text-sm">{step.n}</div>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 text-white shadow-elevated">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to improve collections, operations, and practice growth?</h2>
                <p className="mt-4 text-white/85 max-w-xl">
                  Whether you need support with insurance verification, prior authorizations, payment posting, claims
                  management, accounts receivable recovery or operational optimization, Eladent Consulting can help
                  strengthen your revenue cycle and improve practice performance.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold hover:bg-secondary transition-colors">
                  Schedule a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
