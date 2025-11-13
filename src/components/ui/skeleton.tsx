import { cn } from "@/lib/utils"; // asumsi kamu punya util cn()

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
}

export function Skeleton({
  variant = "rectangular",
  className,
  ...props
}: SkeletonProps) {
  const variantClass = {
    text: "rounded-sm",
    circular: "rounded-full",
    rectangular: "rounded-md",
  }[variant];

  return (
    <div
      className={cn(
        "bg-zinc-200/70 dark:bg-zinc-800/70 animate-pulse",
        variantClass,
        className
      )}
      {...props}
    />
  );
}
