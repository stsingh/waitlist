import React from 'react'

// Face feature nodes
const nodes = [
  // Face Outline - Top
  { x: 200, y: 40 },
  { x: 160, y: 45 },
  { x: 240, y: 45 },
  { x: 140, y: 60 },
  { x: 260, y: 60 },
  { x: 120, y: 80 },
  { x: 280, y: 80 },
  { x: 110, y: 100 },
  { x: 290, y: 100 },
  // Face Sides
  { x: 100, y: 150 },
  { x: 300, y: 150 },
  { x: 95, y: 200 },
  { x: 305, y: 200 },
  { x: 100, y: 250 },
  { x: 300, y: 250 },
  { x: 110, y: 300 },
  { x: 290, y: 300 },
  // Jaw
  { x: 120, y: 330 },
  { x: 280, y: 330 },
  { x: 140, y: 350 },
  { x: 260, y: 350 },
  { x: 170, y: 360 },
  { x: 230, y: 360 },
  { x: 200, y: 365 },
  // Eyes - Left
  { x: 150, y: 160 },
  { x: 180, y: 160 },
  { x: 140, y: 165 },
  { x: 190, y: 165 },
  { x: 150, y: 170 },
  { x: 180, y: 170 },
  // Eyes - Right
  { x: 220, y: 160 },
  { x: 250, y: 160 },
  { x: 210, y: 165 },
  { x: 260, y: 165 },
  { x: 220, y: 170 },
  { x: 250, y: 170 },
  // Nose
  { x: 200, y: 200 },
  { x: 190, y: 220 },
  { x: 210, y: 220 },
  { x: 180, y: 230 },
  { x: 220, y: 230 },
  { x: 190, y: 240 },
  { x: 210, y: 240 },
  { x: 200, y: 245 },
  // Mouth
  { x: 170, y: 280 },
  { x: 200, y: 280 },
  { x: 230, y: 280 },
  { x: 160, y: 290 },
  { x: 200, y: 295 },
  { x: 240, y: 290 },
  { x: 180, y: 300 },
  { x: 220, y: 300 },
  // Extra facial contour points
  { x: 150, y: 120 },
  { x: 250, y: 120 },
  { x: 140, y: 200 },
  { x: 260, y: 200 },
  { x: 150, y: 250 },
  { x: 250, y: 250 },
]

export const FaceScan = ({ progress }) => {
  const connections = nodes
    .flatMap((node, i) =>
      nodes.slice(i + 1).map((otherNode) => ({
        from: i,
        to: nodes.indexOf(otherNode),
        distance: Math.sqrt(
          Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2),
        ),
      })),
    )
    .filter((conn) => conn.distance < 70)
    .sort((a, b) => a.distance - b.distance)

  const visibleConnections = connections.slice(
    0,
    Math.floor(connections.length * Math.min(1, Math.max(0, progress - 0.4) * 1.5))
  )

  return (
    <div className="w-[300px] h-[400px] bg-transparent relative">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 400 400"
      >
        {visibleConnections.map((conn, i) => (
          <line
            key={`${conn.from}-${conn.to}`}
            x1={nodes[conn.from].x}
            y1={nodes[conn.from].y}
            x2={nodes[conn.to].x}
            y2={nodes[conn.to].y}
            stroke="rgba(0, 0, 0, 0.6)"
            strokeWidth="2"
            className="transition-opacity duration-300"
            style={{
              opacity:
                1 -
                ((visibleConnections.length - i) /
                  visibleConnections.length) *
                  0.5,
            }}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="rgb(0, 0, 0)"
            className="animate-pulse"
          />
        ))}
      </svg>
    </div>
  )
}

export default FaceScan
