import { FooterLinksDataTypes } from "@/types/footer.types";
import Link from "next/link";

const FooterLinksComponent = ({ title, linksData }: FooterLinksDataTypes) => {
  return (
    <div className="flex flex-col gap-4 col-span-6 lg:col-span-3">
      <h3 className="font-bold uppercase">{title}</h3>
      <div className="flex flex-col gap-4">
        {linksData.map((element, index) => (
          <Link className="text-grey-black-60" key={index} href={"/"}>
            {element}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksComponent;
