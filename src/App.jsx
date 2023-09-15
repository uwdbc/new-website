import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = Object.keys(pages).map((path) => {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) return;

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  return {
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  };
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    })),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
