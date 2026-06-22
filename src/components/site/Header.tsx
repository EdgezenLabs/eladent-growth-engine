import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/insurance-verification", label: "Insurance Verification & Benefits", desc: "Eligibility, benefits, COB" },
  { to: "/services/prior-authorizations", label: "Prior Authorizations", desc: "Medicaid & PPO approvals" },
  { to: "/services/claim-submission", label: "Claim Submission", desc: "Submission, tracking, denials" },
  { to: "/services/payment-posting", label: "Payment Posting", desc: "EFT, ERA & reconciliation" },
  { to: "/services/accounts-receivable", label: "Accounts Receivable", desc: "Aging follow-up & appeals" },
  { to: "/services/practice-operations", label: "Practice Operations", desc: "Workflow & SOP consulting" },
  { to: "/services/analytics-reporting", label: "Analytics & Reporting", desc: "KPIs and performance reporting" },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", mega: true },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-lg border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-prose flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="shrink-0"><Logo /></Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            "mega" in item && item.mega ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-brand inline-flex items-center gap-1"
                >
                  {item.label} <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[680px]">
                    <div className="rounded-2xl bg-white shadow-elevated border border-border p-6 grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="group rounded-xl p-3 hover:bg-secondary transition-colors"
                        >
                          <div className="text-sm font-semibold text-brand group-hover:text-teal">{s.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="col-span-2 mt-1 rounded-xl bg-gradient-brand text-white p-4 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-semibold">Full service catalog</div>
                          <div className="text-xs text-white/80">Revenue cycle, operations & analytics</div>
                        </div>
                        <span className="text-sm">View all →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-brand"
                activeProps={{ className: "px-3 py-2 rounded-md text-sm font-semibold text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand text-white text-sm font-semibold px-5 py-2.5 shadow-soft hover:shadow-elevated transition-shadow"
          >
            Free Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-prose py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 grid gap-2">
              {services.map((s) => (
                <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground pl-3 border-l-2 border-teal py-1">
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-gradient-brand text-white font-semibold px-5 py-3"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
