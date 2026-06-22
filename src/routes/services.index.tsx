import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  FileCheck2, ClipboardCheck, Send, Wallet, Activity, Workflow, LineChart,
  ArrowRight, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Dental Revenue Cycle & Operations Services | Eladent Consulting" },
      { name: "description", content: "Insurance verification, prior authorizations, claim submission, payment posting, AR follow-up, operations consulting and analytics for dental practices." },
      { property: "og:title", content: "Dental Revenue Cycle & Operations Services" },
      { property: "og:description", content: "Complete revenue cycle and operations services for US dental practices." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const all = [
  {
    icon: FileCheck2,
    title: "Insurance Verification & Benefits",
    desc: "Accurate eligibility and benefit verification — the foundation of a healthy revenue cycle.",
    to: "/services/insurance-verification",
    bullets: ["Eligibility & benefits", "Frequencies & waiting periods", "Missing tooth clause & COB"],
  },
  {
    icon: ClipboardCheck,
    title: "Prior Authorizations",
    desc: "Medicaid and PPO prior authorization management to protect production and reduce burden.",
    to: "/services/prior-authorizations",
    bullets: ["Medicaid & PPO authorizations", "Narratives & attachments", "Active payer follow-up"],
  },
  {
    icon: Send,
    title: "Claim Submission & Insurance Management",
    desc: "Accurate claim submission, tracking, corrections, denial management and secondary claims.",
    to: "/services/claim-submission",
    bullets: ["Daily claim submission", "Denial management", "Secondary claim processing"],
  },
  {
    icon: Wallet,
    title: "Payment Posting & Reconciliation",
    desc: "EFT, ERA, check and virtual credit card posting with full reconciliation and ledger review.",
    to: "/services/payment-posting",
    bullets: ["99%+ posting accuracy", "98% same-day posting", "Deposit verification"],
  },
  {
    icon: Activity,
    title: "Accounts Receivable Follow-Up",
    desc: "Insurance aging review, outstanding claim follow-up, appeals and underpayment investigation.",
    to: "/services/accounts-receivable",
    bullets: ["Aging review", "Appeals assistance", "Underpayment investigation"],
  },
  {
    icon: Workflow,
    title: "Practice Operations Optimization",
    desc: "Workflow analysis, scheduling, SOP development, team training and operational KPI tracking.",
    to: "/services/practice-operations",
    bullets: ["Workflow audits", "SOP development", "KPI tracking"],
  },
  {
    icon: LineChart,
    title: "Revenue Cycle Analytics & Reporting",
    desc: "Meaningful reporting on collections, aging, posting, claim performance and operational KPIs.",
    to: "/services/analytics-reporting",
    bullets: ["Collection trends", "Aging analysis", "Revenue cycle KPIs"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Revenue cycle and operations services for dental practices"
        subtitle="A strategic partner for solo practices, multi-provider groups, emerging DSOs and specialty practices — focused on collections, efficiency and growth."
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
            <h2 className="text-3xl md:text-4xl font-bold">Not sure where to start?</h2>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              Request a free revenue cycle assessment and we'll recommend the highest-impact place to begin.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold">
              Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
