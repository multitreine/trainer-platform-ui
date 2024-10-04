"use client";
import {
  YoutubeLogo,
  InstagramLogo,
  TiktokLogo,
  TwitchLogo,
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
  CaretUp,
} from "@phosphor-icons/react";
import Image from "next/image";

const footerData = [
  {
    sectionTitle: "Programas",
    links: [
      { name: "Discover", href: "" },
      { name: "Ignite", href: "" },
      { name: "Explorer", href: "" },
      { name: "Blog", href: "" },
    ],
  },
  {
    sectionTitle: "Sobre",
    links: [
      { name: "A Rocketseat", href: "" },
      { name: "Para empresas", href: "" },
      { name: "Direitos autorais", href: "" },
      { name: "Termos de uso", href: "" },
      { name: "Políticas de privacidade", href: "" },
    ],
  },
  {
    sectionTitle: "Dúvidas",
    links: [
      { name: "Comunidade", href: "" },
      { name: "Central de ajuda", href: "" },
    ],
  },
  {
    socialMedia: [
      {
        platform: "Youtube",
        icon: <YoutubeLogo size={32} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Instagram",
        icon: <InstagramLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Tiktok",
        icon: <TiktokLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Twitch",
        icon: <TwitchLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Twitter",
        icon: <TwitterLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Facebook",
        icon: <FacebookLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Linkedin",
        icon: <LinkedinLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
      {
        platform: "Github",
        icon: <GithubLogo size={30} color="#8257e5" weight="fill" />,
        href: "",
      },
    ],
  },
  {
    logo: {
      src: "/logo.svg",
      alt: "Logo",
      width: 100,
      height: 100,
      text: "© 2021 Rocketseat - Todos os direitos reservados",
    },
  },
];

const beforeFooter = [
  "before:content-['']",
  "before:absolute",
  "relative",
  "before:bottom-0",
  "before:right-0",
  "before:w-0",
  "before:h-0.5",
  "before:bg-[#8257e5]",
  "before:transition-[width]",
  "before:duration-[.6s]",
  "w-fit",
  "before:ease-rocket-expo",
  "before:hover:w-full",
  "before:hover:left-0",
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#121214] relative after:h-[.0625rem] after:absolute after:bg-[#29292e] after:bottom-[112px] after:content-[''] after:w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerData
              .filter((section) => section.links)
              .map((section, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-bold text-[#e1e1e6]">
                    {section.sectionTitle}
                  </span>
                  {section?.links?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className={beforeFooter.join(" ")}
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
          </div>

          <div className="border-t border-[#29292e] py-8 flex flex-col items-center sm:flex-row justify-between">
            {/* Logo and text */}
            <div className="flex flex-col items-center sm:flex-row">
              {footerData
                .filter((section) => section.logo)
                .map((section, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Image
                      src={section.logo?.src || "/default-logo.svg"}
                      width={section.logo?.width}
                      height={section.logo?.height}
                      alt={section.logo?.alt || "Default Alt Text"}
                      className="h-12"
                    />
                    <span className="text-[#e1e1e6] text-[0.7rem]">
                      {section.logo?.text}
                    </span>
                  </div>
                ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-4 sm:mt-0">
              {footerData
                .filter((section) => section.socialMedia)
                .map((section) =>
                  section.socialMedia?.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      className="h-12 w-12 bg-[#202024] flex justify-center items-center rounded"
                      href={social.href}
                    >
                      {social.icon}
                    </a>
                  ))
                )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
