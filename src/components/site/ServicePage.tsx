import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  challenges: string[];
  solution: string;
  process: { title: string; desc: string }[];
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export function ServicePage(p: ServicePageProps) {
  return (
    <SiteLayout>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold shadow-soft">
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white text-brand ring-1 ring-border px-6 py-3.5 font-semibold">
            All services
          </Link>
        </div>
      </PageHero>

      {/* Challenges + Solution */}
      <section className="py-20">
        <div className="container-prose grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">The challenge</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">Where dental practices typically lose money</h2>
            <ul className="mt-6 space-y-3">
              {p.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl bg-surface border border-border p-4">
                  <span className="mt-0.5 h-6 w-6 rounded-md bg-destructive/10 text-destructive grid place-items-center text-sm font-bold">!</span>
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">How Eladent solves it</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">A specialized, accountable team running your workflow</h2>
            <p className="mt-5 text-muted-foreground">{p.solution}</p>
            <div className="mt-6 rounded-2xl bg-gradient-brand p-6 text-white">
              <div className="text-sm text-white/70">Typical outcome</div>
              <div className="mt-1 text-3xl font-bold">+22–35% net collections</div>
              <div className="mt-1 text-sm text-white/70">within the first 90 days</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface">
        <div className="container-prose">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Process</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">How we deliver</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.process.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white border border-border p-6 h-full">
                  <div className="text-teal font-display font-bold text-sm">0{i + 1}</div>
                  <h3 className="mt-2 font-semibold text-brand">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-prose">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Benefits</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">What you can expect</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={(i % 3) * 0.06}>
                  <div className="rounded-2xl bg-white border border-border p-6 h-full">
                    <Icon className="h-6 w-6 text-teal" />
                    <h3 className="mt-3 font-semibold text-brand">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {p.faqs && (
        <section className="py-20 bg-surface">
          <div className="container-prose max-w-3xl">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">FAQ</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">Common questions</h2>
            </Reveal>
            <div className="mt-8 space-y-3">
              {p.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-white border border-border p-5 open:shadow-soft">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-brand">
                    {f.q}
                    <span className="ml-4 text-teal transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container-prose">
          <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-white flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Let's see what {p.eyebrow.toLowerCase()} can do for your practice.</h2>
              <p className="mt-2 text-white/80">Free 30-min strategy session. No obligation.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold whitespace-nowrap">
              Book consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: p.title,
            provider: { "@type": "Organization", name: "Eladent Consulting" },
            areaServed: "United States",
            description: p.subtitle,
          }),
        }}
      />

      {/* Inline shared check icon to ensure import isn't dropped if unused above */}
      <CheckCircle2 className="hidden" />
    </SiteLayout>
  );
}
