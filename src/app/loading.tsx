export default function Loading() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-bg relative px-6">
      {/* Top background glow */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.2]" />
      
      <div className="w-full max-w-4xl space-y-12 animate-pulse relative z-10">
        {/* Hero Area Skeleton */}
        <div className="space-y-4 text-center">
          <div className="h-4 bg-border-main rounded w-24 mx-auto" />
          <div className="h-10 bg-border-main rounded w-96 mx-auto" />
          <div className="h-6 bg-border-main rounded w-80 mx-auto" />
        </div>

        {/* Content Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface border border-border-main rounded-xl p-8 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-border-main" />
              <div className="space-y-3">
                <div className="h-5 bg-border-main rounded w-3/4" />
                <div className="h-3 bg-border-main rounded w-full" />
                <div className="h-3 bg-border-main rounded w-5/6" />
              </div>
              <div className="h-3 bg-border-main rounded w-1/3 pt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
