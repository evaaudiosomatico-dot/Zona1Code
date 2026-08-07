import { imageUrl } from "@/config/github";

let availableFiles: Set<string> = new Set();

export function setAvailableFiles(names: string[]): void {
  availableFiles = new Set(names.map((n) => n.toLowerCase()));
}

function resolveExt(baseName: string, extensions: string[]): string {
  for (const ext of extensions) {
    const fileName = `${baseName}.${ext}`.toLowerCase();
    if (availableFiles.has(fileName)) {
      return imageUrl(`${baseName}.${ext}`);
    }
  }
  return "";
}

export function zoneImage(zoneId: string): string {
  return resolveExt(zoneId, ["png", "jpg"]);
}

export function businessImage(businessId: string): string {
  return resolveExt(businessId, ["png", "jpg"]);
}

export function galleryImage(businessId: string, photoId: string): string {
  return resolveExt(`${businessId}_${photoId}`, ["png", "jpg"]);
}
