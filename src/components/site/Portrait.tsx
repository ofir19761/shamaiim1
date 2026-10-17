import portrait from "@/assets/ofir-levi-studio-graphite.jpg.asset.json";

export function Portrait({ compact = false, alt }: { compact?: boolean; alt: string }) {
  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-[184px]" : "max-w-[240px] sm:max-w-[272px]"}`}>
      <div className="rounded-md border border-gold/30 bg-card p-3 shadow-portrait">
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <img src={portrait.url} alt={alt} width={1600} height={1600} loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-8 w-8 rounded-tr-md border-r border-t border-gold/70" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 rounded-bl-md border-b border-l border-gold/70" />
    </div>
  );
}