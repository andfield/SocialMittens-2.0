import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as Routes from './constants/Routes'


const login = lazy(() => import('./pages/Login'))

function App() {
  return (
    <Router>
      {/* Change this to a loading screen. */}
      <Suspense fallback={<p>Loading ... </p>}>
      <Switch>
        <Route path={Routes.LOGIN} component={login} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
