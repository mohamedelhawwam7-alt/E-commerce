export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="h-8 w-56 bg-gray-200 rounded-lg animate-pulse mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-6 rounded-2xl border border-gray-200">
        <div className="w-full h-80 sm:h-96 rounded-xl bg-gray-100 animate-pulse" />
        <div className="space-y-4">
          <div className="h-5 w-40 bg-gray-100 rounded animate-pulse" />
          <div className="h-7 w-3/4 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
          <div className="h-10 w-32 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
