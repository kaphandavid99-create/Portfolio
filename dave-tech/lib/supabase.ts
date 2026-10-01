export type SupabaseClient = any;

export const UPLOADS_BUCKET = process.env.SUPABASE_UPLOADS_BUCKET || "portfolio-uploads";

let client: SupabaseClient | null = null;

const mockClient = {
  from: () => ({ select: () => ({ eq: () => ({ maybeSingle: async () => ({ data: null, error: null }) }) }), upsert: async () => ({ error: null }) }),
  storage: { from: () => ({ upload: async () => ({ error: null }), getPublicUrl: () => ({ data: { publicUrl: "" } }) }) },
};

export async function getSupabaseAdmin(): Promise<SupabaseClient> {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Supabase not configured, using mock client");
    }
    return mockClient;
  }

  try {
    const { createClient } = require("@supabase/supabase-js");
    client = createClient(url, serviceRoleKey, {
      auth: { persistSession: false },
    });
  } catch {
    return mockClient;
  }

  return client;
}
