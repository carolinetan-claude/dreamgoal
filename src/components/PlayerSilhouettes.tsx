"use client"

import { PlayerPosition } from "@/lib/matches"

interface SilhouetteProps {
  facing: "left" | "right"
  color?: string
  size?: number
}

/**
 * Striker — mid-volley kick, leg raised high, arms back for balance.
 * Dynamic, explosive pose — the goal scorer.
 */
function StrikerSilhouette({ facing, color = "rgba(255,255,255,0.18)", size = 120 }: SilhouetteProps) {
  const flip = facing === "left" ? "scale(-1,1)" : ""
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ transform: flip }}>
      {/* Head */}
      <circle cx="55" cy="15" r="7" fill={color} />
      {/* Body — torso leaning into the kick */}
      <path d="M55 22 L52 28 L48 45 L50 48" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Left arm — back for balance */}
      <path d="M52 28 L38 24 L32 28" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Right arm — forward momentum */}
      <path d="M52 28 L62 34 L68 30" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Standing leg — planted */}
      <path d="M48 45 L44 65 L42 80 L40 85" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Kicking leg — raised high behind */}
      <path d="M50 48 L60 42 L72 35 L78 30" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Boot on kicking foot */}
      <ellipse cx="78" cy="30" rx="4" ry="2.5" fill={color} transform="rotate(-25 78 30)" />
      {/* Boot on standing foot */}
      <ellipse cx="40" cy="86" rx="5" ry="2" fill={color} />
      {/* Ball at the kicking foot */}
      <circle cx="80" cy="28" r="4" fill={color} opacity="0.5" />
    </svg>
  )
}

/**
 * Winger — full sprint, body leaning forward, one arm pumping, legs in stride.
 * Speed and agility.
 */
function WingerSilhouette({ facing, color = "rgba(255,255,255,0.18)", size = 120 }: SilhouetteProps) {
  const flip = facing === "left" ? "scale(-1,1)" : ""
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ transform: flip }}>
      {/* Head */}
      <circle cx="60" cy="18" r="7" fill={color} />
      {/* Body — leaning forward aggressively */}
      <path d="M60 25 L58 32 L52 48 L50 52" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Left arm — pumping back */}
      <path d="M58 32 L48 28 L40 32" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Right arm — forward pump */}
      <path d="M58 32 L68 26 L72 22" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Front leg — extended forward in stride */}
      <path d="M50 52 L58 62 L65 75 L70 82" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Back leg — trailing behind */}
      <path d="M52 48 L40 58 L30 68 L25 72" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Boots */}
      <ellipse cx="70" cy="83" rx="5" ry="2" fill={color} />
      <ellipse cx="25" cy="73" rx="4" ry="2" fill={color} />
      {/* Motion lines */}
      <line x1="20" y1="30" x2="28" y2="30" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <line x1="18" y1="40" x2="26" y2="40" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <line x1="16" y1="50" x2="24" y2="50" stroke={color} strokeWidth="1.5" opacity="0.3" />
    </svg>
  )
}

/**
 * Midfielder — controlling the ball, slight crouch, one foot on the ball, arms out for balance.
 * Calm authority.
 */
function MidfielderSilhouette({ facing, color = "rgba(255,255,255,0.18)", size = 120 }: SilhouetteProps) {
  const flip = facing === "left" ? "scale(-1,1)" : ""
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ transform: flip }}>
      {/* Head */}
      <circle cx="50" cy="15" r="7" fill={color} />
      {/* Body — upright with slight crouch */}
      <path d="M50 22 L49 30 L48 45 L48 50" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Left arm — out for balance */}
      <path d="M49 30 L36 28 L30 34" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Right arm — out for balance, slightly lower */}
      <path d="M49 30 L62 32 L68 28" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Left leg — standing */}
      <path d="M48 50 L44 62 L42 76 L40 84" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Right leg — foot on ball */}
      <path d="M48 50 L54 60 L60 70 L62 75" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Boots */}
      <ellipse cx="40" cy="85" rx="5" ry="2" fill={color} />
      <ellipse cx="62" cy="76" rx="4" ry="2" fill={color} />
      {/* Ball under right foot */}
      <circle cx="65" cy="79" r="5" fill={color} opacity="0.5" />
    </svg>
  )
}

/**
 * Goalkeeper — arms wide, legs apart, ready stance. The wall.
 */
function GoalkeeperSilhouette({ facing, color = "rgba(255,255,255,0.18)", size = 120 }: SilhouetteProps) {
  const flip = facing === "left" ? "scale(-1,1)" : ""
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ transform: flip }}>
      {/* Head */}
      <circle cx="50" cy="15" r="7" fill={color} />
      {/* Body — slight crouch, ready stance */}
      <path d="M50 22 L50 30 L50 48 L50 52" stroke={color} strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* Left arm — stretched wide and up (diving ready) */}
      <path d="M50 30 L32 20 L18 14" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Left glove */}
      <circle cx="16" cy="13" r="3.5" fill={color} opacity="0.7" />
      {/* Right arm — stretched wide and up */}
      <path d="M50 30 L68 20 L82 14" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Right glove */}
      <circle cx="84" cy="13" r="3.5" fill={color} opacity="0.7" />
      {/* Left leg — wide stance */}
      <path d="M50 52 L38 64 L30 78 L26 86" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Right leg — wide stance */}
      <path d="M50 52 L62 64 L70 78 L74 86" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Boots */}
      <ellipse cx="26" cy="87" rx="5" ry="2" fill={color} />
      <ellipse cx="74" cy="87" rx="5" ry="2" fill={color} />
    </svg>
  )
}

/**
 * Returns the right silhouette component for a position.
 */
export function PlayerSilhouette({
  position,
  facing,
  color,
  size,
}: {
  position: PlayerPosition
  facing: "left" | "right"
  color?: string
  size?: number
}) {
  switch (position) {
    case "striker":
      return <StrikerSilhouette facing={facing} color={color} size={size} />
    case "winger":
      return <WingerSilhouette facing={facing} color={color} size={size} />
    case "midfielder":
      return <MidfielderSilhouette facing={facing} color={color} size={size} />
    case "goalkeeper":
      return <GoalkeeperSilhouette facing={facing} color={color} size={size} />
  }
}

/**
 * Utility: determine if a jersey colour is "light" so we can use dark text on it.
 */
export function isLightColor(hex: string): boolean {
  const c = hex.replace("#", "")
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  // Perceived brightness formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 160
}
