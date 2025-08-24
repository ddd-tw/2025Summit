import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-blue-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img
                  src="/DDDTW-logo.jpg"
                  alt="DDD Taiwan Logo"
                  className="w-8 h-8 object-cover"
                />
              </div>
              <span className="text-white font-semibold">DDDesign TW</span>
            </div>
            <p className="text-gray-400 text-sm">推廣領域驅動設計在台灣的發展，建立專業技術社群。</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">大會資訊</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="hover:text-white transition-colors">
                  議程資訊
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-white transition-colors">
                  講者介紹
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="hover:text-white transition-colors">
                  交通資訊
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">參與方式</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#tickets" className="hover:text-white transition-colors">
                  報名參加
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">聯絡資訊</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: info@dddesign.tw</p>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.facebook.com/DDDCommunity.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 DDDesign TW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
