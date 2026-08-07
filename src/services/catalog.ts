import {
  GITHUB_OWNER,
  GITHUB_REPO,
  GITHUB_BRANCH,
  CSV_ZONES,
  CSV_BUSINESSES,
  CSV_SERVICES,
  csvUrl,
} from "@/config/github";
import { parseCSV, toBool, toNum } from "@/utils/csv";
import { setAvailableFiles } from "@/utils/image";

import type { CatalogData, Zone, Business, ServicePhoto } from "@/models/types";

interface RepoFile {
  name: string;
  type: string;
}

export async function fetchRepoFileList(): Promise<string[]> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("NO_REPO_ACCESS");
  const data: RepoFile[] = await res.json();
  return data.filter((f) => f.type === "file").map((f) => f.name);
}

export async function fetchCSV(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("CSV_FETCH_FAILED");
  return res.text();
}

export interface ValidationResult {
  success: boolean;
  error?: string;
  data?: CatalogData;
}

export async function loadCatalog(): Promise<ValidationResult> {
  try {
    const files = await fetchRepoFileList();
    setAvailableFiles(files);

    if (!files.includes(CSV_ZONES)) return { success: false, error: "MISSING_ZONES_CSV" };
    if (!files.includes(CSV_BUSINESSES)) return { success: false, error: "MISSING_BUSINESSES_CSV" };
    if (!files.includes(CSV_SERVICES)) return { success: false, error: "MISSING_SERVICES_CSV" };

    const [zonesText, businessesText, servicesText] = await Promise.all([
      fetchCSV(csvUrl(CSV_ZONES)),
      fetchCSV(csvUrl(CSV_BUSINESSES)),
      fetchCSV(csvUrl(CSV_SERVICES)),
    ]);

    const zones = parseZones(zonesText);
    const businesses = parseBusinesses(businessesText);
    const services = parseServices(servicesText);

    if (zones.length === 0) return { success: false, error: "EMPTY_ZONES" };
    if (businesses.length === 0) return { success: false, error: "EMPTY_BUSINESSES" };

    const zoneIds = new Set(zones.map((z) => z.zone_id));
    const orphanBusinesses = businesses.filter((b) => !zoneIds.has(b.zone_id));
    if (orphanBusinesses.length > 0) {
      return { success: false, error: "ORPHAN_BUSINESS" };
    }

    const businessIds = new Set(businesses.map((b) => b.business_id));
    const orphanServices = services.filter(
      (s) => !businessIds.has(s.business_id) || !zoneIds.has(s.zone_id),
    );
    if (orphanServices.length > 0) {
      return { success: false, error: "ORPHAN_SERVICE" };
    }

    return {
      success: true,
      data: { zones, businesses, services },
    };
  } catch {
    return { success: false, error: "NETWORK_ERROR" };
  }
}

function parseZones(text: string): Zone[] {
  const rows = parseCSV(text);
  return rows.map((r) => ({
    zone_id: r.zone_id,
    name: r.name,
    description: r.description,
    hero_image: r.hero_image,
    whatsapp: r.whatsapp,
    facebook: r.facebook,
    instagram: r.instagram,
    active: toBool(r.active),
    display_order: toNum(r.display_order),
    created_at: r.created_at,
  }));
}

function parseBusinesses(text: string): Business[] {
  const rows = parseCSV(text);
  return rows.map((r) => ({
    business_id: r.business_id,
    zone_id: r.zone_id,
    name: r.name,
    description: r.description,
    whatsapp: r.whatsapp,
    address: r.address,
    maps: r.maps,
    facebook: r.facebook,
    instagram: r.instagram,
    website: r.website,
    service_type: r.service_type,
    featured: toBool(r.featured),
    active: toBool(r.active),
    display_order: toNum(r.display_order),
    created_at: r.created_at,
  }));
}

function parseServices(text: string): ServicePhoto[] {
  const rows = parseCSV(text);
  return rows.map((r) => ({
    photo_id: r.photo_id,
    zone_id: r.zone_id,
    business_id: r.business_id,
    title: r.title,
    description: r.description,
    display_order: toNum(r.display_order),
    active: toBool(r.active),
    created_at: r.created_at,
  }));
}
