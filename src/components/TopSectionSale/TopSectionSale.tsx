import Link from "next/link";
import TopSectionClose from "./TopSectionClose";

export default function TopSectionSale() {
  return (
    <div
      data-sale-banner="true"
      className="bg-darkPrimary text-primary px-12 lg:px-32 flex items-center justify-between"
    >
      <div className="text-center w-full">
        <p>
          Sign up and get 20% off to your first order.
          <Link className="underline" href="/">
            {" "}
            Sign Up Now{" "}
          </Link>
        </p>
      </div>
      <TopSectionClose />
    </div>
  );
}
