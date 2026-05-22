import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Receipt, FileCheck2, BadgeCheck, LineChart, Activity, Wallet, CreditCard,
  AlertTriangle, Briefcase, ArrowRight, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Dental Billing & RCM Services | Eladent Consulting" },
      { name: "description", content: "Complete dental billing, insurance verification, credentialing, AR follow-up and RCM consulting services for US dental practices." },
      { property: "og:title", content: "Dental Billing & RCM Services" },
      { property: "og:description", content: "Complete dental RCM services for US dental practices and DSOs." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const all = [
  { icon: Receipt, title: "Dental Billing", desc: "Daily claim submission with payer-specific scrubbing, attachments, narratives and same-week clean claim rates above 98%.", to: "/services/dental-billing", bullets: ["Daily claim submission", "Attachment management", "Narrative writing"] },
  { icon: FileCheck2, title: "Insurance Verification", desc: "Real-time eligibility, breakdowns, frequencies and patient responsibility — delivered to your team before every appointment.", to: "/services/insurance-verification", bullets: ["48-hour pre-appointment checks", "Detailed benefit breakdowns", "PMS-ready notes"] },
  { icon: BadgeCheck, title: "Credentialing", desc: "Provider enrollment, re-credentialing, CAQH maintenance and network expansion across PPO, Medicaid and DHMO.", to: "/services/credentialing", bullets: ["Initial enrollment", "Re-credentialing tracking", "CAQH management"] },
  { icon: Activity, title: "Accounts Receivable", desc: "Aggressive aged-claim follow-up, root-cause denial fixes and patient AR recovery to convert old claims into cash.", to: "/services/accounts-receivable", bullets: ["AR>30/60/90 workouts", "Appeals & denial fixes", "Patient AR recovery"] },
  { icon: LineChart, title: "Revenue Cycle Management", desc: "End-to-end RCM for dental and orthodontic practices, with a single accountable team and a live KPI dashboard.", to: "/services", bullets: ["Single accountable team", "KPI dashboards", "Monthly business reviews"] },
  { icon: Wallet, title: "Patient Billing", desc: "Friendly statements, payment plans and HIPAA-compliant collections that protect patient trust and brand reputation.", to: "/services", bullets: ["Statement design", "Payment plans", "Soft collections"] },
  { icon: CreditCard, title: "Payment Posting", desc: "Same-day ERA/EOB posting with line-item reconciliation, contractual write-offs and underpayment flags.", to: "/services", bullets: ["Same-day posting", "Underpayment detection", "Adjustment audits"] },
  { icon: AlertTriangle, title: "Denial Management", desc: "Root-cause categorization, appeals templates and feedback loops into front-desk workflows to prevent repeats.", to: "/services", bullets: ["Root-cause analysis", "Appeals & resubmission", "Prevention playbooks"] },
  { icon: Briefcase, title: "Dental Consulting", desc: "Fractional CFO-style guidance: fee schedules, payer mix, KPIs, growth strategy and DSO readiness.", to: "/services", bullets: ["Fee schedule audits", "Payer mix strategy", "DSO readiness"] },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Dental RCM, billing & consulting — under one roof"
        subtitle="A single accountable team for every step of your revenue cycle. Built for practices that want predictable, scalable growth."
      />
      <section className="py-20">
        <div className="container-prose grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {all.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl bg-white border border-border p-6 hover:border-teal/40 hover:shadow-elevated transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-teal grid place-items-center text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={s.to} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-prose">
          <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Not sure which service fits?</h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">Get a free 30-minute consultation. We'll map your revenue cycle and recommend the smallest change with the biggest impact.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold">
              Book free consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
