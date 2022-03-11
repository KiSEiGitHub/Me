import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Button, Image, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { LangContext } from '../../Hook/LangContext';
import { SectionTitle } from '../../Layout/CustomText';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SwipeText from '../../components/SwipeText';

const Projet = () => {
    
    const { toggleLang } = useContext(LangContext);
    const [BreakPoint] = useMediaQuery('(min-width: 825px)');
    const Projet = require('../../Json/Projet.json');
    const ProjetPerso = require('../../Json/ProjetPerso.json');
    const ProjetCons = require('../../Json/ProjetCons.json');
    const {colorMode} = useColorMode()
    
    return (
        <>
            <Section delay = {0.2}>
                <Box
                    m = "100px auto 0"
                    h = "auto"
                    maxW = "900px"
                    p = {5}
                >
                    <Text
                        variant = "section-title"
                        textAlign = {BreakPoint ? 'center' : 'center'}
                    >
                        {toggleLang ? 'Projets d\'école' : 'School projects'}
                    </Text>
                    <SwipeText />
                    <Box
                        d = "flex"
                        justifyContent = {BreakPoint ? 'space-between' : 'center'}
                        flexWrap = "wrap"
                    >
                        <Swiper
                            pagination = {{
                                dynamicBullets : true,
                            }}
                            grabCursor = {true}
                            modules = {[Pagination]}
                            style = {{
                                maxWidth : '420px'
                            }}
                        >
                            {Projet.Projet.map((item) =>
                                <>
                                    <SwiperSlide>
                                        <Box mb = {10} maxW = "420px">
                                            <Image
                                                src = {item[ 'Photo' ]}
                                                alt = "Logo"
                                            />
                                            <Box p = {1}>
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
                                    </SwiperSlide>
                                </>
                            )}
                        </Swiper>
                    </Box>
                </Box>
            </Section>
            
            
            {/* Projet perso */}
            <Section delay = {0.3}>
                <Box
                    m = "10px auto 0"
                    h = "auto"
                    maxW = "900px"
                    p = {5}
                >
                    <Text
                        variant = "section-title"
                        textAlign = {BreakPoint ? 'center' : 'center'}
                    >
                        {toggleLang ? 'Projets personnel' : 'Personnal projects'}
                    </Text>
                    <Box
                        d = "flex"
                        justifyContent = {BreakPoint ? 'space-between' : 'center'}
                        flexWrap = "wrap"
                    >
                        <Swiper
                            pagination = {{
                                dynamicBullets : true,
                            }}
                            grabCursor = {true}
                            modules = {[Pagination]}
                            style = {{
                                maxWidth : '420px'
                            }}
                        >
                            
                            {ProjetPerso.ProjetPerso.map((item) =>
                                <>
                                    <SwiperSlide>
                                        <Box mb = {10} maxW = "420px">
                                            <Image
                                                src = {item[ 'Photo' ]}
                                                alt = "o" />
                                            
                                            <Box p = {1}>
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
                                    </SwiperSlide>
                                </>
                            )}
                        </Swiper>
                    </Box>
                </Box>
            </Section>
            
            {/* Projet console */}
            <Section delay = {0.3}>
                <Box
                    m = "10px auto 0"
                    h = "auto"
                    maxW = "900px"
                    p = {5}
                >
                    <Text
                        variant = "section-title"
                        textAlign = {BreakPoint ? 'center' : 'center'}
                    >
                        {toggleLang
                            ? 'Projets console'
                            : 'Console projects'
                        }
                    </Text>
                    <Box
                        d = "flex"
                        justifyContent = {BreakPoint ? 'space-between' : 'center'}
                        flexWrap = "wrap"
                    >
                        <Swiper
                            pagination = {{
                                dynamicBullets : true,
                            }}
                            grabCursor = {true}
                            modules = {[Pagination]}
                            style = {{
                                maxWidth : '420px'
                            }}
                        >
                            {ProjetCons.ProjetCons.map((item) =>
                                <>
                                    <SwiperSlide>
                                        <Box  mb = {10} maxW = "420px">
                                            <Image
                                                src = {item[ 'Photo' ]}
                                                alt = "o" />
                                            
                                            <Box p = {1}>
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
                                    </SwiperSlide>
                                </>
                            )}
                        
                        </Swiper>
                    </Box>
                </Box>
            </Section>
        </>
    );
};

export default Projet;
