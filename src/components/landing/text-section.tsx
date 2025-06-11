import { getAllTextComponents } from "@/lib/contentful/actions/text-component";
import { TextComponent } from "./text-component";

export async function TextSection() {
  const textComponents = await getAllTextComponents();

  if (!textComponents || textComponents.length === 0) {
    return null;
  }

  return (
    <section className="bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        {textComponents.map((textComponent, index) => (
          <TextComponent
            key={index}
            textComponent={textComponent}
            className={index > 0 ? "border-t border-accent/20" : ""}
          />
        ))}
      </div>
    </section>
  );
}
