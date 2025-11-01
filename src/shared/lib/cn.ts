import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines classes with clsx and tailwind-merge
 * Used for proper merging of Tailwind classes
 *
 * @example
 * cn("px-4", "px-6") // => "px-6" (removes conflict)
 * cn("base-class", isActive && "active-class") // conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
