import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const Context = ({ children }) => {
  const [userAccount, setUserAccount] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <AccountContext.Provider
      value={{ userAccount, setUserAccount, open, setOpen }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default Context;
