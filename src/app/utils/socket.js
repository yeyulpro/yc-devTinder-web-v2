import { io } from "socket.io-client";

export const createSocketConnection = () => {
  const socket = io(
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : window.location.origin,
    {
      withCredentials: true,
    }
  );
  return socket;
};

