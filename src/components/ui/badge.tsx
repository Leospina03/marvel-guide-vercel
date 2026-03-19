import * as React from "react"
import { cn } from "./button"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "essential" | "phase";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-wide font-display uppercase";
  
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground shadow-sm",
    secondary: "border-transparent bg-secondary text-secondary-foreground shadow-sm",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm",
    outline: "text-foreground border-white/20 bg-white/5 backdrop-blur-sm",
    essential: "border-amber-500/50 bg-gradient-to-r from-amber-600/20 to-yellow-500/20 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
    phase: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}

export { Badge }
