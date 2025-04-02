import React, { createContext, useContext, useState, useEffect } from "react";

// Avatar customization options
export type AvatarOptions = {
  hairStyle: string;
  skinTone: string;
  outfit: string;
  hairColor?: string;
};

// User progress tracking
export type UserProgress = {
  currentChapter: number;
  completedChapters: number[];
  unlockedBadges: string[];
  quizScores: Record<string, number>;
};

// Story character
export type Character = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

// App context state
type StoryContextType = {
  userName: string;
  setUserName: (name: string) => void;
  avatarOptions: AvatarOptions;
  updateAvatarOptions: (options: Partial<AvatarOptions>) => void;
  userProgress: UserProgress;
  completeChapter: (chapterNumber: number) => void;
  unlockBadge: (badgeId: string) => void;
  saveQuizScore: (quizId: string, score: number) => void;
  language: string;
  setLanguage: (language: string) => void;
  hasCompletedIntro: boolean;
  setHasCompletedIntro: (completed: boolean) => void;
};

// Default values
const defaultAvatarOptions: AvatarOptions = {
  hairStyle: "straight",
  skinTone: "medium",
  outfit: "casual",
  hairColor: "brown",
};

const defaultUserProgress: UserProgress = {
  currentChapter: 1,
  completedChapters: [],
  unlockedBadges: [],
  quizScores: {},
};

// Create context
const StoryContext = createContext<StoryContextType | undefined>(undefined);

// Context provider component
export const StoryProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [userName, setUserName] = useState<string>("");
  const [avatarOptions, setAvatarOptions] = useState<AvatarOptions>(defaultAvatarOptions);
  const [userProgress, setUserProgress] = useState<UserProgress>(defaultUserProgress);
  const [language, setLanguage] = useState<string>("en");
  const [hasCompletedIntro, setHasCompletedIntro] = useState<boolean>(false);

  // Load saved data from localStorage on initial render
  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    const savedAvatarOptions = localStorage.getItem("avatarOptions");
    const savedUserProgress = localStorage.getItem("userProgress");
    const savedLanguage = localStorage.getItem("language");
    const savedIntroStatus = localStorage.getItem("hasCompletedIntro");

    if (savedUserName) setUserName(savedUserName);
    if (savedAvatarOptions) setAvatarOptions(JSON.parse(savedAvatarOptions));
    if (savedUserProgress) setUserProgress(JSON.parse(savedUserProgress));
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedIntroStatus) setHasCompletedIntro(savedIntroStatus === "true");
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (userName) localStorage.setItem("userName", userName);
    localStorage.setItem("avatarOptions", JSON.stringify(avatarOptions));
    localStorage.setItem("userProgress", JSON.stringify(userProgress));
    localStorage.setItem("language", language);
    localStorage.setItem("hasCompletedIntro", String(hasCompletedIntro));
  }, [userName, avatarOptions, userProgress, language, hasCompletedIntro]);

  // Update avatar options
  const updateAvatarOptions = (options: Partial<AvatarOptions>) => {
    setAvatarOptions(prev => ({ ...prev, ...options }));
  };

  // Complete a chapter
  const completeChapter = (chapterNumber: number) => {
    setUserProgress(prev => {
      const completedChapters = prev.completedChapters.includes(chapterNumber)
        ? prev.completedChapters
        : [...prev.completedChapters, chapterNumber];
      
      return {
        ...prev,
        completedChapters,
        currentChapter: chapterNumber
      };
    });
  };

  // Unlock a badge
  const unlockBadge = (badgeId: string) => {
    setUserProgress(prev => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      return {
        ...prev,
        unlockedBadges: [...prev.unlockedBadges, badgeId]
      };
    });
  };

  // Save quiz score
  const saveQuizScore = (quizId: string, score: number) => {
    setUserProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: score
      }
    }));
  };

  const value = {
    userName,
    setUserName,
    avatarOptions,
    updateAvatarOptions,
    userProgress,
    completeChapter,
    unlockBadge,
    saveQuizScore,
    language,
    setLanguage,
    hasCompletedIntro,
    setHasCompletedIntro
  };

  return (
    <StoryContext.Provider value={value}>
      {children}
    </StoryContext.Provider>
  );
};

// Custom hook to use the context
export const useStory = () => {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
