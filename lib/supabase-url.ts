/**
 * A Supabase project URL looks like https://<project-ref>.supabase.co.
 * The bare https://supabase.co is Supabase's marketing site, not an API.
 * Local Supabase (http://localhost:54321) is allowed for development.
 */
export function isValidSupabaseUrl(value?: string) {
  if (!value) return false;

  try {
    const { protocol, hostname } = new URL(value);

    if (protocol === "https:") {
      return (
        hostname.endsWith(".supabase.co") && hostname !== "supabase.co"
      );
    }

    if (protocol === "http:") {
      return hostname === "localhost" || hostname === "127.0.0.1";
    }

    return false;
  } catch {
    return false;
  }
}
