import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { TrendingUp, Users, ClipboardList, Workflow, BarChart3, BookOpen } from "lucide-react";

export const Route = createFileRoute("/services/practice-operations")({
  head: () => ({
    meta: [
      { title: "Dental Practice Operations Optimization | Eladent Consulting" },
      { name: "description", content: "Operational consulting for dental practices — workflow analysis, SOP development, scheduling, KPI tracking and team training to drive production and profitability." },
      { property: "og:title", content: "Dental Practice Operations Optimization" },
      { property: "og:description", content: "Identify bottlenecks, improve workflows and increase production." },
      { property: "og:url", content: "/services/practice-operations" },
    ],
    links: [{ rel: "canonical", href: "/services/practice-operations" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Practice Operations Optimization"
      title="Operational consulting that strengthens production and profitability"
      subtitle="A healthy revenue cycle starts with efficient office operations. We help dental practices identify bottlenecks, improve workflows and implement systems that increase productivity."
      challenges={[
        "Front office workflows that slow patient flow and treatment acceptance",
        "Scheduling gaps that leave production on the table",
        "Inconsistent processes from team member to team member",
        "Lack of KPI visibility into operational performance",
      ]}
      solution="We deliver front office workflow analysis, scheduling optimization, insurance workflow improvements, treatment acceptance reviews, revenue cycle audits, SOP development, team training recommendations and KPI tracking."
      process={[
        { title: "Audit", desc: "Front office, scheduling, insurance and revenue cycle workflows reviewed in depth." },
        { title: "Recommend", desc: "Clear recommendations on process changes, SOPs and team accountability." },
        { title: "Implement", desc: "SOPs developed and team training recommendations rolled out." },
        { title: "Track", desc: "KPIs tracked and reported so improvement is visible and sustained." },
      ]}
      benefits={[
        { icon: TrendingUp, title: "Increased production", desc: "Better scheduling and treatment acceptance unlock production already on the books." },
        { icon: Workflow, title: "Reduced inefficiencies", desc: "Cleaner workflows reduce rework, errors and wasted team time." },
        { icon: Users, title: "Stronger team accountability", desc: "SOPs and KPIs give every role clear standards and ownership." },
        { icon: ClipboardList, title: "Better patient flow", desc: "Smoother scheduling and front office processes for a better patient experience." },
        { icon: BarChart3, title: "Improved operational performance", desc: "Operational data tied directly to financial outcomes." },
        { icon: BookOpen, title: "SOP development", desc: "Documented standard operating procedures your team can actually follow." },
      ]}
      faqs={[
        { q: "Do you offer team training?", a: "We provide team training recommendations and SOPs that your leadership can implement, with consulting support throughout." },
        { q: "How is this different from billing services?", a: "Operations consulting focuses on the workflows, scheduling and processes that drive production — complementing our revenue cycle services." },
        { q: "Can this be combined with your RCM services?", a: "Yes — most clients combine operations consulting with one or more revenue cycle services." },
      ]}
    />
  );
}
