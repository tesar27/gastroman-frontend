import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import type { Restaurant, RestaurantFormValues } from "../../models/restaurant";
import { categoryMockImages } from "../../services/restaurantService";

interface RestaurantFormProps {
  initialRestaurant?: Restaurant | null;
  onSubmit: (values: RestaurantFormValues) => void;
  submitLabel: string;
}

const DEFAULT_FORM: RestaurantFormValues = {
  name: "Test Burger Bar",
  category: "Burger",
  address: "Musterstraße 42, 10115 Berlin",
  openingTime: "10:00 - 22:00",
  mainImageUrl: "",
  reviewScore: 4.5,
  reviewCount: 120,
  dealsText: "2 Burgers for €12\nFree drink with any meal",
};

const getImagesForCategory = (category: string): string[] => {
  const key = category.trim().toLowerCase();
  return categoryMockImages[key] ?? categoryMockImages["default"];
};

const toFormValues = (restaurant?: Restaurant | null): RestaurantFormValues => {
  if (!restaurant) {
    return DEFAULT_FORM;
  }

  return {
    name: restaurant.name,
    category: restaurant.category,
    address: restaurant.address,
    openingTime: restaurant.openingTime,
    mainImageUrl: restaurant.mainImageUrl,
    reviewScore: restaurant.review.score,
    reviewCount: restaurant.review.count,
    dealsText: restaurant.deals.map((deal) => deal.title).join("\n"),
  };
};

const RestaurantForm = ({
  initialRestaurant,
  onSubmit,
  submitLabel,
}: RestaurantFormProps) => {
  const initialValues = useMemo(
    () => toFormValues(initialRestaurant),
    [initialRestaurant],
  );
  const [form, setForm] = useState<RestaurantFormValues>(initialValues);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  const update = <K extends keyof RestaurantFormValues>(
    key: K,
    value: RestaurantFormValues[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const categoryImages = getImagesForCategory(form.category);
  const effectiveImage = form.mainImageUrl.trim() || categoryImages[0];

  return (
    <form onSubmit={onFormSubmit} className="space-y-5">
      {/* Row 1: Name + Category */}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-white/80">
          <span className="font-medium">Restaurant Name</span>
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="space-y-1 text-sm text-white/80">
          <span className="font-medium">Category</span>
          <input
            value={form.category}
            onChange={(event) => update("category", event.target.value)}
            placeholder="Burger, Pizza, Coffee…"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
          />
        </label>
      </div>

      {/* Row 2: Address */}
      <label className="block space-y-1 text-sm text-white/80">
        <span className="font-medium">Address</span>
        <input
          value={form.address}
          onChange={(event) => update("address", event.target.value)}
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
        />
      </label>

      {/* Row 3: Opening Time + Review Score + Review Count */}
      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-1 text-sm text-white/80">
          <span className="font-medium">Opening Time</span>
          <input
            value={form.openingTime}
            onChange={(event) => update("openingTime", event.target.value)}
            placeholder="10:00 - 22:00"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="space-y-1 text-sm text-white/80">
          <span className="font-medium">Review Score</span>
          <input
            value={form.reviewScore}
            onChange={(event) =>
              update("reviewScore", Number(event.target.value))
            }
            min={0}
            max={5}
            step={0.1}
            type="number"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-emerald-400"
          />
        </label>

        <label className="space-y-1 text-sm text-white/80">
          <span className="font-medium">Review Count</span>
          <input
            value={form.reviewCount}
            onChange={(event) =>
              update("reviewCount", Number(event.target.value))
            }
            min={0}
            type="number"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-emerald-400"
          />
        </label>
      </div>

      {/* Image section */}
      <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm font-medium text-white/80">Restaurant Image</p>

        {/* Thumbnail picker */}
        <div className="flex flex-wrap gap-2">
          {categoryImages.map((url) => (
            <button
              key={url}
              type="button"
              onClick={() =>
                update("mainImageUrl", form.mainImageUrl === url ? "" : url)
              }
              className={`h-20 w-32 overflow-hidden rounded-lg border-2 transition ${
                form.mainImageUrl === url
                  ? "border-emerald-400 ring-2 ring-emerald-400/40"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={url}
                alt="option"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Custom URL input */}
        <label className="block space-y-1 text-sm text-white/60">
          <span>Or paste a custom image URL</span>
          <input
            value={form.mainImageUrl}
            onChange={(event) => update("mainImageUrl", event.target.value)}
            placeholder="https://… (leave empty to auto-pick from category)"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
          />
        </label>

        {/* Preview */}
        <div className="relative h-40 overflow-hidden rounded-lg">
          <img
            src={effectiveImage}
            alt="preview"
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
            {form.mainImageUrl.trim()
              ? "Custom image"
              : "Auto-selected for category"}
          </span>
        </div>
      </div>

      {/* Deals */}
      <label className="block space-y-1 text-sm text-white/80">
        <span className="font-medium">Deals (one per line)</span>
        <textarea
          value={form.dealsText}
          onChange={(event) => update("dealsText", event.target.value)}
          rows={4}
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/30 outline-none focus:border-emerald-400"
        />
      </label>

      <button
        type="submit"
        className="rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-400"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default RestaurantForm;
