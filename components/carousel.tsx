"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  // Carousel index state
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const nextIndex = (currentIndex + 1) % totalImages;
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;

  return (
    <div className="relative flex w-full max-w-4xl justify-center self-center overflow-hidden rounded-xl">
      <Image
        src={images[currentIndex]}
        alt={`Event image number ${currentIndex}`}
        className="z-0 aspect-video w-full object-cover object-center"
        width={300}
        height={200}
      />

      {/* Buttons */}
      <div className="absolute top-[calc(50%-20px)] z-10 flex w-full flex-row justify-between px-4">
        {/* Previous Button */}
        <Button size="icon" onClick={() => setCurrentIndex(prevIndex)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {/* Next Button */}
        <Button size="icon" onClick={() => setCurrentIndex(nextIndex)}>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Carousel State */}
      <div className="absolute bottom-5 flex flex-row gap-2">
        {Array.from({ length: totalImages }).map((_, index) => {
          const isActive = index === currentIndex;

          return (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full bg-primary p-0 ${
                isActive ? "opacity-100" : "opacity-50"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
