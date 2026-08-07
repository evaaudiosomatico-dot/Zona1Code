import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SmartImage } from "@/components/SmartImage";
import { galleryImage } from "@/utils/image";
import type { ServicePhoto } from "@/models/types";

interface GalleryProps {
  photos: ServicePhoto[];
}

function GalleryBase({ photos }: GalleryProps) {
  const { palette } = useTheme();

  if (photos.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 py-4">
      <h2
        className="text-lg font-semibold tracking-tight mb-4"
        style={{ color: palette.text }}
      >
        Galería
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6" style={{ scrollSnapType: "x mandatory" }}>
        {photos.map((photo) => {
          const src = galleryImage(photo.business_id, photo.photo_id);
          return (
            <div
              key={`${photo.business_id}_${photo.photo_id}`}
              className="flex-shrink-0 overflow-hidden"
              style={{
                width: "280px",
                borderRadius: "16px",
                scrollSnapAlign: "start",
                backgroundColor: palette.surface,
                border: `1px solid ${palette.border}`,
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: "16px 16px 0 0" }}>
                <SmartImage
                  src={src}
                  alt={photo.title}
                  className="w-full h-full"
                  imgClassName="w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3
                  className="text-sm font-semibold tracking-tight"
                  style={{ color: palette.text }}
                >
                  {photo.title}
                </h3>
                <p
                  className="text-xs mt-1 leading-relaxed line-clamp-2"
                  style={{ color: palette.textMuted }}
                >
                  {photo.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const Gallery = memo(GalleryBase);
