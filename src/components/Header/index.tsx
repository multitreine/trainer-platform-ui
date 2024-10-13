import Image from "next/image";
import { Button } from "@/components/ui/button";
import { makeStore } from "@/store/createStore";
import { operationsHeader, selectorsHeader } from "@/ducks/header";
import Link from "next/link";
import { getIconComponent } from "@/helpers/getIconComponent";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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


function HeaderComponent({ headerData }: HeaderProps) {
  const {
    logoDesktop = { path: "" },
    navLinks = [],
    icon = [],
    logoMobile = { path: "" },
  } = headerData;

  const pathLogoDesktop = `${process.env.COCKPIT_URL}/storage/uploads${logoDesktop.path}`;
  const pathLogoMobile = `${process.env.COCKPIT_URL}/storage/uploads${logoMobile.path}`;

  return (
    <header className="headerCustom bg-transparent absolute z-20 container mx-auto px-4 flex items-center justify-between">
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
        {navLinks?.map((link: LinkProps) => (
          <a
            key={uuidv4()}
            href={link.path}
            className="text-gray-600 hover:text-gray-900"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex pb-5 items-center space-x-4">
        {icon?.map((social: SocialIconProps ) => {
          const Icon = getIconComponent(social) as React.ElementType;
          return (
            <Link
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
              key={uuidv4()}
            >
              <Icon
                className={`w-${social.size} h-${social.size} text-gray-600 hover:text-green-600 transition-colors duration-200 cursor-pointer`}
              />
            </Link>
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
  return async function WrapperHeader() {
    const dispatch = makeStore.dispatch;

    await dispatch(operationsHeader.fetchHeaderIfNeeded());

    const store = makeStore.getState();
    const headerData = selectorsHeader.selectHeaderData(store);

    return <Component headerData={headerData} />;
  };
};

export const Header = wrapperHeader(HeaderComponent);
