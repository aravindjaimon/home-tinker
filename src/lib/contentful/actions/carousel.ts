"use server";

import { client } from "../client";
import { CarouselEntrySkeleton } from "../types";

export async function getCarousel(title?: string) {
  try {
    const entries = await client.getEntries<CarouselEntrySkeleton>({
      content_type: "carousel",
      limit: 1,
      include: 10,
      ...(title && { "fields.title": title }),
    });

    if (!entries.items[0]) {
      console.warn("No carousel entry found in Contentful.");
      return { title: "", slides: [] };
    }

    const entry = entries.items[0];
    const carouselTitle = entry.fields.title;
    const slides = entry.fields.slides;

    if (!slides) {
      return { title: carouselTitle, slides: [] };
    }

    const extractedSlides = slides
      .filter((slide) => "fields" in slide)
      .map((slide) => slide.fields);

    return { title: carouselTitle, slides: extractedSlides };
  } catch (error) {
    console.error("Error fetching carousel:", error);
    return { title: "", slides: [] };
  }
}

export async function getAllCarousels() {
  try {
    const entries = await client.getEntries<CarouselEntrySkeleton>({
      content_type: "carousel",
      include: 10,
    });

    return entries.items.map((entry) => ({
      title: entry.fields.title,
      slides: entry.fields.slides
        ? entry.fields.slides
            .filter((slide) => "fields" in slide)
            .map((slide) => slide.fields)
        : [],
    }));
  } catch (error) {
    console.error("Error fetching carousels:", error);
    return [];
  }
}
