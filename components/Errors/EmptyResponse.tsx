import type { PropsWithChildren } from "react";

interface EmptyResponse extends PropsWithChildren {
  className?: string;
}

function EmptyResponse({ children, className = "" }: EmptyResponse) {
  return (
    <div
      className={`grid place-items-center py-5 ${className}`}
      role="status"
      aria-live="polite"
    >
      {children}
    </div>
  );
}

export default EmptyResponse;
