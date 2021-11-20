import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import RoomPages from "./Room";
import Rooms from "./Rooms";
import Signup from "./Signup";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:roomName" component={RoomPages} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
