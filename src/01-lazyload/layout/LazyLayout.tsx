import { NavLink, Switch, Route } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout Page</h1>

            {/* Rutas hijas */}
            <ul>
                <li>
                    <NavLink to="lazy1" activeClassName="nav-active">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2" activeClassName="nav-active">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3" activeClassName="nav-active">Lazy 3</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="*/lazy1">
                    <LazyPage1 />
                </Route>
                <Route path="*/lazy2">
                    <LazyPage2 />
                </Route>
                <Route path="*/lazy3">
                    <LazyPage3 />
                </Route>
            </Switch>
        </div>
    )
}

export default LazyLayout; // Exporto por default para que lazy lo pueda tomar