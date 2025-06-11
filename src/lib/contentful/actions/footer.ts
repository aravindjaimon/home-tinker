"use server";

import { client } from "../client";
import { FooterEntrySkeleton, FooterLink, SocialLink } from "../types";

export async function getFooter() {
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
      socialLinks: [] as SocialLink[],
      footerLinks: [] as FooterLink[],
      copyright: "",
    };
  }

  const entry = entries.items[0];
  return {
    companyName: entry.fields.companyName,
    companyDescription: entry.fields.companyDescription,
    contactEmail: entry.fields.contactEmail,
    contactPhone: entry.fields.contactPhone,
    socialLinks: (entry.fields.socialLinks as SocialLink[] | undefined) || [],
    footerLinks: (entry.fields.footerLinks as FooterLink[] | undefined) || [],
    copyright: entry.fields.copyright,
  };
}
