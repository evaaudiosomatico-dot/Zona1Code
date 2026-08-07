import { memo, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useCatalog } from "@/context/CatalogContext";
import { BusinessHero } from "@/components/BusinessHero";
import { Gallery } from "@/components/Gallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackButton } from "@/components/BackButton";

interface BusinessPageProps {
  businessId: string;
  onBack: () => void;
}

function BusinessPageBase({ businessId, onBack }: BusinessPageProps) {
  const { palette } = useTheme();
  const { getBusiness, getServicesForBusiness } = useCatalog();

  const business = getBusiness(businessId);
  const services = getServicesForBusiness(businessId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [businessId]);

  if (!business) return null;

  return (
    <div className="min-h-screen pb-24" style={{ background: palette.gradient }}>
      <div className="absolute top-4 left-4 z-30">
        <BackButton onClick={onBack} />
      </div>
      <BusinessHero business={business} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <p
          className="text-base leading-relaxed"
          style={{ color: palette.textDim }}
        >
          {business.description}
        </p>

        {business.address && (
          <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${palette.border}` }}>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: palette.primary }}
            >
              Ubicación
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: palette.textDim }}
            >
              {business.address}
            </p>
          </div>
        )}
      </div>

      <Gallery photos={services} />

      {business.whatsapp && (
        <WhatsAppButton phone={business.whatsapp} floating />
      )}
    </div>
  );
}

export const BusinessPage = memo(BusinessPageBase);
