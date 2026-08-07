import { memo, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useCatalog } from "@/context/CatalogContext";
import { ZoneHero } from "@/components/ZoneHero";
import { BusinessGrid } from "@/components/BusinessGrid";

interface HomePageProps {
  onSelectBusiness: (id: string) => void;
}

function HomePageBase({ onSelectBusiness }: HomePageProps) {
  const { palette } = useTheme();
  const { getZone, getBusinesses } = useCatalog();

  const zone = getZone();
  const businesses = getBusinesses();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!zone) return null;

  return (
    <div className="min-h-screen pb-8" style={{ background: palette.gradient }}>
      <ZoneHero zone={zone} />
      <div className="max-w-5xl mx-auto">
        <div className="px-4 sm:px-6 pt-8 pb-2">
          <p
            className="text-sm leading-relaxed max-w-2xl"
            style={{ color: palette.textDim }}
          >
            {zone.description}
          </p>
        </div>
        <BusinessGrid businesses={businesses} onSelect={onSelectBusiness} />
      </div>
    </div>
  );
}

export const HomePage = memo(HomePageBase);
