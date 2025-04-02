
import React from "react";
import { useStory } from "@/context/StoryContext";
import Avatar from "./Avatar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const AvatarCustomizer: React.FC = () => {
  const { avatarOptions, updateAvatarOptions } = useStory();

  return (
    <div className="p-6 rounded-xl bg-pastel-purple/20 flex flex-col items-center gap-6">
      <h3 className="text-xl font-bold text-center">Customize Your Avatar</h3>
      
      <div className="mb-4">
        <Avatar options={avatarOptions} size="lg" className="shadow-md animate-float" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Hair Style */}
        <div className="p-4 bg-white/60 rounded-lg shadow-sm">
          <Label className="text-base font-semibold mb-2 block">Hair Style</Label>
          <RadioGroup
            value={avatarOptions.hairStyle}
            onValueChange={(value) => updateAvatarOptions({ hairStyle: value })}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="straight" id="hair-straight" />
              <Label htmlFor="hair-straight">Straight</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="curly" id="hair-curly" />
              <Label htmlFor="hair-curly">Curly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="short" id="hair-short" />
              <Label htmlFor="hair-short">Short</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Skin Tone */}
        <div className="p-4 bg-white/60 rounded-lg shadow-sm">
          <Label className="text-base font-semibold mb-2 block">Skin Tone</Label>
          <RadioGroup
            value={avatarOptions.skinTone}
            onValueChange={(value) => updateAvatarOptions({ skinTone: value })}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="skin-light" />
              <Label htmlFor="skin-light">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="skin-medium" />
              <Label htmlFor="skin-medium">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="skin-dark" />
              <Label htmlFor="skin-dark">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="deep" id="skin-deep" />
              <Label htmlFor="skin-deep">Deep</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Outfit */}
        <div className="p-4 bg-white/60 rounded-lg shadow-sm">
          <Label className="text-base font-semibold mb-2 block">Outfit</Label>
          <RadioGroup
            value={avatarOptions.outfit}
            onValueChange={(value) => updateAvatarOptions({ outfit: value })}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casual" id="outfit-casual" />
              <Label htmlFor="outfit-casual">Casual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sporty" id="outfit-sporty" />
              <Label htmlFor="outfit-sporty">Sporty</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="formal" id="outfit-formal" />
              <Label htmlFor="outfit-formal">Formal</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button className="mt-4 bg-pastel-pink hover:bg-pastel-pink/80 text-foreground" size="lg">
        Save Your Avatar
      </Button>
    </div>
  );
};

export default AvatarCustomizer;
