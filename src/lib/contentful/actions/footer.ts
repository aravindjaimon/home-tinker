"use server";

import { client } from "../client";
import { FooterEntrySkeleton } from "../types";

export async function getFooter() {
  try {
    const entries = await client.getEntries<FooterEntrySkeleton>({
      content_type: "footer",
      limit: 1,
    });

    if (!entries.items[0]) {
      console.warn("No footer entry found in Contentful.");
      return {
        companyName: "",
        companyDescription: "",
        contactEmail: "",
        contactPhone: "",
        socialLinks: {},
        footerLinks: {},
        copyright: "",
      };
    }

    const entry = entries.items[0];
    return {
      companyName: entry.fields.companyName,
      companyDescription: entry.fields.companyDescription,
      contactEmail: entry.fields.contactEmail,
      contactPhone: entry.fields.contactPhone,
      socialLinks: entry.fields.socialLinks || {},
      footerLinks: entry.fields.footerLinks || {},
      copyright: entry.fields.copyright,
    };
  } catch (error) {
    console.error("Error fetching footer:", error);
    return {
      companyName: "",
      companyDescription: "",
      contactEmail: "",
      contactPhone: "",
      socialLinks: {},
      footerLinks: {},
      copyright: "",
    };
  }
} 