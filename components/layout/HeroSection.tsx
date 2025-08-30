import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { UI_CONSTANTS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-width Banner Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-xn9bBuzd5R8KxIhvKIsqdiHn8uNEE6.png"
          alt="DDDTW 2025 大會主視覺 - AI時代軟體開發方法成果發表會"
          className="w-full h-full object-cover"
          priority
          fill
          sizes="100vw"
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
                <span className="text-lg font-medium">2025 / 11 / 08</span>
              </div>
              <p className="text-gray-200 text-lg">臺灣領域驅動設計成果發表會</p>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                AI時代
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  軟體開發方法
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 font-light drop-shadow-md">AI‑Era Software Development Practices</p>
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
                <div className="text-2xl font-bold text-white">{UI_CONSTANTS.STATISTICS.PARTICIPANTS}</div>
                <div className="text-sm text-gray-300">參與者</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/30 rounded-lg mb-2 mx-auto">
                  <Clock className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-2xl font-bold text-white">{UI_CONSTANTS.STATISTICS.HOURS}</div>
                <div className="text-sm text-gray-300">小時</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600/30 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="text-2xl font-bold text-white">{UI_CONSTANTS.STATISTICS.SPEAKERS}</div>
                <div className="text-sm text-gray-300">講者</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-600/30 rounded-lg mb-2 mx-auto">
                  <MapPin className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="text-2xl font-bold text-white">{UI_CONSTANTS.STATISTICS.SESSIONS}</div>
                <div className="text-sm text-gray-300">議程</div>
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
  );
}
