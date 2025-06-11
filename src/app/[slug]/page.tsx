import { Footer } from "@/components/landing/footer";
import { Navigation } from "@/components/landing/navigation";
import { getPage } from "@/lib/contentful/actions/pages";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-4rem)]">
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {page.title}
            </h1>
            {page.metaDescription && (
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {page.metaDescription}
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
