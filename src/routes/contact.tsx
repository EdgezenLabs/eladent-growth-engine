import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Clock, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Eladent Consulting — Schedule a Free Dental RCM Consultation" },
      { name: "description", content: "Schedule a free consultation or request a revenue cycle assessment. Tell us about your dental practice and we'll respond within one business day." },
      { property: "og:title", content: "Contact Eladent Consulting" },
      { property: "og:description", content: "Schedule a free dental revenue cycle consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Schedule a free consultation"
        subtitle="Tell us about your practice and what you're trying to improve. We'll get back within one business day."
      />

      <section className="py-16">
        <div className="container-prose grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl bg-white border border-border p-7 md:p-10 shadow-soft"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-14 w-14 rounded-full bg-teal/10 grid place-items-center"><CheckCircle2 className="h-7 w-7 text-teal" /></div>
                  <h2 className="mt-4 text-2xl font-bold text-brand">Thanks — we'll be in touch.</h2>
                  <p className="mt-2 text-muted-foreground">We'll respond within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brand">Tell us about your practice</h2>
                  <p className="mt-1 text-sm text-muted-foreground">All fields required. We respect your privacy.</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" />
                    <Field label="Practice name" name="practice" />
                    <Field label="Work email" name="email" type="email" />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Practice management system" name="pms" placeholder="Dentrix / Eaglesoft / Open Dental..." />
                    <div>
                      <label className="text-sm font-medium text-foreground">Practice size</label>
                      <select required className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal">
                        <option>Solo practice</option>
                        <option>Multi-provider practice</option>
                        <option>Group practice</option>
                        <option>Emerging DSO</option>
                        <option>Specialty practice</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium text-foreground">What are you looking for help with?</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. insurance aging, prior authorizations, payment posting, operations consulting..."
                      className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold shadow-soft">
                    Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <Info icon={Mail} title="Email" lines={["hello@eladentconsulting.com"]} />
              <Info icon={Clock} title="Response time" lines={["Within one business day", "Monday – Friday"]} />
              <Info
                icon={MessageSquare}
                title="What to expect"
                lines={[
                  "A short discovery call to understand your practice",
                  "A tailored revenue cycle assessment with recommendations",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal" />
    </div>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl bg-white border border-border p-5 flex gap-4">
      <div className="h-11 w-11 shrink-0 rounded-xl bg-teal/10 text-teal grid place-items-center"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="font-semibold text-brand">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
      </div>
    </div>
  );
}
