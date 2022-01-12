import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth";

const PublicRoute = ({
  redirectTo,
  children,
  onlyNotAuth = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(getIsAuthenticated);
  const shouldRedirect = isLoggedIn && onlyNotAuth;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
