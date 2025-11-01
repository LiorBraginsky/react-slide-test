import * as React from 'react'
import { cn } from '@/shared/lib/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Badge content
   */
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Badge component
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          'h-[19px] px-[4px]',
          'bg-[rgba(255,255,255,1)] border border-[rgba(0,0,0,0.05)]',
          'font-italian-plate font-bold text-[10px]',
          'rounded-[5px]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'
