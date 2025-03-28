import React from 'react'
import FirstSection from './(sections)/FirstSection'
import Attendees from './(sections)/Attendees'
import KeyNotes from './(sections)/KeyNotes'
import NewsLetter from '../components/NewsLetter';

export default function Page() {
    return (
        <main className="overflow-hidden mt-20 sm:mt-0">
            <FirstSection />
            <Attendees />
            <KeyNotes />
            <NewsLetter />
        </main>
    );
}