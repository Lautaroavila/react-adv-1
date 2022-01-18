import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

// import * as LazyPage from "../01-lazyload/pages";  y al llamar a los componentes: <LazyPage.LazyPage1 />
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';

import { routes } from './routes';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            { 
              routes.map( ({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} activeClassName="nav-active" exact>{name}</NavLink>
                </li>
              )) 
            }
          </ul>
        </nav>

        <Switch>
          {
            routes.map( ({ path, Component }) => (
                <Route 
                  key={path}
                  path={path}
                >
                  <Component />
                </Route>
            )) 
          }

          {/* <Route path="/*" element={<Navigate to={routes[0].to} replace/>} /> */}
        </Switch>

      </div>
    </Router>
  );
}