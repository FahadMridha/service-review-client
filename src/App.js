import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-lime-100">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
