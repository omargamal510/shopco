"use client";

export default function TopSectionClose() {
  const handleClose = (e) => {
    const banner = e.target.closest("[data-sale-banner]");
    if (banner) {
      banner.classList.add("hidden");
      banner.setAttribute("data-sale-banner", "closed");
    }
  };

  return (
    <button
      onClick={handleClose}
      className="text-primary hover:text-gray-300"
      aria-label="Close promotional banner"
    >
      Close
    </button>
  );
}
