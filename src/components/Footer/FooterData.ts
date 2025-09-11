import { FooterLinksDataTypes } from "@/types/footer.types";

const FooterHelpData: string[] = [
  "Customer Support",
  "Delivery Details",
  "Terms & Conditions",
  "Privacy Policy",
];

const companyFooterSectionData: string[] = [
  "About",
  "Features",
  "Works",
  "Career",
];

const FooterFaQData: string[] = [
  "Account",
  "Manage Deliveries",
  "Orders",
  "Payments",
];

const FooterResourcesData: string[] = [
  "Free eBooks",
  "Development Tutorial",
  "How to - Blog",
  "Youtube Playlist",
];

export const FooterLinksData: FooterLinksDataTypes[] = [
  {
    title: "Company",
    linksData: companyFooterSectionData,
  },

  {
    title: "Help",
    linksData: FooterHelpData,
  },

  {
    title: "Faq",
    linksData: FooterFaQData,
  },

  {
    title: "Resources",
    linksData: FooterResourcesData,
  },
];
