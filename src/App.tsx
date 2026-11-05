
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Secondary routes are code-split so the homepage loads only its own code.
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Treatments = lazy(() => import("./pages/treatments/Treatments"));
const AddictionCare = lazy(() => import("./pages/treatments/AddictionCare"));
const SciaticaRelief = lazy(() => import("./pages/treatments/SciaticaRelief"));
const KneePainManagement = lazy(() => import("./pages/treatments/KneePainManagement"));
const Auth = lazy(() => import("./pages/Auth"));
const AdminSeo = lazy(() => import("./pages/AdminSeo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LazyPage = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="min-h-screen"><Navbar /><Footer /></div>}>
    {children}
  </Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<LazyPage><Blog /></LazyPage>} />
          <Route path="/blog/:slug" element={<LazyPage><BlogPost /></LazyPage>} />
          <Route path="/treatments" element={<LazyPage><Treatments /></LazyPage>} />
          <Route path="/treatments/addiction" element={<LazyPage><AddictionCare /></LazyPage>} />
          <Route path="/treatments/sciatica" element={<LazyPage><SciaticaRelief /></LazyPage>} />
          <Route path="/treatments/knee-pain" element={<LazyPage><KneePainManagement /></LazyPage>} />
          <Route path="/auth" element={<LazyPage><Auth /></LazyPage>} />
          <Route path="/admin/seo" element={<LazyPage><AdminSeo /></LazyPage>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<LazyPage><NotFound /></LazyPage>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
