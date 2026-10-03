"use client";
// components/progressive-blur.tsx
type Props = {
  layers?: number; // how many blur steps (8 in your screenshot)
  maxBlur?: number; // px, blur of the last layer
  position?: "top" | "bottom";
  className?: string;
};

export function ProgressiveBlur({
  layers = 8,
  maxBlur = 7,
  position = "bottom",
  className = "",
}: Props) {
  const step = 100 / (layers + 1); // 11.11% for 8 layers

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 z-35 h-24 ${
        position === "bottom" ? "bottom-0" : "top-0"
      } ${className}`}
    >
      {Array.from({ length: layers }).map((_, i) => {
        const blur = (maxBlur / (layers - 1)) * i;
        const a = i * step;
        const b = (i + 1) * step;
        const c = (i + 2) * step;
        const d = (i + 3) * step;

        // bottom = blur gets stronger toward the bottom (180deg),
        // top = flip it (0deg)
        const dir = position === "bottom" ? "180deg" : "0deg";
        const mask = `linear-gradient(${dir}, rgba(0,0,0,0) ${a}%, rgba(0,0,0,1) ${b}%, rgba(0,0,0,1) ${c}%, rgba(0,0,0,0) ${d}%)`;

        return (
          <div
            key={i}
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage: mask,
              WebkitMaskImage: mask,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
