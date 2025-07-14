import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to track which elements are in the viewport (appear/disappear on scroll)
 * @param {number} count - number of elements
 * @param {object} options - IntersectionObserver options
 * @returns [activeSet, cardRefs]
 */
export default function useScrollActive(count, options = { threshold: 0.5 }) {
  const [activeSet, setActiveSet] = useState(Array(count).fill(false));
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        setActiveSet((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = cardRefs.current.indexOf(entry.target);
            if (idx !== -1) next[idx] = entry.intersectionRatio > 0;
          });
          return next;
        });
      },
      options
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, [count, options]);

  return [activeSet, cardRefs];
}
