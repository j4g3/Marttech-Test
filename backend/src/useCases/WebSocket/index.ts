import { Broadcast } from "./Broadcast";
import { RemoveSocketOfConnections } from "./RemoveSocketOfConnections";
import { WebSocketUseCase } from "./WebSocketUseCase";
import { WebSocketController } from "./WebSocketController";

const webSocketUseCase = new WebSocketUseCase();
const webSocketController = new WebSocketController(webSocketUseCase);

export { Broadcast, RemoveSocketOfConnections, webSocketController };
