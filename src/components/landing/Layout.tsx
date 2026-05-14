import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: '#0a0600' }}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="down"
          speed={0.4}
          squareSize={50}
          borderColor="#3d2b00"
          hoverFillColor="#5c4000"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}