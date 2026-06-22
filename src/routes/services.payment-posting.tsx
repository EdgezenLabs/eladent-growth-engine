import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { CheckCircle2, Clock, BarChart3, ShieldCheck, FileSpreadsheet, Wallet } from "lucide-react";

export const Route = createFileRoute("/services/payment-posting")({
  head: () => ({
    meta: [
      { title: "Dental Payment Posting & Reconciliation | Eladent Consulting" },
      { name: "description", content: "Specialized dental payment posting and reconciliation — EFT, ERA, check and virtual credit card. Accurate financial records and faster account updates." },
      { property: "og:title", content: "Dental Payment Posting & Reconciliation" },
      { property: "og:description", content: "99%+ posting accuracy and 98% same-day posting rate." },
      { property: "og:url", content: "/services/payment-posting" },
    ],
    links: [{ rel: "canonical", href: "/services/payment-posting" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Payment Posting & Reconciliation"
      title="Payment posting and reconciliation done accurately — and on time"
      subtitle="Our specialized payment posting team ensures every payment is accurately posted and reconciled, giving you clean financial records and reliable revenue visibility."
      challenges={[
        "Posting backlogs that delay AR follow-up and reporting",
        "Mis-posted EFTs, ERAs and virtual credit card payments",
        "Deposits that don't reconcile to the bank",
        "Inaccurate ledgers that erode trust in financial reports",
      ]}
      solution="We handle EFT posting, ERA posting, check posting and virtual credit card processing, along with insurance payment reconciliation, deposit verification, daily reporting and ledger review."
      process={[
        { title: "Capture", desc: "EFT, ERA, check and virtual credit card payments captured daily." },
        { title: "Post", desc: "Line-item posting with adjustments, write-offs and contractuals applied correctly." },
        { title: "Reconcile", desc: "Insurance payments reconciled and deposits verified against the bank." },
        { title: "Report", desc: "Daily reporting and ledger review so your numbers always match reality." },
      ]}
      benefits={[
        { icon: CheckCircle2, title: "99%+ posting accuracy", desc: "Disciplined posting workflows and quality controls on every batch." },
        { icon: Clock, title: "98% same-day posting", desc: "Payments posted promptly so AR follow-up and reporting stay current." },
        { icon: BarChart3, title: "Improved revenue visibility", desc: "Accurate ledgers mean you can trust your KPIs and dashboards." },
        { icon: ShieldCheck, title: "Stronger financial controls", desc: "Deposit verification and ledger review reduce financial risk." },
        { icon: FileSpreadsheet, title: "Better reporting accuracy", desc: "Cleaner data flowing into your collections and aging reports." },
        { icon: Wallet, title: "Faster account updates", desc: "Patient ledgers reflect payments quickly, supporting clean statements and AR work." },
      ]}
      faqs={[
        { q: "What payment types do you post?", a: "EFT, ERA, manual check and virtual credit card payments — with full reconciliation." },
        { q: "Do you reconcile deposits to the bank?", a: "Yes — deposit verification and reconciliation are part of the standard workflow." },
        { q: "How often do you post?", a: "Daily posting with a 98% same-day posting target." },
      ]}
    />
  );
}
