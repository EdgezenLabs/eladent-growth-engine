import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative bg-gradient-hero border-b border-border">
      <div className="container-prose py-16 md:py-24 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-brand ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> {eyebrow}
          </div>
        )}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-brand text-balance">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
