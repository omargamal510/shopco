import Link from "next/link";

const companyFooterSectionData: string[] = [
  "About",
  "Features",
  "Works",
  "Career",
];

const FooterCompanySection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold">Company</h3>
      <div className="flex flex-col gap-4">
        {companyFooterSectionData.map((element, index) => (
          <Link className="text-grey-black-60" key={index} href={"/"}>
            {element}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterCompanySection;
