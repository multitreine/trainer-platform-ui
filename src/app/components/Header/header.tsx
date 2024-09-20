import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineArrowDown } from "react-icons/ai";
import MenuItem from "./MenuItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const subMenuLinksProgramas = [
    { label: "Sublink 1", onClick: () => console.log("Sublink 1 clicked") },
    { label: "Sublink 2", onClick: () => console.log("Sublink 2 clicked") },
  ];

  const subMenuLinksEventos = [
    { label: "Evento 1", onClick: () => console.log("Evento 1 clicked") },
    { label: "Evento 2", onClick: () => console.log("Evento 2 clicked") },
  ];

  return (
    <div className="border-2 text-black flex items-center justify-between px-4 py-3 z-10 h-[83px]">
      <header className="max-w-[1440px] w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-lg font-bold" onClick={handleCloseMenu}>
            <Image src="/logo.svg" width={210} height={42} alt="logo" />
          </a>
        </div>
        <div className="md:hidden" id="menuButton">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineArrowDown /> : <AiOutlineMenu />}
          </button>
        </div>

        <div className="hidden md:flex space-x-4" id="menu">
          <MenuItem label="Home" onClick={handleCloseMenu} />
          <MenuItem
            label="Programas"
            onClick={handleCloseMenu}
            hasSubMenu
            links={subMenuLinksProgramas}
          />
          <MenuItem
            label="Eventos"
            onClick={handleCloseMenu}
            hasSubMenu
            links={subMenuLinksEventos}
          />
          <MenuItem label="Blog" onClick={handleCloseMenu} />
          <MenuItem label="Para empresas" onClick={handleCloseMenu} />

          <button className="border flex justify-center items-center w-[118.9504px] h-[38px] rounded-[5px] border-[#8257E5] hover:bg-[#9466ff] hover:text-white transition all duration-300">
            <a href="" className="uppercase block">
              criar conta
            </a>
          </button>
        </div>
        {isOpen && (
          <div
            className="flex flex-col md:hidden absolute bg-[#2D2C35] w-full p-4 top-[83px] left-0 z-10"
            id="mobileMenu"
          >
            <MenuItem label="Home" onClick={handleCloseMenu} mobile />
            <MenuItem label="Programas" onClick={handleCloseMenu} mobile />
            <MenuItem label="Eventos" onClick={handleCloseMenu} mobile />
            <MenuItem label="Blog" onClick={handleCloseMenu} mobile />
            <MenuItem label="Para empresas" onClick={handleCloseMenu} mobile />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
