import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

const footerLogoData: JSX.Element[] = [
  <Twitter />,
  <Facebook />,
  <Instagram />,
  <Github />,
];

const FooterLogo = () => {
  return (
    <div className="flex flex-col lg:gap-0 gap-5 justify-between ">
      <h2 className="font-black text-black dark:text-white tracking-widest text-3xl anton">
        SHOP.CO
      </h2>
      <p className="text-sm w-full md:w-[70%] text-[#00000099]">
        We have clothes that suits your style and which you’re proud to wear.
        From women to men.
      </p>

      <div className="flex gap-1.5 ">
        {footerLogoData.map((logo, index) => (
          <Link
            className="p-2 [&>*]:w-4 [&>*]:h-4  border border-[#00000033] bg-white rounded-full hover:bg-black hover:text-white transition-base"
            key={index}
            href="/"
          >
            {logo}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;
