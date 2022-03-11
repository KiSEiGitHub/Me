import { Center, Text, useColorMode } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { LangContext } from "../Hook/LangContext";

export default function Reserved() {

    const CurrentDate = new Date().getFullYear()
    const { toggleLang } = useContext(LangContext)
    const {colorMode} = useColorMode()

    return (
        <>
            <Center p={10}>
                <Text
                    color={colorMode === 'light' ? '#928c7b' : '#535355'}
                    fontSize={{ sm: '14px', md: '16px' }}
                >
                    © {CurrentDate} Tom LAU. {toggleLang ? "Tous Droits Réservés." : "All Rights Reserved"}
                </Text>
            </Center>
        </>
    );
}
