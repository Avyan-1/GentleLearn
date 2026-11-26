"use client";

import { Fragment, type ReactNode } from "react";
import { useT } from "@/components/i18n";
import type { ExampleKey } from "@/lib/lessons";

function Flag({ n }: { n: number }) {
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-extrabold text-cocoa-800">
      {n}
    </span>
  );
}

function Frame({
  title,
  children,
  notes,
}: {
  title: string;
  children: ReactNode;
  notes: string[];
}) {
  const t = useT();

  return (
    <figure className="mt-5 rounded-2xl border-2 border-sand-200 bg-white p-4">
      <figcaption className="text-xs font-extrabold tracking-[0.12em] text-cocoa-600 uppercase">
        {t("Example — {title}", { title: t(title) })}
      </figcaption>
      <div className="mt-3 rounded-xl bg-sand-50 p-4">{children}</div>
      <ol className="mt-3 space-y-1.5 text-sm text-cocoa-700">
        {notes.map((note, index) => (
          <li key={note} className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand-200 text-[11px] font-extrabold text-cocoa-800">
              {index + 1}
            </span>
            <span>{t(note)}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** Keeps a money amount bold while the wording around it is translated. */
function BoldAmount({ text, amount }: { text: string; amount: string }) {
  const parts = text.split(amount);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 ? <strong>{amount}</strong> : null}
        </Fragment>
      ))}
    </>
  );
}

function FraudEmail() {
  const t = useT();

  return (
    <Frame
      title="a trick email"
      notes={[
        "The address is long and strange. Your bank uses its own short address.",
        "“Dear customer” instead of your name — a real bank knows your name.",
        "Urgent words push you to act before you think.",
        "It asks you to tap a link. Open your bank's app yourself instead.",
      ]}
    >
      <div className="flex items-start gap-3">
        <Flag n={1} />
        <div className="min-w-0">
          <p className="text-xs font-bold text-cocoa-600">{t("From")}</p>
          <p className="font-mono text-sm break-all text-cocoa-800">
            alert@bank-secure-verify.info
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <Flag n={2} />
        <div>
          <p className="text-xs font-bold text-cocoa-600">{t("Message")}</p>
          <p className="text-cocoa-800">{t("Dear customer,")}</p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <Flag n={3} />
        <p className="font-bold text-cocoa-800">
          {t("URGENT: your account will be closed today.")}
        </p>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <Flag n={4} />
        <p className="rounded-lg bg-forest-600 px-4 py-2 text-sm font-bold text-white underline">
          {t("Tap here to verify your account")}
        </p>
      </div>
    </Frame>
  );
}

function WebsiteAddress() {
  const t = useT();

  return (
    <Frame
      title="two addresses, one is fake"
      notes={[
        "The real bank uses a short, exact name you already know.",
        "The fake one adds words like “secure” and “login” to look official.",
        "A padlock only means the connection is private — it does not mean the site is honest.",
        "When unsure, type the address yourself instead of tapping a link.",
      ]}
    >
      <p className="text-xs font-bold text-cocoa-600">{t("Looks right")}</p>
      <div className="mt-1 flex items-center gap-2 rounded-lg border-2 border-forest-500 bg-white px-3 py-2">
        <span aria-hidden="true">🔒</span>
        <span className="font-mono text-sm text-cocoa-800">icicibank.com</span>
        <span className="ml-auto rounded-full bg-forest-600 px-2 py-0.5 text-[11px] font-bold text-white">
          {t("real")}
        </span>
      </div>

      <p className="mt-4 text-xs font-bold text-cocoa-600">
        {t("Looks almost right")}
      </p>
      <div className="mt-1 flex items-center gap-2 rounded-lg border-2 border-red-300 bg-red-50 px-3 py-2">
        <span aria-hidden="true">🔒</span>
        <span className="font-mono text-sm break-all text-red-600">
          icicibank-<mark className="bg-amber-300 px-0.5 text-cocoa-800">secure-login</mark>.info
        </span>
        <span className="ml-auto rounded-full bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">
          {t("fake")}
        </span>
      </div>
    </Frame>
  );
}

