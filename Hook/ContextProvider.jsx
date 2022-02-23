import { createContext } from 'react';
import FunctionCon from './FunctionContext';
import ContextText from './TextContext';
import LanguageContext from './LangContext';
import CompContext from './ComponentsContext';

export const ContextProvider = createContext(undefined);

const ContexteProvider = (props) => {
    return (
        <ContextProvider.Provider>
            <FunctionCon>
                <ContextText>
                    <LanguageContext>
                        <CompContext>
                            {props.children}
                        </CompContext>
                    </LanguageContext>
                </ContextText>
            </FunctionCon>
        </ContextProvider.Provider>
    );
};

export default ContexteProvider;