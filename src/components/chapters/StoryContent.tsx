
import React, { useState } from "react";
import { useStory } from "@/context/StoryContext";
import { chapters } from "@/data/chapters";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Heart, Calendar, Droplet, ThumbsUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const StoryContent: React.FC = () => {
  const { userProgress, completeChapter, unlockBadge } = useStory();
  const { currentChapter, completedChapters } = userProgress;
  const { toast } = useToast();
  const [showExplanation, setShowExplanation] = useState<string | null>(null);
  
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
      toast({
        title: "Badge Unlocked!",
        description: `You've earned the ${chapters.find(c => c.badgeReward === chapter.badgeReward)?.title} badge!`,
        duration: 3000,
      });
    }
  };
  
  const isCompleted = completedChapters.includes(currentChapter);
  const isLastChapter = currentChapter === chapters.length;
  
  const handleIconClick = (iconName: string) => {
    const explanations: Record<string, string> = {
      "calendar": "The menstrual cycle typically lasts 28 days, but can range from 21-35 days. It's helpful to track your period with a calendar.",
      "heart": "It's normal to experience mood changes during your period due to hormonal shifts. Be kind to yourself during this time.",
      "droplet": "Period flow can be light, medium, or heavy, and can vary in color from bright red to dark brown.",
      "product": "There are many period products to choose from, including pads, tampons, menstrual cups, and period underwear.",
    };
    
    setShowExplanation(showExplanation === iconName ? null : iconName);
    
    if (!explanations[iconName]) {
      return;
    }
    
    toast({
      title: `${iconName.charAt(0).toUpperCase() + iconName.slice(1)} Info`,
      description: explanations[iconName],
      duration: 5000,
    });
  };
  
  return (
    <Card className="story-container relative">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-primary-foreground">{chapter.title}</h2>
        <p className="text-xl text-foreground/70">{chapter.subtitle}</p>
      </div>
      
      <div className="absolute top-4 right-4 flex gap-2">
        <Button 
          variant="outline" 
          size="icon"
          className="rounded-full bg-white/60 hover:bg-white/80"
          onClick={() => handleIconClick("calendar")}
        >
          <Calendar className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          className="rounded-full bg-white/60 hover:bg-white/80"
          onClick={() => handleIconClick("heart")}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          className="rounded-full bg-white/60 hover:bg-white/80"
          onClick={() => handleIconClick("droplet")}
        >
          <Droplet className="h-4 w-4" />
        </Button>
      </div>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />
      
      {showExplanation && (
        <div className="mt-4 p-4 rounded-lg bg-pastel-pink/30 animate-fade-in">
          <p>{showExplanation}</p>
        </div>
      )}
      
      <div className="mt-8 flex justify-between items-center">
        <Button 
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => {
            if (currentChapter > 1) {
              completeChapter(currentChapter - 1);
            }
          }}
          disabled={currentChapter === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        {!isCompleted ? (
          <Button 
            className="bg-primary hover:bg-primary/80 animate-pulse"
            onClick={handleCompleteChapter}
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Complete Chapter
          </Button>
        ) : !isLastChapter ? (
          <Button 
            className="bg-accent hover:bg-accent/80 flex items-center gap-2"
            onClick={() => {
              if (currentChapter < chapters.length) {
                completeChapter(currentChapter + 1);
              }
            }}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button 
            className="bg-accent hover:bg-accent/80"
            onClick={() => {
              toast({
                title: "Congratulations! 🎉",
                description: "You've completed all chapters! You're now a Period Graduate!",
                duration: 5000,
              });
              unlockBadge("period_graduate");
            }}
          >
            Celebrate Completion
          </Button>
        )}
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Chapter {currentChapter} of {chapters.length}</p>
      </div>
    </Card>
  );
};

export default StoryContent;
