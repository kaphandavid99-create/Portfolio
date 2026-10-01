import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";
import { getContent } from "@/lib/content";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const authed = await verifySession();
  if (!authed) redirect("/admin/login");

  const content = await getContent();

  return <AdminDashboard content={content} />;
}