function OtpMessage() {
  const t = useT();

  return (
    <Frame
      title="the code that is only for you"
      notes={[
        "The code arrives by itself. You never need to read it to anyone.",
        "A real bank, delivery company or police officer will not ask for it.",
        "If someone asks, say no and end the call.",
      ]}
    >
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-forest-600 px-4 py-3 text-white">
        <p className="text-sm opacity-90">{t("Your verification code")}</p>
        <p className="display text-2xl tracking-[0.3em]">482 913</p>
        <p className="mt-1 text-xs opacity-90">
          {t("Never share this code with anyone.")}
        </p>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <Flag n={2} />
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
          <p className="text-sm font-bold">{t("Unknown caller")}</p>
          <p className="mt-1">
            {t("“I am from your bank. Please read me the code on your phone.”")}
          </p>
        </div>
      </div>
    </Frame>
  );
}

function PrizeSms() {
  const t = useT();

  return (
    <Frame
      title="a prize you never entered for"
      notes={[
        "You did not enter this draw, so you cannot have won it.",
        "Real prizes never ask for a fee before they arrive.",
        "Delete the message. You do not owe them a reply.",
      ]}
    >
      <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
        <p className="text-sm font-bold text-cocoa-600">+91 90000 00000</p>
        <p className="mt-1">
          <BoldAmount
            text={t("Congratulations! You have won ₹25,000 in the lucky draw.")}
            amount="₹25,000"
          />
        </p>
        <p className="mt-2 inline-block rounded-lg bg-amber-300 px-3 py-1 text-sm font-bold text-cocoa-800">
          {t("Pay ₹499 to claim your prize")}
        </p>
      </div>
    </Frame>
  );
}

function PhotoMessage() {
  const t = useT();

  return (
    <Frame
      title="a photo waiting in your messages"
      notes={[
        "The small picture icon means a photo has arrived.",
        "Tap the photo once to see it bigger.",
        "Tap Save (or the arrow pointing down) to keep it on your phone.",
      ]}
    >
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
        <p className="text-sm font-bold text-cocoa-600">{t("Grandchild")}</p>
        <div className="mt-2 overflow-hidden rounded-xl border-2 border-sand-200">
          <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden="true">
            <rect width="320" height="180" fill="#f4e3c3" />
            <circle cx="248" cy="46" r="22" fill="#f2b749" />
            <path d="M0 180l90-70 62 44 54-38 114 64z" fill="#3f7d5e" />
            <path d="M0 180l70-40 60 26 60-30 130 44z" fill="#2a5641" opacity="0.6" />
          </svg>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-bold text-cocoa-700">
            {t("Save")}
          </span>
          <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-bold text-cocoa-700">
            {t("Open")}
          </span>
        </div>
      </div>
    </Frame>
  );
}

