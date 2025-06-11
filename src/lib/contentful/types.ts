import { EntryFieldTypes } from "contentful";

export type PageEntrySkeleton = {
  contentTypeId: "page";
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    metaTitle?: EntryFieldTypes.Symbol;
    metaDescription?: EntryFieldTypes.Symbol;
  };
};

export type NavigationEntrySkeleton = {
  contentTypeId: "navigation";
  fields: {
    title: EntryFieldTypes.Symbol;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PageEntrySkeleton>>;
  };
};
