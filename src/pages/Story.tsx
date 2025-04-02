
import React, { useState, useRef } from "react";
import { useStory } from "@/context/StoryContext";
import AppLayout from "@/components/layout/AppLayout";
import Avatar from "@/components/avatar/Avatar";
import AvatarCustomizer from "@/components/avatar/AvatarCustomizer";
import ChapterNav from "@/components/chapters/ChapterNav";
import StoryContent from "@/components/chapters/StoryContent";
import BadgesCollection from "@/components/badges/BadgesCollection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { quizzes } from "@/data/quizzes";
import Quiz from "@/components/quiz/Quiz";
import QASection from "@/components/qa/QASection";
import StoryAudioPlayer from "@/components/audio/StoryAudioPlayer";
import { ArrowLeft, Home } from "lucide-react";

const Story: React.FC = () => {
  const { userProgress, avatarOptions, completeChapter } = useStory();
  const [activeTab, setActiveTab] = useState("story");
  const [showQuiz, setShowQuiz] = useState(false);
  
  const currentChapterId = userProgress.currentChapter;
  const currentChapterQuiz = quizzes.find(q => q.chapterId === currentChapterId);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setShowQuiz(false);
  };
  
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  
  const handleQuizComplete = () => {
    setShowQuiz(false);
  };
  
  const handleGoToFirstChapter = () => {
    completeChapter(1);
    setActiveTab("story");
    setShowQuiz(false);
  };
  
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-sm p-4 text-center">
              <Avatar options={avatarOptions} size="lg" className="mx-auto animate-float" />
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => handleTabChange("avatar")}
              >
                Edit Avatar
              </Button>
            </div>
            
            <ChapterNav />
            
            <div className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2 bg-white/60 hover:bg-white/80"
                onClick={handleGoToFirstChapter}
              >
                <Home className="w-4 h-4" />
                <span>Back to Chapter 1</span>
              </Button>
              
              {currentChapterId > 1 && (
                <Button 
                  variant="outline" 
                  className="w-full flex items-center gap-2 bg-white/60 hover:bg-white/80"
                  onClick={() => completeChapter(currentChapterId - 1)}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Chapter</span>
                </Button>
              )}
            </div>
            
            <BadgesCollection />
          </div>
          
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="bg-white/60 backdrop-blur-sm w-full justify-start mb-6">
                <TabsTrigger value="story">Story</TabsTrigger>
                {currentChapterQuiz && <TabsTrigger value="quiz">Quiz</TabsTrigger>}
                <TabsTrigger value="q&a">Q&A</TabsTrigger>
                <TabsTrigger value="avatar">Avatar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="story">
                <StoryContent />
                <StoryAudioPlayer />
                
                {currentChapterQuiz && !showQuiz && (
                  <div className="mt-6 text-center">
                    <p className="mb-4">Ready to test your knowledge?</p>
                    <Button 
                      onClick={handleStartQuiz}
                      className="bg-accent hover:bg-accent/80"
                    >
                      Take the Quiz
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="quiz">
                {currentChapterQuiz && (
                  <Quiz 
                    quizId={currentChapterQuiz.id}
                    title={currentChapterQuiz.title}
                    description={currentChapterQuiz.description}
                    questions={currentChapterQuiz.questions}
                    onComplete={handleQuizComplete}
                  />
                )}
              </TabsContent>
              
              <TabsContent value="q&a">
                <QASection />
              </TabsContent>
              
              <TabsContent value="avatar">
                <div className="story-container">
                  <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Customize Your Avatar</h2>
                  <AvatarCustomizer />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Story;
