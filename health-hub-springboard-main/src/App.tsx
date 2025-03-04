
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Mental from "./pages/awareness/Mental";
import Heart from "./pages/awareness/Heart";
import Stomach from "./pages/awareness/Stomach";
import Kidney from "./pages/awareness/Kidney";
import Cancer from "./pages/awareness/Cancer";
import Tips from "./pages/Tips";
import BMI from "./pages/BMI";

// Layout
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Re-trigger AOS on route change
    document.addEventListener('routeChanged', () => {
      setTimeout(() => {
        if (window.AOS) window.AOS.refresh();
      }, 100);
    });
    
    // Clean up
    return () => {
      document.removeEventListener('routeChanged', () => {});
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="awareness/mental" element={<Mental />} />
              <Route path="awareness/heart" element={<Heart />} />
              <Route path="awareness/stomach" element={<Stomach />} />
              <Route path="awareness/kidney" element={<Kidney />} />
              <Route path="awareness/cancer" element={<Cancer />} />
              <Route path="tips" element={<Tips />} />
              <Route path="bmi" element={<BMI />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Add type definition for global AOS
declare global {
  interface Window {
    AOS: any;
  }
  interface DocumentEventMap {
    'routeChanged': CustomEvent;
  }
}

export default App;
