import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useGetUserDetailsQuery } from "./slices/usersApiSlice";
import { setCredentials, clearCredentials } from "./slices/authSlice";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { useLogoutMutation } from "./slices/usersApiSlice";

function App() {
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();

  // 1. Attempt to fetch user data if cookie exists
  const { data: userData, isLoading, isError } = useGetUserDetailsQuery();

  // 2. Update Redux state if successful
  useEffect(() => {
    if (userData) {
      dispatch(setCredentials(userData));
    }
  }, [userData, dispatch]);

  // 3. Handle errors (invalid/expired token)
  useEffect(() => {
    if (isError) {
      const performLogout = async () => {
        try {
          await logoutApiCall().unwrap();
          dispatch(clearCredentials());
          console.log("cleared cred");
        } catch (err) {
          console.error("Logout from app failed", err);
        }
      };
      performLogout();
    }
  }, [isError, logoutApiCall, dispatch]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
