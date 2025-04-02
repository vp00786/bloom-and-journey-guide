
import React from "react";
import { useStory } from "@/context/StoryContext";
import { badges } from "@/data/badges";
import Badge from "./Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const BadgesCollection: React.FC = () => {
  const { userProgress } = useStory();
  const { unlockedBadges } = userProgress;
  
  return (
    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">Your Achievements</h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {badges.map((badge) => (
          <TooltipProvider key={badge.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Badge
                    id={badge.id}
                    name={badge.name}
                    description=""
                    icon={<span className="text-3xl">{badge.icon}</span>}
                    isUnlocked={unlockedBadges.includes(badge.id)}
                    className="p-2"
                    iconsOnly
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{badge.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default BadgesCollection;
