import React from "react"
import { Skeleton } from "../components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Header Skeleton */}
      <header className="bg-blue-900/80 backdrop-blur-sm border-blue-700/50 relative z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative z-20 min-h-screen flex items-center">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-64" />
              </div>
              <div className="space-y-6">
                <Skeleton className="h-20 w-96" />
                <Skeleton className="h-8 w-80" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
