import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = (props) => {
    const [isValid, setIsValid] = useState(false);

    return (
        <GlobalContext.Provider value={{ isValid, setIsValid }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext, GlobalContext };
