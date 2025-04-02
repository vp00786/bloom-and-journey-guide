
import React, { useState } from "react";
import { useStory } from "@/context/StoryContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check, X, BookAudio } from "lucide-react";

type Question = {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
};

type QuizProps = {
  quizId: string;
  title: string;
  description: string;
  questions: Question[];
  onComplete: () => void;
};

const Quiz: React.FC<QuizProps> = ({
  quizId,
  title,
  description,
  questions,
  onComplete
}) => {
  const { saveQuizScore } = useStory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  
  const handleOptionSelect = (optionId: string) => {
    if (!isAnswerChecked) {
      setSelectedOption(optionId);
    }
  };
  
  const checkAnswer = () => {
    if (!selectedOption) return;
    
    const currentQ = questions[currentQuestion];
    const selectedAnswerIsCorrect = currentQ.options.find(
      opt => opt.id === selectedOption
    )?.isCorrect;
    
    if (selectedAnswerIsCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    setIsAnswerChecked(true);
  };
  
  const goToNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Quiz completed
      const score = Math.round((correctAnswers / questions.length) * 100);
      saveQuizScore(quizId, score);
      setIsQuizCompleted(true);
    }
  };
  
  const getCurrentQuestion = () => questions[currentQuestion];
  
  const renderQuizResults = () => {
    const score = Math.round((correctAnswers / questions.length) * 100);
    let message = "";
    
    if (score >= 80) {
      message = "Great job! You've mastered this topic!";
    } else if (score >= 60) {
      message = "Good work! You've learned a lot!";
    } else {
      message = "You're on your way to understanding. Keep learning!";
    }
    
    return (
      <div className="text-center p-6">
        <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
        <p className="text-lg mb-4">Your score: {score}%</p>
        <p className="mb-6">{message}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-primary hover:bg-primary/80"
            onClick={onComplete}
          >
            Continue Your Journey
          </Button>
          <Button 
            className="bg-accent hover:bg-accent/80 flex items-center gap-2"
            onClick={() => {
              onComplete();
              document.querySelector('[data-value="story"]')?.dispatchEvent(
                new MouseEvent('click', { bubbles: true })
              );
            }}
          >
            <BookAudio className="h-4 w-4" />
            Return to Story
          </Button>
        </div>
      </div>
    );
  };
  
  if (isQuizCompleted) {
    return (
      <Card className="quiz-container p-6 rounded-xl bg-white/80 backdrop-blur-sm">
        {renderQuizResults()}
      </Card>
    );
  }
  
  const currentQ = getCurrentQuestion();
  
  return (
    <Card className="quiz-container p-6 rounded-xl bg-white/80 backdrop-blur-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-foreground/70">{description}</p>
        <div className="w-full bg-pastel-gray h-2 rounded-full mt-4">
          <div 
            className="bg-primary h-full rounded-full"
            style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-right mt-1">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
      
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">{currentQ.text}</h4>
        
        <RadioGroup
          value={selectedOption || ""}
          onValueChange={handleOptionSelect}
          className="space-y-3"
        >
          {currentQ.options.map(option => {
            let optionClassName = "p-3 border rounded-lg transition-colors";
            
            if (isAnswerChecked) {
              if (option.isCorrect) {
                optionClassName = cn(optionClassName, "bg-accent/30 border-accent");
              } else if (option.id === selectedOption) {
                optionClassName = cn(optionClassName, "bg-pastel-pink/30 border-pastel-pink");
              }
            } else if (option.id === selectedOption) {
              optionClassName = cn(optionClassName, "bg-pastel-blue/20 border-pastel-blue");
            }
            
            return (
              <div
                key={option.id}
                className={optionClassName}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={option.id} 
                      id={option.id}
                      disabled={isAnswerChecked}
                    />
                    <Label htmlFor={option.id}>{option.text}</Label>
                  </div>
                  {isAnswerChecked && (
                    <div>
                      {option.isCorrect ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : option.id === selectedOption ? (
                        <X className="w-5 h-5 text-red-500" />
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </RadioGroup>
      </div>
      
      {isAnswerChecked && (
        <div className="mb-6 p-4 bg-pastel-yellow/30 rounded-lg">
          <p className="font-semibold">Explanation:</p>
          <p>{currentQ.explanation}</p>
        </div>
      )}
      
      <div className="flex justify-end">
        {!isAnswerChecked ? (
          <Button
            className="bg-primary hover:bg-primary/80"
            onClick={checkAnswer}
            disabled={!selectedOption}
          >
            Check Answer
          </Button>
        ) : (
          <Button
            className="bg-accent hover:bg-accent/80"
            onClick={goToNextQuestion}
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Quiz;
