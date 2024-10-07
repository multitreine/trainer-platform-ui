"use client";

import Image from "next/image";
import * as IconLucie from "lucide-react";
import { Button } from "@/components/ui/button";
import { makeStore } from "@/store/createStore";
import { selectorsHeader } from "@/ducks/header";
import { useEffect, useState } from "react";

type HeaderProps = {
  headerData: {
    data: { logoDesktop?: { path: string; } | undefined; navLinks?: never[] | undefined; icon?: never[] | undefined; logoMobile?: { path: string; } | undefined; };
    logoDesktop: { path: string };
    logoMobile: { path: string };
    navLinks: Array<{ path: string; name: string }>;
    icon: Array<{ name: string; path: string; size: number }>;
  };
};

type LinkProps = {
  path: string;
  name: React.ReactNode;
};

type SocialIconProps = {
  name: string;
  path: string;
  size: number;
};

function getIconComponent(social: SocialIconProps) {
  const iconName = social.name.charAt(0).toUpperCase() + social.name.slice(1);
  const Icon =
    (
      IconLucie as unknown as {
        [key: string]: React.ComponentType<{ className?: string }>;
      }
    )[iconName] || IconLucie["Facebook"];
  return Icon;
}

function HeaderComponent({ headerData }: HeaderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <></>;
  }

  const {
    logoDesktop = { path: "" },
    navLinks = [],
    icon = [],
    logoMobile = { path: "" },
  } = headerData?.data;

  const pathLogoDesktop = `${process.env.COCKPIT_URL}/storage/uploads${logoDesktop.path}`;
  const pathLogoMobile = `${process.env.COCKPIT_URL}/storage/uploads${logoMobile.path}`;

  return (
    <header className="container mx-auto px-4 flex items-center justify-between">
      <div className="hidden md:block">
        <Image
          src={pathLogoDesktop}
          alt="Logo Desktop"
          width={150}
          height={0}
        />
      </div>

      <div className="block md:hidden">
        <Image src={pathLogoMobile} alt="Logo Mobile" width={150} height={0} />
      </div>

      <nav className="hidden pb-5 md:flex space-x-6">
        {navLinks?.map((link: LinkProps, index: React.Key) => (
          <a
            key={index}
            href={link.path}
            className="text-gray-600 hover:text-gray-900"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex pb-5 items-center space-x-4">
        {icon?.map((social: SocialIconProps, index: React.Key) => {
          const Icon = getIconComponent(social);

          return (
            <div key={index} onClick={() => window.open(social.path, "_blank")}>
              <Icon
                className={`w-${social.size} h-${social.size} text-gray-600 hover:text-green-600 transition-colors duration-200 cursor-pointer`}
              />
            </div>
          );
        })}
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Login
        </Button>
      </div>
    </header>
  );
}

const wrapperHeader = (Component: any) => {
  return function WrapperHeader() {
    const store = makeStore.getState();


    const headerData = {
      data: selectorsHeader.selectHeaderData(store),
      loading: selectorsHeader.selectHeaderLoading(store),
      error: selectorsHeader.selectHeaderError(store),
    };

    return <Component headerData={headerData} />;
  };
};

export const Header = wrapperHeader(HeaderComponent);
