import React, { useContext } from 'react';
import { Box, HStack, Img, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { NavLink } from '../Layout/NavLink';
import ThemeToggleButton from './theme-toggle-boutton';
import LangToggleButton from './lang-toggle-button';
import { LangContext } from '../Hook/LangContext';
import { useRouter } from 'next/router';

const Nav = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { asPath } = useRouter();
    const {colorMode} = useColorMode()
    let color;
    
    if(colorMode === 'light') {
        color = '#3d7aed'
    } else {
        color = '#ff63c3'
    }
    
    return (
        <>
            <Box
                h = "45px"
                bg = {useColorModeValue('ffffff40', '#20202380')}
                pos = "fixed"
                top = {0}
                backdropFilter = "blur(10px)"
                left = "50%"
                transform = "translateX(-50%)"
                w = "100%"
                zIndex = {99999}
                d = "flex"
                alignItems = "center"
                justifyContent = "center"
            >
                <Box
                    w = "200px"
                    h = "45px"
                    m = "10px"
                    d = "flex"
                    alignItems = "center"
                    justifyContent = "center"
                >
                    <Img
                        src = {'/Image/moshicatwhite.png'}
                        alt = "moshi"
                        w = "62px"
                        h = "20"
                        pos = "relative"
                        top = "-5px"
                    />
                    <Text
                        fontWeight = "bold"
                        fontSize = "1.3em"
                        cursor = "pointer"
                        textUnderlineOffset = {3}
                        _hover = {{
                            textDecoration : 'underline'
                        }}
                    >
                        <Link href = {'/'} passHref>
                            Tom
                        </Link>
                    </Text>
                </Box>
                <Box
                    w = "500px"
                    h = "45px"
                    m = "10px"
                    d = "flex"
                    alignItems = "center"
                    justifyContent = "center"
                >
                    <NavLink href = {'/Experience'}>
                        <Box
                            bg = {asPath === '/Experience' ? color : ''}
                            p = {asPath === '/Experience' ? '5px' : ''}
                            color = {asPath === '/Experience' ? '#fff' : ''}
                            textUnderlineOffset = {6}
                            textDecoration = {asPath === '/Experience' ? 'underline' : ''}
                            m = {2}
                        >
                            {toggleLang ? 'Expériences' : 'Experiences'}
                        </Box>
                    </NavLink>
                    <NavLink href = {'/Projets'}>
                        <Box
                            bg = {asPath === '/Projets' ? color : ''}
                            p = {asPath === '/Projets' ? '5px' : ''}
                            color = {asPath === '/Projets' ? '#fff' : ''}
                            textUnderlineOffset = {6}
                            textDecoration = {asPath === '/Projets' ? 'underline' : ''}
                            m = {2}
                        >
                            {toggleLang ? 'Projets' : 'Projects'}
                        </Box>
                    </NavLink>
                    <NavLink href = {'/Bts'}>
                        <Box
                            bg = {asPath === '/Bts' ? color : ''}
                            p = {asPath === '/Bts' ? '5px' : ''}
                            color = {asPath === '/Bts' ? '#fff' : ''}
                            textUnderlineOffset = {6}
                            textDecoration = {asPath === '/Index' ? 'underline' : ''}
                            m = {2}
                        >
                            {toggleLang ? 'BTS' : 'BTS'}
                        </Box>
                    </NavLink>
                    <NavLink href = {'/Competences'}>
                        <Box
                            bg = {asPath === '/Competences' ? color : ''}
                            p = {asPath === '/Competences' ? '5px' : ''}
                            color = {asPath === '/Competences' ? '#fff' : ''}
                            textUnderlineOffset = {6}
                            textDecoration = {asPath === '/Competences' ? 'underline' : ''}
                            m = {2}
                        >
                            {toggleLang ? 'Compétences' : 'Skills'}
                        </Box>
                    </NavLink>
                </Box>
                <Box
                    w = "200px"
                    h = "45px"
                    m = "10px"
                    d = "flex"
                    justifyContent = "center"
                >
                    <ThemeToggleButton />
                    {/*<LangToggleButton />*/}
                </Box>
            </Box>
        </>
    );
};

export default Nav;