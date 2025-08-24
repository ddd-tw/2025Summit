import Link from "next/link"
import { Mail, MessageCircle, Twitter, Instagram, Facebook, Youtube, Users, Clock, MapPin, User } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgendaPage() {
  const sessions = [
    {
      time: "09:00 - 12:00",
      title: "從敘事到塑模",
      speaker: "陳勉修(Michael)",
      description: "用Domain Storytelling建立跨職能對齊的語意基礎。",
      track: "主會場 A",
      type: "workshop",
    },
    {
      time: "09:00 - 12:00",
      title: "AI輔助軟體開發",
      speaker: "張國昭(Arthur)，李民偉(Ean)",
      description: "在軟體3.0時代，掌握AI驅動的開發語言。",
      track: "會議室 B",
      type: "workshop",
    },
    {
      time: "13:00 - 16:00",
      title: "從警示到行動：打造AI驅動的自動化Incident Response工具",
      speaker: "劉鳳軒(Fong)",
      description: "整合Logs、Code、Docs與Insights，重塑On-Call流程與團隊知識管理。",
      track: "主會場 A",
      type: "workshop",
    },
    {
      time: "13:00 - 16:00",
      title: "文件即程式碼",
      speaker: "林鴻皓(River)，Tung",
      description: "文件即程式碼，串接版本控制與自動化。",
      track: "會議室 B",
      type: "workshop",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">議程資訊</h1>
            <p className="text-xl text-gray-200">2025年11月8日 AI時代軟體開發方法</p>
          </div>

          {/* Conference Date and Info */}
          <div className="bg-slate-100/95 rounded-lg p-6 backdrop-blur-sm mb-8 shadow-lg border border-slate-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-medium">09:00 - 17:00</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                <a
                  href="https://maps.app.goo.gl/JeeWMfDoyFPPmxPi9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 font-medium hover:text-blue-500 transition-colors"
                >
                  台北市商業會
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700 font-medium">100+ 參與者</span>
              </div>
            </div>
          </div>

          {/* Agenda Grid - 2 Columns, 2 Rows */}
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session, index) => (
              <Card
                key={index}
                className="bg-slate-100/95 border-slate-200 backdrop-blur-sm hover:bg-slate-50 transition-colors shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-blue-600 font-semibold mr-auto">{session.time}</span>
                    <div className="flex items-center space-x-1">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200`}
                      >
                        {"演講"}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200`}
                      >
                        {"工作坊"}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200`}
                      >
                        {"技術分享"}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-slate-800 text-lg">{session.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{session.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{session.track}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{session.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12">
            <div className="bg-slate-100/95 rounded-lg p-8 backdrop-blur-sm shadow-lg border border-slate-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-700 inline-block pb-2 border-b-2 border-blue-500">注意事項</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 rounded-lg p-5 shadow-md border border-slate-100 transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-800">會場與時間</h4>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>請提前15分鐘到達會場</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>工作坊需要攜帶筆記型電腦</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 rounded-lg p-5 shadow-md border border-slate-100 transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-purple-800">服務與資料</h4>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>現場提供茶點(不提供午餐)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>會議資料將於會後提供下載</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
