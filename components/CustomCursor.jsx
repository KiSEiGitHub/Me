import React, { useEffect, useRef } from 'react';
import { Box, color, useColorMode } from '@chakra-ui/react';

const CustomCursor = () => {

    const CursRef = useRef(null);
    const { colorMode } = useColorMode();

    console.log(colorMode);

    useEffect(() => {
        document.addEventListener('mousemove', event => {
            const { clientX, clientY } = event;
            const mouseX = clientX - CursRef.current.clientWidth + 13;
            const mouseY = clientY - CursRef.current.clientHeight - 85;
            CursRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    }, []);

    return (
        <Box d={{ sm: 'none', md: 'none', lg: 'block' }}>
            <div style={{
                zIndex: 99999,
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                backgroundColor: colorMode === 'light' ? 'white ' : 'white',
                border: '3px solid none',
                pointerEvents: 'none',
                overflow: 'hidden',
                position: 'fixed',
                mixBlendMode: 'difference',
            }}
                ref={CursRef}
            >
            </div>
        </Box>

    );
};

export default CustomCursor;
