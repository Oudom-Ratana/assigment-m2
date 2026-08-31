"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const getDeliveryDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);

  const day = date.getDate();

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][date.getMonth()];

  const suffix =
    day % 10 === 1 && day % 100 !== 11
      ? "st"
      : day % 10 === 2 && day % 100 !== 12
        ? "nd"
        : day % 10 === 3 && day % 100 !== 13
          ? "rd"
          : "th";

  return `${day}${suffix} ${month}`;
};

export interface ItemsCard {
  image_url: string;
  name: string;
  description: string;
  category: string;
  price: number;
  cuisine: string;
}

export default function EcommerceProductCard({
  image_url,
  name,
  description,
  category,
  price,
  cuisine,
}: ItemsCard) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [inBag, setInBag] = useState(false);

  return (
    <div className="flex items-center justify-center w-full">
      <Card
        className={cn(
          "w-full max-w-80 rounded-2xl overflow-hidden p-0 gap-0",
          "group/card cursor-pointer",
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        )}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-80">
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
          />

          {/* Category */}
          <span className="absolute top-3 left-3 text-xs tracking-widest font-bold uppercase bg-foreground text-background px-2.5 py-1 rounded-sm select-none">
            {category}
          </span>

          {/* Wishlist */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            title="Wishlist"
            className={cn(
              "absolute top-3 right-3 h-8 w-8 rounded-full border shadow-sm",
              "flex items-center justify-center transition-all duration-200",
              "hover:scale-110 active:scale-95",
              isWishlisted
                ? "bg-rose-50 border-rose-200"
                : "bg-background"
            )}
          >
            <Heart
              className={cn(
                "w-3.5 h-3.5 transition-colors",
                isWishlisted
                  ? "fill-rose-500 text-rose-500"
                  : "text-muted-foreground"
              )}
            />
          </button>
        </div>

        {/* Info */}
        <CardContent className="px-4 pt-4 pb-4 space-y-2">
          <div className="min-w-0">
            <h3 className="text-base font-bold text-foreground truncate">
              {name}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-sm font-medium text-muted-foreground">
              {cuisine}
            </span>

            <span className="text-foreground font-bold text-base">
              ${price.toFixed(2)}
            </span>
          </div>

          {/* Delivery */}
          <div className="text-xs text-muted-foreground font-medium">
            Delivery by{" "}
            <span
              suppressHydrationWarning
              className="text-foreground font-bold"
            >
              {getDeliveryDate()}
            </span>
          </div>
        </CardContent>

        {/* Actions */}
        <CardFooter className="px-4 pb-6 gap-2 bg-transparent border-t-0">
          {/* Add to bag */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setInBag(!inBag);
            }}
            title={inBag ? "Remove from bag" : "Add to bag"}
            className={cn(
              "h-12 w-12 shrink-0 rounded-xl border",
              "flex items-center justify-center",
              "transition-all duration-200 hover:scale-105 active:scale-95",
              inBag
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground"
            )}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Buy Now */}
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Buy:", name);
            }}
            className="flex-1 h-12 rounded-xl font-semibold text-base"
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}