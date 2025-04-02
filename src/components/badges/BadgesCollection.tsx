
import React from "react";
import { useStory } from "@/context/StoryContext";
import { badges } from "@/data/badges";
import Badge from "./Badge";

const BadgesCollection: React.FC = () => {
  const { userProgress } = useStory();
  const { unlockedBadges } = userProgress;
  
  return (
    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">Your Achievements</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <Badge
            key={badge.id}
            id={badge.id}
            name={badge.name}
            description={badge.description}
            icon={<span className="text-3xl">{badge.icon}</span>}
            isUnlocked={unlockedBadges.includes(badge.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgesCollection;
