import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function AnimatedSection({
  children,
  className = "",
  animationType = "animate-fade-in",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
  as: Component = "div",
  ...props
}) {
  const [elementRef, isVisible] = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const classes = `${animationType} ${
    isVisible ? "visible" : ""
  } ${className}`.trim();

  return (
    <Component ref={elementRef} className={classes} {...props}>
      {children}
    </Component>
  );
}
