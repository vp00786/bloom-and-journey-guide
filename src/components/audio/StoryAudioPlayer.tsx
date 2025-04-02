
import React, { useState, useRef, useEffect } from "react";
import { useStory } from "@/context/StoryContext";
import { chapters } from "@/data/chapters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  
  const currentChapterId = userProgress.currentChapter;
  const currentChapter = chapters.find(c => c.id === currentChapterId);
  
  const handleSpeakStory = () => {
    if (!currentChapter) return;
    
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    
    const speech = new SpeechSynthesisUtterance();
    speech.text = currentChapter.content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    speech.volume = isMuted ? 0 : 1;
    
    // Try to set language based on selection
    switch(selectedLanguage) {
      case "hi": speech.lang = "hi-IN"; break;
      case "mr": speech.lang = "mr-IN"; break;
      case "ta": speech.lang = "ta-IN"; break;
      case "te": speech.lang = "te-IN"; break;
      case "ml": speech.lang = "ml-IN"; break;
      default: speech.lang = "en-US";
    }
    
    speech.onend = () => {
      setIsPlaying(false);
    };
    
    speech.onerror = () => {
      setIsPlaying(false);
      toast({
        title: "Narration Error",
        description: `Could not play audio in ${languages.find(l => l.code === selectedLanguage)?.name}. Try another language.`,
        duration: 3000,
      });
    };
    
    window.speechSynthesis.speak(speech);
    setIsPlaying(true);
  };
  
  useEffect(() => {
    // Clean up speech synthesis when component unmounts or chapter changes
    return () => {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    };
  }, [currentChapterId]);
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (isPlaying) {
      // If currently playing, restart narration with new volume
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setTimeout(() => handleSpeakStory(), 50);
    }
  };
  
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    
    if (isPlaying) {
      // If currently playing, restart narration with new language
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setTimeout(() => handleSpeakStory(), 50);
    }
  };
  
  if (!currentChapter) return null;
  
  return (
    <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Audio Narration</h3>
      
      <div className="flex flex-wrap items-center gap-4">
        <Button 
          onClick={handleSpeakStory}
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
