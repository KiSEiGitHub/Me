import { motion } from 'framer-motion';
import { Image, Tooltip } from '@chakra-ui/react';
import { useContext } from 'react';
import { LangContext } from '../Hook/LangContext';

const Message = () => {
    const { toggleLang } = useContext(LangContext);
    if (toggleLang) {
        return 'Déplacez moi !';
    } else {
        return 'Move me !';
    }
};
export const CustomImageOne = ({ src, drag }) => (
    <>
        <Tooltip
            label = {Message()}
            borderRadius = {10}
        >
            <motion.img
                src = {src}
                drag
                dragConstraints = {drag}
                alt = "Profile Picture"
                style = {{
                    cursor       : 'pointer',
                    position     : 'absolute',
                    right        : '50px',
                    top          : '25px',
                    width        : '80px',
                    borderRadius : '50%',
                    border       : '2px solid #fff',
                    zIndex       : 99
                }}
            />
        </Tooltip>
    </>
);

export const CustomImageTwo = ({ src }) => (
    <Image
        src = {src}
        alt = "Profile Picture"
        borderRadius = "full"
        maxW = "90px"
        m = "0 auto"
        border = "2px solid"
        borderColor = "whiteAlpha.800"
    />
);