import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../components/Homepage";
import App from "../App";
import { ContentBody } from "../components/ContentBody";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "profile", element: <ContentBody /> }
    ]
  }
]);
