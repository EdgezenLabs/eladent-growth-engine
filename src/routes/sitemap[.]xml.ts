import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry { path: string; changefreq?: string; priority?: string; }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/services/insurance-verification", changefreq: "monthly", priority: "0.9" },
          { path: "/services/prior-authorizations", changefreq: "monthly", priority: "0.9" },
          { path: "/services/claim-submission", changefreq: "monthly", priority: "0.9" },
          { path: "/services/payment-posting", changefreq: "monthly", priority: "0.9" },
          { path: "/services/accounts-receivable", changefreq: "monthly", priority: "0.9" },
          { path: "/services/practice-operations", changefreq: "monthly", priority: "0.9" },
          { path: "/services/analytics-reporting", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/hipaa-compliance", changefreq: "yearly", priority: "0.5" },
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
