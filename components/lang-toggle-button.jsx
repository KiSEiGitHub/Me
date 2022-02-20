import { Box, IconButton, Text, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { LangContext } from '../Hook/LangContext';
import { useContext } from 'react';
const LangToggleButton = () => {

    const { lang } = useContext(LangContext)
    const { toggleLang } = useContext(LangContext)
    const { colorMode } = useColorMode();
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Box ml={{ md: '10px' }}>
                <motion.div
                    style={{ display: 'inline-block' }}
                    initial={{ y: - 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    whileTap={{ y: 10 }}
                >
                    <IconButton aria-label="Toggle Theme"
                        colorScheme={useColorModeValue('blue', 'teal')}
                        onClick={lang}
                    >
                        <Text
                            color={colorMode === "light" ? 'white' : 'black'}
                            fontWeight="400"
                        >
                            {toggleLang ? 'EN' : 'FR'}
                        </Text>
                    </IconButton>
                </motion.div>
            </Box>
        </AnimatePresence>
    );
};

export default LangToggleButton