export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#070B12]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-[#111827] shadow-[0_0_40px_rgba(37,99,235,0.16)]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-blue-500" />
          <span className="absolute text-[10px] font-black tracking-tight text-white">LT</span>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold tracking-tight text-white">Lzzy Tech</p>
          <p className="mt-1 text-xs text-slate-500">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
}
