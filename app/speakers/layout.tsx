import { Metadata } from 'next'
import { CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: '講者資訊',
  description: `${CONFIG.conference.name} 講者陣容 - 業界頂尖專家分享領域驅動設計與${CONFIG.conference.theme}實務經驗`,
}

export default function SpeakersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
