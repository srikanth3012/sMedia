import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Body from "./Componants/Body";
import Store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Log_in from "./Componants/Page_1/Log_in";
import Homepage from "./Componants/Page_2/Homepage";
import Users from "./Componants/Page3/Users";
import Profile from "./Componants/Page_4/Profile";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Log_in />,
      },
      {
        path: "/newsFeed",
        element: <Homepage />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
