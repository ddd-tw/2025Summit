import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DDDTW 2025 - 購票資訊',
  description: 'DDDTW 2025 AI時代軟體開發方法成果發表會 - 購票資訊',
  keywords: ['Domain-Driven Design', 'DDD', 'Taiwan', '軟體開發', 'AI', '領域驅動設計', '2025', '購票'],
  authors: [{ name: 'DDD Taiwan Community' }],
  creator: 'DDD Taiwan Community',
  publisher: 'DDD Taiwan Community',
  robots: 'index, follow',
  openGraph: {
    title: 'DDDTW 2025 - 購票資訊',
    description: 'DDDTW 2025 AI時代軟體開發方法成果發表會 - 購票資訊',
    url: 'https://ddd-tw-conference.github.io/2025/tickets/',
    siteName: 'DDDTW 2025',
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDDTW 2025 - 購票資訊',
    description: 'DDDTW 2025 AI時代軟體開發方法成果發表會 - 購票資訊',
  }
}

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="text-lg font-medium">2025 / 11 / 08</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                購票資訊
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                與我們一起探索 AI 時代的軟體開發方法
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-20 bg-blue-900/60">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Ticket Options */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Early Bird Ticket */}
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-blue-700/30 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Early Bird
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">早鳥票</h3>
                    <p className="text-gray-400">限量優惠價格，數量有限</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-white">
                      NT$ <span className="text-blue-400">1,200</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="line-through">原價 NT$ 2,000</span>
                      <span className="text-green-400 ml-2 font-semibold">省 NT$ 500</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      全日議程參與權
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      下午茶(午餐自理)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      講者交流時間
                    </li>
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                    🎯 立即購買早鳥票
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-yellow-400 font-medium">
                      ⏰ 早鳥優惠至 2025/10/15 止
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      僅限前 50 名
                    </p>
                  </div>
                </div>
              </div>

              {/* Regular Ticket */}
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600/30 transform hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">一般票</h3>
                    <p className="text-gray-400">標準會議票券</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-white">
                      NT$ <span>2,500</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      標準價格
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      全日議程參與權
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      下午茶(午餐自理)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      講者交流時間
                    </li>
                  </ul>
                  <button className="w-full bg-slate-600 hover:bg-slate-500 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                    💳 購買一般票
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-gray-300">
                      2025/10/16 起開放購買
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Purchase Information */}
              <div className="bg-slate-800/30 rounded-xl p-8 backdrop-blur-sm">
                <h4 className="text-2xl font-semibold text-white mb-6 text-center">購票須知</h4>
                <div className="grid md:grid-cols-3 gap-8 text-gray-300">
                  <div>
                    <h5 className="font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      退費政策
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>• 活動前 14 天：全額退費</li>
                      <li>• 活動前 7-13 天：退費 50%</li>
                      <li>• 活動前 7 天內：不予退費</li>
                      <li>• 退費將於 7-14 個工作天完成</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      注意事項
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>• 認券不認人</li>
                      <li>• 會場禁止錄影錄音</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      聯絡資訊
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>• 購票問題請洽客服</li>
                      <li>• Email: dddtw2018@gmail.com</li>
                      <li>• 發票將以電子發票寄送</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-slate-800/30 rounded-xl p-8 backdrop-blur-sm">
                <h4 className="text-2xl font-semibold text-white mb-6 text-center">常見問題</h4>
                <div className="space-y-6">
                  <div className="border-b border-slate-600/30 pb-4">
                    <h5 className="font-semibold text-white mb-2">Q: 可以現場購票嗎？</h5>
                    <p className="text-gray-300 text-sm">A: 為確保座位，建議提前線上購票。現場購票視當日情況而定，恕不保證有位。</p>
                  </div>
                  <div className="border-b border-slate-600/30 pb-4">
                    <h5 className="font-semibold text-white mb-2">Q: 學生有優惠嗎？</h5>
                    <p className="text-gray-300 text-sm">A: 目前暫無學生優惠，但早鳥票已是優惠價格，建議把握機會。</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">Q: 會議是否提供線上直播？</h5>
                    <p className="text-gray-300 text-sm">A: 為維護現場參與者權益，本次會議不提供線上直播，敬請見諒。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
