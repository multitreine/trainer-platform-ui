interface SubMenuProps {
  links: { label: string; onClick: () => void }[];
  onMouseEnter: () => void; 
  onMouseLeave: () => void; 
}

const SubMenu: React.FC<SubMenuProps> = ({
  links,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="absolute bg-[#2D2C35] p-4 mt-1 top-full left-0 z-10"
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} 
    >
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="block hover:text-gray-300"
          onClick={link.onClick}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SubMenu;
