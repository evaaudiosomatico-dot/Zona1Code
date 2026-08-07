import { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { CatalogProvider, useCatalog } from "@/context/CatalogContext";
import { HomePage } from "@/pages/HomePage";
import { BusinessPage } from "@/pages/BusinessPage";
import { LoadingScreen } from "@/pages/LoadingScreen";
import { ErrorScreen } from "@/components/ErrorScreen";
import { useTheme } from "@/context/ThemeContext";
import type { View } from "@/models/types";

function AppContent() {
  const { palette } = useTheme();
  const { loading, error, load } = useCatalog();
  const [view, setView] = useState<View>({ name: "home" });

  useEffect(() => {
    load();
  }, [load]);

  const handleSelectBusiness = useCallback((id: string) => {
    setView({ name: "business", businessId: id });
  }, []);

  const handleBack = useCallback(() => {
    setView({ name: "home" });
  }, []);

  const handleRetry = useCallback(() => {
    load();
  }, [load]);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} onRetry={handleRetry} />;

  return (
    <div style={{ background: palette.gradient, minHeight: "100vh" }}>
      {view.name === "home" && <HomePage onSelectBusiness={handleSelectBusiness} />}
      {view.name === "business" && (
        <BusinessPage businessId={view.businessId} onBack={handleBack} />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CatalogProvider>
        <AppContent />
      </CatalogProvider>
    </ThemeProvider>
  );
}

export default App;
