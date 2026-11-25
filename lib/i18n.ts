import type { Lesson } from "@/lib/lessons";
import { bnLessons, bnUi } from "@/lib/locales/bn";
import { taLessons, taUi } from "@/lib/locales/ta";
import { teLessons, teUi } from "@/lib/locales/te";
import { mrLessons, mrUi } from "@/lib/locales/mr";
import { guLessons, guUi } from "@/lib/locales/gu";
import { knLessons, knUi } from "@/lib/locales/kn";
import { mlLessons, mlUi } from "@/lib/locales/ml";
import { paLessons, paUi } from "@/lib/locales/pa";
import { orLessons, orUi } from "@/lib/locales/or";
import { asLessons, asUi } from "@/lib/locales/as";
import { siteDictionaries } from "@/lib/locales/site";
import { exampleDictionaries } from "@/lib/locales/examples";

export type Locale =
  | "en"
  | "hi"
  | "bn"
  | "ta"
  | "te"
  | "mr"
  | "gu"
  | "kn"
  | "ml"
  | "pa"
  | "or"
  | "as";

/** Everything that is not English needs a dictionary entry. */
export type UiDict = Record<string, string>;

/**
 * Interface text is looked up by its English wording. Any missing entry simply
 * falls back to English, so a partly translated language never shows blanks.
 */
export function translate(
  locale: string,
  text: string,
  params?: Record<string, string | number>,
): string {
  const dict = uiDictionaries[locale as Locale];
  const extra = siteDictionaries[locale as Locale];
  const example = exampleDictionaries[locale as Locale];
  let out = dict?.[text] ?? extra?.[text] ?? example?.[text] ?? text;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      out = out.split(`{${key}}`).join(String(value));
    }
  }
  return out;
}

export type LocalizedLesson = {
  title: string;
  summary: string;
  steps: { title: string; body: string }[];
  quiz?: { question: string; options: string[]; why: string }[];
};

export type LessonPack = Record<string, LocalizedLesson>;

/**
 * Swap the English wording of a lesson for the chosen language. Steps and quiz
 * questions are matched by position, so the examples and correct answers stay
 * exactly as they are in the English source.
 */
export function localizeLesson(lesson: Lesson, locale: string): Lesson {
  const category = translate(locale, lesson.category) as Lesson["category"];
  const pack = lessonTranslations[locale as Locale]?.[lesson.slug];

  if (!pack) return { ...lesson, category };

  return {
    ...lesson,
    category,
    title: pack.title,
    summary: pack.summary,
    steps: lesson.steps.map((step, index) => {
      const translated = pack.steps[index];
      return translated ? { ...step, ...translated } : step;
    }),
    quiz: lesson.quiz?.map((question, index) => {
      const translated = pack.quiz?.[index];
      if (!translated) return question;
      return {
        ...question,
        question: translated.question,
        options: translated.options,
        why: translated.why,
      };
    }),
  };
}

/* ------------------------------------------------------------------------- */
/* Interface                                                                  */
/* ------------------------------------------------------------------------- */

