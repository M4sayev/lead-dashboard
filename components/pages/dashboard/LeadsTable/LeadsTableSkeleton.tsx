import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function LeadsTableSkeleton() {
  return (
    <Card className="p-10 w-full">
      <Skeleton className="h-6 w-20 sm:1/2 mr-auto" />
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`flex items-center space-x-4 ${i === 0 ? "pb-3" : ""}`}
          >
            <Skeleton className="h-6 w-20 sm:1/2 mr-auto" />
            <Skeleton className="h-6 w-15 sm:w-1/5 mx-auto" />
            <Skeleton className="h-6 w-1/5 mx-auto hidden lg:block" />
            <Skeleton className="h-6 w-1/12 mx-auto hidden sm:block" />
            <Skeleton className="h-6 w-1/12 mx-auto hidden lg:block" />
            <Skeleton className="h-6 w-10 sm:w-1/6 ml-auto" />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default LeadsTableSkeleton;
