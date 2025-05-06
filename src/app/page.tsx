// import { ThemeSwitcher } from "../components/ThemeSwitcher";

import Hero from "../components/Hero/Hero";
import HomeBrands from "../components/HomeBrands/HomeBrands";
import HomeNewArrivals from "../components/HomeNewArrivals/HomeNewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeBrands />
      <div className="flex flex-col gap-10 [&>*]:mt-10">
        <HomeNewArrivals />
      </div>
    </div>
  );
}
