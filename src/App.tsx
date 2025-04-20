import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Dates from './components/Dates';
import Contact from './components/Contact';
import { useEffect } from "react";

// Preload all translation files to ensure they're bundled
import './translations/en.json';
import './translations/uk.json';
import './translations/ru.json';

const queryClient = new QueryClient();

// Language route handler component
const LanguageRoute = ({ children }: { children: React.ReactNode }) => {
  const { language, setLanguage } = useLanguage();
  
  // Get language from URL path
  useEffect(() => {
    const path = window.location.pathname;
    
    if (path.startsWith('/en')) {
      setLanguage('en');
    } else if (path.startsWith('/uk')) {
      setLanguage('uk');
    } else if (path.startsWith('/ru')) {
      setLanguage('ru');
    }
  }, [setLanguage]);
  
  return <>{children}</>;
};

const AppContent = () => {
  const { language } = useLanguage();
  
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Language-specific routes */}
          <Route path="/:lang" element={
            <LanguageRoute>
              <Index />
            </LanguageRoute>
          } />
          
          {/* Default route - redirect to preferred language */}
          <Route path="/" element={<Navigate to={`/${language}`} replace />} />
          
          {/* Component preview routes */}
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
