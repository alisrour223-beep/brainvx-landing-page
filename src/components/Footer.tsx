import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-black border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/409656/2025-12-29/42bd23bd-52ed-4b9b-ad8e-0eb77859e913.png"
                alt="Brainvx Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-gradient">Brainvx</span>
            </div>
            <p className="text-gray-400 text-sm">
              The Operating Brain.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex justify-end gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1A1A1A] text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Brainvx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}