"use server";

import { client } from "../client";
import { NavigationEntrySkeleton } from "../types";

export async function getNavigation() {
  try {
    const entries = await client.getEntries<NavigationEntrySkeleton>({
      content_type: "navigation",
      limit: 1,
    });

    if (!entries.items[0]) {
      console.warn("No navigation entry found in Contentful.");
      return { title: "", links: [] };
    }

    const entry = entries.items[0];
    const title = entry.fields.title;
    const links = entry.fields.links;

    if (!links) {
      return { title, links: [] };
    }

    const extractedLinks = links
      .filter((link) => "fields" in link)
      .map((link) => link.fields);

    return { title, links: extractedLinks };
  } catch (error) {
    console.error("Error fetching navigation:", error);
    return { title: "", links: [] };
  }
}
