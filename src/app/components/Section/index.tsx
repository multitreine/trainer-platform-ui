import Image from "next/image";
import { ReactNode } from "react";
import { Testimony } from "../Testimony";
import { Icon } from "../Icon";

interface SectionProps {
  buttonText: string;
  buttonLink: string;
  buttonBgColor: string;
  buttonTextColor: string;
  buttonIcon: string;
  imageSrc: string;
  isActive: boolean;
  children: ReactNode;
  testimony: Object;
}

function Section({
  buttonText,
  buttonLink,
  buttonBgColor,
  buttonTextColor,
  buttonIcon,
  imageSrc,
  isActive,
  children,
  testimony,
}: SectionProps) {
  if (!isActive) return <></>;

  return (
    <div className={`flex flex-row text-white w-full`}>
      <div className="max-w-[556px] w-full">
        {children}
        <a
          className={`flex flex-row mt-8 mb-[60px] max-w-[240.3px] h-[56px] rounded-[5px] gap-[15px] justify-center items-center uppercase ${buttonBgColor} ${buttonTextColor}`}
          href={buttonLink}
        >
          {buttonText}
          <span>
            <Icon src={buttonIcon} width={24} height={24} alt="Arrow Icon" />
          </span>
        </a>
        <Testimony testimony={testimony} />
      </div>
      <div>
        <Image src={imageSrc} width={516} height={465.53} alt="Dev coding" />
      </div>
    </div>
  );
}

export { Section };