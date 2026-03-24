import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clock',
  description: '大黑屏时钟',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
