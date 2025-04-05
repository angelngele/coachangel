"use client";

import { useEffect, useState } from "react";
import FirstSectionDesktop from "./(sections)/FirstSectionDesktop";
import FirstSectionMobile from "./(sections)/FirstSectionMobile";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null initially to avoid mismatch

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}


export default function Page() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null; // or a loader/spinner

  return isMobile ? <FirstSectionMobile /> : <FirstSectionDesktop />;
}