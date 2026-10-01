import { getSupabaseAdmin } from "./supabase";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  technologies: string[];
};

export type Offering = {
  id: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
};

export type SiteContent = {
  heroImage: string;
  logo: string;
  cvUrl: string | null;
  projects: Project[];
  offerings: Offering[];
};

const CONTENT_TABLE = "site_content";
const CONTENT_ROW_ID = "main";

const DEFAULT_CONTENT: SiteContent = {
  heroImage: "/boy.jpeg",
  logo: "/logo2.png",
  cvUrl: null,
  projects: [],
  offerings: [],
};

export async function getContent(): Promise<SiteContent> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from(CONTENT_TABLE)
      .select("data")
      .eq("id", CONTENT_ROW_ID)
      .maybeSingle();

    if (error || !data) return DEFAULT_CONTENT;
    return { ...DEFAULT_CONTENT, ...(data.data as Partial<SiteContent>) };
  } catch {
    return DEFAULT_CONTENT;
  }
}

export async function saveContent(content: SiteContent): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(CONTENT_TABLE).upsert({
    id: CONTENT_ROW_ID,
    data: content,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    throw new Error(`Failed to save content: ${error.message}`);
  }
}
