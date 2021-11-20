import { IConnectionRoomWebSocket } from "../../../types/main";

export const RemoveSocketOfConnections = (
  connections: IConnectionRoomWebSocket[],
  roomId: number,
  connectionId: number
) =>
  connections[roomId].clients.filter((client, index) => index !== connectionId);
