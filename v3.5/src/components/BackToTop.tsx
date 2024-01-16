"use client";

export default function BackToTop() {
  return (
    <div
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className="ml-auto mr-auto cursor-pointer items-center p-8"
    >
      Back to top ↑
    </div>
  );
}
