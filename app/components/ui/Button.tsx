"use client"

import React, { forwardRef } from "react"

type Variant = "primary" | "outline" | "ghost"
type Size = "sm" | "md" | "lg"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: Variant
  /** Size of the button */
  size?: Size
  /** Additional classes to merge with component classes */
  className?: string
  /** Show a subtle loading indicator (non-blocking visual) */
  loading?: boolean
}

const base =
  "inline-flex items-center justify-center rounded-2xl font-medium transition-transform transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2"

const variants: Record<Variant, string> = {
  primary:
    "hover:cursor-pointer",
  outline:
    "bg-transparent border border-slate-200 text-slate-800 hover:bg-slate-50 active:scale-95 focus:ring-slate-200",
  ghost:
    "bg-transparent text-slate-800 hover:bg-slate-100 active:scale-95 focus:ring-slate-200",
}

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
}

function cx(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(" ")
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className,
    loading = false,
    disabled,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading

  return (
    <button
      ref={ref}
      className={cx(
        base,
        variants[variant],
        sizes[size],
        // default hover behaviour: subtle lift + shadow
        "hover:scale-105 hover:shadow-sm",
        // accessible reduced-motion respect: keep CSS simple, browsers handle
        className
      )}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      {...rest}
    >
      {/* simple loading indicator */}
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="sr-only">Loading</span>
          <span aria-hidden>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
})

export default Button
