import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Activity, TrendingUp, Search, FileText, MessageSquare, Wallet } from "lucide-react";

export const Route = createFileRoute("/services/accounts-receivable")({
  head: () => ({
    meta: [
      { title: "Dental Accounts Receivable Follow-Up | Eladent Consulting" },
      { name: "description", content: "Active dental AR follow-up — insurance aging review, outstanding claim follow-up, appeals, underpayment investigation and resolution tracking." },
      { property: "og:title", content: "Dental Accounts Receivable Follow-Up" },
      { property: "og:description", content: "Reduce aging, increase collections and accelerate cash flow." },
      { property: "og:url", content: "/services/accounts-receivable" },
    ],
    links: [{ rel: "canonical", href: "/services/accounts-receivable" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Accounts Receivable Follow-Up"
      title="Accounts receivable follow-up that actually moves the needle"
      subtitle="We actively pursue outstanding insurance balances and aging claims to accelerate collections, reduce aging and protect cash flow."
      challenges={[
        "AR aging creeping past acceptable thresholds",
        "Outstanding claims sitting untouched for weeks at a time",
        "Underpayments being absorbed instead of investigated",
        "No clear tracking of which claims are being worked and resolved",
      ]}
      solution="Our AR team works your insurance aging directly — outstanding claim follow-up, appeals assistance, underpayment investigation, resolution tracking and consistent insurance communication."
      process={[
        { title: "Aging review", desc: "Insurance aging reviewed and prioritized by payer, age and dollar value." },
        { title: "Follow-up", desc: "Outstanding claims worked through active payer follow-up and documentation." },
        { title: "Appeals & underpayments", desc: "Appeals assistance and underpayment investigation to capture full reimbursement." },
        { title: "Resolution tracking", desc: "Every account tracked to resolution with clear audit trail." },
      ]}
      benefits={[
        { icon: TrendingUp, title: "Increased collections", desc: "Money already earned, now actually collected." },
        { icon: Activity, title: "Reduced aging", desc: "Insurance aging trends down as outstanding claims get resolved." },
        { icon: Wallet, title: "Improved cash flow", desc: "Faster resolution means more predictable cash into the practice." },
        { icon: Search, title: "Underpayment investigation", desc: "We surface and pursue underpaid claims, not just unpaid ones." },
        { icon: FileText, title: "Faster claim resolution", desc: "Disciplined follow-up shortens the time from submission to resolution." },
        { icon: MessageSquare, title: "Active insurance communication", desc: "Consistent payer outreach until every account reaches a decision." },
      ]}
      faqs={[
        { q: "Do you handle appeals?", a: "Yes — appeals assistance is part of our standard AR follow-up workflow." },
        { q: "Can you take just an AR cleanup project?", a: "Yes — we offer one-time aging cleanups in addition to ongoing AR follow-up." },
        { q: "How do underpayments get handled?", a: "We investigate underpayments against fee schedules and pursue the difference where appropriate." },
      ]}
    />
  );
}
