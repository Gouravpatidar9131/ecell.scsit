import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 sm:px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-6 inline-block">E-Cell</a>
            <p className="text-muted-foreground mb-6">
              Empowering students to innovate and lead through entrepreneurship.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "twitter", icon: <Twitter size={20} />, color: "bg-[#1DA1F2]", url: "https://twitter.com/ecell_scsit" },
                { name: "facebook", icon: <Facebook size={20} />, color: "bg-[#1877F2]", url: "https://www.facebook.com/ecellscsit" },
                { name: "instagram", icon: <Instagram size={20} />, color: "bg-[#E4405F]", url: "https://www.instagram.com/ecell_scsit?igsh=MXBwZzRuemV0Z2Vidg==" },
                { name: "linkedin", icon: <Linkedin size={20} />, color: "bg-[#0A66C2]", url: "https://linkedin.com/company/ecell-scsit" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${social.color} text-white hover:opacity-90 transition-opacity duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Events", "Initiatives", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Podcasts", "Startup Guide", "Mentorship", "FAQs"].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Entrepreneurship Cell. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Created by Gourav Patidar and Divya Nagar. 
            <a href="https://my-3d-portfolio-liard.vercel.app/" className="text-blue-500 hover:underline">Gourav's Portfolio</a> | 
            <a href="https://divya-green.vercel.app/" className="text-blue-500 hover:underline">Divya's Portfolio</a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
