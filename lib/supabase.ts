"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { isValidSupabaseUrl } from "@/lib/supabase-url";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabase is optional. When the public URL and anon key are present the app
 * uses a real backend; without them it keeps working entirely on the device.
 */
export const isSupabaseConfigured = Boolean(
  url && anonKey && isValidSupabaseUrl(url),
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

/**
 * Supabase Auth is email based. We map the phone number the learner already
 * knows to a private, non-routable email address. The phone never leaves the
 * account metadata, and no email is ever sent.
 */
export const phoneToEmail = (phone: string) => `${phone}@phone.gentlelearn.app`;

export const emailToPhone = (email?: string | null) => {
  if (!email) return "";
  const [local] = email.split("@");
  return /^[6-9]\d{9}$/.test(local) ? local : "";
};
