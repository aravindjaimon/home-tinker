import { getAllImageTextComponents } from "@/lib/contentful/actions/image-text-component";
import { ImageTextComponent } from "./image-text-component";

export async function ImageTextSection() {
  const imageTextComponents = await getAllImageTextComponents();

  if (!imageTextComponents || imageTextComponents.length === 0) {
    return null;
  }

  return (
    <section className="bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-6">
        {imageTextComponents.map((imageTextComponent, index) => (
          <ImageTextComponent
            key={index}
            imageTextComponent={imageTextComponent}
            className={index > 0 ? "border-t border-accent/20" : ""}
          />
        ))}
      </div>
    </section>
  );
}
