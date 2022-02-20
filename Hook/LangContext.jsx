import { createContext, useState } from 'react';

export const LangContext = createContext(undefined);

const LanguageContext = (props) => {
    const [toggleLang, setToggleLang] = useState(true);

    const lang = () => {
        setToggleLang(!toggleLang);
    };

    const ReturnLang = () => {
        if (toggleLang) {
            const title = 'Je suis désolé';
            const description = 'Je n\'ai pas de projet à vous présentez pour le moment... Mise à part se portfolio';
            return [title, description];
        } else {
            const title = 'I\'m sorry';
            const description = 'I have no project at the moment... Except this portfolio';
            return [title, description];
        }
    };

    const TaostLang = ReturnLang();

    const MoshiCat = () => {
        if (toggleLang) {
            return 'Coucou !';
        } else {
            return 'Hi !';
        }
    };

    const MoshiCatLang = MoshiCat();

    return (
        <LangContext.Provider value={{ lang, toggleLang, TaostLang, MoshiCatLang }}>
            {props.children}
        </LangContext.Provider>
    );
};

export default LanguageContext;