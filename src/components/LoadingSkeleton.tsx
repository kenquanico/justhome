export function LoadingSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-[24px] border border-slate-100 bg-white p-3 shadow-sm">
          <div className="aspect-[1.25] rounded-[18px] bg-slate-100" />
          <div className="p-4">
            <div className="h-4 w-2/3 rounded-full bg-slate-100" />
            <div className="mt-3 h-3 w-1/2 rounded-full bg-slate-100" />
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="h-8 rounded-full bg-slate-100" />
              <div className="h-8 rounded-full bg-slate-100" />
              <div className="h-8 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
