import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone, ShieldCheck, Linkedin, Twitter, Facebook, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand text-white mt-24">
      <div className="container-prose py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-3 inline-block"><Logo /></div>
          <p className="mt-5 text-sm text-white/75 max-w-sm">
            Eladent Consulting partners with dental practices across the USA to maximize
            collections, reduce denials and scale revenue with HIPAA-compliant RCM.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs text-white/80">
            <ShieldCheck className="h-4 w-4 text-teal" /> HIPAA Compliant · SOC 2 aligned · US-based teams
          </div>

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
            <li><Link to="/services/dental-billing" className="hover:text-teal">Dental Billing</Link></li>
            <li><Link to="/services/insurance-verification" className="hover:text-teal">Insurance Verification</Link></li>
            <li><Link to="/services/credentialing" className="hover:text-teal">Credentialing</Link></li>
            <li><Link to="/services/accounts-receivable" className="hover:text-teal">Accounts Receivable</Link></li>
            <li><Link to="/services" className="hover:text-teal">All services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-teal">About</Link></li>
            <li><Link to="/blog" className="hover:text-teal">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-teal">Careers</Link></li>
            <li><Link to="/hipaa-compliance" className="hover:text-teal">HIPAA Compliance</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-teal">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-teal mt-0.5" /> (800) 555-0199</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-teal mt-0.5" /> hello@eladent.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-teal mt-0.5" /> 200 Market St, Suite 1500<br/>Dallas, TX 75201</li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full grid place-items-center bg-white/10 hover:bg-teal transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full grid place-items-center bg-white/10 hover:bg-teal transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full grid place-items-center bg-white/10 hover:bg-teal transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Eladent Consulting. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/hipaa-compliance" className="hover:text-white">HIPAA</Link>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
