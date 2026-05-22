export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5c2.6 0 4.4 1.4 5.6 1.4 1 0 1.6-.4 2.2-.4.7 0 1.2.5 1.2 1.6 0 2.2-1 5.4-2 8-1.1 2.7-2.1 5.4-3.4 7.2-.6.8-1.2 1.2-1.8 1.2-1 0-1.4-1.5-1.8-3.2-.3-1.3-.6-2.4-1.2-2.4-.5 0-.9 1.1-1.2 2.4-.4 1.7-.8 3.2-1.8 3.2-.6 0-1.2-.4-1.8-1.2C5 18.5 4 15.8 2.9 13.1c-1-2.6-2-5.8-2-8 0-1.1.5-1.6 1.2-1.6.6 0 1.2.4 2.2.4 1.2 0 3-1.4 5.6-1.4Z"/>
        </svg>
        <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full bg-teal ring-2 ring-white" />
      </div>
      <div className="leading-tight">
        <div className="font-display text-[17px] font-bold text-brand">Eladent</div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">Consulting</div>
      </div>
    </div>
  );
}
