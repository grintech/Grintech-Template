import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(0);
 
  useEffect(() => {
   window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
  }, [pathname]);


}