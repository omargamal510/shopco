import { Product } from "@/types/product-types";
import Image from "next/image";

function ProductListItem({
  imageCover,
  ratingsAverage,
  price,
  title,
}: Readonly<Product>) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 ">
      <div className="relative shadow-2xl w-44 h-44 md:w-56 md:h-56 rounded-2xl">
        <Image
          alt="title"
          fill
          className="object-contain "
          src={`${imageCover}`}
        />
      </div>
      <h3 className=" font-bold">{title}</h3>
      <div>
        <span>star</span>
        <span>{ratingsAverage}</span>
      </div>

      <h4 className="text-2xl font-bold">${price}</h4>
    </div>
  );
}

export default ProductListItem;
