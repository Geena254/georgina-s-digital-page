import { useState, useEffect, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  pageKey: string;
}

const PageTransition = ({ children, pageKey }: PageTransitionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedKey, setDisplayedKey] = useState(pageKey);
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    if (pageKey !== displayedKey) {
      setIsAnimating(true);
      
      // After exit animation, swap content
      const timer = setTimeout(() => {
        setDisplayedKey(pageKey);
        setDisplayedChildren(children);
        setIsAnimating(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [pageKey, displayedKey, children]);

  return (
    <div className="page-transition-container">
      <div
        className={`page-content ${isAnimating ? "page-turn-out" : "page-turn-in"}`}
      >
        {displayedChildren}
      </div>
    </div>
  );
};

export default PageTransition;
