
"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";

import {
  CircleCheck,
  CircleX,
  Star,
  StarHalf,
  Clock,
  Flame,
  ChefHat,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Check,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Beef,
  Wheat,
  Droplet,
  Award,
  RotateCcw,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ============================================================
// TYPES
// ============================================================

interface FoodItem {
  id: string | number;
  name: string;
  description?: string;
  image_url?: string;

  price: number;
  original_price?: number;

  available: boolean;
  is_trending?: boolean;

  average_rating?: number;
  rating_count?: number;

  category?: string;
  cuisine?: string;
  meal_types?: string[];

  preparation_time_minutes?: number;
  calories?: number;

  protein?: number;
  carbs?: number;
  fat?: number;

  popularity_score?: number;

  ingredients?: string[];
}

interface ProductDetailComponentProps {
  id: string | string[];
  className?: string;
}

interface ProductDetailProps {
  item: FoodItem;
  className?: string;
}

interface ProductGalleryProps {
  item: FoodItem;
}

interface ProductInfoProps {
  item: FoodItem;
  hasDiscount: boolean;
  discountPercentage: number;
}

interface ProductHighlightsProps {
  item: FoodItem;
}

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

interface ProductActionsProps {
  item: FoodItem;
  quantity: number;
}

interface ProductNutritionProps {
  item: FoodItem;
}

interface IngredientsProps {
  item: FoodItem;
}

interface RatingProps {
  rate?: number;
  totalReviewers?: number;
}

// ============================================================
// CONSTANTS
// ============================================================

const MAX_STARS = 5;

const PRIMARY = "#6A040F";
const SECONDARY = "#FAF6F0";
const ACCENT = "#2B1E1A";

const FALLBACK_IMAGE =
  "https://placehold.co/800x800/FAF6F0/2B1E1A?text=No+Image";

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function ProductDetailComponent({
  id,
  className,
}: ProductDetailComponentProps) {
  const [item, setItem] = useState<FoodItem | null>(null);

  const [status, setStatus] = useState<
    "loading" | "error" | "ready"
  >("loading");

  useEffect(() => {
    async function fetchItemById() {
      setStatus("loading");

      try {
        const cleanId = Array.isArray(id) ? id[0] : id;

        if (!cleanId) {
          setStatus("error");
          return;
        }

        const response = await fetch(
          "https://sombobaeb.cheat.casa/food-items?skip=0&limit=100"
        );

        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status}`
          );
        }

        const items: FoodItem[] = await response.json();

        const found = items.find(
          (food) => String(food.id) === String(cleanId)
        );

        if (!found) {
          setStatus("error");
          return;
        }

        setItem(found);
        setStatus("ready");
      } catch (error) {
        console.error(
          "Failed to fetch food item details:",
          error
        );

        setStatus("error");
      }
    }

    if (id) {
      fetchItemById();
    }
  }, [id]);

  if (status === "loading") {
    return <ProductSkeleton />;
  }

  if (status === "error") {
    return <ProductError />;
  }

  if (!item) {
    return null;
  }

  return (
    <ProductDetail
      item={item}
      className={className}
    />
  );
}

// ============================================================
// PRODUCT DETAIL
// ============================================================

function ProductDetail({
  item,
  className,
}: ProductDetailProps) {
  const hasDiscount =
    item.original_price != null &&
    item.original_price > item.price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((item.original_price! - item.price) /
          item.original_price!) *
          100
      )
    : 0;

  return (
    <section
      className={cn("py-12 md:py-20", className)}
      style={{ backgroundColor: SECONDARY }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Gallery */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ProductGallery item={item} />
          </div>

          {/* Information */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <ProductInfo
              item={item}
              hasDiscount={hasDiscount}
              discountPercentage={discountPercentage}
            />
          </div>
        </div>

        <div className="mt-14 md:mt-20 space-y-14">
          <ProductNutrition item={item} />
          <Ingredients item={item} />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// GALLERY
// ============================================================

function ProductGallery({
  item,
}: ProductGalleryProps) {
  const baseImage =
    item.image_url || FALLBACK_IMAGE;

  const images = [baseImage];

  const [activeIndex, setActiveIndex] =
    useState<number>(0);

  const [fadeKey, setFadeKey] =
    useState<number>(0);

  const goTo = (index: number) => {
    const next =
      (index + images.length) % images.length;

    setActiveIndex(next);
    setFadeKey((key) => key + 1);
  };

  return (
    <div>
      <div
        className="relative w-full aspect-square overflow-hidden rounded-[20px] border"
        style={{
          borderColor: `${ACCENT}1A`,
        }}
      >
        <Image
          key={fadeKey}
          src={images[activeIndex]}
          alt={item.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
        />

        {item.is_trending && (
          <span
            className="absolute top-4 left-4 text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: PRIMARY,
              color: SECONDARY,
            }}
          >
            Best Seller
          </span>
        )}

        <button
          type="button"
          aria-label="Zoom image"
          className="absolute bottom-4 right-4 h-10 w-10 rounded-full flex items-center justify-center border transition-transform duration-200 hover:scale-110"
          style={{
            backgroundColor: SECONDARY,
            borderColor: `${ACCENT}33`,
            color: ACCENT,
          }}
        >
          <ZoomIn className="h-4 w-4" />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() =>
                goTo(activeIndex - 1)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center border"
              style={{
                backgroundColor: SECONDARY,
                borderColor: `${ACCENT}33`,
                color: ACCENT,
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={() =>
                goTo(activeIndex + 1)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center border"
              style={{
                backgroundColor: SECONDARY,
                borderColor: `${ACCENT}33`,
                color: ACCENT,
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              aria-label={`View image ${index + 1}`}
              onClick={() => goTo(index)}
              className="relative h-20 w-20 overflow-hidden rounded-xl border-2"
              style={{
                borderColor:
                  activeIndex === index
                    ? PRIMARY
                    : `${ACCENT}26`,
              }}
            >
              <Image
                src={src}
                alt={`${item.name} thumbnail ${
                  index + 1
                }`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PRODUCT INFO
// ============================================================

function ProductInfo({
  item,
  hasDiscount,
  discountPercentage,
}: ProductInfoProps) {
  const [quantity, setQuantity] =
    useState<number>(1);

  return (
    <div className="space-y-6">

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">

          {item.is_trending && (
            <Badge
              className="border-0"
              style={{
                backgroundColor: `${PRIMARY}14`,
                color: PRIMARY,
              }}
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}

          <Badge
            variant="outline"
            className="gap-1"
            style={{
              borderColor: `${ACCENT}33`,
              color: ACCENT,
            }}
          >
            {item.available ? (
              <CircleCheck
                className="h-3.5 w-3.5"
                style={{ color: PRIMARY }}
              />
            ) : (
              <CircleX className="h-3.5 w-3.5 text-destructive" />
            )}

            {item.available
              ? "In Stock"
              : "Sold out"}
          </Badge>
        </div>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
          style={{ color: ACCENT }}
        >
          {item.name}
        </h1>

        <Rating
          rate={item.average_rating}
          totalReviewers={item.rating_count}
        />

        <p
          className="text-base leading-relaxed max-w-prose"
          style={{ color: `${ACCENT}B3` }}
        >
          {item.description}
        </p>
      </div>

      {/* Price */}

      <div className="flex items-center gap-3">
        <span
          className="text-3xl font-bold"
          style={{ color: PRIMARY }}
        >
          ${Number(item.price).toFixed(2)}
        </span>

        {hasDiscount && (
          <>
            <span
              className="text-base line-through"
              style={{ color: `${ACCENT}66` }}
            >
              $
              {Number(
                item.original_price
              ).toFixed(2)}
            </span>

            <span
              className="text-xs font-semibold px-2 py-1 rounded-full"
              style={{
                backgroundColor: PRIMARY,
                color: SECONDARY,
              }}
            >
              -{discountPercentage}%
            </span>
          </>
        )}
      </div>

      <ProductHighlights item={item} />

      {/* Categories */}

      {(item.category ||
        item.cuisine ||
        item.meal_types?.length) && (
        <div className="flex flex-wrap gap-2">

          {item.category && (
            <Badge
              variant="outline"
              className="rounded-full text-xs"
              style={{
                borderColor: `${ACCENT}33`,
                color: ACCENT,
              }}
            >
              {item.category}
            </Badge>
          )}

          {item.cuisine && (
            <Badge
              variant="outline"
              className="rounded-full text-xs"
              style={{
                borderColor: `${ACCENT}33`,
                color: ACCENT,
              }}
            >
              {item.cuisine}
            </Badge>
          )}

          {item.meal_types?.map(
            (meal: string) => (
              <Badge
                key={meal}
                variant="outline"
                className="rounded-full text-xs"
                style={{
                  borderColor: `${ACCENT}33`,
                  color: ACCENT,
                }}
              >
                {meal}
              </Badge>
            )
          )}
        </div>
      )}

      <QuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <ProductActions
        item={item}
        quantity={quantity}
      />
    </div>
  );
}

// ============================================================
// HIGHLIGHTS
// ============================================================

function ProductHighlights({
  item,
}: ProductHighlightsProps) {
  const highlights = [
    item.preparation_time_minutes != null && {
      icon: Clock,
      label: "Prep time",
      value: `${item.preparation_time_minutes} min`,
    },

    item.calories != null && {
      icon: Flame,
      label: "Calories",
      value: `${item.calories} kcal`,
    },

    item.cuisine && {
      icon: ChefHat,
      label: "Cuisine",
      value: item.cuisine,
    },
  ].filter(Boolean) as {
    icon: typeof Clock;
    label: string;
    value: string;
  }[];

  if (highlights.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {highlights.map(
        ({ icon: Icon, label, value }, index) => (
          <div
            key={label}
            className="flex flex-col items-start gap-1.5 rounded-2xl border p-4"
            style={{
              borderColor: `${ACCENT}1F`,
              animationDelay: `${index * 75}ms`,
            }}
          >
            <Icon
              className="h-5 w-5"
              style={{ color: PRIMARY }}
            />

            <span
              className="text-xs"
              style={{
                color: `${ACCENT}80`,
              }}
            >
              {label}
            </span>

            <span
              className="text-sm font-semibold"
              style={{ color: ACCENT }}
            >
              {value}
            </span>
          </div>
        )
      )}
    </div>
  );
}

// ============================================================
// QUANTITY
// ============================================================

function QuantitySelector({
  quantity,
  setQuantity,
}: QuantitySelectorProps) {
  const [pulse, setPulse] =
    useState<boolean>(false);

  const change = (delta: number) => {
    setQuantity((current) =>
      Math.max(1, current + delta)
    );

    setPulse(true);

    setTimeout(() => {
      setPulse(false);
    }, 150);
  };

  return (
    <div className="flex items-center gap-3">
      <span
        className="text-sm font-medium"
        style={{ color: ACCENT }}
      >
        Quantity
      </span>

      <div
        className="inline-flex items-center rounded-xl border overflow-hidden"
        style={{
          backgroundColor: SECONDARY,
          borderColor: `${ACCENT}26`,
        }}
      >
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => change(-1)}
          disabled={quantity <= 1}
          className="h-10 w-10 flex items-center justify-center disabled:opacity-30"
          style={{ color: PRIMARY }}
        >
          <Minus className="h-4 w-4" />
        </button>

        <span
          className={cn(
            "w-10 text-center text-sm font-semibold transition-transform duration-150",
            pulse && "scale-125"
          )}
          style={{ color: ACCENT }}
        >
          {quantity}
        </span>

        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => change(1)}
          className="h-10 w-10 flex items-center justify-center"
          style={{ color: PRIMARY }}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// ACTIONS
// ============================================================

function ProductActions({
  item,
  quantity,
}: ProductActionsProps) {
  const [added, setAdded] =
    useState<boolean>(false);

  const [wishlisted, setWishlisted] =
    useState<boolean>(false);

  const [heartPop, setHeartPop] =
    useState<boolean>(false);

  const handleAddToCart = () => {
    if (!item.available) return;

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  const handleWishlist = () => {
    setWishlisted((value) => !value);

    setHeartPop(true);

    setTimeout(() => {
      setHeartPop(false);
    }, 250);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-1">

      <Button
        type="button"
        onClick={handleAddToCart}
        disabled={!item.available}
        className="flex-1 h-14 rounded-2xl text-base font-semibold gap-2"
        style={{
          backgroundColor: PRIMARY,
          color: SECONDARY,
        }}
      >
        {added ? (
          <>
            <Check className="h-5 w-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="h-5 w-5" />

            {item.available
              ? `Add to Cart · $${(
                  Number(item.price) *
                  quantity
                ).toFixed(2)}`
              : "Sold out"}
          </>
        )}
      </Button>

      <button
        type="button"
        onClick={handleWishlist}
        aria-label={
          wishlisted
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
        className="h-14 sm:w-14 rounded-2xl border flex items-center justify-center gap-2"
        style={{
          backgroundColor: wishlisted
            ? `${PRIMARY}0D`
            : "transparent",
          borderColor: PRIMARY,
          color: ACCENT,
        }}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            heartPop && "scale-125"
          )}
          style={{ color: PRIMARY }}
          fill={
            wishlisted
              ? PRIMARY
              : "none"
          }
        />

        <span className="sm:hidden text-sm font-medium">
          {wishlisted
            ? "Wishlisted"
            : "Wishlist"}
        </span>
      </button>
    </div>
  );
}

// ============================================================
// NUTRITION
// ============================================================

function ProductNutrition({
  item,
}: ProductNutritionProps) {
  const rows = [
    item.cuisine && {
      icon: ChefHat,
      label: "Cuisine",
      value: item.cuisine,
    },

    item.preparation_time_minutes != null && {
      icon: Clock,
      label: "Prep Time",
      value: `${item.preparation_time_minutes} min`,
    },

    item.calories != null && {
      icon: Flame,
      label: "Calories",
      value: `${item.calories} kcal`,
    },

    item.protein != null && {
      icon: Beef,
      label: "Protein",
      value: `${item.protein}g`,
    },

    item.carbs != null && {
      icon: Wheat,
      label: "Carbs",
      value: `${item.carbs}g`,
    },

    item.fat != null && {
      icon: Droplet,
      label: "Fat",
      value: `${item.fat}g`,
    },

    item.popularity_score != null && {
      icon: Award,
      label: "Popularity",
      value: `${item.popularity_score}`,
    },
  ].filter(Boolean) as {
    icon: typeof ChefHat;
    label: string;
    value: string;
  }[];

  if (rows.length === 0) {
    return null;
  }

  return (
    <div>
      <h2
        className="text-xl font-bold mb-5"
        style={{ color: ACCENT }}
      >
        Product Details
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {rows.map(
          ({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border p-4"
              style={{
                borderColor: `${ACCENT}1F`,
              }}
            >
              <Icon
                className="h-4 w-4 shrink-0"
                style={{ color: PRIMARY }}
              />

              <div className="min-w-0">
                <p
                  className="text-xs"
                  style={{
                    color: `${ACCENT}80`,
                  }}
                >
                  {label}
                </p>

                <p
                  className="text-sm font-semibold truncate"
                  style={{ color: ACCENT }}
                >
                  {value}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

// ============================================================
// INGREDIENTS
// ============================================================

function Ingredients({
  item,
}: IngredientsProps) {
  if (!item.ingredients?.length) {
    return null;
  }

  return (
    <div>
      <h2
        className="text-xl font-bold mb-5"
        style={{ color: ACCENT }}
      >
        Ingredients
      </h2>

      <div className="flex flex-wrap gap-2">
        {item.ingredients.map(
          (ingredient: string) => (
            <span
              key={ingredient}
              className="text-sm px-3.5 py-1.5 rounded-full border transition-colors duration-200"
              style={{
                backgroundColor: SECONDARY,
                borderColor: `${ACCENT}26`,
                color: ACCENT,
              }}
            >
              {ingredient}
            </span>
          )
        )}
      </div>
    </div>
  );
}

// ============================================================
// RATING
// ============================================================

function Rating({
  rate,
  totalReviewers = 0,
}: RatingProps) {
  if (rate == null) {
    return (
      <span
        className="text-sm"
        style={{ color: `${ACCENT}80` }}
      >
        No reviews yet
      </span>
    );
  }

  const fullStars = Math.floor(rate);

  const hasHalfStar =
    rate % 1 >= 0.5;

  const emptyStars =
    MAX_STARS -
    fullStars -
    (hasHalfStar ? 1 : 0);

  const stars: React.ReactNode[] = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="size-4"
        style={{
          fill: PRIMARY,
          stroke: PRIMARY,
        }}
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <StarHalf
        key="half"
        className="size-4"
        style={{
          fill: PRIMARY,
          stroke: PRIMARY,
        }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        className="size-4"
        style={{
          color: `${ACCENT}40`,
        }}
      />
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {stars}
      </div>

      <span
        className="text-sm font-semibold"
        style={{ color: ACCENT }}
      >
        {Number(rate).toFixed(1)}
      </span>

      <span
        className="text-sm"
        style={{ color: `${ACCENT}80` }}
      >
        ({totalReviewers} reviews)
      </span>
    </div>
  );
}

// ============================================================
// SKELETON
// ============================================================

function ProductSkeleton() {
  return (
    <section
      className="py-12 md:py-20"
      style={{
        backgroundColor: SECONDARY,
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          <div
            className="aspect-square rounded-[20px] animate-pulse"
            style={{
              backgroundColor: `${ACCENT}14`,
            }}
          />

          <div className="space-y-4">
            <div
              className="h-4 w-24 rounded-full animate-pulse"
              style={{
                backgroundColor: `${ACCENT}14`,
              }}
            />

            <div
              className="h-10 w-3/4 rounded-lg animate-pulse"
              style={{
                backgroundColor: `${ACCENT}14`,
              }}
            />

            <div
              className="h-4 w-32 rounded-lg animate-pulse"
              style={{
                backgroundColor: `${ACCENT}14`,
              }}
            />

            <div
              className="h-16 w-full rounded-lg animate-pulse"
              style={{
                backgroundColor: `${ACCENT}14`,
              }}
            />

            <div
              className="h-9 w-28 rounded-lg animate-pulse"
              style={{
                backgroundColor: `${ACCENT}14`,
              }}
            />

            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="h-20 rounded-2xl animate-pulse"
                  style={{
                    backgroundColor: `${ACCENT}14`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <p
          className="text-center text-sm mt-10"
          style={{
            color: `${ACCENT}66`,
          }}
        >
          កំពុងទាញយកទិន្នន័យផលិតផល...
        </p>
      </div>
    </section>
  );
}

// ============================================================
// ERROR
// ============================================================

function ProductError() {
  return (
    <section
      className="flex min-h-[60vh] items-center justify-center py-20"
      style={{
        backgroundColor: SECONDARY,
      }}
    >
      <div className="text-center max-w-sm px-4">
        <h2
          className="text-xl font-bold mb-2"
          style={{ color: ACCENT }}
        >
          We couldn't load this product
        </h2>

        <p
          className="text-sm mb-6"
          style={{
            color: `${ACCENT}99`,
          }}
        >
          Something went wrong while fetching this
          item. Please try again.
        </p>

        <Button
          type="button"
          onClick={() =>
            window.location.reload()
          }
          className="rounded-xl gap-2"
          style={{
            backgroundColor: PRIMARY,
            color: SECONDARY,
          }}
        >
          <RotateCcw className="h-4 w-4" />
          Retry
        </Button>
      </div>
    </section>
  );
}