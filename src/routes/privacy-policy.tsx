import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Eladent Consulting" },
      { name: "description", content: "How Eladent Consulting collects, uses and protects your information when you use our website and services." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How Eladent Consulting protects your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: May 1, 2026" />
      <section className="py-16">
        <article className="container-prose max-w-3xl prose prose-slate">
          <p>This Privacy Policy explains how Eladent Consulting ("Eladent", "we", "us") collects, uses, discloses and safeguards information when you visit eladent.com or use our services.</p>

          <h2 className="mt-8 text-xl font-bold text-brand">Information we collect</h2>
          <p>We collect business contact information you provide (name, practice name, email, phone) and usage data from our website (cookies, IP address, browser type) to deliver and improve our services.</p>

          <h2 className="mt-8 text-xl font-bold text-brand">How we use information</h2>
          <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
            <li>To respond to inquiries and provide requested services.</li>
            <li>To operate, secure and improve our website.</li>
            <li>To communicate updates, marketing and product news (you can opt out anytime).</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="mt-8 text-xl font-bold text-brand">Protected Health Information</h2>
          <p>When we handle Protected Health Information (PHI) on behalf of a covered entity, we do so under a signed Business Associate Agreement (BAA) and in accordance with HIPAA. See our <a href="/hipaa-compliance" className="text-teal">HIPAA Compliance</a> page for details.</p>

          <h2 className="mt-8 text-xl font-bold text-brand">Sharing</h2>
          <p>We do not sell personal information. We share information only with vetted sub-processors under contract, and with authorities if required by law.</p>

          <h2 className="mt-8 text-xl font-bold text-brand">Your rights</h2>
          <p>You may request access, correction or deletion of your personal information by emailing privacy@eladent.com.</p>

          <h2 className="mt-8 text-xl font-bold text-brand">Contact</h2>
          <p>Eladent Consulting, 200 Market St, Suite 1500, Dallas, TX 75201 · privacy@eladent.com · (800) 555-0199</p>
        </article>
      </section>
    </SiteLayout>
  );
}
