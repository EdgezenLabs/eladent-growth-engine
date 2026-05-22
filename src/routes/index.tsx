import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, ShieldCheck, TrendingUp, Stethoscope, FileCheck2, BadgeCheck,
  CreditCard, Receipt, Wallet, AlertTriangle, Briefcase, ClipboardList,
  CheckCircle2, Star, LineChart, Users, Building2, Sparkles, Activity, ChevronRight
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eladent Consulting — Dental Billing & RCM Experts in the USA" },
      { name: "description", content: "Premium dental billing, insurance verification, credentialing and revenue cycle management. HIPAA-compliant teams that grow your dental practice." },
      { property: "og:title", content: "Eladent Consulting — Dental Billing & RCM Experts" },
      { property: "og:description", content: "Transform dental revenue into predictable growth with end-to-end RCM and billing services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Receipt, title: "Dental Billing", desc: "Accurate, clean claim submissions that get paid faster.", to: "/services/dental-billing" },
  { icon: FileCheck2, title: "Insurance Verification", desc: "Real-time eligibility & benefits before every appointment.", to: "/services/insurance-verification" },
  { icon: BadgeCheck, title: "Credentialing", desc: "Provider enrollment and re-credentialing without delays.", to: "/services/credentialing" },
  { icon: LineChart, title: "Revenue Cycle Management", desc: "Full-funnel RCM tuned for dental and orthodontic practices.", to: "/services" },
  { icon: Activity, title: "AR Follow-Up", desc: "Aggressive recovery on aged claims to free up cash flow.", to: "/services/accounts-receivable" },
  { icon: Wallet, title: "Patient Billing", desc: "Friendly, compliant statements that protect patient trust.", to: "/services" },
  { icon: CreditCard, title: "Payment Posting", desc: "Same-day posting with detailed reconciliation.", to: "/services" },
  { icon: AlertTriangle, title: "Denial Management", desc: "Root-cause analysis that turns denials into revenue.", to: "/services" },
  { icon: Briefcase, title: "Dental Consulting", desc: "Workflow, KPI and growth strategy from dental veterans.", to: "/services" },
];

const why = [
  { icon: ShieldCheck, title: "HIPAA-Compliant", desc: "Encrypted workflows, audited access, SOC 2-aligned controls across every engagement." },
  { icon: Users, title: "Dental Specialists", desc: "Billers and AR analysts trained exclusively on dental & orthodontic CDT coding." },
  { icon: TrendingUp, title: "Faster Reimbursements", desc: "Clean claim rate >98% means cash hits your account in days, not weeks." },
  { icon: ClipboardList, title: "Transparent Reporting", desc: "Live dashboards with KPIs that matter — collections, AR>90, write-offs and more." },
  { icon: Stethoscope, title: "Dedicated Account Managers", desc: "A named expert who knows your practice, payers and goals." },
  { icon: Sparkles, title: "Scalable Workflows", desc: "From single-doctor offices to multi-location DSOs, we scale without missing a beat." },
];

const steps = [
  { n: "01", title: "Free Consultation", desc: "We audit your billing operations and quantify the revenue you’re leaving on the table." },
  { n: "02", title: "Practice Analysis", desc: "Deep-dive into payer mix, fee schedules, denial trends and AR aging." },
  { n: "03", title: "Onboarding", desc: "Secure integrations with your PMS — Dentrix, Eaglesoft, Open Dental & more." },
  { n: "04", title: "Claim Optimization", desc: "Clean submissions, scrubbing, attachments and proactive denial management." },
  { n: "05", title: "Revenue Growth", desc: "Aggressive AR follow-up, posting and patient billing accelerate collections." },
  { n: "06", title: "Reporting & Scaling", desc: "Monthly business reviews with growth playbooks for your next location or service line." },
];

const testimonials = [
  { name: "Dr. Sarah Kohli", practice: "Bright Smile Family Dental, Austin TX", quote: "Eladent rebuilt our entire billing operation. Collections are up 31% and our team finally focuses on patients instead of phone calls with insurers.", rating: 5 },
  { name: "Dr. Marcus Reyes", practice: "Pacific Coast Orthodontics, San Diego CA", quote: "Their credentialing team got two new providers in-network 6 weeks faster than our previous vendor. Day-to-day AR is night-and-day better.", rating: 5 },
  { name: "Jenna Lockhart", practice: "COO, Heartland Dental Group (8 locations)", quote: "The reporting alone is worth it. We make payer decisions with data now, not gut feel. Denials dropped to under 4%.", rating: 5 },
];

