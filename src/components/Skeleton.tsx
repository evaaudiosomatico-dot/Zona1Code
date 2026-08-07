import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";

interface SkeletonProps {
  className?: string;
  rounded?: string;
}

function SkeletonBase({ className = "", rounded = "rounded-2xl" }: SkeletonProps) {
  const { palette } = useTheme();
  return (
    <div
      className={`animate-pulse ${rounded} ${className}`}
      style={{
        background: `linear-gradient(90deg, ${palette.skeletonFrom} 0%, ${palette.skeletonTo} 50%, ${palette.skeletonFrom} 100%)`,
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s ease-in-out infinite",
      }}
    />
  );
}

export const Skeleton = memo(SkeletonBase);
