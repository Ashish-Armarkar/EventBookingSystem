import Login from "./Login";
import { userData } from "../services/apiCall";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userAuth } from "./utiles";
import userContext from "../Store/store";
const LoginDataLayer = () => {
  const [users, setUsers] = useState(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const { setuserCredentials } = useContext(userContext);

  useEffect(() => {
    (async () => {
      let data = await userData();
      setUsers(data);
    })();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentUserEmail = email.value;
    let currentUserPassword = password.value;
    let res = userAuth(
      currentUserEmail,
      window.btoa(currentUserPassword),
      users
    );

    if (res !== "userNotFound") {
      setuserCredentials(res);
      navigate("/app/events");
    } else if (res == "userNotFound") {
      setIsPasswordCorrect(true);
    }
  };
  return (
    <>
      <Login
        handleSubmit={handleSubmit}
        isPasswordCorrect={isPasswordCorrect}
      />
    </>
  );
};

export default LoginDataLayer;
