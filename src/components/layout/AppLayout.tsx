
import React from "react";
import { useStory } from "@/context/StoryContext";
import LanguageSelector from "../LanguageSelector";
import { cn } from "@/lib/utils";

type AppLayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
};

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true,
  className = ""
}) => {
  const { userName } = useStory();
  
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && (
        <header className="bg-white/70 backdrop-blur-sm shadow-sm py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                PJ
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-pastel-purple bg-clip-text text-transparent">
                Period Journey
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {userName && (
                <span className="text-sm hidden md:inline-block">
                  Welcome, {userName}
                </span>
              )}
              <LanguageSelector />
            </div>
          </div>
        </header>
      )}
      
      <main className={cn("flex-1 py-8 px-4", className)}>
        {children}
      </main>
      
      {showFooter && (
        <footer className="bg-white/70 backdrop-blur-sm py-4 px-6 text-center text-sm text-foreground/70">
          <div className="max-w-7xl mx-auto">
            <p>Period Journey - A safe space to learn about your body</p>
            <p className="mt-1">
              All information is reviewed by healthcare professionals and designed for educational purposes.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default AppLayout;
