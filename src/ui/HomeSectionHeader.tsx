import { HomeSectionHeaderProp } from "../types/home-types.js";

function HomeSectionHeader({ text }: HomeSectionHeaderProp) {
  return <h2 className="anton text-3xl">{text}</h2>;
}

export default HomeSectionHeader;
