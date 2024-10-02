"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Programs from "../programs";
import Events from "../events";
import ResponsiveMenu from "./responsiveheader";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchHeaderData } from "@/ducks/header/operations";

const data = {
  header: {
    logo: {
      src: "/logo.svg",
      alt: "logo",
      width: 210,
      height: 42,
    },
    mobileLogo: {
      src: "rocketseat-logo-mobile.svg",
      alt: "logo",
      width: 28,
      height: 36,
    },
    menuButton: {
      src: "menubutton.svg",
      alt: "menumobile",
      width: 25,
      height: 18,
    },
    menuItems: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Programas",
        type: "button",
        clickTarget: "Programas",
      },
      {
        label: "Eventos",
        type: "button",
        clickTarget: "Eventos",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "A Rocketseat",
        href: "/rocketseat",
      },
      {
        label: "Para empresas",
        href: "/empresas",
      },
    ],
    user: {
      desktop: {
        icon: "/user.svg",
        alt: "Usuário",
        width: 16,
        height: 16,
        label: "Entrar",
        href: "/login",
      },
      mobile: {
        icon: "/user-mobile.svg",
        alt: "Usuário",
        width: 24,
        height: 24,
        href: "/login",
      },
    },
    ctaButton: {
      label: "criar conta",
      href: "/signup",
    },
  },
};

export default function Header() {
  const [click, setClick] = useState("");

  const dispatch = useAppDispatch();
  const users = useAppSelector((state: any) => state.header);

  const disableScroll = (hidden: boolean) => {
    if (hidden === true) {
      document.body.classList.toggle("lg:overflow-hidden");
      document.body.classList.toggle("pr-[6px]");
    }
  };
  const handleClick = (display: string) => {
    setClick(click === "Programas" || click === "Eventos" ? "" : display);
    disableScroll(true);
  };

  useEffect(() => {
    dispatch(fetchHeaderData());
  }, []);

  useEffect(() => {
    console.log(users);
  }, [click]);

  const headerData = data.header;

  return (
    <>
      <>
        <div
          className={`bg-white flex w-full fixed z-10 h-[83px] border-b border-[#787878] flex-col justify-center items-center `}
        >
          <header className="flex w-[100%] px-4 flex-row min-h-full justify-between items-center lg:px-6">
            <div className="lg:hidden flex flex-row justify-between items-center max-w-[83.83px] w-full">
              <div>
                <Image
                  src={headerData.mobileLogo.src}
                  width={headerData.mobileLogo.width}
                  height={headerData.mobileLogo.height}
                  alt={headerData.mobileLogo.alt}
                />
              </div>
              <div className="w-[1px] h-[31px] bg-[#121214]"></div>
              <div>
                <button
                  onClick={() => handleClick("Programas")}
                  aria-label="Menu mobile"
                >
                  <Image
                    src={headerData.menuButton.src}
                    width={headerData.menuButton.width}
                    height={headerData.menuButton.height}
                    alt={headerData.menuButton.alt}
                  />
                </button>
              </div>
            </div>

            <div className="min-w-[210px] mb-1 max-lg:hidden">
              <Image
                src={headerData.logo.src}
                width={headerData.logo.width}
                height={headerData.logo.height}
                alt={headerData.logo.alt}
              />
            </div>

            <nav className="min-h-full w-[630px] max-lg:hidden">
              <ul className="h-[82px] w-full px-4 items-center justify-center font-normal flex gap-8 flex-row">
                {headerData.menuItems.map((item, index) =>
                  item.type === "button" ? (
                    <button
                      key={index}
                      onClick={() => handleClick(item.clickTarget)}
                      className="flex flex-row items-center gap-x-[.3125rem] hover:text-black h-full hover:border-[#996dff] hover:border-b-[2px] border-b-[2px] border-b-transparent justify-center"
                    >
                      <p>{item.label}</p>
                      <span>
                        <div className="border-solid border-b-[2px] border-r-[2px] mb-[5px] ml-[2px] border-[#a8a8b3] w-[7px] h-[7px] transform rotate-45"></div>
                      </span>
                    </button>
                  ) : (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-x-[.3125rem] hover:text-black h-full hover:border-[#996dff] hover:border-b-[2px] border-b-[2px] border-b-transparent justify-center"
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div>
              <ul className="font-bold uppercase items-center gap-8 text-xs text-[#FFFFFF] flex-row flex">
                <div
                  className=" cursor-pointer
                    hover:border w-[118.9504px] h-[38px]
                    rounded-[5px] hover:border-[#8257E5] transition 
                    flex max-lg:hidden flex-row items-center justify-center gap-2"
                    onClick={() =>  window.location.href = headerData.user.desktop.href}
                  >
                    <span>
                      <Image
                        src={headerData.user.desktop.icon}
                        width={headerData.user.desktop.width}
                        height={headerData.user.desktop.height}
                        alt={headerData.user.desktop.alt}
                      />
                    </span>
                    <span
                      className="text-black"
                    >
                      {headerData.user.desktop.label}
                    </span>
                </div>

                <div className="flex lg:hidden flex-row items-center justify-center gap-2">
                  <a href={headerData.user.mobile.href}>
                    <Image
                      src={headerData.user.mobile.icon}
                      width={headerData.user.mobile.width}
                      height={headerData.user.mobile.height}
                      alt={headerData.user.mobile.alt}
                    />
                  </a>
                </div>

                <button className="border flex justify-center items-center 
                  w-[118.9504px] h-[38px] 
                  rounded-[5px] border-[#8257E5] hover:bg-[#9466ff] transition 
                  all duration-300"
                  >
                  <a
                    href={headerData.ctaButton.href}
                    className="uppercase block text-black hover:text-white "
                  >
                    {headerData.ctaButton.label}
                  </a>
                </button>
              </ul>
            </div>
          </header>
        </div>

        <div
          className={`fixed z-50 mt-[82px] max-lg:w-screen w-full bg-[#121214] ${
            click === "Programas" ? "flex" : "hidden"
          } lg:justify-center border-b border-[#29292e] max-lg:p-[25px] lg:items-center h-[387px] max-lg:h-full`}
        >
          <div className="max-lg:hidden">
            <Programs />
          </div>
          <div className="lg:hidden">
            <ResponsiveMenu />
          </div>
        </div>

        <div
          className={`fixed mt-[82px] z-50 w-full bg-[#121214] ${
            click === "Eventos" ? "flex" : "hidden"
          } justify-center border-b border-[#29292e] items-center h-[277px] max-lg:h-full`}
        >
          <Events />
        </div>
      </>
    </>
  );
}
