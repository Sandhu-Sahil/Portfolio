import { Route, BrowserRouter, Navigate } from "react-router-dom";
import LayoutMain from "../screens";
import Errors from "../screens/error/errors";

function MyRoutes() {

    const routes ={
        layout: LayoutMain,
        subRoutes: [
        //   {
        //     exact: true,
        //     path: "/admin",
        //     component: Login,
        //   },
          {
            exact: true,
            path: "/",
            component: Errors,
          },
        ]
    }
    return (
        <>
          <BrowserRouter>
            <Switch>
            <Route exact path="/"><Navigate to="/admin"/></Route>
            <Route
                element={routes.layout}
                path='/'
            >
            <route.layout>
                {routes.subRoutes.map((subRoute, i) => (
                <Route key={i} {...subRoute} />
                ))}
            </route.layout>
            </Route>
            </Switch>
          </BrowserRouter>
        </>
    );
}

export default MyRoutes;
