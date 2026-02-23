import { Link } from "react-router-dom";
import type { Restaurant } from "../../models/restaurant";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  if (restaurants.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center">
        <p className="text-slate-300">
          No partner restaurants yet. Add your first one.
        </p>
        <Link
          to="/admin/restaurants/new"
          className="mt-4 inline-flex rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400"
        >
          Add Restaurant
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {restaurants.map((restaurant) => (
        <article
          key={restaurant.id}
          className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur"
        >
          <img
            src={restaurant.mainImageUrl}
            alt={restaurant.name}
            className="h-40 w-full object-cover"
          />
          <div className="space-y-2 p-4">
            <h3 className="text-lg font-semibold text-white">
              {restaurant.name}
            </h3>
            <p className="text-sm text-slate-300">
              {restaurant.category} • {restaurant.address}
            </p>
            <p className="text-sm text-slate-300">
              Open: {restaurant.openingTime}
            </p>
            <p className="text-sm text-slate-200">
              ⭐ {restaurant.review.score} ({restaurant.review.count})
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {restaurant.deals.slice(0, 2).map((deal) => (
                <span
                  key={deal.id}
                  className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200"
                >
                  {deal.title}
                </span>
              ))}
            </div>
            <Link
              to={`/admin/restaurants/${restaurant.id}/edit`}
              className="inline-flex rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-slate-100 hover:bg-white/10"
            >
              Edit Restaurant
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default RestaurantList;
