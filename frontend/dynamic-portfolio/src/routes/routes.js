import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";
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
  return (
    <>
      <BrowserRouter>
        <routes.layout/>
        <Routes>
          <Route exact path="/" element={<Navigate to="/admin-portal"/>} />
          {routes?.subRoutes?.map((subRoute, i) => {
            return(<Route key={i} path={subRoute?.path} exact={subRoute?.exact} element={<subRoute.element/>} />)
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
