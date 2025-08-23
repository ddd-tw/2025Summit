import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/layout/HeroSection"
import AboutSection from "@/components/layout/AboutSection"

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <Header />

      {/* Hero Section with Full-width Banner */}
      <HeroSection />

      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
