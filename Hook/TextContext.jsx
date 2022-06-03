import { createContext, useState } from 'react';
import Data from '../Json/Data.json';
import BTS from '../Json/bts.json';

export const TextContext = createContext(undefined);

export default function ContextText({ children }) {
    
    const Data = require('../Json/Data.json');
    const DataSkill = Data.Skills;
    const DataExps = Data.Experience;
    const DataLikes = Data.Like;
    const DataProject = Data.Projet;
    const BTSText = BTS.BTS;
    
    return (
        <TextContext.Provider value = {{ Data, DataSkill, DataExps, DataLikes, DataProject, BTSText }}>
            {children}
        </TextContext.Provider>
    );
}