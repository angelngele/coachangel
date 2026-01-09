"use client";
import FirstSection from './(sections)/FirstSection'
import Attendees from './(sections)/Attendees'
import KeyNotes from './(sections)/KeyNotes'
import NewsLetter from '../../components/NewsLetter';
import Modal from '@/app/components/Modal';
import { useEffect, useState } from "react";

export default function Page() {

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
        <main className="overflow-hidden mt-20 sm:mt-0">
            <FirstSection />
            <Attendees />
            <KeyNotes />
            <NewsLetter />
            <Modal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)}>
                <NewsLetter />
            </Modal>
        </main>
    );
}