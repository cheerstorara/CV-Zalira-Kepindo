'use client';
import { useSprings, animated, SpringValue } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: (t: number) => number;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = (t) => t,
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const words = text.split(" ").map((w) => w.split(""));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  const [springs, springsApi] = useSprings(letters.length, () => ({
    from: animationFrom,
    config: { easing },
  }));

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (inView) {
      springsApi.start((i) => ({
        to: animationTo,
        delay: i * delay,
        config: { easing },
        onRest: () => {
          animatedCount.current += 1;
          if (
            animatedCount.current === letters.length &&
            onLetterAnimationComplete
          ) {
            onLetterAnimationComplete();
          }
        },
      }));
    }
  }, [inView, delay, animationTo, easing, letters.length, springsApi, onLetterAnimationComplete]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign }}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {word.map((letter, lIdx) => {
            const index =
              words.slice(0, wIdx).reduce((acc, w) => acc + w.length, 0) + lIdx;

            return (
              <animated.span
                key={index}
                style={{
                  ...(springs[index] as any),
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
              >
                {letter}
              </animated.span>
            );
          })}
          <span className="inline-block w-[0.3em]">&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
