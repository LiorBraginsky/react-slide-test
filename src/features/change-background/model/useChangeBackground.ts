import { useState, useEffect, useRef } from 'react'
import { useBackgroundsStore } from '@/shared/store/useBackgroundsStore'

/**
 * Generates random gradient
 */
function generateRandomGradient(): string {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
  }

  const color1 = randomColor()
  const color2 = randomColor()
  const angle = Math.floor(Math.random() * 360)

  return `linear-gradient(${angle}deg, ${color1}, ${color2})`
}

/**
 * Hook for managing Change Background state
 */
export function useChangeBackground() {
  const [backgroundIdea, setBackgroundIdea] = useState('')
  const [isTextareaFocused, setIsTextareaFocused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const { backgrounds, isGenerating, addBackground, updateBackground, setIsGenerating } =
    useBackgroundsStore()

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBackgroundIdea(e.target.value)
  }

  const handleRegenerate = () => {
    console.log('Regenerate clicked')
  }

  const handleBack = () => {
    console.log('Back clicked')
  }

  const handleNext = () => {
    console.log('Next clicked')
  }

  const handleGenerate = () => {
    if (isGenerating) return

    const id = `bg-${Date.now()}`
    const totalDuration = Math.floor(Math.random() * (7 - 3 + 1) + 3)
    const totalMs = totalDuration * 1000
    const startTime = Date.now()

    addBackground({
      id,
      status: 'processing',
      progress: 0,
      timeLeft: totalDuration,
    })

    setIsGenerating(true)

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed / totalMs) * 100, 100)
      const timeLeft = Math.max(Math.ceil((totalMs - elapsed) / 1000), 0)

      updateBackground(id, {
        progress,
        timeLeft,
      })

      if (progress >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }

        updateBackground(id, {
          status: 'completed',
          gradient: generateRandomGradient(),
          progress: undefined,
          timeLeft: undefined,
        })

        setIsGenerating(false)
      }
    }, 100)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return {
    backgroundIdea,
    isTextareaFocused,
    backgrounds,
    isGenerating,
    setIsTextareaFocused,
    handleTextareaChange,
    handleRegenerate,
    handleBack,
    handleNext,
    handleGenerate,
  }
}
