import { createContext, useState } from "react";
import { getUserFromStorage } from "../auth/utiles";

const userContext = createContext();

export const MyProvider = ({ children }) => {
  const [userCredentials, setuserCredentials] = useState(() => {
    return getUserFromStorage();
  });

  return (
    <userContext.Provider value={{ userCredentials, setuserCredentials }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
