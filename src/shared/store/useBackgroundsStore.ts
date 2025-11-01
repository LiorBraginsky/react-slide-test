import { create } from 'zustand'
import defaultFrameImg from '@/assets/images/default-frame.png'
import secondFrameImg from '@/assets/images/second-frame.png'

export type BackgroundStatus = 'default' | 'processing' | 'completed'

export interface Background {
  id: string
  status: BackgroundStatus
  imageUrl?: string
  gradient?: string
  progress?: number
  timeLeft?: number
  isDefault?: boolean
}

interface BackgroundsState {
  backgrounds: Background[]
  isGenerating: boolean
  addBackground: (background: Background) => void
  updateBackground: (id: string, updates: Partial<Background>) => void
  setIsGenerating: (isGenerating: boolean) => void
}

export const useBackgroundsStore = create<BackgroundsState>((set) => ({
  backgrounds: [
    {
      id: 'default-1',
      status: 'default',
      imageUrl: defaultFrameImg,
      isDefault: true,
    },
    {
      id: 'default-2',
      status: 'completed',
      imageUrl: secondFrameImg,
    },
  ],
  isGenerating: false,

  addBackground: (background) =>
    set((state) => ({
      backgrounds: [background, ...state.backgrounds],
    })),

  updateBackground: (id, updates) =>
    set((state) => ({
      backgrounds: state.backgrounds.map((bg) =>
        bg.id === id ? { ...bg, ...updates } : bg
      ),
    })),

  setIsGenerating: (isGenerating) =>
    set({ isGenerating }),
}))
