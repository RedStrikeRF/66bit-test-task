import { useState, useEffect } from "react";
import { AppRouter } from "@app/providers";
import { Header } from "@widgets/Header";
import { ThemeProvider } from "@app/providers";
import { Loader } from "@shared/ui";

import './index.scss';
import '../shared/styles/styles.scss';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="content">
          <AppRouter />
        </main>
      </div>
    </ThemeProvider>
  );
};
