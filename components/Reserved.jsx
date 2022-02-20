import { Center, Text } from "@chakra-ui/react";
import React, { useContext } from 'react';
import { LangContext } from "../Hook/LangContext";

export default function Reserved() {

    const CurrentDate = new Date().getFullYear()
    const { toggleLang } = useContext(LangContext)

    return (
        <>
            <Center p={10}>
                <Text
                    color="#535355"
                    fontSize={{ sm: '14px', md: '16px' }}
                >
                    © {CurrentDate} Tom LAU. {toggleLang ? "Tous Droits Réservés." : "All Rights Reserved"}
                </Text>
            </Center>
        </>
    );
}
