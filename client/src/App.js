import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Username, Password, NotFound, Profile, Recovery, Register, Reset
} from "./components";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/password",
    element: <Password />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/recovery",
    element: <Recovery />
  },
  {
    path: "/reset",
    element: <Reset />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App