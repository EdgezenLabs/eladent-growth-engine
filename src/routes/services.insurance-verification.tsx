import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ShieldCheck, Clock, FileCheck2, Smile, Users, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/services/insurance-verification")({
  head: () => ({
    meta: [
      { title: "Dental Insurance Verification Services | Eladent Consulting" },
      { name: "description", content: "48-hour pre-appointment dental insurance verification with detailed breakdowns and PMS-ready notes. Reduce surprises and improve case acceptance." },
      { property: "og:title", content: "Dental Insurance Verification Services" },
      { property: "og:description", content: "Real-time eligibility and benefit breakdowns delivered to your team before every visit." },
      { property: "og:url", content: "/services/insurance-verification" },
    ],
    links: [{ rel: "canonical", href: "/services/insurance-verification" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Insurance Verification"
      title="Dental Insurance Verification — done 48 hours before every appointment"
      subtitle="Detailed, accurate eligibility and benefit breakdowns delivered to your PMS so your team can present treatment with confidence and zero surprises."
      challenges={[
        "Patients arriving with inactive or different coverage than expected",
        "Front desk burning hours on hold with insurance carriers",
        "Treatment plans collapsing at the desk because of unclear benefits",
        "Missed frequencies, waiting periods and downgrades",
      ]}
      solution="Our verification specialists complete full breakdowns 48 hours before each appointment — not just eligibility, but maximums, frequencies, waiting periods, downgrades, missing-tooth clauses and patient responsibility — entered directly into your PMS."
      process={[
        { title: "Schedule pull", desc: "We pull tomorrow's schedule plus 2 days out automatically each morning." },
        { title: "Full breakdown", desc: "Specialists call payers and pull portals for complete benefits." },
        { title: "PMS-ready notes", desc: "Standardized notes entered in Dentrix/Eaglesoft/Open Dental for your team." },
        { title: "Day-of brief", desc: "Front desk gets a clean summary so treatment presentation is bulletproof." },
      ]}
      benefits={[
        { icon: Clock, title: "Hours saved daily", desc: "Free your front desk from hold music and let them focus on patients." },
        { icon: Smile, title: "Higher case acceptance", desc: "Patients say yes more when they know their financial picture upfront." },
        { icon: FileCheck2, title: "Cleaner claims", desc: "Accurate benefits at intake means fewer denials downstream." },
        { icon: ShieldCheck, title: "HIPAA-compliant", desc: "Verified information stored and transmitted through encrypted channels." },
        { icon: Users, title: "Patient trust", desc: "No more surprise balances — patients trust your practice." },
        { icon: BarChart3, title: "Reporting", desc: "Weekly visibility into verification volume, payer mix and gaps." },
      ]}
      faqs={[
        { q: "How far in advance do you verify?", a: "Standard is 48 hours pre-appointment, with same-day rush available for add-ons." },
        { q: "Which payers do you handle?", a: "All major dental PPOs, DHMOs, Medicaid and discount plans across all 50 states." },
        { q: "Do you enter the info into our PMS?", a: "Yes — directly into your patient's record with standardized note formats your team can scan in seconds." },
      ]}
    />
  );
}
