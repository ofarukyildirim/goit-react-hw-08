import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export default function PrivateRoute({ component, redirectTo = "/login" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isLoggedIn || isRefreshing ? component : <Navigate to={redirectTo} />;
}
