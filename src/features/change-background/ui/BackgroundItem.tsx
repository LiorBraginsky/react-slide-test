import * as React from 'react'
import { Badge } from '@/shared/components/badge'
import { CircularProgress } from '@/shared/components/circular-progress'
import type { Background } from '@/shared/store/useBackgroundsStore'
import faceTuneImg from '@/assets/images/face-tune.png'

interface BackgroundItemProps {
  background: Background
}

export const BackgroundItem: React.FC<BackgroundItemProps> = ({
  background,
}) => {
  const {
    status,
    imageUrl,
    gradient,
    progress = 0,
    timeLeft = 0,
    isDefault,
  } = background

  return (
    <div className="relative w-[112px] h-[198px] rounded-[12px]  overflow-hidden cursor-pointer transition-opacity hover:opacity-80">
      {/* Processing state */}
      {status === 'processing' && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <CircularProgress progress={progress} timeLeft={timeLeft} />
        </div>
      )}

      {/* Default state */}
      {status === 'default' && imageUrl && (
        <div className="absolute inset-0 border-2 border-black rounded-[12px] overflow-hidden">
          <img
            src={imageUrl}
            alt="default background"
            className="w-full h-full object-cover"
          />
          {isDefault && (
            <div className="absolute top-1 left-2.5">
              <Badge>DEFAULT</Badge>
            </div>
          )}
        </div>
      )}

      {/* Completed state */}
      {status === 'completed' && (
        <>
          {/* Background gradient or image */}
          {gradient ? (
            <div
              className="absolute inset-0"
              style={{ background: gradient }}
            />
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="background"
              className="w-full h-full object-cover"
            />
          ) : null}

          {/* Face tune image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={faceTuneImg}
              alt="face tune"
              className="h-full object-contain"
            />
          </div>
        </>
      )}
    </div>
  )
}
