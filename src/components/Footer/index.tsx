import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { getIconComponent } from "@/helpers/getIconComponent";
import Image from "next/image";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import { useFooterStore } from "@/store/footer";


export function FooterComponent({ footerData }: any) {
  return (
    <footer className="bg-[#499F63] text-white py-12 ">
      <div className="container mx-auto px-4">
        {/* <div className="bg-[#F3F4F6] rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-xl text-black font-bold mb-4 md:mb-0">
              {footerData?.newsletter?.title}
            </h3>
            <div className="flex items-center w-full md:w-auto">
              <Input
                type="email"
                placeholder={footerData?.newsletter?.placeholder}
                className="bg-white text-black mr-2 focus:border-green-500
                focus:ring-green-500 focus:ring-2 focus:outline-none"
              />
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {footerData?.newsletter?.buttonText}
              </Button>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerData?.sections?.map((section: any) => (
            <div key={uuidv4()}>
              <h4 className="text-lg font-semibold mb-4">{section?.title}</h4>
              <ul className="space-y-2">
                {section?.links?.map((link: any) => (
                  <li key={uuidv4()}>
                    <a href={link?.url} className="hover:underline">
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-gray-700 pt-8">
          <p>{footerData?.copyright}</p>
          <div className="flex space-x-4">
            {footerData?.socialLinks?.map((social: any) => {
              const Icon = getIconComponent(social.icon) as React.ElementType;
              return (
                <>
                  <Link
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uuidv4()}
                  >
                    <Icon
                      className={`w-6 h-6 text-gray-600 hover:text-white transition-colors duration-200 cursor-pointer`}
                    />
                  </Link>
                  <div />
                </>
              );
            })}
          </div>
        </div>

        {footerData?.paymentMethods?.length > 0 && (
          <div className="mt-8 text-center">
            <p className="mb-2">Métodos de pagamento aceitos</p>
            <div className="flex justify-center space-x-4">
              {footerData?.paymentMethods?.map((payment: any) => {
                const pathImage = getPathImage(payment.icon);
                return (
                  <div key={uuidv4()} className="w-8 h-8 bg-gray-300 rounded">
                    <Image
                      src={pathImage}
                      alt="Payment Method"
                      width={12}
                      height={12}
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

const wrapperCourses = (Component: any) => {
  return async function WrapperCourses() {
    const footer = await useFooterStore.getState().fetchFooterData();
    const selectorsData = useFooterStore.getState().data;

    return <Component footerData={selectorsData} />;
  };
};



export const Footer = wrapperCourses(FooterComponent);
