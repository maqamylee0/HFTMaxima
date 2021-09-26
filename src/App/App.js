import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import NewsPage from "../Components/News/NewsPage";
import Support from "../Components/Support/Support";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import AlgoInterface from "../Components/Algorithm/AlgoInterface";
import Forgot from "../Components/forgot/Forgot";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/forgot" component={Forgot} />
        <Route exact path="/algorithm" component={AlgoInterface} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
