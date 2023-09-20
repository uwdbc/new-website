import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function RootBoundary() {
  const error = useRouteError();

  function getErrorMessasge() {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <div>Error 404 - This page doesn't exist!</div>;
      }

      if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
      }

      if (error.status === 503) {
        return <div>Looks like our API is down</div>;
      }

      if (error.status === 418) {
        return <div>🫖</div>;
      }
      return <div>Something went wrong</div>;
    }
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {getErrorMessasge()}
      <Link to="/" className="cursor-pointer text-gold underline">
        Go back home
      </Link>
    </div>
  );
}

export default RootBoundary;
