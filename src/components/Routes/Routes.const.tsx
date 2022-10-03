import { Homepage } from "src/pages/Homepage";
import { UseFormContext } from "../../context/UseFormContext";

export const routes = [
  {
    context: <UseFormContext />,
    path: "/",
    component: <Homepage />,
  },
];
