import { createContext, useState } from 'react';
import Data from '../Json/Data.json';
import BTS from '../Json/bts.json';
import Veille from '../Json/Veille.json'
import ImgJs from '../Json/Img.json'

export const TextContext = createContext(undefined);

export default function ContextText({ children }) {
    
    const Data = require('../Json/Data.json');
    const DataSkill = Data.Skills;
    const DataExps = Data.Experience;
    const DataLikes = Data.Like;
    const DataProject = Data.Projet;
    const BTSText = BTS.BTS;
    const BTSVeille = Veille
    const ImgJson = ImgJs
    
    return (
        <TextContext.Provider value = {{ Data, DataSkill, DataExps, DataLikes, DataProject, BTSText, BTSVeille, ImgJson }}>
            {children}
        </TextContext.Provider>
    );
}