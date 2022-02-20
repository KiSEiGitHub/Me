import { AnimatePresence, motion } from 'framer-motion';
import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Box ml={{ md: '150px' }} mr={{ sm: '6px', md: '1px' }}>
                <motion.div
                    style={{ display: 'inline-block' }}
                    initial={{ y: - 20, opacity: 0 }}
                    key={useColorModeValue('light', 'dark')}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >

                    <IconButton aria-label="Toggle Theme"
                        colorScheme={useColorModeValue('purple', 'orange')}
                        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                        onClick={toggleColorMode}
                    >

                    </IconButton>
                </motion.div>
            </Box>

        </AnimatePresence>
    );
};

export default ThemeToggleButton;