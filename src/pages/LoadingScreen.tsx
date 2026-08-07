import { memo, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Skeleton } from "@/components/Skeleton";

function LoadingScreenBase() {
  const { palette } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: palette.gradient }}>
      <div style={{ height: "25vh", minHeight: "220px" }}>
        <Skeleton className="w-full h-full" rounded="rounded-none" />
      </div>
      <div className="px-4 sm:px-6 py-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i}>
              <Skeleton className="w-full aspect-[4/5]" />
              <Skeleton className="w-3/4 h-4 mt-3" />
              <Skeleton className="w-1/2 h-3 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const LoadingScreen = memo(LoadingScreenBase);
