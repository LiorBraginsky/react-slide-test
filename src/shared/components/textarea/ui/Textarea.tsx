import * as React from 'react'
import { cn } from '@/shared/lib/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Textarea component with transparent background
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full bg-transparent resize-none',
          'font-italian-plate font-medium text-sm leading-[140%]',
          'text-[rgba(0,0,0,1)] placeholder:text-muted-foreground',
          'focus:outline-none',
          'p-4',
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
