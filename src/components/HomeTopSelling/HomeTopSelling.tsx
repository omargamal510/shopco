import Link from "next/link.js";
import ProductCard from "../../ui/ProductCard";
import { getProducts } from "../../utils/api";
import HomeSectionHeader from "../../ui/HomeSectionHeader";

async function HomeTopSelling() {
  const products = await getProducts(5, 2);
  return (
    <div className="flex flex-col gap-10 items-center w-full">
      <div className="">
        <HomeSectionHeader text="Top Selling" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {products?.data.map(
          ({ _id, title, imageCover, price, ratingsAverage }) => (
            <ProductCard
              key={_id}
              title={title}
              imageCover={imageCover}
              ratingsAverage={ratingsAverage}
              price={price}
            />
          )
        )}
      </div>

      <Link href={"/"} className="w-fit p-2 px-20 border rounded-full">
        View All
      </Link>
    </div>
  );
}

export default HomeTopSelling;
