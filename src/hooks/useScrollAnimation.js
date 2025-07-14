import { useEffect, useRef, useState } from "react";

// Function to detect if we're on a mobile device
const isMobile = () => {
  return window.innerWidth <= 768;
};

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Adjust threshold and rootMargin for mobile devices
    const adjustedThreshold = isMobile()
      ? Math.max(threshold, 0.05)
      : threshold;
    const adjustedRootMargin = isMobile() ? "0px 0px -50px 0px" : rootMargin;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: adjustedThreshold,
        rootMargin: adjustedRootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

export function useScrollAnimationMultiple(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    staggerDelay = 100,
  } = options;

  const [visibleItems, setVisibleItems] = useState(new Set());
  const elementsRef = useRef([]);

  useEffect(() => {
    // Adjust for mobile devices
    const adjustedThreshold = isMobile()
      ? Math.max(threshold, 0.05)
      : threshold;
    const adjustedRootMargin = isMobile() ? "0px 0px -30px 0px" : rootMargin;
    const adjustedStaggerDelay = isMobile()
      ? Math.min(staggerDelay, 50)
      : staggerDelay;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.animationIndex);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [threshold, rootMargin, triggerOnce]);

  const setElementRef = (index) => (element) => {
    elementsRef.current[index] = element;
    if (element) {
      element.dataset.animationIndex = index;
    }
  };

  const isVisible = (index) => visibleItems.has(index);

  const getAnimationStyle = (index, animationType = "fadeInUp") => {
    const delay = visibleItems.has(index) ? index * staggerDelay : 0;
    return {
      animationDelay: `${delay}ms`,
      animationFillMode: "both",
    };
  };

  return { setElementRef, isVisible, getAnimationStyle };
}
