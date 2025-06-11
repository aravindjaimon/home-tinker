"use server";

import { client } from "../client";
import { TextComponentEntrySkeleton } from "../types";

export async function getTextComponent(title?: string) {
  try {
    const entries = await client.getEntries<TextComponentEntrySkeleton>({
      content_type: "textComponent",
      limit: 1,
      ...(title && { fields: { title } }),
    });

    if (!entries.items[0]) {
      console.warn("No text component entry found in Contentful.");
      return null;
    }

    const entry = entries.items[0];
    return {
      title: entry.fields.title,
      content: entry.fields.content,
      alignment: entry.fields.alignment || "left",
    };
  } catch (error) {
    console.error("Error fetching text component:", error);
    return null;
  }
}

export async function getAllTextComponents() {
  try {
    const entries = await client.getEntries<TextComponentEntrySkeleton>({
      content_type: "textComponent",
    });

    return entries.items.map((entry) => ({
      title: entry.fields.title,
      content: entry.fields.content,
      alignment: entry.fields.alignment || "left",
    }));
  } catch (error) {
    console.error("Error fetching text components:", error);
    return [];
  }
}
