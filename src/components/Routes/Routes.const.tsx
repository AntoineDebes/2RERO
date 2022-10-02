import Homepage from "src/pages/Homepage/Homepage";
import { UseFormContext } from "../UseFormContext";

export const routes = [
  {
    context: <UseFormContext />,
    path: "/",
    component: <Homepage />,
  },
];
