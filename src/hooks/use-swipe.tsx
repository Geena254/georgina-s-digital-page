import { useEffect, useRef, useState } from "react";

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

interface SwipeState {
  isSwiping: boolean;
  direction: "left" | "right" | null;
}

export const useSwipe = (handlers: SwipeHandlers, threshold = 50) => {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isSwiping: false,
    direction: null,
  });
  
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchEnd.current = null;
      touchStart.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEnd.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      };

      if (touchStart.current && touchEnd.current) {
        const deltaX = touchStart.current.x - touchEnd.current.x;
        const deltaY = Math.abs(touchStart.current.y - touchEnd.current.y);
        
        // Only consider horizontal swipes (ignore vertical scrolling)
        if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 20) {
          setSwipeState({
            isSwiping: true,
            direction: deltaX > 0 ? "left" : "right",
          });
        }
      }
    };

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) {
        setSwipeState({ isSwiping: false, direction: null });
        return;
      }

      const deltaX = touchStart.current.x - touchEnd.current.x;
      const deltaY = Math.abs(touchStart.current.y - touchEnd.current.y);

      // Only trigger if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > deltaY) {
        if (deltaX > threshold) {
          handlers.onSwipeLeft?.();
        } else if (deltaX < -threshold) {
          handlers.onSwipeRight?.();
        }
      }

      setSwipeState({ isSwiping: false, direction: null });
      touchStart.current = null;
      touchEnd.current = null;
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handlers, threshold]);

  return swipeState;
};
