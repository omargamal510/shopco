import Image from "next/image.js";
import { Product } from "../types/product-types";

function ProductCard({ title, imageCover, ratingsAverage, price }: Product) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="small-shadow "
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          borderRadius: "10px",
        }}
      >
        <Image
          style={{
            objectFit: "contain",
          }}
          src={imageCover!}
          fill
          alt={"xxx"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-1.5 text-center justify-center items-center">
        <span className="flex gap-1 items-center">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04682 0.255005L11.666 5.89491L17.8393 6.6431L13.2848 10.8769L14.4809 16.9793L9.04682 13.956L3.61278 16.9793L4.80885 10.8769L0.254359 6.6431L6.42761 5.89491L9.04682 0.255005Z"
              fill="#FFC633"
            />
          </svg>
          {ratingsAverage}
        </span>
        <h3 className="flex gap-2 text-sm w-12">{title}</h3>
        <p className="font-black">${price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
