import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SmartImage } from "@/components/SmartImage";
import { businessImage } from "@/utils/image";
import type { Business } from "@/models/types";

interface BusinessCardProps {
  business: Business;
  onClick: (id: string) => void;
}

function BusinessCardBase({ business, onClick }: BusinessCardProps) {
  const { palette } = useTheme();
  const imgSrc = businessImage(business.business_id);

  return (
    <button
      onClick={() => onClick(business.business_id)}
      className="group relative w-full overflow-hidden text-left transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
      style={{
        borderRadius: "20px",
        backgroundColor: palette.surface,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${palette.border}`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.2)`,
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: "20px 20px 0 0" }}>
        <SmartImage
          src={imgSrc}
          alt={business.name}
          className="w-full h-full"
          imgClassName="w-full h-full"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, transparent 50%, ${palette.bg}00 60%, ${palette.bg}cc 100%)`,
            opacity: 0.9,
          }}
        />
      </div>
      <div className="p-4">
        <h3
          className="text-base font-semibold tracking-tight leading-tight"
          style={{ color: palette.text }}
        >
          {business.name}
        </h3>
        <p
          className="text-xs mt-1 font-medium tracking-wide"
          style={{ color: palette.primary }}
        >
          {business.service_type}
        </p>
      </div>
    </button>
  );
}

export const BusinessCard = memo(BusinessCardBase);
