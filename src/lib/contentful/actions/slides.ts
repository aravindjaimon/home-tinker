"use server";

import { client } from "../client";
import { SlideEntrySkeleton } from "../types";

export async function getSlide(title: string) {
  try {
    const entries = await client.getEntries<SlideEntrySkeleton>({
      content_type: "slide",
      "fields.title": title,
      limit: 1,
    });

    if (!entries.items[0]) {
      console.warn(`No slide found with title: ${title}`);
      return null;
    }

    const entry = entries.items[0];
    return {
      title: entry.fields.title,
      image: entry.fields.image,
      description: entry.fields.description,
      ctaText: entry.fields.ctaText,
      ctaUrl: entry.fields.ctaUrl,
    };
  } catch (error) {
    console.error("Error fetching slide:", error);
    return null;
  }
}

export async function getAllSlides() {
  try {
    const entries = await client.getEntries<SlideEntrySkeleton>({
      content_type: "slide",
    });

    return entries.items.map((entry) => ({
      title: entry.fields.title,
      image: entry.fields.image,
      description: entry.fields.description,
      ctaText: entry.fields.ctaText,
      ctaUrl: entry.fields.ctaUrl,
    }));
  } catch (error) {
    console.error("Error fetching slides:", error);
    return [];
  }
}
