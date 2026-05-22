import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, Heart, Target, Users, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eladent Consulting — Dental RCM & Billing Experts" },
      { name: "description", content: "Meet the dental billing veterans behind Eladent Consulting. Our mission, leadership and values powering thousands of US dental practices." },
      { property: "og:title", content: "About Eladent Consulting" },
      { property: "og:description", content: "Our mission, leadership and values powering thousands of US dental practices." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity first", desc: "Compliance, transparency and patient trust never get traded for short-term wins." },
  { icon: Target, title: "Outcome obsessed", desc: "Every workflow ladders up to two metrics: more collections, fewer denials." },
  { icon: Heart, title: "Partnership", desc: "We act like an extension of your front desk — not a faceless vendor." },
  { icon: Sparkles, title: "Modern & precise", desc: "Automation where it helps, human review where it matters." },
];

const leaders = [
  { name: "Maya Thompson", role: "Founder & CEO", bio: "20+ years in dental RCM. Previously led billing operations for a 60-location DSO.", initials: "MT" },
  { name: "Daniel Park", role: "Head of Operations", bio: "Built Eladent's HIPAA-compliant delivery model and 24/7 follow-up engine.", initials: "DP" },
  { name: "Rachel Alvarez", role: "VP of Client Success", bio: "Dental practice consultant focused on multi-location growth and KPI design.", initials: "RA" },
  { name: "Jordan Lee", role: "Director of Credentialing", bio: "Has enrolled 1,800+ providers across PPO, Medicaid and DHMO networks.", initials: "JL" },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Eladent"
        title="Built by dental veterans. Powered by modern RCM."
        subtitle="We exist to give dental practices the same financial discipline and reporting that the best DSOs in America rely on — without the overhead."
      />

      <section className="py-20">
        <div className="container-prose grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src={team} alt="The Eladent Consulting team" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elevated ring-1 ring-border" />
          </Reveal>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Our story</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">A decade of dental billing expertise, now available to every practice.</h2>
            <p className="mt-5 text-muted-foreground">Eladent Consulting was founded by a team of dental RCM operators who watched too many great practices lose 6–8% of revenue to denials, slow follow-up and poor reporting. We built the platform — and the team — we wish we’d had.</p>
            <p className="mt-4 text-muted-foreground">Today, US-based dental practices, orthodontic groups and DSOs trust Eladent to run their billing, credentialing and AR with measurable results.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-prose grid md:grid-cols-3 gap-6">
          <Reveal>
            <div className="rounded-2xl bg-white border border-border p-7 h-full">
              <Target className="h-6 w-6 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-brand">Mission</h3>
              <p className="mt-2 text-muted-foreground">Turn every dental practice into a financially healthy, growth-ready business.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-white border border-border p-7 h-full">
              <Sparkles className="h-6 w-6 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-brand">Vision</h3>
              <p className="mt-2 text-muted-foreground">Become the most trusted dental RCM partner in the United States.</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-2xl bg-white border border-border p-7 h-full">
              <Award className="h-6 w-6 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-brand">Promise</h3>
              <p className="mt-2 text-muted-foreground">Measurable lift in collections within 90 days — or we work for free until you see it.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Values</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">What we stand for</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="rounded-2xl bg-white border border-border p-6 h-full">
                    <Icon className="h-6 w-6 text-teal" />
                    <h3 className="mt-3 font-semibold text-brand">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-prose">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-teal font-semibold">Leadership</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand text-balance">Meet the people behind Eladent</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="rounded-2xl bg-white border border-border p-6 text-center h-full">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-brand text-white grid place-items-center text-2xl font-bold">{p.initials}</div>
                  <h3 className="mt-4 font-semibold text-brand">{p.name}</h3>
                  <div className="text-xs text-teal font-medium uppercase tracking-wider">{p.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose">
          <div className="rounded-3xl bg-gradient-brand p-10 md:p-14 text-white text-center">
            <Users className="h-8 w-8 text-teal mx-auto" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Want to work with a team that cares about your numbers?</h2>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3.5 font-semibold">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
