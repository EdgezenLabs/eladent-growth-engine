import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Zap, TrendingUp, ShieldCheck, RefreshCw, Repeat2, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/services/claim-submission")({
  head: () => ({
    meta: [
      { title: "Dental Claim Submission & Insurance Management | Eladent Consulting" },
      { name: "description", content: "Accurate, efficient dental claim submission, tracking, corrections, denial management and secondary claims. Maximize reimbursement and reduce delays." },
      { property: "og:title", content: "Dental Claim Submission & Insurance Management" },
      { property: "og:description", content: "Get claims paid faster with disciplined submission and follow-up." },
      { property: "og:url", content: "/services/claim-submission" },
    ],
    links: [{ rel: "canonical", href: "/services/claim-submission" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Claim Submission & Insurance Management"
      title="Claim submission and insurance management built for clean, fast reimbursement"
      subtitle="We ensure claims are submitted accurately and efficiently to maximize reimbursement and reduce delays at every stage of the insurance workflow."
      challenges={[
        "Claims sitting in unsubmitted status while production keeps growing",
        "Missing information slowing reimbursement and triggering denials",
        "Secondary claims falling through the cracks",
        "Inconsistent payer communication and unclear claim status",
      ]}
      solution="Our team handles claim submission, tracking, corrections, missing-information follow-up, denial management, secondary claim processing and ongoing insurance communication so every claim moves toward payment."
      process={[
        { title: "Submit", desc: "Daily, accurate claim submission with the right codes, attachments and information." },
        { title: "Track", desc: "Active tracking of every claim until it reaches a payment decision." },
        { title: "Correct & follow up", desc: "Fast corrections and missing-information follow-up to keep claims moving." },
        { title: "Denials & secondaries", desc: "Denial management and secondary claim processing to capture every dollar." },
      ]}
      benefits={[
        { icon: Zap, title: "Faster reimbursements", desc: "Disciplined submission and follow-up shrink the time from service to payment." },
        { icon: TrendingUp, title: "Improved collections", desc: "More claims paid in full, on time and with fewer write-offs." },
        { icon: ShieldCheck, title: "Reduced denials", desc: "Accurate submission and proactive correction reduce avoidable denials." },
        { icon: RefreshCw, title: "Active claim tracking", desc: "We follow each claim through to resolution — nothing gets lost." },
        { icon: Repeat2, title: "Secondary processing", desc: "Secondary claims submitted promptly so coordination of benefits actually pays." },
        { icon: MessageSquare, title: "Better insurance workflow", desc: "Consistent communication and structured workflows with every payer." },
      ]}
      faqs={[
        { q: "Do you handle denial management and appeals?", a: "Yes — denial management is part of our standard claim submission workflow." },
        { q: "Will you process secondary claims?", a: "Yes — we handle secondary claim processing and coordination of benefits." },
        { q: "How do we get visibility into claim status?", a: "We provide structured reporting on submission volume, denial trends and claim performance." },
      ]}
    />
  );
}
