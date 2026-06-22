import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand text-white mt-24">
      <div className="container-prose py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-3 inline-block"><Logo /></div>
          <p className="mt-5 text-sm text-white/75 max-w-sm">
            Eladent Consulting partners with dental practices to strengthen the revenue cycle, improve
            operational efficiency and support long-term growth.
          </p>

          <form className="mt-6 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <label className="text-xs uppercase tracking-wider text-white/60">Newsletter</label>
            <div className="mt-2 flex rounded-full bg-white/10 ring-1 ring-white/15 overflow-hidden">
              <input
                type="email"
                required
                placeholder="your@practice.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none"
              />
              <button className="px-4 bg-teal text-white inline-flex items-center gap-1.5 text-sm font-medium">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link to="/services/insurance-verification" className="hover:text-teal">Insurance Verification</Link></li>
            <li><Link to="/services/prior-authorizations" className="hover:text-teal">Prior Authorizations</Link></li>
            <li><Link to="/services/claim-submission" className="hover:text-teal">Claim Submission</Link></li>
            <li><Link to="/services/payment-posting" className="hover:text-teal">Payment Posting</Link></li>
            <li><Link to="/services/accounts-receivable" className="hover:text-teal">Accounts Receivable</Link></li>
            <li><Link to="/services/practice-operations" className="hover:text-teal">Practice Operations</Link></li>
            <li><Link to="/services/analytics-reporting" className="hover:text-teal">Analytics & Reporting</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-teal">About</Link></li>
            <li><Link to="/services" className="hover:text-teal">Services</Link></li>
            <li><Link to="/contact" className="hover:text-teal">Contact</Link></li>
            <li><Link to="/hipaa-compliance" className="hover:text-teal">HIPAA Compliance</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-teal">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-teal mt-0.5" /> hello@eladentconsulting.com</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-teal text-white text-sm font-semibold px-5 py-2.5"
          >
            Schedule a Consultation
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full grid place-items-center bg-white/10 hover:bg-teal transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Eladent Consulting. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/hipaa-compliance" className="hover:text-white">HIPAA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
