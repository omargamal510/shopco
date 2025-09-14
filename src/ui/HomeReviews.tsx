"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ReviewCard from "./ReviewCard";
import { Reviews } from "../types/reviews-types.js";
import { useEffect, useState } from "react";
import HomeSectionHeader from "./HomeSectionHeader";

const reviews: Reviews[] = [
  {
    name: "Sarah M",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },

  {
    name: "Alex K",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },

  {
    name: "Omar G",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
  {
    name: "James L",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
  {
    name: "Ziad A",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
  {
    name: "Abdallah A",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },

  {
    name: "Shirif A",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },

  {
    name: "Omar G",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
  {
    name: "James L",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
  {
    name: "Ziad A",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
  {
    name: "Abdallah A",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },

  {
    name: "Shirif A",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi unde omnis illo cum delectus iusto minima ullam iste tempore deleniti ipsum quae enim dolor, ex aliquam harum officiis labore!",
  },
];

export default function HomeReviews() {
  const [vw, setVw] = useState<number>(768);

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
    };
    console.log(vw);
    // Initial width
    handleResize();

    // Listen to resize events

    // Cleanup
  }, [vw]);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",

        // slidesToScroll: 4, // Scroll 3 items at a time
        // containScroll: "trimSnaps", // Ensure snapping to slide groups
        // dragFree: false, // Disable free dragging to enforce snapping
      }}
      className="w-full max-w-3xl mx-auto flex flex-col justify-center gap-5"
    >
      <div className=" text-red-300">
        <HomeSectionHeader text="OUR HAPPY CUSTOMERS" />
      </div>

      <CarouselContent>
        {reviews.map((e, i) => (
          <CarouselItem
            key={i}
            className="flexbasis" // Fallback for Tailwind
          >
            <div className="p-1">
              <Card>
                <CardContent className=" aspect-square  p-6">
                  <ReviewCard name={e.name} text={e.text} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
