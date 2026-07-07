"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center">

      {[
        "Home",
        "Instagram",
        "Mysteries",
        "Categories",
        "About",
        "Contact",
      ].map((item) => (

        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={onClose}
          className="text-4xl text-white mb-10 hover:text-red-600 transition"
        >
          {item}
        </Link>

      ))}

    </div>

  );

}