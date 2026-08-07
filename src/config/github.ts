// ======================================================
// GITHUB CONFIG
// ======================================================
// Archivo único de configuración para toda la aplicación.
// Modifica únicamente este archivo para reutilizar el
// proyecto con otro repositorio de GitHub.
// ======================================================

export const GITHUB_OWNER = "evaaudiosomatico-dot";
export const GITHUB_REPO = "Zona1Bases";
export const GITHUB_BRANCH = "main";

export const CSV_ZONES = "zonas.csv";
export const CSV_BUSINESSES = "negocios.csv";
export const CSV_SERVICES = "servicios.csv";

export const CSV_FOLDER = "";
export const IMAGE_FOLDER = "";

export const PLACEHOLDER_IMAGE = "placeholder.png";

export const IMAGE_EXTENSIONS = ["png", "jpg"];

export function githubRaw(path: string): string {
  return `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${path}`;
}

export function csvUrl(file: string): string {
  return githubRaw(CSV_FOLDER ? `${CSV_FOLDER}/${file}` : file);
}

export function imageUrl(file: string): string {
  return githubRaw(IMAGE_FOLDER ? `${IMAGE_FOLDER}/${file}` : file);
}
