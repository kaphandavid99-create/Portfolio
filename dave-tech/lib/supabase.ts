export type SupabaseClient = any;

export const UPLOADS_BUCKET = process.env.SUPABASE_UPLOADS_BUCKET || "portfolio-uploads";

let client: SupabaseClient | null = null;

export async function getSupabaseAdmin(): Promise<SupabaseClient> {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error(
      "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set (see .env.local)."
    );
  }

  const { createClient } = await import("@supabase/supabase-js");
  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
  return client;
}
