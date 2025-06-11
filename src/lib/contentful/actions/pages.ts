"use server";

import { client } from "../client";
import { PageEntrySkeleton } from "../types";

export async function getPage(slug: string) {
  try {
    const entries = await client.getEntries<PageEntrySkeleton>({
      content_type: "page",
      "fields.slug": slug,
      limit: 1,
    });

    if (!entries.items[0]) {
      console.warn(`No page found with slug: ${slug}`);
      return null;
    }

    const entry = entries.items[0];
    return {
      title: entry.fields.title,
      slug: entry.fields.slug,
      metaTitle: entry.fields.metaTitle,
      metaDescription: entry.fields.metaDescription,
    };
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export async function getAllPages() {
  try {
    const entries = await client.getEntries<PageEntrySkeleton>({
      content_type: "page",
    });

    return entries.items.map((entry) => ({
      title: entry.fields.title,
      slug: entry.fields.slug,
      metaTitle: entry.fields.metaTitle,
      metaDescription: entry.fields.metaDescription,
      sections: entry.fields.sections || [],
    }));
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}
