import { useEffect, useRef, useState } from "react";

export function useImageLoader(src: string): { loaded: boolean; error: boolean } {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setLoaded(false);
    setError(false);

    if (!src) {
      setError(true);
      return;
    }

    const img = new Image();
    imgRef.current = img;

    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { loaded, error };
}
