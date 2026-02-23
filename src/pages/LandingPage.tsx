import { Link } from "react-router-dom";

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

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">
              N
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
                Run your entire food partner network from one beautiful admin
                panel.
              </h1>
              <p className="text-lg text-slate-300">
                Manage burger spots, pizza places, doner shops, coffee bars and
                restaurants with fast onboarding, easy offer control and better
                quality data for your customer mobile app.
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
