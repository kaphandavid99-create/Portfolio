"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <form action={formAction} className="surface-card w-full max-w-sm p-6 sm:p-8">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Admin Login</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Sign in to manage your portfolio content.
        </p>

        <label
          htmlFor="password"
          className="block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2.5 text-sm text-slate-900 dark:text-white mb-4 focus:outline-none focus:ring-2 focus:ring-mint-500"
        />

        {state?.error && (
          <p className="text-sm text-red-500 dark:text-red-400 mb-4">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-mint-500 px-4 py-2.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-mint-600 disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </main>
  );
}
