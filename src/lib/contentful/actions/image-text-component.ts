"use server";

import { client } from "../client";
import { ImageTextComponentEntrySkeleton } from "../types";

export async function getImageTextComponent(title?: string) {
  try {
    const entries = await client.getEntries<ImageTextComponentEntrySkeleton>({
      content_type: "imageTextComponent",
      limit: 1,
      ...(title && { fields: { title } }),
    });

    if (!entries.items[0]) {
      console.warn("No image text component entry found in Contentful.");
      return null;
    }

    const entry = entries.items[0];
    return {
      image: entry.fields.image,
      altText: entry.fields.altText,
      title: entry.fields.title,
      content: entry.fields.content,
      layout: entry.fields.layout,
    };
  } catch (error) {
    console.error("Error fetching image text component:", error);
    return null;
  }
}

export async function getAllImageTextComponents() {
  try {
    const entries = await client.getEntries<ImageTextComponentEntrySkeleton>({
      content_type: "imageTextComponent",
    });

    return entries.items.map((entry) => ({
      image: entry.fields.image,
      altText: entry.fields.altText,
      title: entry.fields.title,
      content: entry.fields.content,
      layout: entry.fields.layout,
    }));
  } catch (error) {
    console.error("Error fetching image text components:", error);
    return [];
  }
}
