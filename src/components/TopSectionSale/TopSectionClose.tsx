"use client";

export default function TopSectionClose() {
  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const target = e.target as HTMLElement;
    const banner = target.closest<HTMLElement>("[data-sale-banner]");
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
