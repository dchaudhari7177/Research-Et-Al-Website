import { useRef, useEffect, useState } from "react";

export default function useIntersectionObserver(options) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        options
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      // Clean up the observer on unmount
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options]); // Only recreate the observer if options change
  
    return [ref, isIntersecting];
}