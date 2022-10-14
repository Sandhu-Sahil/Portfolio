import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";
import LayoutMainAdmin from "../adminScreens";
import LayoutMain from "../screens";
import Errors from "../screens/error/errors";

function MyRoutes() {
  const routes ={
    layout: LayoutMain,
    subRoutes: [
      {
        exact: true,
        path: "/",
        element: Errors,
      },
    ]
  }
  const routesAdmin = {
    layout: LayoutMainAdmin,
    subRoutes: [
      {
        exact: true,
        path: "/admin-portal",
        element: Errors,
      },
    ]
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/admin-portal"/>} />
          {routes?.subRoutes?.map((subRoute, i) => {
            return(<Route key={i} path={subRoute?.path} exact={subRoute?.exact} element={<routes.layout><subRoute.element/></routes.layout>} />)
          })}
          {routesAdmin?.subRoutes?.map((subRoute, i) => {
            return(<Route key={i} path={subRoute?.path} exact={subRoute?.exact} element={<routesAdmin.layout><subRoute.element/></routesAdmin.layout>} />)
          })}
        </Routes>
        {/* {routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.subRoutes.map((r) => {return(r.path)})}
          >
            <route.layout>
              {route.subRoutes.map((subRoute, i) => (
                <Route key={i} path={subRoute?.path} exact={subRoute?.exact} element={<subRoute.element/>} />
              ))}
            </route.layout>
          </Route>
        ))} */}
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
