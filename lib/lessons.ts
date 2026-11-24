export type Step = {
  title: string;
  body: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  why: string;
};

export type Lesson = {
  slug: string;
  title: string;
  category: Category;
  plus: boolean;
  minutes: number;
  summary: string;
  steps: Step[];
  quiz?: QuizQuestion[];
};

export const categories = [
  "Smartphone basics",
  "Messaging and communication",
  "Privacy and digital safety",
  "Everyday online services",
  "Money and digital payments",
  "Photos, files and entertainment",
] as const;

export type Category = (typeof categories)[number];

const plusSteps = (title: string): Step[] => [
  {
    title: "Get comfortable first",
    body: "Sit somewhere quiet and keep your phone in your hand. There is no timer, and you can pause whenever you like.",
  },
  {
    title: `Watch "${title.toLowerCase()}" once`,
    body: "Read the step on the screen, then tap Read this aloud to hear it in your language before you try it.",
  },
  {
    title: "Try it yourself",
    body: "Open the app on your phone and follow along at your own speed. If a step feels confusing, tap Back and read it again.",
  },
  {
    title: "Practise again tomorrow",
    body: "A short repeat the next day is what makes it stick. Come back to this lesson any time from the Lessons page.",
  },
];

type Seed = {
  title: string;
  category: Category;
  plus?: boolean;
  summary?: string;
  steps?: Step[];
  quiz?: QuizQuestion[];
};

