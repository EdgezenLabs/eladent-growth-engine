import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Lock, Eye, FileText, Server, Users } from "lucide-react";

export const Route = createFileRoute("/hipaa-compliance")({
  head: () => ({
    meta: [
      { title: "HIPAA Compliance | Eladent Consulting" },
      { name: "description", content: "Eladent Consulting's HIPAA compliance program — administrative, physical and technical safeguards protecting your patients' data." },
      { property: "og:title", content: "HIPAA Compliance — Eladent Consulting" },
      { property: "og:description", content: "Administrative, physical and technical safeguards for PHI." },
      { property: "og:url", content: "/hipaa-compliance" },
    ],
    links: [{ rel: "canonical", href: "/hipaa-compliance" }],
  }),
  component: HIPAA,
});

const items = [
  { icon: ShieldCheck, title: "Business Associate Agreements", desc: "Signed BAA with every client and every sub-processor handling PHI." },
  { icon: Lock, title: "Encrypted everything", desc: "Data encrypted in transit (TLS 1.2+) and at rest (AES-256) across all systems." },
  { icon: Eye, title: "Least-privilege access", desc: "Role-based access controls with multi-factor authentication and quarterly reviews." },
  { icon: FileText, title: "Audit logs", desc: "Comprehensive activity logging across PMS, communications and internal tools." },
  { icon: Server, title: "Secure infrastructure", desc: "US-hosted, SOC 2-aligned vendors with regular vulnerability scanning." },
  { icon: Users, title: "Trained workforce", desc: "Annual HIPAA training and ongoing awareness program for every team member." },
];

function HIPAA() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Security & compliance" title="HIPAA Compliance at Eladent" subtitle="Protecting patient data is foundational to how we operate — not an afterthought." />

      <section className="py-16">
        <div className="container-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={(i % 3) * 0.06}>
                <div className="rounded-2xl bg-white border border-border p-6 h-full">
                  <div className="h-11 w-11 rounded-xl bg-teal/10 text-teal grid place-items-center"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-semibold text-brand">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-prose max-w-3xl">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-brand">Our safeguards</h2>
            <p className="mt-3 text-muted-foreground">Eladent maintains administrative, physical and technical safeguards aligned with the HIPAA Security Rule. Our policies cover workforce training, incident response, access management, encryption, secure disposal and ongoing risk assessments.</p>
            <p className="mt-4 text-muted-foreground">Request our HIPAA compliance overview, current BAA template or SOC 2 readiness summary by emailing <a className="text-teal" href="mailto:security@eladentconsulting.com">security@eladentconsulting.com</a>.</p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
