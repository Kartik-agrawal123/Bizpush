import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <HomeScreen /> },
      {
        path: "/shop",
        element: <ShopScreen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
