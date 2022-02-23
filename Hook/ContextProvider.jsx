import { createContext } from 'react';
import FunctionCon from './FunctionContext';
import ContextText from './TextContext';
import LanguageContext from './LangContext';

export const ContextProvider = createContext(undefined);

const ContexteProvider = (props) => {
    return (
        <ContextProvider.Provider>
            <FunctionCon>
                <ContextText>
                    <LanguageContext>
                        {props.children}
                    </LanguageContext>
                </ContextText>
            </FunctionCon>
        </ContextProvider.Provider>
    );
};

export default ContexteProvider