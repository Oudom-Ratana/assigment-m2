"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import EcommerceProductCard from "./ProductCardComponent";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  cuisine: string;
  image_url?: string;
}

const ITEMS_PER_PAGE = 8;

const COLORS = {
  primary: "#6A040F",
  secondary: "#FAF6F0",
  accent: "#2B1E1A",
};

export default function ProductGrid() {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(
          "https://sombobaeb.cheat.casa/food-items?skip=0&limit=100"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: FoodItem[] = await response.json();

        setItems(data);
      } catch (err) {
        console.error("Failed to fetch food items:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const startIdx = (page - 1) * ITEMS_PER_PAGE;

  const currentItems = items.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;

    setPage(p);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div
        className="flex min-h-[50vh] items-center justify-center"
        style={{
          backgroundColor: COLORS.secondary,
          color: COLORS.accent,
        }}
      >
        Loading products...
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: COLORS.secondary }}
      className="min-h-screen py-10"
    >
      <div className="container mx-auto px-4">

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {currentItems.map((item) => (
  <div key={item.id} className="relative w-full">
    <Link
      href={`/products/${item.id}`}
      className="absolute inset-0 z-0"
      aria-label={`View ${item.name}`}
    />

    <div className="relative z-10 pointer-events-none">
      <EcommerceProductCard
        image_url={
          item.image_url ??
          `https://placehold.co/800x600?text=${encodeURIComponent(
            item.name
          )}`
        }
        name={item.name}
        description={item.description}
        category={item.category}
        price={item.price}
        cuisine={item.cuisine}
      />
    </div>
  </div>
))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            style={{
              borderColor: COLORS.primary,
              color:
                page === 1
                  ? COLORS.accent + "66"
                  : COLORS.primary,
            }}
            className="h-10 w-10 rounded-lg border flex items-center justify-center transition-all disabled:cursor-not-allowed hover:opacity-80"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from(
            { length: totalPages },
            (_, i) => i + 1
          ).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              style={
                p === page
                  ? {
                      backgroundColor: COLORS.primary,
                      color: COLORS.secondary,
                      borderColor: COLORS.primary,
                    }
                  : {
                      color: COLORS.accent,
                      borderColor: COLORS.primary + "40",
                    }
              }
              className={cn(
                "h-10 min-w-10 px-3 rounded-lg border text-sm font-semibold transition-all hover:opacity-80"
              )}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            style={{
              borderColor: COLORS.primary,
              color:
                page === totalPages
                  ? COLORS.accent + "66"
                  : COLORS.primary,
            }}
            className="h-10 w-10 rounded-lg border flex items-center justify-center transition-all disabled:cursor-not-allowed hover:opacity-80"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p
          className="text-center text-sm mt-3"
          style={{ color: COLORS.accent + "99" }}
        >
          Page {page} of {totalPages} · {items.length} items
        </p>
      </div>
    </div>
  );
}