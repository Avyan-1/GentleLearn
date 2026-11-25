import type { UiDict, Locale } from "@/lib/i18n";

/**
 * Interface text for the pages beyond the lessons flow: learners, family
 * corner, ask, account, plans and help. Kept in one file so the wording of a
 * form or a button can be compared across all eleven languages at a glance.
 */
export const siteDictionaries: Record<Locale, UiDict> = {
  en: {},

  /* --------------------------------------------------------------------- */
  hi: {
    "Who is learning today?": "आज कौन सीख रहा है?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "अपना नाम दबाएँ। आपके पाठ और प्रगति सिर्फ़ आपके लिए रखे जाते हैं।",
    "No names yet": "अभी कोई नाम नहीं",
    "A family member can add the first learner in the Family corner.":
      "परिवार का कोई सदस्य परिवार कोने में पहला सीखने वाला जोड़ सकता है।",
    "Go to the Family corner": "परिवार कोने पर जाएँ",
    "Ready for the first lesson": "पहले पाठ के लिए तैयार",
    "1 lesson finished": "1 पाठ पूरा",
    "{n} lessons finished": "{n} पाठ पूरे",
    "Add someone new": "किसी नए को जोड़ें",
    "A family member can set this up": "परिवार का कोई सदस्य इसे सेट कर सकता है",

    "Ask a question": "सवाल पूछें",
    "Type it in your own words. A family member will see it in the Family corner.":
      "अपने शब्दों में लिखें। परिवार का कोई सदस्य इसे परिवार कोने में देखेगा।",
    "Add a learner in the Family corner first, then come back to ask.":
      "पहले परिवार कोने में सीखने वाला जोड़ें, फिर पूछने के लिए वापस आएँ।",
    "Choose who is learning today, then come back to ask.":
      "चुनें कि आज कौन सीख रहा है, फिर पूछने के लिए वापस आएँ।",
    "What would you like to ask, {name}?":
      "{name}, आप क्या पूछना चाहेंगे?",
    "For example: How do I send a photo to my sister?":
      "जैसे: मैं अपनी बहन को तस्वीर कैसे भेजूँ?",
    "Send my question": "मेरा सवाल भेजें",
    "Free plan: 3 questions a day per learner.":
      "मुफ़्त योजना: हर सीखने वाले के लिए दिन में 3 सवाल।",
    "Thank you — your question is saved for your family to read.":
      "धन्यवाद — आपका सवाल परिवार के पढ़ने के लिए सहेज दिया गया है।",
    "Your questions": "आपके सवाल",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "अभी कुछ नहीं। कुछ भी पूछें — यहाँ कोई सवाल बेतुका नहीं होता।",
    "Waiting for a family member to answer":
      "परिवार के किसी सदस्य के जवाब का इंतज़ार है",

    "Your account": "आपका खाता",
    "One account for your family, kept private and safe.":
      "पूरे परिवार के लिए एक खाता, निजी और सुरक्षित।",
    Plan: "योजना",
    "Free — your current plan": "मुफ़्त — आपकी वर्तमान योजना",
    Learners: "सीखने वाले",
    "None yet": "अभी कोई नहीं",
    "See plans": "योजनाएँ देखें",
    "Tap one — you can change it anytime.":
      "एक दबाएँ — आप इसे कभी भी बदल सकते हैं।",
    "Signing out": "साइन आउट करना",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "आपके पाठ सहेजे रहते हैं। आप अपने फ़ोन नंबर और पासवर्ड से फिर साइन इन कर सकते हैं।",
    "Sign out": "साइन आउट करें",
    "Need help?": "मदद चाहिए?",
    "Read the sign-in guide": "साइन इन की गाइड पढ़ें",

    "How to sign in": "साइन इन कैसे करें",
    "Signing in": "साइन इन करना",
    "Making an account": "खाता बनाना",
    "A family member does this once.": "परिवार का कोई सदस्य इसे एक बार करता है।",
    "Open GentleLearn in your web browser.":
      "अपने वेब ब्राउज़र में GentleLearn खोलें।",
    "Type your phone number and your password.":
      "अपना फ़ोन नंबर और पासवर्ड लिखें।",
    "Tap Sign in.": "साइन इन दबाएँ।",
    "Then tap your name to begin your lesson.":
      "फिर अपना नाम दबाएँ और पाठ शुरू करें।",
    "Tap Account at the top of the screen.":
      "स्क्रीन के ऊपर खाता दबाएँ।",
    "Type the family's phone number.": "परिवार का फ़ोन नंबर लिखें।",
    "Choose a password and type it again.":
      "एक पासवर्ड चुनें और उसे फिर से लिखें।",
    "Tap Create my account, then add learners in the Family corner.":
      "मेरा खाता बनाएँ दबाएँ, फिर परिवार कोने में सीखने वाले जोड़ें।",
    "Your account is kept safe. Keep your password to yourself.":
      "आपका खाता सुरक्षित रहता है। अपना पासवर्ड अपने पास रखें।",
    "Back to home": "घर पर वापस",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "आपके परिवार के लिए आसान चुनाव। आज मुफ़्त आपका है — कुछ नहीं देना।",
    "Your current plan": "आपकी वर्तमान योजना",
    "Read this aloud in every lesson": "हर पाठ में ज़ोर से पढ़ना",
    "3 questions a day per learner": "हर सीखने वाले के लिए दिन में 3 सवाल",
    "Hands-free voice guidance": "बिना हाथ लगाए आवाज़ मार्गदर्शन",
    "Unlimited questions": "असीमित सवाल",
    "All 60 extra lessons": "सभी 60 अतिरिक्त पाठ",
    "Hands-free voice and unlimited questions":
      "बिना हाथ लगाए आवाज़ और असीमित सवाल",
    "Choose Plus": "Plus चुनें",
    "Choose Family": "परिवार चुनें",
    "Coming soon": "जल्द आ रहा है",
    "✓ Your current plan": "✓ आपकी वर्तमान योजना",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "भुगतान जल्द आ रहा है। आज कोई भुगतान नहीं लिया जाता। आपकी वर्तमान योजना वही रहेगी।",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "जो चीज़ें सेट करते हैं उनके लिए शांत सहायक। सिर्फ़ ज़रूरी — कोई बोझ नहीं।",
    "Add a family member to learn": "सीखने के लिए परिवार का सदस्य जोड़ें",
    "Their name": "उनका नाम",
    "Type their name, e.g. Mary": "उनका नाम लिखें, जैसे मीरा",
    Add: "जोड़ें",
    "{name} is ready to learn": "{name} सीखने के लिए तैयार है",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "उनके पाठ तैयार हैं। नीचे दबाएँ और पहला पाठ एक ही दबाव दूर है।",
    "Start learning as {name}": "{name} के रूप में सीखना शुरू करें",
    "No learners yet. Add the first name above.":
      "अभी कोई सीखने वाला नहीं। ऊपर पहला नाम जोड़ें।",
    "New name": "नया नाम",
    Save: "सहेजें",
    Cancel: "रद्द करें",
    "Change name": "नाम बदलें",
    Remove: "हटाएँ",
    "Remove {name}? Their progress will be deleted.":
      "{name} को हटाएँ? उनकी प्रगति मिट जाएगी।",
    "Learning as {name}": "{name} के रूप में सीख रहे हैं",
    "Learn as {name}": "{name} के रूप में सीखें",
    "Open lessons →": "पाठ खोलें →",
    "See lesson progress": "पाठ की प्रगति देखें",
    Finished: "पूरा",
    "Not started": "शुरू नहीं हुआ",
    "Questions from learners": "सीखने वालों के सवाल",
    "No questions yet. They will appear here when a learner asks one.":
      "अभी कोई सवाल नहीं। जब कोई सीखने वाला पूछेगा, वह यहाँ दिखेगा।",
    "From {name}": "{name} की ओर से",
    "Everything here is private to your family and only used to keep lessons personal.":
      "यहाँ सब कुछ आपके परिवार के लिए निजी है और सिर्फ़ पाठों को व्यक्तिगत रखने के लिए इस्तेमाल होता है।",
  },

  /* --------------------------------------------------------------------- */
  bn: {
    "Who is learning today?": "আজ কে শিখছে?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "আপনার নাম চাপুন। আপনার পাঠ ও অগ্রগতি শুধু আপনার জন্য রাখা হয়।",
    "No names yet": "এখনও কোনো নাম নেই",
    "A family member can add the first learner in the Family corner.":
      "পরিবারের কেউ পরিবার কোণে প্রথম শিক্ষার্থী যোগ করতে পারেন।",
    "Go to the Family corner": "পরিবার কোণে যান",
    "Ready for the first lesson": "প্রথম পাঠের জন্য তৈরি",
    "1 lesson finished": "১টি পাঠ শেষ",
    "{n} lessons finished": "{n}টি পাঠ শেষ",
    "Add someone new": "নতুন কাউকে যোগ করুন",
    "A family member can set this up": "পরিবারের কেউ এটি সেট করতে পারেন",

    "Ask a question": "প্রশ্ন করুন",
    "Type it in your own words. A family member will see it in the Family corner.":
      "নিজের ভাষায় লিখুন। পরিবারের কেউ এটি পরিবার কোণে দেখবেন।",
    "Add a learner in the Family corner first, then come back to ask.":
      "আগে পরিবার কোণে একজন শিক্ষার্থী যোগ করুন, তারপর প্রশ্ন করতে ফিরে আসুন।",
    "Choose who is learning today, then come back to ask.":
      "আজ কে শিখছে বেছে নিন, তারপর প্রশ্ন করতে ফিরে আসুন।",
    "What would you like to ask, {name}?": "{name}, আপনি কী জানতে চান?",
    "For example: How do I send a photo to my sister?":
      "যেমন: আমি কীভাবে আমার বোনকে ছবি পাঠাব?",
    "Send my question": "আমার প্রশ্ন পাঠান",
    "Free plan: 3 questions a day per learner.":
      "বিনামূল্যে পরিকল্পনা: প্রত্যেক শিক্ষার্থীর জন্য দিনে ৩টি প্রশ্ন।",
    "Thank you — your question is saved for your family to read.":
      "ধন্যবাদ — আপনার প্রশ্ন পরিবারের পড়ার জন্য সংরক্ষিত হয়েছে।",
    "Your questions": "আপনার প্রশ্ন",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "এখনও কিছু নেই। যা খুশি জিজ্ঞাসা করুন — এখানে কোনো প্রশ্নই বোকা নয়।",
    "Waiting for a family member to answer":
      "পরিবারের কারও উত্তরের অপেক্ষায়",

    "Your account": "আপনার অ্যাকাউন্ট",
    "One account for your family, kept private and safe.":
      "আপনার পরিবারের জন্য একটি অ্যাকাউন্ট, গোপন ও নিরাপদ।",
    Plan: "পরিকল্পনা",
    "Free — your current plan": "বিনামূল্যে — আপনার বর্তমান পরিকল্পনা",
    Learners: "শিক্ষার্থী",
    "None yet": "এখনও কেউ নেই",
    "See plans": "পরিকল্পনা দেখুন",
    "Tap one — you can change it anytime.":
      "একটি চাপুন — যেকোনো সময় বদলাতে পারেন।",
    "Signing out": "সাইন আউট করা",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "আপনার পাঠ সংরক্ষিত থাকে। ফোন নম্বর ও পাসওয়ার্ড দিয়ে আবার সাইন ইন করতে পারেন।",
    "Sign out": "সাইন আউট করুন",
    "Need help?": "সাহায্য দরকার?",
    "Read the sign-in guide": "সাইন ইন নির্দেশিকা পড়ুন",

    "How to sign in": "কীভাবে সাইন ইন করবেন",
    "Signing in": "সাইন ইন করা",
    "Making an account": "অ্যাকাউন্ট তৈরি করা",
    "A family member does this once.": "পরিবারের কেউ এটি একবার করেন।",
    "Open GentleLearn in your web browser.":
      "আপনার ওয়েব ব্রাউজারে GentleLearn খুলুন।",
    "Type your phone number and your password.":
      "আপনার ফোন নম্বর ও পাসওয়ার্ড লিখুন।",
    "Tap Sign in.": "সাইন ইন চাপুন।",
    "Then tap your name to begin your lesson.":
      "তারপর আপনার নাম চেপে পাঠ শুরু করুন।",
    "Tap Account at the top of the screen.": "স্ক্রিনের উপরে অ্যাকাউন্ট চাপুন।",
    "Type the family's phone number.": "পরিবারের ফোন নম্বর লিখুন।",
    "Choose a password and type it again.":
      "একটি পাসওয়ার্ড বেছে নিয়ে আবার লিখুন।",
    "Tap Create my account, then add learners in the Family corner.":
      "আমার অ্যাকাউন্ট তৈরি করুন চাপুন, তারপর পরিবার কোণে শিক্ষার্থী যোগ করুন।",
    "Your account is kept safe. Keep your password to yourself.":
      "আপনার অ্যাকাউন্ট নিরাপদ থাকে। পাসওয়ার্ড নিজের কাছে রাখুন।",
    "Back to home": "হোমে ফিরুন",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "আপনার পরিবারের জন্য সহজ পছন্দ। আজ বিনামূল্যে আপনার — কিছু দিতে হবে না।",
    "Your current plan": "আপনার বর্তমান পরিকল্পনা",
    "Read this aloud in every lesson": "প্রতিটি পাঠে জোরে পড়া",
    "3 questions a day per learner": "প্রতি শিক্ষার্থীর জন্য দিনে ৩টি প্রশ্ন",
    "Hands-free voice guidance": "হাত না লাগিয়ে কণ্ঠ নির্দেশনা",
    "Unlimited questions": "আনলিমিটেড প্রশ্ন",
    "All 60 extra lessons": "সব ৬০টি অতিরিক্ত পাঠ",
    "Hands-free voice and unlimited questions":
      "হাত না লাগিয়ে কণ্ঠ ও আনলিমিটেড প্রশ্ন",
    "Choose Plus": "Plus বেছে নিন",
    "Choose Family": "পরিবার বেছে নিন",
    "Coming soon": "শীঘ্রই আসছে",
    "✓ Your current plan": "✓ আপনার বর্তমান পরিকল্পনা",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "পেমেন্ট শীঘ্রই আসছে। আজ কোনো পেমেন্ট নেওয়া হয় না। আপনার বর্তমান পরিকল্পনা একই থাকবে।",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "যাঁরা জিনিসগুলো সেট করেন তাঁদের জন্য শান্ত সহায়ক। শুধু যা দরকার — কোনো জটিলতা নয়।",
    "Add a family member to learn": "শিখতে পরিবারের একজনকে যোগ করুন",
    "Their name": "তাঁদের নাম",
    "Type their name, e.g. Mary": "তাঁদের নাম লিখুন, যেমন মীরা",
    Add: "যোগ করুন",
    "{name} is ready to learn": "{name} শিখতে প্রস্তুত",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "তাঁদের পাঠ তৈরি। নিচে চাপুন, প্রথম পাঠ এক চাপ দূরে।",
    "Start learning as {name}": "{name} হিসেবে শেখা শুরু করুন",
    "No learners yet. Add the first name above.":
      "এখনও কোনো শিক্ষার্থী নেই। উপরে প্রথম নাম যোগ করুন।",
    "New name": "নতুন নাম",
    Save: "সংরক্ষণ",
    Cancel: "বাতিল",
    "Change name": "নাম বদলান",
    Remove: "সরান",
    "Remove {name}? Their progress will be deleted.":
      "{name}-কে সরাবেন? তাঁদের অগ্রগতি মুছে যাবে।",
    "Learning as {name}": "{name} হিসেবে শিখছেন",
    "Learn as {name}": "{name} হিসেবে শিখুন",
    "Open lessons →": "পাঠ খুলুন →",
    "See lesson progress": "পাঠের অগ্রগতি দেখুন",
    Finished: "শেষ",
    "Not started": "শুরু হয়নি",
    "Questions from learners": "শিক্ষার্থীদের প্রশ্ন",
    "No questions yet. They will appear here when a learner asks one.":
      "এখনও কোনো প্রশ্ন নেই। কোনো শিক্ষার্থী প্রশ্ন করলে এখানে দেখা যাবে।",
    "From {name}": "{name}-এর কাছ থেকে",
    "Everything here is private to your family and only used to keep lessons personal.":
      "এখানে সবকিছু আপনার পরিবারের জন্য গোপন এবং শুধু পাঠ ব্যক্তিগত রাখতে ব্যবহৃত হয়।",
  },

  /* --------------------------------------------------------------------- */
  ta: {
    "Who is learning today?": "இன்று யார் கற்கிறார்கள்?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "உங்கள் பெயரைத் தட்டுங்கள். உங்கள் பாடங்களும் முன்னேற்றமும் உங்களுக்கே தனியாக வைக்கப்படும்.",
    "No names yet": "இன்னும் பெயர்கள் இல்லை",
    "A family member can add the first learner in the Family corner.":
      "குடும்பத்தில் ஒருவர் குடும்ப மூலையில் முதல் கற்பவரைச் சேர்க்கலாம்.",
    "Go to the Family corner": "குடும்ப மூலைக்குச் செல்லுங்கள்",
    "Ready for the first lesson": "முதல் பாடத்திற்குத் தயார்",
    "1 lesson finished": "1 பாடம் முடிந்தது",
    "{n} lessons finished": "{n} பாடங்கள் முடிந்தன",
    "Add someone new": "புதிய ஒருவரைச் சேருங்கள்",
    "A family member can set this up": "குடும்பத்தில் ஒருவர் இதை அமைக்கலாம்",

    "Ask a question": "ஒரு கேள்வி கேளுங்கள்",
    "Type it in your own words. A family member will see it in the Family corner.":
      "உங்கள் சொந்த வார்த்தைகளில் எழுதுங்கள். குடும்பத்தில் ஒருவர் அதைக் குடும்ப மூலையில் பார்ப்பார்.",
    "Add a learner in the Family corner first, then come back to ask.":
      "முதலில் குடும்ப மூலையில் ஒரு கற்பவரைச் சேருங்கள், பிறகு கேட்க வாருங்கள்.",
    "Choose who is learning today, then come back to ask.":
      "இன்று யார் கற்கிறார்கள் எனத் தேர்ந்தெடுத்து, பிறகு கேட்க வாருங்கள்.",
    "What would you like to ask, {name}?": "{name}, நீங்கள் என்ன கேட்க விரும்புகிறீர்கள்?",
    "For example: How do I send a photo to my sister?":
      "எடுத்துக்காட்டு: என் சகோதரிக்கு புகைப்படத்தை எப்படி அனுப்புவது?",
    "Send my question": "என் கேள்வியை அனுப்பு",
    "Free plan: 3 questions a day per learner.":
      "இலவச திட்டம்: ஒவ்வொரு கற்பவருக்கும் நாளுக்கு 3 கேள்விகள்.",
    "Thank you — your question is saved for your family to read.":
      "நன்றி — உங்கள் கேள்வி குடும்பம் படிக்கச் சேமிக்கப்பட்டது.",
    "Your questions": "உங்கள் கேள்விகள்",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "இன்னும் ஒன்றுமில்லை. எதையும் கேளுங்கள் — இங்கே முட்டாள் கேள்வி என்று ஒன்றில்லை.",
    "Waiting for a family member to answer":
      "குடும்பத்தில் ஒருவர் பதிலளிக்கக் காத்திருக்கிறது",

    "Your account": "உங்கள் கணக்கு",
    "One account for your family, kept private and safe.":
      "உங்கள் குடும்பத்திற்கு ஒரு கணக்கு, தனிப்பட்டதாகவும் பாதுகாப்பாகவும்.",
    Plan: "திட்டம்",
    "Free — your current plan": "இலவசம் — உங்கள் தற்போதைய திட்டம்",
    Learners: "கற்பவர்கள்",
    "None yet": "இன்னும் யாருமில்லை",
    "See plans": "திட்டங்களைப் பார்க்க",
    "Tap one — you can change it anytime.":
      "ஒன்றைத் தட்டுங்கள் — எப்போது வேண்டுமானாலும் மாற்றலாம்.",
    "Signing out": "வெளியேறுதல்",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "உங்கள் பாடங்கள் சேமிக்கப்பட்டே இருக்கும். உங்கள் தொலைபேசி எண்ணும் கடவுச்சொல்லும் கொண்டு மீண்டும் உள்நுழையலாம்.",
    "Sign out": "வெளியேறு",
    "Need help?": "உதவி தேவையா?",
    "Read the sign-in guide": "உள்நுழைவு வழிகாட்டியைப் படியுங்கள்",

    "How to sign in": "எப்படி உள்நுழைவது",
    "Signing in": "உள்நுழைதல்",
    "Making an account": "கணக்கு உருவாக்குதல்",
    "A family member does this once.": "குடும்பத்தில் ஒருவர் இதை ஒருமுறை செய்வார்.",
    "Open GentleLearn in your web browser.":
      "உங்கள் இணைய உலாவியில் GentleLearn திறங்கள்.",
    "Type your phone number and your password.":
      "உங்கள் தொலைபேசி எண்ணையும் கடவுச்சொல்லையும் தட்டச்சு செய்யுங்கள்.",
    "Tap Sign in.": "உள்நுழைக என்பதைத் தட்டுங்கள்.",
    "Then tap your name to begin your lesson.":
      "பிறகு உங்கள் பெயரைத் தட்டி பாடத்தைத் தொடங்குங்கள்.",
    "Tap Account at the top of the screen.":
      "திரையின் மேலே கணக்கு என்பதைத் தட்டுங்கள்.",
    "Type the family's phone number.": "குடும்பத்தின் தொலைபேசி எண்ணைத் தட்டச்சு செய்யுங்கள்.",
    "Choose a password and type it again.":
      "ஒரு கடவுச்சொல்லைத் தேர்ந்தெடுத்து மீண்டும் தட்டச்சு செய்யுங்கள்.",
    "Tap Create my account, then add learners in the Family corner.":
      "என் கணக்கை உருவாக்கு என்பதைத் தட்டி, பிறகு குடும்ப மூலையில் கற்பவர்களைச் சேருங்கள்.",
    "Your account is kept safe. Keep your password to yourself.":
      "உங்கள் கணக்கு பாதுகாப்பாக இருக்கும். கடவுச்சொல்லை உங்களிடமே வைத்திருங்கள்.",
    "Back to home": "முகப்புக்குத் திரும்பு",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "உங்கள் குடும்பத்திற்கு எளிய தேர்வு. இன்று இலவசம் உங்களுடையது — எதுவும் செலுத்த வேண்டாம்.",
    "Your current plan": "உங்கள் தற்போதைய திட்டம்",
    "Read this aloud in every lesson": "ஒவ்வொரு பாடத்திலும் சத்தமாகப் படித்தல்",
    "3 questions a day per learner": "ஒவ்வொரு கற்பவருக்கும் நாளுக்கு 3 கேள்விகள்",
    "Hands-free voice guidance": "கை பயன்படுத்தாத குரல் வழிகாட்டுதல்",
    "Unlimited questions": "வரம்பற்ற கேள்விகள்",
    "All 60 extra lessons": "அனைத்து 60 கூடுதல் பாடங்கள்",
    "Hands-free voice and unlimited questions":
      "கை பயன்படுத்தாத குரல் மற்றும் வரம்பற்ற கேள்விகள்",
    "Choose Plus": "Plus தேர்ந்தெடு",
    "Choose Family": "குடும்பம் தேர்ந்தெடு",
    "Coming soon": "விரைவில் வருகிறது",
    "✓ Your current plan": "✓ உங்கள் தற்போதைய திட்டம்",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "பணம் செலுத்துதல் விரைவில் வருகிறது. இன்று எந்தப் பணமும் எடுக்கப்படவில்லை. உங்கள் தற்போதைய திட்டம் அதேபோல் இருக்கும்.",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "விஷயங்களை அமைப்பவர்களுக்கு அமைதியான உதவியாளர். தேவையானது மட்டும் — குழப்பம் இல்லை.",
    "Add a family member to learn": "கற்க குடும்ப உறுப்பினரைச் சேருங்கள்",
    "Their name": "அவர்களின் பெயர்",
    "Type their name, e.g. Mary": "அவர்களின் பெயரைத் தட்டச்சு செய்யுங்கள், எ.கா. மீரா",
    Add: "சேர்",
    "{name} is ready to learn": "{name} கற்கத் தயார்",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "அவர்களின் பாடங்கள் தயார். கீழே தட்டுங்கள், முதல் பாடம் ஒரு தட்டில்.",
    "Start learning as {name}": "{name} ஆக கற்கத் தொடங்குங்கள்",
    "No learners yet. Add the first name above.":
      "இன்னும் கற்பவர்கள் இல்லை. மேலே முதல் பெயரைச் சேருங்கள்.",
    "New name": "புதிய பெயர்",
    Save: "சேமி",
    Cancel: "ரத்து செய்",
    "Change name": "பெயரை மாற்று",
    Remove: "நீக்கு",
    "Remove {name}? Their progress will be deleted.":
      "{name} நீக்கவா? அவர்களின் முன்னேற்றம் அழிக்கப்படும்.",
    "Learning as {name}": "{name} ஆக கற்கிறீர்கள்",
    "Learn as {name}": "{name} ஆக கற்க",
    "Open lessons →": "பாடங்களைத் திற →",
    "See lesson progress": "பாட முன்னேற்றத்தைப் பார்",
    Finished: "முடிந்தது",
    "Not started": "தொடங்கவில்லை",
    "Questions from learners": "கற்பவர்களின் கேள்விகள்",
    "No questions yet. They will appear here when a learner asks one.":
      "இன்னும் கேள்விகள் இல்லை. ஒரு கற்பவர் கேட்கும்போது இங்கே தோன்றும்.",
    "From {name}": "{name} இடமிருந்து",
    "Everything here is private to your family and only used to keep lessons personal.":
      "இங்கே எல்லாம் உங்கள் குடும்பத்திற்குத் தனிப்பட்டது, பாடங்களை தனிப்பட்டதாக வைக்க மட்டுமே பயன்படுத்தப்படுகிறது.",
  },

  /* --------------------------------------------------------------------- */
  te: {
    "Who is learning today?": "ఈరోజు ఎవరు నేర్చుకుంటున్నారు?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "మీ పేరు నొక్కండి. మీ పాఠాలు, పురోగతి మీ కోసమే ఉంచబడతాయి.",
    "No names yet": "ఇంకా పేర్లు లేవు",
    "A family member can add the first learner in the Family corner.":
      "కుటుంబంలో ఒకరు కుటుంబ మూలలో మొదటి నేర్చుకునేవారిని జోడించవచ్చు.",
    "Go to the Family corner": "కుటుంబ మూలకు వెళ్లండి",
    "Ready for the first lesson": "మొదటి పాఠానికి సిద్ధం",
    "1 lesson finished": "1 పాఠం పూర్తయింది",
    "{n} lessons finished": "{n} పాఠాలు పూర్తయ్యాయి",
    "Add someone new": "కొత్తవారిని జోడించండి",
    "A family member can set this up": "కుటుంబంలో ఒకరు దీన్ని సెట్ చేయవచ్చు",

    "Ask a question": "ప్రశ్న అడగండి",
    "Type it in your own words. A family member will see it in the Family corner.":
      "మీ మాటల్లో రాయండి. కుటుంబంలో ఒకరు దాన్ని కుటుంబ మూలలో చూస్తారు.",
    "Add a learner in the Family corner first, then come back to ask.":
      "మొదట కుటుంబ మూలలో ఒక నేర్చుకునేవారిని జోడించి, తర్వాత అడగడానికి రండి.",
    "Choose who is learning today, then come back to ask.":
      "ఈరోజు ఎవరు నేర్చుకుంటున్నారో ఎంచుకుని, తర్వాత అడగడానికి రండి.",
    "What would you like to ask, {name}?": "{name}, మీరు ఏమి అడగాలనుకుంటున్నారు?",
    "For example: How do I send a photo to my sister?":
      "ఉదాహరణ: నా సోదరికి ఫోటో ఎలా పంపాలి?",
    "Send my question": "నా ప్రశ్న పంపండి",
    "Free plan: 3 questions a day per learner.":
      "ఉచిత ప్రణాళిక: ప్రతి నేర్చుకునేవారికి రోజుకు 3 ప్రశ్నలు.",
    "Thank you — your question is saved for your family to read.":
      "ధన్యవాదాలు — మీ ప్రశ్న కుటుంబం చదవడానికి భద్రపరచబడింది.",
    "Your questions": "మీ ప్రశ్నలు",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "ఇంకా ఏమీ లేదు. ఏదైనా అడగండి — ఇక్కడ తెలివితక్కువ ప్రశ్న అనేది లేదు.",
    "Waiting for a family member to answer":
      "కుటుంబంలో ఒకరి సమాధానం కోసం వేచి ఉంది",

    "Your account": "మీ ఖాతా",
    "One account for your family, kept private and safe.":
      "మీ కుటుంబానికి ఒక ఖాతా, గోప్యంగా, సురక్షితంగా.",
    Plan: "ప్రణాళిక",
    "Free — your current plan": "ఉచితం — మీ ప్రస్తుత ప్రణాళిక",
    Learners: "నేర్చుకునేవారు",
    "None yet": "ఇంకా ఎవరూ లేరు",
    "See plans": "ప్రణాళికలు చూడండి",
    "Tap one — you can change it anytime.":
      "ఒకటి నొక్కండి — ఎప్పుడైనా మార్చుకోవచ్చు.",
    "Signing out": "సైన్ అవుట్ చేయడం",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "మీ పాఠాలు భద్రంగా ఉంటాయి. మీ ఫోన్ నంబర్, పాస్‌వర్డ్‌తో మళ్లీ సైన్ ఇన్ చేయవచ్చు.",
    "Sign out": "సైన్ అవుట్",
    "Need help?": "సహాయం కావాలా?",
    "Read the sign-in guide": "సైన్ ఇన్ గైడ్ చదవండి",

    "How to sign in": "సైన్ ఇన్ ఎలా చేయాలి",
    "Signing in": "సైన్ ఇన్ చేయడం",
    "Making an account": "ఖాతా తెరవడం",
    "A family member does this once.": "కుటుంబంలో ఒకరు దీన్ని ఒకసారి చేస్తారు.",
    "Open GentleLearn in your web browser.":
      "మీ వెబ్ బ్రౌజర్‌లో GentleLearn తెరవండి.",
    "Type your phone number and your password.":
      "మీ ఫోన్ నంబర్, పాస్‌వర్డ్ టైప్ చేయండి.",
    "Tap Sign in.": "సైన్ ఇన్ నొక్కండి.",
    "Then tap your name to begin your lesson.":
      "తర్వాత మీ పేరు నొక్కి పాఠం ప్రారంభించండి.",
    "Tap Account at the top of the screen.":
      "స్క్రీన్ పైన ఖాతా నొక్కండి.",
    "Type the family's phone number.": "కుటుంబం ఫోన్ నంబర్ టైప్ చేయండి.",
    "Choose a password and type it again.":
      "ఒక పాస్‌వర్డ్ ఎంచుకుని మళ్లీ టైప్ చేయండి.",
    "Tap Create my account, then add learners in the Family corner.":
      "నా ఖాతా తెరవండి నొక్కి, తర్వాత కుటుంబ మూలలో నేర్చుకునేవారిని జోడించండి.",
    "Your account is kept safe. Keep your password to yourself.":
      "మీ ఖాతా సురక్షితంగా ఉంటుంది. పాస్‌వర్డ్ మీ దగ్గరే ఉంచుకోండి.",
    "Back to home": "హోమ్‌కు తిరిగి",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "మీ కుటుంబానికి సులభమైన ఎంపిక. ఈరోజు ఉచితం మీదే — ఏమీ చెల్లించాల్సిన అవసరం లేదు.",
    "Your current plan": "మీ ప్రస్తుత ప్రణాళిక",
    "Read this aloud in every lesson": "ప్రతి పాఠంలో బయటకు చదవడం",
    "3 questions a day per learner": "ప్రతి నేర్చుకునేవారికి రోజుకు 3 ప్రశ్నలు",
    "Hands-free voice guidance": "చేతులు వాడకుండా వాయిస్ మార్గదర్శనం",
    "Unlimited questions": "అపరిమిత ప్రశ్నలు",
    "All 60 extra lessons": "అన్ని 60 అదనపు పాఠాలు",
    "Hands-free voice and unlimited questions":
      "చేతులు వాడకుండా వాయిస్, అపరిమిత ప్రశ్నలు",
    "Choose Plus": "Plus ఎంచుకోండి",
    "Choose Family": "కుటుంబం ఎంచుకోండి",
    "Coming soon": "త్వరలో వస్తుంది",
    "✓ Your current plan": "✓ మీ ప్రస్తుత ప్రణాళిక",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "చెల్లింపులు త్వరలో వస్తాయి. ఈరోజు ఏ చెల్లింపూ తీసుకోబడదు. మీ ప్రస్తుత ప్రణాళిక అలాగే ఉంటుంది.",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "ఏర్పాట్లు చేసేవారికి ప్రశాంత సహాయకుడు. అవసరమైనది మాత్రమే — గందరగోళం లేదు.",
    "Add a family member to learn": "నేర్చుకోవడానికి కుటుంబ సభ్యుడిని జోడించండి",
    "Their name": "వారి పేరు",
    "Type their name, e.g. Mary": "వారి పేరు టైప్ చేయండి, ఉదా. మీరా",
    Add: "జోడించు",
    "{name} is ready to learn": "{name} నేర్చుకోవడానికి సిద్ధం",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "వారి పాఠాలు సిద్ధంగా ఉన్నాయి. కింద నొక్కండి, మొదటి పాఠం ఒక నొక్కు దూరం.",
    "Start learning as {name}": "{name}గా నేర్చుకోవడం ప్రారంభించండి",
    "No learners yet. Add the first name above.":
      "ఇంకా నేర్చుకునేవారు లేరు. పైన మొదటి పేరు జోడించండి.",
    "New name": "కొత్త పేరు",
    Save: "భద్రపరచు",
    Cancel: "రద్దు",
    "Change name": "పేరు మార్చు",
    Remove: "తీసివేయి",
    "Remove {name}? Their progress will be deleted.":
      "{name}ను తీసివేయాలా? వారి పురోగతి తొలగించబడుతుంది.",
    "Learning as {name}": "{name}గా నేర్చుకుంటున్నారు",
    "Learn as {name}": "{name}గా నేర్చుకోండి",
    "Open lessons →": "పాఠాలు తెరవండి →",
    "See lesson progress": "పాఠ పురోగతి చూడండి",
    Finished: "పూర్తయింది",
    "Not started": "ప్రారంభించలేదు",
    "Questions from learners": "నేర్చుకునేవారి ప్రశ్నలు",
    "No questions yet. They will appear here when a learner asks one.":
      "ఇంకా ప్రశ్నలు లేవు. ఒకరు అడిగినప్పుడు ఇక్కడ కనిపిస్తాయి.",
    "From {name}": "{name} నుండి",
    "Everything here is private to your family and only used to keep lessons personal.":
      "ఇక్కడ ప్రతిదీ మీ కుటుంబానికి గోప్యం, పాఠాలను వ్యక్తిగతంగా ఉంచడానికి మాత్రమే ఉపయోగించబడుతుంది.",
  },

  /* --------------------------------------------------------------------- */
  mr: {
    "Who is learning today?": "आज कोण शिकत आहे?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "तुमचे नाव दाबा. तुमचे धडे आणि प्रगती फक्त तुमच्यासाठी ठेवली जाते.",
    "No names yet": "अजून नावे नाहीत",
    "A family member can add the first learner in the Family corner.":
      "कुटुंबातील कोणी कुटुंब कोपऱ्यात पहिला शिकणारा जोडू शकतो.",
    "Go to the Family corner": "कुटुंब कोपऱ्यात जा",
    "Ready for the first lesson": "पहिल्या धड्यासाठी तयार",
    "1 lesson finished": "1 धडा पूर्ण",
    "{n} lessons finished": "{n} धडे पूर्ण",
    "Add someone new": "नवीन कोणाला जोडा",
    "A family member can set this up": "कुटुंबातील कोणी हे सेट करू शकतो",

    "Ask a question": "प्रश्न विचारा",
    "Type it in your own words. A family member will see it in the Family corner.":
      "तुमच्या शब्दांत लिहा. कुटुंबातील कोणी तो कुटुंब कोपऱ्यात पाहील.",
    "Add a learner in the Family corner first, then come back to ask.":
      "आधी कुटुंब कोपऱ्यात शिकणारा जोडा, मग विचारायला परत या.",
    "Choose who is learning today, then come back to ask.":
      "आज कोण शिकत आहे ते निवडा, मग विचारायला परत या.",
    "What would you like to ask, {name}?": "{name}, तुम्हाला काय विचारायचे आहे?",
    "For example: How do I send a photo to my sister?":
      "उदाहरण: माझ्या बहिणीला फोटो कसा पाठवू?",
    "Send my question": "माझा प्रश्न पाठवा",
    "Free plan: 3 questions a day per learner.":
      "मोफत योजना: प्रत्येक शिकणाऱ्यासाठी दिवसाला 3 प्रश्न.",
    "Thank you — your question is saved for your family to read.":
      "धन्यवाद — तुमचा प्रश्न कुटुंबाने वाचण्यासाठी साठवला आहे.",
    "Your questions": "तुमचे प्रश्न",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "अजून काही नाही. काहीही विचारा — इथे मूर्ख प्रश्न असे काही नसते.",
    "Waiting for a family member to answer":
      "कुटुंबातील कोणाच्या उत्तराची वाट",

    "Your account": "तुमचे खाते",
    "One account for your family, kept private and safe.":
      "तुमच्या कुटुंबासाठी एक खाते, खाजगी आणि सुरक्षित.",
    Plan: "योजना",
    "Free — your current plan": "मोफत — तुमची सध्याची योजना",
    Learners: "शिकणारे",
    "None yet": "अजून कोणी नाही",
    "See plans": "योजना पाहा",
    "Tap one — you can change it anytime.":
      "एक दाबा — कधीही बदलू शकता.",
    "Signing out": "साइन आउट करणे",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "तुमचे धडे साठवलेले राहतात. तुमचा फोन नंबर आणि पासवर्डने पुन्हा साइन इन करू शकता.",
    "Sign out": "साइन आउट करा",
    "Need help?": "मदत हवी?",
    "Read the sign-in guide": "साइन इन मार्गदर्शक वाचा",

    "How to sign in": "साइन इन कसे करावे",
    "Signing in": "साइन इन करणे",
    "Making an account": "खाते तयार करणे",
    "A family member does this once.": "कुटुंबातील कोणी हे एकदा करतो.",
    "Open GentleLearn in your web browser.":
      "तुमच्या वेब ब्राउझरमध्ये GentleLearn उघडा.",
    "Type your phone number and your password.":
      "तुमचा फोन नंबर आणि पासवर्ड लिहा.",
    "Tap Sign in.": "साइन इन दाबा.",
    "Then tap your name to begin your lesson.":
      "मग तुमचे नाव दाबून धडा सुरू करा.",
    "Tap Account at the top of the screen.":
      "स्क्रीनच्या वर खाते दाबा.",
    "Type the family's phone number.": "कुटुंबाचा फोन नंबर लिहा.",
    "Choose a password and type it again.":
      "पासवर्ड निवडा आणि पुन्हा लिहा.",
    "Tap Create my account, then add learners in the Family corner.":
      "माझे खाते तयार करा दाबा, मग कुटुंब कोपऱ्यात शिकणारे जोडा.",
    "Your account is kept safe. Keep your password to yourself.":
      "तुमचे खाते सुरक्षित राहते. पासवर्ड स्वतःजवळ ठेवा.",
    "Back to home": "मुख्यपृष्ठावर परत",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "तुमच्या कुटुंबासाठी सोपी निवड. आज मोफत तुमचे — काही द्यायचे नाही.",
    "Your current plan": "तुमची सध्याची योजना",
    "Read this aloud in every lesson": "प्रत्येक धड्यात मोठ्याने वाचणे",
    "3 questions a day per learner": "प्रत्येक शिकणाऱ्यासाठी दिवसाला 3 प्रश्न",
    "Hands-free voice guidance": "हात न लावता आवाज मार्गदर्शन",
    "Unlimited questions": "अमर्यादित प्रश्न",
    "All 60 extra lessons": "सर्व 60 अतिरिक्त धडे",
    "Hands-free voice and unlimited questions":
      "हात न लावता आवाज आणि अमर्यादित प्रश्न",
    "Choose Plus": "Plus निवडा",
    "Choose Family": "कुटुंब निवडा",
    "Coming soon": "लवकरच येत आहे",
    "✓ Your current plan": "✓ तुमची सध्याची योजना",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "भुगतान लवकरच येत आहे. आज कोणतेही भुगतान घेतले जात नाही. तुमची सध्याची योजना तशीच राहील.",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "गोष्टी सेट करणाऱ्यांसाठी शांत मदतनीस. फक्त गरजेचे — गोंधळ नाही.",
    "Add a family member to learn": "शिकण्यासाठी कुटुंबातील सदस्य जोडा",
    "Their name": "त्यांचे नाव",
    "Type their name, e.g. Mary": "त्यांचे नाव लिहा, उदा. मीरा",
    Add: "जोडा",
    "{name} is ready to learn": "{name} शिकण्यास तयार आहे",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "त्यांचे धडे तयार आहेत. खाली दाबा, पहिला धडा एका दाबावर आहे.",
    "Start learning as {name}": "{name} म्हणून शिकायला सुरुवात करा",
    "No learners yet. Add the first name above.":
      "अजून शिकणारे नाहीत. वर पहिले नाव जोडा.",
    "New name": "नवीन नाव",
    Save: "साठवा",
    Cancel: "रद्द करा",
    "Change name": "नाव बदला",
    Remove: "काढा",
    "Remove {name}? Their progress will be deleted.":
      "{name} काढायचे? त्यांची प्रगती पुसली जाईल.",
    "Learning as {name}": "{name} म्हणून शिकत आहात",
    "Learn as {name}": "{name} म्हणून शिका",
    "Open lessons →": "धडे उघडा →",
    "See lesson progress": "धड्याची प्रगती पाहा",
    Finished: "पूर्ण",
    "Not started": "सुरू नाही",
    "Questions from learners": "शिकणाऱ्यांचे प्रश्न",
    "No questions yet. They will appear here when a learner asks one.":
      "अजून प्रश्न नाहीत. कोणी विचारले की इथे दिसतील.",
    "From {name}": "{name} कडून",
    "Everything here is private to your family and only used to keep lessons personal.":
      "इथले सर्व तुमच्या कुटुंबासाठी खाजगी आहे आणि फक्त धडे वैयक्तिक ठेवण्यासाठी वापरले जाते.",
  },

  /* --------------------------------------------------------------------- */
  gu: {
    "Who is learning today?": "આજે કોણ શીખે છે?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "તમારું નામ દબાવો. તમારા પાઠ અને પ્રગતિ ફક્ત તમારા માટે રાખવામાં આવે છે.",
    "No names yet": "હજી કોઈ નામ નથી",
    "A family member can add the first learner in the Family corner.":
      "પરિવારનું કોઈ પરિવાર ખૂણામાં પહેલો શીખનાર ઉમેરી શકે છે.",
    "Go to the Family corner": "પરિવાર ખૂણામાં જાઓ",
    "Ready for the first lesson": "પહેલા પાઠ માટે તૈયાર",
    "1 lesson finished": "1 પાઠ પૂરો",
    "{n} lessons finished": "{n} પાઠ પૂરા",
    "Add someone new": "નવું કોઈ ઉમેરો",
    "A family member can set this up": "પરિવારનું કોઈ આ સેટ કરી શકે છે",

    "Ask a question": "પ્રશ્ન પૂછો",
    "Type it in your own words. A family member will see it in the Family corner.":
      "તમારા શબ્દોમાં લખો. પરિવારનું કોઈ તેને પરિવાર ખૂણામાં જોશે.",
    "Add a learner in the Family corner first, then come back to ask.":
      "પહેલા પરિવાર ખૂણામાં શીખનાર ઉમેરો, પછી પૂછવા આવો.",
    "Choose who is learning today, then come back to ask.":
      "આજે કોણ શીખે છે તે પસંદ કરો, પછી પૂછવા આવો.",
    "What would you like to ask, {name}?": "{name}, તમે શું પૂછવા માંગો છો?",
    "For example: How do I send a photo to my sister?":
      "ઉદાહરણ: હું મારી બહેનને ફોટો કેવી રીતે મોકલું?",
    "Send my question": "મારો પ્રશ્ન મોકલો",
    "Free plan: 3 questions a day per learner.":
      "મફત યોજના: દરેક શીખનાર માટે દિવસે 3 પ્રશ્નો.",
    "Thank you — your question is saved for your family to read.":
      "આભાર — તમારો પ્રશ્ન પરિવાર વાંચવા માટે સાચવ્યો છે.",
    "Your questions": "તમારા પ્રશ્નો",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "હજી કંઈ નથી. કંઈ પણ પૂછો — અહીં મૂર્ખ પ્રશ્ન જેવું કંઈ નથી.",
    "Waiting for a family member to answer":
      "પરિવારના કોઈના જવાબની રાહ",

    "Your account": "તમારું ખાતું",
    "One account for your family, kept private and safe.":
      "તમારા પરિવાર માટે એક ખાતું, ખાનગી અને સુરક્ષિત.",
    Plan: "યોજના",
    "Free — your current plan": "મફત — તમારી હાલની યોજના",
    Learners: "શીખનારા",
    "None yet": "હજી કોઈ નહીં",
    "See plans": "યોજનાઓ જુઓ",
    "Tap one — you can change it anytime.":
      "એક દબાવો — તમે ગમે ત્યારે બદલી શકો છો.",
    "Signing out": "સાઇન આઉટ કરવું",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "તમારા પાઠ સાચવેલા રહે છે. તમે તમારા ફોન નંબર અને પાસવર્ડથી ફરી સાઇન ઇન કરી શકો છો.",
    "Sign out": "સાઇન આઉટ કરો",
    "Need help?": "મદદ જોઈએ?",
    "Read the sign-in guide": "સાઇન ઇન માર્ગદર્શિકા વાંચો",

    "How to sign in": "સાઇન ઇન કેવી રીતે કરવું",
    "Signing in": "સાઇન ઇન કરવું",
    "Making an account": "ખાતું બનાવવું",
    "A family member does this once.": "પરિવારનું કોઈ આ એક વાર કરે છે.",
    "Open GentleLearn in your web browser.":
      "તમારા વેબ બ્રાઉઝરમાં GentleLearn ખોલો.",
    "Type your phone number and your password.":
      "તમારો ફોન નંબર અને પાસવર્ડ લખો.",
    "Tap Sign in.": "સાઇન ઇન દબાવો.",
    "Then tap your name to begin your lesson.":
      "પછી તમારું નામ દબાવીને પાઠ શરૂ કરો.",
    "Tap Account at the top of the screen.":
      "સ્ક્રીનની ઉપર ખાતું દબાવો.",
    "Type the family's phone number.": "પરિવારનો ફોન નંબર લખો.",
    "Choose a password and type it again.":
      "પાસવર્ડ પસંદ કરો અને ફરી લખો.",
    "Tap Create my account, then add learners in the Family corner.":
      "મારું ખાતું બનાવો દબાવો, પછી પરિવાર ખૂણામાં શીખનારા ઉમેરો.",
    "Your account is kept safe. Keep your password to yourself.":
      "તમારું ખાતું સુરક્ષિત રહે છે. પાસવર્ડ તમારી પાસે જ રાખો.",
    "Back to home": "ઘરે પાછા",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "તમારા પરિવાર માટે સરળ પસંદગી. આજે મફત તમારું — કંઈ ચૂકવવાનું નથી.",
    "Your current plan": "તમારી હાલની યોજના",
    "Read this aloud in every lesson": "દરેક પાઠમાં મોટેથી વાંચવું",
    "3 questions a day per learner": "દરેક શીખનાર માટે દિવસે 3 પ્રશ્નો",
    "Hands-free voice guidance": "હાથ ન લગાવતાં અવાજ માર્ગદર્શન",
    "Unlimited questions": "અમર્યાદિત પ્રશ્નો",
    "All 60 extra lessons": "બધા 60 વધારાના પાઠ",
    "Hands-free voice and unlimited questions":
      "હાથ ન લગાવતાં અવાજ અને અમર્યાદિત પ્રશ્નો",
    "Choose Plus": "Plus પસંદ કરો",
    "Choose Family": "પરિવાર પસંદ કરો",
    "Coming soon": "ટૂંક સમયમાં આવે છે",
    "✓ Your current plan": "✓ તમારી હાલની યોજના",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "ચુકવણી ટૂંક સમયમાં આવે છે. આજે કોઈ ચુકવણી લેવાતી નથી. તમારી હાલની યોજના એ જ રહેશે.",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "જે ગોઠવણ કરે છે તેમના માટે શાંત મદદગાર. ફક્ત જરૂરી — ગરબડ નહીં.",
    "Add a family member to learn": "શીખવા પરિવારનું સભ્ય ઉમેરો",
    "Their name": "તેમનું નામ",
    "Type their name, e.g. Mary": "તેમનું નામ લખો, દા.ત. મીરા",
    Add: "ઉમેરો",
    "{name} is ready to learn": "{name} શીખવા તૈયાર છે",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "તેમના પાઠ તૈયાર છે. નીચે દબાવો, પહેલો પાઠ એક દબાણ દૂર છે.",
    "Start learning as {name}": "{name} તરીકે શીખવાનું શરૂ કરો",
    "No learners yet. Add the first name above.":
      "હજી શીખનારા નથી. ઉપર પહેલું નામ ઉમેરો.",
    "New name": "નવું નામ",
    Save: "સાચવો",
    Cancel: "રદ કરો",
    "Change name": "નામ બદલો",
    Remove: "દૂર કરો",
    "Remove {name}? Their progress will be deleted.":
      "{name} દૂર કરવા? તેમની પ્રગતિ ભૂંસાઈ જશે.",
    "Learning as {name}": "{name} તરીકે શીખી રહ્યા છો",
    "Learn as {name}": "{name} તરીકે શીખો",
    "Open lessons →": "પાઠ ખોલો →",
    "See lesson progress": "પાઠની પ્રગતિ જુઓ",
    Finished: "પૂર્ણ",
    "Not started": "શરૂ નથી",
    "Questions from learners": "શીખનારાઓના પ્રશ્નો",
    "No questions yet. They will appear here when a learner asks one.":
      "હજી પ્રશ્નો નથી. કોઈ શીખનાર પૂછશે ત્યારે અહીં દેખાશે.",
    "From {name}": "{name} તરફથી",
    "Everything here is private to your family and only used to keep lessons personal.":
      "અહીં બધું તમારા પરિવાર માટે ખાનગી છે અને ફક્ત પાઠ વ્યક્તિગત રાખવા વપરાય છે.",
  },

  /* --------------------------------------------------------------------- */
  kn: {
    "Who is learning today?": "ಇಂದು ಯಾರು ಕಲಿಯುತ್ತಿದ್ದಾರೆ?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "ನಿಮ್ಮ ಹೆಸರನ್ನು ಒತ್ತಿ. ನಿಮ್ಮ ಪಾಠಗಳು ಮತ್ತು ಪ್ರಗತಿ ನಿಮಗಾಗಿಯೇ ಇರಿಸಲಾಗುತ್ತದೆ.",
    "No names yet": "ಇನ್ನೂ ಹೆಸರುಗಳಿಲ್ಲ",
    "A family member can add the first learner in the Family corner.":
      "ಕುಟುಂಬದವರು ಕುಟುಂಬ ಮೂಲೆಯಲ್ಲಿ ಮೊದಲ ಕಲಿಯುವವರನ್ನು ಸೇರಿಸಬಹುದು.",
    "Go to the Family corner": "ಕುಟುಂಬ ಮೂಲೆಗೆ ಹೋಗಿ",
    "Ready for the first lesson": "ಮೊದಲ ಪಾಠಕ್ಕೆ ಸಿದ್ಧ",
    "1 lesson finished": "1 ಪಾಠ ಪೂರ್ಣ",
    "{n} lessons finished": "{n} ಪಾಠ ಪೂರ್ಣ",
    "Add someone new": "ಹೊಸದಾಗಿ ಯಾರನ್ನಾದರೂ ಸೇರಿಸಿ",
    "A family member can set this up": "ಕುಟುಂಬದವರು ಇದನ್ನು ಸಿದ್ಧಪಡಿಸಬಹುದು",

    "Ask a question": "ಪ್ರಶ್ನೆ ಕೇಳಿ",
    "Type it in your own words. A family member will see it in the Family corner.":
      "ನಿಮ್ಮ ಮಾತಿನಲ್ಲಿ ಬರೆಯಿರಿ. ಕುಟುಂಬದವರು ಅದನ್ನು ಕುಟುಂಬ ಮೂಲೆಯಲ್ಲಿ ನೋಡುತ್ತಾರೆ.",
    "Add a learner in the Family corner first, then come back to ask.":
      "ಮೊದಲು ಕುಟುಂಬ ಮೂಲೆಯಲ್ಲಿ ಕಲಿಯುವವರನ್ನು ಸೇರಿಸಿ, ನಂತರ ಕೇಳಲು ಬನ್ನಿ.",
    "Choose who is learning today, then come back to ask.":
      "ಇಂದು ಯಾರು ಕಲಿಯುತ್ತಿದ್ದಾರೆ ಎಂದು ಆಯ್ಕೆಮಾಡಿ, ನಂತರ ಕೇಳಲು ಬನ್ನಿ.",
    "What would you like to ask, {name}?": "{name}, ನೀವು ಏನು ಕೇಳಲು ಬಯಸುತ್ತೀರಿ?",
    "For example: How do I send a photo to my sister?":
      "ಉದಾಹರಣೆ: ನನ್ನ ಸಹೋದರಿಗೆ ಫೋಟೋ ಹೇಗೆ ಕಳುಹಿಸಬೇಕು?",
    "Send my question": "ನನ್ನ ಪ್ರಶ್ನೆ ಕಳುಹಿಸಿ",
    "Free plan: 3 questions a day per learner.":
      "ಉಚಿತ ಯೋಜನೆ: ಪ್ರತಿ ಕಲಿಯುವವರಿಗೆ ದಿನಕ್ಕೆ 3 ಪ್ರಶ್ನೆಗಳು.",
    "Thank you — your question is saved for your family to read.":
      "ಧನ್ಯವಾದ — ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಕುಟುಂಬ ಓದಲು ಉಳಿಸಲಾಗಿದೆ.",
    "Your questions": "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "ಇನ್ನೂ ಏನೂ ಇಲ್ಲ. ಏನನ್ನಾದರೂ ಕೇಳಿ — ಇಲ್ಲಿ ಮೂರ್ಖ ಪ್ರಶ್ನೆ ಎಂಬುದಿಲ್ಲ.",
    "Waiting for a family member to answer":
      "ಕುಟುಂಬದವರ ಉತ್ತರಕ್ಕಾಗಿ ಕಾಯುತ್ತಿದೆ",

    "Your account": "ನಿಮ್ಮ ಖಾತೆ",
    "One account for your family, kept private and safe.":
      "ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಒಂದು ಖಾತೆ, ಖಾಸಗಿ ಮತ್ತು ಸುರಕ್ಷಿತ.",
    Plan: "ಯೋಜನೆ",
    "Free — your current plan": "ಉಚಿತ — ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಯೋಜನೆ",
    Learners: "ಕಲಿಯುವವರು",
    "None yet": "ಇನ್ನೂ ಯಾರೂ ಇಲ್ಲ",
    "See plans": "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    "Tap one — you can change it anytime.":
      "ಒಂದನ್ನು ಒತ್ತಿ — ಯಾವಾಗ ಬೇಕಾದರೂ ಬದಲಿಸಬಹುದು.",
    "Signing out": "ಸೈನ್ ಔಟ್ ಮಾಡುವುದು",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "ನಿಮ್ಮ ಪಾಠಗಳು ಉಳಿಸಲ್ಪಟ್ಟಿರುತ್ತವೆ. ಫೋನ್ ನಂಬರ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್‌ನಿಂದ ಮತ್ತೆ ಸೈನ್ ಇನ್ ಆಗಬಹುದು.",
    "Sign out": "ಸೈನ್ ಔಟ್",
    "Need help?": "ಸಹಾಯ ಬೇಕೇ?",
    "Read the sign-in guide": "ಸೈನ್ ಇನ್ ಮಾರ್ಗದರ್ಶಿ ಓದಿ",

    "How to sign in": "ಸೈನ್ ಇನ್ ಹೇಗೆ ಮಾಡುವುದು",
    "Signing in": "ಸೈನ್ ಇನ್ ಮಾಡುವುದು",
    "Making an account": "ಖಾತೆ ತೆರೆಯುವುದು",
    "A family member does this once.": "ಕುಟುಂಬದವರು ಇದನ್ನು ಒಮ್ಮೆ ಮಾಡುತ್ತಾರೆ.",
    "Open GentleLearn in your web browser.":
      "ನಿಮ್ಮ ವೆಬ್ ಬ್ರೌಸರ್‌ನಲ್ಲಿ GentleLearn ತೆರೆಯಿರಿ.",
    "Type your phone number and your password.":
      "ನಿಮ್ಮ ಫೋನ್ ನಂಬರ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಟೈಪ್ ಮಾಡಿ.",
    "Tap Sign in.": "ಸೈನ್ ಇನ್ ಒತ್ತಿ.",
    "Then tap your name to begin your lesson.":
      "ನಂತರ ನಿಮ್ಮ ಹೆಸರನ್ನು ಒತ್ತಿ ಪಾಠ ಪ್ರಾರಂಭಿಸಿ.",
    "Tap Account at the top of the screen.":
      "ಪರದೆಯ ಮೇಲ್ಭಾಗದಲ್ಲಿ ಖಾತೆ ಒತ್ತಿ.",
    "Type the family's phone number.": "ಕುಟುಂಬದ ಫೋನ್ ನಂಬರ್ ಟೈಪ್ ಮಾಡಿ.",
    "Choose a password and type it again.":
      "ಪಾಸ್‌ವರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ ಮತ್ತೆ ಟೈಪ್ ಮಾಡಿ.",
    "Tap Create my account, then add learners in the Family corner.":
      "ನನ್ನ ಖಾತೆ ತೆರೆಯಿರಿ ಒತ್ತಿ, ನಂತರ ಕುಟುಂಬ ಮೂಲೆಯಲ್ಲಿ ಕಲಿಯುವವರನ್ನು ಸೇರಿಸಿ.",
    "Your account is kept safe. Keep your password to yourself.":
      "ನಿಮ್ಮ ಖಾತೆ ಸುರಕ್ಷಿತವಾಗಿರುತ್ತದೆ. ಪಾಸ್‌ವರ್ಡ್ ನಿಮ್ಮ ಬಳಿಯೇ ಇಟ್ಟುಕೊಳ್ಳಿ.",
    "Back to home": "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಸರಳ ಆಯ್ಕೆ. ಇಂದು ಉಚಿತ ನಿಮ್ಮದೇ — ಏನೂ ಕೊಡಬೇಕಿಲ್ಲ.",
    "Your current plan": "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಯೋಜನೆ",
    "Read this aloud in every lesson": "ಪ್ರತಿ ಪಾಠದಲ್ಲಿ ಗಟ್ಟಿಯಾಗಿ ಓದುವುದು",
    "3 questions a day per learner": "ಪ್ರತಿ ಕಲಿಯುವವರಿಗೆ ದಿನಕ್ಕೆ 3 ಪ್ರಶ್ನೆಗಳು",
    "Hands-free voice guidance": "ಕೈ ಬಳಸದ ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ",
    "Unlimited questions": "ಅಪರಿಮಿತ ಪ್ರಶ್ನೆಗಳು",
    "All 60 extra lessons": "ಎಲ್ಲ 60 ಹೆಚ್ಚುವರಿ ಪಾಠಗಳು",
    "Hands-free voice and unlimited questions":
      "ಕೈ ಬಳಸದ ಧ್ವನಿ ಮತ್ತು ಅಪರಿಮಿತ ಪ್ರಶ್ನೆಗಳು",
    "Choose Plus": "Plus ಆಯ್ಕೆಮಾಡಿ",
    "Choose Family": "ಕುಟುಂಬ ಆಯ್ಕೆಮಾಡಿ",
    "Coming soon": "ಶೀಘ್ರದಲ್ಲಿ ಬರಲಿದೆ",
    "✓ Your current plan": "✓ ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಯೋಜನೆ",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "ಪಾವತಿ ಶೀಘ್ರದಲ್ಲಿ ಬರಲಿದೆ. ಇಂದು ಯಾವ ಪಾವತಿಯೂ ತೆಗೆದುಕೊಳ್ಳುವುದಿಲ್ಲ. ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಯೋಜನೆ ಹಾಗೆಯೇ ಇರುತ್ತದೆ.",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "ಸಿದ್ಧತೆ ಮಾಡುವವರಿಗೆ ಶಾಂತ ಸಹಾಯಕ. ಬೇಕಾದದ್ದು ಮಾತ್ರ — ಗೊಂದಲವಿಲ್ಲ.",
    "Add a family member to learn": "ಕಲಿಯಲು ಕುಟುಂಬ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ",
    "Their name": "ಅವರ ಹೆಸರು",
    "Type their name, e.g. Mary": "ಅವರ ಹೆಸರು ಟೈಪ್ ಮಾಡಿ, ಉದಾ. ಮೀರಾ",
    Add: "ಸೇರಿಸಿ",
    "{name} is ready to learn": "{name} ಕಲಿಯಲು ಸಿದ್ಧರಿದ್ದಾರೆ",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "ಅವರ ಪಾಠಗಳು ಸಿದ್ಧವಾಗಿವೆ. ಕೆಳಗೆ ಒತ್ತಿ, ಮೊದಲ ಪಾಠ ಒಂದು ಒತ್ತುವಿಕೆಯ ದೂರ.",
    "Start learning as {name}": "{name} ಆಗಿ ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
    "No learners yet. Add the first name above.":
      "ಇನ್ನೂ ಕಲಿಯುವವರಿಲ್ಲ. ಮೇಲೆ ಮೊದಲ ಹೆಸರು ಸೇರಿಸಿ.",
    "New name": "ಹೊಸ ಹೆಸರು",
    Save: "ಉಳಿಸಿ",
    Cancel: "ರದ್ದುಮಾಡಿ",
    "Change name": "ಹೆಸರು ಬದಲಿಸಿ",
    Remove: "ತೆಗೆದುಹಾಕಿ",
    "Remove {name}? Their progress will be deleted.":
      "{name} ಅನ್ನು ತೆಗೆದುಹಾಕುವುದೇ? ಅವರ ಪ್ರಗತಿ ಅಳಿಸಲ್ಪಡುತ್ತದೆ.",
    "Learning as {name}": "{name} ಆಗಿ ಕಲಿಯುತ್ತಿದ್ದೀರಿ",
    "Learn as {name}": "{name} ಆಗಿ ಕಲಿಯಿರಿ",
    "Open lessons →": "ಪಾಠಗಳನ್ನು ತೆರೆಯಿರಿ →",
    "See lesson progress": "ಪಾಠದ ಪ್ರಗತಿ ನೋಡಿ",
    Finished: "ಮುಗಿದಿದೆ",
    "Not started": "ಪ್ರಾರಂಭವಾಗಿಲ್ಲ",
    "Questions from learners": "ಕಲಿಯುವವರ ಪ್ರಶ್ನೆಗಳು",
    "No questions yet. They will appear here when a learner asks one.":
      "ಇನ್ನೂ ಪ್ರಶ್ನೆಗಳಿಲ್ಲ. ಯಾರಾದರೂ ಕೇಳಿದಾಗ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
    "From {name}": "{name} ಅವರಿಂದ",
    "Everything here is private to your family and only used to keep lessons personal.":
      "ಇಲ್ಲಿನ ಎಲ್ಲವೂ ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಖಾಸಗಿ ಮತ್ತು ಪಾಠಗಳನ್ನು ವೈಯಕ್ತಿಕವಾಗಿ ಇಡಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.",
  },

  /* --------------------------------------------------------------------- */
  ml: {
    "Who is learning today?": "ഇന്ന് ആരാണ് പഠിക്കുന്നത്?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "നിങ്ങളുടെ പേര് അമർത്തൂ. നിങ്ങളുടെ പാഠങ്ങളും പുരോഗതിയും നിങ്ങൾക്ക് മാത്രമായി സൂക്ഷിക്കുന്നു.",
    "No names yet": "ഇതുവരെ പേരുകളില്ല",
    "A family member can add the first learner in the Family corner.":
      "കുടുംബത്തിലെ ഒരാൾക്ക് കുടുംബ മൂലയിൽ ആദ്യ പഠിതാവിനെ ചേർക്കാം.",
    "Go to the Family corner": "കുടുംബ മൂലയിലേക്ക് പോകൂ",
    "Ready for the first lesson": "ആദ്യ പാഠത്തിന് തയ്യാർ",
    "1 lesson finished": "1 പാഠം പൂർത്തിയായി",
    "{n} lessons finished": "{n} പാഠങ്ങൾ പൂർത്തിയായി",
    "Add someone new": "പുതിയ ആളെ ചേർക്കൂ",
    "A family member can set this up": "കുടുംബത്തിലെ ഒരാൾക്ക് ഇത് ക്രമീകരിക്കാം",

    "Ask a question": "ഒരു ചോദ്യം ചോദിക്കൂ",
    "Type it in your own words. A family member will see it in the Family corner.":
      "നിങ്ങളുടെ വാക്കുകളിൽ എഴുതൂ. കുടുംബത്തിലെ ഒരാൾ അത് കുടുംബ മൂലയിൽ കാണും.",
    "Add a learner in the Family corner first, then come back to ask.":
      "ആദ്യം കുടുംബ മൂലയിൽ ഒരു പഠിതാവിനെ ചേർത്ത്, പിന്നെ ചോദിക്കാൻ വരൂ.",
    "Choose who is learning today, then come back to ask.":
      "ഇന്ന് ആരാണ് പഠിക്കുന്നതെന്ന് തിരഞ്ഞെടുത്ത്, പിന്നെ ചോദിക്കാൻ വരൂ.",
    "What would you like to ask, {name}?": "{name}, നിങ്ങൾ എന്ത് ചോദിക്കാൻ ആഗ്രഹിക്കുന്നു?",
    "For example: How do I send a photo to my sister?":
      "ഉദാഹരണം: എന്റെ സഹോദരിക്ക് ഫോട്ടോ എങ്ങനെ അയക്കാം?",
    "Send my question": "എന്റെ ചോദ്യം അയക്കൂ",
    "Free plan: 3 questions a day per learner.":
      "സൗജന്യ പ്ലാൻ: ഓരോ പഠിതാവിനും ദിവസം 3 ചോദ്യങ്ങൾ.",
    "Thank you — your question is saved for your family to read.":
      "നന്ദി — നിങ്ങളുടെ ചോദ്യം കുടുംബം വായിക്കാൻ സേവ് ചെയ്തു.",
    "Your questions": "നിങ്ങളുടെ ചോദ്യങ്ങൾ",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "ഇതുവരെ ഒന്നുമില്ല. എന്തും ചോദിക്കൂ — ഇവിടെ മണ്ടൻ ചോദ്യം എന്നൊന്നില്ല.",
    "Waiting for a family member to answer":
      "കുടുംബത്തിലെ ഒരാളുടെ മറുപടിക്കായി കാത്തിരിക്കുന്നു",

    "Your account": "നിങ്ങളുടെ അക്കൗണ്ട്",
    "One account for your family, kept private and safe.":
      "നിങ്ങളുടെ കുടുംബത്തിന് ഒരു അക്കൗണ്ട്, സ്വകാര്യവും സുരക്ഷിതവും.",
    Plan: "പ്ലാൻ",
    "Free — your current plan": "സൗജന്യം — നിങ്ങളുടെ നിലവിലെ പ്ലാൻ",
    Learners: "പഠിതാക്കൾ",
    "None yet": "ഇതുവരെ ആരുമില്ല",
    "See plans": "പ്ലാനുകൾ കാണൂ",
    "Tap one — you can change it anytime.":
      "ഒന്ന് അമർത്തൂ — എപ്പോൾ വേണമെങ്കിലും മാറ്റാം.",
    "Signing out": "സൈൻ ഔട്ട് ചെയ്യുന്നു",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "നിങ്ങളുടെ പാഠങ്ങൾ സേവ് ചെയ്തിരിക്കും. ഫോൺ നമ്പറും പാസ്‌വേഡും ഉപയോഗിച്ച് വീണ്ടും സൈൻ ഇൻ ചെയ്യാം.",
    "Sign out": "സൈൻ ഔട്ട്",
    "Need help?": "സഹായം വേണോ?",
    "Read the sign-in guide": "സൈൻ ഇൻ ഗൈഡ് വായിക്കൂ",

    "How to sign in": "സൈൻ ഇൻ എങ്ങനെ ചെയ്യാം",
    "Signing in": "സൈൻ ഇൻ ചെയ്യുന്നു",
    "Making an account": "അക്കൗണ്ട് ഉണ്ടാക്കുന്നു",
    "A family member does this once.": "കുടുംബത്തിലെ ഒരാൾ ഇത് ഒരിക്കൽ ചെയ്യും.",
    "Open GentleLearn in your web browser.":
      "നിങ്ങളുടെ വെബ് ബ്രൗസറിൽ GentleLearn തുറക്കൂ.",
    "Type your phone number and your password.":
      "നിങ്ങളുടെ ഫോൺ നമ്പറും പാസ്‌വേഡും ടൈപ്പ് ചെയ്യൂ.",
    "Tap Sign in.": "സൈൻ ഇൻ അമർത്തൂ.",
    "Then tap your name to begin your lesson.":
      "പിന്നെ നിങ്ങളുടെ പേര് അമർത്തി പാഠം തുടങ്ങൂ.",
    "Tap Account at the top of the screen.":
      "സ്ക്രീനിന്റെ മുകളിൽ അക്കൗണ്ട് അമർത്തൂ.",
    "Type the family's phone number.": "കുടുംബത്തിന്റെ ഫോൺ നമ്പർ ടൈപ്പ് ചെയ്യൂ.",
    "Choose a password and type it again.":
      "ഒരു പാസ്‌വേഡ് തിരഞ്ഞെടുത്ത് വീണ്ടും ടൈപ്പ് ചെയ്യൂ.",
    "Tap Create my account, then add learners in the Family corner.":
      "എന്റെ അക്കൗണ്ട് തുടങ്ങൂ അമർത്തി, പിന്നെ കുടുംബ മൂലയിൽ പഠിതാക്കളെ ചേർക്കൂ.",
    "Your account is kept safe. Keep your password to yourself.":
      "നിങ്ങളുടെ അക്കൗണ്ട് സുരക്ഷിതമായിരിക്കും. പാസ്‌വേഡ് നിങ്ങളുടെ പക്കൽ സൂക്ഷിക്കൂ.",
    "Back to home": "ഹോമിലേക്ക് മടങ്ങൂ",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "നിങ്ങളുടെ കുടുംബത്തിന് ലളിതമായ തിരഞ്ഞെടുപ്പ്. ഇന്ന് സൗജന്യം നിങ്ങളുടേത് — ഒന്നും നൽകേണ്ടതില്ല.",
    "Your current plan": "നിങ്ങളുടെ നിലവിലെ പ്ലാൻ",
    "Read this aloud in every lesson": "ഓരോ പാഠത്തിലും ഉറക്കെ വായിക്കൽ",
    "3 questions a day per learner": "ഓരോ പഠിതാവിനും ദിവസം 3 ചോദ്യങ്ങൾ",
    "Hands-free voice guidance": "കൈ ഉപയോഗിക്കാത്ത ശബ്ദ മാർഗ്ഗനിർദ്ദേശം",
    "Unlimited questions": "പരിധിയില്ലാത്ത ചോദ്യങ്ങൾ",
    "All 60 extra lessons": "എല്ലാ 60 അധിക പാഠങ്ങളും",
    "Hands-free voice and unlimited questions":
      "കൈ ഉപയോഗിക്കാത്ത ശബ്ദവും പരിധിയില്ലാത്ത ചോദ്യങ്ങളും",
    "Choose Plus": "Plus തിരഞ്ഞെടുക്കൂ",
    "Choose Family": "കുടുംബം തിരഞ്ഞെടുക്കൂ",
    "Coming soon": "ഉടൻ വരുന്നു",
    "✓ Your current plan": "✓ നിങ്ങളുടെ നിലവിലെ പ്ലാൻ",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "പേയ്മെന്റ് ഉടൻ വരുന്നു. ഇന്ന് ഒരു പേയ്മെന്റും എടുക്കുന്നില്ല. നിങ്ങളുടെ നിലവിലെ പ്ലാൻ അതേപടി തുടരും.",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "ക്രമീകരണം ചെയ്യുന്നവർക്ക് ശാന്തമായ സഹായി. ആവശ്യമുള്ളത് മാത്രം — കുഴപ്പമില്ല.",
    "Add a family member to learn": "പഠിക്കാൻ കുടുംബാംഗത്തെ ചേർക്കൂ",
    "Their name": "അവരുടെ പേര്",
    "Type their name, e.g. Mary": "അവരുടെ പേര് ടൈപ്പ് ചെയ്യൂ, ഉദാ. മീര",
    Add: "ചേർക്കൂ",
    "{name} is ready to learn": "{name} പഠിക്കാൻ തയ്യാറാണ്",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "അവരുടെ പാഠങ്ങൾ തയ്യാറാണ്. താഴെ അമർത്തൂ, ആദ്യ പാഠം ഒരു അമർത്തലകലെ.",
    "Start learning as {name}": "{name} ആയി പഠിക്കാൻ തുടങ്ങൂ",
    "No learners yet. Add the first name above.":
      "ഇതുവരെ പഠിതാക്കളില്ല. മുകളിൽ ആദ്യ പേര് ചേർക്കൂ.",
    "New name": "പുതിയ പേര്",
    Save: "സേവ് ചെയ്യൂ",
    Cancel: "റദ്ദാക്കൂ",
    "Change name": "പേര് മാറ്റൂ",
    Remove: "നീക്കം ചെയ്യൂ",
    "Remove {name}? Their progress will be deleted.":
      "{name} നീക്കം ചെയ്യണോ? അവരുടെ പുരോഗതി മായ്ക്കപ്പെടും.",
    "Learning as {name}": "{name} ആയി പഠിക്കുന്നു",
    "Learn as {name}": "{name} ആയി പഠിക്കൂ",
    "Open lessons →": "പാഠങ്ങൾ തുറക്കൂ →",
    "See lesson progress": "പാഠ പുരോഗതി കാണൂ",
    Finished: "പൂർത്തിയായി",
    "Not started": "തുടങ്ങിയിട്ടില്ല",
    "Questions from learners": "പഠിതാക്കളുടെ ചോദ്യങ്ങൾ",
    "No questions yet. They will appear here when a learner asks one.":
      "ഇതുവരെ ചോദ്യങ്ങളില്ല. ആരെങ്കിലും ചോദിക്കുമ്പോൾ ഇവിടെ കാണാം.",
    "From {name}": "{name} ൽ നിന്ന്",
    "Everything here is private to your family and only used to keep lessons personal.":
      "ഇവിടെ എല്ലാം നിങ്ങളുടെ കുടുംബത്തിന് സ്വകാര്യമാണ്, പാഠങ്ങൾ വ്യക്തിഗതമാക്കാൻ മാത്രം ഉപയോഗിക്കുന്നു.",
  },

  /* --------------------------------------------------------------------- */
  pa: {
    "Who is learning today?": "ਅੱਜ ਕੌਣ ਸਿੱਖ ਰਿਹਾ ਹੈ?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "ਆਪਣਾ ਨਾਮ ਦਬਾਓ। ਤੁਹਾਡੇ ਪਾਠ ਅਤੇ ਤਰੱਕੀ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਲਈ ਰੱਖੀ ਜਾਂਦੀ ਹੈ।",
    "No names yet": "ਹਾਲੇ ਕੋਈ ਨਾਮ ਨਹੀਂ",
    "A family member can add the first learner in the Family corner.":
      "ਪਰਿਵਾਰ ਦਾ ਕੋਈ ਜੀਅ ਪਰਿਵਾਰ ਕੋਨੇ ਵਿੱਚ ਪਹਿਲਾ ਸਿੱਖਣ ਵਾਲਾ ਜੋੜ ਸਕਦਾ ਹੈ।",
    "Go to the Family corner": "ਪਰਿਵਾਰ ਕੋਨੇ 'ਤੇ ਜਾਓ",
    "Ready for the first lesson": "ਪਹਿਲੇ ਪਾਠ ਲਈ ਤਿਆਰ",
    "1 lesson finished": "1 ਪਾਠ ਪੂਰਾ",
    "{n} lessons finished": "{n} ਪਾਠ ਪੂਰੇ",
    "Add someone new": "ਕਿਸੇ ਨਵੇਂ ਨੂੰ ਜੋੜੋ",
    "A family member can set this up": "ਪਰਿਵਾਰ ਦਾ ਕੋਈ ਜੀਅ ਇਹ ਸੈੱਟ ਕਰ ਸਕਦਾ ਹੈ",

    "Ask a question": "ਸਵਾਲ ਪੁੱਛੋ",
    "Type it in your own words. A family member will see it in the Family corner.":
      "ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਲਿਖੋ। ਪਰਿਵਾਰ ਦਾ ਕੋਈ ਜੀਅ ਇਹ ਪਰਿਵਾਰ ਕੋਨੇ ਵਿੱਚ ਵੇਖੇਗਾ।",
    "Add a learner in the Family corner first, then come back to ask.":
      "ਪਹਿਲਾਂ ਪਰਿਵਾਰ ਕੋਨੇ ਵਿੱਚ ਸਿੱਖਣ ਵਾਲਾ ਜੋੜੋ, ਫਿਰ ਪੁੱਛਣ ਲਈ ਵਾਪਸ ਆਓ।",
    "Choose who is learning today, then come back to ask.":
      "ਚੁਣੋ ਕਿ ਅੱਜ ਕੌਣ ਸਿੱਖ ਰਿਹਾ ਹੈ, ਫਿਰ ਪੁੱਛਣ ਲਈ ਵਾਪਸ ਆਓ।",
    "What would you like to ask, {name}?": "{name}, ਤੁਸੀਂ ਕੀ ਪੁੱਛਣਾ ਚਾਹੋਗੇ?",
    "For example: How do I send a photo to my sister?":
      "ਉਦਾਹਰਨ: ਮੈਂ ਆਪਣੀ ਭੈਣ ਨੂੰ ਫ਼ੋਟੋ ਕਿਵੇਂ ਭੇਜਾਂ?",
    "Send my question": "ਮੇਰਾ ਸਵਾਲ ਭੇਜੋ",
    "Free plan: 3 questions a day per learner.":
      "ਮੁਫ਼ਤ ਯੋਜਨਾ: ਹਰ ਸਿੱਖਣ ਵਾਲੇ ਲਈ ਦਿਨ ਵਿੱਚ 3 ਸਵਾਲ।",
    "Thank you — your question is saved for your family to read.":
      "ਧੰਨਵਾਦ — ਤੁਹਾਡਾ ਸਵਾਲ ਪਰਿਵਾਰ ਦੇ ਪੜ੍ਹਨ ਲਈ ਸੰਭਾਲਿਆ ਗਿਆ ਹੈ।",
    "Your questions": "ਤੁਹਾਡੇ ਸਵਾਲ",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "ਹਾਲੇ ਕੁਝ ਨਹੀਂ। ਕੁਝ ਵੀ ਪੁੱਛੋ — ਇੱਥੇ ਕੋਈ ਸਵਾਲ ਮੂਰਖਤਾ ਵਾਲਾ ਨਹੀਂ ਹੁੰਦਾ।",
    "Waiting for a family member to answer":
      "ਪਰਿਵਾਰ ਦੇ ਕਿਸੇ ਜੀਅ ਦੇ ਜਵਾਬ ਦੀ ਉਡੀਕ",

    "Your account": "ਤੁਹਾਡਾ ਖਾਤਾ",
    "One account for your family, kept private and safe.":
      "ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ ਇੱਕ ਖਾਤਾ, ਨਿੱਜੀ ਅਤੇ ਸੁਰੱਖਿਅਤ।",
    Plan: "ਯੋਜਨਾ",
    "Free — your current plan": "ਮੁਫ਼ਤ — ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਯੋਜਨਾ",
    Learners: "ਸਿੱਖਣ ਵਾਲੇ",
    "None yet": "ਹਾਲੇ ਕੋਈ ਨਹੀਂ",
    "See plans": "ਯੋਜਨਾਵਾਂ ਵੇਖੋ",
    "Tap one — you can change it anytime.":
      "ਇੱਕ ਦਬਾਓ — ਤੁਸੀਂ ਕਦੇ ਵੀ ਬਦਲ ਸਕਦੇ ਹੋ।",
    "Signing out": "ਸਾਈਨ ਆਉਟ ਕਰਨਾ",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "ਤੁਹਾਡੇ ਪਾਠ ਸੰਭਾਲੇ ਰਹਿੰਦੇ ਹਨ। ਤੁਸੀਂ ਆਪਣੇ ਫ਼ੋਨ ਨੰਬਰ ਅਤੇ ਪਾਸਵਰਡ ਨਾਲ ਦੁਬਾਰਾ ਸਾਈਨ ਇਨ ਕਰ ਸਕਦੇ ਹੋ।",
    "Sign out": "ਸਾਈਨ ਆਉਟ ਕਰੋ",
    "Need help?": "ਮਦਦ ਚਾਹੀਦੀ ਹੈ?",
    "Read the sign-in guide": "ਸਾਈਨ ਇਨ ਗਾਈਡ ਪੜ੍ਹੋ",

    "How to sign in": "ਸਾਈਨ ਇਨ ਕਿਵੇਂ ਕਰੀਏ",
    "Signing in": "ਸਾਈਨ ਇਨ ਕਰਨਾ",
    "Making an account": "ਖਾਤਾ ਬਣਾਉਣਾ",
    "A family member does this once.": "ਪਰਿਵਾਰ ਦਾ ਕੋਈ ਜੀਅ ਇਹ ਇੱਕ ਵਾਰ ਕਰਦਾ ਹੈ।",
    "Open GentleLearn in your web browser.":
      "ਆਪਣੇ ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ GentleLearn ਖੋਲ੍ਹੋ।",
    "Type your phone number and your password.":
      "ਆਪਣਾ ਫ਼ੋਨ ਨੰਬਰ ਅਤੇ ਪਾਸਵਰਡ ਲਿਖੋ।",
    "Tap Sign in.": "ਸਾਈਨ ਇਨ ਦਬਾਓ।",
    "Then tap your name to begin your lesson.":
      "ਫਿਰ ਆਪਣਾ ਨਾਮ ਦਬਾ ਕੇ ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ।",
    "Tap Account at the top of the screen.":
      "ਸਕ੍ਰੀਨ ਦੇ ਉੱਪਰ ਖਾਤਾ ਦਬਾਓ।",
    "Type the family's phone number.": "ਪਰਿਵਾਰ ਦਾ ਫ਼ੋਨ ਨੰਬਰ ਲਿਖੋ।",
    "Choose a password and type it again.":
      "ਪਾਸਵਰਡ ਚੁਣੋ ਅਤੇ ਦੁਬਾਰਾ ਲਿਖੋ।",
    "Tap Create my account, then add learners in the Family corner.":
      "ਮੇਰਾ ਖਾਤਾ ਬਣਾਓ ਦਬਾਓ, ਫਿਰ ਪਰਿਵਾਰ ਕੋਨੇ ਵਿੱਚ ਸਿੱਖਣ ਵਾਲੇ ਜੋੜੋ।",
    "Your account is kept safe. Keep your password to yourself.":
      "ਤੁਹਾਡਾ ਖਾਤਾ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ। ਪਾਸਵਰਡ ਆਪਣੇ ਕੋਲ ਰੱਖੋ।",
    "Back to home": "ਘਰ 'ਤੇ ਵਾਪਸ",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ ਸੌਖੀ ਚੋਣ। ਅੱਜ ਮੁਫ਼ਤ ਤੁਹਾਡਾ — ਕੁਝ ਦੇਣਾ ਨਹੀਂ।",
    "Your current plan": "ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਯੋਜਨਾ",
    "Read this aloud in every lesson": "ਹਰ ਪਾਠ ਵਿੱਚ ਉੱਚੀ ਆਵਾਜ਼ ਵਿੱਚ ਪੜ੍ਹਨਾ",
    "3 questions a day per learner": "ਹਰ ਸਿੱਖਣ ਵਾਲੇ ਲਈ ਦਿਨ ਵਿੱਚ 3 ਸਵਾਲ",
    "Hands-free voice guidance": "ਬਿਨਾਂ ਹੱਥ ਲਾਏ ਆਵਾਜ਼ ਮਾਰਗਦਰਸ਼ਨ",
    "Unlimited questions": "ਬੇਅੰਤ ਸਵਾਲ",
    "All 60 extra lessons": "ਸਾਰੇ 60 ਵਾਧੂ ਪਾਠ",
    "Hands-free voice and unlimited questions":
      "ਬਿਨਾਂ ਹੱਥ ਲਾਏ ਆਵਾਜ਼ ਅਤੇ ਬੇਅੰਤ ਸਵਾਲ",
    "Choose Plus": "Plus ਚੁਣੋ",
    "Choose Family": "ਪਰਿਵਾਰ ਚੁਣੋ",
    "Coming soon": "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
    "✓ Your current plan": "✓ ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਯੋਜਨਾ",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "ਭੁਗਤਾਨ ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ। ਅੱਜ ਕੋਈ ਭੁਗਤਾਨ ਨਹੀਂ ਲਿਆ ਜਾਂਦਾ। ਤੁਹਾਡੀ ਮੌਜੂਦਾ ਯੋਜਨਾ ਉਹੀ ਰਹੇਗੀ।",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "ਜੋ ਚੀਜ਼ਾਂ ਸੈੱਟ ਕਰਦੇ ਹਨ ਉਨ੍ਹਾਂ ਲਈ ਸ਼ਾਂਤ ਮਦਦਗਾਰ। ਸਿਰਫ਼ ਲੋੜੀਂਦਾ — ਕੋਈ ਰੌਲਾ ਨਹੀਂ।",
    "Add a family member to learn": "ਸਿੱਖਣ ਲਈ ਪਰਿਵਾਰ ਦਾ ਜੀਅ ਜੋੜੋ",
    "Their name": "ਉਨ੍ਹਾਂ ਦਾ ਨਾਮ",
    "Type their name, e.g. Mary": "ਉਨ੍ਹਾਂ ਦਾ ਨਾਮ ਲਿਖੋ, ਜਿਵੇਂ ਮੀਰਾ",
    Add: "ਜੋੜੋ",
    "{name} is ready to learn": "{name} ਸਿੱਖਣ ਲਈ ਤਿਆਰ ਹੈ",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "ਉਨ੍ਹਾਂ ਦੇ ਪਾਠ ਤਿਆਰ ਹਨ। ਹੇਠਾਂ ਦਬਾਓ, ਪਹਿਲਾ ਪਾਠ ਇੱਕ ਦਬਾਅ ਦੂਰ ਹੈ।",
    "Start learning as {name}": "{name} ਵਜੋਂ ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ",
    "No learners yet. Add the first name above.":
      "ਹਾਲੇ ਕੋਈ ਸਿੱਖਣ ਵਾਲਾ ਨਹੀਂ। ਉੱਪਰ ਪਹਿਲਾ ਨਾਮ ਜੋੜੋ।",
    "New name": "ਨਵਾਂ ਨਾਮ",
    Save: "ਸੰਭਾਲੋ",
    Cancel: "ਰੱਦ ਕਰੋ",
    "Change name": "ਨਾਮ ਬਦਲੋ",
    Remove: "ਹਟਾਓ",
    "Remove {name}? Their progress will be deleted.":
      "{name} ਨੂੰ ਹਟਾਉਣਾ? ਉਨ੍ਹਾਂ ਦੀ ਤਰੱਕੀ ਮਿਟ ਜਾਵੇਗੀ।",
    "Learning as {name}": "{name} ਵਜੋਂ ਸਿੱਖ ਰਹੇ ਹੋ",
    "Learn as {name}": "{name} ਵਜੋਂ ਸਿੱਖੋ",
    "Open lessons →": "ਪਾਠ ਖੋਲ੍ਹੋ →",
    "See lesson progress": "ਪਾਠ ਦੀ ਤਰੱਕੀ ਵੇਖੋ",
    Finished: "ਪੂਰਾ",
    "Not started": "ਸ਼ੁਰੂ ਨਹੀਂ ਹੋਇਆ",
    "Questions from learners": "ਸਿੱਖਣ ਵਾਲਿਆਂ ਦੇ ਸਵਾਲ",
    "No questions yet. They will appear here when a learner asks one.":
      "ਹਾਲੇ ਕੋਈ ਸਵਾਲ ਨਹੀਂ। ਜਦੋਂ ਕੋਈ ਪੁੱਛੇਗਾ ਤਾਂ ਇੱਥੇ ਦਿਸੇਗਾ।",
    "From {name}": "{name} ਵੱਲੋਂ",
    "Everything here is private to your family and only used to keep lessons personal.":
      "ਇੱਥੇ ਸਭ ਕੁਝ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ ਨਿੱਜੀ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਪਾਠ ਨਿੱਜੀ ਰੱਖਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।",
  },

  /* --------------------------------------------------------------------- */
  or: {
    "Who is learning today?": "ଆଜି କିଏ ଶିଖୁଛନ୍ତି?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "ଆପଣଙ୍କ ନାମ ଦବାନ୍ତୁ। ଆପଣଙ୍କ ପାଠ ଓ ଅଗ୍ରଗତି କେବଳ ଆପଣଙ୍କ ପାଇଁ ରଖାଯାଏ।",
    "No names yet": "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ନାମ ନାହିଁ",
    "A family member can add the first learner in the Family corner.":
      "ପରିବାରର କେହି ପରିବାର କୋଣରେ ପ୍ରଥମ ଶିଖୁଥିବା ବ୍ୟକ୍ତିଙ୍କୁ ଯୋଡ଼ିପାରନ୍ତି।",
    "Go to the Family corner": "ପରିବାର କୋଣକୁ ଯାଆନ୍ତୁ",
    "Ready for the first lesson": "ପ୍ରଥମ ପାଠ ପାଇଁ ପ୍ରସ୍ତୁତ",
    "1 lesson finished": "1 ପାଠ ସମ୍ପୂର୍ଣ୍ଣ",
    "{n} lessons finished": "{n} ପାଠ ସମ୍ପୂର୍ଣ୍ଣ",
    "Add someone new": "ନୂଆ କାହାକୁ ଯୋଡ଼ନ୍ତୁ",
    "A family member can set this up": "ପରିବାରର କେହି ଏହା ସେଟ୍ କରିପାରନ୍ତି",

    "Ask a question": "ଏକ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ",
    "Type it in your own words. A family member will see it in the Family corner.":
      "ନିଜ ଭାଷାରେ ଲେଖନ୍ତୁ। ପରିବାରର କେହି ଏହା ପରିବାର କୋଣରେ ଦେଖିବେ।",
    "Add a learner in the Family corner first, then come back to ask.":
      "ପ୍ରଥମେ ପରିବାର କୋଣରେ ଜଣେ ଶିଖୁଥିବା ବ୍ୟକ୍ତିଙ୍କୁ ଯୋଡ଼ନ୍ତୁ, ତାପରେ ପଚାରିବାକୁ ଫେରନ୍ତୁ।",
    "Choose who is learning today, then come back to ask.":
      "ଆଜି କିଏ ଶିଖୁଛନ୍ତି ବାଛନ୍ତୁ, ତାପରେ ପଚାରିବାକୁ ଫେରନ୍ତୁ।",
    "What would you like to ask, {name}?": "{name}, ଆପଣ କଣ ପଚାରିବାକୁ ଚାହାନ୍ତି?",
    "For example: How do I send a photo to my sister?":
      "ଉଦାହରଣ: ମୁଁ ମୋ ଭଉଣୀକୁ ଫଟୋ କିପରି ପଠାଇବି?",
    "Send my question": "ମୋ ପ୍ରଶ୍ନ ପଠାନ୍ତୁ",
    "Free plan: 3 questions a day per learner.":
      "ମାଗଣା ଯୋଜନା: ପ୍ରତ୍ୟେକ ଶିଖୁଥିବା ବ୍ୟକ୍ତିଙ୍କ ପାଇଁ ଦିନକୁ 3 ପ୍ରଶ୍ନ।",
    "Thank you — your question is saved for your family to read.":
      "ଧନ୍ୟବାଦ — ଆପଣଙ୍କ ପ୍ରଶ୍ନ ପରିବାର ପଢ଼ିବା ପାଇଁ ସେଭ୍ ହୋଇଛି।",
    "Your questions": "ଆପଣଙ୍କ ପ୍ରଶ୍ନ",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "ଏପର୍ଯ୍ୟନ୍ତ କିଛି ନାହିଁ। ଯାହା ମନକୁ ଆସେ ପଚାରନ୍ତୁ — ଏଠାରେ ବୋକା ପ୍ରଶ୍ନ ବୋଲି କିଛି ନାହିଁ।",
    "Waiting for a family member to answer":
      "ପରିବାରର କାହାର ଉତ୍ତର ଅପେକ୍ଷାରେ",

    "Your account": "ଆପଣଙ୍କ ଖାତା",
    "One account for your family, kept private and safe.":
      "ଆପଣଙ୍କ ପରିବାର ପାଇଁ ଏକ ଖାତା, ଗୋପନୀୟ ଓ ସୁରକ୍ଷିତ।",
    Plan: "ଯୋଜନା",
    "Free — your current plan": "ମାଗଣା — ଆପଣଙ୍କ ବର୍ତ୍ତମାନ ଯୋଜନା",
    Learners: "ଶିଖୁଥିବା ବ୍ୟକ୍ତି",
    "None yet": "ଏପର୍ଯ୍ୟନ୍ତ କେହି ନାହିଁ",
    "See plans": "ଯୋଜନା ଦେଖନ୍ତୁ",
    "Tap one — you can change it anytime.":
      "ଗୋଟିଏ ଦବାନ୍ତୁ — ଯେତେବେଳେ ଚାହାନ୍ତି ବଦଳାଇପାରିବେ।",
    "Signing out": "ସାଇନ୍ ଆଉଟ୍ କରିବା",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "ଆପଣଙ୍କ ପାଠ ସେଭ୍ ରହିଥାଏ। ଫୋନ୍ ନମ୍ବର ଓ ପାସୱାର୍ଡ ସହିତ ପୁଣି ସାଇନ୍ ଇନ୍ କରିପାରିବେ।",
    "Sign out": "ସାଇନ୍ ଆଉଟ୍",
    "Need help?": "ସହାୟତା ଦରକାର?",
    "Read the sign-in guide": "ସାଇନ୍ ଇନ୍ ଗାଇଡ୍ ପଢ଼ନ୍ତୁ",

    "How to sign in": "କିପରି ସାଇନ୍ ଇନ୍ କରିବେ",
    "Signing in": "ସାଇନ୍ ଇନ୍ କରିବା",
    "Making an account": "ଖାତା ଖୋଲିବା",
    "A family member does this once.": "ପରିବାରର କେହି ଏହା ଥରେ କରନ୍ତି।",
    "Open GentleLearn in your web browser.":
      "ଆପଣଙ୍କ ୱେବ୍ ବ୍ରାଉଜରରେ GentleLearn ଖୋଲନ୍ତୁ।",
    "Type your phone number and your password.":
      "ଆପଣଙ୍କ ଫୋନ୍ ନମ୍ବର ଓ ପାସୱାର୍ଡ ଲେଖନ୍ତୁ।",
    "Tap Sign in.": "ସାଇନ୍ ଇନ୍ ଦବାନ୍ତୁ।",
    "Then tap your name to begin your lesson.":
      "ତାପରେ ଆପଣଙ୍କ ନାମ ଦବାଇ ପାଠ ଆରମ୍ଭ କରନ୍ତୁ।",
    "Tap Account at the top of the screen.":
      "ସ୍କ୍ରିନ ଉପରେ ଖାତା ଦବାନ୍ତୁ।",
    "Type the family's phone number.": "ପରିବାରର ଫୋନ୍ ନମ୍ବର ଲେଖନ୍ତୁ।",
    "Choose a password and type it again.":
      "ଏକ ପାସୱାର୍ଡ ବାଛି ପୁଣି ଲେଖନ୍ତୁ।",
    "Tap Create my account, then add learners in the Family corner.":
      "ମୋ ଖାତା ଖୋଲନ୍ତୁ ଦବାନ୍ତୁ, ତାପରେ ପରିବାର କୋଣରେ ଶିଖୁଥିବା ବ୍ୟକ୍ତିଙ୍କୁ ଯୋଡ଼ନ୍ତୁ।",
    "Your account is kept safe. Keep your password to yourself.":
      "ଆପଣଙ୍କ ଖାତା ସୁରକ୍ଷିତ ରହେ। ପାସୱାର୍ଡ ନିଜ ପାଖରେ ରଖନ୍ତୁ।",
    "Back to home": "ଘରକୁ ଫେରନ୍ତୁ",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "ଆପଣଙ୍କ ପରିବାର ପାଇଁ ସରଳ ବାଛନ୍ଦା। ଆଜି ମାଗଣା ଆପଣଙ୍କର — କିଛି ଦେବାକୁ ନାହିଁ।",
    "Your current plan": "ଆପଣଙ୍କ ବର୍ତ୍ତମାନ ଯୋଜନା",
    "Read this aloud in every lesson": "ପ୍ରତ୍ୟେକ ପାଠରେ ଉଚ୍ଚ ସ୍ୱରରେ ପଢ଼ିବା",
    "3 questions a day per learner": "ପ୍ରତ୍ୟେକ ଶିଖୁଥିବା ବ୍ୟକ୍ତିଙ୍କ ପାଇଁ ଦିନକୁ 3 ପ୍ରଶ୍ନ",
    "Hands-free voice guidance": "ହାତ ନଲଗାଇ ସ୍ୱର ମାର୍ଗଦର୍ଶନ",
    "Unlimited questions": "ଅସୀମିତ ପ୍ରଶ୍ନ",
    "All 60 extra lessons": "ସମସ୍ତ 60 ଅତିରିକ୍ତ ପାଠ",
    "Hands-free voice and unlimited questions":
      "ହାତ ନଲଗାଇ ସ୍ୱର ଓ ଅସୀମିତ ପ୍ରଶ୍ନ",
    "Choose Plus": "Plus ବାଛନ୍ତୁ",
    "Choose Family": "ପରିବାର ବାଛନ୍ତୁ",
    "Coming soon": "ଶୀଘ୍ର ଆସୁଛି",
    "✓ Your current plan": "✓ ଆପଣଙ୍କ ବର୍ତ୍ତମାନ ଯୋଜନା",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "ଦେୟ ଶୀଘ୍ର ଆସୁଛି। ଆଜି କୌଣସି ଦେୟ ନିଆଯାଉ ନାହିଁ। ଆପଣଙ୍କ ବର୍ତ୍ତମାନ ଯୋଜନା ସେହିପରି ରହିବ।",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "ଯେଉଁମାନେ ଜିନିଷ ସେଟ୍ କରନ୍ତି ସେମାନଙ୍କ ପାଇଁ ଶାନ୍ତ ସହାୟକ। କେବଳ ଆବଶ୍ୟକୀୟ — କୌଣସି ଗୋଳମାଳ ନାହିଁ।",
    "Add a family member to learn": "ଶିଖିବା ପାଇଁ ପରିବାରର ଜଣଙ୍କୁ ଯୋଡ଼ନ୍ତୁ",
    "Their name": "ସେମାନଙ୍କ ନାମ",
    "Type their name, e.g. Mary": "ସେମାନଙ୍କ ନାମ ଲେଖନ୍ତୁ, ଯେପରି ମୀରା",
    Add: "ଯୋଡ଼ନ୍ତୁ",
    "{name} is ready to learn": "{name} ଶିଖିବାକୁ ପ୍ରସ୍ତୁତ",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "ସେମାନଙ୍କ ପାଠ ପ୍ରସ୍ତୁତ। ତଳେ ଦବାନ୍ତୁ, ପ୍ରଥମ ପାଠ ଏକ ଦବାଇବା ଦୂରରେ।",
    "Start learning as {name}": "{name} ଭାବରେ ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ",
    "No learners yet. Add the first name above.":
      "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଶିଖୁଥିବା ବ୍ୟକ୍ତି ନାହିଁ। ଉପରେ ପ୍ରଥମ ନାମ ଯୋଡ଼ନ୍ତୁ।",
    "New name": "ନୂଆ ନାମ",
    Save: "ସେଭ୍ କରନ୍ତୁ",
    Cancel: "ବାତିଲ କରନ୍ତୁ",
    "Change name": "ନାମ ବଦଳାନ୍ତୁ",
    Remove: "ହଟାନ୍ତୁ",
    "Remove {name}? Their progress will be deleted.":
      "{name} ଙ୍କୁ ହଟାଇବେ? ସେମାନଙ୍କ ଅଗ୍ରଗତି ଡିଲିଟ୍ ହେବ।",
    "Learning as {name}": "{name} ଭାବରେ ଶିଖୁଛନ୍ତି",
    "Learn as {name}": "{name} ଭାବରେ ଶିଖନ୍ତୁ",
    "Open lessons →": "ପାଠ ଖୋଲନ୍ତୁ →",
    "See lesson progress": "ପାଠର ଅଗ୍ରଗତି ଦେଖନ୍ତୁ",
    Finished: "ସମ୍ପୂର୍ଣ୍ଣ",
    "Not started": "ଆରମ୍ଭ ହୋଇନାହିଁ",
    "Questions from learners": "ଶିଖୁଥିବା ବ୍ୟକ୍ତିଙ୍କ ପ୍ରଶ୍ନ",
    "No questions yet. They will appear here when a learner asks one.":
      "ଏପର୍ଯ୍ୟନ୍ତ ପ୍ରଶ୍ନ ନାହିଁ। କେହି ପଚାରିଲେ ଏଠାରେ ଦେଖାଯିବ।",
    "From {name}": "{name} ଙ୍କଠାରୁ",
    "Everything here is private to your family and only used to keep lessons personal.":
      "ଏଠାରେ ସବୁକିଛି ଆପଣଙ୍କ ପରିବାର ପାଇଁ ଗୋପନୀୟ ଏବଂ କେବଳ ପାଠକୁ ବ୍ୟକ୍ତିଗତ ରଖିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
  },

  /* --------------------------------------------------------------------- */
  as: {
    "Who is learning today?": "আজি কোনে শিকি আছে?",
    "Tap your name. Your lessons and progress are kept just for you.":
      "আপোনাৰ নাম টিপক। আপোনাৰ পাঠ আৰু অগ্ৰগতি কেৱল আপোনাৰ বাবে ৰখা হয়।",
    "No names yet": "এতিয়ালৈকে কোনো নাম নাই",
    "A family member can add the first learner in the Family corner.":
      "পৰিয়ালৰ কোনোবাই পৰিয়াল চুকত প্ৰথম শিকা মানুহ যোগ কৰিব পাৰে।",
    "Go to the Family corner": "পৰিয়াল চুকলৈ যাওক",
    "Ready for the first lesson": "প্ৰথম পাঠৰ বাবে সাজু",
    "1 lesson finished": "1 পাঠ সম্পূৰ্ণ",
    "{n} lessons finished": "{n} পাঠ সম্পূৰ্ণ",
    "Add someone new": "নতুন কাকো যোগ কৰক",
    "A family member can set this up": "পৰিয়ালৰ কোনোবাই এইটো ছেট কৰিব পাৰে",

    "Ask a question": "এটা প্ৰশ্ন সোধক",
    "Type it in your own words. A family member will see it in the Family corner.":
      "নিজৰ ভাষাত লিখক। পৰিয়ালৰ কোনোবাই ইয়াক পৰিয়াল চুকত দেখিব।",
    "Add a learner in the Family corner first, then come back to ask.":
      "প্ৰথমে পৰিয়াল চুকত এজন শিকা মানুহ যোগ কৰক, তাৰ পিছত সোধিবলৈ ঘূৰি আহক।",
    "Choose who is learning today, then come back to ask.":
      "আজি কোনে শিকি আছে বাছনি কৰক, তাৰ পিছত সোধিবলৈ ঘূৰি আহক।",
    "What would you like to ask, {name}?": "{name}, আপুনি কি সোধিব বিচাৰে?",
    "For example: How do I send a photo to my sister?":
      "উদাহৰণ: মই মোৰ ভনীয়েকলৈ ফটো কেনেকৈ পঠিয়াম?",
    "Send my question": "মোৰ প্ৰশ্ন পঠিয়াওক",
    "Free plan: 3 questions a day per learner.":
      "বিনামূলীয়া পৰিকল্পনা: প্ৰতিজন শিকা মানুহৰ বাবে দিনে 3 টা প্ৰশ্ন।",
    "Thank you — your question is saved for your family to read.":
      "ধন্যবাদ — আপোনাৰ প্ৰশ্ন পৰিয়ালে পঢ়িবলৈ ছেভ কৰা হৈছে।",
    "Your questions": "আপোনাৰ প্ৰশ্ন",
    "Nothing yet. Ask anything — there is no such thing as a silly question here.":
      "এতিয়ালৈকে একো নাই। যিকোনো কথা সোধক — ইয়াত বোকা প্ৰশ্ন বুলি একো নাই।",
    "Waiting for a family member to answer":
      "পৰিয়ালৰ কাৰোবাৰ উত্তৰলৈ অপেক্ষা কৰি আছে",

    "Your account": "আপোনাৰ একাউণ্ট",
    "One account for your family, kept private and safe.":
      "আপোনাৰ পৰিয়ালৰ বাবে এটা একাউণ্ট, গোপনীয় আৰু সুৰক্ষিত।",
    Plan: "পৰিকল্পনা",
    "Free — your current plan": "বিনামূলীয়া — আপোনাৰ বৰ্তমান পৰিকল্পনা",
    Learners: "শিকা মানুহ",
    "None yet": "এতিয়ালৈকে কোনেও নাই",
    "See plans": "পৰিকল্পনা চাওক",
    "Tap one — you can change it anytime.":
      "এটা টিপক — যেতিয়া মন যায় সলনি কৰিব পাৰে।",
    "Signing out": "ছাইন আউট কৰা",
    "Your lessons stay saved. You can sign back in with your phone number and password.":
      "আপোনাৰ পাঠ ছেভ হৈ থাকে। ফোন নম্বৰ আৰু পাছৱৰ্ডেৰে পুনৰ ছাইন ইন কৰিব পাৰে।",
    "Sign out": "ছাইন আউট",
    "Need help?": "সহায় লাগেনে?",
    "Read the sign-in guide": "ছাইন ইন গাইড পঢ়ক",

    "How to sign in": "কেনেকৈ ছাইন ইন কৰিব",
    "Signing in": "ছাইন ইন কৰা",
    "Making an account": "একাউণ্ট খোলা",
    "A family member does this once.": "পৰিয়ালৰ কোনোবাই এইটো এবাৰ কৰে।",
    "Open GentleLearn in your web browser.":
      "আপোনাৰ ৱেব ব্ৰাউজাৰত GentleLearn খোলক।",
    "Type your phone number and your password.":
      "আপোনাৰ ফোন নম্বৰ আৰু পাছৱৰ্ড লিখক।",
    "Tap Sign in.": "ছাইন ইন টিপক।",
    "Then tap your name to begin your lesson.":
      "তাৰ পিছত আপোনাৰ নাম টিপি পাঠ আৰম্ভ কৰক।",
    "Tap Account at the top of the screen.":
      "স্ক্ৰিনৰ ওপৰত একাউণ্ট টিপক।",
    "Type the family's phone number.": "পৰিয়ালৰ ফোন নম্বৰ লিখক।",
    "Choose a password and type it again.":
      "এটা পাছৱৰ্ড বাছি পুনৰ লিখক।",
    "Tap Create my account, then add learners in the Family corner.":
      "মোৰ একাউণ্ট খোলক টিপক, তাৰ পিছত পৰিয়াল চুকত শিকা মানুহ যোগ কৰক।",
    "Your account is kept safe. Keep your password to yourself.":
      "আপোনাৰ একাউণ্ট সুৰক্ষিত থাকে। পাছৱৰ্ড নিজৰ ওচৰত ৰাখক।",
    "Back to home": "ঘৰলৈ উভতি যাওক",

    "A simple choice for your family. Free is yours today — nothing to pay.":
      "আপোনাৰ পৰিয়ালৰ বাবে সৰল বাছনি। আজি বিনামূলীয়া আপোনাৰ — একো দিব নালাগে।",
    "Your current plan": "আপোনাৰ বৰ্তমান পৰিকল্পনা",
    "Read this aloud in every lesson": "প্ৰতিটো পাঠত উচ্চ স্বৰত পঢ়া",
    "3 questions a day per learner": "প্ৰতিজন শিকা মানুহৰ বাবে দিনে 3 টা প্ৰশ্ন",
    "Hands-free voice guidance": "হাত নুলুৱাকৈ মাতৰ পথনিৰ্দেশ",
    "Unlimited questions": "অসীমিত প্ৰশ্ন",
    "All 60 extra lessons": "সকলো 60 টা অতিৰিক্ত পাঠ",
    "Hands-free voice and unlimited questions":
      "হাত নুলুৱাকৈ মাত আৰু অসীমিত প্ৰশ্ন",
    "Choose Plus": "Plus বাছনি কৰক",
    "Choose Family": "পৰিয়াল বাছনি কৰক",
    "Coming soon": "সোনকালে আহিব",
    "✓ Your current plan": "✓ আপোনাৰ বৰ্তমান পৰিকল্পনা",
    "Payments are coming soon. No payment is taken today. Your current plan stays the same.":
      "পেমেন্ট সোনকালে আহিব। আজি কোনো পেমেন্ট লোৱা নহয়। আপোনাৰ বৰ্তমান পৰিকল্পনা একেই থাকিব।",

    "A calm helper for the people who set things up. Only what's needed — no clutter.":
      "যিসকলে সজাই-পৰাই দিয়ে তেওঁলোকৰ বাবে শান্ত সহায়ক। কেৱল প্ৰয়োজনীয় — কোনো গোলমাল নাই।",
    "Add a family member to learn": "শিকিবলৈ পৰিয়ালৰ এজনক যোগ কৰক",
    "Their name": "তেওঁলোকৰ নাম",
    "Type their name, e.g. Mary": "তেওঁলোকৰ নাম লিখক, যেনে মীৰা",
    Add: "যোগ কৰক",
    "{name} is ready to learn": "{name} শিকিবলৈ সাজু",
    "Their lessons are set up. Tap below and the first lesson is one tap away.":
      "তেওঁলোকৰ পাঠ সাজু। তলত টিপক, প্ৰথম পাঠ এটা টিপাৰ দূৰত।",
    "Start learning as {name}": "{name} হিচাপে শিকা আৰম্ভ কৰক",
    "No learners yet. Add the first name above.":
      "এতিয়ালৈকে কোনো শিকা মানুহ নাই। ওপৰত প্ৰথম নাম যোগ কৰক।",
    "New name": "নতুন নাম",
    Save: "ছেভ কৰক",
    Cancel: "বাতিল কৰক",
    "Change name": "নাম সলনি কৰক",
    Remove: "আঁতৰাওক",
    "Remove {name}? Their progress will be deleted.":
      "{name} ক আঁতৰাবনে? তেওঁলোকৰ অগ্ৰগতি মচি যাব।",
    "Learning as {name}": "{name} হিচাপে শিকি আছে",
    "Learn as {name}": "{name} হিচাপে শিকক",
    "Open lessons →": "পাঠ খোলক →",
    "See lesson progress": "পাঠৰ অগ্ৰগতি চাওক",
    Finished: "সম্পূৰ্ণ",
    "Not started": "আৰম্ভ হোৱা নাই",
    "Questions from learners": "শিকা মানুহৰ প্ৰশ্ন",
    "No questions yet. They will appear here when a learner asks one.":
      "এতিয়ালৈকে প্ৰশ্ন নাই। কোনোবাই সোধিলে ইয়াত দেখিব।",
    "From {name}": "{name} ৰ পৰা",
    "Everything here is private to your family and only used to keep lessons personal.":
      "ইয়াত সকলো আপোনাৰ পৰিয়ালৰ বাবে গোপনীয় আৰু কেৱল পাঠ ব্যক্তিগত ৰাখিবলৈ ব্যৱহাৰ হয়।",
  },
};
