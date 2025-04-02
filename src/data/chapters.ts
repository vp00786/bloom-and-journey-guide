
export type Chapter = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  hasQuiz: boolean;
  badgeReward?: string;
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "Starting your journey",
    content: `
      <p>Welcome to your journey of discovery! Today, we're going to learn about an important change that happens in every girl's body. It's called a period, or menstruation.</p>
      
      <p>Your body is amazing and goes through many changes as you grow up. One of these changes is getting your first period. This is completely natural and happens to everyone with a uterus.</p>
      
      <p>In this adventure, we'll explore what happens during your period, why it happens, and how to take care of yourself. Remember, there's nothing to be afraid of or embarrassed about!</p>
      
      <p>Dr. Maya, your friendly guide, will be with you every step of the way to answer questions and share helpful information.</p>

      <blockquote>"Hi there! I'm Dr. Maya, and I'm excited to join you on this journey. Getting your first period is a special milestone that marks the beginning of a new chapter in your life. Together, we'll discover all about this natural process!"</blockquote>
    `,
    hasQuiz: false,
    badgeReward: "journey_starter"
  },
  {
    id: 2,
    title: "Understanding Your Body",
    subtitle: "Learning about the menstrual cycle",
    content: `
      <p>Your body has been preparing for this moment for a while now. Inside your body, you have special organs called ovaries that release tiny eggs (called ova). You also have a uterus, which is where a baby could grow if the egg meets sperm.</p>
      
      <p>Each month, your uterus prepares a special lining made of blood and tissue. This is just in case an egg gets fertilized and needs a cozy place to grow into a baby.</p>
      
      <p>But most of the time, the egg doesn't get fertilized. When this happens, your body doesn't need the special lining anymore. So, it gently releases it through your vagina. This is your period!</p>
      
      <p>Your period typically lasts about 3-7 days, and then the cycle starts all over again. This cycle usually happens every 21-35 days.</p>

      <blockquote>"Your menstrual cycle is like a beautiful dance your body does. Every part of it has a purpose, and it shows that your body is healthy and working just as it should. Isn't it amazing how our bodies know exactly what to do?" — Dr. Maya</blockquote>
    `,
    hasQuiz: true,
    badgeReward: "body_explorer"
  },
  {
    id: 3,
    title: "What to Expect",
    subtitle: "Signs, symptoms, and self-care",
    content: `
      <p>Before your period starts, you might notice some changes in your body and feelings. This is called PMS (Premenstrual Syndrome), and it can include:</p>
      
      <ul>
        <li>Feeling more emotional or moody</li>
        <li>Cramps in your lower belly</li>
        <li>Tender breasts</li>
        <li>Bloating or feeling puffy</li>
        <li>Headaches</li>
        <li>Feeling tired</li>
      </ul>
      
      <p>During your period, you'll notice blood coming from your vagina. It might be bright red, dark red, or even brownish. The flow might be heavier on some days (usually the first few) and lighter on others.</p>
      
      <p>Remember, everyone's period is different! Some people have more symptoms than others, and that's completely normal.</p>

      <blockquote>"When I got my first period, I was a bit surprised by the cramps. But I found that using a heating pad and doing gentle stretches really helped. Everyone finds their own way to take care of themselves during this time!" — Lily, your friend on this journey</blockquote>
    `,
    hasQuiz: true,
    badgeReward: "symptom_sleuth"
  },
  {
    id: 4,
    title: "Period Products",
    subtitle: "Finding what works for you",
    content: `
      <p>There are many different products you can use during your period. Let's explore some options:</p>
      
      <h3>Pads</h3>
      <p>Pads stick to your underwear and absorb the blood. They come in different sizes for different flow levels. Pads are easy to use and great for beginners!</p>
      
      <h3>Tampons</h3>
      <p>Tampons are inserted into your vagina to absorb blood. They can take a bit of practice to use, but many people like them because they're invisible from the outside.</p>
      
      <h3>Menstrual Cups</h3>
      <p>These are small, flexible cups made of silicone that collect blood rather than absorb it. They can be worn for up to 12 hours!</p>
      
      <h3>Period Underwear</h3>
      <p>Special underwear with built-in layers that absorb blood. They can be washed and reused.</p>
      
      <p>There's no "best" product – it's all about finding what makes you comfortable! You might want to try different options to see what you prefer.</p>

      <blockquote>"When I first started my period, I used pads because they seemed easiest. Now I sometimes use tampons for swimming. It's okay to try different things and see what you like best!" — Lily</blockquote>
    `,
    hasQuiz: true,
    badgeReward: "product_pro"
  },
  {
    id: 5,
    title: "Taking Care of Yourself",
    subtitle: "Wellness during your period",
    content: `
      <p>During your period, it's extra important to be kind to yourself! Here are some tips for taking care:</p>
      
      <h3>For Cramps</h3>
      <ul>
        <li>Use a heating pad or hot water bottle on your tummy</li>
        <li>Take a warm bath</li>
        <li>Try gentle exercise like walking or stretching</li>
        <li>If needed, talk to an adult about taking pain medicine</li>
      </ul>
      
      <h3>For Emotions</h3>
      <ul>
        <li>Get plenty of rest</li>
        <li>Practice deep breathing or meditation</li>
        <li>Talk about your feelings with someone you trust</li>
        <li>Do activities you enjoy</li>
      </ul>
      
      <h3>For Your Body</h3>
      <ul>
        <li>Drink plenty of water</li>
        <li>Eat nutritious foods (fruits, vegetables, whole grains)</li>
        <li>Change your pad/tampon regularly</li>
        <li>Wash your hands before and after changing period products</li>
      </ul>

      <blockquote>"I find that gentle yoga and a cup of chamomile tea work wonders for me when I have cramps. Taking care of yourself during your period is a form of self-love, and you deserve all the care in the world." — Dr. Maya</blockquote>
    `,
    hasQuiz: true,
    badgeReward: "self_care_star"
  }
];
