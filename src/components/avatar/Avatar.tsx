
import React from "react";
import { AvatarOptions } from "@/context/StoryContext";

type AvatarProps = {
  options: AvatarOptions;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ 
  options, 
  size = "md", 
  className = "" 
}) => {
  const { hairStyle, skinTone, outfit } = options;
  
  // Size classes
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-48 h-48"
  };

  // Skin tone colors
  const skinToneColors: Record<string, string> = {
    light: "#FFDFC4",
    medium: "#F1C27D",
    dark: "#C68642",
    deep: "#8D5524"
  };

  // Hair colors
  const hairColors: Record<string, string> = {
    brown: "#6A4E42",
    black: "#2A1B0A",
    blonde: "#E6BE8A",
    red: "#8D4A43"
  };

  // Outfit colors based on outfit type
  const outfitColors: Record<string, { primary: string; secondary: string }> = {
    casual: { primary: "#F2B6D5", secondary: "#E5DEFF" },
    sporty: { primary: "#D3E4FD", secondary: "#F2FCE2" },
    formal: { primary: "#FDE1D3", secondary: "#FEF7CD" }
  };

  // Get the appropriate colors
  const skinColor = skinToneColors[skinTone] || skinToneColors.medium;
  const hairColor = hairColors.brown; // Default to brown for now
  const outfitColor = outfitColors[outfit] || outfitColors.casual;

  return (
    <div 
      className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      {/* Base face */}
      <div 
        className="absolute inset-0 rounded-full" 
        style={{ backgroundColor: skinColor }}
      />

      {/* Hair */}
      <div className="absolute inset-0">
        {hairStyle === "straight" && (
          <div className="absolute" style={{ top: "-10%", left: "-10%", right: "-10%", height: "50%", backgroundColor: hairColor, borderRadius: "100% 100% 0 0" }} />
        )}
        {hairStyle === "curly" && (
          <div className="absolute" style={{ top: "-15%", left: "-15%", right: "-15%", height: "55%", backgroundColor: hairColor, borderRadius: "100% 100% 50% 50%" }} />
        )}
        {hairStyle === "short" && (
          <div className="absolute" style={{ top: "-5%", left: "-5%", right: "-5%", height: "40%", backgroundColor: hairColor, borderRadius: "100% 100% 30% 30%" }} />
        )}
      </div>

      {/* Face features (simplified) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-3/4 h-1/2">
          {/* Eyes */}
          <div className="absolute flex justify-between w-full" style={{ top: "30%" }}>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
          
          {/* Smile */}
          <div 
            className="absolute bg-transparent w-1/2 h-2 mx-auto left-0 right-0" 
            style={{ 
              top: "60%", 
              borderBottom: "2px solid #000", 
              borderRadius: "0 0 10px 10px" 
            }}
          ></div>
        </div>
      </div>

      {/* Outfit (simplified) */}
      <div 
        className="absolute"
        style={{ 
          bottom: "-10%", 
          left: "-10%", 
          right: "-10%", 
          height: "50%", 
          background: `linear-gradient(180deg, ${outfitColor.primary} 0%, ${outfitColor.secondary} 100%)`,
          borderRadius: "50% 50% 0 0 / 20% 20% 0 0"
        }}
      />
    </div>
  );
};

export default Avatar;
