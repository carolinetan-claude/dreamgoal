"use client"

import Link from "next/link"
import { Match, MatchStatus } from "@/lib/matches"
import { PlayerSilhouette, isLightColor } from "./PlayerSilhouettes"

function StatusBadge({ status }: { status: MatchStatus }) {
  if (status === "live") {
    return (
      <span
        style={{
          background: "#F0B90B",
          color: "#0a0a0a",
          fontSize: "0.6rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "3px 10px",
          borderRadius: "4px",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#0a0a0a", display: "inline-block" }} />
        LIVE
      </span>
    )
  }
  if (status === "resolved") {
    return (
      <span
        style={{
          background: "#1DB954",
          color: "#0a0a0a",
          fontSize: "0.6rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "3px 10px",
          borderRadius: "4px",
        }}
      >
        FUNDED
      </span>
    )
  }
  return (
    <span
      style={{
        background: "rgba(255,255,255,0.1)",
        color: "#888",
        fontSize: "0.6rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        padding: "3px 10px",
        borderRadius: "4px",
      }}
    >
      UPCOMING
    </span>
  )
}

export function MatchCard({ match }: { match: Match }) {
  const totalSol = match.totalSol || 0
  const isResolved = match.status === "resolved"

  const colorA = match.teamA.jerseyColor
  const colorB = match.teamB.jerseyColor
  const textA = isLightColor(colorA) ? "#0a0a0a" : "#FFFFFF"
  const textB = isLightColor(colorB) ? "#0a0a0a" : "#FFFFFF"

  return (
    <Link href={`/match/${match.id}`} style={{ textDecoration: "none" }}>
      <div
        className="pvp-card"
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.01)"
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.6)"
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0) scale(1)"
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)"
        }}
      >
        {/* === PVP Arena — Split Diagonal === */}
        <div
          style={{
            position: "relative",
            height: "220px",
            overflow: "hidden",
          }}
        >
          {/* Team A half — left */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: colorA,
              clipPath: "polygon(0 0, 55% 0, 45% 100%, 0 100%)",
            }}
          />

          {/* Team B half — right */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: colorB,
              clipPath: "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)",
            }}
          />

          {/* Dark diagonal slash in the center */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#0a0a0a",
              clipPath: "polygon(48% 0, 52% 0, 48% 100%, 44% 100%)",
              zIndex: 2,
            }}
          />

          {/* Group badge top-left */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "14px",
              zIndex: 5,
              fontSize: "0.6rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: textA,
              opacity: 0.7,
            }}
          >
            {match.group}
          </div>

          {/* Status badge top-right */}
          <div style={{ position: "absolute", top: "10px", right: "14px", zIndex: 5 }}>
            <StatusBadge status={match.status} />
          </div>

          {/* Team A — left side */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "45%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
              paddingTop: "24px",
            }}
          >
            {/* Silhouette */}
            <div style={{ opacity: 0.25, marginBottom: "4px" }}>
              <PlayerSilhouette
                position={match.teamA.position}
                facing="right"
                color={textA}
                size={90}
              />
            </div>
            {/* Flag + Name */}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "2px" }}>{match.teamA.flag}</div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: textA,
                }}
              >
                {match.teamA.name}
              </div>
            </div>
          </div>

          {/* Team B — right side */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "45%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
              paddingTop: "24px",
            }}
          >
            {/* Silhouette */}
            <div style={{ opacity: 0.25, marginBottom: "4px" }}>
              <PlayerSilhouette
                position={match.teamB.position}
                facing="left"
                color={textB}
                size={90}
              />
            </div>
            {/* Flag + Name */}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "2px" }}>{match.teamB.flag}</div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: textB,
                }}
              >
                {match.teamB.name}
              </div>
            </div>
          </div>

          {/* VS badge — center */}
          <div
            className="vs-badge"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              background: "#F0B90B",
              color: "#0a0a0a",
              fontWeight: 900,
              fontSize: "1rem",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(240,185,11,0.4), 0 0 40px rgba(240,185,11,0.15)",
              border: "2px solid rgba(0,0,0,0.2)",
            }}
          >
            VS
          </div>
        </div>

        {/* === Dark footer strip — projects, pool, CTA === */}
        <div
          style={{
            background: "#0a0a0a",
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Projects preview */}
          <div style={{ background: "#141414", borderRadius: "8px", padding: "10px 12px", fontSize: "0.75rem", color: "#888" }}>
            <div style={{ marginBottom: "4px" }}>
              <span style={{ color: "#F0B90B" }}>{match.teamA.flag}</span>{" "}
              {match.teamA.project.name}
            </div>
            <div>
              <span style={{ color: "#F0B90B" }}>{match.teamB.flag}</span>{" "}
              {match.teamB.project.name}
            </div>
          </div>

          {/* Pool + charity */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "0.6rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
                Pool
              </div>
              <div style={{ fontFamily: "monospace", fontWeight: 700, color: isResolved ? "#1DB954" : "#F0B90B", fontSize: "1.05rem" }}>
                {totalSol.toFixed(2)} SOL
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.6rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
                ♥ World Vision
              </div>
              <div style={{ fontFamily: "monospace", fontWeight: 700, color: isResolved ? "#1DB954" : "#F0B90B", fontSize: "0.9rem" }}>
                {totalSol.toFixed(2)} SOL
              </div>
            </div>
          </div>

          {/* Kickoff */}
          <div style={{ fontSize: "0.72rem", color: "#555", borderTop: "1px solid #1a1a1a", paddingTop: "10px" }}>
            {match.kickoffDisplay} · {match.venue}
          </div>

          {/* CTA */}
          <div
            style={{
              background: isResolved ? "#1DB954" : "#F0B90B",
              color: "#0a0a0a",
              fontWeight: 800,
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            {isResolved ? "VIEW RESULTS" : "FUND THIS MATCH →"}
          </div>
        </div>
      </div>
    </Link>
  )
}
