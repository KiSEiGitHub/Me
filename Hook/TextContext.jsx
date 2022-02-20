import { createContext, useState } from 'react';
import Data from '../components/Data.json';

export const TextContext = createContext(undefined);

export default function ContextText({ children }) {
    
    const Data = require('../components/Data.json');
    const DataSkill = Data.Skills;
    const DataExps = Data.Experience;
    const DataLikes = Data.Like;
    const DataProject = Data.Projet;
    
    return (
        <TextContext.Provider value = {{ Data, DataSkill, DataExps, DataLikes, DataProject }}>
            {children}
        </TextContext.Provider>
    );
}