const hi: UiDict = {
  // Top bar
  Lessons: "पाठ",
  Ask: "पूछें",
  Plans: "योजनाएँ",
  "Family corner": "परिवार कोना",
  Family: "परिवार",
  Help: "सहायता",
  Account: "खाता",
  Language: "भाषा",

  // Categories
  "Smartphone basics": "स्मार्टफ़ोन की मूल बातें",
  "Messaging and communication": "संदेश और बातचीत",
  "Privacy and digital safety": "निजता और डिजिटल सुरक्षा",
  "Everyday online services": "रोज़ की ऑनलाइन सेवाएँ",
  "Money and digital payments": "पैसा और डिजिटल भुगतान",
  "Photos, files and entertainment": "तस्वीरें, फ़ाइलें और मनोरंजन",

  // Lessons page
  "Learning today": "आज सीख रहे हैं",
  "Hi {name}": "नमस्ते {name}",
  "Pick a lesson below. Everything is saved as you go.":
    "नीचे कोई पाठ चुनें। सब कुछ अपने आप सहेजा जाता है।",
  "Not you, {name}?": "{name} नहीं?",
  "Switch learner": "सीखने वाला बदलें",
  "{done} of {total} free lessons finished":
    "{total} में से {done} मुफ़्त पाठ पूरे",
  "{percent}% of the free course": "मुफ़्त कोर्स का {percent}%",
  "Start here": "यहाँ से शुरू करें",
  "The 10 regular lessons — free forever":
    "10 नियमित पाठ — हमेशा मुफ़्त",
  "about {n} minutes": "लगभग {n} मिनट",
  " · quiz": " · प्रश्नोत्तरी",
  "Test yourself — {title}": "खुद को जाँचें — {title}",
  Done: "पूरा",
  Start: "शुरू करें",
  Quiz: "प्रश्नोत्तरी",
  Plus: "Plus",
  "More lessons with Plus": "Plus के साथ और पाठ",
  "{n} extra": "{n} अतिरिक्त",
  "{n} lessons in this group": "इस समूह में {n} पाठ",

  // Lesson player
  "All lessons": "सभी पाठ",
  "Step {a} of {b}": "चरण {a} / {b}",
  "Read this aloud": "ज़ोर से पढ़ें",
  Stop: "रोकें",
  Back: "पीछे",
  "Next step": "अगला चरण",
  "Finish lesson": "पाठ पूरा करें",
  "Question {a} of {b}": "सवाल {a} / {b}",
  "{n} right so far": "अब तक {n} सही",
  "That's right.": "बिलकुल सही।",
  "Not quite.": "पूरी तरह सही नहीं।",
  "Next question": "अगला सवाल",
  "See my score": "मेरा स्कोर देखें",
  "Well done!": "बहुत बढ़िया!",
  "{name}, you finished {lesson}.": "{name}, आपने {lesson} पूरा किया।",
  "You got {correct} of {total} right.":
    "{total} में से {correct} सही हुए।",
  "Do it again": "फिर से करें",
  "Back to lessons": "पाठों पर वापस",
  "We could not find that lesson": "हमें वह पाठ नहीं मिला",
  "It may have moved. All lessons are on the Lessons page.":
    "शायद वह कहीं और चला गया। सभी पाठ 'पाठ' पेज पर हैं।",
  "Pick a name first": "पहले एक नाम चुनें",
  "Choose who is learning today, then open the lesson again.":
    "चुनें कि आज कौन सीख रहा है, फिर पाठ दोबारा खोलें।",
  "Choose a name": "नाम चुनें",
  "This lesson has no steps yet.": "इस पाठ में अभी कोई चरण नहीं है।",
  "You have finished this lesson before. Doing it again is a good idea.":
    "आप यह पाठ पहले पूरा कर चुके हैं। दोबारा करना अच्छा रहेगा।",

  // Welcome page
  "For older adults and their families": "बड़े-बुज़ुर्गों और उनके परिवारों के लिए",
  "Learn technology, gently.": "तकनीक सीखें, आराम से।",
  "One big step at a time — with a voice to read each step and family close by.":
    "एक बार में एक बड़ा कदम — हर कदम पढ़ने के लिए आवाज़ और पास में परिवार।",
  "Create my account": "मेरा खाता बनाएँ",
  "Sign in": "साइन इन करें",
  "Free to start": "शुरू करना मुफ़्त",
  "No ads": "कोई विज्ञापन नहीं",
  "No pressure": "कोई जल्दी नहीं",
  "Why families choose GentleLearn": "परिवार GentleLearn क्यों चुनते हैं",
  "Big, clear lessons": "बड़े, साफ़ पाठ",
  "Large buttons, simple words, one step at a time.":
    "बड़े बटन, आसान शब्द, एक बार में एक कदम।",
  "Hear every step, hands-free whenever you like.":
    "हर कदम सुनें, जब चाहें बिना हाथ लगाए।",
  "See progress and answer questions with confidence.":
    "प्रगति देखें और भरोसे से सवालों के जवाब दें।",
  "How it works": "यह कैसे काम करता है",
  "Make an account": "खाता बनाएँ",
  "Just a phone number and a password.": "बस एक फ़ोन नंबर और पासवर्ड।",
  "Add your name": "अपना नाम जोड़ें",
  "So lessons greet you properly.": "ताकि पाठ आपको नाम से बुलाएँ।",
  "Start a lesson": "पाठ शुरू करें",
  "Pause any time — progress is saved.": "कभी भी रुकें — प्रगति सहेजी जाती है।",
  "Everyday skills, made simple": "रोज़ के कौशल, आसान बनाए",
  "Plus adds 60 more": "Plus में 60 और",
  "Payment plans": "भुगतान योजनाएँ",
  "Free is yours today — nothing to pay.":
    "आज मुफ़्त आपका है — कुछ नहीं देना।",
  Free: "मुफ़्त",
  "always free": "हमेशा मुफ़्त",
  "All 10 regular lessons": "सभी 10 नियमित पाठ",
  "per month": "प्रति माह",
  "60 extra lessons": "60 अतिरिक्त पाठ",
  "Everything in Plus": "Plus की सब कुछ",
  "For 10 people": "10 लोगों के लिए",
  "Payments are coming soon. No payment is taken today.":
    "भुगतान जल्द आ रहा है। आज कोई भुगतान नहीं लिया जाता।",
  "See all plans": "सभी योजनाएँ देखें",
  "Not sure how to sign in?": "साइन इन करना नहीं आता?",
  "A few gentle steps. No rush at all.": "कुछ आसान कदम। कोई जल्दी नहीं।",
  "Made for calm, confident learning.":
    "शांत, भरोसेमंद सीखने के लिए बनाया गया।",

  // Login and account errors
  "Create your account": "अपना खाता बनाएँ",
  "Welcome back": "फिर से स्वागत है",
  "Use your phone number and a password. One account for your family.":
    "अपना फ़ोन नंबर और पासवर्ड इस्तेमाल करें। पूरे परिवार के लिए एक खाता।",
  "Type your phone number and password to sign in.":
    "साइन इन करने के लिए फ़ोन नंबर और पासवर्ड लिखें।",
  "Phone number": "फ़ोन नंबर",
  Password: "पासवर्ड",
  "Type your password again": "पासवर्ड फिर से लिखें",
  "One moment…": "एक पल…",
  "Already have an account? Sign in": "पहले से खाता है? साइन इन करें",
  "New here? Create my account": "नए हैं? मेरा खाता बनाएँ",
  "Your account is kept private and safe.":
    "आपका खाता निजी और सुरक्षित रहता है।",
  "The two passwords do not match. Please type them again.":
    "दोनों पासवर्ड मेल नहीं खाते। कृपया फिर से लिखें।",
  "Something went wrong. Please try again.": "कुछ गड़बड़ हुई। फिर से कोशिश करें।",
  "Please type a 10-digit mobile number.": "10 अंकों का मोबाइल नंबर लिखें।",
  "Please choose a password of 6 letters or more.":
    "कम से कम 6 अक्षरों का पासवर्ड चुनें।",
  "This number already has an account. Please sign in instead.":
    "इस नंबर का खाता पहले से है। कृपया साइन इन करें।",
  "That phone number or password does not match. Please try again.":
    "फ़ोन नंबर या पासवर्ड मेल नहीं खाता। फिर से कोशिश करें।",
  "We could not find an account with that number.":
    "उस नंबर का कोई खाता नहीं मिला।",
  "That password does not match. Please try again.":
    "वह पासवर्ड मेल नहीं खाता। फिर से कोशिश करें।",
  "Could not reach the server. Please check your connection.":
    "सर्वर तक नहीं पहुँच सके। अपना कनेक्शन जाँचें।",
};

