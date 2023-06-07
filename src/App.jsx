import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/authSlice";

export function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

  if(loggedUser && loggedUser.email) {
    dispatch(login(loggedUser))
  }

  return (
    <>
      <BrowserRouter>
        <AppRoutes isAuthenticated={isAuthenticated} />
      </BrowserRouter>
    </>
  );
}