const cases = [
  { practice: "12-location DSO, Florida", before: "$2.1M aged AR", after: "$480K recovered in 90 days", metric: "+23% net collections" },
  { practice: "Solo Pediatric Dentist, NY", before: "18% claim denial rate", after: "3.6% after 60 days", metric: "+$14K monthly cash" },
  { practice: "Orthodontic Group, TX", before: "45-day avg reimbursement", after: "12-day avg reimbursement", metric: "+38% on-time collections" },
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
              <ShieldCheck className="h-3.5 w-3.5 text-teal" /> HIPAA-compliant · US-based dental specialists
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl md:text-6xl font-bold text-brand leading-[1.05] text-balance">
              Transforming Dental Revenue Into <span className="bg-gradient-teal bg-clip-text text-transparent">Predictable Growth</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl">
              End-to-end dental billing and consulting solutions designed to maximize collections,
              reduce denials, and help dental practices scale efficiently.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold shadow-soft hover:shadow-elevated transition-all">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white text-brand ring-1 ring-border px-6 py-3.5 font-semibold hover:bg-secondary transition-colors">
                Explore Services
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> 98% clean claim rate</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> 24/7 US support</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal" /> No long-term contracts</div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border bg-white">
              <img src={hero} alt="Dental practice manager reviewing revenue analytics" width={1536} height={1024} className="w-full h-auto" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs text-muted-foreground">Net collections</div>
              <div className="text-2xl font-bold text-brand">+<Counter to={27} suffix="%" /></div>
              <div className="mt-1 text-[10px] text-teal font-medium">Avg. lift in 90 days</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-teal/10 grid place-items-center"><ShieldCheck className="h-5 w-5 text-teal" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">HIPAA secure</div>
                  <div className="text-sm font-semibold text-brand">SOC 2 aligned</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Logo strip */}
        <div className="border-t border-border bg-white/60 backdrop-blur">
          <div className="container-prose py-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-center">Dentrix</span>
            <span className="text-center">Eaglesoft</span>
            <span className="text-center">Open Dental</span>
            <span className="text-center">Curve Dental</span>
            <span className="text-center">Carestream</span>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Trusted by US dental practices</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance">Numbers that move the needle</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: "Years of expertise", value: 12, suffix: "+" },
              { label: "Claims processed annually", value: 1200000, suffix: "+", prefix: "" },
              { label: "Avg. collection improvement", value: 27, suffix: "%" },
              { label: "Client satisfaction", value: 98, suffix: "%" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-brand">
                    <Counter to={s.value} suffix={s.suffix} prefix={s.prefix || ""} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-prose">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">What we do</div>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance max-w-2xl">A full suite of dental RCM & consulting services</h2>
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

      {/* WHY US */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img src={dashboard} alt="Eladent RCM dashboard mockup" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-elevated ring-1 ring-border" />
              <div className="absolute -bottom-6 -right-4 hidden md:flex glass rounded-2xl p-4 shadow-soft items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand grid place-items-center text-white"><TrendingUp className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">AR &gt;90 days</div>
                  <div className="text-lg font-bold text-brand">−42%</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Why Eladent</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance">Built for dental. Engineered for growth.</h2>
              <p className="mt-4 text-muted-foreground">We blend dental-specific RCM expertise with modern technology and ruthless follow-through. The result: cleaner claims, faster cash, happier teams.</p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {why.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={i * 0.06}>
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

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(800px 400px at 80% 0%, #00A6A6, transparent 60%)" }} />
        <div className="container-prose relative">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Our process</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">From audit to scalable growth in 6 steps</h2>
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

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Testimonials</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance">What dental leaders say about Eladent</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 shadow-soft h-full flex flex-col">
                  <div className="flex gap-0.5 text-teal">
                    {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-foreground/90 leading-relaxed">“{t.quote}”</p>
                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-brand text-white grid place-items-center font-semibold">
                      {t.name.split(" ").map(p => p[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.practice}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-prose">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Case studies</div>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-brand text-balance max-w-2xl">Real practices. Real results.</h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {cases.map((c, i) => (
              <Reveal key={c.practice} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 h-full">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="h-4 w-4 text-teal" /> {c.practice}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-surface-2 p-3">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Before</div>
                      <div className="mt-1 text-sm font-semibold">{c.before}</div>
                    </div>
                    <div className="rounded-xl bg-teal/10 p-3">
                      <div className="text-[10px] uppercase tracking-widest text-teal font-semibold">After</div>
                      <div className="mt-1 text-sm font-semibold text-brand">{c.after}</div>
                    </div>
                  </div>
                  <div className="mt-5 text-brand font-display text-2xl font-bold">{c.metric}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 text-white shadow-elevated">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to unlock the cash trapped in your AR?</h2>
                <p className="mt-4 text-white/80 max-w-xl">Book a free 30-minute consultation. We'll audit your billing operations and show you exactly where revenue is hiding.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold hover:bg-secondary transition-colors">
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+18005550199" className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/30 text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors">
                  Call (800) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
