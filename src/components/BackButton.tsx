import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

function BackButtonBase({ onClick }: BackButtonProps) {
  const { palette } = useTheme();

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        backgroundColor: palette.surface,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        color: palette.text,
        border: `1px solid ${palette.border}`,
      }}
      aria-label="Volver"
    >
      <ArrowLeft size={18} />
      Volver
    </button>
  );
}

export const BackButton = memo(BackButtonBase);
