import { handleNewMessage } from "./chat";
import { handelDisconnected, handleNewUser } from "./notifications";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";
import { handlePlayerUpdate } from "./players";

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handelDisconnected);
  aSocket.on(events.newMsg, handleNewMessage);
  aSocket.on(events.beganPath, handleBeganPath);
  aSocket.on(events.strokedPath, handleStrokedPath);
  aSocket.on(events.filled, handleFilled);
  aSocket.on(events.playerUpdate, handlePlayerUpdate);
};
