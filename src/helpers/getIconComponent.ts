import * as IconLucie from "lucide-react";

type SocialIconProps = {
  name?: string;
  path?: string;
  size?: number;
  icon?: string;
};


function getIconComponent(social: SocialIconProps) {
  const iconName = typeof social === 'string' ? social : social?.name ?
    social?.name?.charAt(0).toUpperCase() + social?.name?.slice(1) :
    '';

  const Icon =
    IconLucie[iconName as keyof typeof IconLucie] || IconLucie["Facebook"];

  return Icon;
}

export { getIconComponent }