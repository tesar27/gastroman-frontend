export interface Deal {
  id: string;
  title: string;
  description: string;
}

export interface RestaurantReview {
  score: number;
  count: number;
}

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  address: string;
  openingTime: string;
  mainImageUrl: string;
  review: RestaurantReview;
  deals: Deal[];
  createdAt: string;
  updatedAt: string;
}

export interface RestaurantFormValues {
  name: string;
  category: string;
  address: string;
  openingTime: string;
  mainImageUrl: string;
  reviewScore: number;
  reviewCount: number;
  dealsText: string;
}
