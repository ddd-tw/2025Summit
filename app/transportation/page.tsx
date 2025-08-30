import {
  MapPin,
  Car,
  Train,
  Bus,
  Clock,
  Navigation,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '交通資訊',
  description: 'DDDTW 2025 會場交通指南 - 台北市商業會地址、捷運、公車、開車路線與停車資訊。',
}

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">交通資訊</h1>
            {/* Map Section */}
            <div className="mb-12">
              <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.9515234658975!2d121.53071999999999!3d25.051859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a973462902af%3A0x82542a72815a4f06!2z5Y-w5YyX5biC5ZWG5qWt5pyD!5e0!3m2!1szh-TW!2stw!4v1756032104143!5m2!1szh-TW!2stw"
                        width="100%"
                        height="100%"
                        className="border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="台北市商業會位置地圖"
                      ></iframe>
                    </div>
                    <div className="mt-4 text-sm text-slate-600">
                      <p className="font-medium text-slate-800 mb-2">台北市商業會</p>
                      <p>台北市中山區南京東路二段72號6樓</p>
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
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
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
                      <h4 className="text-green-600 font-semibold mb-2">南京吉林路口站</h4>
                      <p className="text-slate-700 text-sm mb-2">
                        路線：5 / 12 / 46 / 282 / 288 / 292 / 306 / 306區間車 / 652 / 711 / 1802 / 1803 / 承德幹線 / 紅25
                      </p>
                      <p className="text-slate-600 text-sm">步行約2分鐘即可抵達</p>
                    </div>
                  </div>
                  <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                    <h4 className="text-green-600 font-semibold mb-2">交通提醒</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      可搭至南京吉林路口站，步行約1–2分鐘。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MRT Transportation */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
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
                    <h4 className="text-blue-600 font-semibold">松江南京站 1 號出口</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-700 text-sm">
                      <span className="font-medium">路線：</span>中和新蘆線、松山新店線
                    </p>
                    <p className="text-slate-700 text-sm">
                      <span className="font-medium">步行時間：</span>約2分鐘
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Driving */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
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
                  <p className="text-slate-700 text-sm mb-2">台北市中山區南京東路二段72號</p>
                  <p className="text-slate-700 text-sm">
                    由林森北路或松江路進入。市中心車流大，建議避開上下班尖峰時間並提前出發。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Parking Information */}
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
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
                        根據臺北市停車管理工程處資料，南京東路四段及其附近路段屬於收費路邊停車格，其中 南京東路五段（雖一段距離稍遠，但仍可參考）屬於每小時 30 元的收費標準。
                      </p>
                    </div>
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-orange-600 font-semibold mb-2">私人停車場</h4>
                      <p className="text-slate-700 text-sm">長安國小地下停車場，小型車：計時 40元/時(09時~18時),30元/時(18時~09時)。</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-200/80 rounded-lg p-4 border border-slate-300">
                      <h4 className="text-orange-600 font-semibold mb-2">機車停車</h4>
                      <p className="text-slate-700 text-sm">使用「南京東路二段」路邊收費格，計次收費便捷，或長安國小地下停車場, 10元/時。</p>
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
            <Card className="bg-slate-100/95 border-slate-200 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
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
                        <span className="text-slate-700">搭至南京吉林路口站即可抵達，方便不習慣捷運換乘者。</span>
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
            <div className="bg-slate-100/95 rounded-lg p-6 backdrop-blur-sm shadow-lg border border-slate-200 transform transition-transform hover:scale-105">
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

      <Footer />
    </div>
  )
}
