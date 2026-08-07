import { memo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorScreenProps {
  error: string;
  onRetry: () => void;
}

const errorMessages: Record<string, string> = {
  MISSING_ZONES_CSV: "No se encontró el archivo de zonas en el repositorio.",
  MISSING_BUSINESSES_CSV: "No se encontró el archivo de negocios en el repositorio.",
  MISSING_SERVICES_CSV: "No se encontró el archivo de servicios en el repositorio.",
  EMPTY_ZONES: "El archivo de zonas no contiene información válida.",
  EMPTY_BUSINESSES: "El archivo de negocios no contiene información válida.",
  ORPHAN_BUSINESS: "Hay negocios que no pertenecen a ninguna zona registrada.",
  ORPHAN_SERVICE: "Hay servicios que no pertenecen a ningún negocio registrado.",
  NETWORK_ERROR: "No se pudo conectar con el repositorio. Verifica tu conexión.",
  NO_REPO_ACCESS: "No se pudo acceder al repositorio de GitHub.",
  UNKNOWN_ERROR: "Ocurrió un problema inesperado al cargar la información.",
};

function ErrorScreenBase({ error, onRetry }: ErrorScreenProps) {
  const { palette } = useTheme();
  const message = errorMessages[error] ?? errorMessages.UNKNOWN_ERROR;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{ background: palette.gradient }}
    >
      <div
        className="max-w-md w-full p-8 flex flex-col items-center text-center"
        style={{
          backgroundColor: palette.surface,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: `1px solid ${palette.border}`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{
            backgroundColor: `${palette.primary}15`,
            border: `1px solid ${palette.border}`,
          }}
        >
          <AlertCircle size={32} color={palette.primary} />
        </div>
        <h1
          className="text-xl font-bold tracking-tight mb-3"
          style={{ color: palette.text }}
        >
          No se pudo cargar el catálogo
        </h1>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: palette.textDim }}
        >
          {message}
        </p>
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: palette.primary,
            color: palette.bg,
            boxShadow: `0 4px 20px ${palette.glow}`,
          }}
        >
          <RefreshCw size={18} />
          Reintentar
        </button>
      </div>
    </div>
  );
}

export const ErrorScreen = memo(ErrorScreenBase);
