"use client";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { getIconComponent } from "@/helpers/getIconComponent";
import Image from "next/image";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { useFooterStore } from "@/store/footer";
import _ from "lodash";

interface FooterSectionProps {
  footerData: {
    sections: any[];
    socialLinks: any[];
    paymentMethods: any[];
    loading: boolean;
    error: any;
  };
}

function FooterComponent({ footerData }: FooterSectionProps) {

  if (_.isEmpty(footerData)) {
    return null;
  }

  return (
    <footer className="bg-[#499F63] text-white py-12">
      <div className="container mx-auto px-4">
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
          <div className="flex space-x-4">
            {footerData?.socialLinks?.map((social: any) => {
              const Icon = getIconComponent(social?.icon) as React.ElementType;
              return (
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

const wrapperFooter = (Component: any) => {
  return function WrapperFooter() {
    const { fetchFooterData, data } = useFooterStore();

    useEffect(() => {
      fetchFooterData();
    }, [fetchFooterData]);

    return <Component footerData={data} />;
  };
};

export const Footer = wrapperFooter(FooterComponent);
