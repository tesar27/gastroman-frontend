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
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Admin Access</h1>
          <Link
            to="/"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            Back home
          </Link>
        </div>

        <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-medium">
          <button
            type="button"
            onClick={() => setMode("signin")}
            className={`rounded-lg px-3 py-2 ${mode === "signin" ? "bg-white text-slate-900 shadow" : "text-slate-500"}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`rounded-lg px-3 py-2 ${mode === "signup" ? "bg-white text-slate-900 shadow" : "text-slate-500"}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {mode === "signup" ? (
            <label className="block text-sm text-slate-700">
              <span className="mb-1 block font-medium">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
              />
            </label>
          ) : null}

          <label className="block text-sm text-slate-700">
            <span className="mb-1 block font-medium">Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
            />
          </label>

          <label className="block text-sm text-slate-700">
            <span className="mb-1 block font-medium">Password</span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-600"
          >
            {mode === "signin"
              ? "Continue to Admin Panel"
              : "Create Admin Account"}
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-500">
          This is currently a fake auth flow for MVP; you can directly continue
          to the admin panel.
        </p>
      </div>
    </div>
  );
};

export default AdminAuthPage;
