import { Reviews } from "../types/reviews-types.js";

function ReviewCard({ name, text }: Reviews) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        {Array.from({ length: 5 }).map((e, i) => (
          <svg
            key={i}
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.421 0L14.6195 6.8872L22.158 7.80085L16.5962 12.971L18.0568 20.4229L11.421 16.731L4.78521 20.4229L6.2458 12.971L0.684063 7.80085L8.22255 6.8872L11.421 0Z"
              fill="#FFC633"
            />
          </svg>
        ))}
      </div>

      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-xs opacity-black">{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
