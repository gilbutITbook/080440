import { useEffect, useState } from "react";

export default function WebSocketTest() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    // 마운트 시 웹소켓 연결 생성
    const socket = new WebSocket("wss://echo.websocket.org");
    setSocket(socket);
    socket.onmessage = (event) => {
      // 서버로부터 메시지를 받으면 화면에 출력
      setMessages((prev) => [...prev, `서버: ${event.data}`]);
    };
    socket.onerror = (error) => {
      console.error("웹소켓 오류:", error);
    };
    socket.onclose = () => {
      console.log("웹소켓 연결 종료");
    };
    return () => {
      socket.close(); // 언마운트 시 웹소켓 연결 정리
    };
  }, []);
  const handleSendMessage = () => {
    // 사용자 메시지를 서버로 전송하고 화면에 표시
    if (socket && socket.readyState === WebSocket.OPEN && message) {
      socket.send(message);
      setMessages((prev) => [...prev, `나: ${message}`]);
      setMessage("");
    } else {
      alert("서버 연결이 끊겼습니다.");
    }
  };
  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요."
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
}
