import type { Restaurant, RestaurantFormValues } from "../models/restaurant";
import { STORAGE_KEYS } from "./storageKeys";
import { createId } from "../utils/createId";

type SeedRestaurantInput = {
  name: string;
  category: string;
  address: string;
  openingTime: string;
  mainImageUrl: string;
  reviewScore: number;
  reviewCount: number;
  deals: string[];
};

const toSeedRestaurant = (input: SeedRestaurantInput): Restaurant => {
  const now = new Date().toISOString();

  return {
    id: createId(),
    name: input.name,
    category: input.category,
    address: input.address,
    openingTime: input.openingTime,
    mainImageUrl: input.mainImageUrl,
    review: { score: input.reviewScore, count: input.reviewCount },
    deals: input.deals.map((title) => ({
      id: createId(),
      title,
      description: title,
    })),
    createdAt: now,
    updatedAt: now,
  };
};

const seedRestaurants: Restaurant[] = [
  {
    name: "Burger Studio",
    category: "Burger",
    address: "12 Main Street",
    openingTime: "09:00 - 23:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.7,
    reviewCount: 294,
    deals: ["1+1 Classic Burger", "Free Fries with Double Burger"],
  },
  {
    name: "Pizza Corner",
    category: "Pizza",
    address: "49 Lake Avenue",
    openingTime: "10:00 - 22:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.5,
    reviewCount: 182,
    deals: ["1+1 Margherita", "Family Combo 30% Off"],
  },
  {
    name: "Doner House",
    category: "Doner",
    address: "8 Riverside Blvd",
    openingTime: "11:00 - 01:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.4,
    reviewCount: 216,
    deals: ["1+1 Chicken Doner Wrap", "Free Ayran Drink"],
  },
  {
    name: "Caffeine Lab",
    category: "Coffee",
    address: "102 City Center",
    openingTime: "07:00 - 20:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.8,
    reviewCount: 463,
    deals: ["Buy 1 Latte Get 1", "Pastry + Cappuccino Bundle"],
  },
  {
    name: "Sakura Sushi Bar",
    category: "Sushi",
    address: "17 Old Market Lane",
    openingTime: "12:00 - 23:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.6,
    reviewCount: 319,
    deals: ["2-for-1 Salmon Maki", "Sushi Boat 25% Off"],
  },
  {
    name: "Wok Street",
    category: "Asian",
    address: "63 Garden Road",
    openingTime: "11:30 - 22:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.3,
    reviewCount: 148,
    deals: ["1+1 Noodle Bowls", "Free Spring Rolls"],
  },
  {
    name: "Napoli Oven",
    category: "Pizza",
    address: "22 West End",
    openingTime: "10:30 - 23:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.7,
    reviewCount: 254,
    deals: ["1+1 Pepperoni", "Dessert on the House"],
  },
  {
    name: "Brew & Bean",
    category: "Coffee",
    address: "5 University Square",
    openingTime: "06:30 - 19:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.5,
    reviewCount: 205,
    deals: ["Morning Coffee Duo", "1+1 Iced Americano"],
  },
  {
    name: "Grill District",
    category: "Burger",
    address: "34 South Hill",
    openingTime: "10:00 - 00:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.6,
    reviewCount: 188,
    deals: ["2-for-1 Smash Burger", "Kids Menu Free on Weekends"],
  },
  {
    name: "Pho Brothers",
    category: "Asian",
    address: "89 East Cross",
    openingTime: "11:00 - 22:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.4,
    reviewCount: 173,
    deals: ["1+1 Pho Classic", "Vietnamese Starter Combo"],
  },
  {
    name: "Tokyo Roll",
    category: "Sushi",
    address: "41 Bridge Street",
    openingTime: "12:00 - 22:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.5,
    reviewCount: 229,
    deals: ["1+1 California Rolls", "Sashimi Set 20% Off"],
  },
  {
    name: "Mediterraneo",
    category: "Restaurant",
    address: "71 Harbor View",
    openingTime: "12:00 - 23:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.7,
    reviewCount: 341,
    deals: ["Dinner for Two 35% Off", "Free Dessert with Main Course"],
  },
  {
    name: "Kebab Masters",
    category: "Doner",
    address: "2 Station Road",
    openingTime: "10:00 - 01:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.2,
    reviewCount: 127,
    deals: ["1+1 Mixed Doner", "Late Night Combo"],
  },
  {
    name: "Brunch Society",
    category: "Restaurant",
    address: "15 Park Crescent",
    openingTime: "08:00 - 17:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.8,
    reviewCount: 279,
    deals: ["1+1 Eggs Benedict", "Coffee Refill Free"],
  },
  {
    name: "Poke Harbor",
    category: "Asian",
    address: "56 Marina Street",
    openingTime: "11:30 - 21:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.6,
    reviewCount: 201,
    deals: ["1+1 Poke Bowls", "Healthy Lunch Combo"],
  },
  {
    name: "Dolce Pizza",
    category: "Pizza",
    address: "29 Elm Street",
    openingTime: "11:00 - 23:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.3,
    reviewCount: 144,
    deals: ["1+1 Quattro Formaggi", "Pizza + Soda Combo"],
  },
  {
    name: "Roast Republic",
    category: "Coffee",
    address: "99 Tech Avenue",
    openingTime: "07:30 - 21:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.7,
    reviewCount: 398,
    deals: ["1+1 Flat White", "Free Cookie with Espresso"],
  },
  {
    name: "Seoul Kitchen",
    category: "Asian",
    address: "47 Midtown Lane",
    openingTime: "12:00 - 22:30",
    mainImageUrl:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.5,
    reviewCount: 265,
    deals: ["Korean BBQ Set 2-for-1", "Bibimbap + Drink Deal"],
  },
  {
    name: "Ocean Maki",
    category: "Sushi",
    address: "13 Crystal Quay",
    openingTime: "12:00 - 23:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.4,
    reviewCount: 157,
    deals: ["1+1 Dragon Roll", "Sushi Lunch Box 30% Off"],
  },
  {
    name: "Urban Bites",
    category: "Restaurant",
    address: "77 Central Plaza",
    openingTime: "10:00 - 22:00",
    mainImageUrl:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
    reviewScore: 4.6,
    reviewCount: 312,
    deals: ["Chef Menu 25% Off", "1+1 Signature Bowl"],
  },
].map(toSeedRestaurant);

const getStored = (): Restaurant[] => {
  const raw = localStorage.getItem(STORAGE_KEYS.restaurants);

  if (!raw) {
    localStorage.setItem(STORAGE_KEYS.restaurants, JSON.stringify(seedRestaurants));
    return seedRestaurants;
  }

  try {
    const parsed = JSON.parse(raw) as Restaurant[];

    const existingNames = new Set(
      parsed.map((restaurant) => restaurant.name.toLowerCase()),
    );

    const missingSeedRestaurants = seedRestaurants.filter(
      (restaurant) => !existingNames.has(restaurant.name.toLowerCase()),
    );

    if (missingSeedRestaurants.length > 0) {
      const merged = [...parsed, ...missingSeedRestaurants];
      localStorage.setItem(STORAGE_KEYS.restaurants, JSON.stringify(merged));
      return merged;
    }

    return parsed;
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
