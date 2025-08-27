"use client";

import Link from "next/link";
import Image from 'next/image'

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { getImagePath } from "@/lib/paths";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-blue-900/80 backdrop-blur-sm border-blue-700/50 relative z-20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img
                src={getImagePath("/DDDTW-logo.png")}
                alt="DDD Taiwan Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <span
              className={clsx(
                "font-semibold text-lg",
                pathname === "/" ? "text-white" : "text-gray-300"
              )}
            >
              DDDesign TW
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link
              href="/about"
              className={clsx(
                "hover:text-white transition-colors",
                pathname === "/about" ? "text-white" : "text-gray-300"
              )}
            >
              關於我們
            </Link>
            <Link
              href="/rules"
              className={clsx(
                "hover:text-white transition-colors",
                pathname === "/rules" ? "text-white" : "text-gray-300"
              )}
            >
              大會守則
            </Link>
            <Link
              href="/agenda"
              className={clsx(
                "hover:text-white transition-colors",
                pathname === "/agenda" ? "text-white" : "text-gray-300"
              )}
            >
              議程資訊
            </Link>
            <Link
              href="/transportation"
              className={clsx(
                "hover:text-white transition-colors",
                pathname === "/transportation" ? "text-white" : "text-gray-300"
              )}
            >
              交通資訊
            </Link>
            <Link
              href="/speakers"
              className={clsx(
                "hover:text-white transition-colors",
                pathname === "/speakers" ? "text-white" : "text-gray-300"
              )}
            >
              講者資訊
            </Link>
            <a href="#tickets" className="text-gray-300 hover:text-white transition-colors">
              購票
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
