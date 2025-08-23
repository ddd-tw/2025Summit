import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Header */}
      <header className="bg-blue-900/80 backdrop-blur-sm border-blue-700/50 relative z-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDDTW%E7%A4%BE%E7%BE%A4.jpg-ryACJIlrx99FYfXECRWxRpWrRD0uel.jpeg"
                  alt="DDD Taiwan Logo"
                  className="w-8 h-8 object-cover"
                />
              </div>
              <span className="text-white font-semibold text-lg">DDDesign TW</span>
            </div>
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

      {/* Hero Section with Full-width Banner */}
      <section className="relative min-h-screen overflow-hidden">
        <style>
          {`
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(-12deg); }
  50% { transform: translateY(-10px) rotate(-12deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(6deg); }
  50% { transform: translateY(-8px) rotate(6deg); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 3s ease-in-out infinite 1s;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
`}
        </style>

        {/* Full-width Banner Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-xn9bBuzd5R8KxIhvKIsqdiHn8uNEE6.png"
            alt="DDD Taiwan Conference - AI‑Era Software Development Practices"
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-blue-800/30"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-700"></div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
            <path
              d="M100,200 Q300,100 500,200 T900,150"
              stroke="url(#gradient1)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M200,400 Q400,300 600,400 T1000,350"
              stroke="url(#gradient2)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse delay-500"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content overlay */}
        <div className="container mx-auto px-4 py-20 relative z-20 min-h-screen flex items-center">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-300">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-medium">2025 / 11 / 08 </span>
                </div>
                <p className="text-gray-200 text-lg">臺灣領域驅動設計成果發表會</p>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  AI時代
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    軟體開發方法
                  </span>
                </h1>
                <p className="text-xl text-gray-200 font-light drop-shadow-md">AI‑Era Software Development Practices</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg"
                >
                  立即報名
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 px-8 py-3 bg-white/5 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/agenda">查看議程</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600/30 rounded-lg mb-2 mx-auto">
                    <Users className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-300">參與者</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600/30 rounded-lg mb-2 mx-auto">
                    <Clock className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-sm text-gray-300">小時</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-600/30 rounded-lg mb-2 mx-auto">
                    <Users className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">13+</div>
                  <div className="text-sm text-gray-300">講者</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-600/30 rounded-lg mb-2 mx-auto">
                    <MapPin className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-sm text-gray-300">會場</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse backdrop-blur-sm z-10"></div>
        <div className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400/60 rounded-full animate-ping backdrop-blur-sm z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-400/40 rounded-full animate-bounce backdrop-blur-sm z-10"></div>
        <div className="absolute bottom-1/4 right-12 w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse delay-700 backdrop-blur-sm z-10"></div>

        {/* Additional connecting lines */}
        <svg className="absolute -top-4 -right-4 w-24 h-24 opacity-30 pointer-events-none z-10">
          <path
            d="M0,12 Q12,0 24,12 T48,12"
            stroke="url(#heroGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute -bottom-4 -left-4 w-20 h-20 opacity-30 pointer-events-none z-10">
          <path
            d="M0,10 Q10,0 20,10 T40,10"
            stroke="url(#heroGradient2)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse delay-1000"
          />
          <defs>
            <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* About Section */}
      <section className="py-20 bg-blue-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white">關於大會</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              DDDesign TW 致力於推廣領域驅動設計（Domain-Driven Design）在台灣的發展，
              透過年度大會匯聚業界專家與實務工作者，分享系統設計與社會技術的最新趨勢與實踐經驗。
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">專業社群</h3>
                <p className="text-gray-400">匯聚台灣最優秀的系統設計專家與實務工作者</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">實務分享</h3>
                <p className="text-gray-400">深度探討領域驅動設計在實際專案中的應用</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">技術交流</h3>
                <p className="text-gray-400">促進業界交流與技術知識的傳承發展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 border-blue-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDDTW%E7%A4%BE%E7%BE%A4.jpg-ryACJIlrx99FYfXECRWxRpWrRD0uel.jpeg"
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
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    志工招募
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dddesign.tw" className="hover:text-white transition-colors">
                    聯絡我們
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">聯絡資訊</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Email: info@dddesign.tw</p>
                <p>電話: +886-2-1234-5678</p>
                <div className="flex space-x-4 pt-4">
                  <a
                    href="https://www.facebook.com/groups/dddtaiwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
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
    </div>
  )
}
