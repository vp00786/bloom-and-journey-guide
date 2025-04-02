
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { commonQuestions } from "@/data/qa";

const QASection: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [askedQuestions, setAskedQuestions] = useState<
    { question: string; answer: string }[]
  >([]);
  
  const handleSubmitQuestion = () => {
    if (!question.trim()) return;
    
    // Simulate AI response - in a real implementation, this would call an AI service
    const matchedQuestion = commonQuestions.find(
      q => q.question.toLowerCase().includes(question.toLowerCase()) || 
           question.toLowerCase().includes(q.question.toLowerCase())
    );
    
    let answer = "";
    if (matchedQuestion) {
      answer = matchedQuestion.answer;
    } else {
      answer = "That's a great question! For this specific question, it might be helpful to talk to a trusted adult, school nurse, or doctor for more information. They can give you personalized advice.";
    }
    
    setAskedQuestions(prev => [{ question, answer }, ...prev]);
    setQuestion("");
  };
  
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Questions & Answers</h3>
      <p className="mb-6 text-foreground/70">
        Have a question about periods? Ask here or explore common questions below.
      </p>
      
      <div className="flex gap-2 mb-8">
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="bg-white/60"
        />
        <Button 
          onClick={handleSubmitQuestion}
          className="bg-primary hover:bg-primary/80"
        >
          Ask
        </Button>
      </div>
      
      {askedQuestions.length > 0 && (
        <div className="mb-8">
          <h4 className="font-semibold text-lg mb-2">Your Questions</h4>
          <Accordion type="single" collapsible className="space-y-2">
            {askedQuestions.map((q, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/40 rounded-md overflow-hidden">
                <AccordionTrigger className="px-4 py-2 hover:bg-white/60">
                  {q.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2 bg-white/60">
                  {q.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
      
      <div>
        <h4 className="font-semibold text-lg mb-2">Common Questions</h4>
        <Accordion type="single" collapsible className="space-y-2">
          {commonQuestions.slice(0, 5).map((q, index) => (
            <AccordionItem key={index} value={`common-${index}`} className="bg-white/40 rounded-md overflow-hidden">
              <AccordionTrigger className="px-4 py-2 hover:bg-white/60">
                {q.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-white/60">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  );
};

export default QASection;
