import { Entry, EntryFieldTypes } from "contentful";

export type SocialLink = {
  url: string;
  platform: string;
};

export type FooterLink = {
  url: string;
  title: string;
};

export type PageEntrySkeleton = {
  contentTypeId: "page";
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    metaTitle?: EntryFieldTypes.Symbol;
    metaDescription?: EntryFieldTypes.Symbol;
    sections?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ComponentContentTypes>
    >;
  };
};

export type SlideEntrySkeleton = {
  contentTypeId: "slide";
  fields: {
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.Symbol;
    ctaText?: EntryFieldTypes.Symbol;
    ctaUrl?: EntryFieldTypes.Symbol;
  };
};

export type CarouselEntrySkeleton = {
  contentTypeId: "carousel";
  fields: {
    title: EntryFieldTypes.Symbol;
    slides: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<SlideEntrySkeleton>
    >;
  };
};

export type TextComponentEntrySkeleton = {
  contentTypeId: "textComponent";
  fields: {
    title?: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
    alignment?: EntryFieldTypes.Symbol<"left" | "center" | "right">;
  };
};

export type ImageTextComponentEntrySkeleton = {
  contentTypeId: "imageTextComponent";
  fields: {
    image: EntryFieldTypes.AssetLink;
    altText: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
    layout: EntryFieldTypes.Symbol<"image-left" | "image-right">;
  };
};

export type FooterEntrySkeleton = {
  contentTypeId: "footer";
  fields: {
    companyName: EntryFieldTypes.Symbol;
    companyDescription?: EntryFieldTypes.Symbol;
    contactEmail?: EntryFieldTypes.Symbol;
    contactPhone?: EntryFieldTypes.Symbol;
    socialLinks?: SocialLink[];
    footerLinks?: FooterLink[];
    copyright: EntryFieldTypes.Symbol;
  };
};

export type NavigationEntrySkeleton = {
  contentTypeId: "navigation";
  fields: {
    title: EntryFieldTypes.Symbol;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PageEntrySkeleton>>;
  };
};

export type ComponentContentTypes =
  | TextComponentEntrySkeleton
  | ImageComponentEntrySkeleton
  | ImageTextComponentEntrySkeleton
  | CarouselEntrySkeleton;

export type ComponentEntry =
  | Entry<TextComponentEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
  | Entry<ImageComponentEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
  | Entry<ImageTextComponentEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
  | Entry<CarouselEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>;
