import FooterCompanySection from "@/components/Footer/FooterCompanySection";
import { FooterLinksData } from "@/components/Footer/FooterData";
import FooterLinksComponent from "@/components/Footer/FooterLinksComponent";
import FooterLogo from "@/components/Footer/FooterLogo";
import PaymentSvgs from "@/ui/PaymentSvgs";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 bg-default-grey py-20 md:px-20 px-10 satoshi">
      <div className=" flex flex-col gap-10 lg:flex-row lg:gap-0 justify-between ">
        <FooterLogo />

        <div className="grid grid-cols-12 gap-10 lg:gap-2 justify-between w-full">
          {FooterLinksData.map(({ title, linksData }, index) => (
            <FooterLinksComponent
              key={index}
              title={title}
              linksData={linksData}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-grey-black-10 pt-5 flex flex-col gap-5 items-center md:items-start md:flex-row justify-between ">
        <p className="text-grey-black-60 text-sm">
          Shop.co © 2000-2025, All Rights Reserved
        </p>
        <PaymentSvgs />
      </div>
    </footer>
  );
};

export default Footer;
