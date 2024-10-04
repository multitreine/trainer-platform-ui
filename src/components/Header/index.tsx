const headerData = {
  logo: "/logoMultitreine.png",
  navLinks: [
    { text: "Sobre", url: "#sobre" },
    { text: "Serviços", url: "#servicos" },
    { text: "Blog", url: "#blog" },
    { text: "Contato", url: "#contato" },
  ],
  socialLinks: [
    { icon: "Facebook", url: "https://facebook.com" },
    { icon: "Youtube", url: "https://youtube.com" },
    { icon: "Instagram", url: "https://instagram.com" },
  ],
  loginText: "Login",
};

import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Image src={headerData.logo} alt="Logo" width={150} height={40} />
      <nav className="hidden md:flex space-x-6">
        {headerData.navLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-gray-600 hover:text-gray-900"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        {headerData.socialLinks.map((social, index) => {
          const Icon =
            social.icon === "Facebook"
              ? Facebook
              : social.icon === "Youtube"
              ? Youtube
              : Instagram;
          return <Icon key={index} className="w-5 h-5 text-gray-600" />;
        })}
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {headerData.loginText}
        </Button>
      </div>
    </header>
  );
}