"use client"

import { Marquee } from "@/components/ui/marquee"

const charities = [
  {
    name: "World Vision",
    focus: "Children & communities",
    region: "Global",
    icon: "🌍",
  },
  {
    name: "Right to Play",
    focus: "Sport for development",
    region: "Africa & Asia",
    icon: "⚽",
  },
  {
    name: "Grassroot Soccer",
    focus: "Youth health via football",
    region: "Sub-Saharan Africa",
    icon: "🏥",
  },
  {
    name: "Football Beyond Borders",
    focus: "Education through football",
    region: "United Kingdom",
    icon: "📚",
  },
  {
    name: "Common Goal",
    focus: "Football for social impact",
    region: "Global",
    icon: "🤝",
  },
  {
    name: "Street Football World",
    focus: "Community football programs",
    region: "40+ Countries",
    icon: "🏟️",
  },
  {
    name: "Kick4Life",
    focus: "Sport & life skills",
    region: "Lesotho",
    icon: "💪",
  },
  {
    name: "Coaches Across Continents",
    focus: "Coaching for change",
    region: "55+ Countries",
    icon: "🎓",
  },
  {
    name: "UNICEF Sport for Dev",
    focus: "Children's rights via sport",
    region: "Global",
    icon: "🧒",
  },
  {
    name: "Peace Players Intl",
    focus: "Bridging divides with sport",
    region: "Middle East & Africa",
    icon: "🕊️",
  },
]

const firstRow = charities.slice(0, 5)
const secondRow = charities.slice(5)

function CharityCard({ charity }: { charity: typeof charities[0] }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #F0B90B 0%, #D4A00A 100%)",
        borderRadius: "12px",
        padding: "14px 18px",
        width: "260px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div style={{ fontSize: "1.8rem", lineHeight: 1 }}>{charity.icon}</div>
      <div>
        <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0a0a0a" }}>
          {charity.name}
        </div>
        <div style={{ fontSize: "0.68rem", color: "rgba(0,0,0,0.6)" }}>
          {charity.focus} · {charity.region}
        </div>
      </div>
    </div>
  )
}

export function CharityMarquee() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        overflow: "hidden",
        padding: "16px 0",
      }}
    >
      <Marquee pauseOnHover className="[--duration:30s] mb-3">
        {firstRow.map((c) => (
          <CharityCard key={c.name} charity={c} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((c) => (
          <CharityCard key={c.name} charity={c} />
        ))}
      </Marquee>
    </div>
  )
}
