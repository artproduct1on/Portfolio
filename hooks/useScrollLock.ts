import { useEffect } from "react";

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const body = document.body;
    if (isLocked) {
      body.setAttribute("data-scroll-locked", "true");
    } else {
      body.removeAttribute("data-scroll-locked");
    }

    return () => {
      body.removeAttribute("data-scroll-locked");
    };
  }, [isLocked]);
};

export default useScrollLock;