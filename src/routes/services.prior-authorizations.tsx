import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { Clock, TrendingUp, FileText, Phone, Smile, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/services/prior-authorizations")({
  head: () => ({
    meta: [
      { title: "Dental Prior Authorization Services | Eladent Consulting" },
      { name: "description", content: "End-to-end dental prior authorization management for Medicaid and PPO plans. Faster approvals, less administrative burden, more production." },
      { property: "og:title", content: "Dental Prior Authorization Services" },
      { property: "og:description", content: "Secure dental insurance approvals faster and reduce administrative workload." },
      { property: "og:url", content: "/services/prior-authorizations" },
    ],
    links: [{ rel: "canonical", href: "/services/prior-authorizations" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Prior Authorizations"
      title="Prior Authorization management that protects your production"
      subtitle="Many dental practices lose valuable production due to delays in obtaining insurance approvals. Our team owns the entire prior authorization process end-to-end."
      challenges={[
        "Treatment delays while waiting on Medicaid and PPO approvals",
        "Front office buried in narratives, attachments and payer follow-up",
        "Lost production when authorizations expire or are never submitted",
        "No clear visibility into authorization status across the schedule",
      ]}
      solution="Eladent manages Medicaid and PPO prior authorizations from start to finish — supporting documentation, narratives, radiograph and attachment submission, payer follow-up and status updates back to the office."
      process={[
        { title: "Identify cases", desc: "We flag every scheduled procedure that requires payer pre-approval." },
        { title: "Document & submit", desc: "Narratives, radiographs and attachments compiled and submitted." },
        { title: "Follow-up", desc: "Active payer outreach until an approval, denial or request for info is received." },
        { title: "Office updates", desc: "Status tracking and clear updates so your team can confidently schedule." },
      ]}
      benefits={[
        { icon: Clock, title: "Faster treatment approvals", desc: "Submissions go out promptly with the right supporting documentation." },
        { icon: TrendingUp, title: "Increased production opportunities", desc: "More approved cases means more confirmed production on the schedule." },
        { icon: ClipboardCheck, title: "Reduced administrative workload", desc: "Free your front office from authorization follow-up and paperwork." },
        { icon: Smile, title: "Improved patient experience", desc: "Patients get clarity on coverage and timing before treatment begins." },
        { icon: FileText, title: "Better case acceptance", desc: "Clear approval status helps your team present treatment with confidence." },
        { icon: Phone, title: "Active payer follow-up", desc: "Consistent outreach until the authorization is resolved." },
      ]}
      faqs={[
        { q: "Do you handle both Medicaid and commercial PPO authorizations?", a: "Yes — we manage Medicaid prior authorizations and PPO pre-determinations, including supporting documentation and attachments." },
        { q: "How do we know the status of each authorization?", a: "We provide clear, ongoing updates to your office so your team always knows where every case stands." },
        { q: "Can you write the narratives?", a: "Yes — we prepare clinical narratives, attach supporting radiographs and submit any additional documentation payers request." },
      ]}
    />
  );
}
