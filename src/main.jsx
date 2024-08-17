import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AllJobs from "./pages/AllJobs.jsx";
import JobPage from "./pages/JobPage.jsx";
import SearchForJob from "./pages/SearchForJob.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Error from "./components/Error.jsx";
import UiUnderConstruction from "./pages/UiUnderConstruction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/AllJobs", element: <AllJobs /> },
      { path: "/Job/:id", element: <JobPage /> },
      { path: "/Search", element: <SearchForJob /> },
      { path: "/Contact", element: <ContactPage /> },
      { path: "/ui", element: <UiUnderConstruction /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