function VideoCall() {
  const t = useT();

  return (
    <Frame
      title="getting ready for a video call"
      notes={[
        "The green camera icon is the video call app. Tap it once.",
        "Tap the person's name, then the small camera button.",
        "The red button at the end is the one that ends the call.",
      ]}
    >
      <div className="mx-auto max-w-[250px] rounded-[2rem] border-[6px] border-cocoa-800 bg-cocoa-800">
        <div className="rounded-[1.55rem] bg-sand-50 p-3">
          <div className="flex items-center justify-between text-[11px] font-bold text-cocoa-600">
            <span>9:41</span>
            <span aria-hidden="true">▮▮▮</span>
          </div>

          <div className="relative mt-2 flex h-40 items-end justify-center overflow-hidden rounded-2xl bg-forest-600 pb-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-2xl font-bold text-cocoa-800">
              G
            </span>
            <span className="absolute top-2 left-2 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-bold text-cocoa-800">
              {t("Grandchild")}
            </span>
            <span className="absolute right-2 bottom-2 rounded bg-cocoa-800/60 px-2 py-0.5 text-[10px] font-bold text-white">
              {t("You")}
            </span>
          </div>

          <div className="mt-3 flex justify-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-sm text-white">
              🎤
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-300 text-sm text-cocoa-800">
              📷
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm text-white">
              ✕
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function BillPayment() {
  const t = useT();

  return (
    <Frame
      title="a bill ready to pay"
      notes={[
        "The company name should be exactly what is printed on your bill.",
        "Read the amount out loud before you tap Pay.",
        "The receipt at the end is your proof. Keep it until the bill shows as paid.",
      ]}
    >
      <div className="rounded-xl border-2 border-sand-200 bg-white p-4">
        <p className="text-xs font-bold text-cocoa-600">{t("Electricity bill")}</p>
        <p className="display mt-1 text-3xl text-cocoa-800">₹1,240</p>

        <dl className="mt-3 space-y-2 text-sm text-cocoa-700">
          <div className="flex justify-between gap-3">
            <dt>{t("Biller")}</dt>
            <dd className="text-right font-bold text-cocoa-800">
              {t("State Electricity Board")}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>{t("Consumer number")}</dt>
            <dd className="font-mono text-cocoa-800">XXXX 4821</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>{t("Due date")}</dt>
            <dd className="font-bold text-cocoa-800">28 Nov</dd>
          </div>
        </dl>

        <p className="mt-4 rounded-lg bg-forest-600 px-4 py-2 text-center font-bold text-white">
          {t("Pay securely")}
        </p>
      </div>
    </Frame>
  );
}

function CallerId() {
  const t = useT();

  return (
    <Frame
      title="an unexpected call"
      notes={[
        "A real bank will not phone and demand money or a code.",
        "The number on the screen proves nothing — it can be faked.",
        "Hang up and call the office on the number printed on your card or bill.",
      ]}
    >
      <div className="mx-auto max-w-[250px] rounded-[2rem] bg-cocoa-800 p-4 text-center text-white">
        <p className="text-[10px] font-extrabold tracking-[0.2em] text-sand-200 uppercase">
          {t("Incoming call")}
        </p>
        <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-sand-200 text-xl font-bold text-cocoa-800">
          ?
        </div>
        <p className="display mt-2 text-xl">{t("Unknown number")}</p>
        <p className="text-sm text-sand-200">+91 90000 00000</p>
        <p className="mt-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-cocoa-800">
          {t("“I am from your bank”")}
        </p>

        <div className="mt-4 flex justify-center gap-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm">
            ✕
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 text-sm">
            📞
          </span>
        </div>
      </div>
    </Frame>
  );
}

function StrangeLink() {
  const t = useT();

  return (
    <Frame
      title="a link you were not expecting"
      notes={[
        "You were not waiting for a parcel, so this message does not fit your life.",
        "The address ends in .info, not the delivery company's real name.",
        "Do not tap it. Check the delivery on the company's own app instead.",
      ]}
    >
      <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
        <p className="text-sm font-bold text-cocoa-600">+91 90000 00000</p>
        <p className="mt-1">{t("Your parcel is held at the depot. Pay ₹25 here:")}</p>
        <p className="mt-2 rounded-lg bg-sand-100 px-2 py-1 font-mono text-xs break-all text-forest-700 underline">
          http://parcel-fee-pay.info/track
        </p>
      </div>

      <p className="mt-3 text-xs font-bold text-cocoa-600">{t("The link preview")}</p>
      <div className="mt-1 flex items-center gap-2 rounded-lg border-2 border-red-300 bg-red-50 px-3 py-2">
        <span aria-hidden="true">🔗</span>
        <span className="font-mono text-xs break-all text-red-600">
          parcel-fee-pay.info
        </span>
        <span className="ml-auto rounded-full bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">
          {t("not real")}
        </span>
      </div>
    </Frame>
  );
}

function FamilyInTrouble() {
  const t = useT();

  return (
    <Frame
      title="a message from a new number"
      notes={[
        "A new number is the first warning, even with a familiar name.",
        "The message asks you not to call. That is the trick working.",
        "Call the saved number you already have, and ask a private question.",
      ]}
    >
      <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
        <p className="text-sm font-bold text-cocoa-600">+91 90000 11111</p>
        <p className="mt-1">
          {t("Hi Mum, it's me. My phone broke, so this is my new number.")}
        </p>
        <p className="mt-2">
          <BoldAmount
            text={t(
              "I need ₹20,000 today. Please send it quickly and don't call — I'm in a meeting.",
            )}
            amount="₹20,000"
          />
        </p>
      </div>

      <div className="mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 px-3 py-2 text-sm text-cocoa-800">
        <strong>{t("Pause.")}</strong>{" "}
        {t("Call the number you already have saved before sending anything.")}
      </div>
    </Frame>
  );
}

function VoiceTyping() {
  const t = useT();

  return (
    <Frame
      title="typing with your voice"
      notes={[
        "Tap the small microphone on the keyboard, not the green WhatsApp button.",
        "Wait for the chime, then speak your message at your normal speed.",
        "Read the words on screen before you tap Send.",
      ]}
    >
      <div className="rounded-xl border-2 border-sand-200 bg-white p-3">
        <p className="text-xs font-bold text-cocoa-600">{t("Your message")}</p>
        <p className="mt-1 rounded-lg bg-sand-50 px-3 py-2 text-cocoa-800">
          {t("Hello beta, I reached home safely.")}
        </p>
        <div className="mt-2 flex items-center justify-center gap-4 rounded-lg bg-sand-100 py-2 text-xl">
          <span aria-hidden="true">⌨️</span>
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 text-white"
          >
            🎤
          </span>
          <span aria-hidden="true">➤</span>
        </div>
        <p className="mt-2 text-center text-xs font-bold text-cocoa-600">
          {t("Tap the microphone and speak")}
        </p>
      </div>
    </Frame>
  );
}

function QuietNight() {
  const t = useT();

  return (
    <Frame
      title="a quiet night"
      notes={[
        "Open Settings, then Sound or Modes, and turn on Do Not Disturb.",
        "Allow calls from Favourites so your family can still reach you.",
        "Set it from 10 PM to 7 AM — spam stays quiet till morning.",
      ]}
    >
      <div className="rounded-xl border-2 border-sand-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-cocoa-800">{t("Do Not Disturb")}</p>
          <span className="rounded-full bg-forest-600 px-3 py-1 text-xs font-bold text-white">
            {t("On")}
          </span>
        </div>
        <dl className="mt-3 space-y-2 text-sm text-cocoa-700">
          <div className="flex justify-between gap-3">
            <dt>{t("Allowed calls")}</dt>
            <dd className="font-bold text-cocoa-800">{t("Favourites")}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>{t("Quiet hours")}</dt>
            <dd className="font-bold text-cocoa-800">10:00 PM – 7:00 AM</dd>
          </div>
        </dl>
      </div>
    </Frame>
  );
}

function LiveLocation() {
  const t = useT();

  return (
    <Frame
      title="sharing where you are"
      notes={[
        "Open the family chat on WhatsApp.",
        "Tap the paperclip or plus, then choose Location.",
        "Choose Share live location for 1 hour, then tap Send.",
      ]}
    >
      <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
        <p className="text-sm font-bold text-cocoa-600">{t("Family chat")}</p>
        <div className="mt-2 overflow-hidden rounded-xl border-2 border-sand-200">
          <div className="flex h-24 items-center justify-center bg-forest-500/20 text-4xl">
            <span aria-hidden="true">📍</span>
          </div>
          <div className="bg-white px-3 py-2">
            <p className="text-sm font-bold">{t("Live location · 1 hour")}</p>
            <p className="text-xs font-semibold text-cocoa-600">
              {t("Share live location")}
            </p>
          </div>
        </div>
        <p className="mt-2 inline-block rounded-full bg-sand-100 px-3 py-1 text-xs font-bold text-cocoa-700">
          {t("Stop sharing")}
        </p>
      </div>
    </Frame>
  );
}

function AiChat() {
  const t = useT();

  return (
    <Frame
      title="asking AI a question"
      notes={[
        "Type or speak your question in your own words.",
        "Read the answer slowly. AI can be wrong.",
        "Always check with your doctor or the office before acting.",
      ]}
    >
      <div className="space-y-2">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-forest-600 px-4 py-3 text-white">
          <p className="text-xs opacity-90">{t("You asked")}</p>
          <p className="mt-1">
            {t("What are the side effects of amlodipine?")}
          </p>
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-cocoa-800">
          <p className="text-xs font-bold text-cocoa-600">{t("AI helper")}</p>
          <p className="mt-1 text-sm">
            {t(
              "Common side effects include ankle swelling and feeling tired. Please check with your doctor.",
            )}
          </p>
        </div>
      </div>
      <p className="mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 px-3 py-2 text-sm font-bold text-cocoa-800">
        {t("Check with your doctor before changing any medicine.")}
      </p>
    </Frame>
  );
}

function AiVoiceCall() {
  const t = useT();

  return (
    <Frame
      title="a voice that sounds like family"
      notes={[
        "A copied voice can sound exactly like your son or daughter.",
        "Hang up and call their saved number yourself.",
        "Agree on a family code word that only you know.",
      ]}
    >
      <div className="mx-auto max-w-[250px] rounded-[2rem] bg-cocoa-800 p-4 text-center text-white">
        <p className="text-[10px] font-extrabold tracking-[0.2em] text-sand-200 uppercase">
          {t("Incoming call")}
        </p>
        <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-sand-200 text-xl font-bold text-cocoa-800">
          R
        </div>
        <p className="display mt-2 text-xl">{t("Son")}</p>
        <p className="text-sm text-sand-200">+91 90000 22222</p>
        <p className="mt-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-cocoa-800">
          {t("Voice can be copied")}
        </p>
        <p className="mt-3 text-sm font-bold text-sand-100">
          {t("Hang up and call back")}
        </p>
        <div className="mt-3 flex justify-center gap-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm">
            ✕
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 text-sm">
            📞
          </span>
        </div>
      </div>
    </Frame>
  );
}

function StorageCleanup() {
  const t = useT();

  return (
    <Frame
      title="clearing old forwards"
      notes={[
        "Open WhatsApp, then Settings, then Storage and data.",
        "Tap Manage storage and choose Larger than 5 MB.",
        "Delete only forwarded videos. Your own photos stay safe.",
      ]}
    >
      <div className="rounded-xl border-2 border-sand-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-cocoa-800">{t("Manage storage")}</p>
          <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-bold text-cocoa-700">
            {t("Larger than 5 MB")}
          </span>
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center justify-between gap-3 rounded-lg bg-sand-50 px-3 py-2">
            <span>{t("Good morning video")}</span>
            <span className="font-bold text-cocoa-600">18 MB</span>
          </li>
          <li className="flex items-center justify-between gap-3 rounded-lg bg-sand-50 px-3 py-2">
            <span>{t("Forwarded video")}</span>
            <span className="font-bold text-cocoa-600">32 MB</span>
          </li>
        </ul>
        <p className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-center text-sm font-bold text-white">
          {t("Delete selected")}
        </p>
      </div>
    </Frame>
  );
}

function RideBooking() {
  const t = useT();

  return (
    <Frame
      title="booking a ride"
      notes={[
        "Check the pickup spot and the fare before you tap Book.",
        "Match the last four digits of the number plate.",
        "Share the 4-digit PIN only after you sit inside.",
      ]}
    >
      <div className="rounded-xl border-2 border-sand-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-cocoa-800">{t("Auto")}</p>
          <p className="font-bold text-cocoa-800">₹85</p>
        </div>
        <dl className="mt-3 space-y-2 text-sm text-cocoa-700">
          <div className="flex justify-between gap-3">
            <dt>{t("Pickup")}</dt>
            <dd className="font-bold text-cocoa-800">{t("Main gate")}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>{t("Number plate ends with")}</dt>
            <dd className="font-mono font-bold text-cocoa-800">4821</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt>{t("Ride PIN")}</dt>
            <dd className="font-mono text-lg font-bold text-forest-700">7319</dd>
          </div>
        </dl>
        <p className="mt-3 rounded-lg bg-forest-600 px-4 py-2 text-center font-bold text-white">
          {t("Book")}
        </p>
      </div>
    </Frame>
  );
}

function UpiPin() {
  const t = useT();

  return (
    <Frame
      title="checking before you pay"
      notes={[
        "Your UPI PIN only sends money. It never receives money.",
        "Read the receiver's name and the amount at the top.",
        "Never enter your PIN to get a refund or a prize.",
      ]}
    >
      <div className="rounded-xl border-2 border-sand-200 bg-white p-4">
        <p className="text-xs font-bold text-cocoa-600">{t("Paying")}</p>
        <p className="display mt-1 text-2xl text-cocoa-800">{t("Sunita Sharma")}</p>
        <p className="display text-3xl text-cocoa-800">₹1,250</p>
        <div className="mt-3 rounded-lg bg-sand-100 px-3 py-2 text-center font-bold text-cocoa-700">
          {t("Enter UPI PIN")}
        </div>
        <p className="mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 px-3 py-2 text-xs font-bold text-cocoa-800">
          {t("PIN sends money only — never to receive.")}
        </p>
      </div>
    </Frame>
  );
}

function EmergencyCard() {
  const t = useT();

  return (
    <Frame
      title="help from your lock screen"
      notes={[
        "Open Settings and search for Emergency information.",
        "Add your blood group and two family phone numbers.",
        "Anyone can see this from the lock screen without your password.",
      ]}
    >
      <div className="mx-auto max-w-[260px] rounded-[2rem] border-[6px] border-cocoa-800 bg-white p-3">
        <div className="flex items-center justify-between text-[11px] font-bold text-cocoa-600">
          <span>9:41</span>
          <span aria-hidden="true">▮▮▮</span>
        </div>
        <div className="mt-3 rounded-xl bg-sand-100 p-3">
          <p className="text-sm font-extrabold text-cocoa-800">
            {t("Emergency information")}
          </p>
          <dl className="mt-2 space-y-1 text-xs text-cocoa-700">
            <div className="flex justify-between gap-2">
              <dt>{t("Blood group")}</dt>
              <dd className="font-bold text-cocoa-800">B+</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt>{t("Son")}</dt>
              <dd className="font-bold text-cocoa-800">Ravi</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt>{t("Daughter")}</dt>
              <dd className="font-bold text-cocoa-800">Meena</dd>
            </div>
          </dl>
          <p className="mt-2 rounded-lg bg-red-600 px-3 py-1.5 text-center text-xs font-bold text-white">
            {t("Call")}
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function StepExample({ kind }: { kind: ExampleKey }) {
  switch (kind) {
    case "fraud-email":
      return <FraudEmail />;
    case "website-address":
      return <WebsiteAddress />;
    case "otp-message":
      return <OtpMessage />;
    case "prize-sms":
      return <PrizeSms />;
    case "photo-message":
      return <PhotoMessage />;
    case "video-call":
      return <VideoCall />;
    case "bill-payment":
      return <BillPayment />;
    case "caller-id":
      return <CallerId />;
    case "strange-link":
      return <StrangeLink />;
    case "family-in-trouble":
      return <FamilyInTrouble />;
    case "voice-typing":
      return <VoiceTyping />;
    case "quiet-night":
      return <QuietNight />;
    case "live-location":
      return <LiveLocation />;
    case "ai-chat":
      return <AiChat />;
    case "ai-voice-call":
      return <AiVoiceCall />;
    case "storage-cleanup":
      return <StorageCleanup />;
    case "ride-booking":
      return <RideBooking />;
    case "upi-pin":
      return <UpiPin />;
    case "emergency-card":
      return <EmergencyCard />;
    default:
      return null;
  }
}
