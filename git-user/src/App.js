import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { GitUserList } from "./component/GitUser";
import { GitUserView } from "./component/GituserView";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <GitUserList />
      </Switch> */}
      <Switch>
        <Route exact path="/" component={GitUserList} />
        <Route path="/view" component={GitUserView} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
