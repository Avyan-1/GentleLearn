import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const isValidPhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

/**
 * Creates the Supabase Auth user with the phone number stored in metadata.
 *
 * The service-role key is only used on the server. It lets us confirm the
 * synthetic email address immediately, so learners never wait for an email
 * they cannot receive.
 */
export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return NextResponse.json(
      {
        error:
          "Server sign-up is not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 501 },
    );
  }

  let body: { phone?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const phone = String(body.phone ?? "").replace(/\D/g, "");
  const password = String(body.password ?? "");

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please type a 10-digit mobile number." },
      { status: 400 },
    );
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: "Please choose a password of 6 letters or more." },
      { status: 400 },
    );
  }

  const admin = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error } = await admin.auth.admin.createUser({
    email: `${phone}@phone.gentlelearn.app`,
    password,
    email_confirm: true,
    user_metadata: { phone },
  });

  if (error) {
    const message = error.message.toLowerCase();
    if (
      message.includes("already") ||
      message.includes("registered") ||
      message.includes("exists")
    ) {
      return NextResponse.json(
        {
          error:
            "This number already has an account. Please sign in instead.",
        },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "We could not create the account just now." },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
