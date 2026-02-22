import { useEffect, useState } from "react";
import type { Restaurant, RestaurantFormValues } from "../models/restaurant";
import { restaurantService } from "../services/restaurantService";

export const useRestaurantsController = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const reload = () => {
    setRestaurants(restaurantService.list());
  };

  useEffect(() => {
    reload();
  }, []);

  const createRestaurant = (values: RestaurantFormValues) => {
    restaurantService.create(values);
    reload();
  };

  const updateRestaurant = (id: string, values: RestaurantFormValues) => {
    restaurantService.update(id, values);
    reload();
  };

  return {
    restaurants,
    createRestaurant,
    updateRestaurant,
    getRestaurantById: restaurantService.getById,
  };
};
