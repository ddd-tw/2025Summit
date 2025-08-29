/**
 * 會議資料相關的自訂 Hook
 * 架構師建議：抽象資料邏輯，提升組件可測試性
 */

import { useState, useMemo, useCallback } from 'react'
import { SPEAKERS_DATA, AGENDA_DATA, type Speaker, type SpeakerTopic } from '@/lib/data/conference'

/**
 * 會議資料管理 Hook
 */
export const useConferenceData = () => {
  // 講者資料
  const speakers = useMemo(() => SPEAKERS_DATA, [])
  
  // 議程資料  
  const agenda = useMemo(() => AGENDA_DATA, [])
  
  // 講者搜尋功能
  const searchSpeakers = useCallback((query: string): SpeakerTopic[] => {
    if (!query.trim()) return speakers
    
    const lowercaseQuery = query.toLowerCase()
    
    return speakers
      .map(topic => ({
        ...topic,
        speakers: topic.speakers.filter(speaker =>
          speaker.name.toLowerCase().includes(lowercaseQuery) ||
          speaker.title.toLowerCase().includes(lowercaseQuery) ||
          speaker.company.toLowerCase().includes(lowercaseQuery) ||
          speaker.expertise.some(skill => skill.toLowerCase().includes(lowercaseQuery))
        )
      }))
      .filter(topic => topic.speakers.length > 0)
  }, [speakers])
  
  // 依主題篩選講者
  const getSpeakersByTopic = useCallback((topicName: string): Speaker[] => {
    const topic = speakers.find(t => t.topic === topicName)
    return topic?.speakers || []
  }, [speakers])
  
  // 依時間篩選議程
  const getSessionsByTimeSlot = useCallback((timeSlot: string) => {
    return agenda.filter(session => session.time === timeSlot)
  }, [agenda])
  
  return {
    speakers,
    agenda,
    searchSpeakers,
    getSpeakersByTopic,
    getSessionsByTimeSlot
  }
}

/**
 * 講者燈箱管理 Hook
 */
export const useSpeakerLightbox = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  
  const openLightbox = useCallback((speaker: Speaker) => {
    setSelectedSpeaker(speaker)
    setIsOpen(true)
    // 防止背景滾動
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden"
    }
  }, [])
  
  const closeLightbox = useCallback(() => {
    setSelectedSpeaker(null)
    setIsOpen(false)
    // 恢復背景滾動
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto"
    }
  }, [])
  
  return {
    selectedSpeaker,
    isOpen,
    openLightbox,
    closeLightbox
  }
}

/**
 * 標籤頁管理 Hook
 */
export const useTabNavigation = (initialTab: number = 0) => {
  const [activeTab, setActiveTab] = useState(initialTab)
  
  const switchTab = useCallback((tabIndex: number) => {
    setActiveTab(tabIndex)
  }, [])
  
  const nextTab = useCallback((maxTabs: number) => {
    setActiveTab(prev => (prev + 1) % maxTabs)
  }, [])
  
  const previousTab = useCallback((maxTabs: number) => {
    setActiveTab(prev => (prev - 1 + maxTabs) % maxTabs)
  }, [])
  
  return {
    activeTab,
    switchTab,
    nextTab,
    previousTab
  }
}
