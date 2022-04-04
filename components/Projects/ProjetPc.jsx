import { Box, Button, Container, Image, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SectionTitle } from '../../Layout/CustomText';
import Link from 'next/link';
import { LangContext } from '../../Hook/LangContext';

const Projet = require('../../Json/Projet.json');
const ProjetPer = require('../../Json/ProjetPerso.json');
const ProjetCons = require('../../Json/ProjetCons.json');


export const ProjetEcole = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { colorMode } = useColorMode();
    const [wrapper] = useMediaQuery(`(max-width: 1166px)`)
    
    return (
        <>
            <Box
                d = "flex"
                justifyContent = "center"
                alignItems = "center"
                h = "auto"
                w = "100%"
                mb = "100px"
                flexWrap = {wrapper ? 'wrap' : 'nowrap'}
            >
                {Projet.Projet.map((item) =>
                    <>
                        <Box
                            maxW = "450px" maxH = "550px"
                            bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}
                            m = "5px 10px"
                            pos = "relative"
                            boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                            borderRadius = {20}
                        >
                            <Box mb = {10}>
                                <Image
                                    src = {item[ 'Photo' ]}
                                    alt = "Logo"
                                    w = "100%"
                                    borderTopRadius = {20}
                                />
                                <Box p = {4}>
                                    <Box
                                        fontWeight = "semibold"
                                        as = "h4"
                                        lineHeight = "tight"
                                        isTruncated
                                    >
                                        <SectionTitle>{item[ 'Title' ]}</SectionTitle>
                                    </Box>
                                    <Box as = "h4" mb = {10}>
                                        {toggleLang
                                            ? item[ 'Description' ][ 'fr' ]
                                            : item[ 'Description' ][ 'en' ]
                                        }
                                    </Box>
                                    <Button
                                        pos = "absolute"
                                        right = {2}
                                        bottom = {2}
                                        colorScheme = "teal"
                                    >
                                        <Link href = {`${item.Link}`} passHref>
                                            En savoir plus
                                        </Link>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
};

export const ProjetPerso = () => {
    
    const { colorMode } = useColorMode();
    const { toggleLang } = useContext(LangContext);
    const [wrapper] = useMediaQuery(`(max-width: 1166px)`)
    
    return (
        <>
            <Box
                d = "flex"
                justifyContent = "center"
                alignItems = "center"
                h = "auto"
                w = "100%"
                mb = "100px"
                flexWrap = {wrapper ? 'wrap' : 'nowrap'}
            >
                {ProjetPer.ProjetPerso.map((item) =>
                    <>
                        <Box
                            maxW = "450px" maxH = "550px"
                            bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}
                            m = "5px 10px"
                            pos = "relative"
                            boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                            borderRadius = {20}
                        >
                            <Box mb = {10}>
                                <Image
                                    src = {item[ 'Photo' ]}
                                    alt = "Logo"
                                    w = "100%"
                                    borderTopRadius = {20}
                                />
                                <Box p = {4}>
                                    <Box
                                        fontWeight = "semibold"
                                        as = "h4"
                                        lineHeight = "tight"
                                        isTruncated
                                    >
                                        <SectionTitle>{item[ 'Title' ]}</SectionTitle>
                                    </Box>
                                    <Box as = "h4" mb = {10}>
                                        {toggleLang
                                            ? item[ 'Description' ][ 'fr' ]
                                            : item[ 'Description' ][ 'en' ]
                                        }
                                    </Box>
                                    <Button
                                        pos = "absolute"
                                        right = {2}
                                        bottom = {2}
                                        colorScheme = "teal"
                                    >
                                        <Link href = {`${item.Link}`} passHref>
                                            En savoir plus
                                        </Link>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
};

export const ProjetConsole = () => {
    
    const { colorMode } = useColorMode();
    const { toggleLang } = useContext(LangContext);
    const [wrapper] = useMediaQuery(`(max-width: 1166px)`)
    
    return (
        <>
            <Box
                d = "flex"
                justifyContent = "center"
                alignItems = "center"
                h = "auto"
                w = "100%"
                mb = "100px"
                flexWrap = {wrapper ? 'wrap' : 'nowrap'}
            >
                {ProjetCons.ProjetCons.map((item) =>
                    <>
                        <Box
                            maxW = "450px" maxH = "550px"
                            bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}
                            m = "5px 10px"
                            pos = "relative"
                            boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                            borderRadius = {20}
                        >
                            <Box mb = {10}>
                                <Image
                                    src = {item[ 'Photo' ]}
                                    alt = "Logo"
                                    w = "100%"
                                    borderTopRadius = {20}
                                />
                                <Box p = {4}>
                                    <Box
                                        fontWeight = "semibold"
                                        as = "h4"
                                        lineHeight = "tight"
                                        isTruncated
                                    >
                                        <SectionTitle>{item[ 'Title' ]}</SectionTitle>
                                    </Box>
                                    <Box as = "h4" mb = {10}>
                                        {toggleLang
                                            ? item[ 'Description' ][ 'fr' ]
                                            : item[ 'Description' ][ 'en' ]
                                        }
                                    </Box>
                                    <Button
                                        pos = "absolute"
                                        right = {2}
                                        bottom = {2}
                                        colorScheme = "teal"
                                    >
                                        <Link href = {`${item.Link}`} passHref>
                                            En savoir plus
                                        </Link>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </>
    
    );
};