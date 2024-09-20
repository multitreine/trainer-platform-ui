import { useState } from "react";
import SubMenu from "./SubMenu";

interface MenuItemProps {
  label: string;
  onClick: () => void;
  hasSubMenu?: boolean;
  links?: { label: string; onClick: () => void }[];
  mobile?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  hasSubMenu,
  links,
  mobile,
}) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setSubMenuOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isHovered) {
      setSubMenuOpen(false);
    }
  };

  return (
    <div
      className={`group relative ${
        mobile ? "text-white py-2" : "hover:text-gray-300"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
    >
      <a href="#" onClick={onClick}>
        {label}
      </a>
      {isSubMenuOpen && hasSubMenu && links && (
        <SubMenu
          links={links}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setSubMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default MenuItem;
