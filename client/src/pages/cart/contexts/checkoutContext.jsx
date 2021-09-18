import React, {createContext, useState} from 'react';

export const CheckOutContext = createContext();

const CheckOutContextProvider = ({children}) =>{

    const [checkoutModalStatus, setCheckOutModalStatus] = useState(false);

    const openCheckoutModal = () =>{
        setCheckOutModalStatus(true);
    }
    const closeCheckoutModal = () =>{
        setCheckOutModalStatus(false);
    }
    const checkoutContextData = {
        checkoutModalStatus,
        openCheckoutModal,
        closeCheckoutModal
    }

    return(
        <CheckOutContext.Provider value={checkoutContextData}>
            {children}
        </CheckOutContext.Provider>
    )
}

export default CheckOutContextProvider;