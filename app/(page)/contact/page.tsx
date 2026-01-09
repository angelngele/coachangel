"use client";

import { useEffect, useState } from "react";
import FirstSectionDesktop from "./(sections)/FirstSectionDesktop";
import FirstSectionMobile from "./(sections)/FirstSectionMobile";
import Attendees from "../webinar/(sections)/Attendees";
import NewsLetter from "../../components/NewsLetter";
import Modal from "@/app/components/Modal";

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

  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Show popup when user first lands on page
    const hasSeenPopup = sessionStorage.getItem("newsletterPopupSeen");

    if (!hasSeenPopup) {
      setShowNewsletter(true);
      sessionStorage.setItem("newsletterPopupSeen", "true");
    }
  }, []);

  return (
    <main>
      {isMobile ? <FirstSectionMobile /> : <FirstSectionDesktop />}
      <Attendees />
      <NewsLetter />
      <Modal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)}>
        <NewsLetter />
      </Modal>
    </main>
  );
}
