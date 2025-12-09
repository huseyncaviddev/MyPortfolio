import { useEffect, useRef } from "react";

const MAX_TILT_DEG = 5;

const getGlowColor = () => {
  const primary = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-primary"
  );

  return primary?.trim() || "rgba(85, 200, 200, 1)";
};

export function useCardGradient() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = cardRef.current;
    if (!wrapper) return;

    const target =
      (wrapper.querySelector("[data-slot='card']") as HTMLElement | null) ||
      wrapper;

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    const enableTilt = !isCoarsePointer && !prefersReducedMotion;
    const glowColor = getGlowColor();

    const setBaseStyles = () => {
      target.style.transition =
        "transform 250ms ease-out, box-shadow 250ms ease-out, background 400ms ease-out";
      target.style.willChange = "transform, box-shadow, background";
      target.style.transformStyle = "preserve-3d";
      target.style.boxShadow = "0 10px 30px -18px rgba(0,0,0,0.35)";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt) return;

      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentX = (x / rect.width) * 2 - 1;
      const percentY = (y / rect.height) * 2 - 1;

      const rotateY = MAX_TILT_DEG * percentX;
      const rotateX = -MAX_TILT_DEG * percentY;

      target.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      target.style.boxShadow = "0 14px 38px -16px rgba(0,0,0,0.35)";
      target.style.backgroundImage = `radial-gradient(220px circle at ${x}px ${y}px, ${glowColor}22, transparent 50%)`;
    };

    const handleMouseLeave = () => {
      target.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      target.style.boxShadow = "0 10px 30px -18px rgba(0,0,0,0.35)";
      target.style.backgroundImage = "";
    };

    const handlePointerEnter = () => {
      if (enableTilt) return;
      target.style.boxShadow = "0 12px 30px -20px rgba(0,0,0,0.25)";
      target.style.backgroundImage = `radial-gradient(260px circle at center, ${glowColor}18, transparent 55%)`;
    };

    const handlePointerLeave = () => {
      if (enableTilt) return;
      target.style.boxShadow = "";
      target.style.backgroundImage = "";
    };

    setBaseStyles();

    if (enableTilt) {
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    } else {
      wrapper.addEventListener("pointerenter", handlePointerEnter);
      wrapper.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      if (enableTilt) {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      } else {
        wrapper.removeEventListener("pointerenter", handlePointerEnter);
        wrapper.removeEventListener("pointerleave", handlePointerLeave);
      }
    };
  }, []);

  return cardRef;
}
