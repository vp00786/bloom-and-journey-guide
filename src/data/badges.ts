
type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string; // We'll use a simple emoji representation
};

export const badges: Badge[] = [
  {
    id: "journey_starter",
    name: "Journey Starter",
    description: "Started your period adventure!",
    icon: "🌱"
  },
  {
    id: "body_explorer",
    name: "Body Explorer",
    description: "Learned about how your body works",
    icon: "🔍"
  },
  {
    id: "symptom_sleuth",
    name: "Symptom Sleuth",
    description: "Discovered what to expect during your period",
    icon: "🕵️‍♀️"
  },
  {
    id: "product_pro",
    name: "Product Pro",
    description: "Mastered knowledge about period products",
    icon: "🛍️"
  },
  {
    id: "self_care_star",
    name: "Self-Care Star",
    description: "Learned how to take care of yourself during your period",
    icon: "⭐"
  },
  {
    id: "quiz_champion",
    name: "Quiz Champion",
    description: "Completed all quizzes with at least 80% score",
    icon: "🏆"
  },
  {
    id: "curious_mind",
    name: "Curious Mind",
    description: "Asked 5 questions in the Q&A section",
    icon: "🧠"
  },
  {
    id: "period_graduate",
    name: "Period Graduate",
    description: "Completed the entire journey!",
    icon: "🎓"
  }
];
