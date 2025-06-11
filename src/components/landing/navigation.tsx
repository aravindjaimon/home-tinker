import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getNavigation } from "@/lib/contentful/actions/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";

export async function Navigation() {
  const navigation = await getNavigation();
  const { title, links } = navigation;

  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">{title || "HomeTinker"}</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.slug}
                href={link.slug === "home" ? "/" : `/${link.slug}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.title}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-4 p-3">
                <Link href="/" className="font-bold text-xl mb-4">
                  {title || "HomeTinker"}
                </Link>
                <nav className="flex flex-col space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.slug}
                      href={link.slug === "home" ? "/" : `/${link.slug}`}
                      className="text-muted-foreground hover:text-foreground transition-colors py-2"
                      aria-label={link.title}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
