import * as React from 'react'

export interface CircularProgressProps {
  /**
   * Progress from 0 to 100
   */
  progress: number
  /**
   * Time remaining in seconds
   */
  timeLeft: number
  /**
   * Circle size
   * @default 65
   */
  size?: number
  /**
   * Stroke width
   * @default 3
   */
  strokeWidth?: number
}

/**
 * Circular progress bar component
 */
export const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  timeLeft,
  size = 65,
  strokeWidth = 3,
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(91, 240, 165, 1)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        {/* Text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-italian-plate font-medium text-sm text-[rgba(255,255,255,1)]">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      {/* Time left */}
      <span className="mt-2 font-italian-plate font-demibold text-xs text-[rgba(255,255,255,1)]">
        {timeLeft} second(s) left
      </span>
    </div>
  )
}
