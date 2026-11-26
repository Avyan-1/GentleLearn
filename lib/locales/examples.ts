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
    /* New lesson example screens */
    "typing with your voice": "अपनी आवाज़ से टाइप करना",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "कीबोर्ड पर छोटे माइक्रोफ़ोन को टैप करें, हरे व्हाट्सएप बटन को नहीं।",
    "Wait for the chime, then speak your message at your normal speed.": "घंटी की प्रतीक्षा करें, फिर अपना संदेश अपनी सामान्य गति से बोलें।",
    "Read the words on screen before you tap Send.": "भेजें पर टैप करने से पहले स्क्रीन पर मौजूद शब्दों को पढ़ें।",
    "Your message": "आपका संदेश",
    "Hello beta, I reached home safely.": "नमस्ते बेटा, मैं सुरक्षित घर पहुँच गया।",
    "Tap the microphone and speak": "माइक्रोफ़ोन टैप करें और बोलें",
    "a quiet night": "एक शांत रात",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "सेटिंग्स खोलें, फिर ध्वनि या मोड, और परेशान न करें चालू करें।",
    "Allow calls from Favourites so your family can still reach you.": "पसंदीदा से कॉल की अनुमति दें ताकि आपका परिवार अभी भी आप तक पहुंच सके।",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "इसे रात 10 बजे से सुबह 7 बजे तक सेट करें - स्पैम सुबह तक शांत रहता है।",
    "Do Not Disturb": "परेशान मत करो",
    "Allowed calls": "अनुमत कॉल",
    "Favourites": "पसंदीदा",
    "Quiet hours": "शांत घंटे",
    "sharing where you are": "आप जहां हैं उसे साझा करें",
    "Open the family chat on WhatsApp.": "व्हाट्सएप पर पारिवारिक चैट खोलें।",
    "Tap the paperclip or plus, then choose Location.": "पेपरक्लिप या प्लस पर टैप करें, फिर स्थान चुनें।",
    "Choose Share live location for 1 hour, then tap Send.": "1 घंटे के लिए लाइव स्थान साझा करें चुनें, फिर भेजें पर टैप करें।",
    "Family chat": "पारिवारिक बातचीत",
    "Live location · 1 hour": "लाइव स्थान · 1 घंटा",
    "Share live location": "लाइव स्थान साझा करें",
    "Stop sharing": "साझा करना बंद करो",
    "asking AI a question": "एआई से प्रश्न पूछना",
    "Type or speak your question in your own words.": "अपना प्रश्न अपने शब्दों में लिखें या बोलें।",
    "Read the answer slowly. AI can be wrong.": "उत्तर धीरे-धीरे पढ़ें. एआई ग़लत हो सकता है.",
    "Always check with your doctor or the office before acting.": "कार्रवाई करने से पहले हमेशा अपने डॉक्टर या कार्यालय से जांच लें।",
    "You asked": "आपने पूछा",
    "What are the side effects of amlodipine?": "एम्लोडिपाइन के दुष्प्रभाव क्या हैं?",
    "AI helper": "ऐ सहायक",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "आम दुष्प्रभावों में टखने में सूजन और थकान महसूस होना शामिल है। कृपया अपने डॉक्टर से जांच कराएं.",
    "Check with your doctor before changing any medicine.": "कोई भी दवा बदलने से पहले अपने डॉक्टर से जांच लें।",
    "a voice that sounds like family": "एक आवाज़ जो परिवार जैसी लगती है",
    "A copied voice can sound exactly like your son or daughter.": "नकल की गई आवाज बिल्कुल आपके बेटे या बेटी की तरह लग सकती है।",
    "Hang up and call their saved number yourself.": "फोन रखिए और उनके सेव किए गए नंबर पर खुद कॉल कीजिए।",
    "Agree on a family code word that only you know.": "किसी ऐसे पारिवारिक कोड शब्द पर सहमत हों जिसे केवल आप जानते हों।",
    "Son": "बेटा",
    "Voice can be copied": "आवाज की नकल की जा सकती है",
    "Hang up and call back": "फ़ोन रखो और वापस कॉल करो",
    "clearing old forwards": "पुराने अग्रिमों को साफ़ करना",
    "Open WhatsApp, then Settings, then Storage and data.": "व्हाट्सएप खोलें, फिर सेटिंग्स, फिर स्टोरेज और डेटा।",
    "Tap Manage storage and choose Larger than 5 MB.": "स्टोरेज प्रबंधित करें पर टैप करें और 5 एमबी से बड़ा चुनें।",
    "Delete only forwarded videos. Your own photos stay safe.": "केवल अग्रेषित वीडियो हटाएँ. आपकी अपनी तस्वीरें सुरक्षित रहें.",
    "Manage storage": "भंडारण का प्रबंधन करें",
    "Larger than 5 MB": "5 एमबी से बड़ा",
    "Good morning video": "सुप्रभात वीडियो",
    "Forwarded video": "वीडियो फॉरवर्ड किया गया",
    "Delete selected": "चयनित हटाएँ",
    "booking a ride": "सवारी बुक करना",
    "Check the pickup spot and the fare before you tap Book.": "बुक करें पर टैप करने से पहले पिकअप स्थान और किराया जांच लें।",
    "Match the last four digits of the number plate.": "नंबर प्लेट के अंतिम चार अंकों का मिलान करें।",
    "Share the 4-digit PIN only after you sit inside.": "अंदर बैठने के बाद ही 4 अंकों का पिन साझा करें।",
    "Auto": "ऑटो",
    "Pickup": "पिकअप",
    "Main gate": "मुख्य द्वार",
    "Number plate ends with": "नंबर प्लेट के साथ समाप्त होता है",
    "Ride PIN": "सवारी पिन",
    "Book": "किताब",
    "checking before you pay": "भुगतान करने से पहले जाँच करना",
    "Your UPI PIN only sends money. It never receives money.": "आपका UPI पिन केवल पैसे भेजता है। इसे कभी भी धन की प्राप्ति नहीं होती है।",
    "Read the receiver's name and the amount at the top.": "शीर्ष पर प्राप्तकर्ता का नाम और राशि पढ़ें।",
    "Never enter your PIN to get a refund or a prize.": "रिफंड या पुरस्कार पाने के लिए कभी भी अपना पिन दर्ज न करें।",
    "Paying": "भुगतान करना",
    "Sunita Sharma": "सुनीता शर्मा",
    "Enter UPI PIN": "यूपीआई पिन दर्ज करें",
    "PIN sends money only — never to receive.": "पिन केवल पैसे भेजता है - प्राप्त करने के लिए कभी नहीं।",
    "help from your lock screen": "आपकी लॉक स्क्रीन से सहायता",
    "Open Settings and search for Emergency information.": "सेटिंग्स खोलें और आपातकालीन जानकारी खोजें।",
    "Add your blood group and two family phone numbers.": "अपना रक्त समूह और दो पारिवारिक फ़ोन नंबर जोड़ें।",
    "Anyone can see this from the lock screen without your password.": "इसे कोई भी आपके पासवर्ड के बिना लॉक स्क्रीन से देख सकता है।",
    "Emergency information": "आपातकालीन सूचना",
    "Blood group": "रक्त समूह",
    "Daughter": "बेटी",
    "Call": "बुलाओ",
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
    /* New lesson example screens */
    "typing with your voice": "আপনার ভয়েস দিয়ে টাইপ করা",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "কীবোর্ডের ছোট মাইক্রোফোনে ট্যাপ করুন, সবুজ WhatsApp বোতামে নয়।",
    "Wait for the chime, then speak your message at your normal speed.": "ঘণ্টার জন্য অপেক্ষা করুন, তারপর আপনার স্বাভাবিক গতিতে আপনার বার্তা বলুন।",
    "Read the words on screen before you tap Send.": "আপনি পাঠান আলতো চাপার আগে স্ক্রিনে থাকা শব্দগুলি পড়ুন৷",
    "Your message": "আপনার বার্তা",
    "Hello beta, I reached home safely.": "হ্যালো বেটা, আমি নিরাপদে বাড়িতে পৌঁছেছি।",
    "Tap the microphone and speak": "মাইক্রোফোনে আলতো চাপুন এবং কথা বলুন",
    "a quiet night": "একটি শান্ত রাত",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "সেটিংস খুলুন, তারপরে শব্দ বা মোডগুলি খুলুন এবং বিরক্ত করবেন না চালু করুন।",
    "Allow calls from Favourites so your family can still reach you.": "পছন্দের থেকে কল করার অনুমতি দিন যাতে আপনার পরিবার এখনও আপনার সাথে যোগাযোগ করতে পারে।",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "এটি 10 PM থেকে 7 AM পর্যন্ত সেট করুন — স্প্যাম সকাল পর্যন্ত শান্ত থাকে।",
    "Do Not Disturb": "বিরক্ত করবেন না",
    "Allowed calls": "অনুমোদিত কল",
    "Favourites": "প্রিয়",
    "Quiet hours": "শান্ত ঘন্টা",
    "sharing where you are": "আপনি যেখানে আছেন শেয়ার করছেন",
    "Open the family chat on WhatsApp.": "হোয়াটসঅ্যাপে পারিবারিক চ্যাট খুলুন।",
    "Tap the paperclip or plus, then choose Location.": "পেপারক্লিপ বা প্লাস আলতো চাপুন, তারপরে অবস্থান নির্বাচন করুন৷",
    "Choose Share live location for 1 hour, then tap Send.": "1 ঘন্টার জন্য শেয়ার লাইভ অবস্থান চয়ন করুন, তারপরে পাঠান আলতো চাপুন।",
    "Family chat": "পারিবারিক আড্ডা",
    "Live location · 1 hour": "লাইভ অবস্থান · 1 ঘন্টা",
    "Share live location": "লাইভ অবস্থান শেয়ার করুন",
    "Stop sharing": "শেয়ার করা বন্ধ করুন",
    "asking AI a question": "এআইকে একটি প্রশ্ন জিজ্ঞাসা করছে",
    "Type or speak your question in your own words.": "আপনার নিজের কথায় আপনার প্রশ্ন টাইপ করুন বা বলুন।",
    "Read the answer slowly. AI can be wrong.": "ধীরে ধীরে উত্তর পড়ুন। এআই ভুল হতে পারে।",
    "Always check with your doctor or the office before acting.": "অভিনয় করার আগে সর্বদা আপনার ডাক্তার বা অফিসের সাথে চেক করুন।",
    "You asked": "আপনি জিজ্ঞাসা করেছেন",
    "What are the side effects of amlodipine?": "Amlodipine এর পার্শ্বপ্রতিক্রিয়া কি কি?",
    "AI helper": "এআই সাহায্যকারী",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "সাধারণ পার্শ্ব প্রতিক্রিয়াগুলির মধ্যে রয়েছে গোড়ালি ফুলে যাওয়া এবং ক্লান্ত বোধ করা। আপনার ডাক্তারের সাথে চেক করুন.",
    "Check with your doctor before changing any medicine.": "কোনো ওষুধ পরিবর্তন করার আগে আপনার ডাক্তারের সাথে যোগাযোগ করুন।",
    "a voice that sounds like family": "একটি ভয়েস যা পরিবারের মত শোনাচ্ছে",
    "A copied voice can sound exactly like your son or daughter.": "একটি কপি করা ভয়েস ঠিক আপনার ছেলে বা মেয়ের মত শোনাতে পারে।",
    "Hang up and call their saved number yourself.": "ফোন বন্ধ করুন এবং তাদের সংরক্ষিত নম্বরে কল করুন।",
    "Agree on a family code word that only you know.": "একটি পারিবারিক কোড শব্দে সম্মত হন যা শুধুমাত্র আপনি জানেন।",
    "Son": "পুত্র",
    "Voice can be copied": "ভয়েস কপি করা যাবে",
    "Hang up and call back": "হ্যাং আপ এবং কল ব্যাক",
    "clearing old forwards": "পুরানো ফরোয়ার্ড সাফ করা",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp খুলুন, তারপর সেটিংস, তারপর স্টোরেজ এবং ডেটা।",
    "Tap Manage storage and choose Larger than 5 MB.": "সঞ্চয়স্থান পরিচালনা করুন আলতো চাপুন এবং 5 MB এর থেকে বড় নির্বাচন করুন৷",
    "Delete only forwarded videos. Your own photos stay safe.": "শুধুমাত্র ফরোয়ার্ড করা ভিডিও মুছুন। আপনার নিজের ছবি নিরাপদ থাকুন.",
    "Manage storage": "স্টোরেজ পরিচালনা করুন",
    "Larger than 5 MB": "5 MB এর থেকে বড়",
    "Good morning video": "শুভ সকাল ভিডিও",
    "Forwarded video": "ফরোয়ার্ড করা ভিডিও",
    "Delete selected": "নির্বাচিত মুছুন",
    "booking a ride": "একটি রাইড বুকিং",
    "Check the pickup spot and the fare before you tap Book.": "বুক-এ ট্যাপ করার আগে পিকআপ স্পট এবং ভাড়া চেক করুন।",
    "Match the last four digits of the number plate.": "নম্বর প্লেটের শেষ চারটি সংখ্যা মিলিয়ে নিন।",
    "Share the 4-digit PIN only after you sit inside.": "আপনি ভিতরে বসার পরেই 4-সংখ্যার পিন শেয়ার করুন।",
    "Auto": "অটো",
    "Pickup": "পিকআপ",
    "Main gate": "প্রধান ফটক",
    "Number plate ends with": "নম্বর প্লেট দিয়ে শেষ হয়",
    "Ride PIN": "পিন চালান",
    "Book": "বই",
    "checking before you pay": "আপনি অর্থ প্রদানের আগে চেক করুন",
    "Your UPI PIN only sends money. It never receives money.": "আপনার UPI পিন শুধুমাত্র টাকা পাঠায়। এটি কখনই টাকা পায় না।",
    "Read the receiver's name and the amount at the top.": "প্রাপকের নাম এবং শীর্ষে পরিমাণ পড়ুন।",
    "Never enter your PIN to get a refund or a prize.": "ফেরত বা পুরস্কার পেতে আপনার পিন লিখবেন না।",
    "Paying": "পরিশোধ করছে",
    "Sunita Sharma": "সুনিতা শর্মা",
    "Enter UPI PIN": "UPI পিন লিখুন",
    "PIN sends money only — never to receive.": "পিন শুধুমাত্র টাকা পাঠায় — কখনই গ্রহণ করবে না।",
    "help from your lock screen": "আপনার লক স্ক্রীন থেকে সাহায্য",
    "Open Settings and search for Emergency information.": "সেটিংস খুলুন এবং জরুরী তথ্য অনুসন্ধান করুন।",
    "Add your blood group and two family phone numbers.": "আপনার রক্তের গ্রুপ এবং দুটি পরিবারের ফোন নম্বর যোগ করুন।",
    "Anyone can see this from the lock screen without your password.": "আপনার পাসওয়ার্ড ছাড়াই লক স্ক্রীন থেকে যে কেউ এটি দেখতে পারবে।",
    "Emergency information": "জরুরী তথ্য",
    "Blood group": "রক্তের গ্রুপ",
    "Daughter": "কন্যা",
    "Call": "কল",
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
    /* New lesson example screens */
    "typing with your voice": "உங்கள் குரலால் தட்டச்சு செய்கிறேன்",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "கீபோர்டில் உள்ள சிறிய மைக்ரோஃபோனைத் தட்டவும், பச்சை வாட்ஸ்அப் பொத்தானைத் தட்டவும்.",
    "Wait for the chime, then speak your message at your normal speed.": "மணி ஒலிக்கும் வரை காத்திருங்கள், பின்னர் உங்கள் சாதாரண வேகத்தில் உங்கள் செய்தியைப் பேசுங்கள்.",
    "Read the words on screen before you tap Send.": "அனுப்பு என்பதைத் தட்டுவதற்கு முன் திரையில் உள்ள வார்த்தைகளைப் படிக்கவும்.",
    "Your message": "உங்கள் செய்தி",
    "Hello beta, I reached home safely.": "வணக்கம் பீட்டா, நான் பத்திரமாக வீட்டை அடைந்தேன்.",
    "Tap the microphone and speak": "மைக்ரோஃபோனைத் தட்டி பேசவும்",
    "a quiet night": "ஒரு அமைதியான இரவு",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "அமைப்புகளைத் திறந்து, பின்னர் ஒலி அல்லது முறைகளைத் திறந்து, தொந்தரவு செய்ய வேண்டாம் என்பதை இயக்கவும்.",
    "Allow calls from Favourites so your family can still reach you.": "பிடித்தவர்களிடமிருந்து அழைப்புகளை அனுமதிப்பதன் மூலம் உங்கள் குடும்பத்தினர் உங்களைத் தொடர்புகொள்ளலாம்.",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "இரவு 10 மணி முதல் காலை 7 மணி வரை அமைக்கவும் - காலை வரை ஸ்பேம் அமைதியாக இருக்கும்.",
    "Do Not Disturb": "தொந்தரவு செய்யாதே",
    "Allowed calls": "அனுமதிக்கப்பட்ட அழைப்புகள்",
    "Favourites": "பிடித்தவை",
    "Quiet hours": "அமைதியான நேரம்",
    "sharing where you are": "நீங்கள் இருக்கும் இடத்தைப் பகிர்ந்து கொள்கிறீர்கள்",
    "Open the family chat on WhatsApp.": "வாட்ஸ்அப்பில் குடும்ப அரட்டையைத் திறக்கவும்.",
    "Tap the paperclip or plus, then choose Location.": "காகிதக் கிளிப் அல்லது பிளஸைத் தட்டவும், பின்னர் இருப்பிடத்தைத் தேர்வு செய்யவும்.",
    "Choose Share live location for 1 hour, then tap Send.": "1 மணிநேரம் நேரலை இருப்பிடத்தைப் பகிர் என்பதைத் தேர்வுசெய்து, அனுப்பு என்பதைத் தட்டவும்.",
    "Family chat": "குடும்ப அரட்டை",
    "Live location · 1 hour": "நேரலை இடம் · 1 மணிநேரம்",
    "Share live location": "நேரலை இருப்பிடத்தைப் பகிரவும்",
    "Stop sharing": "பகிர்வதை நிறுத்துங்கள்",
    "asking AI a question": "AI யிடம் ஒரு கேள்வி கேட்கிறது",
    "Type or speak your question in your own words.": "உங்கள் கேள்வியை உங்கள் சொந்த வார்த்தைகளில் தட்டச்சு செய்யவும் அல்லது பேசவும்.",
    "Read the answer slowly. AI can be wrong.": "பதிலை மெதுவாகப் படியுங்கள். AI தவறாக இருக்கலாம்.",
    "Always check with your doctor or the office before acting.": "செயல்படுவதற்கு முன் எப்போதும் உங்கள் மருத்துவர் அல்லது அலுவலகத்தை சரிபார்க்கவும்.",
    "You asked": "நீங்கள் கேட்டீர்கள்",
    "What are the side effects of amlodipine?": "அம்லோடிபைனின் பக்க விளைவுகள் என்ன?",
    "AI helper": "AI உதவியாளர்",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "பொதுவான பக்க விளைவுகளில் கணுக்கால் வீக்கம் மற்றும் சோர்வாக உணர்கிறேன். தயவுசெய்து உங்கள் மருத்துவரிடம் சரிபார்க்கவும்.",
    "Check with your doctor before changing any medicine.": "எந்த மருந்தையும் மாற்றுவதற்கு முன் உங்கள் மருத்துவரை அணுகவும்.",
    "a voice that sounds like family": "குடும்பம் போல ஒரு குரல்",
    "A copied voice can sound exactly like your son or daughter.": "நகலெடுக்கப்பட்ட குரல் உங்கள் மகன் அல்லது மகளைப் போலவே ஒலிக்கும்.",
    "Hang up and call their saved number yourself.": "அவர்களின் சேமித்த எண்ணை நீங்களே அழைக்கவும்.",
    "Agree on a family code word that only you know.": "உங்களுக்கு மட்டுமே தெரிந்த குடும்பக் குறியீட்டு வார்த்தைக்கு உடன்படுங்கள்.",
    "Son": "மகன்",
    "Voice can be copied": "குரலை நகலெடுக்க முடியும்",
    "Hang up and call back": "நிறுத்திவிட்டு மீண்டும் அழைக்கவும்",
    "clearing old forwards": "பழைய முன்னோக்கிகளை அழிக்கிறது",
    "Open WhatsApp, then Settings, then Storage and data.": "வாட்ஸ்அப்பைத் திறக்கவும், பின்னர் அமைப்புகள், பின்னர் சேமிப்பு மற்றும் தரவு.",
    "Tap Manage storage and choose Larger than 5 MB.": "சேமிப்பகத்தை நிர்வகி என்பதைத் தட்டி, 5 எம்பியை விட பெரியதைத் தேர்ந்தெடுக்கவும்.",
    "Delete only forwarded videos. Your own photos stay safe.": "அனுப்பப்பட்ட வீடியோக்களை மட்டும் நீக்கவும். உங்கள் சொந்த புகைப்படங்கள் பாதுகாப்பாக இருக்கும்.",
    "Manage storage": "சேமிப்பகத்தை நிர்வகிக்கவும்",
    "Larger than 5 MB": "5 எம்பியை விட பெரியது",
    "Good morning video": "காலை வணக்கம் காணொளி",
    "Forwarded video": "அனுப்பப்பட்ட வீடியோ",
    "Delete selected": "தேர்ந்தெடுக்கப்பட்டதை நீக்கு",
    "booking a ride": "ஒரு சவாரி முன்பதிவு",
    "Check the pickup spot and the fare before you tap Book.": "முன்பதிவைத் தட்டுவதற்கு முன், பிக்அப் இடத்தையும் கட்டணத்தையும் சரிபார்க்கவும்.",
    "Match the last four digits of the number plate.": "நம்பர் பிளேட்டின் கடைசி நான்கு இலக்கங்களைப் பொருத்தவும்.",
    "Share the 4-digit PIN only after you sit inside.": "உள்ளே அமர்ந்த பிறகுதான் 4 இலக்க பின்னைப் பகிரவும்.",
    "Auto": "ஆட்டோ",
    "Pickup": "பிக்கப்",
    "Main gate": "பிரதான வாயில்",
    "Number plate ends with": "எண் தட்டு முடிவடைகிறது",
    "Ride PIN": "சவாரி பின்",
    "Book": "புத்தகம்",
    "checking before you pay": "நீங்கள் பணம் செலுத்துவதற்கு முன் சரிபார்க்கவும்",
    "Your UPI PIN only sends money. It never receives money.": "உங்கள் UPI பின் பணத்தை மட்டுமே அனுப்பும். அது ஒருபோதும் பணத்தைப் பெறுவதில்லை.",
    "Read the receiver's name and the amount at the top.": "பெறுநரின் பெயரையும் மேலே உள்ள தொகையையும் படிக்கவும்.",
    "Never enter your PIN to get a refund or a prize.": "பணத்தைத் திரும்பப்பெற அல்லது பரிசைப் பெற உங்கள் பின்னை ஒருபோதும் உள்ளிடாதீர்கள்.",
    "Paying": "செலுத்துதல்",
    "Sunita Sharma": "சுனிதா சர்மா",
    "Enter UPI PIN": "UPI பின்னை உள்ளிடவும்",
    "PIN sends money only — never to receive.": "பின் பணத்தை மட்டுமே அனுப்புகிறது - ஒருபோதும் பெறாது.",
    "help from your lock screen": "உங்கள் பூட்டு திரையில் இருந்து உதவி",
    "Open Settings and search for Emergency information.": "அமைப்புகளைத் திறந்து அவசரத் தகவலைத் தேடவும்.",
    "Add your blood group and two family phone numbers.": "உங்கள் இரத்தக் குழுவையும் இரண்டு குடும்ப தொலைபேசி எண்களையும் சேர்க்கவும்.",
    "Anyone can see this from the lock screen without your password.": "உங்கள் கடவுச்சொல் இல்லாமல் பூட்டுத் திரையில் இருந்து எவரும் இதைப் பார்க்கலாம்.",
    "Emergency information": "அவசர தகவல்",
    "Blood group": "இரத்தக் குழு",
    "Daughter": "மகள்",
    "Call": "அழைக்கவும்",
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
    /* New lesson example screens */
    "typing with your voice": "మీ వాయిస్‌తో టైప్ చేస్తున్నాను",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "కీబోర్డ్‌లోని చిన్న మైక్రోఫోన్‌ను నొక్కండి, ఆకుపచ్చ వాట్సాప్ బటన్‌ను కాదు.",
    "Wait for the chime, then speak your message at your normal speed.": "చైమ్ కోసం వేచి ఉండండి, ఆపై మీ సాధారణ వేగంతో మీ సందేశాన్ని మాట్లాడండి.",
    "Read the words on screen before you tap Send.": "మీరు పంపు నొక్కండి ముందు స్క్రీన్‌పై ఉన్న పదాలను చదవండి.",
    "Your message": "మీ సందేశం",
    "Hello beta, I reached home safely.": "హలో బీటా, నేను సురక్షితంగా ఇంటికి చేరుకున్నాను.",
    "Tap the microphone and speak": "మైక్రోఫోన్‌ని నొక్కి, మాట్లాడండి",
    "a quiet night": "ఒక నిశ్శబ్ద రాత్రి",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "సెట్టింగ్‌లు, ఆపై సౌండ్ లేదా మోడ్‌లను తెరిచి, అంతరాయం కలిగించవద్దుని ఆన్ చేయండి.",
    "Allow calls from Favourites so your family can still reach you.": "ఇష్టమైన వాటి నుండి కాల్‌లను అనుమతించండి, తద్వారా మీ కుటుంబం ఇప్పటికీ మిమ్మల్ని సంప్రదించగలరు.",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "10 PM నుండి 7 AM వరకు సెట్ చేయండి - స్పామ్ ఉదయం వరకు నిశ్శబ్దంగా ఉంటుంది.",
    "Do Not Disturb": "డిస్టర్బ్ చేయవద్దు",
    "Allowed calls": "అనుమతించబడిన కాల్స్",
    "Favourites": "ఇష్టమైనవి",
    "Quiet hours": "నిశ్శబ్ద గంటలు",
    "sharing where you are": "మీరు ఎక్కడ ఉన్నారో పంచుకోవడం",
    "Open the family chat on WhatsApp.": "వాట్సాప్‌లో ఫ్యామిలీ చాట్‌ని తెరవండి.",
    "Tap the paperclip or plus, then choose Location.": "పేపర్‌క్లిప్ లేదా ప్లస్‌ని నొక్కండి, ఆపై స్థానాన్ని ఎంచుకోండి.",
    "Choose Share live location for 1 hour, then tap Send.": "1 గంట పాటు లైవ్ లొకేషన్ షేర్ చేయి ఎంచుకోండి, ఆపై పంపు నొక్కండి.",
    "Family chat": "కుటుంబ చాట్",
    "Live location · 1 hour": "ప్రత్యక్ష స్థానం · 1 గంట",
    "Share live location": "ప్రత్యక్ష స్థానాన్ని భాగస్వామ్యం చేయండి",
    "Stop sharing": "భాగస్వామ్యం చేయడం ఆపివేయండి",
    "asking AI a question": "AIని ఒక ప్రశ్న అడగడం",
    "Type or speak your question in your own words.": "మీ ప్రశ్నను మీ స్వంత మాటల్లో టైప్ చేయండి లేదా మాట్లాడండి.",
    "Read the answer slowly. AI can be wrong.": "సమాధానం నెమ్మదిగా చదవండి. AI తప్పు కావచ్చు.",
    "Always check with your doctor or the office before acting.": "నటించే ముందు ఎల్లప్పుడూ మీ వైద్యుడిని లేదా కార్యాలయాన్ని సంప్రదించండి.",
    "You asked": "మీరు అడిగారు",
    "What are the side effects of amlodipine?": "ఆమ్లోడిపైన్ (Amlodipine) యొక్క దుష్ప్రభావాలు ఏమిటి?",
    "AI helper": "AI సహాయకుడు",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "సాధారణ దుష్ప్రభావాలు చీలమండ వాపు మరియు అలసటతో ఉంటాయి. దయచేసి మీ వైద్యుడిని సంప్రదించండి.",
    "Check with your doctor before changing any medicine.": "ఏదైనా ఔషధం మార్చడానికి ముందు మీ వైద్యుడిని సంప్రదించండి.",
    "a voice that sounds like family": "కుటుంబంలా అనిపించే స్వరం",
    "A copied voice can sound exactly like your son or daughter.": "కాపీ చేయబడిన వాయిస్ ఖచ్చితంగా మీ కొడుకు లేదా కుమార్తె లాగా ఉంటుంది.",
    "Hang up and call their saved number yourself.": "ఫోన్ ముగించి, వారి సేవ్ చేసిన నంబర్‌కు మీరే కాల్ చేయండి.",
    "Agree on a family code word that only you know.": "మీకు మాత్రమే తెలిసిన కుటుంబ కోడ్ పదాన్ని అంగీకరించండి.",
    "Son": "కొడుకు",
    "Voice can be copied": "వాయిస్‌ని కాపీ చేసుకోవచ్చు",
    "Hang up and call back": "ఫోన్ ముగించి, తిరిగి కాల్ చేయండి",
    "clearing old forwards": "పాత ఫార్వర్డ్‌లను క్లియర్ చేయడం",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp తెరవండి, ఆపై సెట్టింగ్‌లు, ఆపై నిల్వ మరియు డేటా.",
    "Tap Manage storage and choose Larger than 5 MB.": "నిల్వను నిర్వహించు నొక్కండి మరియు 5 MB కంటే పెద్దదిగా ఎంచుకోండి.",
    "Delete only forwarded videos. Your own photos stay safe.": "ఫార్వార్డ్ చేసిన వీడియోలను మాత్రమే తొలగించండి. మీ స్వంత ఫోటోలు సురక్షితంగా ఉంటాయి.",
    "Manage storage": "నిల్వను నిర్వహించండి",
    "Larger than 5 MB": "5 MB కంటే పెద్దది",
    "Good morning video": "శుభోదయం వీడియో",
    "Forwarded video": "ఫార్వార్డ్ చేయబడిన వీడియో",
    "Delete selected": "ఎంచుకున్న వాటిని తొలగించండి",
    "booking a ride": "రైడ్ బుకింగ్",
    "Check the pickup spot and the fare before you tap Book.": "మీరు బుక్‌ని నొక్కే ముందు పికప్ స్పాట్ మరియు ఛార్జీని తనిఖీ చేయండి.",
    "Match the last four digits of the number plate.": "నంబర్ ప్లేట్ యొక్క చివరి నాలుగు అంకెలను సరిపోల్చండి.",
    "Share the 4-digit PIN only after you sit inside.": "మీరు లోపల కూర్చున్న తర్వాత మాత్రమే 4 అంకెల పిన్‌ను షేర్ చేయండి.",
    "Auto": "ఆటో",
    "Pickup": "పికప్",
    "Main gate": "ప్రధాన ద్వారం",
    "Number plate ends with": "నంబర్ ప్లేట్‌తో ముగుస్తుంది",
    "Ride PIN": "రైడ్ పిన్",
    "Book": "పుస్తకం",
    "checking before you pay": "మీరు చెల్లించే ముందు తనిఖీ చేయండి",
    "Your UPI PIN only sends money. It never receives money.": "మీ UPI పిన్ డబ్బును మాత్రమే పంపుతుంది. ఇది ఎప్పుడూ డబ్బు అందుకోదు.",
    "Read the receiver's name and the amount at the top.": "రిసీవర్ పేరు మరియు ఎగువన ఉన్న మొత్తాన్ని చదవండి.",
    "Never enter your PIN to get a refund or a prize.": "వాపసు లేదా బహుమతిని పొందడానికి మీ PINని ఎప్పుడూ నమోదు చేయవద్దు.",
    "Paying": "చెల్లిస్తోంది",
    "Sunita Sharma": "సునీతా శర్మ",
    "Enter UPI PIN": "UPI పిన్‌ని నమోదు చేయండి",
    "PIN sends money only — never to receive.": "పిన్ డబ్బును మాత్రమే పంపుతుంది - ఎప్పటికీ స్వీకరించదు.",
    "help from your lock screen": "మీ లాక్ స్క్రీన్ నుండి సహాయం",
    "Open Settings and search for Emergency information.": "సెట్టింగ్‌లను తెరిచి, అత్యవసర సమాచారం కోసం శోధించండి.",
    "Add your blood group and two family phone numbers.": "మీ బ్లడ్ గ్రూప్ మరియు రెండు కుటుంబ ఫోన్ నంబర్‌లను జోడించండి.",
    "Anyone can see this from the lock screen without your password.": "మీ పాస్‌వర్డ్ లేకుండా ఎవరైనా లాక్ స్క్రీన్ నుండి దీన్ని చూడగలరు.",
    "Emergency information": "అత్యవసర సమాచారం",
    "Blood group": "రక్త సమూహం",
    "Daughter": "కూతురు",
    "Call": "కాల్ చేయండి",
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
    /* New lesson example screens */
    "typing with your voice": "तुमच्या आवाजाने टायपिंग",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "कीबोर्डवरील लहान मायक्रोफोनवर टॅप करा, हिरव्या WhatsApp बटणावर नाही.",
    "Wait for the chime, then speak your message at your normal speed.": "चाइमची प्रतीक्षा करा, नंतर तुमचा संदेश तुमच्या सामान्य वेगाने बोला.",
    "Read the words on screen before you tap Send.": "पाठवा वर टॅप करण्यापूर्वी स्क्रीनवरील शब्द वाचा.",
    "Your message": "तुमचा संदेश",
    "Hello beta, I reached home safely.": "हॅलो बेटा, मी सुखरूप घरी पोहोचलो.",
    "Tap the microphone and speak": "मायक्रोफोनवर टॅप करा आणि बोला",
    "a quiet night": "एक शांत रात्र",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "सेटिंग्ज उघडा, नंतर ध्वनी किंवा मोड, आणि व्यत्यय आणू नका चालू करा.",
    "Allow calls from Favourites so your family can still reach you.": "आवडत्या व्यक्तींकडून कॉल करण्यास अनुमती द्या जेणेकरून तुमचे कुटुंब तुमच्यापर्यंत पोहोचू शकेल.",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "10 PM ते 7 AM पर्यंत सेट करा — स्पॅम सकाळपर्यंत शांत राहतो.",
    "Do Not Disturb": "डू नॉट डिस्टर्ब",
    "Allowed calls": "परवानगी कॉल",
    "Favourites": "आवडी",
    "Quiet hours": "शांत तास",
    "sharing where you are": "तुम्ही कुठे आहात ते शेअर करत आहे",
    "Open the family chat on WhatsApp.": "व्हॉट्सॲपवर फॅमिली चॅट उघडा.",
    "Tap the paperclip or plus, then choose Location.": "पेपरक्लिप किंवा प्लसवर टॅप करा, नंतर स्थान निवडा.",
    "Choose Share live location for 1 hour, then tap Send.": "1 तासासाठी लाइव्ह स्थान शेअर करा निवडा, नंतर पाठवा वर टॅप करा.",
    "Family chat": "कौटुंबिक गप्पा",
    "Live location · 1 hour": "थेट स्थान · 1 तास",
    "Share live location": "थेट स्थान सामायिक करा",
    "Stop sharing": "शेअर करणे थांबवा",
    "asking AI a question": "AI ला प्रश्न विचारत आहे",
    "Type or speak your question in your own words.": "तुमचा प्रश्न तुमच्या स्वतःच्या शब्दात टाइप करा किंवा बोला.",
    "Read the answer slowly. AI can be wrong.": "उत्तर हळूहळू वाचा. AI चुकीचे असू शकते.",
    "Always check with your doctor or the office before acting.": "कृती करण्यापूर्वी नेहमी आपल्या डॉक्टरांशी किंवा कार्यालयाशी संपर्क साधा.",
    "You asked": "तुम्ही विचारले",
    "What are the side effects of amlodipine?": "Amlodipineचा मूत्रपिंडांवरील परिणाम काय आहे?",
    "AI helper": "एआय मदतनीस",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "सामान्य दुष्परिणामांमध्ये घोट्याला सूज येणे आणि थकवा जाणवणे यांचा समावेश होतो. कृपया तुमच्या डॉक्टरांकडे तपासा.",
    "Check with your doctor before changing any medicine.": "कोणतेही औषध बदलण्यापूर्वी तुमच्या डॉक्टरांचा सल्ला घ्या.",
    "a voice that sounds like family": "कुटुंबासारखा आवाज",
    "A copied voice can sound exactly like your son or daughter.": "कॉपी केलेला आवाज अगदी तुमच्या मुलासारखा किंवा मुलीसारखा आवाज करू शकतो.",
    "Hang up and call their saved number yourself.": "हँग करा आणि त्यांच्या सेव्ह केलेल्या नंबरवर स्वतः कॉल करा.",
    "Agree on a family code word that only you know.": "फक्त तुम्हाला माहीत असलेल्या कौटुंबिक कोड शब्दाशी सहमत.",
    "Son": "मुलगा",
    "Voice can be copied": "आवाज कॉपी केला जाऊ शकतो",
    "Hang up and call back": "हँग करा आणि परत कॉल करा",
    "clearing old forwards": "जुने फॉरवर्ड साफ करणे",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp उघडा, नंतर सेटिंग्ज, नंतर स्टोरेज आणि डेटा.",
    "Tap Manage storage and choose Larger than 5 MB.": "स्टोरेज व्यवस्थापित करा वर टॅप करा आणि 5 MB पेक्षा मोठे निवडा.",
    "Delete only forwarded videos. Your own photos stay safe.": "फक्त फॉरवर्ड केलेले व्हिडिओ हटवा. तुमचे स्वतःचे फोटो सुरक्षित राहतात.",
    "Manage storage": "स्टोरेज व्यवस्थापित करा",
    "Larger than 5 MB": "5 MB पेक्षा मोठे",
    "Good morning video": "सुप्रभात व्हिडिओ",
    "Forwarded video": "व्हिडिओ फॉरवर्ड केला",
    "Delete selected": "निवडलेले हटवा",
    "booking a ride": "राइड बुक करत आहे",
    "Check the pickup spot and the fare before you tap Book.": "तुम्ही बुक वर टॅप करण्यापूर्वी पिकअपचे ठिकाण आणि भाडे तपासा.",
    "Match the last four digits of the number plate.": "नंबर प्लेटचे शेवटचे चार अंक जुळवा.",
    "Share the 4-digit PIN only after you sit inside.": "तुम्ही आत बसल्यानंतरच 4-अंकी पिन शेअर करा.",
    "Auto": "ऑटो",
    "Pickup": "पिकअप",
    "Main gate": "मुख्य गेट",
    "Number plate ends with": "नंबर प्लेट ने समाप्त होते",
    "Ride PIN": "राइड पिन",
    "Book": "पुस्तक",
    "checking before you pay": "पैसे देण्यापूर्वी तपासत आहे",
    "Your UPI PIN only sends money. It never receives money.": "तुमचा UPI पिन फक्त पैसे पाठवतो. त्यातून कधीच पैसे मिळत नाहीत.",
    "Read the receiver's name and the amount at the top.": "प्राप्तकर्त्याचे नाव आणि शीर्षस्थानी असलेली रक्कम वाचा.",
    "Never enter your PIN to get a refund or a prize.": "परतावा किंवा बक्षीस मिळवण्यासाठी तुमचा पिन कधीही एंटर करू नका.",
    "Paying": "भरत आहे",
    "Sunita Sharma": "सुनीता शर्मा",
    "Enter UPI PIN": "UPI पिन टाका",
    "PIN sends money only — never to receive.": "पिन फक्त पैसे पाठवतो — कधीही प्राप्त होणार नाही.",
    "help from your lock screen": "तुमच्या लॉक स्क्रीनवरून मदत",
    "Open Settings and search for Emergency information.": "सेटिंग्ज उघडा आणि आपत्कालीन माहिती शोधा.",
    "Add your blood group and two family phone numbers.": "तुमचा रक्तगट आणि दोन फॅमिली फोन नंबर जोडा.",
    "Anyone can see this from the lock screen without your password.": "तुमच्या पासवर्डशिवाय लॉक स्क्रीनवरून कोणीही हे पाहू शकते.",
    "Emergency information": "आपत्कालीन माहिती",
    "Blood group": "रक्त गट",
    "Daughter": "कन्या",
    "Call": "कॉल करा",
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
    /* New lesson example screens */
    "typing with your voice": "તમારા અવાજ સાથે ટાઈપ કરો",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "કીબોર્ડ પર નાના માઇક્રોફોનને ટેપ કરો, લીલા WhatsApp બટનને નહીં.",
    "Wait for the chime, then speak your message at your normal speed.": "ઘંટડીની રાહ જુઓ, પછી તમારો સંદેશ તમારી સામાન્ય ઝડપે બોલો.",
    "Read the words on screen before you tap Send.": "તમે મોકલો પર ટેપ કરો તે પહેલાં સ્ક્રીન પરના શબ્દો વાંચો.",
    "Your message": "તમારો સંદેશ",
    "Hello beta, I reached home safely.": "હેલો બેટા, હું સુરક્ષિત ઘરે પહોંચી ગયો.",
    "Tap the microphone and speak": "માઇક્રોફોનને ટેપ કરો અને બોલો",
    "a quiet night": "એક શાંત રાત",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "સેટિંગ્સ ખોલો, પછી સાઉન્ડ અથવા મોડ્સ, અને ખલેલ પાડશો નહીં ચાલુ કરો.",
    "Allow calls from Favourites so your family can still reach you.": "મનપસંદના કૉલ્સને મંજૂરી આપો જેથી તમારું કુટુંબ હજી પણ તમારા સુધી પહોંચી શકે.",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "તેને 10 PM થી 7 AM સુધી સેટ કરો — સ્પામ સવાર સુધી શાંત રહે છે.",
    "Do Not Disturb": "ડુ નોટ ડિસ્ટર્બ",
    "Allowed calls": "મંજૂર કોલ્સ",
    "Favourites": "મનપસંદ",
    "Quiet hours": "શાંત કલાકો",
    "sharing where you are": "તમે જ્યાં છો ત્યાં શેર કરો",
    "Open the family chat on WhatsApp.": "વોટ્સએપ પર ફેમિલી ચેટ ખોલો.",
    "Tap the paperclip or plus, then choose Location.": "પેપરક્લિપ અથવા પ્લસ પર ટૅપ કરો, પછી સ્થાન પસંદ કરો.",
    "Choose Share live location for 1 hour, then tap Send.": "1 કલાક માટે લાઇવ સ્થાન શેર કરો પસંદ કરો, પછી મોકલો પર ટેપ કરો.",
    "Family chat": "કૌટુંબિક ચેટ",
    "Live location · 1 hour": "લાઇવ સ્થાન · 1 કલાક",
    "Share live location": "લાઈવ લોકેશન શેર કરો",
    "Stop sharing": "શેર કરવાનું બંધ કરો",
    "asking AI a question": "AI ને પ્રશ્ન પૂછો",
    "Type or speak your question in your own words.": "તમારો પ્રશ્ન તમારા પોતાના શબ્દોમાં લખો અથવા બોલો.",
    "Read the answer slowly. AI can be wrong.": "જવાબ ધીમે ધીમે વાંચો. AI ખોટું હોઈ શકે છે.",
    "Always check with your doctor or the office before acting.": "કાર્ય કરતા પહેલા હંમેશા તમારા ડૉક્ટર અથવા ઓફિસ સાથે તપાસ કરો.",
    "You asked": "તમે પૂછ્યું",
    "What are the side effects of amlodipine?": "Amlodipine ની આડ અસરો શું છે?",
    "AI helper": "AI મદદગાર",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "સામાન્ય આડઅસરોમાં પગની ઘૂંટીમાં સોજો અને થાકનો સમાવેશ થાય છે. કૃપા કરીને તમારા ડૉક્ટર સાથે તપાસ કરો.",
    "Check with your doctor before changing any medicine.": "કોઈપણ દવા બદલતા પહેલા તમારા ડૉક્ટર સાથે તપાસ કરો.",
    "a voice that sounds like family": "કુટુંબ જેવો અવાજ",
    "A copied voice can sound exactly like your son or daughter.": "નકલ કરેલ અવાજ તમારા પુત્ર કે પુત્રી જેવો જ સંભળાઈ શકે છે.",
    "Hang up and call their saved number yourself.": "હેંગ અપ કરો અને તેમના સેવ કરેલા નંબર પર જાતે કૉલ કરો.",
    "Agree on a family code word that only you know.": "કુટુંબના કોડ શબ્દ પર સંમત થાઓ જે ફક્ત તમે જ જાણો છો.",
    "Son": "પુત્ર",
    "Voice can be copied": "અવાજની નકલ કરી શકાય છે",
    "Hang up and call back": "અટકી જાઓ અને પાછા કૉલ કરો",
    "clearing old forwards": "જૂના ફોરવર્ડ સાફ કરવું",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp ખોલો, પછી સેટિંગ્સ, પછી સ્ટોરેજ અને ડેટા.",
    "Tap Manage storage and choose Larger than 5 MB.": "સ્ટોરેજ મેનેજ કરો પર ટૅપ કરો અને 5 MB કરતાં મોટી પસંદ કરો.",
    "Delete only forwarded videos. Your own photos stay safe.": "ફક્ત ફોરવર્ડ કરેલા વિડિયો જ ડિલીટ કરો. તમારા પોતાના ફોટા સુરક્ષિત રહે છે.",
    "Manage storage": "સ્ટોરેજ મેનેજ કરો",
    "Larger than 5 MB": "5 MB કરતાં મોટું",
    "Good morning video": "સુપ્રભાત વિડિઓ",
    "Forwarded video": "ફોરવર્ડ કરેલ વિડિયો",
    "Delete selected": "પસંદ કરેલ કાઢી નાખો",
    "booking a ride": "સવારીનું બુકિંગ",
    "Check the pickup spot and the fare before you tap Book.": "તમે બુક પર ટૅપ કરો તે પહેલાં પિકઅપ સ્થળ અને ભાડું તપાસો.",
    "Match the last four digits of the number plate.": "નંબર પ્લેટના છેલ્લા ચાર અંકો સાથે મેળ કરો.",
    "Share the 4-digit PIN only after you sit inside.": "તમે અંદર બેઠા પછી જ 4-અંકનો પિન શેર કરો.",
    "Auto": "ઓટો",
    "Pickup": "પિકઅપ",
    "Main gate": "મુખ્ય દરવાજો",
    "Number plate ends with": "નંબર પ્લેટ સાથે સમાપ્ત થાય છે",
    "Ride PIN": "PIN રાઇડ કરો",
    "Book": "પુસ્તક",
    "checking before you pay": "તમે ચૂકવણી કરો તે પહેલાં તપાસો",
    "Your UPI PIN only sends money. It never receives money.": "તમારો UPI પિન માત્ર પૈસા મોકલે છે. તેને ક્યારેય પૈસા મળતા નથી.",
    "Read the receiver's name and the amount at the top.": "પ્રાપ્તકર્તાનું નામ અને ટોચ પરની રકમ વાંચો.",
    "Never enter your PIN to get a refund or a prize.": "રિફંડ અથવા ઇનામ મેળવવા માટે ક્યારેય તમારો PIN દાખલ કરશો નહીં.",
    "Paying": "ચૂકવણી",
    "Sunita Sharma": "સુનીતા શર્મા",
    "Enter UPI PIN": "UPI પિન દાખલ કરો",
    "PIN sends money only — never to receive.": "PIN માત્ર પૈસા મોકલે છે — ક્યારેય પ્રાપ્ત કરવા માટે નહીં.",
    "help from your lock screen": "તમારી લોક સ્ક્રીનમાંથી મદદ",
    "Open Settings and search for Emergency information.": "સેટિંગ્સ ખોલો અને કટોકટીની માહિતી શોધો.",
    "Add your blood group and two family phone numbers.": "તમારું બ્લડ ગ્રુપ અને બે ફેમિલી ફોન નંબર ઉમેરો.",
    "Anyone can see this from the lock screen without your password.": "કોઈપણ તમારા પાસવર્ડ વિના લૉક સ્ક્રીન પરથી આ જોઈ શકે છે.",
    "Emergency information": "કટોકટીની માહિતી",
    "Blood group": "રક્ત જૂથ",
    "Daughter": "દીકરી",
    "Call": "કૉલ કરો",
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
    /* New lesson example screens */
    "typing with your voice": "ನಿಮ್ಮ ಧ್ವನಿಯೊಂದಿಗೆ ಟೈಪ್ ಮಾಡಲಾಗುತ್ತಿದೆ",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "ಕೀಬೋರ್ಡ್‌ನಲ್ಲಿರುವ ಸಣ್ಣ ಮೈಕ್ರೊಫೋನ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ, ಹಸಿರು WhatsApp ಬಟನ್ ಅಲ್ಲ.",
    "Wait for the chime, then speak your message at your normal speed.": "ಚೈಮ್‌ಗಾಗಿ ನಿರೀಕ್ಷಿಸಿ, ನಂತರ ನಿಮ್ಮ ಸಾಮಾನ್ಯ ವೇಗದಲ್ಲಿ ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಮಾತನಾಡಿ.",
    "Read the words on screen before you tap Send.": "ನೀವು ಕಳುಹಿಸು ಟ್ಯಾಪ್ ಮಾಡುವ ಮೊದಲು ಪರದೆಯ ಮೇಲಿನ ಪದಗಳನ್ನು ಓದಿ.",
    "Your message": "ನಿಮ್ಮ ಸಂದೇಶ",
    "Hello beta, I reached home safely.": "ಹಲೋ ಬೀಟಾ, ನಾನು ಸುರಕ್ಷಿತವಾಗಿ ಮನೆ ತಲುಪಿದೆ.",
    "Tap the microphone and speak": "ಮೈಕ್ರೊಫೋನ್ ಟ್ಯಾಪ್ ಮಾಡಿ ಮತ್ತು ಮಾತನಾಡಿ",
    "a quiet night": "ಒಂದು ಶಾಂತ ರಾತ್ರಿ",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ತೆರೆಯಿರಿ, ನಂತರ ಧ್ವನಿ ಅಥವಾ ಮೋಡ್‌ಗಳನ್ನು ತೆರೆಯಿರಿ ಮತ್ತು ಅಡಚಣೆ ಮಾಡಬೇಡಿ ಆನ್ ಮಾಡಿ.",
    "Allow calls from Favourites so your family can still reach you.": "ಮೆಚ್ಚಿನವುಗಳಿಂದ ಕರೆಗಳನ್ನು ಅನುಮತಿಸಿ ಇದರಿಂದ ನಿಮ್ಮ ಕುಟುಂಬವು ಇನ್ನೂ ನಿಮ್ಮನ್ನು ತಲುಪಬಹುದು.",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "10 PM ರಿಂದ 7 AM ವರೆಗೆ ಹೊಂದಿಸಿ - ಸ್ಪ್ಯಾಮ್ ಬೆಳಿಗ್ಗೆ ತನಕ ಶಾಂತವಾಗಿರುತ್ತದೆ.",
    "Do Not Disturb": "ಅಡಚಣೆ ಮಾಡಬೇಡಿ",
    "Allowed calls": "ಅನುಮತಿಸಲಾದ ಕರೆಗಳು",
    "Favourites": "ಮೆಚ್ಚಿನವುಗಳು",
    "Quiet hours": "ಶಾಂತ ಗಂಟೆಗಳು",
    "sharing where you are": "ನೀವು ಎಲ್ಲಿದ್ದೀರಿ ಎಂದು ಹಂಚಿಕೊಳ್ಳುವುದು",
    "Open the family chat on WhatsApp.": "WhatsApp ನಲ್ಲಿ ಕುಟುಂಬ ಚಾಟ್ ತೆರೆಯಿರಿ.",
    "Tap the paperclip or plus, then choose Location.": "ಪೇಪರ್‌ಕ್ಲಿಪ್ ಅಥವಾ ಪ್ಲಸ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ, ನಂತರ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    "Choose Share live location for 1 hour, then tap Send.": "1 ಗಂಟೆ ಲೈವ್ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಆಯ್ಕೆಮಾಡಿ, ನಂತರ ಕಳುಹಿಸು ಟ್ಯಾಪ್ ಮಾಡಿ.",
    "Family chat": "ಕುಟುಂಬ ಚಾಟ್",
    "Live location · 1 hour": "ಲೈವ್ ಸ್ಥಳ · 1 ಗಂಟೆ",
    "Share live location": "ಲೈವ್ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    "Stop sharing": "ಹಂಚಿಕೊಳ್ಳುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
    "asking AI a question": "AI ಗೆ ಪ್ರಶ್ನೆ ಕೇಳುತ್ತಿದೆ",
    "Type or speak your question in your own words.": "ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಿ.",
    "Read the answer slowly. AI can be wrong.": "ಉತ್ತರವನ್ನು ನಿಧಾನವಾಗಿ ಓದಿ. AI ತಪ್ಪಾಗಿರಬಹುದು.",
    "Always check with your doctor or the office before acting.": "ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೊದಲು ಯಾವಾಗಲೂ ನಿಮ್ಮ ವೈದ್ಯರು ಅಥವಾ ಕಛೇರಿಯೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ.",
    "You asked": "ನೀನು ಕೇಳಿದೆ",
    "What are the side effects of amlodipine?": "ಅಮ್ಲೋಡಿಪೈನ್ ನ ಅಡ್ಡಪರಿಣಾಮಗಳು ಯಾವುವು?",
    "AI helper": "AI ಸಹಾಯಕ",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "ಸಾಮಾನ್ಯ ಅಡ್ಡ ಪರಿಣಾಮಗಳೆಂದರೆ ಪಾದದ ಊತ ಮತ್ತು ದಣಿದ ಭಾವನೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ವೈದ್ಯರೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ.",
    "Check with your doctor before changing any medicine.": "ಯಾವುದೇ ಔಷಧವನ್ನು ಬದಲಾಯಿಸುವ ಮೊದಲು ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಪರೀಕ್ಷಿಸಿ.",
    "a voice that sounds like family": "ಕುಟುಂಬದಂತೆ ಧ್ವನಿಸುವ ಧ್ವನಿ",
    "A copied voice can sound exactly like your son or daughter.": "ನಕಲು ಮಾಡಿದ ಧ್ವನಿಯು ನಿಮ್ಮ ಮಗ ಅಥವಾ ಮಗಳಂತೆ ನಿಖರವಾಗಿ ಧ್ವನಿಸುತ್ತದೆ.",
    "Hang up and call their saved number yourself.": "ಸ್ಥಗಿತಗೊಳಿಸಿ ಮತ್ತು ಅವರ ಉಳಿಸಿದ ಸಂಖ್ಯೆಗೆ ನೀವೇ ಕರೆ ಮಾಡಿ.",
    "Agree on a family code word that only you know.": "ನಿಮಗೆ ಮಾತ್ರ ತಿಳಿದಿರುವ ಕುಟುಂಬ ಕೋಡ್ ಪದವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಿ.",
    "Son": "ಮಗ",
    "Voice can be copied": "ಧ್ವನಿಯನ್ನು ನಕಲಿಸಬಹುದು",
    "Hang up and call back": "ಸ್ಥಗಿತಗೊಳಿಸಿ ಮತ್ತು ಮರಳಿ ಕರೆ ಮಾಡಿ",
    "clearing old forwards": "ಹಳೆಯ ಮುಂದಕ್ಕೆ ತೆರವುಗೊಳಿಸುವುದು",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp ತೆರೆಯಿರಿ, ನಂತರ ಸೆಟ್ಟಿಂಗ್‌ಗಳು, ನಂತರ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಡೇಟಾ.",
    "Tap Manage storage and choose Larger than 5 MB.": "ಸಂಗ್ರಹಣೆಯನ್ನು ನಿರ್ವಹಿಸು ಟ್ಯಾಪ್ ಮಾಡಿ ಮತ್ತು 5 MB ಗಿಂತ ದೊಡ್ಡದನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    "Delete only forwarded videos. Your own photos stay safe.": "ಫಾರ್ವರ್ಡ್ ಮಾಡಿದ ವೀಡಿಯೊಗಳನ್ನು ಮಾತ್ರ ಅಳಿಸಿ. ನಿಮ್ಮ ಸ್ವಂತ ಫೋಟೋಗಳು ಸುರಕ್ಷಿತವಾಗಿರುತ್ತವೆ.",
    "Manage storage": "ಸಂಗ್ರಹಣೆಯನ್ನು ನಿರ್ವಹಿಸಿ",
    "Larger than 5 MB": "5 MB ಗಿಂತ ದೊಡ್ಡದು",
    "Good morning video": "ಶುಭೋದಯ ವಿಡಿಯೋ",
    "Forwarded video": "ಫಾರ್ವರ್ಡ್ ಮಾಡಿದ ವೀಡಿಯೊ",
    "Delete selected": "ಆಯ್ಕೆಮಾಡಿದ ಅಳಿಸು",
    "booking a ride": "ಸವಾರಿ ಬುಕ್ಕಿಂಗ್",
    "Check the pickup spot and the fare before you tap Book.": "ನೀವು ಬುಕ್ ಟ್ಯಾಪ್ ಮಾಡುವ ಮೊದಲು ಪಿಕಪ್ ಸ್ಪಾಟ್ ಮತ್ತು ದರವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    "Match the last four digits of the number plate.": "ನಂಬರ್ ಪ್ಲೇಟ್‌ನ ಕೊನೆಯ ನಾಲ್ಕು ಅಂಕೆಗಳನ್ನು ಹೊಂದಿಸಿ.",
    "Share the 4-digit PIN only after you sit inside.": "ನೀವು ಒಳಗೆ ಕುಳಿತ ನಂತರವೇ 4-ಅಂಕಿಯ ಪಿನ್ ಅನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
    "Auto": "ಆಟೋ",
    "Pickup": "ಪಿಕಪ್",
    "Main gate": "ಮುಖ್ಯ ದ್ವಾರ",
    "Number plate ends with": "ನಂಬರ್ ಪ್ಲೇಟ್ ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ",
    "Ride PIN": "ರೈಡ್ ಪಿನ್",
    "Book": "ಪುಸ್ತಕ",
    "checking before you pay": "ನೀವು ಪಾವತಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ",
    "Your UPI PIN only sends money. It never receives money.": "ನಿಮ್ಮ UPI ಪಿನ್ ಹಣವನ್ನು ಮಾತ್ರ ಕಳುಹಿಸುತ್ತದೆ. ಅದು ಎಂದಿಗೂ ಹಣವನ್ನು ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ.",
    "Read the receiver's name and the amount at the top.": "ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು ಮತ್ತು ಮೇಲಿನ ಮೊತ್ತವನ್ನು ಓದಿ.",
    "Never enter your PIN to get a refund or a prize.": "ಮರುಪಾವತಿ ಅಥವಾ ಬಹುಮಾನವನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಪಿನ್ ಅನ್ನು ಎಂದಿಗೂ ನಮೂದಿಸಬೇಡಿ.",
    "Paying": "ಪಾವತಿಸುತ್ತಿದೆ",
    "Sunita Sharma": "ಸುನಿತಾ ಶರ್ಮಾ",
    "Enter UPI PIN": "UPI ಪಿನ್ ನಮೂದಿಸಿ",
    "PIN sends money only — never to receive.": "ಪಿನ್ ಹಣವನ್ನು ಮಾತ್ರ ಕಳುಹಿಸುತ್ತದೆ - ಎಂದಿಗೂ ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ.",
    "help from your lock screen": "ನಿಮ್ಮ ಲಾಕ್ ಸ್ಕ್ರೀನ್‌ನಿಂದ ಸಹಾಯ",
    "Open Settings and search for Emergency information.": "ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ತೆರೆಯಿರಿ ಮತ್ತು ತುರ್ತು ಮಾಹಿತಿಗಾಗಿ ಹುಡುಕಿ.",
    "Add your blood group and two family phone numbers.": "ನಿಮ್ಮ ರಕ್ತದ ಗುಂಪು ಮತ್ತು ಎರಡು ಕುಟುಂಬದ ಫೋನ್ ಸಂಖ್ಯೆಗಳನ್ನು ಸೇರಿಸಿ.",
    "Anyone can see this from the lock screen without your password.": "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಇಲ್ಲದೆಯೇ ಲಾಕ್ ಸ್ಕ್ರೀನ್‌ನಿಂದ ಯಾರಾದರೂ ಇದನ್ನು ನೋಡಬಹುದು.",
    "Emergency information": "ತುರ್ತು ಮಾಹಿತಿ",
    "Blood group": "ರಕ್ತದ ಗುಂಪು",
    "Daughter": "ಮಗಳು",
    "Call": "ಕರೆ ಮಾಡಿ",
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
    /* New lesson example screens */
    "typing with your voice": "നിങ്ങളുടെ ശബ്ദം ഉപയോഗിച്ച് ടൈപ്പ് ചെയ്യുന്നു",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "കീബോർഡിലെ ചെറിയ മൈക്രോഫോണിൽ ടാപ്പുചെയ്യുക, പച്ച വാട്ട്‌സ്ആപ്പ് ബട്ടണല്ല.",
    "Wait for the chime, then speak your message at your normal speed.": "മണിനാദത്തിനായി കാത്തിരിക്കുക, തുടർന്ന് നിങ്ങളുടെ സാധാരണ വേഗതയിൽ സന്ദേശം പറയുക.",
    "Read the words on screen before you tap Send.": "അയയ്ക്കുക ടാപ്പുചെയ്യുന്നതിന് മുമ്പ് സ്ക്രീനിലെ വാക്കുകൾ വായിക്കുക.",
    "Your message": "നിങ്ങളുടെ സന്ദേശം",
    "Hello beta, I reached home safely.": "ഹലോ ബീറ്റ, ഞാൻ സുരക്ഷിതമായി വീട്ടിലെത്തി.",
    "Tap the microphone and speak": "മൈക്രോഫോൺ ടാപ്പുചെയ്‌ത് സംസാരിക്കുക",
    "a quiet night": "ശാന്തമായ ഒരു രാത്രി",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "ക്രമീകരണങ്ങൾ തുറന്ന് ശബ്‌ദമോ മോഡുകളോ തുറന്ന് ശല്യപ്പെടുത്തരുത് ഓണാക്കുക.",
    "Allow calls from Favourites so your family can still reach you.": "പ്രിയപ്പെട്ടവരിൽ നിന്നുള്ള കോളുകൾ അനുവദിക്കുക, അതുവഴി നിങ്ങളുടെ കുടുംബത്തിന് ഇപ്പോഴും നിങ്ങളെ ബന്ധപ്പെടാനാകും.",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "10 PM മുതൽ 7 AM വരെ സജ്ജീകരിക്കുക - രാവിലെ വരെ സ്പാം നിശബ്ദമായിരിക്കും.",
    "Do Not Disturb": "ശല്യപ്പെടുത്തരുത്",
    "Allowed calls": "അനുവദിച്ച കോളുകൾ",
    "Favourites": "പ്രിയപ്പെട്ടവ",
    "Quiet hours": "ശാന്തമായ മണിക്കൂറുകൾ",
    "sharing where you are": "നിങ്ങൾ എവിടെയാണെന്ന് പങ്കിടുന്നു",
    "Open the family chat on WhatsApp.": "WhatsApp-ൽ ഫാമിലി ചാറ്റ് തുറക്കുക.",
    "Tap the paperclip or plus, then choose Location.": "പേപ്പർക്ലിപ്പ് അല്ലെങ്കിൽ പ്ലസ് ടാപ്പ് ചെയ്യുക, തുടർന്ന് ലൊക്കേഷൻ തിരഞ്ഞെടുക്കുക.",
    "Choose Share live location for 1 hour, then tap Send.": "ഒരു മണിക്കൂർ ലൈവ് ലൊക്കേഷൻ പങ്കിടുക തിരഞ്ഞെടുക്കുക, തുടർന്ന് അയയ്ക്കുക ടാപ്പ് ചെയ്യുക.",
    "Family chat": "കുടുംബ ചാറ്റ്",
    "Live location · 1 hour": "തത്സമയ ലൊക്കേഷൻ · 1 മണിക്കൂർ",
    "Share live location": "തത്സമയ ലൊക്കേഷൻ പങ്കിടുക",
    "Stop sharing": "പങ്കിടുന്നത് നിർത്തുക",
    "asking AI a question": "AI യോട് ഒരു ചോദ്യം ചോദിക്കുന്നു",
    "Type or speak your question in your own words.": "നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ പറയുക.",
    "Read the answer slowly. AI can be wrong.": "ഉത്തരം പതുക്കെ വായിക്കുക. AI തെറ്റായിരിക്കാം.",
    "Always check with your doctor or the office before acting.": "അഭിനയിക്കുന്നതിന് മുമ്പ് എല്ലായ്പ്പോഴും നിങ്ങളുടെ ഡോക്ടറുമായോ ഓഫീസുമായോ പരിശോധിക്കുക.",
    "You asked": "നീ ചോദിച്ചു",
    "What are the side effects of amlodipine?": "അംലോഡിപൈൻ്റെ പാർശ്വഫലങ്ങൾ എന്തൊക്കെയാണ്?",
    "AI helper": "AI സഹായി",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "സാധാരണ പാർശ്വഫലങ്ങളിൽ കണങ്കാൽ വീക്കം, ക്ഷീണം എന്നിവ ഉൾപ്പെടുന്നു. ദയവായി നിങ്ങളുടെ ഡോക്ടറെ പരിശോധിക്കുക.",
    "Check with your doctor before changing any medicine.": "ഏതെങ്കിലും മരുന്ന് മാറ്റുന്നതിന് മുമ്പ് നിങ്ങളുടെ ഡോക്ടറെ പരിശോധിക്കുക.",
    "a voice that sounds like family": "കുടുംബം പോലെ തോന്നിക്കുന്ന ഒരു ശബ്ദം",
    "A copied voice can sound exactly like your son or daughter.": "പകർത്തിയ ശബ്‌ദത്തിന് നിങ്ങളുടെ മകനോ മകളോ പോലെ തന്നെ മുഴങ്ങാം.",
    "Hang up and call their saved number yourself.": "ഹാംഗ് അപ്പ് ചെയ്‌ത് അവരുടെ സേവ് ചെയ്‌ത നമ്പറിലേക്ക് സ്വയം വിളിക്കുക.",
    "Agree on a family code word that only you know.": "നിങ്ങൾക്ക് മാത്രം അറിയാവുന്ന ഒരു കുടുംബ കോഡ് വാക്ക് അംഗീകരിക്കുക.",
    "Son": "മകൻ",
    "Voice can be copied": "ശബ്ദം പകർത്താനാകും",
    "Hang up and call back": "ഫോൺ നിർത്തി തിരികെ വിളിക്കുക",
    "clearing old forwards": "പഴയ ഫോർവേഡുകൾ ക്ലിയർ ചെയ്യുന്നു",
    "Open WhatsApp, then Settings, then Storage and data.": "വാട്ട്‌സ്ആപ്പ് തുറക്കുക, തുടർന്ന് ക്രമീകരണങ്ങൾ, തുടർന്ന് സംഭരണവും ഡാറ്റയും.",
    "Tap Manage storage and choose Larger than 5 MB.": "സംഭരണം നിയന്ത്രിക്കുക ടാപ്പ് ചെയ്‌ത് 5 MB-യിൽ കൂടുതൽ വലുത് തിരഞ്ഞെടുക്കുക.",
    "Delete only forwarded videos. Your own photos stay safe.": "ഫോർവേഡ് ചെയ്ത വീഡിയോകൾ മാത്രം ഇല്ലാതാക്കുക. നിങ്ങളുടെ സ്വന്തം ഫോട്ടോകൾ സുരക്ഷിതമായിരിക്കും.",
    "Manage storage": "സംഭരണം നിയന്ത്രിക്കുക",
    "Larger than 5 MB": "5 MB-യിൽ കൂടുതൽ",
    "Good morning video": "സുപ്രഭാതം വീഡിയോ",
    "Forwarded video": "കൈമാറിയ വീഡിയോ",
    "Delete selected": "തിരഞ്ഞെടുത്തത് ഇല്ലാതാക്കുക",
    "booking a ride": "ഒരു സവാരി ബുക്ക് ചെയ്യുന്നു",
    "Check the pickup spot and the fare before you tap Book.": "ബുക്ക് ടാപ്പ് ചെയ്യുന്നതിന് മുമ്പ് പിക്കപ്പ് സ്ഥലവും നിരക്കും പരിശോധിക്കുക.",
    "Match the last four digits of the number plate.": "നമ്പർ പ്ലേറ്റിൻ്റെ അവസാന നാല് അക്കങ്ങൾ പൊരുത്തപ്പെടുത്തുക.",
    "Share the 4-digit PIN only after you sit inside.": "നിങ്ങൾ അകത്ത് ഇരുന്നതിനുശേഷം മാത്രമേ 4 അക്ക പിൻ പങ്കിടൂ.",
    "Auto": "ഓട്ടോ",
    "Pickup": "പിക്കപ്പ്",
    "Main gate": "പ്രധാന ഗേറ്റ്",
    "Number plate ends with": "നമ്പർ പ്ലേറ്റ് അവസാനിക്കുന്നു",
    "Ride PIN": "റൈഡ് പിൻ",
    "Book": "പുസ്തകം",
    "checking before you pay": "നിങ്ങൾ പണമടയ്ക്കുന്നതിന് മുമ്പ് പരിശോധിക്കുന്നു",
    "Your UPI PIN only sends money. It never receives money.": "നിങ്ങളുടെ UPI പിൻ പണം മാത്രമേ അയയ്‌ക്കൂ. അത് ഒരിക്കലും പണം സ്വീകരിക്കുന്നില്ല.",
    "Read the receiver's name and the amount at the top.": "സ്വീകർത്താവിൻ്റെ പേരും തുകയും മുകളിൽ വായിക്കുക.",
    "Never enter your PIN to get a refund or a prize.": "റീഫണ്ടോ സമ്മാനമോ ലഭിക്കുന്നതിന് ഒരിക്കലും നിങ്ങളുടെ പിൻ നൽകരുത്.",
    "Paying": "പണമടയ്ക്കുന്നു",
    "Sunita Sharma": "സുനിത ശർമ്മ",
    "Enter UPI PIN": "UPI പിൻ നൽകുക",
    "PIN sends money only — never to receive.": "പിൻ പണം അയയ്‌ക്കുന്നു - ഒരിക്കലും സ്വീകരിക്കില്ല.",
    "help from your lock screen": "നിങ്ങളുടെ ലോക്ക് സ്ക്രീനിൽ നിന്നുള്ള സഹായം",
    "Open Settings and search for Emergency information.": "ക്രമീകരണങ്ങൾ തുറന്ന് അടിയന്തര വിവരങ്ങൾക്കായി തിരയുക.",
    "Add your blood group and two family phone numbers.": "നിങ്ങളുടെ രക്തഗ്രൂപ്പും രണ്ട് കുടുംബ ഫോൺ നമ്പറുകളും ചേർക്കുക.",
    "Anyone can see this from the lock screen without your password.": "നിങ്ങളുടെ പാസ്‌വേഡ് ഇല്ലാതെ ലോക്ക് സ്ക്രീനിൽ നിന്ന് ആർക്കും ഇത് കാണാനാകും.",
    "Emergency information": "അടിയന്തര വിവരം",
    "Blood group": "രക്തഗ്രൂപ്പ്",
    "Daughter": "മകൾ",
    "Call": "വിളിക്കൂ",
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
    /* New lesson example screens */
    "typing with your voice": "ਆਪਣੀ ਆਵਾਜ਼ ਨਾਲ ਟਾਈਪ ਕਰਨਾ",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "ਕੀਬੋਰਡ 'ਤੇ ਛੋਟੇ ਮਾਈਕ੍ਰੋਫੋਨ 'ਤੇ ਟੈਪ ਕਰੋ, ਨਾ ਕਿ ਹਰੇ WhatsApp ਬਟਨ ਨੂੰ।",
    "Wait for the chime, then speak your message at your normal speed.": "ਘੰਟੀ ਦੀ ਉਡੀਕ ਕਰੋ, ਫਿਰ ਆਪਣੀ ਆਮ ਗਤੀ 'ਤੇ ਆਪਣਾ ਸੁਨੇਹਾ ਬੋਲੋ।",
    "Read the words on screen before you tap Send.": "ਭੇਜੋ 'ਤੇ ਟੈਪ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਕ੍ਰੀਨ 'ਤੇ ਸ਼ਬਦ ਪੜ੍ਹੋ।",
    "Your message": "ਤੁਹਾਡਾ ਸੁਨੇਹਾ",
    "Hello beta, I reached home safely.": "ਹੈਲੋ ਬੇਟਾ, ਮੈਂ ਸਹੀ-ਸਲਾਮਤ ਘਰ ਪਹੁੰਚ ਗਿਆ।",
    "Tap the microphone and speak": "ਮਾਈਕ੍ਰੋਫ਼ੋਨ 'ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ ਬੋਲੋ",
    "a quiet night": "ਇੱਕ ਸ਼ਾਂਤ ਰਾਤ",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "ਸੈਟਿੰਗਾਂ ਖੋਲ੍ਹੋ, ਫਿਰ ਧੁਨੀ ਜਾਂ ਮੋਡਸ, ਅਤੇ 'ਪਰੇਸ਼ਾਨ ਨਾ ਕਰੋ' ਨੂੰ ਚਾਲੂ ਕਰੋ।",
    "Allow calls from Favourites so your family can still reach you.": "ਮਨਪਸੰਦ ਤੋਂ ਕਾਲਾਂ ਦੀ ਆਗਿਆ ਦਿਓ ਤਾਂ ਜੋ ਤੁਹਾਡਾ ਪਰਿਵਾਰ ਅਜੇ ਵੀ ਤੁਹਾਡੇ ਤੱਕ ਪਹੁੰਚ ਸਕੇ।",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "ਇਸਨੂੰ ਰਾਤ 10 ਵਜੇ ਤੋਂ ਸਵੇਰੇ 7 ਵਜੇ ਤੱਕ ਸੈੱਟ ਕਰੋ — ਸਪੈਮ ਸਵੇਰ ਤੱਕ ਸ਼ਾਂਤ ਰਹਿੰਦਾ ਹੈ।",
    "Do Not Disturb": "ਪਰੇਸ਼ਾਨ ਨਾ ਕਰੋ",
    "Allowed calls": "ਕਾਲਾਂ ਦੀ ਇਜਾਜ਼ਤ ਦਿੱਤੀ ਗਈ",
    "Favourites": "ਮਨਪਸੰਦ",
    "Quiet hours": "ਸ਼ਾਂਤ ਘੰਟੇ",
    "sharing where you are": "ਸ਼ੇਅਰ ਕਰ ਰਿਹਾ ਹੈ ਕਿ ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ",
    "Open the family chat on WhatsApp.": "ਵਟਸਐਪ 'ਤੇ ਪਰਿਵਾਰਕ ਚੈਟ ਖੋਲ੍ਹੋ।",
    "Tap the paperclip or plus, then choose Location.": "ਪੇਪਰ ਕਲਿੱਪ ਜਾਂ ਪਲੱਸ 'ਤੇ ਟੈਪ ਕਰੋ, ਫਿਰ ਟਿਕਾਣਾ ਚੁਣੋ।",
    "Choose Share live location for 1 hour, then tap Send.": "1 ਘੰਟੇ ਲਈ ਲਾਈਵ ਟਿਕਾਣਾ ਸਾਂਝਾ ਕਰੋ ਚੁਣੋ, ਫਿਰ ਭੇਜੋ 'ਤੇ ਟੈਪ ਕਰੋ।",
    "Family chat": "ਪਰਿਵਾਰਕ ਗੱਲਬਾਤ",
    "Live location · 1 hour": "ਲਾਈਵ ਟਿਕਾਣਾ · 1 ਘੰਟਾ",
    "Share live location": "ਲਾਈਵ ਟਿਕਾਣਾ ਸਾਂਝਾ ਕਰੋ",
    "Stop sharing": "ਸਾਂਝਾ ਕਰਨਾ ਬੰਦ ਕਰੋ",
    "asking AI a question": "AI ਨੂੰ ਇੱਕ ਸਵਾਲ ਪੁੱਛਣਾ",
    "Type or speak your question in your own words.": "ਆਪਣੇ ਸਵਾਲ ਨੂੰ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਟਾਈਪ ਕਰੋ ਜਾਂ ਬੋਲੋ।",
    "Read the answer slowly. AI can be wrong.": "ਜਵਾਬ ਹੌਲੀ-ਹੌਲੀ ਪੜ੍ਹੋ। AI ਗਲਤ ਹੋ ਸਕਦਾ ਹੈ।",
    "Always check with your doctor or the office before acting.": "ਕੰਮ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹਮੇਸ਼ਾ ਆਪਣੇ ਡਾਕਟਰ ਜਾਂ ਦਫ਼ਤਰ ਤੋਂ ਪਤਾ ਕਰੋ।",
    "You asked": "ਤੁਸੀਂ ਪੁੱਛਿਆ",
    "What are the side effects of amlodipine?": "ਅਮਲੋਡੀਪੀਨੇ ਦੇ ਮਾੜੇ ਪ੍ਰਭਾਵ ਕੀ ਹਨ?",
    "AI helper": "ਏਆਈ ਸਹਾਇਕ",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "ਆਮ ਮਾੜੇ ਪ੍ਰਭਾਵਾਂ ਵਿੱਚ ਗਿੱਟੇ ਦੀ ਸੋਜ ਅਤੇ ਥਕਾਵਟ ਮਹਿਸੂਸ ਕਰਨਾ ਸ਼ਾਮਲ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਡਾਕਟਰ ਨਾਲ ਜਾਂਚ ਕਰੋ।",
    "Check with your doctor before changing any medicine.": "ਕੋਈ ਵੀ ਦਵਾਈ ਬਦਲਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ।",
    "a voice that sounds like family": "ਇੱਕ ਆਵਾਜ਼ ਜੋ ਪਰਿਵਾਰ ਵਰਗੀ ਜਾਪਦੀ ਹੈ",
    "A copied voice can sound exactly like your son or daughter.": "ਇੱਕ ਨਕਲ ਕੀਤੀ ਆਵਾਜ਼ ਬਿਲਕੁਲ ਤੁਹਾਡੇ ਪੁੱਤਰ ਜਾਂ ਧੀ ਵਰਗੀ ਹੋ ਸਕਦੀ ਹੈ।",
    "Hang up and call their saved number yourself.": "ਬੰਦ ਕਰੋ ਅਤੇ ਉਹਨਾਂ ਦੇ ਸੁਰੱਖਿਅਤ ਕੀਤੇ ਨੰਬਰ 'ਤੇ ਕਾਲ ਕਰੋ।",
    "Agree on a family code word that only you know.": "ਇੱਕ ਪਰਿਵਾਰਕ ਕੋਡ ਸ਼ਬਦ 'ਤੇ ਸਹਿਮਤ ਹੋਵੋ ਜੋ ਸਿਰਫ਼ ਤੁਸੀਂ ਜਾਣਦੇ ਹੋ।",
    "Son": "ਪੁੱਤਰ",
    "Voice can be copied": "ਵੌਇਸ ਕਾਪੀ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ",
    "Hang up and call back": "ਬੰਦ ਕਰੋ ਅਤੇ ਵਾਪਸ ਕਾਲ ਕਰੋ",
    "clearing old forwards": "ਪੁਰਾਣੇ ਅੱਗੇ ਨੂੰ ਸਾਫ਼ ਕਰਨਾ",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp ਖੋਲ੍ਹੋ, ਫਿਰ ਸੈਟਿੰਗਾਂ, ਫਿਰ ਸਟੋਰੇਜ ਅਤੇ ਡੇਟਾ।",
    "Tap Manage storage and choose Larger than 5 MB.": "ਸਟੋਰੇਜ ਪ੍ਰਬੰਧਿਤ ਕਰੋ 'ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ 5 MB ਤੋਂ ਵੱਡਾ ਚੁਣੋ।",
    "Delete only forwarded videos. Your own photos stay safe.": "ਸਿਰਫ਼ ਫਾਰਵਰਡ ਕੀਤੇ ਵੀਡੀਓਜ਼ ਨੂੰ ਮਿਟਾਓ। ਤੁਹਾਡੀਆਂ ਖੁਦ ਦੀਆਂ ਫੋਟੋਆਂ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀਆਂ ਹਨ।",
    "Manage storage": "ਸਟੋਰੇਜ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
    "Larger than 5 MB": "5 MB ਤੋਂ ਵੱਡਾ",
    "Good morning video": "ਸ਼ੁਭ ਸਵੇਰ ਵੀਡੀਓ",
    "Forwarded video": "ਅੱਗੇ ਭੇਜੀ ਗਈ ਵੀਡੀਓ",
    "Delete selected": "ਚੁਣਿਆ ਮਿਟਾਓ",
    "booking a ride": "ਇੱਕ ਸਵਾਰੀ ਬੁੱਕ ਕਰ ਰਿਹਾ ਹੈ",
    "Check the pickup spot and the fare before you tap Book.": "ਬੁੱਕ 'ਤੇ ਟੈਪ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਪਿਕਅੱਪ ਸਥਾਨ ਅਤੇ ਕਿਰਾਏ ਦੀ ਜਾਂਚ ਕਰੋ।",
    "Match the last four digits of the number plate.": "ਨੰਬਰ ਪਲੇਟ ਦੇ ਆਖਰੀ ਚਾਰ ਅੰਕਾਂ ਦਾ ਮੇਲ ਕਰੋ।",
    "Share the 4-digit PIN only after you sit inside.": "ਅੰਦਰ ਬੈਠਣ ਤੋਂ ਬਾਅਦ ਹੀ 4-ਅੰਕ ਦਾ ਪਿੰਨ ਸਾਂਝਾ ਕਰੋ।",
    "Auto": "ਆਟੋ",
    "Pickup": "ਪਿਕਅੱਪ",
    "Main gate": "ਮੁੱਖ ਗੇਟ",
    "Number plate ends with": "ਨੰਬਰ ਪਲੇਟ ਨਾਲ ਖਤਮ ਹੁੰਦੀ ਹੈ",
    "Ride PIN": "PIN ਦੀ ਸਵਾਰੀ ਕਰੋ",
    "Book": "ਕਿਤਾਬ",
    "checking before you pay": "ਭੁਗਤਾਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂਚ ਕਰ ਰਿਹਾ ਹੈ",
    "Your UPI PIN only sends money. It never receives money.": "ਤੁਹਾਡਾ UPI ਪਿੰਨ ਸਿਰਫ਼ ਪੈਸੇ ਭੇਜਦਾ ਹੈ। ਇਹ ਕਦੇ ਵੀ ਪੈਸਾ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕਰਦਾ.",
    "Read the receiver's name and the amount at the top.": "ਪ੍ਰਾਪਤਕਰਤਾ ਦਾ ਨਾਮ ਅਤੇ ਸਿਖਰ 'ਤੇ ਰਕਮ ਪੜ੍ਹੋ।",
    "Never enter your PIN to get a refund or a prize.": "ਰਿਫੰਡ ਜਾਂ ਇਨਾਮ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕਦੇ ਵੀ ਆਪਣਾ ਪਿੰਨ ਦਾਖਲ ਨਾ ਕਰੋ।",
    "Paying": "ਭੁਗਤਾਨ ਕਰਨਾ",
    "Sunita Sharma": "ਸੁਨੀਤਾ ਸ਼ਰਮਾ",
    "Enter UPI PIN": "UPI ਪਿੰਨ ਦਾਖਲ ਕਰੋ",
    "PIN sends money only — never to receive.": "ਪਿੰਨ ਸਿਰਫ਼ ਪੈਸੇ ਭੇਜਦਾ ਹੈ — ਕਦੇ ਵੀ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਨਹੀਂ।",
    "help from your lock screen": "ਤੁਹਾਡੀ ਲੌਕ ਸਕ੍ਰੀਨ ਤੋਂ ਮਦਦ",
    "Open Settings and search for Emergency information.": "ਸੈਟਿੰਗਾਂ ਖੋਲ੍ਹੋ ਅਤੇ ਐਮਰਜੈਂਸੀ ਜਾਣਕਾਰੀ ਲਈ ਖੋਜ ਕਰੋ।",
    "Add your blood group and two family phone numbers.": "ਆਪਣਾ ਬਲੱਡ ਗਰੁੱਪ ਅਤੇ ਦੋ ਪਰਿਵਾਰਕ ਫ਼ੋਨ ਨੰਬਰ ਸ਼ਾਮਲ ਕਰੋ।",
    "Anyone can see this from the lock screen without your password.": "ਕੋਈ ਵੀ ਇਸਨੂੰ ਤੁਹਾਡੇ ਪਾਸਵਰਡ ਤੋਂ ਬਿਨਾਂ ਲੌਕ ਸਕ੍ਰੀਨ ਤੋਂ ਦੇਖ ਸਕਦਾ ਹੈ।",
    "Emergency information": "ਐਮਰਜੈਂਸੀ ਜਾਣਕਾਰੀ",
    "Blood group": "ਬਲੱਡ ਗਰੁੱਪ",
    "Daughter": "ਧੀ",
    "Call": "ਕਾਲ ਕਰੋ",
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
    /* New lesson example screens */
    "typing with your voice": "ତୁମର ସ୍ୱର ସହିତ ଟାଇପ୍ କରିବା |",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "ସବୁଜ ହ୍ ats ାଟସ୍ ଆପ୍ ବଟନ୍ ନୁହେଁ, କୀବୋର୍ଡରେ ଥିବା ଛୋଟ ମାଇକ୍ରୋଫୋନ୍ ଟ୍ୟାପ୍ କରନ୍ତୁ |",
    "Wait for the chime, then speak your message at your normal speed.": "ଚିମ୍ ପାଇଁ ଅପେକ୍ଷା କର, ତାପରେ ତୁମର ସାଧାରଣ ବେଗରେ ତୁମର ବାର୍ତ୍ତା କୁହ |",
    "Read the words on screen before you tap Send.": "ପ୍ରେରଣ ଟ୍ୟାପ୍ କରିବା ପୂର୍ବରୁ ପରଦାରେ ଶବ୍ଦ ପ Read ନ୍ତୁ |",
    "Your message": "ତୁମର ବାର୍ତ୍ତା",
    "Hello beta, I reached home safely.": "ନମସ୍କାର ବେଟା, ମୁଁ ନିରାପଦରେ ଘରେ ପହଞ୍ଚିଲି |",
    "Tap the microphone and speak": "ମାଇକ୍ରୋଫୋନ୍ ଟ୍ୟାପ୍ କରି କଥା ହୁଅ |",
    "a quiet night": "ଏକ ଶାନ୍ତ ରାତି",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "ସେଟିଂସମୂହ ଖୋଲନ୍ତୁ, ତାପରେ ସାଉଣ୍ଡ କିମ୍ବା ମୋଡ୍, ଏବଂ ବିଚଳିତ କରନ୍ତୁ ନାହିଁ ଟର୍ନ୍ ଅନ୍ କରନ୍ତୁ |",
    "Allow calls from Favourites so your family can still reach you.": "ପ୍ରିୟମାନଙ୍କ ଠାରୁ କଲ୍ ଅନୁମତି ଦିଅନ୍ତୁ ଯାହା ଦ୍ your ାରା ଆପଣଙ୍କର ପରିବାର ତଥାପି ଆପଣଙ୍କ ପାଖରେ ପହଞ୍ଚି ପାରିବେ |",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "ଏହାକୁ 10 PM ରୁ 7 AM ସେଟ୍ କରନ୍ତୁ - ସ୍ପାମ୍ ସକାଳ ପର୍ଯ୍ୟନ୍ତ ଚୁପ୍ ରହିଥାଏ |",
    "Do Not Disturb": "ବ୍ୟସ୍ତ ହୁଅନ୍ତୁ ନାହିଁ |",
    "Allowed calls": "ଅନୁମତିପ୍ରାପ୍ତ କଲ୍ |",
    "Favourites": "ପସନ୍ଦଗୁଡିକ",
    "Quiet hours": "ଶାନ୍ତ ଘଣ୍ଟା |",
    "sharing where you are": "ଆପଣ କେଉଁଠାରେ ଅଛନ୍ତି ଅଂଶୀଦାର କରନ୍ତୁ |",
    "Open the family chat on WhatsApp.": "ହ୍ ats ାଟସ୍ ଆପ୍ରେ ପାରିବାରିକ ଚାଟ୍ ଖୋଲନ୍ତୁ |",
    "Tap the paperclip or plus, then choose Location.": "ପେପରକ୍ଲିପ୍ କିମ୍ବା ପ୍ଲସ୍ ଟ୍ୟାପ୍ କରନ୍ତୁ, ତାପରେ ଅବସ୍ଥାନ ବାଛନ୍ତୁ |",
    "Choose Share live location for 1 hour, then tap Send.": "1 ଘଣ୍ଟା ପାଇଁ ଲାଇଭ୍ ଅବସ୍ଥାନ ଅଂଶୀଦାର କରନ୍ତୁ, ତାପରେ ପଠାନ୍ତୁ ଟ୍ୟାପ୍ କରନ୍ତୁ |",
    "Family chat": "ପାରିବାରିକ ଚାଟ୍ |",
    "Live location · 1 hour": "ଲାଇଭ୍ ଅବସ୍ଥାନ · 1 ଘଣ୍ଟା |",
    "Share live location": "ଲାଇଭ୍ ଅବସ୍ଥାନ ଅଂଶୀଦାର କରନ୍ତୁ |",
    "Stop sharing": "ଅଂଶୀଦାର ବନ୍ଦ କରନ୍ତୁ |",
    "asking AI a question": "AI କୁ ଏକ ପ୍ରଶ୍ନ ପଚାରିବା |",
    "Type or speak your question in your own words.": "ନିଜ ପ୍ରଶ୍ନରେ ନିଜ ପ୍ରଶ୍ନ ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା କୁହନ୍ତୁ |",
    "Read the answer slowly. AI can be wrong.": "ଉତ୍ତର ଧୀରେ ଧୀରେ ପ Read ଼ନ୍ତୁ | AI ଭୁଲ ହୋଇପାରେ |",
    "Always check with your doctor or the office before acting.": "ଅଭିନୟ କରିବା ପୂର୍ବରୁ ସର୍ବଦା ଆପଣଙ୍କର ଡାକ୍ତର କିମ୍ବା କାର୍ଯ୍ୟାଳୟ ସହିତ ଯାଞ୍ଚ କରନ୍ତୁ |",
    "You asked": "ତୁମେ ପଚାରିଲ",
    "What are the side effects of amlodipine?": "ଆମ୍ଲୋଡିପାଇନ୍ ର ପାର୍ଶ୍ୱ ପ୍ରତିକ୍ରିୟା କ’ଣ?",
    "AI helper": "AI ସହାୟକକାରୀ |",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "ସାଧାରଣ ପାର୍ଶ୍ୱ ପ୍ରତିକ୍ରିୟାରେ ଗୋଡର ଫୁଲା ଏବଂ ଥକ୍କା ଅନୁଭବ ହୁଏ | ଦୟାକରି ଆପଣଙ୍କର ଡାକ୍ତରଙ୍କ ସହିତ ଯାଞ୍ଚ କରନ୍ତୁ |",
    "Check with your doctor before changing any medicine.": "କ any ଣସି medicine ଷଧ ବଦଳାଇବା ପୂର୍ବରୁ ଡାକ୍ତରଙ୍କ ସହିତ ଯାଞ୍ଚ କରନ୍ତୁ।",
    "a voice that sounds like family": "ଏକ ସ୍ୱର ଯାହା ପରିବାର ପରି ଶୁଣାଯାଏ |",
    "A copied voice can sound exactly like your son or daughter.": "ଏକ ନକଲ ସ୍ୱର ତୁମ ପୁଅ କିମ୍ବା daughter ିଅ ପରି ଶବ୍ଦ ହୋଇପାରେ |",
    "Hang up and call their saved number yourself.": "ହ୍ୟାଙ୍ଗ୍ କର ଏବଂ ସେଭ୍ ହୋଇଥିବା ନମ୍ବରକୁ ନିଜେ କଲ୍ କର |",
    "Agree on a family code word that only you know.": "ଏକ ପାରିବାରିକ କୋଡ୍ ଶବ୍ଦ ଉପରେ ରାଜି ହୁଅନ୍ତୁ ଯାହା କେବଳ ଆପଣ ଜାଣନ୍ତି |",
    "Son": "ପୁଅ",
    "Voice can be copied": "ସ୍ୱର କପି କରାଯାଇପାରିବ |",
    "Hang up and call back": "ହ୍ୟାଙ୍ଗ୍ କରି ଫେରିଯାଅ |",
    "clearing old forwards": "ପୁରୁଣା ଅଗ୍ରଗାମୀ ସଫା କରିବା |",
    "Open WhatsApp, then Settings, then Storage and data.": "ହ୍ ats ାଟସ୍ ଆପ୍, ତା’ପରେ ସେଟିଂସମୂହ, ତା’ପରେ ଷ୍ଟୋରେଜ୍ ଏବଂ ଡାଟା ଖୋଲ |",
    "Tap Manage storage and choose Larger than 5 MB.": "ଷ୍ଟୋରେଜ୍ ପରିଚାଳନା ଟ୍ୟାପ୍ କରନ୍ତୁ ଏବଂ 5 MB ରୁ ବଡ ବାଛନ୍ତୁ |",
    "Delete only forwarded videos. Your own photos stay safe.": "କେବଳ ଅଗ୍ରଗାମୀ ଭିଡିଓ ବିଲୋପ କରନ୍ତୁ | ଆପଣଙ୍କର ନିଜ ଫଟୋ ସୁରକ୍ଷିତ ରୁହନ୍ତୁ |",
    "Manage storage": "ସଂରକ୍ଷଣ ପରିଚାଳନା କରନ୍ତୁ |",
    "Larger than 5 MB": "5 MB ରୁ ବଡ",
    "Good morning video": "ଶୁଭ ସକାଳ ଭିଡିଓ |",
    "Forwarded video": "ଅଗ୍ରଗାମୀ ଭିଡିଓ |",
    "Delete selected": "ମନୋନୀତ ବିଲୋପ କରନ୍ତୁ |",
    "booking a ride": "ରଥଯାତ୍ରା ବୁକିଂ |",
    "Check the pickup spot and the fare before you tap Book.": "ଆପଣ ବୁକ୍ ଟ୍ୟାପ୍ କରିବା ପୂର୍ବରୁ ପିକଅପ୍ ସ୍ପଟ୍ ଏବଂ ଭଡା ଯାଞ୍ଚ କରନ୍ତୁ |",
    "Match the last four digits of the number plate.": "ନମ୍ବର ପ୍ଲେଟର ଶେଷ ଚାରି ଅଙ୍କ ସହିତ ମେଳ କରନ୍ତୁ |",
    "Share the 4-digit PIN only after you sit inside.": "ଆପଣ ଭିତରେ ବସିବା ପରେ ହିଁ 4-ଅଙ୍କ ବିଶିଷ୍ଟ PIN ଅଂଶୀଦାର କରନ୍ତୁ |",
    "Auto": "ଅଟୋ |",
    "Pickup": "ପିକଅପ୍",
    "Main gate": "ମୁଖ୍ୟ ଫାଟକ |",
    "Number plate ends with": "ନମ୍ବର ପ୍ଲେଟ୍ ସହିତ ଶେଷ ହୁଏ |",
    "Ride PIN": "ପିନ୍ ଚଲାନ୍ତୁ |",
    "Book": "ବୁକ୍ କର |",
    "checking before you pay": "ଆପଣ ଦେୟ ଦେବା ପୂର୍ବରୁ ଯାଞ୍ଚ କରନ୍ତୁ |",
    "Your UPI PIN only sends money. It never receives money.": "ତୁମର UPI PIN କେବଳ ଟଙ୍କା ପଠାଏ | ଏହା କଦାପି ଟଙ୍କା ଗ୍ରହଣ କରେ ନାହିଁ |",
    "Read the receiver's name and the amount at the top.": "ପ୍ରାପ୍ତକର୍ତ୍ତାଙ୍କ ନାମ ଏବଂ ଶୀର୍ଷରେ ଥିବା ପରିମାଣ ପ Read ଼ନ୍ତୁ |",
    "Never enter your PIN to get a refund or a prize.": "ଫେରସ୍ତ କିମ୍ବା ପୁରସ୍କାର ପାଇବା ପାଇଁ କେବେବି ଆପଣଙ୍କର PIN ପ୍ରବେଶ କରନ୍ତୁ ନାହିଁ |",
    "Paying": "ଦେୟ",
    "Sunita Sharma": "ସୁନୀତା ଶର୍ମା",
    "Enter UPI PIN": "UPI PIN ପ୍ରବେଶ କରନ୍ତୁ |",
    "PIN sends money only — never to receive.": "PIN କେବଳ ଟଙ୍କା ପଠାଏ - କେବେବି ଗ୍ରହଣ କରିବ ନାହିଁ |",
    "help from your lock screen": "ତୁମର ଲକ୍ ସ୍କ୍ରିନ୍ ରୁ ସାହାଯ୍ୟ |",
    "Open Settings and search for Emergency information.": "ସେଟିଂସମୂହ ଖୋଲନ୍ତୁ ଏବଂ ଜରୁରୀକାଳୀନ ସୂଚନା ପାଇଁ ସନ୍ଧାନ କରନ୍ତୁ |",
    "Add your blood group and two family phone numbers.": "ଆପଣଙ୍କର ରକ୍ତ ଗୋଷ୍ଠୀ ଏବଂ ଦୁଇଟି ପରିବାର ଫୋନ୍ ନମ୍ବର ଯୋଡନ୍ତୁ |",
    "Anyone can see this from the lock screen without your password.": "ଆପଣଙ୍କ ପାସୱାର୍ଡ ବିନା ଲକ୍ ସ୍କ୍ରିନରୁ ଯେକେହି ଏହାକୁ ଦେଖିପାରିବେ |",
    "Emergency information": "ଜରୁରୀ ସୂଚନା",
    "Blood group": "ରକ୍ତ ଗୋଷ୍ଠୀ",
    "Daughter": "Ughter ିଅ",
    "Call": "କଲ୍ କରନ୍ତୁ |",
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
    /* New lesson example screens */
    "typing with your voice": "আপোনাৰ কণ্ঠৰে টাইপ কৰা",
    "Tap the small microphone on the keyboard, not the green WhatsApp button.": "সেউজীয়া হোৱাটছএপৰ বুটামটো নহয়, কিবৰ্ডৰ সৰু মাইক্ৰ’ফোনটো টিপক।",
    "Wait for the chime, then speak your message at your normal speed.": "চিমটোৰ বাবে অপেক্ষা কৰক, তাৰ পিছত আপোনাৰ বাৰ্তাটো আপোনাৰ স্বাভাৱিক গতিৰে কওক।",
    "Read the words on screen before you tap Send.": "আপুনি পঠাওক টেপ কৰাৰ আগতে পৰ্দাত থকা শব্দসমূহ পঢ়ক।",
    "Your message": "আপোনাৰ বাৰ্তা",
    "Hello beta, I reached home safely.": "নমস্কাৰ বিটা, নিৰাপদে ঘৰ পালোঁহি।",
    "Tap the microphone and speak": "মাইক্ৰ’ফোনটো টেপ কৰক আৰু কথা কওক",
    "a quiet night": "এটা নিস্তব্ধ ৰাতি",
    "Open Settings, then Sound or Modes, and turn on Do Not Disturb.": "সংহতিসমূহ খোলক, তাৰ পিছত শব্দ বা ধৰণসমূহ, আৰু বিঘ্নিত নকৰিব অন কৰক।",
    "Allow calls from Favourites so your family can still reach you.": "প্ৰিয়সকলৰ পৰা ফোন কৰাৰ অনুমতি দিয়ক যাতে আপোনাৰ পৰিয়ালে এতিয়াও আপোনাৰ ওচৰলৈ যাব পাৰে।",
    "Set it from 10 PM to 7 AM — spam stays quiet till morning.": "ৰাতিপুৱা ১০ বজাৰ পৰা পুৱা ৭ বজালৈ ছেট কৰক — স্পেম ৰাতিপুৱালৈকে নিস্তব্ধ হৈ থাকে।",
    "Do Not Disturb": "ডিষ্টাৰ্ব নকৰিব",
    "Allowed calls": "অনুমোদিত কল",
    "Favourites": "প্ৰিয়",
    "Quiet hours": "নিস্তব্ধ ঘন্টা",
    "sharing where you are": "আপুনি ক'ত আছে তাত শ্বেয়াৰ কৰা",
    "Open the family chat on WhatsApp.": "হোৱাটছএপত পৰিয়ালৰ আড্ডাটো খুলিব।",
    "Tap the paperclip or plus, then choose Location.": "পেপাৰক্লিপ বা প্লাছ টেপ কৰক, তাৰ পিছত অৱস্থান নিৰ্ব্বাচন কৰক।",
    "Choose Share live location for 1 hour, then tap Send.": "1 ঘণ্টাৰ বাবে লাইভ অৱস্থান অংশীদাৰী কৰক নিৰ্ব্বাচন কৰক, তাৰ পিছত পঠাওক টেপ কৰক।",
    "Family chat": "পৰিয়ালৰ আড্ডা",
    "Live location · 1 hour": "লাইভ স্থান · ১ ঘন্টা",
    "Share live location": "লাইভ স্থান শ্বেয়াৰ কৰক",
    "Stop sharing": "শ্বেয়াৰ কৰা বন্ধ কৰক",
    "asking AI a question": "এআইক এটা প্ৰশ্ন সুধিছে",
    "Type or speak your question in your own words.": "আপোনাৰ প্ৰশ্নটো নিজৰ শব্দত টাইপ কৰক বা কওক।",
    "Read the answer slowly. AI can be wrong.": "উত্তৰটো লাহে লাহে পঢ়ক। এআই ভুল হ’ব পাৰে।",
    "Always check with your doctor or the office before acting.": "কাম কৰাৰ আগতে সদায় চিকিৎসক বা কাৰ্যালয়ৰ লগত পৰীক্ষা কৰক।",
    "You asked": "আপুনি সুধিলে",
    "What are the side effects of amlodipine?": "হৃদযন্ত্ৰৰ ক্ষেত্ৰত amlodipine ৰ কি প্ৰভাৱ দেখা গৈছে?",
    "AI helper": "এআই সহায়ক",
    "Common side effects include ankle swelling and feeling tired. Please check with your doctor.": "সাধাৰণ পাৰ্শ্বক্ৰিয়াৰ ভিতৰত ভৰিৰ গোৰোহা ফুলা আৰু ভাগৰুৱা অনুভৱ কৰা আদি অন্তৰ্ভুক্ত। অনুগ্ৰহ কৰি চিকিৎসকৰ লগত পৰীক্ষা কৰক।",
    "Check with your doctor before changing any medicine.": "কোনো ঔষধ সলনি কৰাৰ আগতে চিকিৎসকৰ লগত পৰীক্ষা কৰক।",
    "a voice that sounds like family": "পৰিয়ালৰ দৰে শুনা এটা মাত",
    "A copied voice can sound exactly like your son or daughter.": "কপি কৰা মাত এটা আপোনাৰ পুত্ৰ বা ছোৱালীৰ দৰেই শুনা যাব পাৰে।",
    "Hang up and call their saved number yourself.": "ফোনটো কাটি নিজৰ চেভ কৰা নম্বৰত নিজেই ফোন কৰক।",
    "Agree on a family code word that only you know.": "কেৱল আপুনিহে জনা এটা পৰিয়ালৰ ক’ড শব্দৰ ওপৰত একমত হওক।",
    "Son": "পুত্ৰ",
    "Voice can be copied": "কণ্ঠ কপি কৰিব পাৰিব",
    "Hang up and call back": "ফোনটো কাটি ফোন কৰক",
    "clearing old forwards": "পুৰণি ফৰৱাৰ্ড ক্লিয়াৰিং",
    "Open WhatsApp, then Settings, then Storage and data.": "WhatsApp খোলক, তাৰ পিছত Settings, তাৰ পিছত Storage আৰু data খোলক।",
    "Tap Manage storage and choose Larger than 5 MB.": "সংৰক্ষণ ব্যৱস্থাপনা কৰক টেপ কৰক আৰু 5 MB তকৈ ডাঙৰ নিৰ্ব্বাচন কৰক।",
    "Delete only forwarded videos. Your own photos stay safe.": "কেৱল ফৰৱাৰ্ড কৰা ভিডিঅ' মচি পেলাওক। নিজৰ ফটো নিৰাপদে থাকক।",
    "Manage storage": "সংৰক্ষণ ব্যৱস্থাপনা কৰক",
    "Larger than 5 MB": "৫ মেগাবাইটতকৈ ডাঙৰ",
    "Good morning video": "শুভ ৰাতিপুৱা ভিডিঅ'",
    "Forwarded video": "ফৰৱাৰ্ড কৰা হৈছে ভিডিঅ'",
    "Delete selected": "নিৰ্বাচিত মচি পেলাওক",
    "booking a ride": "ৰাইড বুকিং কৰা",
    "Check the pickup spot and the fare before you tap Book.": "আপুনি বুক টেপ কৰাৰ আগতে পিকআপ স্পট আৰু ভাড়া পৰীক্ষা কৰক।",
    "Match the last four digits of the number plate.": "নম্বৰ প্লেটৰ শেষৰ চাৰিটা অংক মিলাওক।",
    "Share the 4-digit PIN only after you sit inside.": "ভিতৰত বহি থকাৰ পিছতহে ৪ সংখ্যাৰ পিন শ্বেয়াৰ কৰক।",
    "Auto": "অটো",
    "Pickup": "পিকআপ",
    "Main gate": "মূল গেট",
    "Number plate ends with": "নম্বৰ প্লেটৰ শেষত...",
    "Ride PIN": "ৰাইড পিন",
    "Book": "কিতাপ",
    "checking before you pay": "আপুনি ধন পৰিশোধ কৰাৰ আগতে পৰীক্ষা কৰা",
    "Your UPI PIN only sends money. It never receives money.": "আপোনাৰ UPI PIN য়ে কেৱল টকাহে প্ৰেৰণ কৰে। ই কেতিয়াও টকা নাপায়।",
    "Read the receiver's name and the amount at the top.": "ৰিচিভাৰৰ নাম আৰু ওপৰত থকা পৰিমাণ পঢ়ক।",
    "Never enter your PIN to get a refund or a prize.": "ৰিফাণ্ড বা পুৰস্কাৰ পাবলৈ কেতিয়াও আপোনাৰ পিন প্ৰৱেশ নকৰিব।",
    "Paying": "ধন পৰিশোধ কৰা",
    "Sunita Sharma": "সুনীতা শৰ্মা",
    "Enter UPI PIN": "UPI PIN সুমুৱাওক",
    "PIN sends money only — never to receive.": "পিনে কেৱল টকাহে পঠায় — কেতিয়াও লাভ নকৰিব।",
    "help from your lock screen": "আপোনাৰ লক পৰ্দাৰ পৰা সহায় কৰক",
    "Open Settings and search for Emergency information.": "ছেটিংছ খোলক আৰু জৰুৰীকালীন তথ্য সন্ধান কৰক।",
    "Add your blood group and two family phone numbers.": "আপোনাৰ ব্লাড গ্ৰুপ আৰু দুটা পৰিয়ালৰ ফোন নম্বৰ যোগ কৰক।",
    "Anyone can see this from the lock screen without your password.": "আপোনাৰ পাছৱৰ্ড অবিহনে লক পৰ্দাৰ পৰা যিকোনো ব্যক্তিয়ে এইটো চাব পাৰে।",
    "Emergency information": "জৰুৰীকালীন তথ্য",
    "Blood group": "তেজৰ গোট",
    "Daughter": "ছোৱালী",
    "Call": "ফোন কৰক",
  },
};
