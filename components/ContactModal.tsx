"use client";
import { FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  translations: {
    title: string;
    whatsapp: string;
    email: string;
    close: string;
  }
}

export default function ContactModal({ isOpen, onClose, translations }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const openWhatsApp = () => {
    window.open('https://wa.me/PHONE_NUMBER', '_blank');
    onClose();
  };

  const goToContactPage = () => {
    const locale = document.documentElement.lang;
    window.location.href = `/${locale}/contact`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            ref={modalRef} // Attach the ref to the modal content
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg p-6 w-11/12 max-w-md text-center"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">{translations.title}</h2>
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md mb-3 hover:bg-green-600 transition"
            >
              <FaWhatsapp className="mr-2" /> {/* WhatsApp icon */}
              {translations.whatsapp}
            </button>
            <button
              onClick={goToContactPage}
              className="w-full flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md mb-3 hover:bg-blue-600 transition"
            >
              <FaEnvelope className="mr-2" /> {/* Email icon */}
              {translations.email}
            </button>
            {/* Add more buttons or slots here */}
            <button
              onClick={onClose}
              className="w-full flex items-center justify-center bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
            >
              <FaTimes className="mr-2" /> {/* Close icon */}
              {translations.close}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}