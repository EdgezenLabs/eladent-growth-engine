import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ShieldCheck, TrendingUp, Zap, ClipboardCheck, BarChart3, Receipt } from "lucide-react";

export const Route = createFileRoute("/services/dental-billing")({
  head: () => ({
    meta: [
      { title: "Dental Billing Services in the USA | Eladent Consulting" },
      { name: "description", content: "Outsourced dental billing services with 98%+ clean claim rate. HIPAA-compliant claim submission, scrubbing and follow-up for US dental practices." },
      { property: "og:title", content: "Dental Billing Services" },
      { property: "og:description", content: "Outsourced dental billing with 98%+ clean claim rate." },
      { property: "og:url", content: "/services/dental-billing" },
    ],
    links: [{ rel: "canonical", href: "/services/dental-billing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Dental Billing"
      title="Dental Billing Services that get claims paid — the first time"
      subtitle="Outsource your daily dental billing to a US-managed team that scrubs, submits and follows up on every claim with surgical precision."
      challenges={[
        "5–12% of revenue lost to denials, rejections and underpayments",
        "Front-desk teams juggling claims, scheduling and patient calls",
        "Missing attachments and weak narratives slowing reimbursement",
        "No visibility into clean claim rate or denial trends by payer",
      ]}
      solution="We become your dedicated dental billing department. Daily claim review, payer-specific scrubbing, attachment management, narrative writing and same-day submission — all backed by a live KPI dashboard so you always know where revenue stands."
      process={[
        { title: "Charge entry", desc: "Daily charge capture from your PMS with code-level review." },
        { title: "Scrub & submit", desc: "Payer-specific rules check before the claim ever leaves the building." },
        { title: "Attachments & narratives", desc: "X-rays, perio charts and narratives attached to support necessity." },
        { title: "Posting & follow-up", desc: "Same-day ERA posting and aggressive AR follow-up on anything unpaid." },
      ]}
      benefits={[
        { icon: Zap, title: "98%+ clean claim rate", desc: "Less rework, faster reimbursement and fewer awkward calls to patients." },
        { icon: TrendingUp, title: "+22–35% collections", desc: "Typical lift in the first 90 days of a fully-managed engagement." },
        { icon: ShieldCheck, title: "HIPAA-compliant", desc: "Encrypted PMS access, audited workflows and SOC 2-aligned controls." },
        { icon: ClipboardCheck, title: "No more rework", desc: "Your front desk gets time back to focus on patients and treatment plans." },
        { icon: BarChart3, title: "Live dashboards", desc: "Daily visibility into collections, AR aging, denials and payer trends." },
        { icon: Receipt, title: "PMS-native", desc: "Dentrix, Eaglesoft, Open Dental, Curve, Carestream — we work inside your system." },
      ]}
      faqs={[
        { q: "How fast can you start billing for our practice?", a: "Most practices are live within 7–10 business days. We handle the PMS access setup, payer setup and workflow design with your team." },
        { q: "Do you bill medical insurance too?", a: "Yes — for procedures with medical crossover (sleep, TMJ, surgical extractions) we coordinate dental and medical claims." },
        { q: "Will we still control our patients and payments?", a: "Absolutely. Payments go directly to your account. We never touch funds — we touch claims, denials and AR." },
        { q: "What does pricing look like?", a: "We typically work on a percentage-of-collections model so we only win when you do. We'll quote after a free 30-minute audit." },
      ]}
    />
  );
}
