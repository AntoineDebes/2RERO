import { FC } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import { routes } from "src/components/Routes/Routes.const";

const Routes: FC = () => {
  return (
    <ReactRoutes>
      {routes.map((item: any, i: number) => (
        <Route key={i} element={item.context}>
          <Route path={item.path} element={item.component} />
        </Route>
      ))}
    </ReactRoutes>
  );
};

export default Routes;