export const uiDictionaries: Record<Locale, UiDict> = {
  en: {},
  hi,
  bn: bnUi,
  ta: taUi,
  te: teUi,
  mr: mrUi,
  gu: guUi,
  kn: knUi,
  ml: mlUi,
  pa: paUi,
  or: orUi,
  as: asUi,
};

/* ------------------------------------------------------------------------- */
/* The ten free lessons and the safety quiz                                   */
/* ------------------------------------------------------------------------- */

const hiLessons: LessonPack = {
  "call-my-grandchild": {
    title: "अपने पोते-पोती को कॉल करें",
    summary: "पहली वीडियो कॉल — ऐप खोलने से लेकर विदा कहने तक।",
    steps: [
      {
        title: "वीडियो कॉल ऐप ढूँढ़ें",
        body: "अपने फ़ोन पर कैमरा या फ़ोन का चिह्न देखें। यह अक्सर हरा या नीला होता है, और नीचे ऐप का नाम लिखा होता है।",
      },
      {
        title: "पोते-पोती से अपना ऐप खोलने को कहें",
        body: "उनसे कहें कि वे अपने फ़ोन या टैबलेट पर वीडियो कॉल ऐप खोलकर रखें, जब तक आप कॉल करें।",
      },
      {
        title: "उनका नाम दबाएँ, फिर कैमरा",
        body: "जिसे कॉल करना है उसका नाम दबाएँ। फिर कैमरा वाला बटन दबाएँ, जो छोटे वीडियो कैमरे जैसा दिखता है।",
      },
      {
        title: "नमस्ते कहें, फिर बात खत्म करें",
        body: "उनका चेहरा आने का इंतज़ार करें, फिर नमस्ते कहें। बात खत्म होने पर लाल बटन दबाकर कॉल बंद करें।",
      },
    ],
  },
  "spot-a-trick-email": {
    title: "धोखे वाला ईमेल पहचानें",
    summary: "चार आसान संकेत, जो बताते हैं कि ईमेल उसका नहीं है जो वह कहता है।",
    steps: [
      {
        title: "देखें किसने भेजा है",
        body: "धोखे वाला ईमेल अक्सर किसी जाने-पहचाने नाम की जगह लंबे, अजीब पते से आता है। पूरा पता देखने के लिए भेजने वाले का नाम दबाएँ।",
      },
      {
        title: "देखें वह आपको कैसे बुलाता है",
        body: "असली बैंक आमतौर पर आपका नाम लिखते हैं। 'प्रिय ग्राहक' या 'प्रिय उपयोगकर्ता' से शुरू होने वाला संदेश अक्सर नकली होता है।",
      },
      {
        title: "जल्दबाज़ी पर ध्यान दें",
        body: "'तुरंत', 'अभी करें' या 'आपका खाता बंद हो जाएगा' जैसे शब्द आपको जल्दी में डालने के लिए होते हैं। ठहरें — असली दफ़्तर आपको समय देते हैं।",
      },
      {
        title: "लिंक पर न दबाएँ",
        body: "ईमेल बंद करें और अपने बैंक का अपना ऐप खोलें। अगर फिर भी शक हो, तो कुछ भी करने से पहले परिवार के किसी सदस्य को दिखाएँ।",
      },
    ],
  },
  "pay-a-bill-from-home": {
    title: "घर से बिल भरें",
    summary: "कुर्सी से उठे बिना बिजली या पानी का बिल भरें।",
    steps: [
      {
        title: "अपना बैंक ऐप खोलें",
        body: "फ़ोन पर अपने बैंक का ऐप दबाएँ और हमेशा की तरह साइन इन करें। किसी के भेजे लिंक से कभी साइन इन न करें।",
      },
      {
        title: "जो बिल भरना है उसे चुनें",
        body: "'भुगतान', 'बिल' या 'बिल पेमेंट' जैसे शब्द ढूँढ़ें। फिर सूची में से वह कंपनी चुनें जिसे भुगतान करना है।",
      },
      {
        title: "रकम और नाम जाँचें",
        body: "कंपनी का नाम और रकम बोलकर पढ़ें। आगे बढ़ने से पहले देखें कि नाम बिलकुल सही है।",
      },
      {
        title: "पुष्टि करें, फिर रसीद रखें",
        body: "'पुष्टि करें' या 'भुगतान करें' दबाएँ। रसीद दिखेगी — स्क्रीनशॉट ले लें, ताकि भुगतान का सबूत आपके पास रहे।",
      },
    ],
  },
  "tell-a-real-website": {
    title: "असली वेबसाइट पहचानें",
    summary: "कुछ भी निजी लिखने से पहले पता पट्टी कैसे जाँचें।",
    steps: [
      {
        title: "पता पट्टी ढूँढ़ें",
        body: "पता पट्टी स्क्रीन के ऊपर वाला लंबा सफ़ेद डिब्बा है। यह बताती है कि आप किस वेबसाइट पर हैं।",
      },
      {
        title: "ताले का चिह्न देखें",
        body: "छोटा ताला का मतलब है कि कनेक्शन निजी है। ताला न हो तो पासवर्ड या कार्ड का नंबर न लिखें।",
      },
      {
        title: "नाम अक्षर-अक्षर पढ़ें",
        body: "नकली साइटें अतिरिक्त अक्षर जोड़ देती हैं, जैसे 'amazoon' या 'icici-bank'। नाम धीरे पढ़ें और सोचें कि आपने क्या उम्मीद की थी।",
      },
      {
        title: "शक हो तो खुद लिखें",
        body: "पेज बंद करें और वेबसाइट का नाम पता पट्टी में खुद लिखें। यह किसी लिंक पर दबाने से हमेशा सुरक्षित है।",
      },
    ],
  },
  "open-the-photos-grandkids-send": {
    title: "पोते-पोतियों की भेजी तस्वीरें खोलें",
    summary: "परिवार की भेजी तस्वीरें खोलें, सहेजें और फिर से ढूँढ़ें।",
    steps: [
      {
        title: "अपने संदेश खोलें",
        body: "अपना संदेश ऐप दबाएँ और पोते-पोती से हुई बातचीत ढूँढ़ें। छोटा तस्वीर का चिह्न बताता है कि फोटो आई है।",
      },
      {
        title: "तस्वीर पर दबाएँ",
        body: "तस्वीर को बड़ा करने के लिए उस पर एक बार दबाएँ। और बड़ा चाहिए तो फिर दबाएँ।",
      },
      {
        title: "फ़ोन में सहेजें",
        body: "'सहेजें' जैसा शब्द या नीचे की ओर छोटा तीर ढूँढ़ें। एक बार दबाएँ, तस्वीर फ़ोन में सहेज जाएगी।",
      },
      {
        title: "'फ़ोटो' में फिर ढूँढ़ें",
        body: "अपना फ़ोटो ऐप खोलें। सहेजी तस्वीर सबसे ऊपर की नई तस्वीरों में मिलेगी।",
      },
    ],
  },
  "never-share-your-secret-code-otp": {
    title: "अपना गुप्त कोड (OTP) कभी साझा न करें",
    summary: "छह अंकों का कोड सिर्फ़ आपके लिए है। कोई असली व्यक्ति उसे कभी नहीं माँगेगा।",
    steps: [
      {
        title: "कोड क्या है, जानें",
        body: "साइन इन या भुगतान करते समय संदेश से छोटा कोड आता है। यह साबित करता है कि आप ही हैं। इसे कभी-कभी OTP कहते हैं।",
      },
      {
        title: "कोई असली व्यक्ति इसे नहीं माँगेगा",
        body: "आपका बैंक, पुलिस या डिलीवरी कंपनी कभी फ़ोन करके कोड बोलने को नहीं कहेगी।",
      },
      {
        title: "कोई माँगे तो मना करें",
        body: "'मैं यह साझा नहीं करूँगा' कहें और फ़ोन काट दें। जो आपका पैसा लेना चाहता है, उससे विनम्रता ज़रूरी नहीं।",
      },
      {
        title: "परिवार को बताएँ",
        body: "जो हुआ वह परिवार में किसी को बताएँ। आपकी कोई गलती नहीं है, और बताने से पैसा सुरक्षित रहता है।",
      },
    ],
  },
  "say-no-to-fake-prizes": {
    title: "नकली इनामों को ना कहें",
    summary: "अगर आपने भाग नहीं लिया, तो आप जीते नहीं।",
    steps: [
      {
        title: "जिस इनाम में आपने भाग नहीं लिया, वह असली नहीं",
        body: "जिस लॉटरी में आप शामिल ही नहीं हुए, उसे जीता नहीं जा सकता। 'आप जीत गए' कहने वाला संदेश लगभग हमेशा धोखा होता है।",
      },
      {
        title: "इनाम पाने के लिए कभी पैसे न दें",
        body: "किसी असली इनाम के लिए पहले फ़ीस, टैक्स या गिफ़्ट कार्ड नहीं देना पड़ता। यह माँग ही धोखा है।",
      },
      {
        title: "अपनी जानकारी साझा न करें",
        body: "कुछ भी पाने के लिए अपना नाम, पता, बैंक विवरण या पहचान पत्र की तस्वीर न भेजें।",
      },
      {
        title: "संदेश हटा दें",
        body: "संदेश हटाएँ और नंबर ब्लॉक करें। आप उनके जवाब के बिना रह सकते हैं।",
      },
    ],
  },
  "dont-fall-for-fake-official-calls": {
    title: "अफ़सरों के नाम पर आए नकली फ़ोन से बचें",
    summary: "जो खुद को बैंक या पुलिस वाला बताए, वह अक्सर वह नहीं होता।",
    steps: [
      {
        title: "असली दफ़्तर फ़ोन पर पैसे नहीं माँगते",
        body: "बैंक, पुलिस और सरकारी दफ़्तर फ़ोन करके तुरंत भुगतान या 'सुरक्षित खाते' में पैसे भेजने को नहीं कहते।",
      },
      {
        title: "नाम और विभाग पूछें",
        body: "धीरे पूछें और लिख लें। असली अफ़सर बुरा नहीं मानेगा। नकली वाला बेचैन हो जाएगा।",
      },
      {
        title: "जाने-पहचाने नंबर पर वापस कॉल करें",
        body: "फ़ोन काटें और अपने कार्ड या बिल पर लिखे नंबर पर दफ़्तर को फ़ोन करें, उनके दिए नंबर पर कभी नहीं।",
      },
      {
        title: "दबाव लगे तो फ़ोन रख दें",
        body: "अगर दिल ज़ोर से धड़क रहा है, तो यही संकेत है कि फ़ोन रख दें। आप पहले परिवार से बात कर सकते हैं।",
      },
    ],
  },
  "stay-away-from-strange-links-and-apps": {
    title: "अजीब लिंक और ऐप्स से दूर रहें",
    summary: "अनजान नंबरों के लिंक और स्टोर से बाहर के ऐप्स।",
    steps: [
      {
        title: "अनजान नंबरों के लिंक पर न दबाएँ",
        body: "संदेश कितना भी दोस्ताना लगे, अनजान नंबर का लिंक कुछ नुकसानदेह इंस्टॉल कर सकता है।",
      },
      {
        title: "ऐप का नाम और बनाने वाला देखें",
        body: "इंस्टॉल करने से पहले ऐप का नाम और उसे बनाने वाले का नाम पढ़ें। ग़लत लिखा नाम चेतावनी है।",
      },
      {
        title: "सिर्फ़ आधिकारिक स्टोर से इंस्टॉल करें",
        body: "फ़ोन पर Play Store या App Store का इस्तेमाल करें। संदेश से आई कोई भी फ़ाइल छोड़ दें।",
      },
      {
        title: "कुछ नया इंस्टॉल करने से पहले पूछें",
        body: "परिवार के किसी सदस्य से साथ देखने को कहें। दो जोड़ी आँखें एक से बेहतर हैं।",
      },
    ],
  },
  "check-first-when-family-is-in-trouble": {
    title: "'परिवार' मुसीबत में हो तो पहले जाँचें",
    summary: "ठग खुद को ऐसा रिश्तेदार बताते हैं जिसे फौरन पैसे चाहिए।",
    steps: [
      {
        title: "ठग परिवार का रूप धरते हैं",
        body: "वे जाना-पहचाना फ़ोटो और नाम इस्तेमाल कर सकते हैं, नए नंबर से, यह कहकर कि उनका फ़ोन टूट गया है।",
      },
      {
        title: "उस व्यक्ति को उनके पुराने नंबर पर कॉल करें",
        body: "नए नंबर का जवाब न दें। उस व्यक्ति के लिए पहले से सहेजे नंबर पर फ़ोन करें।",
      },
      {
        title: "ऐसा सवाल पूछें जो सिर्फ़ वही जानता हो",
        body: "कुछ निजी पर हानिरहित पूछें, जैसे उनके पहले पालतू का नाम या उनका पुराना घर।",
      },
      {
        title: "जल्दी में कभी पैसे न भेजें",
        body: "कितनी भी जल्दी क्यों न लगे, तब तक रुकें जब तक उनकी असली आवाज़ में बात न हो जाए।",
      },
    ],
  },
  "the-safety-quiz": {
    title: "सुरक्षा प्रश्नोत्तरी",
    summary: "पाँच छोटे सवाल, यह देखने के लिए कि आपने क्या सीखा। कोई समय सीमा नहीं, कोई नंबर नहीं।",
    steps: [],
    quiz: [
      {
        question:
          "कोई फ़ोन करके कहता है कि वह आपके बैंक से है। वह आपके फ़ोन पर आए कोड को माँगता है। आप क्या करेंगे?",
        options: ["कोड उसे बोल दें", "मना करें और फ़ोन काट दें", "संदेश से भेज दें"],
        why: "आपका कोड सिर्फ़ आपके लिए है। असली बैंक कभी नहीं माँगेगा।",
      },
      {
        question:
          "संदेश कहता है कि आपने इनाम जीता है, पर पहले छोटी फ़ीस देनी होगी। यह क्या है?",
        options: ["असली इनाम", "धोखा", "बैंक का ऑफ़र"],
        why: "कोई असली इनाम मिलने से पहले पैसे नहीं माँगता।",
      },
      {
        question: "कैसे पता चले कि वेबसाइट इस्तेमाल करना ज़्यादा सुरक्षित है?",
        options: [
          "उसमें चमकीले रंग हैं",
          "पता पट्टी में ताला दिखता है",
          "वह जल्दी खुलती है",
        ],
        why: "ताला बताता है कि कनेक्शन निजी है। यह गारंटी नहीं, पर ताले का न होना चेतावनी है।",
      },
      {
        question:
          "आपका 'पोता' नए नंबर से संदेश भेजकर फौरन पैसे माँगता है। आप पहले क्या करेंगे?",
        options: [
          "जल्दी से पैसे भेज दें",
          "उसके पुराने नंबर पर कॉल करके जाँचें",
          "नए नंबर पर जवाब दें",
        ],
        why: "कुछ भी भेजने से पहले हमेशा उसी नंबर पर जाँचें जो आप पहले से जानते हैं।",
      },
      {
        question: "अनजान नंबर से एक लिंक आता है। सबसे सुरक्षित क्या है?",
        options: ["देखने के लिए उस पर दबाएँ", "बिना दबाए हटा दें", "किसी दोस्त को भेज दें"],
        why: "अनजान नंबरों के लिंक नुकसानदेह चीज़ें इंस्टॉल कर सकते हैं। उन्हें हटा दें।",
      },
    ],
  },
};

const emptyPack: LessonPack = {};

export const lessonTranslations: Record<Locale, LessonPack> = {
  en: emptyPack,
  hi: hiLessons,
  bn: bnLessons,
  ta: taLessons,
  te: teLessons,
  mr: mrLessons,
  gu: guLessons,
  kn: knLessons,
  ml: mlLessons,
  pa: paLessons,
  or: orLessons,
  as: asLessons,
};
