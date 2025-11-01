import * as React from 'react'
import { cn } from '@/shared/lib/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the card is active (for border styling)
   */
  isActive?: boolean
  /**
   * Card height
   * @default '195px'
   */
  height?: string
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Card content
   */
  children: React.ReactNode
}

/**
 * Card component with transparent background and border
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ isActive, height = '195px', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-transparent rounded-xl transition-colors',
          isActive
            ? 'border border-[rgba(0,0,0,0.2)]'
            : 'border border-[rgba(242,244,246,1)]',
          className
        )}
        style={{ height }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
