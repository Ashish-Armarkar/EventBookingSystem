import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../Store/store";
const AccessGuard = ({ children }) => {
  const navigate = useNavigate();

  const { userCredentials } = useContext(userContext);

  useEffect(() => {
    if (!userCredentials) navigate("/");
  }, [userCredentials, navigate]);

  if (!userCredentials) return null;
  return <>{children}</>;
};

export default AccessGuard;
