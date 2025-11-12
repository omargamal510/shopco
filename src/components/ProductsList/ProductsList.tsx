import ProductListItem from "@/components/ProductListItem/ProductListItem";
import { ProductResponse } from "@/types/product-types";
import { getProducts } from "@/utils/api";

async function ProductsList() {
  const products: ProductResponse | undefined = await getProducts();
  return (
    <div className="grid grid-cols-5 gap-3 w-full ">
      {products?.data.map(
        ({ imageCover = "", _id, title, ratingsAverage, price }) => (
          <ProductListItem
            imageCover={imageCover}
            ratingsAverage={ratingsAverage}
            title={title}
            price={price}
            key={_id}
          />
        )
      )}
    </div>
  );
}

export default ProductsList;
