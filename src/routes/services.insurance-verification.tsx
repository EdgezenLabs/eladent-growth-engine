import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ShieldCheck, Smile, FileCheck2, BarChart3, Users, Calendar } from "lucide-react";

export const Route = createFileRoute("/services/insurance-verification")({
  head: () => ({
    meta: [
      { title: "Dental Insurance Verification & Benefits | Eladent Consulting" },
      { name: "description", content: "Accurate dental insurance and benefit verification — eligibility, deductibles, maximums, frequencies, waiting periods, missing tooth clause and COB." },
      { property: "og:title", content: "Dental Insurance Verification & Benefits" },
      { property: "og:description", content: "Accurate verification is the foundation of a healthy revenue cycle." },
      { property: "og:url", content: "/services/insurance-verification" },
    ],
    links: [{ rel: "canonical", href: "/services/insurance-verification" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Insurance Verification & Benefits"
      title="Insurance verification and benefits — the foundation of a healthy revenue cycle"
      subtitle="Accurate insurance verification means fewer denials, better treatment acceptance and a stronger patient financial experience from the very first visit."
      challenges={[
        "Patients arriving with inactive coverage or unexpected benefits",
        "Front office time consumed by payer phone calls and portals",
        "Treatment plans falling apart because of unclear benefits",
        "Missed frequencies, waiting periods, downgrades and COB",
      ]}
      solution="Our team delivers complete benefit verification — eligibility, deductible, remaining maximum, waiting period, frequency limitations, missing tooth clause and coordination of benefits — before each appointment."
      process={[
        { title: "Eligibility", desc: "Active eligibility confirmed for every scheduled patient." },
        { title: "Full benefit breakdown", desc: "Deductibles, maximums, frequencies, waiting periods and downgrades captured." },
        { title: "Clauses & COB", desc: "Missing tooth clause and coordination of benefits verified upfront." },
        { title: "Office-ready notes", desc: "Verified benefits documented so your team can present treatment confidently." },
      ]}
      benefits={[
        { icon: ShieldCheck, title: "Reduced claim denials", desc: "Accurate benefits upfront mean cleaner claims downstream." },
        { icon: Smile, title: "Improved treatment acceptance", desc: "Patients say yes more often when they know their financial picture." },
        { icon: FileCheck2, title: "Better patient transparency", desc: "Clear estimates protect patient trust and your practice's brand." },
        { icon: Calendar, title: "More accurate treatment planning", desc: "Frequencies and limitations are known before the plan is presented." },
        { icon: Users, title: "Less front-office burden", desc: "Your team stops chasing payers and gets back to patients." },
        { icon: BarChart3, title: "Stronger revenue cycle", desc: "Verification done right makes every downstream step easier." },
      ]}
      faqs={[
        { q: "What's included in a full benefit verification?", a: "Eligibility, deductible, remaining maximum, waiting period, frequency limitations, missing tooth clause and coordination of benefits." },
        { q: "Do you handle Medicaid plans?", a: "Yes — we verify commercial PPO, DHMO and Medicaid plans." },
        { q: "How is the verified information delivered?", a: "Office-ready verification notes are documented so your team can scan and present in seconds." },
      ]}
    />
  );
}
