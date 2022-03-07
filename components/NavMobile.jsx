import React, {useContext} from 'react';
import {HStack, IconButton, Img, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue} from "@chakra-ui/react";
import Link from "next/link";
import {HamburgerIcon} from '@chakra-ui/icons';
import ThemeToggleButton from "./theme-toggle-boutton";
import LangToggleButton from "./lang-toggle-button";
import {LangContext} from "../Hook/LangContext";

const NavMobile = () => {

    const { toggleLang } = useContext(LangContext);

    return (
        <>
            <HStack
                spacing={10}
                h='60px'
                justifyContent='space-between'
                p={'0 10px'}
                bg={useColorModeValue('ffffff40', '#20202380')}
                top={0}
                pos='fixed'
                backdropFilter="blur(10px)"
                zIndex={9999}
                w='100%'
            >
                <HStack spacing={2}>
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
                <HStack spacing={1}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Menu'
                            icon={<HamburgerIcon/>}
                            varian='outline'
                        />
                        <MenuList>
                            <MenuItem>
                                <Text
                                    textUnderlineOffset={6}
                                    _hover={{
                                        textDecoration: 'underline'
                                    }}
                                >
                                    <Link href={'/Experience'} passHref>
                                        {toggleLang ? 'Expériences' : 'Experiences'}
                                    </Link>
                                </Text>
                            </MenuItem>
                            <MenuItem>
                                <Text
                                    textUnderlineOffset={6}
                                    _hover={{
                                        textDecoration: 'underline'
                                    }}
                                >
                                    <Link href={'/Projets'} passHref>
                                        {toggleLang ? 'Projets' : 'Projects'}
                                    </Link>
                                </Text>
                            </MenuItem>
                            <MenuItem>
                                <Text
                                    textUnderlineOffset={6}
                                    _hover={{
                                        textDecoration: 'underline'
                                    }}
                                >
                                    <Link href={'/Competences'} passHref>
                                        {toggleLang ? 'Compétences' : 'Skills'}
                                    </Link>
                                </Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <ThemeToggleButton/>
                    <LangToggleButton/>
                </HStack>
            </HStack>
        </>
    );
};

export default NavMobile;