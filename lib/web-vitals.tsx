'use client'

import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals'

function sendToAnalytics(metric: Metric) {
  // SPA 專用效能監控
  if (process.env.NODE_ENV === 'development') {
    console.log('🚀 SPA Web Vitals:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    })
  }
  
  // 生產環境可以發送到分析服務
  // 例如：Google Analytics, Vercel Analytics 等
}

export function reportWebVitals() {
  // SPA 模式下，這些指標特別重要
  onCLS(sendToAnalytics)    // 累積版面位移
  onINP(sendToAnalytics)    // 互動至下一個繪製
  onFCP(sendToAnalytics)    // 首次內容繪製
  onLCP(sendToAnalytics)    // 最大內容繪製
  onTTFB(sendToAnalytics)   // 首位元組時間
}

export function WebVitalsReporter() {
  // 確保只在客戶端執行（SPA 特性）
  if (typeof window !== 'undefined') {
    // 延遲執行，確保頁面完全載入
    setTimeout(() => {
      reportWebVitals()
    }, 1000)
  }
  return null
}
