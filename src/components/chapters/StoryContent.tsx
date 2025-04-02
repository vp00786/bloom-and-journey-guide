
import React from "react";
import { useStory } from "@/context/StoryContext";
import { chapters } from "@/data/chapters";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const StoryContent: React.FC = () => {
  const { userProgress, completeChapter, unlockBadge } = useStory();
  const { currentChapter, completedChapters } = userProgress;
  
  const chapter = chapters.find(c => c.id === currentChapter);
  
  if (!chapter) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Chapter not found</h3>
        <p>Oops! We couldn't find this chapter. Please go back to the beginning.</p>
      </Card>
    );
  }
  
  const handleCompleteChapter = () => {
    completeChapter(currentChapter);
    if (chapter.badgeReward) {
      unlockBadge(chapter.badgeReward);
    }
  };
  
  const isCompleted = completedChapters.includes(currentChapter);
  
  return (
    <Card className="story-container">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-primary-foreground">{chapter.title}</h2>
        <p className="text-xl text-foreground/70">{chapter.subtitle}</p>
      </div>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />
      
      <div className="mt-8 flex justify-between items-center">
        <Button 
          variant="outline"
          onClick={() => {
            if (currentChapter > 1) {
              completeChapter(currentChapter - 1);
            }
          }}
          disabled={currentChapter === 1}
        >
          Previous Chapter
        </Button>
        
        {!isCompleted ? (
          <Button 
            className="bg-primary hover:bg-primary/80"
            onClick={handleCompleteChapter}
          >
            Complete Chapter
          </Button>
        ) : (
          <Button 
            className="bg-accent hover:bg-accent/80"
            onClick={() => {
              if (currentChapter < chapters.length) {
                completeChapter(currentChapter + 1);
              }
            }}
            disabled={currentChapter === chapters.length}
          >
            Next Chapter
          </Button>
        )}
      </div>
    </Card>
  );
};

export default StoryContent;
