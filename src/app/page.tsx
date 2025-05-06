// import { ThemeSwitcher } from "../components/ThemeSwitcher";

import Hero from "../components/Hero/Hero";
import HomeBrands from "../components/HomeBrands/HomeBrands";
import HomeNewArrivals from "../components/HomeNewArrivals/HomeNewArrivals";
import HomeTopSelling from "../components/HomeTopSelling/HomeTopSelling";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeBrands />
      <div className="flex flex-col gap-10 [&>*]:mt-10">
        <HomeNewArrivals />
        <div className="border border-1 border-[#EEE] mx-20"></div>
        <HomeTopSelling />
      </div>
    </div>
  );
}
