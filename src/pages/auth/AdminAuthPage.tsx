import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthController } from "../../controllers/useAuthController";

type AuthMode = "signin" | "signup";

const AdminAuthPage = () => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuthController();

  const [mode, setMode] = useState<AuthMode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === "signup") {
      signUp({ name, email, password });
    } else {
      signIn({ email, password });
    }

    navigate("/admin/restaurants");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 text-slate-100 flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_35%)]" />

      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Admin Access</h1>
          <Link
            to="/"
            className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            Back home
          </Link>
        </div>

        <div className="mb-6 grid grid-cols-2 rounded-xl border border-white/10 bg-slate-900/60 p-1 text-sm font-medium">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`rounded-lg px-3 py-2 transition ${mode === "signin" ? "bg-white text-slate-900 shadow" : "text-slate-300 hover:bg-white/10"}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`rounded-lg px-3 py-2 transition ${mode === "signup" ? "bg-white text-slate-900 shadow" : "text-slate-300 hover:bg-white/10"}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {mode === "signup" ? (
            <label className="block text-sm text-slate-200">
              <span className="mb-1 block font-medium">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 outline-none focus:border-emerald-400"
              />
            </label>
          ) : null}

          <label className="block text-sm text-slate-200">
            <span className="mb-1 block font-medium">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 outline-none focus:border-emerald-400"
            />
          </label>

          <label className="block text-sm text-slate-200">
            <span className="mb-1 block font-medium">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 outline-none focus:border-emerald-400"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white transition hover:bg-emerald-400"
          >
            {mode === "signin"
              ? "Continue to Admin Panel"
              : "Create Admin Account"}
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-300">
          This is currently a fake auth flow for MVP; you can directly continue
          to the admin panel.
        </p>
      </div>
    </div>
  );
};

export default AdminAuthPage;
