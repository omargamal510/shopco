import Link from "next/link";
import { HeroSliderTypes } from "../../types/hero-types";

const heroStats: HeroSliderTypes[] = [
  {
    num: 200,
    text: "International Brands",
  },
  {
    num: 2000,
    text: "High-Quality Products",
  },
  {
    num: 30000,
    text: "Happy Customers",
  },
];

async function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row h-full">
      {/* Image Section */}

      <div
        className="h-[300px] sm:h-screen w-full sm:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('./home/hero.avif')",
        }}
      />

      {/* Text Section */}
      <div className="flex flex-col items-center text-center sm:items-start sm:text-start gap-8 py-10 px-6 sm:px-10 w-full sm:w-1/2 justify-center">
        <h2 className="text-4xl sm:text-6xl tracking-[5px] anton">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h2>

        <p className="text-grey-black dark:text-white  w-3/4">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Link
          className="bg-black text-white hover:bg-grey-black transition-base text-primary w-fit p-2 px-16 rounded-full"
          href="/"
        >
          Shop Now
        </Link>

        <div className="flex flex-wrap justify-center gap-5 pt-6">
          {heroStats.map(({ num, text }, i: number) => (
            <div
              className={`${i !== 0 && "border-l pl-5"} border-gray-300`}
              key={i}
            >
              <h3 className="font-bold text-3xl">{num}+</h3>
              <p className="text-grey-black text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
