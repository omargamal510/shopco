import ProductsList from "@/components/ProductsList/ProductsList";
const page = async () => {
  return (
    <div className="flex flex-col mt-7 gap-7 px-20 pb-20">
      <h3>BreadCrump</h3>
      <div className="flex gap-2 items-center justify-center ">
        <ProductsList />
      </div>
    </div>
  );
};

export default page;
