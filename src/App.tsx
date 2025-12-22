
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Committee from "./pages/Committee";
import Program from "./pages/Program";
import ForAuthors from "./pages/ForAuthors";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import Conferences from "./pages/Conferences";
import NotFound from "./pages/NotFound";
import MessageAICTE from "./pages/MessageAICTE";
import WieHackerearth from "./pages/Events/WieHackerearth";
import ICEO from "./pages/Events/ICEO";
import PresentationSchedule from "./pages/Schedule/Presentation";
import KeynoteSchedule from "./pages/Schedule/Keynote";
import BestPaperAward from "./pages/Awards/BestPaper";
import YoungResearcherAward from "./pages/Awards/YoungResearcher";
import Guidelines from "./pages/Guidelines";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/program" element={<Program />} />
          <Route path="/for-authors" element={<ForAuthors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/conferences" element={<Conferences />} />

          <Route path="/message-aicte" element={<MessageAICTE />} />
          <Route path="/events/wie-hackerearth" element={<WieHackerearth />} />
          <Route path="/events/i-ceo" element={<ICEO />} />
          <Route path="/schedule/presentation" element={<PresentationSchedule />} />
          <Route path="/schedule/keynote" element={<KeynoteSchedule />} />
          <Route path="/awards/best-paper" element={<BestPaperAward />} />
          <Route path="/awards/young-researcher" element={<YoungResearcherAward />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
