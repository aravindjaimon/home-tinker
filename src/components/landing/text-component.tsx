import { getAllTextComponents } from "@/lib/contentful/actions/text-component";
import { cn } from "@/lib/utils";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

interface TextComponentProps {
  textComponent: Awaited<ReturnType<typeof getAllTextComponents>>[0];
  className?: string;
}

// Rich text rendering options
const renderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children: React.ReactNode) => (
      <p className="mb-4 last:mb-0">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children: React.ReactNode) => (
      <h2 className="text-3xl font-semibold mb-5">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children: React.ReactNode) => (
      <h3 className="text-2xl font-semibold mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children: React.ReactNode) => (
      <h4 className="text-xl font-semibold mb-3">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children: React.ReactNode) => (
      <h5 className="text-lg font-semibold mb-3">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children: React.ReactNode) => (
      <h6 className="text-base font-semibold mb-2">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children: React.ReactNode) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children: React.ReactNode) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children: React.ReactNode) => (
      <li>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export function TextComponent({
  textComponent,
  className,
}: TextComponentProps) {
  if (!textComponent) {
    return null;
  }

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const alignment = textComponent.alignment || "left";

  return (
    <div
      className={cn(
        "w-full max-w-4xl mx-auto py-12",
        alignmentClasses[alignment as keyof typeof alignmentClasses],
        className
      )}
    >
      {textComponent.title && (
        <h2 className="text-3xl font-bold mb-6">{textComponent.title}</h2>
      )}
      <div className="prose prose-lg max-w-none">
        {documentToReactComponents(textComponent.content, renderOptions)}
      </div>
    </div>
  );
}
