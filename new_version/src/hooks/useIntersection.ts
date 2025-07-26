
import { useEffect, useState, RefObject } from "react";

export function useIntersection(
  ref: RefObject<HTMLElement | null>
): [boolean] {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-50%"
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return [isActive];
};
