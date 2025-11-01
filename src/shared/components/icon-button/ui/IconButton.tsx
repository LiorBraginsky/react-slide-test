import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/cn'
import { Icon, type IconName } from '@/shared/components/icon'

const iconButtonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded-md bg-[var(--icon-button-background)] hover:bg-[var(--icon-button-hover)]',
        ghost: 'rounded-[10px] hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /**
   * Icon name
   */
  iconName: IconName
  /**
   * Icon size
   * @default 24
   */
  iconSize?: number
  /**
   * Button size (width and height)
   * @default 34
   */
  buttonSize?: number
  /**
   * Fill color for icon on hover
   */
  fillColorOnHover?: string
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Icon button - supports default and ghost variants
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      iconName,
      iconSize = 24,
      buttonSize = 34,
      fillColorOnHover,
      variant,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn('group', iconButtonVariants({ variant, className }))}
        style={{
          width: buttonSize,
          height: buttonSize,
          ...style,
        }}
        {...props}
      >
        <Icon iconName={iconName} size={iconSize} fillColorOnHover={fillColorOnHover} />
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
