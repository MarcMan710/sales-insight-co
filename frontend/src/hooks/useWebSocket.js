// hooks/useWebSocket.js
import { useEffect, useRef } from 'react';

export default function useWebSocket(onMessageCallback) {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(import.meta.env.VITE_WS_URL || 'ws://localhost:5000');

    ws.current.onopen = () => {
      console.log('[WebSocket] Connected');
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessageCallback(data);
    };

    ws.current.onclose = () => {
      console.log('[WebSocket] Disconnected');
    };

    return () => {
      ws.current.close();
    };
  }, [onMessageCallback]);
}
