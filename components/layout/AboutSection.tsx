import { Users, Clock, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
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
  );
}
