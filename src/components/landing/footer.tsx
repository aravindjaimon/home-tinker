import { Separator } from "@/components/ui/separator";
import { getFooter } from "@/lib/contentful/actions/footer";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export async function Footer() {
  const footerData = await getFooter();

  const socialIcons: { [key: string]: React.ReactNode } = {
    facebook: <Facebook size={20} />,
    twitter: <Twitter size={20} />,
    instagram: <Instagram size={20} />,
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    GitHub: <Github size={20} />,
    Discord: <Facebook size={20} />,
    Reddit: <Twitter size={20} />,
    YouTube: <Instagram size={20} />,
  };

  return (
    <footer className="mt-12 xs:mt-20 bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-12 flex flex-col md:flex-row justify-between items-start gap-8 px-6">
        <div className="flex-shrink-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl">{footerData.companyName}</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            {footerData.companyDescription}
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            {footerData.socialLinks.map((socialLink) => (
              <Link
                key={socialLink.platform}
                href={socialLink.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {socialIcons[socialLink.platform] ||
                  socialIcons[socialLink.platform.toLowerCase()]}
              </Link>
            ))}
          </div>
        </div>

        {/* Custom Footer Links from Contentful */}
        {footerData.footerLinks.length > 0 && (
          <div className="flex-shrink-0">
            <h6 className="font-semibold text-foreground">More</h6>
            <ul className="mt-6 space-y-4">
              {footerData.footerLinks.map((footerLink) => (
                <li key={footerLink.title}>
                  <Link
                    href={footerLink.url}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {footerLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Separator />

      <div className="max-w-screen-xl mx-auto py-6 px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm">{footerData.copyright}</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
