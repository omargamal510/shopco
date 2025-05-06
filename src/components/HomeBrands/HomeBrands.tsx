import { Brand } from "../../types/brands-types.js";
import { getBrands } from "../../utils/api";

async function HomeBrands() {
  const brand = await getBrands(10);

  return (
    <div>
      <div className=" gap-5 overflow-hidden">
        <div className="flex flex-nowrap gap-7 bg-black py-5 text-white">
          {brand?.data.map((e: Brand) => (
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
