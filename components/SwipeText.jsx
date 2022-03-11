import React from 'react';
import { Text, useColorMode } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const SwipeText = () => {
    
    const {colorMode} = useColorMode()
    
    return (
        <>
            <Text
                textAlign = "center"
                fontStyle = "italic"
                color = {colorMode === 'light' ? '#928c7b' : '#535355'}
                mb = {2}
                fontSize = "0.9em"
            >
                <ArrowBackIcon /> Swipe <ArrowForwardIcon />
            </Text>
        </>
    );
};

export default SwipeText;
