import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navigation } from "@/components/landing/navigation";
import type { Metadata } from "next";

// Enable static generation and set revalidation
export const revalidate = 3600; // Revalidate every hour
export const dynamic = "force-static"; // Force static generation
export const fetchCache = "force-cache"; // Force caching of all fetches

// Metadata for better SEO and caching
export const metadata: Metadata = {
  title: "HomeTinker - Your Home Improvement Partner",
  description:
    "Transform your home with HomeTinker. Expert advice, quality products, and innovative solutions for all your home improvement needs.",
  keywords: [
    "home improvement",
    "DIY",
    "home renovation",
    "tools",
    "construction",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Footer />
    </>
  );
}
