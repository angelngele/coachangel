"use client";

import { useEffect, useState } from "react";
import FirstSectionDesktop from "./(sections)/FirstSectionDesktop";
import FirstSectionMobile from "./(sections)/FirstSectionMobile";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    // Check on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <FirstSectionMobile /> : <FirstSectionDesktop />}</>;
}
