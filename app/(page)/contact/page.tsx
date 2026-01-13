"use client";

import { useEffect, useState } from "react";
import FirstSectionDesktop from "./(sections)/FirstSectionDesktop";
import FirstSectionMobile from "./(sections)/FirstSectionMobile";
import Attendees from "../webinar/(sections)/Attendees";
import NewsLetter from "../../components/NewsLetter";
import Modal from "@/app/components/Modal";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

export default function Page() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("newsletterPopupSeen");

    if (!hasSeenPopup) {
      setShowNewsletter(true);
      sessionStorage.setItem("newsletterPopupSeen", "true");
    }
  }, []);

  // ✅ Now the conditional return is AFTER all hooks
  if (isMobile === null) return null;

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
