import { Link } from "react-router-dom";

const featureItems = [
  {
    title: "Discover restaurants",
    description:
      "Find and onboard burger, pizza, doner, coffee and fine dining partners in one place.",
  },
  {
    title: "Publish cool deals",
    description:
      "Create and maintain offers like 1+1 burgers and 1+1 pizzas in minutes.",
  },
  {
    title: "Manage everything",
    description:
      "Update restaurant images, opening times, addresses, ratings and offers from your admin dashboard.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 font-bold text-white">
            N
          </span>
          <span className="text-xl font-semibold">NeoTaste Partner</span>
        </div>
        <Link
          to="/admin/auth"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Sign in as Admin
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 pb-20 pt-10 lg:flex-row lg:gap-16">
        <section className="max-w-2xl text-center lg:text-left">
          <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Restaurant Management Platform
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Grow your restaurant deals network from one admin panel.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Manage all your partner restaurants for your mobile app: add new
            places, upload main photos, configure deals, keep opening times
            updated, and maintain review scores.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              to="/admin/auth"
              className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Get started
            </Link>
            <Link
              to="/admin/restaurants"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              View admin panel
            </Link>
          </div>
        </section>

        <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="grid gap-4">
            {featureItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
