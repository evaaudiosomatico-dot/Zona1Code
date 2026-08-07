export interface Palette {
  name: string;
  bg: string;
  bgAlt: string;
  surface: string;
  surfaceAlt: string;
  primary: string;
  primaryDim: string;
  accent: string;
  accentDim: string;
  text: string;
  textDim: string;
  textMuted: string;
  border: string;
  glow: string;
  gradient: string;
  gradientHero: string;
  skeletonFrom: string;
  skeletonTo: string;
}

const palettes: Palette[] = [
  {
    name: "Obsidian Gold",
    bg: "#0a0a0b",
    bgAlt: "#141416",
    surface: "rgba(26,26,28,0.72)",
    surfaceAlt: "rgba(38,38,42,0.65)",
    primary: "#d4af37",
    primaryDim: "#b8941f",
    accent: "#f5d76e",
    accentDim: "#c9a84a",
    text: "#f5f5f0",
    textDim: "#c4c4bc",
    textMuted: "#8a8a82",
    border: "rgba(212,175,55,0.18)",
    glow: "rgba(212,175,55,0.25)",
    gradient: "linear-gradient(135deg, #0a0a0b 0%, #1a1a1d 50%, #0d0d0f 100%)",
    gradientHero: "linear-gradient(180deg, rgba(10,10,11,0.3) 0%, rgba(10,10,11,0.85) 100%)",
    skeletonFrom: "rgba(212,175,55,0.08)",
    skeletonTo: "rgba(212,175,55,0.18)",
  },
  {
    name: "Obsidian Burgundy",
    bg: "#0c0809",
    bgAlt: "#1a1013",
    surface: "rgba(30,18,22,0.72)",
    surfaceAlt: "rgba(44,26,32,0.65)",
    primary: "#9e2a3a",
    primaryDim: "#7a1f2c",
    accent: "#c4455a",
    accentDim: "#a03548",
    text: "#f2eced",
    textDim: "#c8bcbf",
    textMuted: "#8a7e82",
    border: "rgba(196,69,90,0.18)",
    glow: "rgba(196,69,90,0.22)",
    gradient: "linear-gradient(135deg, #0c0809 0%, #1a1013 50%, #0e0a0b 100%)",
    gradientHero: "linear-gradient(180deg, rgba(12,8,9,0.3) 0%, rgba(12,8,9,0.85) 100%)",
    skeletonFrom: "rgba(196,69,90,0.08)",
    skeletonTo: "rgba(196,69,90,0.18)",
  },
  {
    name: "Obsidian Coffee",
    bg: "#0d0a08",
    bgAlt: "#1a1410",
    surface: "rgba(32,24,20,0.72)",
    surfaceAlt: "rgba(48,36,30,0.65)",
    primary: "#a06840",
    primaryDim: "#7e502f",
    accent: "#c89070",
    accentDim: "#a87454",
    text: "#f5f0eb",
    textDim: "#ccc2ba",
    textMuted: "#8c8278",
    border: "rgba(200,144,112,0.18)",
    glow: "rgba(200,144,112,0.22)",
    gradient: "linear-gradient(135deg, #0d0a08 0%, #1a1410 50%, #0e0b09 100%)",
    gradientHero: "linear-gradient(180deg, rgba(13,10,8,0.3) 0%, rgba(13,10,8,0.85) 100%)",
    skeletonFrom: "rgba(200,144,112,0.08)",
    skeletonTo: "rgba(200,144,112,0.18)",
  },
  {
    name: "Obsidian Plum",
    bg: "#0a080c",
    bgAlt: "#161020",
    surface: "rgba(28,22,38,0.72)",
    surfaceAlt: "rgba(42,32,54,0.65)",
    primary: "#8b5cf6",
    primaryDim: "#6d3fd1",
    accent: "#a78bfa",
    accentDim: "#8566e0",
    text: "#f3eef8",
    textDim: "#c8bed8",
    textMuted: "#8a8298",
    border: "rgba(167,139,250,0.18)",
    glow: "rgba(167,139,250,0.22)",
    gradient: "linear-gradient(135deg, #0a080c 0%, #161020 50%, #0c0a0e 100%)",
    gradientHero: "linear-gradient(180deg, rgba(10,8,12,0.3) 0%, rgba(10,8,12,0.85) 100%)",
    skeletonFrom: "rgba(167,139,250,0.08)",
    skeletonTo: "rgba(167,139,250,0.18)",
  },
  {
    name: "Midnight Blue",
    bg: "#080c14",
    bgAlt: "#0e1420",
    surface: "rgba(18,26,42,0.72)",
    surfaceAlt: "rgba(28,38,58,0.65)",
    primary: "#3b82f6",
    primaryDim: "#2563eb",
    accent: "#60a5fa",
    accentDim: "#3b82f6",
    text: "#eef2f8",
    textDim: "#bccbe0",
    textMuted: "#7a88a0",
    border: "rgba(96,165,250,0.18)",
    glow: "rgba(96,165,250,0.22)",
    gradient: "linear-gradient(135deg, #080c14 0%, #0e1420 50%, #0a0e16 100%)",
    gradientHero: "linear-gradient(180deg, rgba(8,12,20,0.3) 0%, rgba(8,12,20,0.85) 100%)",
    skeletonFrom: "rgba(96,165,250,0.08)",
    skeletonTo: "rgba(96,165,250,0.18)",
  },
  {
    name: "Emerald Night",
    bg: "#080d0b",
    bgAlt: "#0e1614",
    surface: "rgba(18,30,26,0.72)",
    surfaceAlt: "rgba(28,44,38,0.65)",
    primary: "#10b981",
    primaryDim: "#059669",
    accent: "#34d399",
    accentDim: "#10b981",
    text: "#eef5f2",
    textDim: "#bcd8cf",
    textMuted: "#7a9088",
    border: "rgba(52,211,153,0.18)",
    glow: "rgba(52,211,153,0.22)",
    gradient: "linear-gradient(135deg, #080d0b 0%, #0e1614 50%, #0a0f0d 100%)",
    gradientHero: "linear-gradient(180deg, rgba(8,13,11,0.3) 0%, rgba(8,13,11,0.85) 100%)",
    skeletonFrom: "rgba(52,211,153,0.08)",
    skeletonTo: "rgba(52,211,153,0.18)",
  },
  {
    name: "Rose Gold",
    bg: "#0d0a0b",
    bgAlt: "#1a1215",
    surface: "rgba(32,22,26,0.72)",
    surfaceAlt: "rgba(48,34,40,0.65)",
    primary: "#e8b4a0",
    primaryDim: "#c8907a",
    accent: "#f0c4b0",
    accentDim: "#d4a08e",
    text: "#f8f0ee",
    textDim: "#d4c8c4",
    textMuted: "#948278",
    border: "rgba(232,180,160,0.18)",
    glow: "rgba(232,180,160,0.22)",
    gradient: "linear-gradient(135deg, #0d0a0b 0%, #1a1215 50%, #0f0c0d 100%)",
    gradientHero: "linear-gradient(180deg, rgba(13,10,11,0.3) 0%, rgba(13,10,11,0.85) 100%)",
    skeletonFrom: "rgba(232,180,160,0.08)",
    skeletonTo: "rgba(232,180,160,0.18)",
  },
  {
    name: "Terracotta",
    bg: "#0d0a08",
    bgAlt: "#1a140f",
    surface: "rgba(30,22,18,0.72)",
    surfaceAlt: "rgba(46,34,28,0.65)",
    primary: "#c2410c",
    primaryDim: "#9a3412",
    accent: "#ea580c",
    accentDim: "#c2410c",
    text: "#f5ede8",
    textDim: "#c8b8ac",
    textMuted: "#8a7c70",
    border: "rgba(234,88,12,0.18)",
    glow: "rgba(234,88,12,0.22)",
    gradient: "linear-gradient(135deg, #0d0a08 0%, #1a140f 50%, #0f0c0a 100%)",
    gradientHero: "linear-gradient(180deg, rgba(13,10,8,0.3) 0%, rgba(13,10,8,0.85) 100%)",
    skeletonFrom: "rgba(234,88,12,0.08)",
    skeletonTo: "rgba(234,88,12,0.18)",
  },
];

export function pickRandomPalette(): Palette {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

export { palettes };
