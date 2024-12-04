import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
  };
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export default ContextProvider;
