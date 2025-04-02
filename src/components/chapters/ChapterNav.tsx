
import React from "react";
import { useStory } from "@/context/StoryContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { chapters } from "@/data/chapters";

const ChapterNav: React.FC = () => {
  const { userProgress } = useStory();
  const { currentChapter, completedChapters } = userProgress;

  return (
    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">Your Journey</h3>
      
      <div className="space-y-3">
        {chapters.map((chapter) => {
          const isCompleted = completedChapters.includes(chapter.id);
          const isCurrent = currentChapter === chapter.id;
          const isLocked = chapter.id > currentChapter;
          
          let statusClass = "";
          if (isCompleted) statusClass = "chapter-complete";
          else if (isCurrent) statusClass = "chapter-current";
          else if (isLocked) statusClass = "chapter-locked";
          
          return (
            <div
              key={chapter.id}
              className={cn(
                "p-3 bg-white/80 rounded-md transition-all",
                statusClass,
                isLocked ? "opacity-50" : "hover:bg-white"
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{chapter.title}</h4>
                  <p className="text-sm text-foreground/70">{chapter.subtitle}</p>
                </div>
                <div>
                  {isCompleted && (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-accent rounded-full">
                      ✓
                    </span>
                  )}
                  {isCurrent && (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-primary rounded-full text-white">
                      ↪
                    </span>
                  )}
                  {isLocked && (
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-pastel-gray rounded-full">
                      🔒
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterNav;
