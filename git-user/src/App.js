import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { GitUserList } from "./component/GitUset";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <GitUserList />
      </Switch> */}
      <Switch>
        <Route exact path="/" component={GitUserList} />
        {/* <Route path="/login" component={Login} /> */}

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
