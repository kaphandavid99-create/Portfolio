"use server";

import { redirect } from "next/navigation";
import { checkPassword, createSession } from "@/lib/session";

export type LoginState = { error?: string } | undefined;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") || "");

  if (!process.env.ADMIN_PASSWORD) {
    return { error: "Admin password is not configured on the server. Set ADMIN_PASSWORD in .env.local." };
  }

  if (!password || !checkPassword(password)) {
    return { error: "Incorrect password." };
  }

  await createSession();
  redirect("/admin");
}
