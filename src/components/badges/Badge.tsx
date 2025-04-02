
import React from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type BadgeProps = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  isUnlocked: boolean;
  className?: string;
  iconsOnly?: boolean;
};

const Badge: React.FC<BadgeProps> = ({
  name,
  description,
  icon,
  isUnlocked,
  className,
  iconsOnly = false,
}) => {
  const badgeContent = (
    <div
      className={cn(
        "rounded-lg text-center transition-all duration-300",
        isUnlocked 
          ? "badge-unlocked" 
          : "badge-locked opacity-70 grayscale",
        iconsOnly ? "p-2" : "p-4",
        className
      )}
    >
      <div className="mb-2">
        <div className={cn(
          "flex items-center justify-center mx-auto rounded-full",
          isUnlocked ? "bg-white/40" : "bg-gray-200/50",
          iconsOnly ? "w-12 h-12" : "w-16 h-16"
        )}>
          {icon}
        </div>
      </div>
      {!iconsOnly && (
        <>
          <h3 className="font-bold text-lg">{name}</h3>
          {description && (
            <p className="text-sm mt-1 text-foreground/80">{description}</p>
          )}
        </>
      )}
    </div>
  );
  
  return iconsOnly ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badgeContent}
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold">{name}</p>
          {isUnlocked ? (
            <p className="text-xs opacity-80">Unlocked!</p>
          ) : (
            <p className="text-xs opacity-80">Continue your journey to unlock</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    badgeContent
  );
};

export default Badge;
