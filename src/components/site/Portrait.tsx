import portrait from "@/assets/ofir-levi-half-body.png.asset.json";

export function Portrait({ compact = false, alt }: { compact?: boolean; alt: string }) {
  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-[184px]" : "max-w-[240px] sm:max-w-[272px]"}`}>
      <div className="rounded-md border border-gold/30 bg-card p-3 shadow-portrait">
        <div className="aspect-[3/4] bg-background px-4 pb-4 pt-5">
          <img src={portrait.url} alt={alt} width={400} height={624} loading="lazy" className="h-full w-full object-contain" />
        </div>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-8 w-8 rounded-tr-md border-r border-t border-gold/70" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 rounded-bl-md border-b border-l border-gold/70" />
    </div>
  );
}