const free: Seed[] = [
  {
    title: "Call my grandchild",
    category: "Messaging and communication",
    summary: "Make your first video call, from opening the app to saying goodbye.",
    steps: [
      {
        title: "Find the video call app",
        body: "On your phone, look for the icon with a camera or a phone inside it. It is often green or blue, and it may say the name of the app underneath.",
      },
      {
        title: "Ask your grandchild to open theirs",
        body: "Ask your grandchild to open the video call app on their phone or tablet, and to keep it open while you call.",
      },
      {
        title: "Tap their name, then the camera",
        body: "Tap the name of the person you want to call. Then tap the camera button, which looks like a small video camera.",
      },
      {
        title: "Say hello, then finish",
        body: "Wait for their face to appear, then say hello. When you are finished, tap the red button to end the call.",
      },
    ],
  },
  {
    title: "Spot a trick email",
    category: "Privacy and digital safety",
    summary: "Four simple clues that show an email is not from who it claims to be.",
    steps: [
      {
        title: "Look at who sent it",
        body: "A trick email often comes from a long, strange address instead of a name you know. Tap the sender's name to see the full address.",
      },
      {
        title: "Check how it greets you",
        body: "Real banks usually use your name. A message that starts with 'Dear customer' or 'Dear user' is often fake.",
      },
      {
        title: "Notice the hurry",
        body: "Words like 'urgent', 'act now' or 'your account will close' are used to make you rush. Slow down — real offices give you time.",
      },
      {
        title: "Do not tap the link",
        body: "Close the email and open your bank's own app instead. If you are still unsure, show it to a family member before doing anything.",
      },
    ],
  },
  {
    title: "Pay a bill from home",
    category: "Money and digital payments",
    summary: "Pay an electricity or water bill without leaving your chair.",
    steps: [
      {
        title: "Open your bank app",
        body: "Tap your bank's app on your phone and sign in the way you normally do. Never sign in from a link someone sent you.",
      },
      {
        title: "Choose the bill to pay",
        body: "Look for words like Pay, Bills or Bill payments. Then choose the company you want to pay from the list.",
      },
      {
        title: "Check the amount and the name",
        body: "Read the company name and the amount out loud. Make sure the name is exactly right before you go on.",
      },
      {
        title: "Confirm, then keep the receipt",
        body: "Tap Confirm or Pay. A receipt will appear — take a screenshot so you have proof of payment.",
      },
    ],
  },
  {
    title: "Tell a real website",
    category: "Privacy and digital safety",
    summary: "How to check an address bar before you type anything private.",
    steps: [
      {
        title: "Find the address bar",
        body: "The address bar is the long white box at the top of the screen. It shows the name of the website you are on.",
      },
      {
        title: "Look for the padlock",
        body: "A small padlock means the connection is private. No padlock means do not type a password or card number.",
      },
      {
        title: "Read the name letter by letter",
        body: "Fake sites add extra letters, like 'amazoon' or 'icici-bank'. Read the name slowly and compare it with what you expect.",
      },
      {
        title: "When in doubt, type it yourself",
        body: "Close the page and type the website's name into the address bar yourself. That is always safer than tapping a link.",
      },
    ],
  },
  {
    title: "Open the photos Grandkids send",
    category: "Photos, files and entertainment",
    summary: "Open, save and find the photos your family sends you.",
    steps: [
      {
        title: "Open your messages",
        body: "Tap your messages app and find the conversation with your grandchild. A small picture icon means a photo is waiting.",
      },
      {
        title: "Tap the photo",
        body: "Tap once on the photo to make it big. Tap it again if you want it even bigger.",
      },
      {
        title: "Save it to your phone",
        body: "Look for a word like Save or a small arrow pointing down. Tap it once, and the photo is kept on your phone.",
      },
      {
        title: "Find it again in Photos",
        body: "Open your Photos app. Your saved picture will be in the most recent pictures at the top.",
      },
    ],
  },
  {
    title: "Never share your secret code (OTP)",
    category: "Privacy and digital safety",
    summary: "The six-digit code is only for you. Nobody real will ever ask for it.",
    steps: [
      {
        title: "Know what the code is",
        body: "A short code arrives by message when you sign in or pay. It proves that it is really you. It is sometimes called an OTP.",
      },
      {
        title: "Nobody real will ask for it",
        body: "Your bank, the police, or a delivery company will never phone and ask you to read the code out loud.",
      },
      {
        title: "If someone asks, say no",
        body: "Say 'I will not share that' and end the call. You do not have to be polite to someone who is trying to take your money.",
      },
      {
        title: "Tell a family member",
        body: "Tell someone in your family what happened. Nothing is your fault, and telling someone helps keep your money safe.",
      },
    ],
  },
  {
    title: "Say no to fake prizes",
    category: "Privacy and digital safety",
    summary: "If you did not enter, you did not win.",
    steps: [
      {
        title: "A prize you did not enter for is not real",
        body: "Lotteries you never joined cannot be won. A message saying you have won is almost always a trick.",
      },
      {
        title: "Never pay to receive a prize",
        body: "No real prize needs a fee, a tax, or a gift card before it arrives. That request is the trick itself.",
      },
      {
        title: "Do not share your details",
        body: "Do not send your name, address, bank details or a photo of your ID to claim anything.",
      },
      {
        title: "Delete the message",
        body: "Delete the message and block the number. You do not owe them a reply.",
      },
    ],
  },
  {
    title: "Don't fall for fake official calls",
    category: "Privacy and digital safety",
    summary: "Someone claiming to be from the bank or the police is often not.",
    steps: [
      {
        title: "Real offices do not demand money by phone",
        body: "Banks, police and government offices do not phone to demand an instant payment or a transfer to a 'safe account'.",
      },
      {
        title: "Ask for their name and department",
        body: "Ask slowly and write it down. A real official will not mind. Someone pretending will become impatient.",
      },
      {
        title: "Call back on a number you know",
        body: "End the call and phone the office using the number on your card or bill, never the number they gave you.",
      },
      {
        title: "Hang up if you feel pressured",
        body: "If your heart is racing, that is your sign to hang up. You can always call a family member first.",
      },
    ],
  },
  {
    title: "Stay away from strange links & apps",
    category: "Privacy and digital safety",
    summary: "Links from unknown numbers and apps from outside the store.",
    steps: [
      {
        title: "Do not tap links from unknown numbers",
        body: "Even if the message looks friendly, a link from a number you do not know can install something harmful.",
      },
      {
        title: "Check the app name and maker",
        body: "Before installing, read the app's name and who made it. A misspelled name is a warning sign.",
      },
      {
        title: "Only install from the official store",
        body: "Use the Play Store or the App Store on your phone. Skip any file that arrives through a message.",
      },
      {
        title: "Ask before installing anything new",
        body: "Ask a family member to look at it with you. Two pairs of eyes are better than one.",
      },
    ],
  },
  {
    title: "Check first when 'family' is in trouble",
    category: "Privacy and digital safety",
    summary: "Scammers pretend to be a relative who needs money quickly.",
    steps: [
      {
        title: "Scammers pretend to be family",
        body: "They may use a photo and a name you recognise, on a new number, saying their phone is broken.",
      },
      {
        title: "Call the person on their usual number",
        body: "Do not reply to the new number. Phone the number you already have saved for that person.",
      },
      {
        title: "Ask a question only they would know",
        body: "Ask something private but harmless, like the name of their first pet or their old house.",
      },
      {
        title: "Never send money in a hurry",
        body: "However urgent it sounds, wait until you have spoken to them in their real voice.",
      },
    ],
  },
  {
    title: "The safety quiz",
    category: "Privacy and digital safety",
    summary: "Five quick questions to see what you have learned. No timer, no marks.",
    steps: [],
    quiz: [
      {
        question: "Someone phones and says they are from your bank. They ask for the code on your phone. What do you do?",
        options: ["Read the code to them", "Say no and end the call", "Send it by message instead"],
        answer: 1,
        why: "Your code is only for you. A real bank will never ask for it.",
      },
      {
        question: "A message says you have won a prize, but you must pay a small fee first. What is this?",
        options: ["A real prize", "A trick", "A bank offer"],
        answer: 1,
        why: "No real prize asks you to pay before it arrives.",
      },
      {
        question: "How can you tell a website is safer to use?",
        options: ["It has bright colours", "It shows a padlock in the address bar", "It opens quickly"],
        answer: 1,
        why: "The padlock means the connection is private. It is not a guarantee, but its absence is a warning.",
      },
      {
        question: "Your 'grandson' messages from a new number asking for money urgently. What do you do first?",
        options: ["Send the money quickly", "Call his usual number to check", "Reply to the new number"],
        answer: 1,
        why: "Always check on the number you already know before sending anything.",
      },
      {
        question: "A link arrives from a number you do not know. What is the safest choice?",
        options: ["Tap it to see", "Delete it without tapping", "Forward it to a friend"],
        answer: 1,
        why: "Links from unknown numbers can install harmful things. Delete them.",
      },
    ],
  },
];

