import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel"; // ✅ Proper type import

const ImageSlider = () => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(); // ✅ Replace any with EmblaCarouselType
  const [current, setCurrent] = useState(0);

  const images = [
    "/slider/1.png",
    "/slider/2.png",
    "/slider/3.png",
    "/slider/4.png",
    "/slider/5.jpg",
    "/slider/6.jpg",
    "/slider/7.jpg",
    "/slider/8.jpg",
    "/slider/9.jpg",
    "slider/10.jpg",
    "slider/11.jpg"

  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="border-0 rounded-none">
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Conference slide ${index + 1}`}
                    className="w-full object-cover h-full sm:h-[90vh]"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
