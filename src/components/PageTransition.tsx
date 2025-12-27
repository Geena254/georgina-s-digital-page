import { useState, useEffect, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string;
}

const PageTransition = ({ children, pageKey }: PageTransitionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedKey, setDisplayedKey] = useState(pageKey);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (pageKey !== displayedKey) {
      setIsAnimating(true);
      
      // After exit animation, swap content and trigger re-render for entrance animations
      const timer = setTimeout(() => {
        setDisplayedKey(pageKey);
        setDisplayedChildren(children);
        setAnimationKey(prev => prev + 1); // Force re-mount to re-trigger CSS animations
        setIsAnimating(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [pageKey, displayedKey, children]);

  return (
    <div className="page-transition-container">
      <div
        key={animationKey}
        className={`page-content ${isAnimating ? "page-turn-out" : "page-turn-in"}`}
      >
        {displayedChildren}
      </div>
    </div>
  );
};

export default PageTransition;
