import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { BadgeCheck, Clock, ShieldCheck, Network, FileCheck2, Repeat } from "lucide-react";

export const Route = createFileRoute("/services/credentialing")({
  head: () => ({
    meta: [
      { title: "Dental Credentialing & Provider Enrollment | Eladent Consulting" },
      { name: "description", content: "Dental credentialing, provider enrollment, re-credentialing and CAQH management. Get in-network faster and stay in-network with Eladent." },
      { property: "og:title", content: "Dental Credentialing Services" },
      { property: "og:description", content: "Faster enrollment and zero gaps in re-credentialing." },
      { property: "og:url", content: "/services/credentialing" },
    ],
    links: [{ rel: "canonical", href: "/services/credentialing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Credentialing"
      title="Dental Credentialing — get in-network faster, stay in-network longer"
      subtitle="From new provider enrollment to re-credentialing and CAQH maintenance, we own the entire credentialing lifecycle so you never lose revenue to a lapse."
      challenges={[
        "New providers waiting 4–6 months to bill in-network",
        "Surprise terminations from missed re-credentialing deadlines",
        "Out-of-date CAQH profiles slowing every payer interaction",
        "No central source of truth for licenses and effective dates",
      ]}
      solution="Our credentialing team manages enrollment, re-credentialing, CAQH, NPI and PECOS — proactively. You get a live credentialing tracker with status, expirations and action items for every provider."
      process={[
        { title: "Discovery", desc: "We map every provider, payer and contract for your group." },
        { title: "Application", desc: "Complete, accurate submissions on day one to avoid payer rework." },
        { title: "Follow-up", desc: "Weekly payer outreach until effective dates are confirmed." },
        { title: "Maintenance", desc: "Proactive CAQH updates and re-credentialing 120 days ahead." },
      ]}
      benefits={[
        { icon: Clock, title: "Faster effective dates", desc: "Typical reduction of 3–6 weeks vs. self-managed enrollment." },
        { icon: Network, title: "Wider network access", desc: "Open more PPOs and Medicaid plans confidently." },
        { icon: Repeat, title: "Zero re-cred lapses", desc: "We track every expiration so you never get accidentally terminated." },
        { icon: ShieldCheck, title: "HIPAA-secure files", desc: "Encrypted storage of licenses, CVs, malpractice and DEA documentation." },
        { icon: FileCheck2, title: "CAQH maintained", desc: "We keep your CAQH attested and current every 90 days." },
        { icon: BadgeCheck, title: "DSO-ready", desc: "Built to scale from solo practitioners to 100+ provider groups." },
      ]}
      faqs={[
        { q: "How long does new enrollment take?", a: "Most commercial payers complete in 60–90 days. Medicaid varies by state but is typically 90–150 days." },
        { q: "Can you take over from another credentialing vendor?", a: "Yes — we do a full audit, then assume responsibility with no downtime." },
        { q: "Do you handle group NPI and PECOS too?", a: "Yes — group, individual NPI, PECOS, state licenses and DEA renewals." },
      ]}
    />
  );
}
