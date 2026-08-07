import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { loadCatalog, type ValidationResult } from "@/services/catalog";
import type { CatalogData, Business, ServicePhoto, Zone } from "@/models/types";

interface CatalogContextValue {
  data: CatalogData | null;
  loading: boolean;
  error: string | null;
  load: () => Promise<void>;
  getZone: () => Zone | null;
  getBusinesses: () => Business[];
  getBusiness: (id: string) => Business | null;
  getServicesForBusiness: (id: string) => ServicePhoto[];
}

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CatalogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const result: ValidationResult = await loadCatalog();
    if (result.success && result.data) {
      setData(result.data);
    } else {
      setError(result.error ?? "UNKNOWN_ERROR");
    }
    setLoading(false);
  }, []);

  const getZone = useCallback((): Zone | null => {
    if (!data || data.zones.length === 0) return null;
    return [...data.zones].sort((a, b) => a.display_order - b.display_order)[0];
  }, [data]);

  const getBusinesses = useCallback((): Business[] => {
    if (!data) return [];
    return data.businesses
      .filter((b) => b.active)
      .sort((a, b) => a.display_order - b.display_order);
  }, [data]);

  const getBusiness = useCallback(
    (id: string): Business | null => {
      if (!data) return null;
      return data.businesses.find((b) => b.business_id === id) ?? null;
    },
    [data],
  );

  const getServicesForBusiness = useCallback(
    (id: string): ServicePhoto[] => {
      if (!data) return [];
      return data.services
        .filter((s) => s.business_id === id && s.active)
        .sort((a, b) => a.display_order - b.display_order);
    },
    [data],
  );

  const value = useMemo<CatalogContextValue>(
    () => ({
      data,
      loading,
      error,
      load,
      getZone,
      getBusinesses,
      getBusiness,
      getServicesForBusiness,
    }),
    [data, loading, error, load, getZone, getBusinesses, getBusiness, getServicesForBusiness],
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog(): CatalogContextValue {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used within CatalogProvider");
  return ctx;
}
