import Link from 'next/link';
import ThemeToggleButton from './theme-toggle-boutton';
import {
    Box, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton, useColorMode, HStack, useColorModeValue, Tooltip, Img
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import LangToggleButton from './lang-toggle-button';
import { LangContext } from '../Hook/LangContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const TomTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  position: relative;
  top: -2px;
  cursor: pointer;
  margin-right: 10px;
`;

const Navbar = () => {
    
    const { colorMode } = useColorMode();
    const { toggleLang } = useContext(LangContext);
    const { MoshiCatLang } = useContext(LangContext);
    const router = useRouter();
    
    return (
        <Box
            w = "100%"
            h = "60px"
            backdropFilter = "blur(10px)"
            bg = {useColorModeValue('#ffffff40', '#20202380')}
            pos = "fixed"
            top = {0}
            zIndex = {9999}
            d = "flex"
            alignItems = "center"
            justifyContent = "center"
        >
            <Tooltip
                label = {MoshiCatLang}
                borderRadius = {10}
                pos = "relative"
                top = "-20px"
                zIndex = {9999}
            >
                <Img
                    src = {colorMode === 'light' ? '/Image/moshicatdark.png' : '/Image/moshicatwhite.png'}
                    w = {65}
                    alt = "logo"
                    pos = "relative"
                    top = "-3px"
                    right = "5px"
                />
            </Tooltip>
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href = "/">
                <Box
                    textDecoration = {router.pathname === '/' ? 'underline' : ''}
                    textUnderlineOffset = {4}
                >
                    <TomTitle>Tom</TomTitle>
                </Box>
            </Link>
            <HStack spacing = {2} d = {{ sm : 'none', md : 'flex' }} alignItems = "center" h = "40px"
                    justifyContent = "center">
                
                <Link href = "/Experience" passHref>
                    <Box
                        backgroundColor = {router.pathname === '/Experience' ? 'teal.300' : ''}
                        p = {1}
                        color = {router.pathname === '/Experience' ? 'black' : ''}
                        textDecoration = {router.pathname === '/Experience' ? 'underline' : ''}
                        textUnderlineOffset = {4}
                        cursor = "pointer"
                    >
                        {toggleLang ? 'Expériences' : 'Experiences'}
                    </Box>
                </Link>
                <Link href = "/Projets" passHref>
                    <Box
                        backgroundColor = {router.pathname === '/Projets' ? 'teal.300' : ''}
                        p = {1}
                        color = {router.pathname === '/Projets' ? 'black' : ''}
                        textDecoration = {router.pathname === '/Projets' ? 'underline' : ''}
                        textUnderlineOffset = {4}
                        cursor = "pointer"
                    >
                        {toggleLang ? 'Projets' : 'Projects'}
                    </Box>
                </Link>
                <Link href = "/Competences" passHref>
                    <Box
                        backgroundColor = {router.pathname === '/Competences' ? 'teal.300' : ''}
                        p = {1}
                        color = {router.pathname === '/Competences' ? 'black' : ''}
                        textDecoration = {router.pathname === '/Competences' ? 'underline' : ''}
                        textUnderlineOffset = {4}
                        cursor = "pointer"
                    >
                        {toggleLang ? 'Compétences' : 'Skills'}
                    </Box>
                </Link>
                <Link href = "/News" passHref>
                    <Box
                        backgroundColor = {router.pathname === '/News' ? 'teal.300' : ''}
                        p = {1}
                        color = {router.pathname === '/News' ? 'black' : ''}
                        textDecoration = {router.pathname === '/News' ? 'underline' : ''}
                        textUnderlineOffset = {4}
                        cursor = "pointer"
                    >
                        {toggleLang ? 'Nouveautés' : 'News'}
                    </Box>
                </Link>
            </HStack>
            <Box d = {{ sm : 'block', md : 'none' }} mr = {2}>
                <Menu>
                    <MenuButton
                        as = {IconButton}
                        aria-label = "Menu"
                        icon = {<HamburgerIcon />}
                        variant = "outline"
                    />
                    <MenuList bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}>
                        <MenuItem>
                            <Link href = {'/Competences'}>
                                <a>
                                    {toggleLang ? 'Compétences' : 'Skills'}
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href = {'/Projets'}>
                                {toggleLang ? 'Projets' : 'Projects'}
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href = {'/Experience'}>
                                <a>
                                    {toggleLang ? 'Expériences' : 'Experiences'}
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href = {'/News'}>
                                <a>
                                    {toggleLang ? 'Nouveautés' : 'News'}
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <ThemeToggleButton />
            <LangToggleButton />
        </Box>
    
    );
};

export default Navbar;