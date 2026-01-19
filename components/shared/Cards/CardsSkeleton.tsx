import { Skeleton } from "@/components/ui/skeleton";

interface CardsSkeletonProps {
  count?: number;
}

function CardsSkeleton({ count = 5 }: CardsSkeletonProps) {
  const items = Array.from({ length: count });

  return (
    <div className="flex justify-center gap-5 w-full flex-wrap items-center">
      {items.map((_, i) => (
        <div key={i} className="min-w-40 flex-1">
          <div className="bg-card text-card-foreground flex flex-col gap-10 rounded-xl border py-6 shadow-sm flex-1">
            <div className="grid gap-8 px-6">
              <div className="flex justify-between items-center gap-2">
                <Skeleton className="w-1/3 h-5" />
                <Skeleton className="w-10 h-10 rounded-full" />
              </div>
              <Skeleton className="w-1/3 h-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsSkeleton;
