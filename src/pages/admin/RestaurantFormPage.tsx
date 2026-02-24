import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import RestaurantForm from "../../components/restaurants/RestaurantForm";
import { useRestaurantsController } from "../../controllers/useRestaurantsController";

const RestaurantFormPage = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const { createRestaurant, updateRestaurant, getRestaurantById } =
    useRestaurantsController();

  const isEdit = Boolean(restaurantId);
  const restaurant = restaurantId ? getRestaurantById(restaurantId) : null;

  if (isEdit && !restaurant) {
    return <Navigate to="/admin/restaurants" replace />;
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90">
            {isEdit ? "Edit Partner" : "New Partner"}
          </p>
          <h1 className="text-2xl font-bold text-white">
            {isEdit ? "Edit Restaurant" : "Add Restaurant"}
          </h1>
          <p className="text-sm text-slate-300">
            {isEdit
              ? "Update partner details and offers visible in your mobile app."
              : "Create a new partner restaurant with image, deals, opening time and reviews."}
          </p>
        </div>

        <Link
          to="/admin/restaurants"
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10"
        >
          Back to list
        </Link>
      </header>

      <RestaurantForm
        initialRestaurant={restaurant}
        submitLabel={isEdit ? "Save Changes" : "Create Restaurant"}
        onSubmit={(values) => {
          if (isEdit && restaurantId) {
            updateRestaurant(restaurantId, values);
          } else {
            createRestaurant(values);
          }
          navigate("/admin/restaurants");
        }}
      />
    </section>
  );
};

export default RestaurantFormPage;
