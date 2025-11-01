import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/cn'
import { buttonVariants } from '@/shared/components/button/variants/button-variants'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    // Add background via style for default variant
    const defaultStyles =
      variant === 'default' || !variant
        ? {
            backgroundColor: 'var(--button-background)',
            ...style,
          }
        : style

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={defaultStyles}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
