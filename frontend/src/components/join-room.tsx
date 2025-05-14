"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface JoinRoomProps {
  onJoin: (room: string, id: string) => void
}

export default function JoinRoom({ onJoin }: JoinRoomProps) {
  const [room, setRoom] = useState("")
  const [id, setId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (room && id) {
      onJoin(room, id)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="room">Room ID</Label>
        <Input id="room" placeholder="Enter room ID" value={room} onChange={(e) => setRoom(e.target.value)} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="userId">Your ID</Label>
        <Input id="userId" placeholder="Enter your ID" value={id} onChange={(e) => setId(e.target.value)} required />
      </div>

      <Button type="submit" className="w-full">
        Join Room
      </Button>
    </form>
  )
}
