import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";

export default async function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Footer />
    </>
  );
}
