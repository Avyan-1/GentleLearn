import type { UiDict, Locale } from "@/lib/i18n";

/**
 * The little example screens shown beside lesson steps: a scam email, a fake
 * web address, an OTP message and so on. Addresses, URLs and the digits in a
 * code stay exactly as printed; everything a learner reads is translated.
 */
export const exampleDictionaries: Record<Locale, UiDict> = {
  en: {},

  /* --------------------------------------------------------------------- */
  hi: {
    "Example — {title}": "उदाहरण — {title}",
    "a trick email": "धोखे वाला ईमेल",
    "The address is long and strange. Your bank uses its own short address.":
      "पता लंबा और अजीब है। आपका बैंक अपना छोटा पता इस्तेमाल करता है।",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "आपके नाम की जगह “प्रिय ग्राहक” — असली बैंक आपका नाम जानता है।",
    "Urgent words push you to act before you think.":
      "“तुरंत” जैसे शब्द आपको सोचने से पहले काम करने पर मजबूर करते हैं।",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "यह लिंक दबाने को कहता है। इसके बजाय अपने बैंक का ऐप खुद खोलें।",
    From: "से",
    Message: "संदेश",
    "Dear customer,": "प्रिय ग्राहक,",
    "URGENT: your account will be closed today.":
      "तुरंत ध्यान दें: आपका खाता आज बंद हो जाएगा।",
    "Tap here to verify your account": "खाता जाँचने के लिए यहाँ दबाएँ",

    "two addresses, one is fake": "दो पते, एक नकली है",
    "The real bank uses a short, exact name you already know.":
      "असली बैंक वही छोटा, सही नाम इस्तेमाल करता है जो आप पहले से जानते हैं।",
    "The fake one adds words like “secure” and “login” to look official.":
      "नकली पता “secure” और “login” जैसे शब्द जोड़कर सरकारी दिखने की कोशिश करता है।",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "ताला सिर्फ़ यह बताता है कि कनेक्शन निजी है — इसका मतलब यह नहीं कि साइट ईमानदार है।",
    "When unsure, type the address yourself instead of tapping a link.":
      "शक हो तो लिंक दबाने के बजाय पता खुद लिखें।",
    "Looks right": "सही लगता है",
    real: "असली",
    "Looks almost right": "लगभग सही लगता है",
    fake: "नकली",

    "the code that is only for you": "वह कोड जो सिर्फ़ आपके लिए है",
    "The code arrives by itself. You never need to read it to anyone.":
      "कोड अपने आप आता है। इसे किसी को बोलने की ज़रूरत कभी नहीं।",
    "A real bank, delivery company or police officer will not ask for it.":
      "असली बैंक, डिलीवरी कंपनी या पुलिस वाला इसे नहीं माँगेगा।",
    "If someone asks, say no and end the call.":
      "कोई माँगे तो मना करें और फ़ोन काट दें।",
    "Your verification code": "आपका सत्यापन कोड",
    "Never share this code with anyone.": "यह कोड किसी से साझा न करें।",
    "Unknown caller": "अनजान कॉलर",
    "“I am from your bank. Please read me the code on your phone.”":
      "“मैं आपके बैंक से बोल रहा हूँ। अपने फ़ोन पर आया कोड मुझे बोलिए।”",

    "a prize you never entered for": "ऐसा इनाम जिसमें आपने भाग नहीं लिया",
    "You did not enter this draw, so you cannot have won it.":
      "आपने इस ड्रॉ में भाग नहीं लिया, इसलिए आप जीत नहीं सकते।",
    "Real prizes never ask for a fee before they arrive.":
      "असली इनाम मिलने से पहले कभी फ़ीस नहीं माँगते।",
    "Delete the message. You do not owe them a reply.":
      "संदेश हटा दें। आपको उन्हें जवाब देना ज़रूरी नहीं।",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "बधाई हो! आपने लकी ड्रॉ में ₹25,000 जीते हैं।",
    "Pay ₹499 to claim your prize": "इनाम लेने के लिए ₹499 दें",

    "a photo waiting in your messages": "आपके संदेशों में रुकी एक तस्वीर",
    "The small picture icon means a photo has arrived.":
      "छोटा तस्वीर का चिह्न बताता है कि फोटो आई है।",
    "Tap the photo once to see it bigger.":
      "तस्वीर को बड़ा देखने के लिए एक बार दबाएँ।",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "फ़ोन में रखने के लिए सहेजें (या नीचे का तीर) दबाएँ।",
    Grandchild: "पोता-पोती",
    Save: "सहेजें",
    Open: "खोलें",

    "getting ready for a video call": "वीडियो कॉल के लिए तैयार होना",
    "The green camera icon is the video call app. Tap it once.":
      "हरा कैमरा चिह्न वीडियो कॉल ऐप है। उसे एक बार दबाएँ।",
    "Tap the person's name, then the small camera button.":
      "उस व्यक्ति का नाम दबाएँ, फिर छोटा कैमरा बटन।",
    "The red button at the end is the one that ends the call.":
      "आखिर में लाल बटन ही कॉल बंद करता है।",
    You: "आप",

    "a bill ready to pay": "भरने के लिए तैयार बिल",
    "The company name should be exactly what is printed on your bill.":
      "कंपनी का नाम बिल पर छपे नाम जैसा ही होना चाहिए।",
    "Read the amount out loud before you tap Pay.":
      "भुगतान दबाने से पहले रकम बोलकर पढ़ें।",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "आखिर में मिली रसीद आपका सबूत है। बिल भुगतान दिखने तक उसे रखें।",
    "Electricity bill": "बिजली का बिल",
    Biller: "बिल भेजने वाला",
    "State Electricity Board": "राज्य विद्युत बोर्ड",
    "Consumer number": "उपभोक्ता संख्या",
    "Due date": "देय तिथि",
    "Pay securely": "सुरक्षित भुगतान करें",

    "an unexpected call": "एक अचानक आई कॉल",
    "A real bank will not phone and demand money or a code.":
      "असली बैंक फ़ोन करके पैसे या कोड नहीं माँगता।",
    "The number on the screen proves nothing — it can be faked.":
      "स्क्रीन पर दिखता नंबर कुछ साबित नहीं करता — उसे नकली बनाया जा सकता है।",
    "Hang up and call the office on the number printed on your card or bill.":
      "फ़ोन काटें और कार्ड या बिल पर छपे नंबर पर दफ़्तर को कॉल करें।",
    "Incoming call": "आती कॉल",
    "Unknown number": "अनजान नंबर",
    "“I am from your bank”": "“मैं आपके बैंक से बोल रहा हूँ”",

    "a link you were not expecting": "ऐसा लिंक जिसकी आपको उम्मीद नहीं थी",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "आप किसी पार्सल का इंतज़ार नहीं कर रहे थे, इसलिए यह संदेश आपसे मेल नहीं खाता।",
    "The address ends in .info, not the delivery company's real name.":
      "पता .info पर खत्म होता है, डिलीवरी कंपनी के असली नाम पर नहीं।",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "इसे न दबाएँ। इसके बजाय कंपनी के अपने ऐप में डिलीवरी देखें।",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "आपका पार्सल डिपो में रोका गया है। यहाँ ₹25 दें:",
    "The link preview": "लिंक की झलक",
    "not real": "असली नहीं",

    "a message from a new number": "नए नंबर से आया संदेश",
    "A new number is the first warning, even with a familiar name.":
      "नया नंबर पहली चेतावनी है, चाहे नाम जाना-पहचाना हो।",
    "The message asks you not to call. That is the trick working.":
      "संदेश कहता है कॉल न करें। यही तो ठगी का तरीका है।",
    "Call the saved number you already have, and ask a private question.":
      "पहले से सहेजे नंबर पर कॉल करें और कोई निजी सवाल पूछें।",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "नमस्ते माँ, मैं हूँ। मेरा फ़ोन टूट गया, यह मेरा नया नंबर है।",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "मुझे आज ₹20,000 चाहिए। जल्दी भेज दीजिए और कॉल न कीजिए — मैं मीटिंग में हूँ।",
    "Pause.": "रुकें।",
    "Call the number you already have saved before sending anything.":
      "कुछ भी भेजने से पहले उसी नंबर पर कॉल करें जो आपके पास पहले से सहेजा है।",
  },

  /* --------------------------------------------------------------------- */
  bn: {
    "Example — {title}": "উদাহরণ — {title}",
    "a trick email": "একটি প্রতারণার ইমেল",
    "The address is long and strange. Your bank uses its own short address.":
      "ঠিকানাটি লম্বা ও অদ্ভুত। আপনার ব্যাংক নিজের ছোট ঠিকানা ব্যবহার করে।",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "আপনার নামের বদলে “প্রিয় গ্রাহক” — আসল ব্যাংক আপনার নাম জানে।",
    "Urgent words push you to act before you think.":
      "“জরুরি” শব্দ আপনাকে ভাবার আগেই কাজ করতে ঠেলে দেয়।",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "এটি লিংক চাপতে বলে। বরং নিজে আপনার ব্যাংকের অ্যাপ খুলুন।",
    From: "প্রেরক",
    Message: "বার্তা",
    "Dear customer,": "প্রিয় গ্রাহক,",
    "URGENT: your account will be closed today.":
      "জরুরি: আজই আপনার অ্যাকাউন্ট বন্ধ হয়ে যাবে।",
    "Tap here to verify your account": "অ্যাকাউন্ট যাচাই করতে এখানে চাপুন",

    "two addresses, one is fake": "দুটি ঠিকানা, একটি নকল",
    "The real bank uses a short, exact name you already know.":
      "আসল ব্যাংক সেই ছোট, সঠিক নামই ব্যবহার করে যা আপনি আগে থেকেই জানেন।",
    "The fake one adds words like “secure” and “login” to look official.":
      "নকলটি “secure” ও “login” শব্দ যোগ করে সরকারি দেখাতে চায়।",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "তালা শুধু বোঝায় সংযোগ গোপনীয় — এর মানে সাইটটি সৎ নয়।",
    "When unsure, type the address yourself instead of tapping a link.":
      "সন্দেহ হলে লিংক না চেপে ঠিকানাটি নিজে লিখুন।",
    "Looks right": "ঠিক দেখাচ্ছে",
    real: "আসল",
    "Looks almost right": "প্রায় ঠিক দেখাচ্ছে",
    fake: "নকল",

    "the code that is only for you": "যে কোডটি কেবল আপনার জন্য",
    "The code arrives by itself. You never need to read it to anyone.":
      "কোডটি নিজে থেকেই আসে। এটি কাউকে বলার দরকার কখনও হয় না।",
    "A real bank, delivery company or police officer will not ask for it.":
      "আসল ব্যাংক, ডেলিভারি কোম্পানি বা পুলিশ কেউ এটি চাইবে না।",
    "If someone asks, say no and end the call.":
      "কেউ চাইলে না বলুন এবং ফোন কেটে দিন।",
    "Your verification code": "আপনার যাচাই কোড",
    "Never share this code with anyone.": "এই কোড কারও সঙ্গে ভাগ করবেন না।",
    "Unknown caller": "অজানা কলার",
    "“I am from your bank. Please read me the code on your phone.”":
      "“আমি আপনার ব্যাংক থেকে বলছি। ফোনে আসা কোডটি আমাকে বলুন।”",

    "a prize you never entered for": "এমন পুরস্কার যেখানে আপনি অংশ নেননি",
    "You did not enter this draw, so you cannot have won it.":
      "আপনি এই ড্রয়ে অংশ নেননি, তাই জিততে পারেন না।",
    "Real prizes never ask for a fee before they arrive.":
      "আসল পুরস্কার আসার আগে কখনও ফি চায় না।",
    "Delete the message. You do not owe them a reply.":
      "বার্তাটি মুছে দিন। তাদের উত্তর দেওয়ার দায় আপনার নেই।",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "অভিনন্দন! আপনি লাকি ড্রয়ে ₹25,000 জিতেছেন।",
    "Pay ₹499 to claim your prize": "পুরস্কার নিতে ₹499 দিন",

    "a photo waiting in your messages": "আপনার বার্তায় অপেক্ষা করা একটি ছবি",
    "The small picture icon means a photo has arrived.":
      "ছোট ছবির আইকন মানে একটি ছবি এসেছে।",
    "Tap the photo once to see it bigger.":
      "ছবিটি বড় করে দেখতে একবার চাপুন।",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ফোনে রাখতে সেভ (বা নিচের তীর) চাপুন।",
    Grandchild: "নাতি-নাতনি",
    Save: "সেভ",
    Open: "খুলুন",

    "getting ready for a video call": "ভিডিও কলের জন্য তৈরি হওয়া",
    "The green camera icon is the video call app. Tap it once.":
      "সবুজ ক্যামেরা আইকনটিই ভিডিও কল অ্যাপ। একবার চাপুন।",
    "Tap the person's name, then the small camera button.":
      "ওই ব্যক্তির নাম চাপুন, তারপর ছোট ক্যামেরা বোতাম।",
    "The red button at the end is the one that ends the call.":
      "শেষের লাল বোতামটিই কল বন্ধ করে।",
    You: "আপনি",

    "a bill ready to pay": "দেওয়ার জন্য প্রস্তুত একটি বিল",
    "The company name should be exactly what is printed on your bill.":
      "কোম্পানির নাম আপনার বিলে ছাপা নামের মতোই হওয়া উচিত।",
    "Read the amount out loud before you tap Pay.":
      "পে চাপার আগে টাকার অঙ্কটি জোরে পড়ুন।",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "শেষে পাওয়া রসিদই আপনার প্রমাণ। বিল পরিশোধিত দেখানো পর্যন্ত রাখুন।",
    "Electricity bill": "বিদ্যুৎ বিল",
    Biller: "বিল প্রেরক",
    "State Electricity Board": "রাজ্য বিদ্যুৎ বোর্ড",
    "Consumer number": "গ্রাহক নম্বর",
    "Due date": "শেষ তারিখ",
    "Pay securely": "নিরাপদে পরিশোধ করুন",

    "an unexpected call": "একটি অপ্রত্যাশিত কল",
    "A real bank will not phone and demand money or a code.":
      "আসল ব্যাংক ফোন করে টাকা বা কোড চায় না।",
    "The number on the screen proves nothing — it can be faked.":
      "স্ক্রিনে দেখা নম্বর কিছু প্রমাণ করে না — এটি নকল করা যায়।",
    "Hang up and call the office on the number printed on your card or bill.":
      "ফোন কেটে কার্ড বা বিলে ছাপা নম্বরে অফিসে কল করুন।",
    "Incoming call": "আগত কল",
    "Unknown number": "অজানা নম্বর",
    "“I am from your bank”": "“আমি আপনার ব্যাংক থেকে বলছি”",

    "a link you were not expecting": "এমন লিংক যা আপনি আশা করেননি",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "আপনি কোনো পার্সেলের অপেক্ষায় ছিলেন না, তাই এই বার্তা আপনার সঙ্গে মেলে না।",
    "The address ends in .info, not the delivery company's real name.":
      "ঠিকানাটি .info-তে শেষ হয়, ডেলিভারি কোম্পানির আসল নামে নয়।",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "এটি চাপবেন না। বরং কোম্পানির নিজের অ্যাপে ডেলিভারি দেখুন।",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "আপনার পার্সেল ডিপোতে আটকে আছে। এখানে ₹25 দিন:",
    "The link preview": "লিংকের প্রিভিউ",
    "not real": "আসল নয়",

    "a message from a new number": "নতুন নম্বর থেকে একটি বার্তা",
    "A new number is the first warning, even with a familiar name.":
      "নতুন নম্বরই প্রথম সতর্কতা, নাম পরিচিত হলেও।",
    "The message asks you not to call. That is the trick working.":
      "বার্তাটি বলে কল করবেন না। এটাই প্রতারণার কৌশল।",
    "Call the saved number you already have, and ask a private question.":
      "আগে থেকেই সেভ করা নম্বরে কল করুন এবং একটি ব্যক্তিগত প্রশ্ন করুন।",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "মা, আমি বলছি। আমার ফোন ভেঙে গেছে, এটা আমার নতুন নম্বর।",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "আজ আমার ₹20,000 দরকার। তাড়াতাড়ি পাঠান আর কল করবেন না — আমি মিটিংয়ে আছি।",
    "Pause.": "থামুন।",
    "Call the number you already have saved before sending anything.":
      "কিছু পাঠানোর আগে যে নম্বর আগে থেকেই সেভ আছে সেখানেই কল করুন।",
  },

  /* --------------------------------------------------------------------- */
  ta: {
    "Example — {title}": "உதாரணம் — {title}",
    "a trick email": "ஏமாற்று மின்னஞ்சல்",
    "The address is long and strange. Your bank uses its own short address.":
      "முகவரி நீளமாகவும் விநோதமாகவும் உள்ளது. உங்கள் வங்கி தனது சொந்தச் சிறிய முகவரியைப் பயன்படுத்தும்.",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "உங்கள் பெயருக்குப் பதிலாக “அன்புள்ள வாடிக்கையாளரே” — உண்மையான வங்கி உங்கள் பெயரை அறியும்.",
    "Urgent words push you to act before you think.":
      "“அவசரம்” என்பது போன்ற வார்த்தைகள் சிந்திக்கும் முன் செயல்படத் தூண்டும்.",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "இது ஒரு இணைப்பைத் தட்டச் சொல்கிறது. அதற்குப் பதிலாக உங்கள் வங்கியின் செயலியை நீங்களே திறங்கள்.",
    From: "அனுப்பியவர்",
    Message: "செய்தி",
    "Dear customer,": "அன்புள்ள வாடிக்கையாளரே,",
    "URGENT: your account will be closed today.":
      "அவசரம்: இன்றே உங்கள் கணக்கு மூடப்படும்.",
    "Tap here to verify your account": "கணக்கைச் சரிபார்க்க இங்கே தட்டுங்கள்",

    "two addresses, one is fake": "இரண்டு முகவரிகள், ஒன்று போலி",
    "The real bank uses a short, exact name you already know.":
      "உண்மையான வங்கி நீங்கள் ஏற்கனவே அறிந்த சிறிய, சரியான பெயரையே பயன்படுத்தும்.",
    "The fake one adds words like “secure” and “login” to look official.":
      "போலியானது “secure”, “login” போன்ற வார்த்தைகளைச் சேர்த்து அதிகாரப்பூர்வமாகத் தெரியச் செய்கிறது.",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "பூட்டு என்பது இணைப்பு தனிப்பட்டது என்பதை மட்டுமே குறிக்கும் — தளம் நேர்மையானது என்று அர்த்தமல்ல.",
    "When unsure, type the address yourself instead of tapping a link.":
      "சந்தேகம் இருந்தால் இணைப்பைத் தட்டாமல் முகவரியை நீங்களே தட்டச்சு செய்யுங்கள்.",
    "Looks right": "சரியாகத் தெரிகிறது",
    real: "உண்மை",
    "Looks almost right": "கிட்டத்தட்ட சரியாகத் தெரிகிறது",
    fake: "போலி",

    "the code that is only for you": "உங்களுக்கு மட்டுமான அந்தக் குறியீடு",
    "The code arrives by itself. You never need to read it to anyone.":
      "குறியீடு தானாகவே வரும். அதை யாருக்கும் சொல்ல வேண்டியதே இல்லை.",
    "A real bank, delivery company or police officer will not ask for it.":
      "உண்மையான வங்கி, டெலிவரி நிறுவனம் அல்லது காவலர் யாரும் அதைக் கேட்க மாட்டார்கள்.",
    "If someone asks, say no and end the call.":
      "யாராவது கேட்டால் வேண்டாம் என்று சொல்லி அழைப்பை முடியுங்கள்.",
    "Your verification code": "உங்கள் சரிபார்ப்புக் குறியீடு",
    "Never share this code with anyone.": "இந்தக் குறியீட்டை யாருடனும் பகிர வேண்டாம்.",
    "Unknown caller": "தெரியாத அழைப்பாளர்",
    "“I am from your bank. Please read me the code on your phone.”":
      "“நான் உங்கள் வங்கியிலிருந்து பேசுகிறேன். உங்கள் தொலைபேசியில் வந்த குறியீட்டைச் சொல்லுங்கள்.”",

    "a prize you never entered for": "நீங்கள் பங்கேற்காத ஒரு பரிசு",
    "You did not enter this draw, so you cannot have won it.":
      "இந்தக் குலுக்கலில் நீங்கள் பங்கேற்கவில்லை, எனவே வென்றிருக்க முடியாது.",
    "Real prizes never ask for a fee before they arrive.":
      "உண்மையான பரிசுகள் வரும் முன் கட்டணம் கேட்பதே இல்லை.",
    "Delete the message. You do not owe them a reply.":
      "செய்தியை நீக்குங்கள். அவர்களுக்குப் பதில் சொல்ல நீங்கள் கடமைப்பட்டவர் அல்ல.",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "வாழ்த்துகள்! அதிர்ஷ்டக் குலுக்கலில் நீங்கள் ₹25,000 வென்றுள்ளீர்கள்.",
    "Pay ₹499 to claim your prize": "பரிசைப் பெற ₹499 செலுத்துங்கள்",

    "a photo waiting in your messages": "உங்கள் செய்திகளில் காத்திருக்கும் புகைப்படம்",
    "The small picture icon means a photo has arrived.":
      "சிறிய படச் சின்னம் ஒரு புகைப்படம் வந்துள்ளது என்பதைக் குறிக்கும்.",
    "Tap the photo once to see it bigger.":
      "புகைப்படத்தைப் பெரிதாகப் பார்க்க ஒருமுறை தட்டுங்கள்.",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "உங்கள் தொலைபேசியில் வைக்க சேமி (அல்லது கீழ்நோக்கிய அம்பு) தட்டுங்கள்.",
    Grandchild: "பேரக்குழந்தை",
    Save: "சேமி",
    Open: "திற",
    "getting ready for a video call": "வீடியோ அழைப்புக்குத் தயாராகுதல்",
    "The green camera icon is the video call app. Tap it once.":
      "பச்சை கேமரா சின்னமே வீடியோ அழைப்புச் செயலி. அதை ஒருமுறை தட்டுங்கள்.",
    "Tap the person's name, then the small camera button.":
      "அந்த நபரின் பெயரைத் தட்டி, பிறகு சிறிய கேமரா பொத்தானைத் தட்டுங்கள்.",
    "The red button at the end is the one that ends the call.":
      "இறுதியில் உள்ள சிவப்பு பொத்தானே அழைப்பை முடிக்கும்.",
    You: "நீங்கள்",

    "a bill ready to pay": "செலுத்தத் தயாராக உள்ள பில்",
    "The company name should be exactly what is printed on your bill.":
      "நிறுவனத்தின் பெயர் உங்கள் பில்லில் அச்சிடப்பட்டதாகவே இருக்க வேண்டும்.",
    "Read the amount out loud before you tap Pay.":
      "செலுத்து என்பதைத் தட்டும் முன் தொகையைச் சத்தமாகப் படியுங்கள்.",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "இறுதியில் வரும் ரசீதே உங்கள் சான்று. பில் செலுத்தப்பட்டதாகக் காட்டும் வரை அதை வைத்திருங்கள்.",
    "Electricity bill": "மின்சாரக் கட்டணம்",
    Biller: "பில் அனுப்புபவர்",
    "State Electricity Board": "மாநில மின்சார வாரியம்",
    "Consumer number": "நுகர்வோர் எண்",
    "Due date": "கடைசி தேதி",
    "Pay securely": "பாதுகாப்பாகச் செலுத்துங்கள்",

    "an unexpected call": "எதிர்பாராத அழைப்பு",
    "A real bank will not phone and demand money or a code.":
      "உண்மையான வங்கி போன் செய்து பணமோ குறியீடோ கேட்காது.",
    "The number on the screen proves nothing — it can be faked.":
      "திரையில் தெரியும் எண் எதையும் நிரூபிக்காது — அது போலியாக்கப்படலாம்.",
    "Hang up and call the office on the number printed on your card or bill.":
      "அழைப்பைத் துண்டித்து, அட்டை அல்லது பில்லில் அச்சிடப்பட்ட எண்ணில் அலுவலகத்தை அழையுங்கள்.",
    "Incoming call": "வரும் அழைப்பு",
    "Unknown number": "தெரியாத எண்",
    "“I am from your bank”": "“நான் உங்கள் வங்கியிலிருந்து பேசுகிறேன்”",

    "a link you were not expecting": "நீங்கள் எதிர்பார்க்காத ஒரு இணைப்பு",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "நீங்கள் எந்தப் பொதியையும் எதிர்பார்க்கவில்லை, எனவே இந்தச் செய்தி உங்களுக்குப் பொருந்தாது.",
    "The address ends in .info, not the delivery company's real name.":
      "முகவரி .info-ல் முடிகிறது, டெலிவரி நிறுவனத்தின் உண்மையான பெயரில் அல்ல.",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "அதைத் தட்ட வேண்டாம். அதற்குப் பதிலாக நிறுவனத்தின் சொந்தச் செயலியில் டெலிவரியைப் பாருங்கள்.",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "உங்கள் பொதி டிப்போவில் நிறுத்தப்பட்டுள்ளது. இங்கே ₹25 செலுத்துங்கள்:",
    "The link preview": "இணைப்பின் முன்னோட்டம்",
    "not real": "உண்மையானது அல்ல",

    "a message from a new number": "புதிய எண்ணிலிருந்து வந்த செய்தி",
    "A new number is the first warning, even with a familiar name.":
      "பெயர் பழக்கமானதாக இருந்தாலும் புதிய எண்ணே முதல் எச்சரிக்கை.",
    "The message asks you not to call. That is the trick working.":
      "செய்தி அழைக்க வேண்டாம் என்கிறது. அதுதான் மோசடியின் தந்திரம்.",
    "Call the saved number you already have, and ask a private question.":
      "ஏற்கனவே சேமித்த எண்ணில் அழைத்து, தனிப்பட்ட ஒரு கேள்வி கேளுங்கள்.",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "அம்மா, நான் தான். என் போன் உடைந்துவிட்டது, இது என் புதிய எண்.",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "இன்று எனக்கு ₹20,000 வேண்டும். சீக்கிரம் அனுப்புங்கள், அழைக்க வேண்டாம் — நான் கூட்டத்தில் இருக்கிறேன்.",
    "Pause.": "நில்லுங்கள்.",
    "Call the number you already have saved before sending anything.":
      "எதையும் அனுப்பும் முன் ஏற்கனவே சேமித்த எண்ணில் அழையுங்கள்.",
  },

  /* --------------------------------------------------------------------- */
  te: {
    "Example — {title}": "ఉదాహరణ — {title}",
    "a trick email": "మోసపూరిత ఇమెయిల్",
    "The address is long and strange. Your bank uses its own short address.":
      "చిరునామా పొడవుగా, వింతగా ఉంది. మీ బ్యాంకు తన సొంత చిన్న చిరునామాను ఉపయోగిస్తుంది.",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "మీ పేరుకు బదులు “ప్రియమైన కస్టమర్” — నిజమైన బ్యాంకుకు మీ పేరు తెలుసు.",
    "Urgent words push you to act before you think.":
      "“అత్యవసరం” వంటి మాటలు ఆలోచించకముందే పని చేయించేస్తాయి.",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "ఇది లింక్ నొక్కమంటుంది. బదులుగా మీ బ్యాంకు యాప్ను మీరే తెరవండి.",
    From: "పంపినవారు",
    Message: "సందేశం",
    "Dear customer,": "ప్రియమైన కస్టమర్,",
    "URGENT: your account will be closed today.":
      "అత్యవసరం: ఈరోజే మీ ఖాతా మూసివేయబడుతుంది.",
    "Tap here to verify your account": "ఖాతా ధృవీకరించడానికి ఇక్కడ నొక్కండి",

    "two addresses, one is fake": "రెండు చిరునామాలు, ఒకటి నకిలీ",
    "The real bank uses a short, exact name you already know.":
      "నిజమైన బ్యాంకు మీకు తెలిసిన చిన్న, సరైన పేరునే ఉపయోగిస్తుంది.",
    "The fake one adds words like “secure” and “login” to look official.":
      "నకిలీది అధికారికంగా కనిపించడానికి “secure”, “login” వంటి మాటలు చేరుస్తుంది.",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "తాళం అంటే కనెక్షన్ గోప్యం — సైట్ నిజాయితీగా ఉందని అర్థం కాదు.",
    "When unsure, type the address yourself instead of tapping a link.":
      "సందేహం ఉంటే లింక్ నొక్కకుండా చిరునామాను మీరే టైప్ చేయండి.",
    "Looks right": "సరిగ్గా కనిపిస్తుంది",
    real: "నిజం",
    "Looks almost right": "దాదాపు సరిగ్గా కనిపిస్తుంది",
    fake: "నకిలీ",

    "the code that is only for you": "మీ కోసమే ఉన్న కోడ్",
    "The code arrives by itself. You never need to read it to anyone.":
      "కోడ్ దానంతటదే వస్తుంది. దాన్ని ఎవరికీ చెప్పాల్సిన అవసరం లేదు.",
    "A real bank, delivery company or police officer will not ask for it.":
      "నిజమైన బ్యాంకు, డెలివరీ కంపెనీ లేదా పోలీసు అధికారి దాన్ని అడగరు.",
    "If someone asks, say no and end the call.":
      "ఎవరైనా అడిగితే వద్దని చెప్పి కాల్ ముగించండి.",
    "Your verification code": "మీ ధృవీకరణ కోడ్",
    "Never share this code with anyone.": "ఈ కోడ్ను ఎవరితోనూ పంచుకోకండి.",
    "Unknown caller": "తెలియని కాలర్",
    "“I am from your bank. Please read me the code on your phone.”":
      "“నేను మీ బ్యాంకు నుంచి మాట్లాడుతున్నాను. మీ ఫోన్కు వచ్చిన కోడ్ చెప్పండి.”",

    "a prize you never entered for": "మీరు పాల్గొనని బహుమతి",
    "You did not enter this draw, so you cannot have won it.":
      "ఈ డ్రాలో మీరు పాల్గొనలేదు, కాబట్టి గెలవలేరు.",
    "Real prizes never ask for a fee before they arrive.":
      "నిజమైన బహుమతులు రాకముందే ఫీజు అడగవు.",
    "Delete the message. You do not owe them a reply.":
      "సందేశాన్ని తొలగించండి. వారికి సమాధానం చెప్పాల్సిన బాధ్యత మీకు లేదు.",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "అభినందనలు! లక్కీ డ్రాలో మీరు ₹25,000 గెలుచుకున్నారు.",
    "Pay ₹499 to claim your prize": "బహుమతి పొందడానికి ₹499 చెల్లించండి",

    "a photo waiting in your messages": "మీ సందేశాల్లో ఎదురుచూస్తున్న ఫోటో",
    "The small picture icon means a photo has arrived.":
      "చిన్న చిత్రం గుర్తు అంటే ఫోటో వచ్చింది.",
    "Tap the photo once to see it bigger.":
      "ఫోటోను పెద్దగా చూడటానికి ఒకసారి నొక్కండి.",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ఫోన్లో ఉంచడానికి సేవ్ (లేదా కిందకు చూపే బాణం) నొక్కండి.",
    Grandchild: "మనవడు/మనవరాలు",
    Save: "సేవ్",
    Open: "తెరవండి",

    "getting ready for a video call": "వీడియో కాల్కు సిద్ధమవడం",
    "The green camera icon is the video call app. Tap it once.":
      "ఆకుపచ్చ కెమెరా గుర్తే వీడియో కాల్ యాప్. దాన్ని ఒకసారి నొక్కండి.",
    "Tap the person's name, then the small camera button.":
      "ఆ వ్యక్తి పేరు నొక్కి, తర్వాత చిన్న కెమెరా బటన్ నొక్కండి.",
    "The red button at the end is the one that ends the call.":
      "చివర్లోని ఎరుపు బటన్ కాల్ను ముగిస్తుంది.",
    You: "మీరు",

    "a bill ready to pay": "చెల్లించడానికి సిద్ధంగా ఉన్న బిల్లు",
    "The company name should be exactly what is printed on your bill.":
      "కంపెనీ పేరు మీ బిల్లుపై ముద్రించినట్లే ఉండాలి.",
    "Read the amount out loud before you tap Pay.":
      "చెల్లించు నొక్కే ముందు మొత్తాన్ని బయటకు చదవండి.",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "చివర్లో వచ్చే రసీదే మీ రుజువు. బిల్లు చెల్లించినట్లు కనిపించే వరకు దాన్ని ఉంచండి.",
    "Electricity bill": "విద్యుత్ బిల్లు",
    Biller: "బిల్లు పంపినవారు",
    "State Electricity Board": "రాష్ట్ర విద్యుత్ బోర్డు",
    "Consumer number": "వినియోగదారు సంఖ్య",
    "Due date": "చివరి తేదీ",
    "Pay securely": "సురక్షితంగా చెల్లించండి",

    "an unexpected call": "అనుకోని కాల్",
    "A real bank will not phone and demand money or a code.":
      "నిజమైన బ్యాంకు ఫోన్ చేసి డబ్బు లేదా కోడ్ అడగదు.",
    "The number on the screen proves nothing — it can be faked.":
      "స్క్రీన్పై కనిపించే నంబర్ ఏమీ నిరూపించదు — దాన్ని నకిలీ చేయవచ్చు.",
    "Hang up and call the office on the number printed on your card or bill.":
      "కాల్ కట్ చేసి, కార్డు లేదా బిల్లుపై ముద్రించిన నంబర్కు కార్యాలయానికి ఫోన్ చేయండి.",
    "Incoming call": "వస్తున్న కాల్",
    "Unknown number": "తెలియని నంబర్",
    "“I am from your bank”": "“నేను మీ బ్యాంకు నుంచి మాట్లాడుతున్నాను”",

    "a link you were not expecting": "మీరు ఊహించని లింక్",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "మీరు ఏ పార్శిల్ కోసం ఎదురుచూడలేదు, కాబట్టి ఈ సందేశం మీకు సరిపోదు.",
    "The address ends in .info, not the delivery company's real name.":
      "చిరునామా .infoతో ముగుస్తుంది, డెలివరీ కంపెనీ నిజమైన పేరుతో కాదు.",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "దాన్ని నొక్కకండి. బదులుగా కంపెనీ సొంత యాప్లో డెలివరీ చూడండి.",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "మీ పార్శిల్ డిపోలో ఆపబడింది. ఇక్కడ ₹25 చెల్లించండి:",
    "The link preview": "లింక్ ప్రివ్యూ",
    "not real": "నిజం కాదు",

    "a message from a new number": "కొత్త నంబర్ నుంచి వచ్చిన సందేశం",
    "A new number is the first warning, even with a familiar name.":
      "పేరు పరిచయమైనదైనా కొత్త నంబరే మొదటి హెచ్చరిక.",
    "The message asks you not to call. That is the trick working.":
      "సందేశం ఫోన్ చేయవద్దంటుంది. అదే మోసం పనిచేస్తున్న సంకేతం.",
    "Call the saved number you already have, and ask a private question.":
      "ఇప్పటికే సేవ్ చేసిన నంబర్కు కాల్ చేసి, వ్యక్తిగత ప్రశ్న అడగండి.",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "అమ్మా, నేనే. నా ఫోన్ పగిలిపోయింది, ఇది నా కొత్త నంబర్.",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "ఈరోజు నాకు ₹20,000 కావాలి. తొందరగా పంపండి, కాల్ చేయకండి — నేను మీటింగ్లో ఉన్నాను.",
    "Pause.": "ఆగండి.",
    "Call the number you already have saved before sending anything.":
      "ఏదైనా పంపే ముందు ఇప్పటికే సేవ్ చేసిన నంబర్కే కాల్ చేయండి.",
  },

  /* --------------------------------------------------------------------- */
  mr: {
    "Example — {title}": "उदाहरण — {title}",
    "a trick email": "फसवणुकीचा ईमेल",
    "The address is long and strange. Your bank uses its own short address.":
      "पत्ता लांब आणि विचित्र आहे. तुमची बँक तिचा स्वतःचा छोटा पत्ता वापरते.",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "तुमच्या नावाऐवजी “प्रिय ग्राहक” — खरी बँक तुमचे नाव ओळखते.",
    "Urgent words push you to act before you think.":
      "“तातडीचे” असे शब्द तुम्हाला विचार करण्याआधीच कृती करायला भाग पाडतात.",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "हे लिंक दाबायला सांगते. त्याऐवजी तुमच्या बँकेचे ॲप स्वतः उघडा.",
    From: "प्रेषक",
    Message: "संदेश",
    "Dear customer,": "प्रिय ग्राहक,",
    "URGENT: your account will be closed today.":
      "तातडीचे: तुमचे खाते आजच बंद होईल.",
    "Tap here to verify your account": "खाते तपासण्यासाठी येथे दाबा",

    "two addresses, one is fake": "दोन पत्ते, एक बनावट",
    "The real bank uses a short, exact name you already know.":
      "खरी बँक तुम्हाला माहीत असलेले छोटे, अचूक नाव वापरते.",
    "The fake one adds words like “secure” and “login” to look official.":
      "बनावट पत्ता “secure” आणि “login” असे शब्द जोडून अधिकृत दिसण्याचा प्रयत्न करतो.",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "कुलूप म्हणजे फक्त जोडणी खाजगी आहे — साइट प्रामाणिक आहे असे नाही.",
    "When unsure, type the address yourself instead of tapping a link.":
      "शंका असेल तर लिंक न दाबता पत्ता स्वतः लिहा.",
    "Looks right": "बरोबर दिसते",
    real: "खरे",
    "Looks almost right": "जवळपास बरोबर दिसते",
    fake: "बनावट",

    "the code that is only for you": "फक्त तुमच्यासाठी असलेला कोड",
    "The code arrives by itself. You never need to read it to anyone.":
      "कोड स्वतः येतो. तो कोणालाही सांगण्याची गरज कधीच नसते.",
    "A real bank, delivery company or police officer will not ask for it.":
      "खरी बँक, डिलिव्हरी कंपनी किंवा पोलीस अधिकारी तो मागणार नाहीत.",
    "If someone asks, say no and end the call.":
      "कोणी मागितला तर नकार द्या आणि फोन ठेवा.",
    "Your verification code": "तुमचा पडताळणी कोड",
    "Never share this code with anyone.": "हा कोड कोणाशीही शेअर करू नका.",
    "Unknown caller": "अनोळखी कॉलर",
    "“I am from your bank. Please read me the code on your phone.”":
      "“मी तुमच्या बँकेकडून बोलतोय. फोनवर आलेला कोड सांगा.”",

    "a prize you never entered for": "ज्यात तुम्ही भाग घेतला नाही असे बक्षीस",
    "You did not enter this draw, so you cannot have won it.":
      "तुम्ही या ड्रॉमध्ये भाग घेतला नाही, म्हणून जिंकू शकत नाही.",
    "Real prizes never ask for a fee before they arrive.":
      "खरे बक्षीस येण्याआधी कधीच फी मागत नाही.",
    "Delete the message. You do not owe them a reply.":
      "संदेश हटवा. त्यांना उत्तर देणे तुमचे कर्तव्य नाही.",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "अभिनंदन! तुम्ही लकी ड्रॉमध्ये ₹25,000 जिंकले आहेत.",
    "Pay ₹499 to claim your prize": "बक्षीस घेण्यासाठी ₹499 द्या",

    "a photo waiting in your messages": "तुमच्या संदेशांमध्ये वाट पाहणारा फोटो",
    "The small picture icon means a photo has arrived.":
      "छोटे चित्राचे चिन्ह म्हणजे फोटो आला आहे.",
    "Tap the photo once to see it bigger.":
      "फोटो मोठा पाहण्यासाठी एकदा दाबा.",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "फोनमध्ये ठेवण्यासाठी जतन करा (किंवा खालीचा बाण) दाबा.",
    Grandchild: "नातवंड",
    Save: "जतन करा",
    Open: "उघडा",

    "getting ready for a video call": "व्हिडिओ कॉलसाठी तयार होणे",
    "The green camera icon is the video call app. Tap it once.":
      "हिरवे कॅमेरा चिन्ह म्हणजे व्हिडिओ कॉल ॲप. एकदा दाबा.",
    "Tap the person's name, then the small camera button.":
      "त्या व्यक्तीचे नाव दाबा, नंतर छोटे कॅमेरा बटण.",
    "The red button at the end is the one that ends the call.":
      "शेवटचे लाल बटणच कॉल बंद करते.",
    You: "तुम्ही",

    "a bill ready to pay": "भरण्यास तयार बिल",
    "The company name should be exactly what is printed on your bill.":
      "कंपनीचे नाव तुमच्या बिलावर छापलेल्या नावासारखेच असावे.",
    "Read the amount out loud before you tap Pay.":
      "भरा दाबण्याआधी रक्कम मोठ्याने वाचा.",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "शेवटी मिळणारी पावती हाच तुमचा पुरावा. बिल भरलेले दिसेपर्यंत ती ठेवा.",
    "Electricity bill": "वीज बिल",
    Biller: "बिल पाठवणारा",
    "State Electricity Board": "राज्य वीज मंडळ",
    "Consumer number": "ग्राहक क्रमांक",
    "Due date": "देय तारीख",
    "Pay securely": "सुरक्षितपणे भरा",

    "an unexpected call": "अचानक आलेला कॉल",
    "A real bank will not phone and demand money or a code.":
      "खरी बँक फोन करून पैसे किंवा कोड मागत नाही.",
    "The number on the screen proves nothing — it can be faked.":
      "स्क्रीनवरचा नंबर काहीच सिद्ध करत नाही — तो बनावट असू शकतो.",
    "Hang up and call the office on the number printed on your card or bill.":
      "फोन ठेवा आणि कार्ड किंवा बिलावर छापलेल्या नंबरवर कार्यालयाला फोन करा.",
    "Incoming call": "येणारा कॉल",
    "Unknown number": "अनोळखी नंबर",
    "“I am from your bank”": "“मी तुमच्या बँकेकडून बोलतोय”",

    "a link you were not expecting": "तुम्ही अपेक्षा न केलेली लिंक",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "तुम्ही कोणत्याही पार्सलची वाट पाहत नव्हते, म्हणून हा संदेश तुमच्याशी जुळत नाही.",
    "The address ends in .info, not the delivery company's real name.":
      "पत्ता .info ने संपतो, डिलिव्हरी कंपनीच्या खऱ्या नावाने नाही.",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "ती दाबू नका. त्याऐवजी कंपनीच्या स्वतःच्या ॲपमध्ये डिलिव्हरी पाहा.",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "तुमचे पार्सल डेपोमध्ये रोखले आहे. येथे ₹25 द्या:",
    "The link preview": "लिंकची झलक",
    "not real": "खरे नाही",

    "a message from a new number": "नव्या नंबरवरून आलेला संदेश",
    "A new number is the first warning, even with a familiar name.":
      "नाव ओळखीचे असले तरी नवा नंबर हीच पहिली सूचना आहे.",
    "The message asks you not to call. That is the trick working.":
      "संदेश फोन करू नका असे सांगतो. हीच तर फसवणुकीची युक्ती.",
    "Call the saved number you already have, and ask a private question.":
      "आधीच जतन केलेल्या नंबरवर फोन करा आणि खाजगी प्रश्न विचारा.",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "आई, मी आहे. माझा फोन तुटला, हा माझा नवा नंबर आहे.",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "मला आज ₹20,000 हवे आहेत. लवकर पाठवा आणि फोन करू नका — मी मीटिंगमध्ये आहे.",
    "Pause.": "थांबा.",
    "Call the number you already have saved before sending anything.":
      "काहीही पाठवण्याआधी आधीच जतन केलेल्या नंबरवर फोन करा.",
  },

  /* --------------------------------------------------------------------- */
  gu: {
    "Example — {title}": "ઉદાહરણ — {title}",
    "a trick email": "છળનો ઈમેલ",
    "The address is long and strange. Your bank uses its own short address.":
      "સરનામું લાંબું અને વિચિત્ર છે. તમારી બેંક પોતાનું ટૂંકું સરનામું વાપરે છે.",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "તમારા નામની જગ્યાએ “પ્રિય ગ્રાહક” — સાચી બેંક તમારું નામ જાણે છે.",
    "Urgent words push you to act before you think.":
      "“તાત્કાલિક” જેવા શબ્દો તમને વિચાર્યા પહેલાં કામ કરાવે છે.",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "તે લિંક દબાવવા કહે છે. તેના બદલે તમારી બેંકની એપ જાતે ખોલો.",
    From: "મોકલનાર",
    Message: "સંદેશ",
    "Dear customer,": "પ્રિય ગ્રાહક,",
    "URGENT: your account will be closed today.":
      "તાત્કાલિક: આજે જ તમારું ખાતું બંધ થશે.",
    "Tap here to verify your account": "ખાતું ચકાસવા અહીં દબાવો",

    "two addresses, one is fake": "બે સરનામાં, એક નકલી",
    "The real bank uses a short, exact name you already know.":
      "સાચી બેંક એ જ ટૂંકું, સાચું નામ વાપરે છે જે તમે પહેલેથી જાણો છો.",
    "The fake one adds words like “secure” and “login” to look official.":
      "નકલી સરનામું “secure” અને “login” જેવા શબ્દો ઉમેરીને સત્તાવાર દેખાવા માંગે છે.",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "તાળું ફક્ત એટલું કહે છે કે કનેક્શન ખાનગી છે — સાઇટ પ્રામાણિક છે એમ નહીં.",
    "When unsure, type the address yourself instead of tapping a link.":
      "શંકા હોય તો લિંક દબાવવાને બદલે સરનામું જાતે લખો.",
    "Looks right": "સાચું લાગે છે",
    real: "સાચું",
    "Looks almost right": "લગભગ સાચું લાગે છે",
    fake: "નકલી",

    "the code that is only for you": "ફક્ત તમારા માટેનો કોડ",
    "The code arrives by itself. You never need to read it to anyone.":
      "કોડ જાતે આવે છે. તેને કોઈને કહેવાની જરૂર કદી પડતી નથી.",
    "A real bank, delivery company or police officer will not ask for it.":
      "સાચી બેંક, ડિલિવરી કંપની કે પોલીસ અધિકારી તેને માંગશે નહીં.",
    "If someone asks, say no and end the call.":
      "કોઈ માંગે તો ના પાડો અને ફોન કાપી નાખો.",
    "Your verification code": "તમારો ચકાસણી કોડ",
    "Never share this code with anyone.": "આ કોડ કોઈ સાથે શેર ન કરો.",
    "Unknown caller": "અજાણ્યો કૉલર",
    "“I am from your bank. Please read me the code on your phone.”":
      "“હું તમારી બેંકમાંથી બોલું છું. ફોન પર આવેલો કોડ મને કહો.”",

    "a prize you never entered for": "એવું ઇનામ જેમાં તમે ભાગ લીધો નથી",
    "You did not enter this draw, so you cannot have won it.":
      "તમે આ ડ્રોમાં ભાગ લીધો નથી, તેથી જીતી શકતા નથી.",
    "Real prizes never ask for a fee before they arrive.":
      "સાચા ઇનામ આવતાં પહેલાં કદી ફી માંગતા નથી.",
    "Delete the message. You do not owe them a reply.":
      "સંદેશ કાઢી નાખો. તેમને જવાબ આપવાની જવાબદારી તમારી નથી.",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "અભિનંદન! તમે લકી ડ્રોમાં ₹25,000 જીત્યા છે.",
    "Pay ₹499 to claim your prize": "ઇનામ લેવા ₹499 ચૂકવો",

    "a photo waiting in your messages": "તમારા સંદેશમાં રાહ જોતો ફોટો",
    "The small picture icon means a photo has arrived.":
      "નાનું ચિત્ર ચિહ્ન એટલે ફોટો આવ્યો છે.",
    "Tap the photo once to see it bigger.":
      "ફોટો મોટો જોવા એક વાર દબાવો.",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ફોનમાં રાખવા સાચવો (અથવા નીચેનું તીર) દબાવો.",
    Grandchild: "પૌત્ર-પૌત્રી",
    Save: "સાચવો",
    Open: "ખોલો",

    "getting ready for a video call": "વિડિયો કૉલ માટે તૈયાર થવું",
    "The green camera icon is the video call app. Tap it once.":
      "લીલું કૅમેરા ચિહ્ન એ જ વિડિયો કૉલ એપ છે. એક વાર દબાવો.",
    "Tap the person's name, then the small camera button.":
      "તે વ્યક્તિનું નામ દબાવો, પછી નાનું કૅમેરા બટન.",
    "The red button at the end is the one that ends the call.":
      "અંતમાંનું લાલ બટન જ કૉલ બંધ કરે છે.",
    You: "તમે",

    "a bill ready to pay": "ભરવા તૈયાર બિલ",
    "The company name should be exactly what is printed on your bill.":
      "કંપનીનું નામ તમારા બિલ પર છાપેલા નામ જેવું જ હોવું જોઈએ.",
    "Read the amount out loud before you tap Pay.":
      "ચૂકવો દબાવતાં પહેલાં રકમ મોટેથી વાંચો.",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "અંતે મળતી રસીદ એ જ તમારો પુરાવો. બિલ ચૂકવાયેલું દેખાય ત્યાં સુધી રાખો.",
    "Electricity bill": "વીજળી બિલ",
    Biller: "બિલ મોકલનાર",
    "State Electricity Board": "રાજ્ય વીજ બોર્ડ",
    "Consumer number": "ગ્રાહક નંબર",
    "Due date": "છેલ્લી તારીખ",
    "Pay securely": "સુરક્ષિત રીતે ચૂકવો",

    "an unexpected call": "અચાનક આવેલો કૉલ",
    "A real bank will not phone and demand money or a code.":
      "સાચી બેંક ફોન કરીને પૈસા કે કોડ માંગતી નથી.",
    "The number on the screen proves nothing — it can be faked.":
      "સ્ક્રીન પરનો નંબર કંઈ સાબિત કરતો નથી — તે નકલી બનાવી શકાય.",
    "Hang up and call the office on the number printed on your card or bill.":
      "ફોન કાપો અને કાર્ડ કે બિલ પર છાપેલા નંબર પર ઓફિસને ફોન કરો.",
    "Incoming call": "આવતો કૉલ",
    "Unknown number": "અજાણ્યો નંબર",
    "“I am from your bank”": "“હું તમારી બેંકમાંથી બોલું છું”",

    "a link you were not expecting": "એવી લિંક જેની તમે અપેક્ષા નહોતી રાખી",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "તમે કોઈ પાર્સલની રાહ નહોતી જોઈતી, તેથી આ સંદેશ તમારા જીવન સાથે મેળ ખાતો નથી.",
    "The address ends in .info, not the delivery company's real name.":
      "સરનામું .info પર પૂરું થાય છે, ડિલિવરી કંપનીના સાચા નામ પર નહીં.",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "તેને દબાવો નહીં. તેના બદલે કંપનીની પોતાની એપમાં ડિલિવરી જુઓ.",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "તમારું પાર્સલ ડેપોમાં રોકાયું છે. અહીં ₹25 ચૂકવો:",
    "The link preview": "લિંકની ઝલક",
    "not real": "સાચું નહીં",

    "a message from a new number": "નવા નંબરથી આવેલો સંદેશ",
    "A new number is the first warning, even with a familiar name.":
      "નામ જાણીતું હોય તો પણ નવો નંબર એ પહેલી ચેતવણી છે.",
    "The message asks you not to call. That is the trick working.":
      "સંદેશ ફોન ન કરવા કહે છે. એ જ તો છેતરપિંડીની યુક્તિ છે.",
    "Call the saved number you already have, and ask a private question.":
      "પહેલેથી સાચવેલા નંબર પર ફોન કરો અને કંઈક ખાનગી પૂછો.",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "મમ્મી, હું જ છું. મારો ફોન તૂટી ગયો, આ મારો નવો નંબર છે.",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "મને આજે ₹20,000 જોઈએ. જલદી મોકલો અને ફોન ન કરો — હું મીટિંગમાં છું.",
    "Pause.": "થોભો.",
    "Call the number you already have saved before sending anything.":
      "કંઈ પણ મોકલતાં પહેલાં પહેલેથી સાચવેલા નંબર પર ફોન કરો.",
  },

  /* --------------------------------------------------------------------- */
  kn: {
    "Example — {title}": "ಉದಾಹರಣೆ — {title}",
    "a trick email": "ಮೋಸದ ಇಮೇಲ್",
    "The address is long and strange. Your bank uses its own short address.":
      "ವಿಳಾಸ ಉದ್ದವಾಗಿ, ವಿಚಿತ್ರವಾಗಿದೆ. ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ತನ್ನದೇ ಸಣ್ಣ ವಿಳಾಸ ಬಳಸುತ್ತದೆ.",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "ನಿಮ್ಮ ಹೆಸರಿನ ಬದಲು “ಆದರಣೀಯ ಗ್ರಾಹಕರೇ” — ನಿಜವಾದ ಬ್ಯಾಂಕಿಗೆ ನಿಮ್ಮ ಹೆಸರು ಗೊತ್ತು.",
    "Urgent words push you to act before you think.":
      "“ತುರ್ತು” ಎಂಬಂಥ ಪದಗಳು ಯೋಚಿಸುವ ಮೊದಲೇ ಕೆಲಸ ಮಾಡಿಸುತ್ತವೆ.",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "ಇದು ಲಿಂಕ್ ಒತ್ತಲು ಹೇಳುತ್ತದೆ. ಬದಲಾಗಿ ನಿಮ್ಮ ಬ್ಯಾಂಕಿನ ಆ್ಯಪ್ ಅನ್ನು ನೀವೇ ತೆರೆಯಿರಿ.",
    From: "ಕಳುಹಿಸಿದವರು",
    Message: "ಸಂದೇಶ",
    "Dear customer,": "ಆದರಣೀಯ ಗ್ರಾಹಕರೇ,",
    "URGENT: your account will be closed today.":
      "ತುರ್ತು: ಇಂದೇ ನಿಮ್ಮ ಖಾತೆ ಮುಚ್ಚಲಾಗುತ್ತದೆ.",
    "Tap here to verify your account": "ಖಾತೆ ಪರಿಶೀಲಿಸಲು ಇಲ್ಲಿ ಒತ್ತಿ",

    "two addresses, one is fake": "ಎರಡು ವಿಳಾಸಗಳು, ಒಂದು ನಕಲಿ",
    "The real bank uses a short, exact name you already know.":
      "ನಿಜವಾದ ಬ್ಯಾಂಕ್ ನಿಮಗೆ ಈಗಾಗಲೇ ಗೊತ್ತಿರುವ ಸಣ್ಣ, ನಿಖರ ಹೆಸರನ್ನೇ ಬಳಸುತ್ತದೆ.",
    "The fake one adds words like “secure” and “login” to look official.":
      "ನಕಲಿ ವಿಳಾಸವು ಅಧಿಕೃತವಾಗಿ ಕಾಣಲು “secure”, “login” ಮುಂತಾದ ಪದ ಸೇರಿಸುತ್ತದೆ.",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "ಬೀಗ ಎಂದರೆ ಸಂಪರ್ಕ ಖಾಸಗಿ — ಸೈಟ್ ಪ್ರಾಮಾಣಿಕ ಎಂದಲ್ಲ.",
    "When unsure, type the address yourself instead of tapping a link.":
      "ಸಂದೇಹವಿದ್ದರೆ ಲಿಂಕ್ ಒತ್ತದೆ ವಿಳಾಸವನ್ನು ನೀವೇ ಟೈಪ್ ಮಾಡಿ.",
    "Looks right": "ಸರಿ ಕಾಣುತ್ತದೆ",
    real: "ನಿಜ",
    "Looks almost right": "ಬಹುತೇಕ ಸರಿ ಕಾಣುತ್ತದೆ",
    fake: "ನಕಲಿ",

    "the code that is only for you": "ನಿಮಗಷ್ಟೇ ಇರುವ ಕೋಡ್",
    "The code arrives by itself. You never need to read it to anyone.":
      "ಕೋಡ್ ತಾನಾಗಿಯೇ ಬರುತ್ತದೆ. ಅದನ್ನು ಯಾರಿಗೂ ಹೇಳುವ ಅಗತ್ಯವೇ ಇಲ್ಲ.",
    "A real bank, delivery company or police officer will not ask for it.":
      "ನಿಜವಾದ ಬ್ಯಾಂಕ್, ಡೆಲಿವರಿ ಕಂಪನಿ ಅಥವಾ ಪೊಲೀಸ್ ಅಧಿಕಾರಿ ಅದನ್ನು ಕೇಳುವುದಿಲ್ಲ.",
    "If someone asks, say no and end the call.":
      "ಯಾರಾದರೂ ಕೇಳಿದರೆ ಬೇಡ ಎನ್ನಿ, ಕರೆ ಮುಗಿಸಿ.",
    "Your verification code": "ನಿಮ್ಮ ಪರಿಶೀಲನಾ ಕೋಡ್",
    "Never share this code with anyone.": "ಈ ಕೋಡ್ ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಬೇಡಿ.",
    "Unknown caller": "ಅಪರಿಚಿತ ಕರೆದವರು",
    "“I am from your bank. Please read me the code on your phone.”":
      "“ನಾನು ನಿಮ್ಮ ಬ್ಯಾಂಕಿನಿಂದ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಫೋನ್‌ಗೆ ಬಂದ ಕೋಡ್ ಹೇಳಿ.”",

    "a prize you never entered for": "ನೀವು ಭಾಗವಹಿಸದ ಬಹುಮಾನ",
    "You did not enter this draw, so you cannot have won it.":
      "ಈ ಡ್ರಾದಲ್ಲಿ ನೀವು ಭಾಗವಹಿಸಿಲ್ಲ, ಹಾಗಾಗಿ ಗೆಲ್ಲಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    "Real prizes never ask for a fee before they arrive.":
      "ನಿಜವಾದ ಬಹುಮಾನ ಬರುವ ಮೊದಲು ಶುಲ್ಕ ಕೇಳುವುದಿಲ್ಲ.",
    "Delete the message. You do not owe them a reply.":
      "ಸಂದೇಶ ಅಳಿಸಿ. ಅವರಿಗೆ ಉತ್ತರ ಕೊಡುವ ಬಾಧ್ಯತೆ ನಿಮಗಿಲ್ಲ.",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "ಅಭಿನಂದನೆಗಳು! ಲಕ್ಕಿ ಡ್ರಾದಲ್ಲಿ ನೀವು ₹25,000 ಗೆದ್ದಿದ್ದೀರಿ.",
    "Pay ₹499 to claim your prize": "ಬಹುಮಾನ ಪಡೆಯಲು ₹499 ಕೊಡಿ",

    "a photo waiting in your messages": "ನಿಮ್ಮ ಸಂದೇಶಗಳಲ್ಲಿ ಕಾಯುತ್ತಿರುವ ಫೋಟೋ",
    "The small picture icon means a photo has arrived.":
      "ಸಣ್ಣ ಚಿತ್ರದ ಚಿಹ್ನೆ ಎಂದರೆ ಫೋಟೋ ಬಂದಿದೆ.",
    "Tap the photo once to see it bigger.":
      "ಫೋಟೋ ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಒಮ್ಮೆ ಒತ್ತಿ.",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ಫೋನ್‌ನಲ್ಲಿ ಇಡಲು ಉಳಿಸಿ (ಅಥವಾ ಕೆಳಗಿನ ಬಾಣ) ಒತ್ತಿ.",
    Grandchild: "ಮೊಮ್ಮಗ/ಮೊಮ್ಮಗಳು",
    Save: "ಉಳಿಸಿ",
    Open: "ತೆರೆಯಿರಿ",

    "getting ready for a video call": "ವೀಡಿಯೊ ಕರೆಗೆ ಸಿದ್ಧವಾಗುವುದು",
    "The green camera icon is the video call app. Tap it once.":
      "ಹಸಿರು ಕ್ಯಾಮೆರಾ ಚಿಹ್ನೆಯೇ ವೀಡಿಯೊ ಕರೆ ಆ್ಯಪ್. ಒಮ್ಮೆ ಒತ್ತಿ.",
    "Tap the person's name, then the small camera button.":
      "ಆ ವ್ಯಕ್ತಿಯ ಹೆಸರು ಒತ್ತಿ, ನಂತರ ಸಣ್ಣ ಕ್ಯಾಮೆರಾ ಬಟನ್.",
    "The red button at the end is the one that ends the call.":
      "ಕೊನೆಯಲ್ಲಿರುವ ಕೆಂಪು ಬಟನ್ ಕರೆ ಮುಗಿಸುತ್ತದೆ.",
    You: "ನೀವು",

    "a bill ready to pay": "ಪಾವತಿಗೆ ಸಿದ್ಧವಿರುವ ಬಿಲ್",
    "The company name should be exactly what is printed on your bill.":
      "ಕಂಪನಿಯ ಹೆಸರು ನಿಮ್ಮ ಬಿಲ್‌ನಲ್ಲಿ ಮುದ್ರಿತವಾದಂತೆಯೇ ಇರಬೇಕು.",
    "Read the amount out loud before you tap Pay.":
      "ಪಾವತಿಸಿ ಒತ್ತುವ ಮೊದಲು ಮೊತ್ತವನ್ನು ಗಟ್ಟಿಯಾಗಿ ಓದಿ.",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "ಕೊನೆಯಲ್ಲಿ ಬರುವ ರಸೀದಿಯೇ ನಿಮ್ಮ ಸಾಕ್ಷಿ. ಬಿಲ್ ಪಾವತಿಯಾದಂತೆ ಕಾಣುವವರೆಗೆ ಅದನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ.",
    "Electricity bill": "ವಿದ್ಯುತ್ ಬಿಲ್",
    Biller: "ಬಿಲ್ ಕಳುಹಿಸಿದವರು",
    "State Electricity Board": "ರಾಜ್ಯ ವಿದ್ಯುತ್ ಮಂಡಳಿ",
    "Consumer number": "ಗ್ರಾಹಕ ಸಂಖ್ಯೆ",
    "Due date": "ಕೊನೆಯ ದಿನಾಂಕ",
    "Pay securely": "ಸುರಕ್ಷಿತವಾಗಿ ಪಾವತಿಸಿ",

    "an unexpected call": "ಅನಿರೀಕ್ಷಿತ ಕರೆ",
    "A real bank will not phone and demand money or a code.":
      "ನಿಜವಾದ ಬ್ಯಾಂಕ್ ಫೋನ್ ಮಾಡಿ ಹಣ ಅಥವಾ ಕೋಡ್ ಕೇಳುವುದಿಲ್ಲ.",
    "The number on the screen proves nothing — it can be faked.":
      "ಪರದೆಯ ಮೇಲಿನ ಸಂಖ್ಯೆ ಏನನ್ನೂ ಸಾಬೀತು ಮಾಡುವುದಿಲ್ಲ — ಅದನ್ನು ನಕಲಿ ಮಾಡಬಹುದು.",
    "Hang up and call the office on the number printed on your card or bill.":
      "ಕರೆ ಕಟ್ ಮಾಡಿ, ಕಾರ್ಡ್ ಅಥವಾ ಬಿಲ್‌ನಲ್ಲಿ ಮುದ್ರಿತವಾದ ಸಂಖ್ಯೆಗೆ ಕಚೇರಿಗೆ ಫೋನ್ ಮಾಡಿ.",
    "Incoming call": "ಬರುತ್ತಿರುವ ಕರೆ",
    "Unknown number": "ಅಪರಿಚಿತ ಸಂಖ್ಯೆ",
    "“I am from your bank”": "“ನಾನು ನಿಮ್ಮ ಬ್ಯಾಂಕಿನಿಂದ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ”",

    "a link you were not expecting": "ನೀವು ನಿರೀಕ್ಷಿಸದ ಲಿಂಕ್",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "ನೀವು ಯಾವ ಪಾರ್ಸೆಲ್‌ಗೂ ಕಾಯುತ್ತಿರಲಿಲ್ಲ, ಹಾಗಾಗಿ ಈ ಸಂದೇಶ ನಿಮಗೆ ಹೊಂದುವುದಿಲ್ಲ.",
    "The address ends in .info, not the delivery company's real name.":
      "ವಿಳಾಸ .info ನಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ, ಡೆಲಿವರಿ ಕಂಪನಿಯ ನಿಜವಾದ ಹೆಸರಿನಲ್ಲಿ ಅಲ್ಲ.",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "ಅದನ್ನು ಒತ್ತಬೇಡಿ. ಬದಲಾಗಿ ಕಂಪನಿಯ ಸ್ವಂತ ಆ್ಯಪ್‌ನಲ್ಲಿ ಡೆಲಿವರಿ ನೋಡಿ.",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "ನಿಮ್ಮ ಪಾರ್ಸೆಲ್ ಡಿಪೋದಲ್ಲಿ ತಡೆಹಿಡಿಯಲಾಗಿದೆ. ಇಲ್ಲಿ ₹25 ಕೊಡಿ:",
    "The link preview": "ಲಿಂಕ್ ಮುನ್ನೋಟ",
    "not real": "ನಿಜವಲ್ಲ",

    "a message from a new number": "ಹೊಸ ಸಂಖ್ಯೆಯಿಂದ ಬಂದ ಸಂದೇಶ",
    "A new number is the first warning, even with a familiar name.":
      "ಹೆಸರು ಪರಿಚಿತವಾದರೂ ಹೊಸ ಸಂಖ್ಯೆಯೇ ಮೊದಲ ಎಚ್ಚರಿಕೆ.",
    "The message asks you not to call. That is the trick working.":
      "ಸಂದೇಶ ಫೋನ್ ಮಾಡಬೇಡಿ ಎನ್ನುತ್ತದೆ. ಅದೇ ಮೋಸದ ಉಪಾಯ.",
    "Call the saved number you already have, and ask a private question.":
      "ಈಗಾಗಲೇ ಉಳಿಸಿದ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ, ಖಾಸಗಿ ಪ್ರಶ್ನೆ ಕೇಳಿ.",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "ಅಮ್ಮ, ನಾನೇ. ನನ್ನ ಫೋನ್ ಒಡೆದುಹೋಯಿತು, ಇದು ನನ್ನ ಹೊಸ ಸಂಖ್ಯೆ.",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "ಇಂದು ನನಗೆ ₹20,000 ಬೇಕು. ಬೇಗ ಕಳುಹಿಸಿ, ಕರೆ ಮಾಡಬೇಡಿ — ನಾನು ಮೀಟಿಂಗ್‌ನಲ್ಲಿದ್ದೇನೆ.",
    "Pause.": "ನಿಲ್ಲಿ.",
    "Call the number you already have saved before sending anything.":
      "ಏನನ್ನಾದರೂ ಕಳುಹಿಸುವ ಮೊದಲು ಈಗಾಗಲೇ ಉಳಿಸಿದ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ.",
  },

  /* --------------------------------------------------------------------- */
  ml: {
    "Example — {title}": "ഉദാഹരണം — {title}",
    "a trick email": "വഞ്ചനയുള്ള ഇമെയിൽ",
    "The address is long and strange. Your bank uses its own short address.":
      "വിലാസം നീളമുള്ളതും വിചിത്രവുമാണ്. നിങ്ങളുടെ ബാങ്ക് സ്വന്തം ചെറിയ വിലാസമാണ് ഉപയോഗിക്കുന്നത്.",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "നിങ്ങളുടെ പേരിനു പകരം “പ്രിയ ഉപഭോക്താവേ” — യഥാർത്ഥ ബാങ്കിന് നിങ്ങളുടെ പേര് അറിയാം.",
    "Urgent words push you to act before you think.":
      "“അടിയന്തിരം” പോലുള്ള വാക്കുകൾ ചിന്തിക്കുന്നതിന് മുൻപ് പ്രവർത്തിപ്പിക്കും.",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "ഇത് ഒരു ലിങ്ക് അമർത്താൻ പറയുന്നു. പകരം നിങ്ങളുടെ ബാങ്കിന്റെ ആപ്പ് തന്നെ തുറക്കൂ.",
    From: "അയച്ചയാൾ",
    Message: "സന്ദേശം",
    "Dear customer,": "പ്രിയ ഉപഭോക്താവേ,",
    "URGENT: your account will be closed today.":
      "അടിയന്തിരം: ഇന്നു തന്നെ നിങ്ങളുടെ അക്കൗണ്ട് അടയ്ക്കും.",
    "Tap here to verify your account": "അക്കൗണ്ട് പരിശോധിക്കാൻ ഇവിടെ അമർത്തൂ",

    "two addresses, one is fake": "രണ്ട് വിലാസങ്ങൾ, ഒന്ന് വ്യാജം",
    "The real bank uses a short, exact name you already know.":
      "യഥാർത്ഥ ബാങ്ക് നിങ്ങൾക്ക് ഇതിനകം അറിയാവുന്ന ചെറിയ, കൃത്യമായ പേരാണ് ഉപയോഗിക്കുന്നത്.",
    "The fake one adds words like “secure” and “login” to look official.":
      "വ്യാജൻ ഔദ്യോഗികമായി തോന്നാൻ “secure”, “login” പോലുള്ള വാക്കുകൾ ചേർക്കുന്നു.",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "പൂട്ട് എന്നാൽ കണക്ഷൻ സ്വകാര്യം — സൈറ്റ് സത്യസന്ധമാണെന്ന് അർത്ഥമില്ല.",
    "When unsure, type the address yourself instead of tapping a link.":
      "സംശയമുണ്ടെങ്കിൽ ലിങ്ക് അമർത്താതെ വിലാസം നിങ്ങൾ തന്നെ ടൈപ്പ് ചെയ്യൂ.",
    "Looks right": "ശരിയായി തോന്നുന്നു",
    real: "യഥാർത്ഥം",
    "Looks almost right": "ഏതാണ്ട് ശരിയായി തോന്നുന്നു",
    fake: "വ്യാജം",

    "the code that is only for you": "നിങ്ങൾക്ക് മാത്രമുള്ള കോഡ്",
    "The code arrives by itself. You never need to read it to anyone.":
      "കോഡ് സ്വയം വരും. അത് ആരോടും പറയേണ്ട ആവശ്യമില്ല.",
    "A real bank, delivery company or police officer will not ask for it.":
      "യഥാർത്ഥ ബാങ്കോ ഡെലിവറി കമ്പനിയോ പോലീസ് ഉദ്യോഗസ്ഥനോ അത് ചോദിക്കില്ല.",
    "If someone asks, say no and end the call.":
      "ആരെങ്കിലും ചോദിച്ചാൽ വേണ്ടെന്ന് പറഞ്ഞ് കോൾ അവസാനിപ്പിക്കൂ.",
    "Your verification code": "നിങ്ങളുടെ പരിശോധനാ കോഡ്",
    "Never share this code with anyone.": "ഈ കോഡ് ആരുമായും പങ്കിടരുത്.",
    "Unknown caller": "അപരിചിതനായ വിളിക്കുന്നയാൾ",
    "“I am from your bank. Please read me the code on your phone.”":
      "“ഞാൻ നിങ്ങളുടെ ബാങ്കിൽ നിന്നാണ്. ഫോണിൽ വന്ന കോഡ് പറയൂ.”",

    "a prize you never entered for": "നിങ്ങൾ പങ്കെടുക്കാത്ത ഒരു സമ്മാനം",
    "You did not enter this draw, so you cannot have won it.":
      "ഈ നറുക്കെടുപ്പിൽ നിങ്ങൾ പങ്കെടുത്തിട്ടില്ല, അതിനാൽ ജയിക്കാനാവില്ല.",
    "Real prizes never ask for a fee before they arrive.":
      "യഥാർത്ഥ സമ്മാനങ്ങൾ വരുന്നതിന് മുൻപ് ഫീസ് ചോദിക്കില്ല.",
    "Delete the message. You do not owe them a reply.":
      "സന്ദേശം നീക്കം ചെയ്യൂ. അവർക്ക് മറുപടി നൽകേണ്ട ബാധ്യത നിങ്ങൾക്കില്ല.",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "അഭിനന്ദനങ്ങൾ! ലക്കി ഡ്രോയിൽ നിങ്ങൾ ₹25,000 നേടി.",
    "Pay ₹499 to claim your prize": "സമ്മാനം സ്വീകരിക്കാൻ ₹499 നൽകൂ",

    "a photo waiting in your messages": "നിങ്ങളുടെ സന്ദേശങ്ങളിൽ കാത്തിരിക്കുന്ന ഫോട്ടോ",
    "The small picture icon means a photo has arrived.":
      "ചെറിയ ചിത്ര ചിഹ്നം എന്നാൽ ഒരു ഫോട്ടോ വന്നു.",
    "Tap the photo once to see it bigger.":
      "ഫോട്ടോ വലുതായി കാണാൻ ഒരിക്കൽ അമർത്തൂ.",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ഫോണിൽ സൂക്ഷിക്കാൻ സേവ് (അല്ലെങ്കിൽ താഴേക്കുള്ള അമ്പ്) അമർത്തൂ.",
    Grandchild: "കൊച്ചുമകൻ/കൊച്ചുമകൾ",
    Save: "സേവ്",
    Open: "തുറക്കൂ",

    "getting ready for a video call": "വീഡിയോ കോളിന് തയ്യാറാകുന്നു",
    "The green camera icon is the video call app. Tap it once.":
      "പച്ച ക്യാമറ ചിഹ്നമാണ് വീഡിയോ കോൾ ആപ്പ്. ഒരിക്കൽ അമർത്തൂ.",
    "Tap the person's name, then the small camera button.":
      "ആ വ്യക്തിയുടെ പേര് അമർത്തി, പിന്നെ ചെറിയ ക്യാമറ ബട്ടൺ.",
    "The red button at the end is the one that ends the call.":
      "അവസാനത്തെ ചുവന്ന ബട്ടണാണ് കോൾ അവസാനിപ്പിക്കുന്നത്.",
    You: "നിങ്ങൾ",

    "a bill ready to pay": "അടയ്ക്കാൻ തയ്യാറായ ബിൽ",
    "The company name should be exactly what is printed on your bill.":
      "കമ്പനിയുടെ പേര് നിങ്ങളുടെ ബില്ലിൽ അച്ചടിച്ചിരിക്കുന്നതുപോലെ തന്നെ ആയിരിക്കണം.",
    "Read the amount out loud before you tap Pay.":
      "അടയ്ക്കൂ അമർത്തുന്നതിന് മുൻപ് തുക ഉറക്കെ വായിക്കൂ.",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "അവസാനം വരുന്ന രസീതാണ് നിങ്ങളുടെ തെളിവ്. ബിൽ അടച്ചതായി കാണുന്നതുവരെ അത് സൂക്ഷിക്കൂ.",
    "Electricity bill": "വൈദ്യുതി ബിൽ",
    Biller: "ബിൽ അയച്ചയാൾ",
    "State Electricity Board": "സംസ്ഥാന വൈദ്യുതി ബോർഡ്",
    "Consumer number": "ഉപഭോക്തൃ നമ്പർ",
    "Due date": "അവസാന തീയതി",
    "Pay securely": "സുരക്ഷിതമായി അടയ്ക്കൂ",

    "an unexpected call": "പ്രതീക്ഷിക്കാത്ത ഒരു കോൾ",
    "A real bank will not phone and demand money or a code.":
      "യഥാർത്ഥ ബാങ്ക് ഫോൺ ചെയ്ത് പണമോ കോഡോ ആവശ്യപ്പെടില്ല.",
    "The number on the screen proves nothing — it can be faked.":
      "സ്ക്രീനിലെ നമ്പർ ഒന്നും തെളിയിക്കുന്നില്ല — അത് വ്യാജമാക്കാം.",
    "Hang up and call the office on the number printed on your card or bill.":
      "കോൾ വയ്ക്കൂ, കാർഡിലോ ബില്ലിലോ അച്ചടിച്ച നമ്പറിൽ ഓഫീസിനെ വിളിക്കൂ.",
    "Incoming call": "വരുന്ന കോൾ",
    "Unknown number": "അപരിചിത നമ്പർ",
    "“I am from your bank”": "“ഞാൻ നിങ്ങളുടെ ബാങ്കിൽ നിന്നാണ്”",

    "a link you were not expecting": "നിങ്ങൾ പ്രതീക്ഷിക്കാത്ത ഒരു ലിങ്ക്",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "നിങ്ങൾ ഒരു പാർസലിനായി കാത്തിരിക്കുകയായിരുന്നില്ല, അതിനാൽ ഈ സന്ദേശം നിങ്ങൾക്ക് യോജിക്കുന്നില്ല.",
    "The address ends in .info, not the delivery company's real name.":
      "വിലാസം .info-യിൽ അവസാനിക്കുന്നു, ഡെലിവറി കമ്പനിയുടെ യഥാർത്ഥ പേരിൽ അല്ല.",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "അത് അമർത്തരുത്. പകരം കമ്പനിയുടെ സ്വന്തം ആപ്പിൽ ഡെലിവറി പരിശോധിക്കൂ.",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "നിങ്ങളുടെ പാർസൽ ഡിപ്പോയിൽ തടഞ്ഞിരിക്കുന്നു. ഇവിടെ ₹25 നൽകൂ:",
    "The link preview": "ലിങ്ക് പ്രിവ്യൂ",
    "not real": "യഥാർത്ഥമല്ല",

    "a message from a new number": "പുതിയ നമ്പറിൽ നിന്നുള്ള സന്ദേശം",
    "A new number is the first warning, even with a familiar name.":
      "പേര് പരിചിതമാണെങ്കിലും പുതിയ നമ്പർ തന്നെയാണ് ആദ്യ മുന്നറിയിപ്പ്.",
    "The message asks you not to call. That is the trick working.":
      "സന്ദേശം വിളിക്കരുതെന്ന് പറയുന്നു. അതാണ് തട്ടിപ്പിന്റെ തന്ത്രം.",
    "Call the saved number you already have, and ask a private question.":
      "ഇതിനകം സേവ് ചെയ്ത നമ്പറിൽ വിളിച്ച് ഒരു സ്വകാര്യ ചോദ്യം ചോദിക്കൂ.",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "അമ്മേ, ഞാനാണ്. എന്റെ ഫോൺ പൊട്ടി, ഇതാണ് എന്റെ പുതിയ നമ്പർ.",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "ഇന്ന് എനിക്ക് ₹20,000 വേണം. വേഗം അയക്കൂ, വിളിക്കരുത് — ഞാൻ മീറ്റിംഗിലാണ്.",
    "Pause.": "നിർത്തൂ.",
    "Call the number you already have saved before sending anything.":
      "എന്തും അയക്കുന്നതിന് മുൻപ് ഇതിനകം സേവ് ചെയ്ത നമ്പറിൽ വിളിക്കൂ.",
  },

  /* --------------------------------------------------------------------- */
  pa: {
    "Example — {title}": "ਉਦਾਹਰਨ — {title}",
    "a trick email": "ਧੋਖੇ ਵਾਲੀ ਈਮੇਲ",
    "The address is long and strange. Your bank uses its own short address.":
      "ਪਤਾ ਲੰਬਾ ਅਤੇ ਅਜੀਬ ਹੈ। ਤੁਹਾਡਾ ਬੈਂਕ ਆਪਣਾ ਛੋਟਾ ਪਤਾ ਵਰਤਦਾ ਹੈ।",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "ਤੁਹਾਡੇ ਨਾਮ ਦੀ ਥਾਂ “ਪਿਆਰੇ ਗਾਹਕ” — ਅਸਲੀ ਬੈਂਕ ਤੁਹਾਡਾ ਨਾਮ ਜਾਣਦਾ ਹੈ।",
    "Urgent words push you to act before you think.":
      "“ਤੁਰੰਤ” ਵਰਗੇ ਸ਼ਬਦ ਤੁਹਾਨੂੰ ਸੋਚਣ ਤੋਂ ਪਹਿਲਾਂ ਕੰਮ ਕਰਨ ਲਈ ਮਜਬੂਰ ਕਰਦੇ ਹਨ।",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "ਇਹ ਲਿੰਕ ਦਬਾਉਣ ਲਈ ਕਹਿੰਦੀ ਹੈ। ਇਸ ਦੀ ਥਾਂ ਆਪਣੇ ਬੈਂਕ ਦੀ ਐਪ ਆਪ ਖੋਲ੍ਹੋ।",
    From: "ਭੇਜਣ ਵਾਲਾ",
    Message: "ਸੁਨੇਹਾ",
    "Dear customer,": "ਪਿਆਰੇ ਗਾਹਕ,",
    "URGENT: your account will be closed today.":
      "ਤੁਰੰਤ: ਅੱਜ ਹੀ ਤੁਹਾਡਾ ਖਾਤਾ ਬੰਦ ਹੋ ਜਾਵੇਗਾ।",
    "Tap here to verify your account": "ਖਾਤਾ ਜਾਂਚਣ ਲਈ ਇੱਥੇ ਦਬਾਓ",

    "two addresses, one is fake": "ਦੋ ਪਤੇ, ਇੱਕ ਨਕਲੀ",
    "The real bank uses a short, exact name you already know.":
      "ਅਸਲੀ ਬੈਂਕ ਉਹੀ ਛੋਟਾ, ਸਹੀ ਨਾਮ ਵਰਤਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਜਾਣਦੇ ਹੋ।",
    "The fake one adds words like “secure” and “login” to look official.":
      "ਨਕਲੀ ਪਤਾ “secure” ਅਤੇ “login” ਵਰਗੇ ਸ਼ਬਦ ਜੋੜ ਕੇ ਸਰਕਾਰੀ ਦਿਸਣਾ ਚਾਹੁੰਦਾ ਹੈ।",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "ਤਾਲਾ ਸਿਰਫ਼ ਇਹ ਦੱਸਦਾ ਹੈ ਕਿ ਕਨੈਕਸ਼ਨ ਨਿੱਜੀ ਹੈ — ਸਾਈਟ ਇਮਾਨਦਾਰ ਹੈ ਇਸ ਦਾ ਮਤਲਬ ਨਹੀਂ।",
    "When unsure, type the address yourself instead of tapping a link.":
      "ਸ਼ੱਕ ਹੋਵੇ ਤਾਂ ਲਿੰਕ ਦਬਾਉਣ ਦੀ ਥਾਂ ਪਤਾ ਆਪ ਲਿਖੋ।",
    "Looks right": "ਸਹੀ ਲੱਗਦਾ ਹੈ",
    real: "ਅਸਲੀ",
    "Looks almost right": "ਲਗਭਗ ਸਹੀ ਲੱਗਦਾ ਹੈ",
    fake: "ਨਕਲੀ",

    "the code that is only for you": "ਸਿਰਫ਼ ਤੁਹਾਡੇ ਲਈ ਵਾਲਾ ਕੋਡ",
    "The code arrives by itself. You never need to read it to anyone.":
      "ਕੋਡ ਆਪਣੇ ਆਪ ਆਉਂਦਾ ਹੈ। ਇਹ ਕਿਸੇ ਨੂੰ ਦੱਸਣ ਦੀ ਲੋੜ ਕਦੇ ਨਹੀਂ।",
    "A real bank, delivery company or police officer will not ask for it.":
      "ਅਸਲੀ ਬੈਂਕ, ਡਿਲੀਵਰੀ ਕੰਪਨੀ ਜਾਂ ਪੁਲਿਸ ਵਾਲਾ ਇਹ ਨਹੀਂ ਮੰਗੇਗਾ।",
    "If someone asks, say no and end the call.":
      "ਕੋਈ ਮੰਗੇ ਤਾਂ ਨਾਂਹ ਕਹੋ ਅਤੇ ਫ਼ੋਨ ਕੱਟ ਦਿਓ।",
    "Your verification code": "ਤੁਹਾਡਾ ਤਸਦੀਕ ਕੋਡ",
    "Never share this code with anyone.": "ਇਹ ਕੋਡ ਕਿਸੇ ਨਾਲ ਸਾਂਝਾ ਨਾ ਕਰੋ।",
    "Unknown caller": "ਅਣਜਾਣ ਕਾਲਰ",
    "“I am from your bank. Please read me the code on your phone.”":
      "“ਮੈਂ ਤੁਹਾਡੇ ਬੈਂਕ ਤੋਂ ਬੋਲ ਰਿਹਾ ਹਾਂ। ਫ਼ੋਨ ’ਤੇ ਆਇਆ ਕੋਡ ਦੱਸੋ।”",

    "a prize you never entered for": "ਉਹ ਇਨਾਮ ਜਿਸ ਵਿੱਚ ਤੁਸੀਂ ਹਿੱਸਾ ਨਹੀਂ ਲਿਆ",
    "You did not enter this draw, so you cannot have won it.":
      "ਤੁਸੀਂ ਇਸ ਡ੍ਰਾ ਵਿੱਚ ਹਿੱਸਾ ਨਹੀਂ ਲਿਆ, ਇਸ ਲਈ ਜਿੱਤ ਨਹੀਂ ਸਕਦੇ।",
    "Real prizes never ask for a fee before they arrive.":
      "ਅਸਲੀ ਇਨਾਮ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਕਦੇ ਫ਼ੀਸ ਨਹੀਂ ਮੰਗਦੇ।",
    "Delete the message. You do not owe them a reply.":
      "ਸੁਨੇਹਾ ਹਟਾ ਦਿਓ। ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਨੂੰ ਜਵਾਬ ਦੇਣਾ ਨਹੀਂ ਹੈ।",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "ਵਧਾਈਆਂ! ਤੁਸੀਂ ਲੱਕੀ ਡ੍ਰਾ ਵਿੱਚ ₹25,000 ਜਿੱਤੇ ਹਨ।",
    "Pay ₹499 to claim your prize": "ਇਨਾਮ ਲੈਣ ਲਈ ₹499 ਦਿਓ",

    "a photo waiting in your messages": "ਤੁਹਾਡੇ ਸੁਨੇਹਿਆਂ ਵਿੱਚ ਉਡੀਕਦੀ ਫ਼ੋਟੋ",
    "The small picture icon means a photo has arrived.":
      "ਛੋਟਾ ਤਸਵੀਰ ਨਿਸ਼ਾਨ ਦੱਸਦਾ ਹੈ ਕਿ ਫ਼ੋਟੋ ਆਈ ਹੈ।",
    "Tap the photo once to see it bigger.":
      "ਫ਼ੋਟੋ ਵੱਡੀ ਵੇਖਣ ਲਈ ਇੱਕ ਵਾਰ ਦਬਾਓ।",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ਫ਼ੋਨ ਵਿੱਚ ਰੱਖਣ ਲਈ ਸੰਭਾਲੋ (ਜਾਂ ਹੇਠਾਂ ਵੱਲ ਤੀਰ) ਦਬਾਓ।",
    Grandchild: "ਪੋਤਾ-ਪੋਤੀ",
    Save: "ਸੰਭਾਲੋ",
    Open: "ਖੋਲ੍ਹੋ",

    "getting ready for a video call": "ਵੀਡੀਓ ਕਾਲ ਲਈ ਤਿਆਰ ਹੋਣਾ",
    "The green camera icon is the video call app. Tap it once.":
      "ਹਰਾ ਕੈਮਰਾ ਨਿਸ਼ਾਨ ਹੀ ਵੀਡੀਓ ਕਾਲ ਐਪ ਹੈ। ਇੱਕ ਵਾਰ ਦਬਾਓ।",
    "Tap the person's name, then the small camera button.":
      "ਉਸ ਬੰਦੇ ਦਾ ਨਾਮ ਦਬਾਓ, ਫਿਰ ਛੋਟਾ ਕੈਮਰਾ ਬਟਨ।",
    "The red button at the end is the one that ends the call.":
      "ਅੰਤ ਵਾਲਾ ਲਾਲ ਬਟਨ ਹੀ ਕਾਲ ਬੰਦ ਕਰਦਾ ਹੈ।",
    You: "ਤੁਸੀਂ",

    "a bill ready to pay": "ਭਰਨ ਲਈ ਤਿਆਰ ਬਿੱਲ",
    "The company name should be exactly what is printed on your bill.":
      "ਕੰਪਨੀ ਦਾ ਨਾਮ ਤੁਹਾਡੇ ਬਿੱਲ ’ਤੇ ਛਪੇ ਨਾਮ ਵਰਗਾ ਹੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
    "Read the amount out loud before you tap Pay.":
      "ਭੁਗਤਾਨ ਦਬਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਰਕਮ ਉੱਚੀ ਪੜ੍ਹੋ।",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "ਅੰਤ ਵਿੱਚ ਮਿਲਣ ਵਾਲੀ ਰਸੀਦ ਹੀ ਤੁਹਾਡਾ ਸਬੂਤ ਹੈ। ਬਿੱਲ ਭਰਿਆ ਦਿਸਣ ਤੱਕ ਇਹ ਰੱਖੋ।",
    "Electricity bill": "ਬਿਜਲੀ ਬਿੱਲ",
    Biller: "ਬਿੱਲ ਭੇਜਣ ਵਾਲਾ",
    "State Electricity Board": "ਸੂਬਾ ਬਿਜਲੀ ਬੋਰਡ",
    "Consumer number": "ਖਪਤਕਾਰ ਨੰਬਰ",
    "Due date": "ਆਖਰੀ ਤਾਰੀਖ਼",
    "Pay securely": "ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਭਰੋ",

    "an unexpected call": "ਇੱਕ ਅਚਾਨਕ ਕਾਲ",
    "A real bank will not phone and demand money or a code.":
      "ਅਸਲੀ ਬੈਂਕ ਫ਼ੋਨ ਕਰਕੇ ਪੈਸੇ ਜਾਂ ਕੋਡ ਨਹੀਂ ਮੰਗਦਾ।",
    "The number on the screen proves nothing — it can be faked.":
      "ਸਕ੍ਰੀਨ ’ਤੇ ਦਿਸਦਾ ਨੰਬਰ ਕੁਝ ਸਾਬਤ ਨਹੀਂ ਕਰਦਾ — ਇਹ ਨਕਲੀ ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।",
    "Hang up and call the office on the number printed on your card or bill.":
      "ਫ਼ੋਨ ਕੱਟੋ ਅਤੇ ਕਾਰਡ ਜਾਂ ਬਿੱਲ ’ਤੇ ਛਪੇ ਨੰਬਰ ’ਤੇ ਦਫ਼ਤਰ ਨੂੰ ਫ਼ੋਨ ਕਰੋ।",
    "Incoming call": "ਆ ਰਹੀ ਕਾਲ",
    "Unknown number": "ਅਣਜਾਣ ਨੰਬਰ",
    "“I am from your bank”": "“ਮੈਂ ਤੁਹਾਡੇ ਬੈਂਕ ਤੋਂ ਬੋਲ ਰਿਹਾ ਹਾਂ”",

    "a link you were not expecting": "ਉਹ ਲਿੰਕ ਜਿਸ ਦੀ ਤੁਹਾਨੂੰ ਉਮੀਦ ਨਹੀਂ ਸੀ",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "ਤੁਸੀਂ ਕਿਸੇ ਪਾਰਸਲ ਦੀ ਉਡੀਕ ਨਹੀਂ ਕਰ ਰਹੇ ਸੀ, ਇਸ ਲਈ ਇਹ ਸੁਨੇਹਾ ਤੁਹਾਡੇ ਨਾਲ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ।",
    "The address ends in .info, not the delivery company's real name.":
      "ਪਤਾ .info ’ਤੇ ਖ਼ਤਮ ਹੁੰਦਾ ਹੈ, ਡਿਲੀਵਰੀ ਕੰਪਨੀ ਦੇ ਅਸਲੀ ਨਾਮ ’ਤੇ ਨਹੀਂ।",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "ਇਸ ਨੂੰ ਨਾ ਦਬਾਓ। ਇਸ ਦੀ ਥਾਂ ਕੰਪਨੀ ਦੀ ਆਪਣੀ ਐਪ ਵਿੱਚ ਡਿਲੀਵਰੀ ਵੇਖੋ।",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "ਤੁਹਾਡਾ ਪਾਰਸਲ ਡਿਪੂ ਵਿੱਚ ਰੋਕਿਆ ਹੈ। ਇੱਥੇ ₹25 ਦਿਓ:",
    "The link preview": "ਲਿੰਕ ਦੀ ਝਲਕ",
    "not real": "ਅਸਲੀ ਨਹੀਂ",

    "a message from a new number": "ਨਵੇਂ ਨੰਬਰ ਤੋਂ ਆਇਆ ਸੁਨੇਹਾ",
    "A new number is the first warning, even with a familiar name.":
      "ਨਾਮ ਜਾਣਿਆ-ਪਛਾਣਿਆ ਹੋਵੇ ਤਾਂ ਵੀ ਨਵਾਂ ਨੰਬਰ ਪਹਿਲੀ ਚੇਤਾਵਨੀ ਹੈ।",
    "The message asks you not to call. That is the trick working.":
      "ਸੁਨੇਹਾ ਕਾਲ ਨਾ ਕਰਨ ਨੂੰ ਕਹਿੰਦਾ ਹੈ। ਇਹੀ ਤਾਂ ਠੱਗੀ ਦੀ ਚਾਲ ਹੈ।",
    "Call the saved number you already have, and ask a private question.":
      "ਪਹਿਲਾਂ ਹੀ ਸੰਭਾਲੇ ਨੰਬਰ ’ਤੇ ਕਾਲ ਕਰੋ ਅਤੇ ਕੋਈ ਨਿੱਜੀ ਸਵਾਲ ਪੁੱਛੋ।",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "ਮੰਮੀ, ਮੈਂ ਹਾਂ। ਮੇਰਾ ਫ਼ੋਨ ਟੁੱਟ ਗਿਆ, ਇਹ ਮੇਰਾ ਨਵਾਂ ਨੰਬਰ ਹੈ।",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "ਮੈਨੂੰ ਅੱਜ ₹20,000 ਚਾਹੀਦੇ ਹਨ। ਜਲਦੀ ਭੇਜੋ ਅਤੇ ਕਾਲ ਨਾ ਕਰੋ — ਮੈਂ ਮੀਟਿੰਗ ਵਿੱਚ ਹਾਂ।",
    "Pause.": "ਰੁਕੋ।",
    "Call the number you already have saved before sending anything.":
      "ਕੁਝ ਵੀ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਪਹਿਲਾਂ ਹੀ ਸੰਭਾਲੇ ਨੰਬਰ ’ਤੇ ਕਾਲ ਕਰੋ।",
  },

  /* --------------------------------------------------------------------- */
  or: {
    "Example — {title}": "ଉଦାହରଣ — {title}",
    "a trick email": "ଏକ ଠକେଇ ଇମେଲ",
    "The address is long and strange. Your bank uses its own short address.":
      "ଠିକଣାଟି ଲମ୍ବା ଓ ଅଦ୍ଭୁତ। ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ନିଜର ଛୋଟ ଠିକଣା ବ୍ୟବହାର କରେ।",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "ଆପଣଙ୍କ ନାମ ବଦଳେ “ପ୍ରିୟ ଗ୍ରାହକ” — ପ୍ରକୃତ ବ୍ୟାଙ୍କ ଆପଣଙ୍କ ନାମ ଜାଣେ।",
    "Urgent words push you to act before you think.":
      "“ତୁରନ୍ତ” ଭଳି ଶବ୍ଦ ଆପଣଙ୍କୁ ଭାବିବା ପୂର୍ବରୁ କାମ କରାଇଦିଏ।",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "ଏହା ଏକ ଲିଙ୍କ ଦବାଇବାକୁ କୁହେ। ଏହା ବଦଳେ ଆପଣଙ୍କ ବ୍ୟାଙ୍କର ଆପ୍ ନିଜେ ଖୋଲନ୍ତୁ।",
    From: "ପଠାଇଥିବା ବ୍ୟକ୍ତି",
    Message: "ସନ୍ଦେଶ",
    "Dear customer,": "ପ୍ରିୟ ଗ୍ରାହକ,",
    "URGENT: your account will be closed today.":
      "ତୁରନ୍ତ: ଆଜି ହିଁ ଆପଣଙ୍କ ଖାତା ବନ୍ଦ ହେବ।",
    "Tap here to verify your account": "ଖାତା ଯାଞ୍ଚ କରିବାକୁ ଏଠାରେ ଦବାନ୍ତୁ",

    "two addresses, one is fake": "ଦୁଇଟି ଠିକଣା, ଗୋଟିଏ ନକଲି",
    "The real bank uses a short, exact name you already know.":
      "ପ୍ରକୃତ ବ୍ୟାଙ୍କ ସେହି ଛୋଟ, ସଠିକ ନାମ ବ୍ୟବହାର କରେ ଯାହା ଆପଣ ପୂର୍ବରୁ ଜାଣନ୍ତି।",
    "The fake one adds words like “secure” and “login” to look official.":
      "ନକଲି ଠିକଣା ସରକାରୀ ଦେଖାଯିବା ପାଇଁ “secure” ଓ “login” ଭଳି ଶବ୍ଦ ଯୋଡ଼େ।",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "ତାଲା କେବଳ କହେ ସଂଯୋଗ ଗୋପନୀୟ — ସାଇଟ ସଚ୍ଚୋଟ ବୋଲି ନୁହେଁ।",
    "When unsure, type the address yourself instead of tapping a link.":
      "ସନ୍ଦେହ ହେଲେ ଲିଙ୍କ ଦବାଇବା ବଦଳେ ଠିକଣା ନିଜେ ଲେଖନ୍ତୁ।",
    "Looks right": "ଠିକ ଦେଖାଯାଉଛି",
    real: "ପ୍ରକୃତ",
    "Looks almost right": "ପ୍ରାୟ ଠିକ ଦେଖାଯାଉଛି",
    fake: "ନକଲି",

    "the code that is only for you": "କେବଳ ଆପଣଙ୍କ ପାଇଁ ଥିବା କୋଡ୍",
    "The code arrives by itself. You never need to read it to anyone.":
      "କୋଡ୍ ନିଜେ ଆସେ। ଏହାକୁ କାହାକୁ କହିବାର ଆବଶ୍ୟକତା କେବେ ନାହିଁ।",
    "A real bank, delivery company or police officer will not ask for it.":
      "ପ୍ରକୃତ ବ୍ୟାଙ୍କ, ଡେଲିଭରୀ କମ୍ପାନୀ କିମ୍ବା ପୋଲିସ ଏହା ମାଗିବେ ନାହିଁ।",
    "If someone asks, say no and end the call.":
      "କେହି ମାଗିଲେ ମନା କରି ଫୋନ ରଖନ୍ତୁ।",
    "Your verification code": "ଆପଣଙ୍କ ଯାଞ୍ଚ କୋଡ୍",
    "Never share this code with anyone.": "ଏହି କୋଡ୍ କାହା ସହିତ ସେୟାର କରନ୍ତୁ ନାହିଁ।",
    "Unknown caller": "ଅଜଣା କଲର",
    "“I am from your bank. Please read me the code on your phone.”":
      "“ମୁଁ ଆପଣଙ୍କ ବ୍ୟାଙ୍କରୁ କହୁଛି। ଫୋନରେ ଆସିଥିବା କୋଡ୍ କୁହନ୍ତୁ।”",

    "a prize you never entered for": "ଯେଉଁ ପୁରସ୍କାରରେ ଆପଣ ଅଂଶଗ୍ରହଣ କରି ନାହାନ୍ତି",
    "You did not enter this draw, so you cannot have won it.":
      "ଆପଣ ଏହି ଡ୍ରରେ ଅଂଶଗ୍ରହଣ କରି ନାହାନ୍ତି, ତେଣୁ ଜିତି ପାରିବେ ନାହିଁ।",
    "Real prizes never ask for a fee before they arrive.":
      "ପ୍ରକୃତ ପୁରସ୍କାର ଆସିବା ପୂର୍ବରୁ କେବେ ଫି ମାଗେ ନାହିଁ।",
    "Delete the message. You do not owe them a reply.":
      "ସନ୍ଦେଶ ଡିଲିଟ୍ କରନ୍ତୁ। ସେମାନଙ୍କୁ ଉତ୍ତର ଦେବାର ଦାୟିତ୍ୱ ଆପଣଙ୍କର ନାହିଁ।",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "ଅଭିନନ୍ଦନ! ଲକି ଡ୍ରରେ ଆପଣ ₹25,000 ଜିତିଛନ୍ତି।",
    "Pay ₹499 to claim your prize": "ପୁରସ୍କାର ନେବାକୁ ₹499 ଦିଅନ୍ତୁ",

    "a photo waiting in your messages": "ଆପଣଙ୍କ ସନ୍ଦେଶରେ ଅପେକ୍ଷା କରିଥିବା ଫଟୋ",
    "The small picture icon means a photo has arrived.":
      "ଛୋଟ ଚିତ୍ର ଚିହ୍ନ ମାନେ ଏକ ଫଟୋ ଆସିଛି।",
    "Tap the photo once to see it bigger.":
      "ଫଟୋ ବଡ଼ କରି ଦେଖିବାକୁ ଥରେ ଦବାନ୍ତୁ।",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ଫୋନରେ ରଖିବାକୁ ସେଭ୍ (କିମ୍ବା ତଳକୁ ଥିବା ତୀର) ଦବାନ୍ତୁ।",
    Grandchild: "ନାତି-ନାତୁଣୀ",
    Save: "ସେଭ୍",
    Open: "ଖୋଲନ୍ତୁ",

    "getting ready for a video call": "ଭିଡିଓ କଲ୍ ପାଇଁ ପ୍ରସ୍ତୁତ ହେବା",
    "The green camera icon is the video call app. Tap it once.":
      "ସବୁଜ କ୍ୟାମେରା ଚିହ୍ନ ହେଉଛି ଭିଡିଓ କଲ୍ ଆପ୍। ଥରେ ଦବାନ୍ତୁ।",
    "Tap the person's name, then the small camera button.":
      "ସେ ବ୍ୟକ୍ତିଙ୍କ ନାମ ଦବାନ୍ତୁ, ତାପରେ ଛୋଟ କ୍ୟାମେରା ବଟନ।",
    "The red button at the end is the one that ends the call.":
      "ଶେଷରେ ଥିବା ଲାଲ ବଟନ ହିଁ କଲ୍ ବନ୍ଦ କରେ।",
    You: "ଆପଣ",

    "a bill ready to pay": "ଦେବା ପାଇଁ ପ୍ରସ୍ତୁତ ବିଲ୍",
    "The company name should be exactly what is printed on your bill.":
      "କମ୍ପାନୀ ନାମ ଆପଣଙ୍କ ବିଲରେ ଛପା ନାମ ପରି ହେବା ଉଚିତ।",
    "Read the amount out loud before you tap Pay.":
      "ଦିଅନ୍ତୁ ଦବାଇବା ପୂର୍ବରୁ ରାଶି ଉଚ୍ଚ ସ୍ୱରରେ ପଢ଼ନ୍ତୁ।",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "ଶେଷରେ ମିଳୁଥିବା ରସିଦ ହିଁ ଆପଣଙ୍କ ପ୍ରମାଣ। ବିଲ ଦିଆଯାଇଥିବା ଦେଖାଯିବା ପର୍ଯ୍ୟନ୍ତ ଏହା ରଖନ୍ତୁ।",
    "Electricity bill": "ବିଦ୍ୟୁତ ବିଲ୍",
    Biller: "ବିଲ ପଠାଇଥିବା ବ୍ୟକ୍ତି",
    "State Electricity Board": "ରାଜ୍ୟ ବିଦ୍ୟୁତ ବୋର୍ଡ",
    "Consumer number": "ଗ୍ରାହକ ନମ୍ବର",
    "Due date": "ଶେଷ ତାରିଖ",
    "Pay securely": "ସୁରକ୍ଷିତ ଭାବରେ ଦିଅନ୍ତୁ",

    "an unexpected call": "ଏକ ଅପ୍ରତ୍ୟାଶିତ କଲ୍",
    "A real bank will not phone and demand money or a code.":
      "ପ୍ରକୃତ ବ୍ୟାଙ୍କ ଫୋନ କରି ଟଙ୍କା କିମ୍ବା କୋଡ୍ ମାଗେ ନାହିଁ।",
    "The number on the screen proves nothing — it can be faked.":
      "ସ୍କ୍ରିନରେ ଦେଖାଯାଉଥିବା ନମ୍ବର କିଛି ପ୍ରମାଣ କରେ ନାହିଁ — ଏହା ନକଲି କରାଯାଇପାରେ।",
    "Hang up and call the office on the number printed on your card or bill.":
      "ଫୋନ ରଖି କାର୍ଡ କିମ୍ବା ବିଲରେ ଛପା ନମ୍ବରକୁ କାର୍ଯ୍ୟାଳୟକୁ ଫୋନ କରନ୍ତୁ।",
    "Incoming call": "ଆସୁଥିବା କଲ୍",
    "Unknown number": "ଅଜଣା ନମ୍ବର",
    "“I am from your bank”": "“ମୁଁ ଆପଣଙ୍କ ବ୍ୟାଙ୍କରୁ କହୁଛି”",

    "a link you were not expecting": "ଯେଉଁ ଲିଙ୍କ ଆପଣ ଆଶା କରି ନଥିଲେ",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "ଆପଣ କୌଣସି ପାର୍ସଲ ପାଇଁ ଅପେକ୍ଷା କରି ନଥିଲେ, ତେଣୁ ଏହି ସନ୍ଦେଶ ଆପଣଙ୍କ ସହ ମେଳ ଖାଉ ନାହିଁ।",
    "The address ends in .info, not the delivery company's real name.":
      "ଠିକଣା .info ରେ ଶେଷ ହୁଏ, ଡେଲିଭରୀ କମ୍ପାନୀର ପ୍ରକୃତ ନାମରେ ନୁହେଁ।",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "ଏହା ଦବାନ୍ତୁ ନାହିଁ। ଏହା ବଦଳେ କମ୍ପାନୀର ନିଜ ଆପରେ ଡେଲିଭରୀ ଦେଖନ୍ତୁ।",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "ଆପଣଙ୍କ ପାର୍ସଲ ଡିପୋରେ ଅଟକାଯାଇଛି। ଏଠାରେ ₹25 ଦିଅନ୍ତୁ:",
    "The link preview": "ଲିଙ୍କର ଝଲକ",
    "not real": "ପ୍ରକୃତ ନୁହେଁ",

    "a message from a new number": "ନୂଆ ନମ୍ବରରୁ ଆସିଥିବା ସନ୍ଦେଶ",
    "A new number is the first warning, even with a familiar name.":
      "ନାମ ଜଣା ଥିଲେ ମଧ୍ୟ ନୂଆ ନମ୍ବର ହିଁ ପ୍ରଥମ ଚେତାବନୀ।",
    "The message asks you not to call. That is the trick working.":
      "ସନ୍ଦେଶ ଫୋନ ନ କରିବାକୁ କୁହେ। ସେଇଟା ହିଁ ଠକେଇର ଉପାୟ।",
    "Call the saved number you already have, and ask a private question.":
      "ପୂର୍ବରୁ ସେଭ୍ କରିଥିବା ନମ୍ବରକୁ ଫୋନ କରି ଏକ ବ୍ୟକ୍ତିଗତ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ।",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "ମା, ମୁଁ ହିଁ। ମୋ ଫୋନ ଭାଙ୍ଗିଗଲା, ଏହା ମୋର ନୂଆ ନମ୍ବର।",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "ଆଜି ମୋତେ ₹20,000 ଦରକାର। ଶୀଘ୍ର ପଠାନ୍ତୁ ଓ ଫୋନ କରନ୍ତୁ ନାହିଁ — ମୁଁ ମିଟିଂରେ ଅଛି।",
    "Pause.": "ଅଟକନ୍ତୁ।",
    "Call the number you already have saved before sending anything.":
      "କିଛି ପଠାଇବା ପୂର୍ବରୁ ପୂର୍ବରୁ ସେଭ୍ କରିଥିବା ନମ୍ବରକୁ ଫୋନ କରନ୍ତୁ।",
  },

  /* --------------------------------------------------------------------- */
  as: {
    "Example — {title}": "উদাহৰণ — {title}",
    "a trick email": "এটা প্ৰৱঞ্চনাৰ ইমেইল",
    "The address is long and strange. Your bank uses its own short address.":
      "ঠিকনাটো দীঘল আৰু আচৰিত। আপোনাৰ বেংকে নিজৰ চুটি ঠিকনা ব্যৱহাৰ কৰে।",
    "“Dear customer” instead of your name — a real bank knows your name.":
      "আপোনাৰ নামৰ সলনি “প্ৰিয় গ্ৰাহক” — প্ৰকৃত বেংকে আপোনাৰ নাম জানে।",
    "Urgent words push you to act before you think.":
      "“জৰুৰী”ৰ দৰে শব্দই আপোনাক ভাবিবলৈ আগেই কাম কৰায়।",
    "It asks you to tap a link. Open your bank's app yourself instead.":
      "ই এখন লিংক টিপিবলৈ কয়। ইয়াৰ সলনি আপোনাৰ বেংকৰ এপ্ নিজে খোলক।",
    From: "পঠোৱা মানুহ",
    Message: "বাৰ্তা",
    "Dear customer,": "প্ৰিয় গ্ৰাহক,",
    "URGENT: your account will be closed today.":
      "জৰুৰী: আজিয়েই আপোনাৰ একাউণ্ট বন্ধ হ'ব।",
    "Tap here to verify your account": "একাউণ্ট পৰীক্ষা কৰিবলৈ ইয়াত টিপক",

    "two addresses, one is fake": "দুটা ঠিকনা, এটা নকল",
    "The real bank uses a short, exact name you already know.":
      "প্ৰকৃত বেংকে সেই চুটি, সঠিক নামেই ব্যৱহাৰ কৰে যিটো আপুনি আগতেই জানে।",
    "The fake one adds words like “secure” and “login” to look official.":
      "নকলটোৱে চৰকাৰী যেন দেখাবলৈ “secure” আৰু “login”ৰ দৰে শব্দ যোগ কৰে।",
    "A padlock only means the connection is private — it does not mean the site is honest.":
      "তলা মানে কেৱল সংযোগ ব্যক্তিগত — ছাইট সৎ বুলি নহয়।",
    "When unsure, type the address yourself instead of tapping a link.":
      "সন্দেহ হলে লিংক নাটিপি ঠিকনাটো নিজে লিখক।",
    "Looks right": "ঠিক যেন দেখাইছে",
    real: "প্ৰকৃত",
    "Looks almost right": "প্ৰায় ঠিক যেন দেখাইছে",
    fake: "নকল",

    "the code that is only for you": "কেৱল আপোনাৰ বাবে থকা ক'ড",
    "The code arrives by itself. You never need to read it to anyone.":
      "ক'ড নিজেই আহে। ইয়াক কাকো কোৱাৰ প্ৰয়োজন কেতিয়াও নহয়।",
    "A real bank, delivery company or police officer will not ask for it.":
      "প্ৰকৃত বেংক, ডেলিভাৰী কোম্পানী বা আৰক্ষীয়ে ইয়াক নিবিচাৰে।",
    "If someone asks, say no and end the call.":
      "কোনোবাই বিচাৰিলে মানা কৰি ফোন থৈ দিয়ক।",
    "Your verification code": "আপোনাৰ পৰীক্ষণ ক'ড",
    "Never share this code with anyone.": "এই ক'ড কাকো নিদিব।",
    "Unknown caller": "অচিনাকি কলাৰ",
    "“I am from your bank. Please read me the code on your phone.”":
      "“মই আপোনাৰ বেংকৰ পৰা কৈছোঁ। ফোনত অহা ক'ডটো কওক।”",

    "a prize you never entered for": "যি পুৰস্কাৰত আপুনি অংশ লোৱা নাই",
    "You did not enter this draw, so you cannot have won it.":
      "আপুনি এই ড্ৰত অংশ লোৱা নাই, গতিকে জিকিব নোৱাৰে।",
    "Real prizes never ask for a fee before they arrive.":
      "প্ৰকৃত পুৰস্কাৰ আহিবৰ আগতে কেতিয়াও মাচুল নিবিচাৰে।",
    "Delete the message. You do not owe them a reply.":
      "বাৰ্তা মচি দিয়ক। তেওঁলোকক উত্তৰ দিয়াৰ দায়িত্ব আপোনাৰ নাই।",
    "Congratulations! You have won ₹25,000 in the lucky draw.":
      "অভিনন্দন! লাকী ড্ৰত আপুনি ₹25,000 জিকিছে।",
    "Pay ₹499 to claim your prize": "পুৰস্কাৰ ল'বলৈ ₹499 দিয়ক",

    "a photo waiting in your messages": "আপোনাৰ বাৰ্তাত অপেক্ষা কৰি থকা ফটো",
    "The small picture icon means a photo has arrived.":
      "সৰু ছবিৰ চিন মানে এটা ফটো আহিছে।",
    "Tap the photo once to see it bigger.":
      "ফটো ডাঙৰকৈ চাবলৈ এবাৰ টিপক।",
    "Tap Save (or the arrow pointing down) to keep it on your phone.":
      "ফোনত ৰাখিবলৈ ছেভ (বা তললৈ থকা কাঁড়) টিপক।",
    Grandchild: "নাতি-নাতিনী",
    Save: "ছেভ",
    Open: "খোলক",

    "getting ready for a video call": "ভিডিঅ' কলৰ বাবে সাজু হোৱা",
    "The green camera icon is the video call app. Tap it once.":
      "সেউজীয়া কেমেৰা চিনটোৱেই ভিডিঅ' কল এপ্। এবাৰ টিপক।",
    "Tap the person's name, then the small camera button.":
      "সেই মানুহজনৰ নাম টিপক, তাৰ পিছত সৰু কেমেৰা বুটাম।",
    "The red button at the end is the one that ends the call.":
      "শেষৰ ৰঙা বুটামেই কল বন্ধ কৰে।",
    You: "আপুনি",

    "a bill ready to pay": "দিবলৈ সাজু এখন বিল",
    "The company name should be exactly what is printed on your bill.":
      "কোম্পানীৰ নাম আপোনাৰ বিলত ছপা নামৰ দৰেই হ'ব লাগে।",
    "Read the amount out loud before you tap Pay.":
      "দিয়ক টিপাৰ আগতে পৰিমাণ উচ্চ স্বৰত পঢ়ক।",
    "The receipt at the end is your proof. Keep it until the bill shows as paid.":
      "শেষত পোৱা ৰচিদেই আপোনাৰ প্ৰমাণ। বিল দিয়া বুলি নেদেখালৈকে ইয়াক ৰাখক।",
    "Electricity bill": "বিদ্যুৎ বিল",
    Biller: "বিল পঠোৱা মানুহ",
    "State Electricity Board": "ৰাজ্য বিদ্যুৎ বৰ্ড",
    "Consumer number": "গ্ৰাহক নম্বৰ",
    "Due date": "শেষ তাৰিখ",
    "Pay securely": "সুৰক্ষিতভাৱে দিয়ক",

    "an unexpected call": "এটা অপ্ৰত্যাশিত কল",
    "A real bank will not phone and demand money or a code.":
      "প্ৰকৃত বেংকে ফোন কৰি টকা বা ক'ড নিবিচাৰে।",
    "The number on the screen proves nothing — it can be faked.":
      "স্ক্ৰিনত দেখা নম্বৰে একো প্ৰমাণ নকৰে — ইয়াক নকল কৰিব পাৰি।",
    "Hang up and call the office on the number printed on your card or bill.":
      "ফোন থৈ কাৰ্ড বা বিলত ছপা নম্বৰলৈ কাৰ্যালয়ক ফোন কৰক।",
    "Incoming call": "অহা কল",
    "Unknown number": "অচিনাকি নম্বৰ",
    "“I am from your bank”": "“মই আপোনাৰ বেংকৰ পৰা কৈছোঁ”",

    "a link you were not expecting": "যি লিংক আপুনি আশা কৰা নাছিল",
    "You were not waiting for a parcel, so this message does not fit your life.":
      "আপুনি কোনো পাৰ্চেললৈ অপেক্ষা কৰা নাছিল, গতিকে এই বাৰ্তা আপোনাৰ লগত নিমিলে।",
    "The address ends in .info, not the delivery company's real name.":
      "ঠিকনা .info ত শেষ হয়, ডেলিভাৰী কোম্পানীৰ প্ৰকৃত নামত নহয়।",
    "Do not tap it. Check the delivery on the company's own app instead.":
      "ইয়াক নাটিপিব। ইয়াৰ সলনি কোম্পানীৰ নিজৰ এপ্‌ত ডেলিভাৰী চাওক।",
    "Your parcel is held at the depot. Pay ₹25 here:":
      "আপোনাৰ পাৰ্চেল ডিপোত ৰখা হৈছে। ইয়াত ₹25 দিয়ক:",
    "The link preview": "লিংকৰ জিলিকনি",
    "not real": "প্ৰকৃত নহয়",

    "a message from a new number": "নতুন নম্বৰৰ পৰা অহা বাৰ্তা",
    "A new number is the first warning, even with a familiar name.":
      "নাম চিনাকি হলেও নতুন নম্বৰেই প্ৰথম সতৰ্কবাণী।",
    "The message asks you not to call. That is the trick working.":
      "বাৰ্তাই ফোন নকৰিবলৈ কয়। সেয়াই প্ৰৱঞ্চনাৰ কৌশল।",
    "Call the saved number you already have, and ask a private question.":
      "আগতেই ছেভ কৰা নম্বৰলৈ ফোন কৰি এটা ব্যক্তিগত প্ৰশ্ন সোধক।",
    "Hi Mum, it's me. My phone broke, so this is my new number.":
      "মা, ময়েই। মোৰ ফোন ভাঙি গ'ল, এইটো মোৰ নতুন নম্বৰ।",
    "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.":
      "আজি মোক ₹20,000 লাগে। সোনকালে পঠিয়াওক আৰু ফোন নকৰিব — মই মিটিংত আছোঁ।",
    "Pause.": "ৰওক।",
    "Call the number you already have saved before sending anything.":
      "কিবা পঠোৱাৰ আগতে আগতেই ছেভ কৰা নম্বৰলৈ ফোন কৰক।",
  },
};
