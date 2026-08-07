import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SmartImage } from "@/components/SmartImage";
import { businessImage } from "@/utils/image";
import type { Business } from "@/models/types";

interface BusinessHeroProps {
  business: Business;
}

function BusinessHeroBase({ business }: BusinessHeroProps) {
  const { palette } = useTheme();
  const imgSrc = businessImage(business.business_id);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "38vh", minHeight: "280px", maxHeight: "400px" }}
    >
      <div className="absolute inset-0">
        <SmartImage
          src={imgSrc}
          alt={business.name}
          eager
          className="w-full h-full"
          imgClassName="w-full h-full"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: palette.gradientHero }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: palette.primary }}
        >
          {business.service_type}
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
          style={{ color: palette.text }}
        >
          {business.name}
        </h1>
      </div>
    </section>
  );
}

export const BusinessHero = memo(BusinessHeroBase);
