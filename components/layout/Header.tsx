import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900/80 backdrop-blur-sm border-blue-700/50 relative z-20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img
                src="/DDDTW-logo.png"
                alt="DDD Taiwan Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <span className="text-white font-semibold text-lg">DDDesign TW</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              關於我們
            </Link>
            <Link href="/rules" className="text-gray-300 hover:text-white transition-colors">
              大會守則
            </Link>
            <Link href="/agenda" className="text-gray-300 hover:text-white transition-colors">
              議程資訊
            </Link>
            <Link href="/transportation" className="text-gray-300 hover:text-white transition-colors">
              交通資訊
            </Link>
            <Link href="/speakers" className="text-gray-300 hover:text-white transition-colors">
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
