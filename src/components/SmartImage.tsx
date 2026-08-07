import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useImageLoader } from "@/hooks/useImageLoader";
import { useInView } from "@/hooks/useInView";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

function SmartImageBase({ src, alt, className = "", imgClassName = "", eager = false }: SmartImageProps) {
  const { palette } = useTheme();
  const [ref, inView] = useInView<HTMLDivElement>();
  const { loaded, error } = useImageLoader(inView || eager ? src : "");

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: palette.bgAlt }}
    >
      {!loaded && !error && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: `linear-gradient(90deg, ${palette.skeletonFrom} 0%, ${palette.skeletonTo} 50%, ${palette.skeletonFrom} 100%)`,
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
        />
      )}

      {error && !loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: palette.bgAlt }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke={palette.textMuted}
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}

      {src && !error && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          className={`transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${imgClassName}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
}

export const SmartImage = memo(SmartImageBase);
