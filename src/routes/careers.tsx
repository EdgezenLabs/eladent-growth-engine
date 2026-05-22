import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Briefcase, ArrowRight, Heart, GraduationCap, Globe2 } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Eladent Consulting — Dental RCM Jobs" },
      { name: "description", content: "Join the Eladent Consulting team. Open roles in dental billing, AR, credentialing and client success across the United States." },
      { property: "og:title", content: "Careers at Eladent Consulting" },
      { property: "og:description", content: "Open dental RCM roles across the US." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const jobs = [
  { title: "Senior Dental Billing Specialist", loc: "Remote · USA", type: "Full-time" },
  { title: "AR Follow-Up Analyst", loc: "Dallas, TX · Hybrid", type: "Full-time" },
  { title: "Credentialing Coordinator", loc: "Remote · USA", type: "Full-time" },
  { title: "Client Success Manager", loc: "Remote · USA", type: "Full-time" },
  { title: "Insurance Verification Specialist", loc: "Remote · USA", type: "Full-time" },
  { title: "Revenue Cycle Manager", loc: "Dallas, TX", type: "Full-time" },
];

const perks = [
  { icon: Heart, title: "Health, dental, vision", desc: "Premium coverage from day one." },
  { icon: Globe2, title: "Remote-first culture", desc: "Work from anywhere in the US." },
  { icon: GraduationCap, title: "Growth budget", desc: "$1,500/year for certifications and courses." },
];

function Careers() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Careers" title="Build the future of dental RCM with us" subtitle="We're a remote-first team obsessed with helping dental practices thrive. Bring your craft — we'll bring the runway." />

      <section className="py-16">
        <div className="container-prose grid lg:grid-cols-3 gap-5">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 h-full">
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-3 font-semibold text-brand">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-prose">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-brand">Open positions</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.04}>
                <div className="group flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-2xl bg-white border border-border p-5 hover:border-teal/40 hover:shadow-soft transition-all">
                  <div>
                    <div className="font-semibold text-brand">{j.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-4">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-teal" /> {j.loc}</span>
                      <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-teal" /> {j.type}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-brand px-4 py-2 text-sm font-semibold group-hover:bg-gradient-brand group-hover:text-white transition-colors">
                    Apply <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
