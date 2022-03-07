import React, {useContext} from 'react';
import {Box, HStack, Img, Text, useColorModeValue} from "@chakra-ui/react";
import Link from 'next/link'
import {NavLink} from "../Layout/NavLink";
import ThemeToggleButton from "./theme-toggle-boutton";
import LangToggleButton from "./lang-toggle-button";
import {LangContext} from "../Hook/LangContext";
import {useRouter} from "next/router";

const Nav = () => {

    const {toggleLang} = useContext(LangContext);
    const {asPath} = useRouter()

    return (
        <>
            <HStack
                spacing={10}
                h='65px'
                justifyContent='center'
                bg={useColorModeValue('ffffff40', '#20202380')}
                pos='fixed'
                top={0}
                backdropFilter="blur(10px)"
                alignItems='center'
                left="50%"
                transform="translateX(-50%)"
                zIndex={9999}
                w='100%'
            >
                <HStack spacing={1}>
                    <Img
                        src={'/Image/moshicatwhite.png'}
                        alt='moshi'
                        w='60px'
                        pos='relative'
                        top='-5px'
                    />
                    <Text
                        fontWeight='bold'
                        fontSize='1.3em'
                        cursor='pointer'
                        textUnderlineOffset={3}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <Link href={'/'} passHref>
                            Tom
                        </Link>
                    </Text>
                </HStack>
                <HStack spacing={5}>
                    <NavLink href={'/Experience'}>
                        <Box
                            bg={asPath === '/Experience' ? '#ff63c3' : ''}
                            p={asPath === '/Experience' ? '5px' : ''}
                            textUnderlineOffset={6}
                            textDecoration={asPath === '/Experience' ? 'underline' : ''}
                        >
                            {toggleLang ? 'Expériences' : 'Experiences'}
                        </Box>
                    </NavLink>
                    <NavLink href={'/Projets'}>
                        <Box
                            bg={asPath === '/Projets' ? '#ff63c3' : ''}
                            p={asPath === '/Projets' ? '5px' : ''}
                            textUnderlineOffset={6}
                            textDecoration={asPath === '/Projets' ? 'underline' : ''}
                        >
                            {toggleLang ? 'Projets' : 'Projects'}
                        </Box>
                    </NavLink>
                    <NavLink href={'/Competences'}>
                        <Box
                            bg={asPath === '/Competences' ? '#ff63c3' : ''}
                            p={asPath === '/Competences' ? '5px' : ''}
                            textUnderlineOffset={6}
                            textDecoration={asPath === '/Competences' ? 'underline' : ''}
                        >
                            {toggleLang ? 'Compétences' : 'Skills'}
                        </Box>
                    </NavLink>
                </HStack>
                <HStack spacing={1}>
                    <ThemeToggleButton/>
                    <LangToggleButton/>
                </HStack>
            </HStack>
        </>
    );
};

export default Nav;