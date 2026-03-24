'use client'

import { useEffect, useState } from 'react'

export default function ClockPage() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    function update() {
      const now = new Date()
      setTime(now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }))
      setDate(now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }))
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center select-none">
      <div className="text-white text-center">
        <div
          className="font-thin tracking-tighter leading-none"
          style={{ fontSize: 'clamp(80px, 18vw, 200px)', letterSpacing: '-0.06em' }}
        >
          {time}
        </div>
        <div
          className="font-extralight text-white/40 mt-7"
          style={{ fontSize: 'clamp(13px, 2.5vw, 24px)', letterSpacing: '0.15em' }}
        >
          {date}
        </div>
      </div>
    </main>
  )
}
