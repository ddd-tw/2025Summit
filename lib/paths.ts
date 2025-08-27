// 從 Next.js 配置中讀取 basePath 的工具函數
export const getBasePath = (): string => {
  // 在 SPA 模式下，優先使用 Next.js 提供的 basePath
  if (typeof window !== 'undefined') {
    // 檢查 Next.js 注入的 basePath
    const nextBasePath = (window as any).__NEXT_DATA__?.basePath
    if (nextBasePath) {
      return nextBasePath
    }
    
    // 備用方案：從當前 URL 推斷 basePath
    // 如果當前頁面 URL 包含 /2025/，則使用 /2025
    if (window.location.pathname.startsWith('/2025/')) {
      return '/2025'
    }
  }
  
  // 在服務端或構建時，根據環境變數決定
  // 這裡直接返回配置的值，確保與 next.config.mjs 一致
  return process.env.NODE_ENV === 'production' ? '/2025' : ''
}

// 獲取靜態資源完整路徑
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath()
  // 確保路徑格式正確
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

// 專門用於圖片資源的函數
export const getImagePath = (imageName: string): string => {
  return getAssetPath(imageName)
}

// 用於獲取 _next 靜態資源路徑（主要用於調試）
export const getNextStaticPath = (): string => {
  return `${getBasePath()}/_next`
}
