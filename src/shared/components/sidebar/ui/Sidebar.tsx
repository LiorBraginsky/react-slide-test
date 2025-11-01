import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/shared/shadcn/sheet.tsx'
import { IconButton } from '@/shared/components/icon-button'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
}

/**
 * Sidebar widget - right side panel
 */
export function Sidebar({
  isOpen,
  onClose,
  title,
  description,
  children,
}: SidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={open => !open && onClose()}>
      <SheetContent side="right">
        {title && (
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetClose asChild>
              <IconButton iconName="close" iconSize={24} buttonSize={34} />
            </SheetClose>
          </SheetHeader>
        )}
        {description && (
          <SheetDescription className="mb-6">{description}</SheetDescription>
        )}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  )
}
