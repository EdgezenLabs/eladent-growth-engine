import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Activity, TrendingUp, Search, Mail, ShieldCheck, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/services/accounts-receivable")({
  head: () => ({
    meta: [
      { title: "Dental AR Follow-Up & Recovery Services | Eladent Consulting" },
      { name: "description", content: "Dental accounts receivable recovery, AR follow-up and denial management. Convert aged claims and patient AR into real cash, fast." },
      { property: "og:title", content: "Dental AR Follow-Up Services" },
      { property: "og:description", content: "Convert aged claims and patient AR into real cash." },
      { property: "og:url", content: "/services/accounts-receivable" },
    ],
    links: [{ rel: "canonical", href: "/services/accounts-receivable" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Accounts Receivable"
      title="Dental AR Follow-Up that turns aged claims into cash"
      subtitle="Whether AR>90 is bleeding cash or patient balances are piling up, our AR specialists work every dollar — and report results weekly."
      challenges={[
        "AR>90 days creeping past 20% of total AR",
        "Patient balances written off because no one follows up",
        "Denials sitting untouched because the front desk is buried",
        "No accountability for what's getting worked vs. abandoned",
      ]}
      solution="Our AR team works aged claims daily — appeals, payer calls, rework and patient outreach — with a documented audit trail. You see exactly which claims got touched, why, and what happens next."
      process={[
        { title: "AR audit", desc: "We bucket claims by payer, age and denial type to find the biggest wins." },
        { title: "Workout plan", desc: "Highest-value claims first, with appeals and resubmission as needed." },
        { title: "Patient AR", desc: "Friendly multi-channel outreach with payment plans and online pay links." },
        { title: "Prevention", desc: "Root-cause insights fed back to front desk and billing to stop repeats." },
      ]}
      benefits={[
        { icon: TrendingUp, title: "AR>90 cut by 30–50%", desc: "Real numbers from real practices in their first quarter with us." },
        { icon: Activity, title: "Daily activity", desc: "Every aged claim gets touched on a documented cadence." },
        { icon: Search, title: "Root-cause analysis", desc: "We surface the upstream issue, not just the denial code." },
        { icon: Mail, title: "Patient outreach", desc: "Compliant SMS, email and statement workflows that preserve trust." },
        { icon: ShieldCheck, title: "HIPAA-compliant", desc: "Encrypted communication and audited access for every account." },
        { icon: BarChart3, title: "Weekly reporting", desc: "See exactly what got worked, recovered and written off — and why." },
      ]}
      faqs={[
        { q: "Can you take just our aged AR project?", a: "Yes — we offer one-time AR cleanups in addition to fully-managed ongoing AR." },
        { q: "Do you collect from patients?", a: "We manage the outreach. Payments always go directly to your practice." },
        { q: "What ages of AR are worth working?", a: "Anything under 12 months typically has recoverable value. Older accounts get a quick triage call." },
      ]}
    />
  );
}
