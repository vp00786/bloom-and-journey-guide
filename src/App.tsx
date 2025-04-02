
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StoryProvider, useStory } from "./context/StoryContext";
import Welcome from "./pages/Welcome";
import Story from "./pages/Story";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { hasCompletedIntro } = useStory();
  
  if (!hasCompletedIntro) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

// App with routes
const AppRoutes = () => {
  const { hasCompletedIntro } = useStory();
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={hasCompletedIntro ? <Navigate to="/story" replace /> : <Welcome />} 
      />
      <Route 
        path="/story" 
        element={
          <ProtectedRoute>
            <Story />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Main App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <StoryProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </StoryProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
