import { Heart } from "lucide-react";
import { Personal } from "@/types/portfolio";

interface FooterProps {
  personal: Personal;
}

export const Footer = ({ personal }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
