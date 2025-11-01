import * as React from 'react'
import { cn } from '@/shared/lib/cn'

import closeIcon from '@/assets/vectors/close.svg'
import backIcon from '@/assets/vectors/back.svg'
import nextIcon from '@/assets/vectors/next.svg'
import aiIcon from '@/assets/images/AI.svg'

/**
 * Available icons in the project
 */
export type IconName = 'close' | 'back' | 'next' | 'ai'

export interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Icon name from available icons
   */
  iconName: IconName
  /**
   * Icon size (width and height)
   * @default 20
   */
  size?: number
  /**
   * Fill color for icon on hover (via CSS filter)
   */
  fillColorOnHover?: string
  /**
   * Additional CSS classes
   */
  className?: string
}

const iconMap: Record<IconName, string> = {
  close: closeIcon,
  back: backIcon,
  next: nextIcon,
  ai: aiIcon,
}

/**
 * Universal component for displaying icons
 */
export const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  (
    { iconName, size = 20, fillColorOnHover, className, style, ...props },
    ref
  ) => {
    const iconSrc = iconMap[iconName]

    if (!iconSrc) {
      console.warn(`Icon with name "${iconName}" not found`)
      return null
    }

    return (
      <img
        ref={ref}
        src={iconSrc}
        alt={iconName}
        width={size}
        height={size}
        className={cn(
          'inline-block transition-all',
          fillColorOnHover &&
            'group-hover:brightness-0 group-hover:saturate-100',
          className
        )}
        style={{
          ...style,
          ...(fillColorOnHover &&
            ({
              '--icon-hover-color': fillColorOnHover,
            } as React.CSSProperties)),
        }}
        {...props}
      />
    )
  }
)

Icon.displayName = 'Icon'
