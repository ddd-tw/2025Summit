import Link from "next/link"
import {
  Mail,
  MessageCircle,
  Twitter,
  Instagram,
  Facebook,
  Users,
  Youtube,
  MapPin,
  Car,
  Train,
  Bus,
  Clock,
  Navigation,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Header */}
      <header className="bg-blue-900/80 backdrop-blur-sm border-b border-blue-700/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDDTW%E7%A4%BE%E7%BE%A4.jpg-ryACJIlrx99FYfXECRWxRpWrRD0uel.jpeg"
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
              <Link href="/transportation" className="text-blue-400 hover:text-white transition-colors">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">交通資訊</h1>
            {/* Map Section */}
            <div className="mb-12">
              <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>會場位置</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-200/80 rounded-lg p-4 text-center border border-slate-300">
                    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5234567890123!2d121.5277683!3d25.0537639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96730086bc9%3A0xbbc6dbbe139eac87!2z5Lit6I-v5rCR5ZgL5YWo5ZyL5ZWG5qWt57i96ZuH!5e0!3m2!1szh-TW!2stw!4v1234567890123!5m2!1szh-TW!2stw"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="中華民國商業總會位置地圖"
                      ></iframe>
                    </div>
                    <div className="mt-4 text-sm text-slate-600">
                      <p className="font-medium text-slate-800 mb-2">中華民國商業總會</p>
                      <p>台北市中山區四平街12號1樓</p>
                      <p className="mt-2">點擊地圖可查看詳細路線規劃</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Transportation Methods */}
          <div className="space-y-8">
            {/* Bus */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center space-x-2">
                  <Bus className="w-6 h-6 text-green-600" />
                  <span>搭乘公車</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-green-600 font-semibold mb-2">松江長春路口站</h4>
                      <p className="text-slate-700 text-sm mb-2">
                        路線：222 / 277 / 279 / 307 / 49 / 652 / 668 / 松江新生幹線
                      </p>
                      <p className="text-slate-600 text-sm">步行約2分鐘即可抵達</p>
                    </div>
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-green-600 font-semibold mb-2">長春松江路口站</h4>
                      <p className="text-slate-700 text-sm mb-2">路線：277 / 292 / 307 / 41 / 49</p>
                      <p className="text-slate-600 text-sm">步行約1分鐘即可抵達</p>
                    </div>
                  </div>
                  <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                    <h4 className="text-green-600 font-semibold mb-2">交通提醒</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      可搭至松江長春或長春松江路口站，步行約1–2分鐘。也可搭乘多條路線至景福宮、中山南北路公車站步行來回。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MRT Transportation */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center space-x-2">
                  <Train className="w-6 h-6 text-blue-600" />
                  <span>搭乘捷運</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-200/80 rounded-lg p-6 border border-slate-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <h4 className="text-blue-600 font-semibold">松江南京站 8 號出口</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-700 text-sm">
                      <span className="font-medium">路線：</span>中和新蘆線、松山新店線
                    </p>
                    <p className="text-slate-700 text-sm">
                      <span className="font-medium">步行時間：</span>約3分鐘
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      亦可由南京復興站或中山國小站步行前往，步行時間為8–15分鐘左右。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Driving */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center space-x-2">
                  <Car className="w-6 h-6 text-purple-600" />
                  <span>自行開車</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <Navigation className="w-4 h-4 text-purple-600" />
                    <h4 className="text-purple-600 font-semibold">導航地址</h4>
                  </div>
                  <p className="text-slate-700 text-sm mb-2">台北市中山區四平街12號</p>
                  <p className="text-slate-700 text-sm">
                    由中山北路或松江路轉四平街進入。市中心車流大，建議避開上下班尖峰時間並提前出發。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Parking Information */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center space-x-2">
                  <Car className="w-6 h-6 text-orange-600" />
                  <span>停車資訊</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-orange-600 font-semibold mb-2">路邊停車</h4>
                      <p className="text-slate-700 text-sm">
                        四平街及周邊設有少量街邊停車格，限時收費，08:00–22:00 約 NT$40/時。
                      </p>
                    </div>
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-orange-600 font-semibold mb-2">私人停車場</h4>
                      <p className="text-slate-700 text-sm">松江路／建國北路及四平街附近私人停車場，約 NT$30–60/時。</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-orange-600 font-semibold mb-2">機車停車</h4>
                      <p className="text-slate-700 text-sm">四平街、長春路路邊可停放機車。</p>
                    </div>
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-orange-600 font-semibold mb-2">建議</h4>
                      <p className="text-slate-700 text-sm">建議使用停車格空位查詢 App，或改搭大眾運輸以免停車困擾。</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Transportation */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center space-x-2">
                  <Navigation className="w-6 h-6 text-indigo-600" />
                  <span>推薦交通方式</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                    <h4 className="text-indigo-600 font-semibold mb-2">捷運＋步行</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600 font-medium">優點：</span>
                        <span className="text-slate-700">快捷舒適，直接由松江南京站步行即達。</span>
                      </div>
                      <div>
                        <span className="text-red-600 font-medium">注意：</span>
                        <span className="text-slate-700">需注意捷運營運時刻，餘額不足者須先補票。</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                    <h4 className="text-indigo-600 font-semibold mb-2">公車直達/捷運轉公車</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600 font-medium">優點：</span>
                        <span className="text-slate-700">搭至松江長春或長春松江站即可抵達，方便不習慣捷運換乘者。</span>
                      </div>
                      <div>
                        <span className="text-red-600 font-medium">注意：</span>
                        <span className="text-slate-700">尖峰時刻可能有等車時間。</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                    <h4 className="text-indigo-600 font-semibold mb-2">自行開車</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600 font-medium">優點：</span>
                        <span className="text-slate-700">時間彈性，可攜設備。</span>
                      </div>
                      <div>
                        <span className="text-red-600 font-medium">注意：</span>
                        <span className="text-slate-700">市中心停車不易，車流量大，需提前安排。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <div className="bg-slate-100/95 rounded-lg p-6 backdrop-blur-sm shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>交通重要提醒</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-blue-600 font-medium">實用建議</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• 建議使用悠遊卡／一卡通搭乘捷運與公車，可享轉乘優惠</li>
                    <li>• 可參考市公車即時動態 App 查詢到站時間</li>
                    <li>• 建議使用停車格空位查詢 App</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-blue-600 font-medium">注意事項</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• 活動當天避開上下班尖峰（07:30–09:00, 17:00–19:00）</li>
                    <li>• 建議提前30分鐘出發</li>
                    <li>• 如需協助請聯繫大會工作人員</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Social Media Links */}
      <section className="py-12 bg-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:info@dddesign.tw"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Messenger"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.facebook.com/groups/dddtaiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Discord"
            >
              <Users className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-blue-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 border-t border-blue-700">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center space-x-2 justify-center mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DDDTW%E7%A4%BE%E7%BE%A4.jpg-ryACJIlrx99FYfXECRWxRpWrRD0uel.jpeg"
                alt="DDD Taiwan Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <span className="text-white font-semibold">DDDesign TW</span>
          </div>
          <p className="text-gray-400">Copyright © 2025 Domain Driven Design Taiwan.</p>
        </div>
      </footer>
    </div>
  )
}
