import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import type { Restaurant, RestaurantFormValues } from "../../models/restaurant";

interface RestaurantFormProps {
  initialRestaurant?: Restaurant | null;
  onSubmit: (values: RestaurantFormValues) => void;
  submitLabel: string;
}

const toFormValues = (restaurant?: Restaurant | null): RestaurantFormValues => {
  if (!restaurant) {
    return {
      name: "",
      category: "",
      address: "",
      openingTime: "",
      mainImageUrl: "",
      reviewScore: 4.5,
      reviewCount: 0,
      dealsText: "",
    };
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

  return (
    <form onSubmit={onFormSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Restaurant Name</span>
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Category</span>
          <input
            value={form.category}
            onChange={(event) => update("category", event.target.value)}
            placeholder="Burger, Pizza, Coffee"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
          />
        </label>
      </div>

      <label className="space-y-1 text-sm text-slate-700 block">
        <span className="font-medium">Address</span>
        <input
          value={form.address}
          onChange={(event) => update("address", event.target.value)}
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Opening Time</span>
          <input
            value={form.openingTime}
            onChange={(event) => update("openingTime", event.target.value)}
            placeholder="09:00 - 23:00"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Main Image URL</span>
          <input
            value={form.mainImageUrl}
            onChange={(event) => update("mainImageUrl", event.target.value)}
            placeholder="https://..."
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-700">
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
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="space-y-1 text-sm text-slate-700">
          <span className="font-medium">Review Count</span>
          <input
            value={form.reviewCount}
            onChange={(event) =>
              update("reviewCount", Number(event.target.value))
            }
            min={0}
            type="number"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
          />
        </label>
      </div>

      <label className="space-y-1 text-sm text-slate-700 block">
        <span className="font-medium">Deals (one per line)</span>
        <textarea
          value={form.dealsText}
          onChange={(event) => update("dealsText", event.target.value)}
          rows={5}
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-emerald-400"
        />
      </label>

      <button
        type="submit"
        className="inline-flex rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-600"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default RestaurantForm;
