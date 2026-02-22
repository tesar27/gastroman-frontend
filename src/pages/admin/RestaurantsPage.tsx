import { Link } from "react-router-dom";
import RestaurantList from "../../components/restaurants/RestaurantList";
import { useRestaurantsController } from "../../controllers/useRestaurantsController";

const RestaurantsPage = () => {
  const { restaurants } = useRestaurantsController();

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Partner Restaurants
          </h1>
          <p className="text-sm text-slate-600">
            Manage your burger, pizza, doner, coffee and other partner places.
          </p>
        </div>

        <Link
          to="/admin/restaurants/new"
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Add New Restaurant
        </Link>
      </header>

      <RestaurantList restaurants={restaurants} />
    </section>
  );
};

export default RestaurantsPage;
