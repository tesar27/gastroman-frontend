import type { Restaurant, RestaurantFormValues } from "../models/restaurant";
import { STORAGE_KEYS } from "./storageKeys";
import { createId } from "../utils/createId";

const seedRestaurants: Restaurant[] = [
  {
    id: createId(),
    name: "Burger Studio",
    category: "Burger",
    address: "12 Main Street",
    openingTime: "09:00 - 23:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    review: { score: 4.7, count: 294 },
    deals: [
      { id: createId(), title: "1+1 Classic Burger", description: "Buy one classic burger and get one free." },
      { id: createId(), title: "Free Fries", description: "Free fries with any double burger order." },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: createId(),
    name: "Pizza Corner",
    category: "Pizza",
    address: "49 Lake Avenue",
    openingTime: "10:00 - 22:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    review: { score: 4.5, count: 182 },
    deals: [
      { id: createId(), title: "1+1 Margherita", description: "Order one medium margherita and get one free." },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const getStored = (): Restaurant[] => {
  const raw = localStorage.getItem(STORAGE_KEYS.restaurants);

  if (!raw) {
    localStorage.setItem(STORAGE_KEYS.restaurants, JSON.stringify(seedRestaurants));
    return seedRestaurants;
  }

  try {
    return JSON.parse(raw) as Restaurant[];
  } catch {
    localStorage.setItem(STORAGE_KEYS.restaurants, JSON.stringify(seedRestaurants));
    return seedRestaurants;
  }
};

const setStored = (restaurants: Restaurant[]) => {
  localStorage.setItem(STORAGE_KEYS.restaurants, JSON.stringify(restaurants));
};

const mapFormToRestaurant = (values: RestaurantFormValues): Omit<Restaurant, "id" | "createdAt" | "updatedAt"> => ({
  name: values.name,
  category: values.category,
  address: values.address,
  openingTime: values.openingTime,
  mainImageUrl: values.mainImageUrl,
  review: {
    score: values.reviewScore,
    count: values.reviewCount,
  },
  deals: values.dealsText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((title) => ({
      id: createId(),
      title,
      description: title,
    })),
});

export const restaurantService = {
  list(): Restaurant[] {
    return getStored();
  },

  getById(id: string): Restaurant | null {
    const restaurants = getStored();
    return restaurants.find((restaurant) => restaurant.id === id) ?? null;
  },

  create(values: RestaurantFormValues): Restaurant {
    const restaurants = getStored();
    const now = new Date().toISOString();

    const newRestaurant: Restaurant = {
      id: createId(),
      ...mapFormToRestaurant(values),
      createdAt: now,
      updatedAt: now,
    };

    const next = [newRestaurant, ...restaurants];
    setStored(next);
    return newRestaurant;
  },

  update(id: string, values: RestaurantFormValues): Restaurant | null {
    const restaurants = getStored();
    const current = restaurants.find((restaurant) => restaurant.id === id);
    if (!current) return null;

    const nextRestaurant: Restaurant = {
      ...current,
      ...mapFormToRestaurant(values),
      id,
      createdAt: current.createdAt,
      updatedAt: new Date().toISOString(),
    };

    const nextList = restaurants.map((restaurant) => (restaurant.id === id ? nextRestaurant : restaurant));
    setStored(nextList);
    return nextRestaurant;
  },
};
