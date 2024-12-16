import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a2d44] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/p1research"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/phase-1-research/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.gofundme.com/f/build-research-facilities-in-underprivileged-areas-student?attribution_id=undefined&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=website_widget"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Donate
          </a>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;