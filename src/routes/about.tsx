import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Target, Sparkles, Award, ArrowRight, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eladent Consulting — Dental RCM & Operations Consulting" },
      { name: "description", content: "Eladent Consulting helps dental practices strengthen their revenue cycle, maximize collections and improve operational efficiency. Founded by Joshua George." },
      { property: "og:title", content: "About Eladent Consulting" },
      { property: "og:description", content: "Helping dental practices collect more, reduce inefficiencies and gain visibility into financial performance." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const expertise = [
  "Revenue Cycle Management",
  "Payment Posting Operations",
  "Insurance Reconciliation",
  "Accounts Receivable Management",
  "Prior Authorization Workflows",
  "Dental Operations Consulting",
  "Team Leadership",
  "Process Improvement",
  "KPI Development & Reporting",
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Eladent"
        title="About Eladent Consulting"
        subtitle="Helping dental practices strengthen their revenue cycle, maximize collections and improve operational performance."
      />

      <section className="py-20">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Our story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">Built to help dental practices collect more — and operate better.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Eladent Consulting was founded to help dental practices strengthen their revenue cycle and maximize collections.
              </p>
              <p>
                Our team combines experience in dental billing, insurance reconciliation, payment posting, accounts receivable
                management, prior authorizations and operational process improvement.
              </p>
              <p>
                We understand the challenges dental offices face with insurance delays, claim denials, aging receivables,
                administrative workload and production bottlenecks.
              </p>
              <p>
                Whether you are an independent practice, group practice or growing DSO, Eladent Consulting provides the
                expertise and support needed to strengthen your revenue cycle and improve operational performance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container-prose grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="rounded-2xl bg-white border border-border p-7 h-full">
              <Target className="h-6 w-6 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-brand">Mission</h3>
              <p className="mt-2 text-muted-foreground">
                Help dental practices collect more, reduce inefficiencies, improve workflows and gain complete visibility
                into their financial performance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-white border border-border p-7 h-full">
              <Sparkles className="h-6 w-6 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-brand">Approach</h3>
              <p className="mt-2 text-muted-foreground">
                A strategic partnership focused on practical, results-driven solutions across revenue cycle and operations —
                not generic outsourcing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-2xl bg-white border border-border p-7 h-full">
              <Award className="h-6 w-6 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-brand">Focus</h3>
              <p className="mt-2 text-muted-foreground">
                Stronger collections, lower aging, faster authorizations and operational efficiency — measured against KPIs
                that matter to your practice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20">
        <div className="container-prose">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Leadership</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">Meet our founder</h2>
          </Reveal>

          <Reveal>
            <div className="mt-10 rounded-3xl bg-white border border-border p-8 md:p-10 grid md:grid-cols-12 gap-8 items-start shadow-soft">
              <div className="md:col-span-4">
                <div className="aspect-square w-full rounded-2xl bg-gradient-brand grid place-items-center text-white">
                  <div className="text-center px-6">
                    <div className="mx-auto h-20 w-20 rounded-full bg-white/15 grid place-items-center text-4xl font-bold">
                      JG
                    </div>
                    <div className="mt-5 text-xl font-semibold">Joshua George</div>
                    <div className="text-sm text-white/80">Founder & Revenue Cycle Consultant</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 text-teal px-3 py-1 text-xs font-medium">
                  <Briefcase className="h-3.5 w-3.5" /> 10+ years in dental revenue cycle & operations
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-brand">Joshua George</h3>
                <div className="text-sm text-teal font-medium uppercase tracking-wider">Founder & Revenue Cycle Consultant</div>

                <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Joshua George brings over a decade of experience in business operations and dental revenue cycle management.
                  </p>
                  <p>
                    He has led payment posting, insurance reconciliation, workflow development, SOP creation, operational
                    improvement initiatives and team leadership supporting multiple U.S. dental practices.
                  </p>
                  <p>
                    Joshua founded Eladent Consulting to provide dental practices with practical, results-driven solutions
                    that improve financial performance and operational efficiency.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Areas of expertise</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {expertise.map((e) => (
                      <span key={e} className="rounded-full bg-surface border border-border px-3 py-1.5 text-xs font-medium text-brand">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-prose">
          <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Let's strengthen your revenue cycle.</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Schedule a consultation and discover opportunities to improve collections, reduce aging and increase production.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
