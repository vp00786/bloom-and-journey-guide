
type QuizQuestion = {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
};

type Quiz = {
  id: string;
  chapterId: number;
  title: string;
  description: string;
  questions: QuizQuestion[];
};

export const quizzes: Quiz[] = [
  {
    id: "understanding_body_quiz",
    chapterId: 2,
    title: "Understanding Your Body",
    description: "Test your knowledge about the menstrual cycle!",
    questions: [
      {
        id: "q1",
        text: "What is a period?",
        options: [
          {
            id: "q1_a",
            text: "When your body releases blood and tissue from the uterus",
            isCorrect: true
          },
          {
            id: "q1_b",
            text: "When you grow taller",
            isCorrect: false
          },
          {
            id: "q1_c",
            text: "When you get sick",
            isCorrect: false
          },
          {
            id: "q1_d",
            text: "When you're hungry",
            isCorrect: false
          }
        ],
        explanation: "A period, or menstruation, is when your body releases blood and tissue from the uterus through your vagina. This happens because the egg released that month wasn't fertilized."
      },
      {
        id: "q2",
        text: "How long does a period usually last?",
        options: [
          {
            id: "q2_a",
            text: "1-2 days",
            isCorrect: false
          },
          {
            id: "q2_b",
            text: "3-7 days",
            isCorrect: true
          },
          {
            id: "q2_c",
            text: "2 weeks",
            isCorrect: false
          },
          {
            id: "q2_d",
            text: "1 month",
            isCorrect: false
          }
        ],
        explanation: "Most periods last between 3 and 7 days, with the flow often being heavier during the first few days and then becoming lighter."
      },
      {
        id: "q3",
        text: "What is the menstrual cycle?",
        options: [
          {
            id: "q3_a",
            text: "Just the days when you're bleeding",
            isCorrect: false
          },
          {
            id: "q3_b",
            text: "The time between one period and the next",
            isCorrect: true
          },
          {
            id: "q3_c",
            text: "A type of exercise",
            isCorrect: false
          },
          {
            id: "q3_d",
            text: "A bicycle for girls",
            isCorrect: false
          }
        ],
        explanation: "The menstrual cycle is the entire process from the beginning of one period to the beginning of the next. It typically ranges from 21 to 35 days and includes various hormonal changes throughout."
      }
    ]
  },
  {
    id: "what_to_expect_quiz",
    chapterId: 3,
    title: "What to Expect",
    description: "Let's test your knowledge about period symptoms and what to expect!",
    questions: [
      {
        id: "q1",
        text: "What is PMS?",
        options: [
          {
            id: "q1_a",
            text: "A popular messaging service",
            isCorrect: false
          },
          {
            id: "q1_b",
            text: "Physical and emotional symptoms before your period",
            isCorrect: true
          },
          {
            id: "q1_c",
            text: "A type of pad",
            isCorrect: false
          },
          {
            id: "q1_d",
            text: "Post-menstrual sickness",
            isCorrect: false
          }
        ],
        explanation: "PMS stands for Premenstrual Syndrome, which refers to physical and emotional symptoms that occur before your period starts. These can include mood swings, cramps, bloating, and more."
      },
      {
        id: "q2",
        text: "What color might period blood be?",
        options: [
          {
            id: "q2_a",
            text: "Only bright red",
            isCorrect: false
          },
          {
            id: "q2_b",
            text: "Only brown",
            isCorrect: false
          },
          {
            id: "q2_c",
            text: "It could be red, dark red, or brown",
            isCorrect: true
          },
          {
            id: "q2_d",
            text: "Always blue like in commercials",
            isCorrect: false
          }
        ],
        explanation: "Period blood can vary in color from bright red to dark red to brown. The color can change throughout your period and is completely normal."
      },
      {
        id: "q3",
        text: "Which of these is NOT a common period symptom?",
        options: [
          {
            id: "q3_a",
            text: "Cramps",
            isCorrect: false
          },
          {
            id: "q3_b",
            text: "Mood changes",
            isCorrect: false
          },
          {
            id: "q3_c",
            text: "High fever",
            isCorrect: true
          },
          {
            id: "q3_d",
            text: "Feeling tired",
            isCorrect: false
          }
        ],
        explanation: "While cramps, mood changes, and tiredness are all common period symptoms, a high fever is not. If you have a fever during your period, you should talk to a doctor or trusted adult."
      }
    ]
  },
  {
    id: "period_products_quiz",
    chapterId: 4,
    title: "Period Products",
    description: "Let's see how much you know about different period products!",
    questions: [
      {
        id: "q1",
        text: "Which period product absorbs blood and sticks to your underwear?",
        options: [
          {
            id: "q1_a",
            text: "Tampon",
            isCorrect: false
          },
          {
            id: "q1_b",
            text: "Pad",
            isCorrect: true
          },
          {
            id: "q1_c",
            text: "Menstrual cup",
            isCorrect: false
          },
          {
            id: "q1_d",
            text: "Tissue paper",
            isCorrect: false
          }
        ],
        explanation: "Pads are absorbent products that stick to your underwear to collect period blood. They come in different sizes for different flow levels and are often recommended for beginners."
      },
      {
        id: "q2",
        text: "Which period product is inserted into the vagina?",
        options: [
          {
            id: "q2_a",
            text: "Pad",
            isCorrect: false
          },
          {
            id: "q2_b",
            text: "Period underwear",
            isCorrect: false
          },
          {
            id: "q2_c",
            text: "Tampon",
            isCorrect: true
          },
          {
            id: "q2_d",
            text: "Liner",
            isCorrect: false
          }
        ],
        explanation: "Tampons are inserted into the vagina to absorb blood before it leaves your body. They come with applicators or without, and in different absorbency levels."
      },
      {
        id: "q3",
        text: "What's special about period underwear?",
        options: [
          {
            id: "q3_a",
            text: "It can only be worn once",
            isCorrect: false
          },
          {
            id: "q3_b",
            text: "It has built-in layers that absorb blood and can be washed and reused",
            isCorrect: true
          },
          {
            id: "q3_c",
            text: "It's only for swimming",
            isCorrect: false
          },
          {
            id: "q3_d",
            text: "It changes color when your period starts",
            isCorrect: false
          }
        ],
        explanation: "Period underwear has special absorbent layers built in that can hold menstrual blood. They can be washed and reused, making them an eco-friendly option."
      }
    ]
  },
  {
    id: "self_care_quiz",
    chapterId: 5,
    title: "Taking Care of Yourself",
    description: "Test your knowledge about period self-care!",
    questions: [
      {
        id: "q1",
        text: "Which of these might help with period cramps?",
        options: [
          {
            id: "q1_a",
            text: "Eating lots of candy",
            isCorrect: false
          },
          {
            id: "q1_b",
            text: "Using a heating pad on your tummy",
            isCorrect: true
          },
          {
            id: "q1_c",
            text: "Drinking very cold water",
            isCorrect: false
          },
          {
            id: "q1_d",
            text: "Watching TV",
            isCorrect: false
          }
        ],
        explanation: "Heat can help relax the muscles in your uterus that cause cramps. Using a heating pad, hot water bottle, or taking a warm bath can all provide relief."
      },
      {
        id: "q2",
        text: "How often should you change your pad or tampon?",
        options: [
          {
            id: "q2_a",
            text: "Once a day",
            isCorrect: false
          },
          {
            id: "q2_b",
            text: "Every 4-8 hours, or more often if needed",
            isCorrect: true
          },
          {
            id: "q2_c",
            text: "Only when it feels uncomfortable",
            isCorrect: false
          },
          {
            id: "q2_d",
            text: "Once a week",
            isCorrect: false
          }
        ],
        explanation: "It's important to change pads and tampons regularly to stay clean and prevent infections. For tampons, it's especially important not to leave them in for more than 8 hours."
      },
      {
        id: "q3",
        text: "What's a good way to help with emotional changes during your period?",
        options: [
          {
            id: "q3_a",
            text: "Ignore your feelings completely",
            isCorrect: false
          },
          {
            id: "q3_b",
            text: "Yell at everyone around you",
            isCorrect: false
          },
          {
            id: "q3_c",
            text: "Get extra rest and do activities you enjoy",
            isCorrect: true
          },
          {
            id: "q3_d",
            text: "Stay up all night watching movies",
            isCorrect: false
          }
        ],
        explanation: "Taking care of your emotional health is just as important as physical care. Getting enough rest, doing activities you enjoy, and talking about your feelings with someone you trust can all help."
      }
    ]
  }
];
