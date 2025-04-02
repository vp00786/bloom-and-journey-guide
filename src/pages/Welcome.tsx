
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStory } from "@/context/StoryContext";
import AppLayout from "@/components/layout/AppLayout";
import AvatarCustomizer from "@/components/avatar/AvatarCustomizer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { userName, setUserName, setHasCompletedIntro } = useStory();
  const [name, setName] = useState(userName || "");
  const [step, setStep] = useState(1);
  
  const handleContinue = () => {
    if (step === 1) {
      if (name.trim()) {
        setUserName(name.trim());
        setStep(2);
      }
    } else {
      setHasCompletedIntro(true);
      navigate("/story");
    }
  };
  
  return (
    <AppLayout className="max-w-5xl mx-auto" showHeader={false}>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-pastel-purple bg-clip-text text-transparent">
          Welcome to Luna
        </h1>
        <p className="text-xl">
          A friendly guide to understanding your first period
        </p>
      </div>
      
      <Card className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg max-w-3xl mx-auto">
        {step === 1 ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">
              Let's start your journey!
            </h2>
            <p className="mb-8">
              Hi there! We're excited to join you on this adventure to learn about periods.
              This is a safe space where you can explore, ask questions, and prepare for this
              important milestone in your life.
            </p>
            
            <div className="max-w-sm mx-auto mb-8">
              <label htmlFor="name" className="block text-left mb-2 font-medium">
                What should we call you?
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name or nickname"
                className="bg-white"
              />
            </div>
            
            <Button 
              onClick={handleContinue}
              disabled={!name.trim()}
              className="bg-primary hover:bg-primary/80 text-foreground"
              size="lg"
            >
              Continue
            </Button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create Your Avatar
            </h2>
            <p className="text-center mb-8">
              Hi {name}! Now, let's create an avatar that represents you on this journey.
            </p>
            
            <AvatarCustomizer />
            
            <div className="mt-8 text-center">
              <Button 
                onClick={handleContinue}
                className="bg-primary hover:bg-primary/80 text-foreground"
                size="lg"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        )}
      </Card>
    </AppLayout>
  );
};

export default Welcome;
