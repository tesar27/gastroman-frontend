import { Link } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80";

const showcaseImages = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
];

const highlights = [
  {
    title: "Partner Onboarding",
    description:
      "Add new restaurants in minutes with picture, location, opening hours, categories, and offer setup.",
  },
  {
    title: "Deals Management",
    description:
      "Create and edit 1+1 burger, pizza, doner, coffee and seasonal campaigns from one dashboard.",
  },
  {
    title: "Performance Tracking",
    description:
      "Track ratings, partner activity and offer quality to scale your network with better decisions.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    info: "Perfect for first city launch",
    points: ["Up to 20 partners", "Basic deal editor", "Manual review updates"],
  },
  {
    name: "Growth",
    price: "$49/mo",
    info: "For active partner operations",
    points: [
      "Unlimited partners",
      "Advanced offer scheduling",
      "Review and opening-time sync",
    ],
  },
  {
    name: "Scale",
    price: "$149/mo",
    info: "Multi-city enterprise control",
    points: [
      "Role-based admin access",
      "Exportable reports",
      "Priority support",
    ],
  },
];

// Sign up at https://formspree.io, create a form, and paste your form ID here.
// Your submissions will be forwarded to the email you registered with.
const FORMSPREE_ID = ""; // e.g. "xpwzknjv"

type ApplicationForm = {
  businessName: string;
  category: string;
  ownerName: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

const EMPTY_APPLICATION: ApplicationForm = {
  businessName: "",
  category: "",
  ownerName: "",
  email: "",
  phone: "",
  city: "",
  message: "",
};

const LandingPage = () => {
  const [application, setApplication] = useState<ApplicationForm>(EMPTY_APPLICATION);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const updateField = <K extends keyof ApplicationForm>(key: K, value: string) => {
    setApplication((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    if (!FORMSPREE_ID) {
      // No Formspree ID configured — simulate success for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setApplication(EMPTY_APPLICATION);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "Business Name": application.businessName,
          Category: application.category,
          "Owner Name": application.ownerName,
          Email: application.email,
          Phone: application.phone || "—",
          City: application.city,
          Message: application.message || "—",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setApplication(EMPTY_APPLICATION);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">
              G
            </span>
            Gastroman
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="#features"
              className="hidden text-sm text-slate-300 hover:text-white md:inline-block"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="hidden text-sm text-slate-300 hover:text-white md:inline-block"
            >
              Gallery
            </a>
            <a
              href="#apply"
              className="hidden text-sm text-slate-300 hover:text-white md:inline-block"
            >
              Become a Partner
            </a>
            <Link
              to="/admin/auth"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400"
            >
              Admin Login
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImage}
            alt="Restaurant interior"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                Restaurant Management Platform
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Run the online presence of your venue
              </h1>
              <p className="text-lg text-slate-300">
                Manage your venue listings, deals, reviews and performance in
                one place and focus on growing your network and sales.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/admin/auth"
                  className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
                >
                  Start Managing Partners
                </Link>
                <a
                  href="#plans"
                  className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  Explore Plans
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm text-slate-300">
                  Active Partner Restaurants
                </p>
                <p className="mt-2 text-4xl font-bold">286</p>
                <p className="mt-1 text-sm text-emerald-300">+18 this month</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm text-slate-300">Live Deals</p>
                <p className="mt-2 text-4xl font-bold">1,209</p>
                <p className="mt-1 text-sm text-emerald-300">
                  Across 6 categories
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm text-slate-300">Average Review Score</p>
                <p className="mt-2 text-4xl font-bold">4.6</p>
                <p className="mt-1 text-sm text-emerald-300">
                  Based on synced partner data
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Everything your restaurant admin team needs
            </h2>
            <p className="mt-3 text-slate-300">
              Designed for fast day-to-day operations with clear workflows and
              scalable structure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-slate-900/70 py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-3xl font-bold md:text-4xl">
                Food & Restaurant Showcase
              </h2>
              <p className="text-sm text-slate-400">
                Mock free stock images for MVP presentation
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {showcaseImages.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={image}
                    alt={`Restaurant preview ${index + 1}`}
                    className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Simple plans for every growth stage
            </h2>
            <p className="mt-3 text-slate-300">
              Choose what fits your operation and scale without changing tools.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm text-emerald-300">{plan.name}</p>
                <p className="mt-2 text-3xl font-bold text-white">
                  {plan.price}
                </p>
                <p className="mt-2 text-sm text-slate-300">{plan.info}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Partner Application Form */}
        <section id="apply" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <p className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                Become a Partner
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Apply to join our network
              </h2>
              <p className="mt-3 text-slate-300">
                Burger bars, pizza places, coffee shops, doner joints — if you
                serve great food, we want you on the platform.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-white">Application sent!</h3>
                <p className="mt-2 text-slate-300">
                  Thanks for applying. We'll be in touch within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleApply}
                className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-1 text-sm text-white/80">
                    <span className="font-medium">Business Name</span>
                    <input
                      value={application.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="e.g. Joe's Burger Shack"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
                    />
                  </label>

                  <label className="space-y-1 text-sm text-white/80">
                    <span className="font-medium">Category</span>
                    <select
                      value={application.category}
                      onChange={(e) => updateField("category", e.target.value)}
                      required
                      className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-400"
                    >
                      <option value="" disabled>Select category…</option>
                      <option>Burger</option>
                      <option>Pizza</option>
                      <option>Coffee</option>
                      <option>Sushi</option>
                      <option>Doner</option>
                      <option>Asian</option>
                      <option>Restaurant</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-1 text-sm text-white/80">
                    <span className="font-medium">Your Name</span>
                    <input
                      value={application.ownerName}
                      onChange={(e) => updateField("ownerName", e.target.value)}
                      placeholder="Owner / Manager"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
                    />
                  </label>

                  <label className="space-y-1 text-sm text-white/80">
                    <span className="font-medium">Email</span>
                    <input
                      type="email"
                      value={application.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-1 text-sm text-white/80">
                    <span className="font-medium">
                      Phone{" "}
                      <span className="text-white/40 font-normal">(optional)</span>
                    </span>
                    <input
                      type="tel"
                      value={application.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+49 …"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
                    />
                  </label>

                  <label className="space-y-1 text-sm text-white/80">
                    <span className="font-medium">City</span>
                    <input
                      value={application.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="Berlin, Munich, Hamburg…"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
                    />
                  </label>
                </div>

                <label className="block space-y-1 text-sm text-white/80">
                  <span className="font-medium">
                    Anything else?{" "}
                    <span className="text-white/40 font-normal">(optional)</span>
                  </span>
                  <textarea
                    value={application.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={3}
                    placeholder="Tell us about your venue, number of locations, current deals…"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
                  />
                </label>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-emerald-500 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Apply to Partner"}
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-900 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Ready to launch your partner admin operations?
              </h3>
              <p className="mt-1 text-slate-300">
                Log in now and start adding restaurants and deals in minutes.
              </p>
            </div>
            <Link
              to="/admin/auth"
              className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
            >
              Go to Admin Login
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
