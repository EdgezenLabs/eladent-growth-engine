import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { LineChart, BarChart3, PieChart, Gauge, Eye, Target } from "lucide-react";

export const Route = createFileRoute("/services/analytics-reporting")({
  head: () => ({
    meta: [
      { title: "Dental Revenue Cycle Analytics & Reporting | Eladent Consulting" },
      { name: "description", content: "Meaningful dental revenue cycle reporting — collections trends, aging, payment posting metrics, claim performance and operational KPIs." },
      { property: "og:title", content: "Dental Revenue Cycle Analytics & Reporting" },
      { property: "og:description", content: "Gain visibility into your practice's financial performance with data-driven reporting." },
      { property: "og:url", content: "/services/analytics-reporting" },
    ],
    links: [{ rel: "canonical", href: "/services/analytics-reporting" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Revenue Cycle Analytics & Reporting"
      title="Revenue cycle analytics that turn data into better decisions"
      subtitle="Gain visibility into your practice's financial performance with meaningful reporting and insights — built specifically for dental revenue cycle and operations."
      challenges={[
        "Reports that exist but don't drive decisions",
        "No visibility into collection trends or payer performance",
        "Aging that's reviewed once a month — when it's already too late",
        "Operational performance disconnected from financial outcomes",
      ]}
      solution="We build and maintain reporting around the metrics that matter — collection trends, aging analysis, payment posting metrics, claim performance, revenue cycle KPIs, operational insights and process performance tracking."
      process={[
        { title: "Define KPIs", desc: "We align reporting to the metrics that actually drive your practice." },
        { title: "Build reports", desc: "Collection trends, aging, posting metrics and claim performance views." },
        { title: "Review cadence", desc: "Recurring reviews with leadership to translate data into action." },
        { title: "Refine", desc: "Reporting evolves as the practice grows and new questions emerge." },
      ]}
      benefits={[
        { icon: LineChart, title: "Better decision making", desc: "Operational and financial decisions grounded in real numbers." },
        { icon: BarChart3, title: "Improved financial performance", desc: "Clear visibility into where money is being made — and lost." },
        { icon: PieChart, title: "Aging analysis", desc: "Know exactly what is owed, by whom and for how long." },
        { icon: Gauge, title: "Revenue cycle KPIs", desc: "Track the metrics that actually move collections and production." },
        { icon: Eye, title: "Increased accountability", desc: "Transparent reporting creates ownership across the team." },
        { icon: Target, title: "Data-driven growth", desc: "Strategic decisions backed by performance data, not gut feel." },
      ]}
      faqs={[
        { q: "What reports do you produce?", a: "Collection trends, aging analysis, payment posting metrics, claim performance, revenue cycle KPIs and operational insights." },
        { q: "Can reports be customized to our practice?", a: "Yes — reporting is tailored to the KPIs and questions that matter most to your leadership." },
        { q: "Do we get a recurring review?", a: "Yes — recurring reviews translate reporting into specific actions your team can take." },
      ]}
    />
  );
}
