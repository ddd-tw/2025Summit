import Link from "next/link"
import { Mail, MessageCircle, Twitter, Instagram, Facebook, Youtube, Users, Clock, MapPin, User } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgendaPage() {
  const sessions = [
    {
      time: "09:00 - 10:30",
      title: "領域驅動設計基礎概念",
      speaker: "張志明",
      description: "深入探討 DDD 的核心概念與實務應用，包括領域模型、聚合根、值物件等重要觀念。",
      track: "主會場 A",
      type: "keynote",
    },
    {
      time: "09:00 - 10:30",
      title: "微服務架構設計實戰",
      speaker: "李美玲",
      description: "從單體架構到微服務的轉換策略，以及如何運用 DDD 設計微服務邊界。",
      track: "會議室 B",
      type: "workshop",
    },
    {
      time: "11:00 - 12:30",
      title: "事件風暴工作坊",
      speaker: "王大明",
      description: "透過實際案例學習事件風暴技術，快速理解複雜業務領域並建立共同語言。",
      track: "主會場 A",
      type: "workshop",
    },
    {
      time: "11:00 - 12:30",
      title: "CQRS 與 Event Sourcing",
      speaker: "陳小華",
      description: "命令查詢責任分離模式與事件溯源的設計原則，以及在大型系統中的應用經驗。",
      track: "會議室 B",
      type: "talk",
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
                <span className="text-slate-700 font-medium">中華民國商業總會</span>
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
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-600 font-semibold">{session.time}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        session.type === "keynote"
                          ? "bg-purple-100 text-purple-700 border border-purple-200"
                          : session.type === "workshop"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {session.type === "keynote" ? "主題演講" : session.type === "workshop" ? "工作坊" : "技術分享"}
                    </span>
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
          <div className="mt-12 text-center">
            <div className="bg-slate-100/95 rounded-lg p-6 backdrop-blur-sm shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">注意事項</h3>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700 text-sm">
                <div>
                  <p>• 請提前15分鐘到達會場</p>
                  <p>• 工作坊需要攜帶筆記型電腦</p>
                </div>
                <div>
                  <p>• 現場提供茶點與午餐</p>
                  <p>• 會議資料將於會後提供下載</p>
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
