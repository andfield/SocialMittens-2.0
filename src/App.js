import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Routes from "./constants/Routes";
import UserContext from "./contexts/user";
import UserStatus from "./hooks/userStatus";

const login = lazy(() => import("./pages/Login"));
const signup = lazy(() => import("./pages/Signup"));
const dashboard = lazy(() => import("./pages/Dashboard"));
const notFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { user } = UserStatus();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        {/* Change this to a loading screen. */}
        <Suspense fallback={<p>Loading ... </p>}>
          <Switch>
            <Route path={Routes.LOGIN} component={login} />
            <Route path={Routes.SIGN_UP} component={signup} />
            <Route path={Routes.DASHBOARD} component={dashboard} />
            <Route component={notFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
