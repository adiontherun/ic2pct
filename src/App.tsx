
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import Program from "./pages/Program";
import ForAuthors from "./pages/ForAuthors";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import Conferences from "./pages/Conferences";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/program" element={<Program />} />
          <Route path="/for-authors" element={<ForAuthors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/conferences" element={<Conferences />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