const plusTitles: Array<[string, Category]> = [
  ["Master your home screen", "Smartphone basics"],
  ["Make text bigger and easier to read", "Smartphone basics"],
  ["Understand phone notifications", "Smartphone basics"],
  ["Connect to Wi-Fi safely", "Smartphone basics"],
  ["Keep your phone charged and healthy", "Smartphone basics"],
  ["Use your voice to control your phone", "Smartphone basics"],
  ["Type messages without difficulty", "Messaging and communication"],
  ["Save and organise contacts", "Messaging and communication"],
  ["Set alarms, timers, and reminders", "Smartphone basics"],
  ["Send and listen to voice messages", "Messaging and communication"],
  ["Use emojis and stickers", "Messaging and communication"],
  ["Share a contact with someone", "Messaging and communication"],
  ["Find, pin, and delete messages", "Messaging and communication"],
  ["Create a strong phone passcode", "Privacy and digital safety"],
  ["Update your phone and apps", "Privacy and digital safety"],
  ["Use a QR code safely", "Money and digital payments"],
  ["Understand UPI payment basics", "Money and digital payments"],
  ["Take clear photos", "Photos, files and entertainment"],
  ["Create and find photo albums", "Photos, files and entertainment"],
  ["Watch videos with subtitles", "Photos, files and entertainment"],
  ["Listen to music and podcasts", "Photos, files and entertainment"],
  ["Read books and newspapers online", "Photos, files and entertainment"],
  ["Find your way with Maps", "Everyday online services"],
  ["Free up space on your phone", "Smartphone basics"],
  ["Join and manage family group chats", "Messaging and communication"],
  ["Share your screen on a video call", "Messaging and communication"],
  ["Send photos and documents by email", "Messaging and communication"],
  ["Translate messages into your language", "Messaging and communication"],
  ["Block unwanted callers and messages", "Privacy and digital safety"],
  ["Store passwords safely", "Privacy and digital safety"],
  ["Share your location only when needed", "Privacy and digital safety"],
  ["Report a suspicious message", "Privacy and digital safety"],
  ["Protect personal information online", "Privacy and digital safety"],
  ["Book a doctor's appointment online", "Everyday online services"],
  ["Order groceries online", "Everyday online services"],
  ["Book a taxi or auto", "Everyday online services"],
  ["Check bus and train information", "Everyday online services"],
  ["Make a video appointment with a doctor", "Everyday online services"],
  ["Download and print a document", "Everyday online services"],
  ["Check a bank transaction", "Money and digital payments"],
  ["Download a bank statement", "Money and digital payments"],
  ["Set a spending alert", "Money and digital payments"],
  ["Pay utility bills online", "Money and digital payments"],
  ["Recharge a phone or data plan", "Money and digital payments"],
  ["Delete duplicate photos safely", "Photos, files and entertainment"],
  ["Join an online hobby class", "Photos, files and entertainment"],
  ["Pay at a shop with your phone", "Money and digital payments"],
  ["Fix microphone and camera problems", "Smartphone basics"],
  ["Turn on two-step verification", "Privacy and digital safety"],
  ["Control what apps can access", "Privacy and digital safety"],
  ["Recognise deepfake photos and videos", "Privacy and digital safety"],
  ["Secure a lost or stolen phone", "Privacy and digital safety"],
  ["Book tickets for travel or events", "Everyday online services"],
  ["Use government service websites", "Everyday online services"],
  ["Recognise payment requests versus payments", "Money and digital payments"],
  ["Understand refunds and failed payments", "Money and digital payments"],
  ["Know what to do after a suspected payment scam", "Money and digital payments"],
  ["Back up photos and contacts", "Photos, files and entertainment"],
  ["Cast a phone screen to a television", "Photos, files and entertainment"],
  ["Use accessibility features", "Smartphone basics"],
];

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const lessons: Lesson[] = [
  ...free.map((seed, index) => ({
    slug: slugify(seed.title),
    title: seed.title,
    category: seed.category,
    plus: false,
    minutes: seed.quiz ? 4 : 2,
    summary: seed.summary ?? "",
    steps: seed.steps ?? [],
    quiz: seed.quiz,
    order: index,
  })),
  ...plusTitles.map(([title, category], index) => ({
    slug: slugify(title),
    title,
    category,
    plus: true,
    minutes: 3,
    summary: "A Plus lesson, grouped by difficulty so you can go a little further.",
    steps: plusSteps(title),
    quiz: undefined,
    order: free.length + index,
  })),
];

export const freeLessons = lessons.filter((lesson) => !lesson.plus);
export const plusLessons = lessons.filter((lesson) => lesson.plus);

export const getLesson = (slug: string) =>
  lessons.find((lesson) => lesson.slug === slug);

export const lessonsByCategory = () =>
  categories.map((category) => ({
    category,
    lessons: lessons.filter((lesson) => lesson.category === category),
  }));
