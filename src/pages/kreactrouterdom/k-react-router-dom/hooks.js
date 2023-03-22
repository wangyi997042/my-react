import { useContext } from "react";
import RouterContext from "./RouterContext";

export const useHistory = () => useContext(RouterContext).history
export const useLocation = () => useContext(RouterContext).location
export const useRouteMatch = () => useContext(RouterContext).match

export const useParams = () => {
  const { match } = useContext(RouterContext);
  return match ? match.params : {};
}
