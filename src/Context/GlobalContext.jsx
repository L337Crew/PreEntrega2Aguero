import React, { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        mostrarAlerta,
        setMostrarAlerta,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;