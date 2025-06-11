"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getCarousel } from "@/lib/contentful/actions/carousel";
import { getAbsoluteUrl } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface HeroCarouselProps {
  carousel: Awaited<ReturnType<typeof getCarousel>>;
}

export function HeroCarousel({ carousel }: HeroCarouselProps) {
  if (!carousel?.slides || carousel.slides.length === 0) {
    return (
      <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
        <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
          <div className="max-w-xl">
            <Badge className="rounded-full py-1 border-none">
              Welcome to HomeTinker
            </Badge>
            <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
              Transform Your Home with HomeTinker
            </h1>
            <p className="mt-6 max-w-[60ch] xs:text-lg text-muted-foreground">
              Discover innovative solutions and expert guidance to make your
              home improvement projects a success. From DIY tips to professional
              services, we&apos;ve got you covered.
            </p>
          </div>
          <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
            <Image
              src="/placeholder.svg"
              fill
              alt="HomeTinker Hero Image"
              className="object-cover rounded-xl"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full overflow-hidden border-b border-accent">
      <Carousel
        opts={{
          loop: true,
          duration: 20,
        }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {carousel.slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center">
                <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
                  <div className="max-w-xl">
                    <Badge className="rounded-full py-1 border-none">
                      Welcome to HomeTinker
                    </Badge>
                    <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
                      {slide?.title ||
                        carousel?.title ||
                        "Transform Your Home with HomeTinker"}
                    </h1>
                    <p className="mt-6 max-w-[60ch] xs:text-lg text-muted-foreground">
                      {slide?.description ||
                        "Discover innovative solutions and expert guidance to make your home improvement projects a success."}
                    </p>
                  </div>
                  <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
                    <Image
                      src={getAbsoluteUrl(
                        slide?.image && "fields" in slide.image
                          ? slide.image.fields?.file?.url
                          : undefined
                      )}
                      fill
                      alt={
                        slide?.image && "fields" in slide.image
                          ? slide.image.fields?.title ||
                            `Hero Image ${index + 1}`
                          : `Hero Image ${index + 1}`
                      }
                      className="object-cover rounded-xl"
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
