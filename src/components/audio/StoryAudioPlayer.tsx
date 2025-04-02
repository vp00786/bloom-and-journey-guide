
import React, { useState, useRef, useEffect } from "react";
import { useStory } from "@/context/StoryContext";
import { chapters } from "@/data/chapters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" }
];

const StoryAudioPlayer: React.FC = () => {
  const { userProgress, language: contextLanguage } = useStory();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(contextLanguage || "en");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const currentChapterId = userProgress.currentChapter;
  const currentChapter = chapters.find(c => c.id === currentChapterId);
  
  // This would be replaced with actual audio files in a production environment
  // For now, we'll simulate audio playback
  const getAudioUrl = (chapterId: number, language: string) => {
    return `https://example.com/audio/${language}/chapter_${chapterId}.mp3`;
  };
  
  useEffect(() => {
    // Reset audio state when chapter changes
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [currentChapterId]);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // In a real implementation, we would set the src here if it hasn't been set
      // For demo purposes, we'll just simulate playback
      audioRef.current.play().catch(error => {
        console.error("Failed to play audio:", error);
        // Show a user-friendly error message in a real app
      });
    }
    
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setIsPlaying(false);
    
    if (audioRef.current) {
      audioRef.current.pause();
      // In a real implementation, we would update the src here
      // audioRef.current.src = getAudioUrl(currentChapterId, value);
      audioRef.current.currentTime = 0;
    }
  };
  
  if (!currentChapter) return null;
  
  return (
    <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Audio Narration</h3>
      
      <div className="flex flex-wrap items-center gap-4">
        <Button 
          onClick={togglePlay}
          variant="outline"
          className="flex items-center gap-2"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isPlaying ? "Pause" : "Play"} Narration
        </Button>
        
        <Button
          onClick={toggleMute}
          variant="ghost"
          size="icon"
          className="rounded-full"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
        
        <div className="flex-grow">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src={getAudioUrl(currentChapterId, selectedLanguage)}
        onEnded={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      />
      
      <div className="mt-3 text-sm text-gray-500">
        <p>
          Listen to this chapter in your preferred language. Chapter audio is
          available in English, Hindi, Marathi, Tamil, Telugu, and Malayalam.
        </p>
      </div>
    </div>
  );
};

export default StoryAudioPlayer;
