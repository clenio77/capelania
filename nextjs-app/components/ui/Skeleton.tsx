export default function SkeletonCard() {
  return (
    <div className="card animate-pulse">
      <div className="card-image bg-gray-300 h-60" />
      <div className="card-content">
        <div className="h-6 bg-gray-300 rounded mb-3 w-3/4" />
        <div className="h-4 bg-gray-300 rounded mb-2 w-full" />
        <div className="h-4 bg-gray-300 rounded mb-4 w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-1/3" />
      </div>
    </div>
  )
}

export function SkeletonList({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-300 rounded animate-pulse ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

