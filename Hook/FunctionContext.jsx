import { createContext, useState } from 'react';

export const Functioncontext = createContext(undefined);

import React from 'react';

const FunctionCon = (props) => {
    const [valuetwo, setValue2] = useState('06 75 98 14 30');
    const [isCopied, setisCopied] = useState(false);
    
    const Copie = (para) => {
        navigator.clipboard.writeText(para);
        setisCopied(!isCopied);
        setTimeout(() => {
            setisCopied(false);
        }, 500);
    };
    
    return (
        <Functioncontext.Provider value = {{Copie, valuetwo, isCopied}}>
            {props.children}
        </Functioncontext.Provider>
    );
};

export default FunctionCon;
