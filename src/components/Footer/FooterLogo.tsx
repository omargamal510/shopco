import { FooterLogoDataTypes } from "@/types/footer.types";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

// const footerLogoData: JSX.Element[] = [
//   <Twitter />,
//   <Facebook />,
//   <Instagram />,
//   <Github />,
// ];

const footerLogoData: FooterLogoDataTypes[] = [
  {
    logo: <Twitter />,
    id: 1,
  },

  {
    logo: <Facebook />,
    id: 2,
  },

  {
    logo: <Instagram />,
    id: 3,
  },

  {
    logo: <Github />,
    id: 4,
  },
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
        {footerLogoData.map(({ logo, id }) => (
          <Link
            className="p-2 [&>*]:w-4 [&>*]:h-4  border border-[#00000033] bg-white rounded-full hover:bg-black hover:text-white transition-base"
            key={id}
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
