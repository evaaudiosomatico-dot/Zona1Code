import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SmartImage } from "@/components/SmartImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { zoneImage } from "@/utils/image";
import type { Zone } from "@/models/types";

interface ZoneHeroProps {
  zone: Zone;
}

function ZoneHeroBase({ zone }: ZoneHeroProps) {
  const { palette } = useTheme();
  const imgSrc = zoneImage(zone.zone_id);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "25vh", minHeight: "220px", maxHeight: "320px" }}
    >
      <div className="absolute inset-0">
        <SmartImage
          src={imgSrc}
          alt={zone.name}
          eager
          className="w-full h-full"
          imgClassName="w-full h-full"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{ background: palette.gradientHero }}
      />

      <div className="absolute inset-0 flex flex-col justify-end items-start p-6 sm:p-10">
        <div className="max-w-2xl">
          <h1
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-2"
            style={{ color: palette.text }}
          >
            {zone.name}
          </h1>
          <p
            className="text-sm sm:text-base leading-relaxed mb-4 line-clamp-2"
            style={{ color: palette.textDim }}
          >
            {zone.description}
          </p>
          {zone.whatsapp && (
            <WhatsAppButton phone={zone.whatsapp} label="WhatsApp" />
          )}
        </div>
      </div>
    </section>
  );
}

export const ZoneHero = memo(ZoneHeroBase);
