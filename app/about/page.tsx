import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Users } from "lucide-react"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Metadata } from 'next'
import { getImagePath } from "@/lib/paths"

export const metadata: Metadata = {
  title: '關於我們',
  description: 'Domain Driven Design Taiwan (DDD Taiwan) 致力於在台灣推廣領域驅動設計與實踐經驗，建立專業技術社群。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Community Photo */}
        <div className="mb-12">
          <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={getImagePath("/placeholder.jpg")}
              alt="DDD Taiwan Community"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">關於我們</h1>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>Domain Driven Design Taiwan (DDD Taiwan) 致力於在台灣推廣領域驅動設計與實踐經驗。</p>

            <p>
              並透過舉辦各式軟體開發的工作者各自能夠透過 DDD
              在專案執行工程設計計畫實踐流程，促進團隊，並產生出具有價值的產品與服務，呈現對於世界的 DDD
              領域專業技術的交流。
            </p>

            <p>在 Domain Driven Design Taiwan (DDD Taiwan)，我們致力於所有熱愛解決問題的大家一起群體共創。</p>

            <p>
              在這裡我們將試著著重行實多的交流活動，一起來發展 Problem Domain 去催生出 Solution Domain，並一起建構 DDD
              的思維讓更多人認識。
            </p>

            <p className="text-blue-300">前往 Facebook 社團，瞭解更多資訊與學習討論。</p>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              asChild
            >
              <a href="https://www.facebook.com/groups/dddtaiwan" target="_blank" rel="noopener noreferrer">
                加入 Facebook 社團
              </a>
            </Button>
          </div>
        </div>

        {/* Community Values */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 rounded-lg p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">社群交流</h3>
              <p className="text-gray-400">
                建立一個開放、友善的技術社群，讓所有對 DDD 有興趣的朋友都能參與討論與學習。
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-lg p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">知識分享</h3>
              <p className="text-gray-400">
                透過工作坊、演講和實作活動，分享 Domain Driven Design 的實務經驗與最佳實踐。
              </p>
            </div>

            <div className="bg-blue-800/50 rounded-lg p-8 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">實務應用</h3>
              <p className="text-gray-400">協助開發者將 DDD 概念應用到實際專案中，解決真實世界的軟體設計挑戰。</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
