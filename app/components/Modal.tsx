"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 sm:px-6">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
          relative 
          w-full 
          max-w-[95%] 
          sm:max-w-xl 
          md:max-w-3xl 
          lg:max-w-5xl 
          bg-white 
          rounded-2xl 
          sm:rounded-3xl 
          shadow-xl 
          overflow-hidden
        "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
            absolute top-3 right-3 sm:top-4 sm:right-4 
            z-10 
            p-2 
            rounded-full 
            bg-white 
            shadow 
            hover:cursor-pointer
            hover:bg-gray-100 
            transition
          "
                >
                    <X size={20} />
                </button>

                {/* Scrollable Content */}
                <div className="max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
