# 📺 Screen Share P2P App

React + Go(Gin) 기반의 **화면 공유 P2P 애플리케이션**입니다. 사용자는 방 ID와 사용자 ID를 입력하여 원하는 방에 입장하고, 버튼 클릭으로 화면을 공유할 수 있습니다. WebRTC를 기반으로 P2P 연결을 설정하며, 시그널링 서버는 Go(Gin) + Gorilla WebSocket으로 구현되어 있습니다.

## Stack

### Frongend
- **React** (with TypeScript)
- **Vite**
- **TailwindCSS**
- **ShadCN UI**
- **WebRTC** (`getUserMedia`, `RTCPeerConnection`, etc.)
- **WebSocket** (for signaling)

### Backend
- **Go (Gin Web Framework)**
- **Gorilla WebSocket**
- **Map[Room]Client** 기반의 동적 방 관리

---

## Feature

- ✅ 방 ID, 사용자 ID를 입력해 입장
- ✅ 화면 공유 시작/중지
- ✅ 다수의 방 생성 및 관리 (HashMap 기반)
- ✅ WebRTC를 이용한 실시간 화면 전송 (P2P)
- ✅ WebSocket으로 signaling 처리
