
import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  isUnlocked: boolean;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({
  name,
  description,
  icon,
  isUnlocked,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-4 rounded-lg text-center transition-all duration-300",
        isUnlocked 
          ? "badge-unlocked" 
          : "badge-locked opacity-70 grayscale",
        className
      )}
    >
      <div className="mb-2">
        <div className={cn(
          "w-16 h-16 flex items-center justify-center mx-auto rounded-full",
          isUnlocked ? "bg-white/40" : "bg-gray-200/50"
        )}>
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm mt-1 text-foreground/80">{description}</p>
    </div>
  );
};

export default Badge;
