"use server";

import { client } from "../client";
import { ImageComponentEntrySkeleton } from "../types";

export async function getImageComponent(altText?: string) {
  try {
    const entries = await client.getEntries<ImageComponentEntrySkeleton>({
      content_type: "imageComponent",
      limit: 1,
      ...(altText && { fields: { altText } }),
    });

    if (!entries.items[0]) {
      console.warn("No image component entry found in Contentful.");
      return null;
    }

    const entry = entries.items[0];
    return {
      image: entry.fields.image,
      altText: entry.fields.altText,
      caption: entry.fields.caption,
      size: entry.fields.size || "medium",
    };
  } catch (error) {
    console.error("Error fetching image component:", error);
    return null;
  }
}

export async function getAllImageComponents() {
  try {
    const entries = await client.getEntries<ImageComponentEntrySkeleton>({
      content_type: "imageComponent",
    });

    return entries.items.map((entry) => ({
      image: entry.fields.image,
      altText: entry.fields.altText,
      caption: entry.fields.caption,
      size: entry.fields.size || "medium",
    }));
  } catch (error) {
    console.error("Error fetching image components:", error);
    return [];
  }
}
