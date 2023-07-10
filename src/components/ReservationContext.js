import React, { createContext, useState } from 'react';

// Create the context
const ReservationContext = createContext();

// Create a provider component
function ReservationContextProvider({ children }) {

    const [shareData, setShareData] = useState({});

    const updateSharedData = (newData) => {
        setShareData(newData);
    }
  return (
    <ReservationContext.Provider value={{shareData, updateSharedData}}>
      {children}
    </ReservationContext.Provider>
  );
}

export { ReservationContext, ReservationContextProvider };