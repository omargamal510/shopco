import { Brand } from "../../types/brands-types.js";
import { getBrands } from "../../utils/api";

const altBrands: string[] = [
  "Nike",
  "Adidas",
  "Zara",
  "H&M",
  "Uniqlo",
  "Levi's",
  "Gucci",
  "Prada",
  "Burberry",
  "Versace",
  "Patagonia",
  "Lululemon",
  "Balenciaga",
  "Lacoste",
];

async function HomeBrands() {
  const brand = await getBrands(10);

  return (
    <div className="mb-20">
      <div className=" gap-5 overflow-hidden">
        <div className="flex flex-nowrap items-center gap-7 bg-black py-2  text-white">
          {brand?.data.length === 0
            ? altBrands.map((e: string, i: number) => (
                <p
                  className="w-[500px] text-center text-2xl anton tracking-widest slider-move"
                  key={i}
                >
                  {e}
                </p>
              ))
            : brand?.data.map((e: Brand) => (
                <p
                  className="w-[500px] text-center text-3xl anton tracking-widest slider-move"
                  key={e._id}
                >
                  {e.name}
                </p>
              ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBrands;
