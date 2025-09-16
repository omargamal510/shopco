// import Hero from "../components/Hero/Hero";
// import HomeBrands from "../components/HomeBrands/HomeBrands";
// import HomeDressStyle from "../components/HomeDressStyle/HomeDressStyle";
// import HomeNewArrivals from "../components/HomeNewArrivals/HomeNewArrivals";
// import HomeTopSelling from "../components/HomeTopSelling/HomeTopSelling";
// import HomeReviews from "../ui/HomeReviews";

import Hero from "@/components/Hero/Hero";
import HomeBrands from "@/components/HomeBrands/HomeBrands";
import HomeDressStyle from "@/components/HomeDressStyle/HomeDressStyle";
import HomeNewArrivals from "@/components/HomeNewArrivals/HomeNewArrivals";
import HomeTopSelling from "@/components/HomeTopSelling/HomeTopSelling";
import HomeReviews from "@/ui/HomeReviews";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HomeBrands />
      <div className="flex flex-col gap-20 px-20 pb-20">
        <HomeNewArrivals />
        <HomeTopSelling />
        <HomeDressStyle />
        <HomeReviews />
      </div>
    </div>
  );
}
