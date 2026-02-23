import { Link } from "react-router-dom";
import RestaurantList from "../../components/restaurants/RestaurantList";
import { useRestaurantsController } from "../../controllers/useRestaurantsController";

const RestaurantsPage = () => {
  const { restaurants } = useRestaurantsController();

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90">
            Admin Overview
          </p>
          <h1 className="text-2xl font-bold text-white">Partner Restaurants</h1>
          <p className="text-sm text-slate-300">
            Manage your burger, pizza, doner, coffee and other partner places.
          </p>
        </div>

        <Link
          to="/admin/restaurants/new"
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400"
        >
          Add New Restaurant
        </Link>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-300">Total Partners</p>
          <p className="mt-1 text-2xl font-bold text-white">
            {restaurants.length}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-300">Avg Rating</p>
          <p className="mt-1 text-2xl font-bold text-white">
            {restaurants.length
              ? (
                  restaurants.reduce(
                    (sum, restaurant) => sum + restaurant.review.score,
                    0,
                  ) / restaurants.length
                ).toFixed(1)
              : "0.0"}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-300">Live Deals</p>
          <p className="mt-1 text-2xl font-bold text-white">
            {restaurants.reduce(
              (sum, restaurant) => sum + restaurant.deals.length,
              0,
            )}
          </p>
        </div>
      </div>

      <RestaurantList restaurants={restaurants} />
    </section>
  );
};

export default RestaurantsPage;
