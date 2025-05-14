"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RoomView from "./components/room-view"
import JoinRoom from "./components/join-room"

export default function App() {
  const [connected, setConnected] = useState(false)
  const [roomId, setRoomId] = useState("")
  const [userId, setUserId] = useState("")
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [instanceId, setInstanceId] = useState("")

  // Generate a unique instance ID for this browser window
  useEffect(() => {
    // Create a random ID for this browser instance
    const randomId = Math.random().toString(36).substring(2, 10)
    setInstanceId(randomId)
  }, [])

  const handleJoinRoom = (room: string, id: string) => {
    setRoomId(room)
    setUserId(id)

    // Create WebSocket connection with the instance ID appended
    const fullId = `${id}-${instanceId}`
    const ws = new WebSocket(`wss://[url]/ws?room=${room}&id=${id}`)

    ws.onopen = () => {
      console.log("Connected to WebSocket server with ID:", fullId)
      setConnected(true)
      setSocket(ws)
    }

    ws.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server")
      setConnected(false)
      setSocket(null)
    }
  }

  const handleLeaveRoom = () => {
    if (socket) {
      socket.close()
      setSocket(null)
      setConnected(false)
      setRoomId("")
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Screen Sharing App</CardTitle>
          <CardDescription>Share your screen with others in the same room</CardDescription>
        </CardHeader>
        <CardContent>
          {!connected ? (
            <JoinRoom onJoin={handleJoinRoom} />
          ) : (
            <RoomView
              socket={socket}
              roomId={roomId}
              userId={userId}
              instanceId={instanceId}
              fullUserId={`${userId}-${instanceId}`}
              onLeave={handleLeaveRoom}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
