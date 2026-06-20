import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { WalletProvider } from "@/components/WalletProvider"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "FundGoal — Fund a Dream",
  description:
    "The World Cup is happening. Use prediction pools to fund real charity projects — 100% of stakes go to World Vision. Verified on Solana.",
  openGraph: {
    title: "FundGoal — Fund a Dream",
    description:
      "Pick a team. Back a dream. 100% of your SOL funds a real project during the 2026 World Cup.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ background: "#F0B90B", color: "#0a0a0a" }}>
        <WalletProvider>
          {/* Header */}
          <header
            style={{
              borderBottom: "2px solid rgba(0,0,0,0.1)",
              padding: "14px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <a
              href="/"
              style={{
                fontSize: "1.2rem",
                fontWeight: 900,
                color: "#0a0a0a",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                textDecoration: "none",
              }}
            >
              FUNDGOAL
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="https://thegivingblock.com/donate/world-vision/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(0,0,0,0.5)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ color: "#0a0a0a" }}>♥</span> World Vision
              </a>
            </div>
          </header>

          {/* Main */}
          <main
            style={{
              flex: 1,
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              padding: "0 24px",
            }}
          >
            {children}
          </main>

          {/* Footer */}
          <footer
            style={{
              borderTop: "2px solid rgba(0,0,0,0.1)",
              padding: "24px",
              textAlign: "center",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.4)" }}>
              FundGoal · 100% of stakes fund real projects · World Vision via{" "}
              <a
                href="https://thegivingblock.com/donate/world-vision/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0a0a0a", textDecoration: "underline" }}
              >
                The Giving Block
              </a>{" "}
              · EIN 95-1922279 · Built on Solana
            </div>
          </footer>
        </WalletProvider>
      </body>
    </html>
  )
}
