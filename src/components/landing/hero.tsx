import { getCarousel } from "@/lib/contentful/actions/carousel";
import { HeroCarousel } from "./hero-carousel";

export async function Hero() {
  const carousel = await getCarousel("Hero Carousel");

  return <HeroCarousel carousel={carousel} />;
}
