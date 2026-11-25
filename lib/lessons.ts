export type ExampleKey =
  | "fraud-email"
  | "website-address"
  | "otp-message"
  | "prize-sms"
  | "photo-message"
  | "video-call"
  | "bill-payment"
  | "caller-id"
  | "strange-link"
  | "family-in-trouble";

export type Step = {
  title: string;
  body: string;
  example?: ExampleKey;
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
        example: "video-call",
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
        example: "fraud-email",
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
        example: "bill-payment",
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
        example: "website-address",
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
        example: "photo-message",
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
        example: "otp-message",
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
        example: "prize-sms",
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
        example: "caller-id",
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
        example: "strange-link",
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
        example: "family-in-trouble",
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
    summary: "Twenty gentle questions — one from each of your 20 lessons. No timer, no marks.",
    steps: [],
    quiz: [
      {
        question: "1. In a video call with your grandchild, which button turns on the camera so you can see each other?",
        options: ["The mute bell", "The small video camera icon", "The airplane button"],
        answer: 1,
        why: "Tapping the small video camera icon starts your video call.",
      },
      {
        question: "2. An email says URGENT: Your account closes in 1 hour! Click here now. What is the safest thing to do?",
        options: ["Tap the link quickly", "Do not tap the link and check who sent it", "Reply with your password"],
        answer: 1,
        why: "Trick emails create false hurry to make you tap unsafe links.",
      },
      {
        question: "3. Before confirming an electricity or phone bill payment in your bank app, what should you check?",
        options: ["Only the colour of the screen", "The biller name and exact rupee amount", "Nothing at all"],
        answer: 1,
        why: "Always check the receiver name and amount before tapping Confirm.",
      },
      {
        question: "4. How can you tell a website address is safer to use?",
        options: ["It has bright flashing colours", "It shows a padlock and the exact spelled name", "It opens from a forwarded message"],
        answer: 1,
        why: "Look for the padlock and read the website name letter by letter.",
      },
      {
        question: "5. When your grandchild sends a photo on WhatsApp, how do you keep it on your phone?",
        options: ["Take a picture of your screen", "Tap the photo and choose Save or Download", "Delete the chat"],
        answer: 1,
        why: "Opening the photo and tapping Save puts it safely in your Photos gallery.",
      },
      {
        question: "6. Someone phones saying they are from your bank and asks for the 6-digit OTP code on your phone. What do you do?",
        options: ["Read the code to them", "Say no and hang up immediately", "Send it by SMS instead"],
        answer: 1,
        why: "Your OTP is only for you. No real bank or office will ever ask for it.",
      },
      {
        question: "7. A message says you won a lottery prize, but you must pay a small fee first. What is this?",
        options: ["A real prize", "A fake prize trick", "A bank gift"],
        answer: 1,
        why: "A prize you never entered for is not real, and you never pay to receive a prize.",
      },
      {
        question: "8. A caller claims to be a police or tax officer demanding immediate payment over the phone. What should you do?",
        options: ["Pay right away so they do not get angry", "Hang up and call the real office number you trust", "Share your bank card number"],
        answer: 1,
        why: "Real government offices never demand urgent money over a phone call.",
      },
      {
        question: "9. A link or app file arrives from an unknown number. What is the safest choice?",
        options: ["Tap it to see what it is", "Delete it without tapping and only use official app stores", "Forward it to your family group"],
        answer: 1,
        why: "Unknown links and files can harm your phone. Always delete them.",
      },
      {
        question: "10. Your grandson messages from a new number asking for money urgently. What do you do first?",
        options: ["Send the money in a hurry", "Call his usual saved phone number to check", "Reply asking for his bank details"],
        answer: 1,
        why: "Always call the person on their regular saved number before sending money.",
      },
      {
        question: "11. After asking an AI helper about a medicine or health symptom, what should you always do?",
        options: ["Change your tablets immediately", "Confirm with your doctor before changing any medicine", "Ignore your doctor"],
        answer: 1,
        why: "AI helps explain words simply, but only your doctor should guide your treatment.",
      },
      {
        question: "12. Before pasting a bank letter or bill into an AI helper to explain it, what should you remove first?",
        options: ["The date of the letter", "Your full bank account number, Aadhaar, or passwords", "The greeting at the top"],
        answer: 1,
        why: "Always remove private account numbers and passwords before pasting text.",
      },
      {
        question: "13. A call sounds just like your relative crying for money, or a video shows a celebrity promising guaranteed profits. What could this be?",
        options: ["A guaranteed investment", "An AI-faked voice or scam video", "A bank announcement"],
        answer: 1,
        why: "Scammers use AI to copy voices and faces. Always hang up and call your relative directly.",
      },
      {
        question: "14. If keyboard letters feel too small while typing a WhatsApp message, which icon lets you speak your message?",
        options: ["The camera icon", "The small microphone icon on your keyboard", "The battery icon"],
        answer: 1,
        why: "Tapping the keyboard microphone turns your spoken words into written text.",
      },
      {
        question: "15. How can you silence spam calls at night while still letting your children or spouse ring through?",
        options: ["Turn off your phone completely", "Turn on Do Not Disturb and allow Favourite contacts", "Put your phone in another room"],
        answer: 1,
        why: "Do Not Disturb silences late-night spam while allowing calls from your Favourites.",
      },
      {
        question: "16. When taking an auto or cab alone, how can you let your family know you reached safely?",
        options: ["Send them a blank photo", "Share your Live Location on WhatsApp for 1 hour", "Turn off mobile data"],
        answer: 1,
        why: "Sharing your live location lets family follow your trip until you arrive safely.",
      },
      {
        question: "17. Your phone says Storage Full. How can you free up space without deleting your personal family photos?",
        options: ["Delete your entire photo gallery", "Open WhatsApp Manage Storage and delete large forwarded videos", "Buy a new phone"],
        answer: 1,
        why: "Clearing forwarded WhatsApp videos frees up space while keeping your Gallery safe.",
      },
      {
        question: "18. Before stepping inside an auto or cab booked on your phone, what should you check first?",
        options: ["The colour of the seats", "That the vehicle number plate matches your app", "The driver’s wallpaper"],
        answer: 1,
        why: "Always match the number plate first, then share your 4-digit PIN after sitting inside.",
      },
      {
        question: "19. When do you enter your 4- or 6-digit UPI PIN?",
        options: ["To receive a refund or prize", "ONLY when you are sending money out of your account", "Whenever a caller asks you to test it"],
        answer: 1,
        why: "You never enter a UPI PIN to receive money—only to send money.",
      },
      {
        question: "20. Why is it helpful to save Emergency Contacts and your blood group on your lock screen?",
        options: ["It makes the battery last longer", "Helpers can call your family in one tap without needing your passcode", "It blocks spam messages"],
        answer: 1,
        why: "Emergency info on your lock screen lets doctors or helpers reach your family immediately.",
      },
    ],
  },
  {
    "title": "Ask AI a health or medicine question safely",
    "category": "Everyday online services",
    "summary": "Use an AI helper to understand a medicine label or symptom in simple words, while always checking with your doctor.",
    "steps": [
      {
        "title": "Open your AI helper app",
        "body": "Tap your AI assistant app or open the Ask page here on GentleLearn. Look for the large box that says Ask a question."
      },
      {
        "title": "Ask in plain, everyday words",
        "body": "Type or speak clearly, for example: What are common side effects of amlodipine? or Explain what high blood pressure means in simple words."
      },
      {
        "title": "Read the simple explanation calmly",
        "body": "Take your time reading the answer. If a medical word still feels confusing, type Explain that even more simply."
      },
      {
        "title": "Always confirm with your doctor",
        "body": "AI is a helpful dictionary, never a replacement for your doctor. Never start, stop, or change any tablet without asking your doctor first."
      }
    ]
  },
  {
    "title": "Ask AI to explain a long bank letter or bill",
    "category": "Everyday online services",
    "summary": "Turn confusing electricity bills, bank notices, or insurance letters into three plain sentences.",
    "steps": [
      {
        "title": "Copy the confusing message",
        "body": "Press and hold your finger on the long SMS or email from your bank or electricity board, then tap Copy."
      },
      {
        "title": "Hide private numbers first",
        "body": "Before pasting, remove your full bank account number, Aadhaar number, or password so your private details stay only with you."
      },
      {
        "title": "Ask AI to summarise it",
        "body": "Paste the text into your AI helper and type: Explain this letter to me in 3 short, simple sentences and tell me if I need to do anything."
      },
      {
        "title": "Check with family before paying",
        "body": "If the letter asks for money or urgent action, double-check the official bill or ask a trusted family member before paying.",
        "example": "bill-payment"
      }
    ]
  },
  {
    "title": "Spot fake AI voices and scam videos",
    "category": "Privacy and digital safety",
    "summary": "Protect yourself when a phone call or video sounds like a relative in trouble or a famous person promising money.",
    "steps": [
      {
        "title": "Pause when a call creates panic",
        "body": "Scammers now use AI tools to copy a relative’s voice for a few seconds and claim they are in an emergency and need money immediately.",
        "example": "family-in-trouble"
      },
      {
        "title": "Hang up and call their real number",
        "body": "Do not argue or send money on that call. Hang up, open your saved Contacts, and call your relative directly on their regular phone number."
      },
      {
        "title": "Distrust celebrity investment videos",
        "body": "If you see a video on WhatsApp or YouTube of a famous doctor, actor, or leader promising guaranteed profits, treat it as fake—AI can mimic faces and voices."
      },
      {
        "title": "Agree on a family code word",
        "body": "Choose one simple secret word with your children or spouse that only your family knows, so you can always verify a real emergency."
      }
    ]
  },
  {
    "title": "Use voice typing instead of small keys",
    "category": "Smartphone basics",
    "summary": "Speak naturally in your own language and watch your phone type WhatsApp messages for you.",
    "steps": [
      {
        "title": "Open any message box",
        "body": "Open WhatsApp or any chat and tap the white typing bar so the on-screen keyboard appears at the bottom."
      },
      {
        "title": "Find the small microphone icon",
        "body": "Look just above the letters on the right side of your keyboard for a tiny microphone symbol—not the green WhatsApp voice-note mic."
      },
      {
        "title": "Tap and speak slowly",
        "body": "Tap the keyboard microphone once, wait for the chime or Listening sign, and speak clearly at your normal pace."
      },
      {
        "title": "Read and tap Send",
        "body": "Watch your spoken words turn into written text on the screen. When it looks right, tap the green Send arrow."
      }
    ]
  },
  {
    "title": "Turn on Do Not Disturb at night",
    "category": "Smartphone basics",
    "summary": "Silence late-night spam calls and message pings while still letting your children or spouse ring through.",
    "steps": [
      {
        "title": "Open Settings and tap Sound or Modes",
        "body": "Open your phone’s Settings app and look for Do Not Disturb (sometimes inside Sound & vibration or Focus)."
      },
      {
        "title": "Allow calls from Favourite contacts",
        "body": "Tap People or Calls inside Do Not Disturb and choose Starred contacts or Favourites so your family’s calls always ring loudly."
      },
      {
        "title": "Set a gentle bedtime schedule",
        "body": "Turn on Schedule and set it from 10:00 PM to 7:00 AM so your phone silences spam automatically every night."
      },
      {
        "title": "Sleep peacefully without worry",
        "body": "Spam messages stay quiet until morning, while urgent calls from your loved ones still wake you right away."
      }
    ]
  },
  {
    "title": "Send your live location when outside",
    "category": "Messaging and communication",
    "summary": "Share your live trip on WhatsApp for one hour so family knows you reached safely.",
    "steps": [
      {
        "title": "Open your family WhatsApp chat",
        "body": "Open WhatsApp and tap the chat with your son, daughter, or spouse."
      },
      {
        "title": "Tap the paperclip or plus icon",
        "body": "At the bottom next to the message box, tap the paperclip (Android) or plus sign (iPhone), then tap Location."
      },
      {
        "title": "Choose Share live location",
        "body": "Tap Share live location, select 1 hour, and tap the green Send button."
      },
      {
        "title": "Stop sharing anytime you wish",
        "body": "It stops automatically after 1 hour, or you can tap Stop sharing inside the chat the moment you walk through your front door."
      }
    ]
  },
  {
    "title": "Free up phone space without losing photos",
    "category": "Photos, files and entertainment",
    "summary": "Clear forwarded WhatsApp videos when your phone says Storage Full, without touching your personal gallery.",
    "steps": [
      {
        "title": "Open WhatsApp Settings",
        "body": "Open WhatsApp, tap the three dots (or Settings at the bottom right), and tap Storage and data."
      },
      {
        "title": "Tap Manage storage",
        "body": "Tap Manage storage at the top. WhatsApp will show you which chats and forwarded videos are taking up the most space."
      },
      {
        "title": "Review Larger than 5 MB",
        "body": "Tap Larger than 5 MB to see heavy good-morning videos and forwards that you no longer need."
      },
      {
        "title": "Select and delete only forwards",
        "body": "Tick the forwarded videos you do not want and tap the bin icon. Your personal family photos in your phone Gallery stay completely untouched."
      }
    ]
  },
  {
    "title": "Book an auto or cab safely on your phone",
    "category": "Everyday online services",
    "summary": "Set your pickup spot, check the 4-digit ride PIN, and verify the vehicle number before stepping in.",
    "steps": [
      {
        "title": "Enter where you want to go",
        "body": "Open your cab app (such as Uber, Ola, or Namma Yatri), confirm your current pickup gate, and type your destination."
      },
      {
        "title": "Choose Auto or Cab and tap Book",
        "body": "Pick Auto or Car, check the fare shown on screen, and tap Book. Wait calmly while a nearby driver accepts."
      },
      {
        "title": "Match the vehicle number plate first",
        "body": "When the vehicle arrives, look at the last four digits of its number plate and make sure they match the number shown in your app."
      },
      {
        "title": "Share your 4-digit PIN only after sitting",
        "body": "Step inside first, then tell the driver the 4-digit PIN shown on your screen so the trip starts safely."
      }
    ]
  },
  {
    "title": "Check any UPI payment before entering your PIN",
    "category": "Money and digital payments",
    "summary": "Remember the golden rule of UPI: your PIN is only for sending money, never for receiving a refund or prize.",
    "steps": [
      {
        "title": "Know the golden rule of UPI PIN",
        "body": "You ONLY enter your 4- or 6-digit UPI PIN when money is leaving your bank account. You never enter a PIN to receive money."
      },
      {
        "title": "Read the top of the payment screen",
        "body": "Before typing your PIN, look at the top of the screen: check the receiver’s real name and the exact rupee amount."
      },
      {
        "title": "Decline unexpected Collect requests",
        "body": "If a stranger on OLX, courier support, or a prize caller sends a payment link asking you to enter your PIN to get a refund, tap Decline immediately.",
        "example": "prize-sms"
      },
      {
        "title": "Check your bank SMS afterwards",
        "body": "After paying a shopkeeper, wait two seconds for the green tick and check your bank SMS to be sure the right amount was paid."
      }
    ]
  },
  {
    "title": "Save emergency contacts on your lock screen",
    "category": "Privacy and digital safety",
    "summary": "Put your family’s phone number and blood group on your lock screen so helpers can reach them without unlocking your phone.",
    "steps": [
      {
        "title": "Open Settings and search Emergency",
        "body": "Open your phone’s Settings app, tap the search bar at the top, and type Emergency information or Medical ID."
      },
      {
        "title": "Add your blood group and allergies",
        "body": "Tap Edit information and fill in your name, blood group, and any regular medicines or allergies."
      },
      {
        "title": "Add two family emergency contacts",
        "body": "Tap Add contact and pick your spouse, son, or daughter from your saved contacts."
      },
      {
        "title": "Check it from your lock screen",
        "body": "Lock your phone, wake the screen, and tap Emergency at the bottom—your family contacts can now be called in one tap without needing your passcode."
      }
    ]
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

export const freeLessons = lessons.filter(
  (lesson) => !lesson.plus && !lesson.quiz,
);
export const plusLessons = lessons.filter((lesson) => lesson.plus);
export const quizLesson = lessons.find((lesson) => lesson.quiz);

export const getLesson = (slug: string) =>
  lessons.find((lesson) => lesson.slug === slug);

export const lessonsByCategory = () =>
  categories.map((category) => ({
    category,
    lessons: lessons.filter((lesson) => lesson.category === category),
  }));
