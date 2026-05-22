import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Search, Calendar, ArrowRight, Send } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dental Billing & RCM Blog | Eladent Consulting" },
      { name: "description", content: "Insights, best practices and strategies for dental billing, insurance verification, HIPAA compliance and revenue cycle management." },
      { property: "og:title", content: "Eladent Blog — Dental Billing & RCM Insights" },
      { property: "og:description", content: "Best practices for dental billing, denials, HIPAA and growth." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const categories = ["All", "Dental Billing", "Insurance", "HIPAA", "RCM Strategy", "Growth"];
const posts = [
  { title: "7 dental billing best practices to lift collections by 20% in 90 days", cat: "Dental Billing", date: "May 14, 2026", read: "8 min" },
  { title: "Reducing insurance denials: a payer-by-payer playbook for 2026", cat: "Insurance", date: "May 9, 2026", read: "11 min" },
  { title: "HIPAA compliance checklist for dental practices working with offshore vendors", cat: "HIPAA", date: "Apr 27, 2026", read: "6 min" },
  { title: "Dental RCM KPIs every practice owner should review weekly", cat: "RCM Strategy", date: "Apr 18, 2026", read: "7 min" },
  { title: "When to outsource your dental billing — a CFO-level framework", cat: "Growth", date: "Apr 03, 2026", read: "9 min" },
  { title: "Credentialing in 2026: how to cut payer enrollment time in half", cat: "RCM Strategy", date: "Mar 22, 2026", read: "5 min" },
];

function Blog() {
  const featured = posts[0];
  return (
    <SiteLayout>
      <PageHero eyebrow="Eladent insights" title="Dental billing & RCM intelligence" subtitle="Strategies, benchmarks and how-tos from our dental RCM operators." />

      <section className="py-14">
        <div className="container-prose grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <Reveal>
              <Link to="/blog" className="block rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-brand to-teal text-white p-8 md:p-10 shadow-soft">
                <div className="text-xs uppercase tracking-widest text-white/80">Featured</div>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-balance">{featured.title}</h2>
                <div className="mt-5 inline-flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" /> {featured.date} · {featured.read} read
                </div>
                <div className="mt-6 inline-flex items-center gap-1 font-semibold">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {posts.slice(1).map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 0.06}>
                  <Link to="/blog" className="block h-full rounded-2xl bg-white border border-border p-6 hover:border-teal/40 hover:shadow-elevated transition-all">
                    <div className="text-xs uppercase tracking-widest text-teal font-semibold">{p.cat}</div>
                    <h3 className="mt-2 text-lg font-semibold text-brand">{p.title}</h3>
                    <div className="mt-3 text-xs text-muted-foreground inline-flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" /> {p.date} · {p.read} read
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-white border border-border p-5">
              <label className="text-sm font-semibold text-brand">Search</label>
              <div className="mt-2 flex items-center rounded-xl border border-input px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input placeholder="Search articles..." className="ml-2 w-full bg-transparent text-sm focus:outline-none" />
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-border p-5">
              <div className="text-sm font-semibold text-brand">Categories</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button key={c} className="text-xs rounded-full px-3 py-1.5 bg-secondary text-secondary-foreground hover:bg-teal hover:text-white transition-colors">{c}</button>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-brand text-white p-6">
              <div className="font-semibold">Newsletter</div>
              <p className="mt-1 text-sm text-white/80">Monthly playbooks and KPI benchmarks for dental practices.</p>
              <form className="mt-4 flex rounded-full bg-white/10 ring-1 ring-white/20 overflow-hidden" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="you@practice.com" className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none" />
                <button className="px-4 bg-teal"><Send className="h-4 w-4" /></button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
