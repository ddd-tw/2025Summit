"use client"

import Link from "next/link"
import {
  Mail,
  MessageCircle,
  Twitter,
  Instagram,
  Facebook,
  Users,
  Youtube,
  Building,
  ExternalLink,
  X,
  User,
  MessageSquare,
  Briefcase,
  Award,
  Globe,
  Github,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function SpeakersPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const speakersByTopic = [
    {
      topic: "領域驅動設計基礎與核心概念",
      shortTitle: "DDD 基礎",
      description: "深入探討 DDD 的基礎理論與核心概念，為初學者建立紮實的理論基礎",
      color: "blue",
      speakers: [
        {
          name: "張志明",
          title: "首席架構師",
          company: "台灣軟體科技",
          topic: "領域驅動設計基礎概念",
          bio: "擁有15年軟體開發經驗，專精於大型系統架構設計與領域驅動設計實踐。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "鄭宗翰",
          title: "技術講師",
          company: "教育訓練機構",
          topic: "DDD 教學與實踐",
          bio: "技術教育專家，致力於推廣領域驅動設計的教學與培訓。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "林雅婷",
          title: "產品經理",
          company: "電商平台",
          topic: "產品設計與領域建模",
          bio: "結合產品思維與技術實踐，專注於用戶體驗與系統設計的平衡。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
      ],
    },
    {
      topic: "系統架構與設計模式",
      shortTitle: "系統架構",
      description: "探討現代軟體架構設計，包括微服務、CQRS 等進階架構模式",
      color: "purple",
      speakers: [
        {
          name: "李美玲",
          title: "技術總監",
          company: "創新科技公司",
          topic: "微服務架構設計實戰",
          bio: "微服務架構專家，曾主導多個大型企業數位轉型專案。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "陳小華",
          title: "系統架構師",
          company: "金融科技公司",
          topic: "CQRS 與 Event Sourcing",
          bio: "專精於高併發系統設計，在金融領域有豐富的實戰經驗。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "吳佩君",
          title: "資深工程師",
          company: "雲端服務商",
          topic: "雲原生 DDD 實踐",
          bio: "雲端架構專家，專精於容器化與微服務在雲端環境的最佳實踐。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
      ],
    },
    {
      topic: "實務應用與工具實踐",
      shortTitle: "實務應用",
      description: "分享 DDD 在實際專案中的應用經驗，包括工具使用與實作技巧",
      color: "green",
      speakers: [
        {
          name: "王大明",
          title: "資深顧問",
          company: "敏捷顧問公司",
          topic: "事件風暴工作坊",
          bio: "事件風暴認證講師，協助企業建立有效的領域模型。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "劉志偉",
          title: "架構顧問",
          company: "企業顧問公司",
          topic: "遺留系統重構策略",
          bio: "企業系統現代化專家，協助傳統企業進行系統架構升級。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "許文龍",
          title: "資料架構師",
          company: "大數據公司",
          topic: "數據驅動的領域設計",
          bio: "數據架構專家，專精於大數據處理與分析系統的領域建模。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
      ],
    },
    {
      topic: "團隊協作與流程管理",
      shortTitle: "團隊協作",
      description: "探討如何在團隊中有效實施 DDD，包括協作方式與開發流程優化",
      color: "indigo",
      speakers: [
        {
          name: "黃建國",
          title: "技術長",
          company: "新創科技",
          topic: "DDD 在新創公司的應用",
          bio: "新創技術領導者，擅長在資源有限的環境下建立可擴展的系統架構。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "蔡淑芬",
          title: "開發團隊主管",
          company: "軟體開發公司",
          topic: "團隊協作與 DDD",
          bio: "團隊管理與敏捷開發專家，致力於提升團隊效率與代碼品質。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
        {
          name: "趙美惠",
          title: "DevOps 工程師",
          company: "雲端平台",
          topic: "DDD 與 DevOps 整合",
          bio: "DevOps 實踐者，專注於持續整合與部署在領域驅動設計中的應用。",
          image: "/placeholder.svg?height=200&width=200",
          linkedin: "#",
          twitter: "#",
          experience: "15年軟體開發經驗，曾任職於多家知名科技公司",
          expertise: ["領域驅動設計", "系統架構", "微服務", "團隊管理"],
          education: "國立台灣大學資訊工程學系",
          achievements: ["DDD Taiwan 社群創辦人", "多場國際會議講者", "技術書籍作者"],
          socialLinks: {
            linkedin: "https://linkedin.com/in/speaker",
            twitter: "https://twitter.com/speaker",
            github: "https://github.com/speaker",
            website: "https://speaker-website.com",
          },
        },
      ],
    },
  ]

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: {
        tab: isActive
          ? "bg-blue-600 text-white border-blue-500"
          : "bg-slate-100/90 text-slate-700 border-slate-300 hover:bg-blue-50 hover:text-blue-600",
        badge: "bg-blue-100 text-blue-700 border-blue-300",
        gradient: "from-blue-50/80 via-blue-50/40 to-blue-50/80",
      },
      purple: {
        tab: isActive
          ? "bg-purple-600 text-white border-purple-500"
          : "bg-slate-100/90 text-slate-700 border-slate-300 hover:bg-purple-50 hover:text-purple-600",
        badge: "bg-purple-100 text-purple-700 border-purple-300",
        gradient: "from-purple-50/80 via-purple-50/40 to-purple-50/80",
      },
      green: {
        tab: isActive
          ? "bg-green-600 text-white border-green-500"
          : "bg-slate-100/90 text-slate-700 border-slate-300 hover:bg-green-50 hover:text-green-600",
        badge: "bg-green-100 text-green-700 border-green-300",
        gradient: "from-green-50/80 via-green-50/40 to-green-50/80",
      },
      indigo: {
        tab: isActive
          ? "bg-indigo-600 text-white border-indigo-500"
          : "bg-slate-100/90 text-slate-700 border-slate-300 hover:bg-indigo-50 hover:text-indigo-600",
        badge: "bg-indigo-100 text-indigo-700 border-indigo-300",
        gradient: "from-indigo-50/80 via-indigo-50/40 to-indigo-50/80",
      },
    }
    return colors[color as keyof typeof colors]
  }

  const currentTopic = speakersByTopic[activeTab]

  const openLightbox = (speaker: any) => {
    setSelectedSpeaker(speaker)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden" // 防止背景滾動
  }

  const closeLightbox = () => {
    setSelectedSpeaker(null)
    setIsLightboxOpen(false)
    document.body.style.overflow = "unset"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">講者資訊</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              我們很榮幸邀請到業界頂尖的專家與實務工作者，分享他們在領域驅動設計與系統架構方面的寶貴經驗與深度見解。
            </p>
          </div>

          {/* Topic Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {speakersByTopic.map((topic, index) => {
                const colorClasses = getColorClasses(topic.color, activeTab === index)
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-lg border backdrop-blur-sm transition-all duration-300 font-medium shadow-lg ${colorClasses.tab}`}
                  >
                    <div className="text-center">
                      <div className="text-sm font-semibold">主題 {index + 1}</div>
                      <div className="text-xs mt-1">{topic.shortTitle}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Topic Overview */}
            <div className="text-center mb-8">
              <div
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full border backdrop-blur-sm mb-4 shadow-lg ${getColorClasses(currentTopic.color, true).badge}`}
              >
                <span className="font-semibold text-lg">主題 {activeTab + 1}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{currentTopic.topic}</h2>
              <p className="text-gray-200 max-w-2xl mx-auto">{currentTopic.description}</p>
            </div>
          </div>

          {/* Current Topic Content */}
          <div className="relative">
            <div
              className={`absolute inset-0 rounded-lg bg-gradient-to-br ${getColorClasses(currentTopic.color, true).gradient} pointer-events-none`}
            ></div>
            <div className="relative z-10 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {currentTopic.speakers.map((speaker, speakerIndex) => (
                  <Card
                    key={speakerIndex}
                    className="bg-slate-100/95 border-slate-200 backdrop-blur-sm hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
                    onClick={() => openLightbox(speaker)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
                          <Users className="w-8 h-8 text-slate-600" />
                        </div>
                      </div>
                      <CardTitle className="text-slate-800 text-lg">{speaker.name}</CardTitle>
                      <div className="space-y-1">
                        <p className="text-blue-600 text-sm font-medium">{speaker.title}</p>
                        <div className="flex items-center justify-center space-x-1 text-slate-600 text-xs">
                          <Building className="w-3 h-3" />
                          <span>{speaker.company}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-slate-200/80 rounded-lg p-3 border border-slate-300">
                        <h4 className="text-purple-600 font-medium text-sm mb-1">演講主題</h4>
                        <p className="text-slate-700 text-sm">{speaker.topic}</p>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">{speaker.bio}</p>
                      <div className="flex justify-center space-x-3 pt-2">
                        <a
                          href={speaker.linkedin}
                          className="w-8 h-8 bg-slate-300 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                          aria-label="LinkedIn"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={speaker.twitter}
                          className="w-8 h-8 bg-slate-300 hover:bg-blue-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="text-center mt-8">
            <p className="text-gray-200 text-sm">點擊上方主題標籤切換不同領域的講者資訊</p>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {isLightboxOpen && selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-100 rounded-lg shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-800/80 hover:bg-slate-800 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="關閉"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-white/20 p-1 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
                      <Users className="w-16 h-16 text-slate-600" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedSpeaker.name}</h2>
                    <p className="text-xl text-blue-100 mb-2">{selectedSpeaker.title}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-2 text-blue-200">
                      <Building className="w-4 h-4" />
                      <span>{selectedSpeaker.company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Bio Section */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <User className="w-6 h-6 mr-2 text-blue-600" />
                    講者介紹
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">{selectedSpeaker.bio}</p>
                </div>

                {/* Topic Section */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-purple-600" />
                    演講主題
                  </h3>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                    <h4 className="text-xl font-semibold text-purple-800 mb-2">{selectedSpeaker.topic}</h4>
                    <p className="text-slate-700">深入探討該主題的核心概念與實務應用，分享豐富的實戰經驗與最佳實踐。</p>
                  </div>
                </div>

                {/* Experience & Expertise */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                      專業經驗
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      擁有豐富的軟體開發與系統架構經驗，專精於領域驅動設計的理論與實踐，
                      曾參與多個大型專案的架構設計與技術決策。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-orange-600" />
                      專業領域
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["領域驅動設計", "系統架構", "微服務", "團隊管理"].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    聯絡方式
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedSpeaker.linkedin}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={selectedSpeaker.twitter}
                      className="flex items-center space-x-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
