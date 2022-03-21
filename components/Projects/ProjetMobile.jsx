import React, {useContext} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {Box, Button, Image, Text, useColorMode, useMediaQuery} from "@chakra-ui/react";
import {SectionTitle} from "../../Layout/CustomText";
import Link from "next/link";
import {LangContext} from "../../Hook/LangContext";

const Projet = require('../../Json/Projet.json')
const ProjetPerso = require('../../Json/ProjetPerso.json')
const ProjetCons = require('../../Json/ProjetCons.json')

export const ProjetMobileSchoolOne = () => {

    const {toggleLang} = useContext(LangContext);
    const {colorMode} = useColorMode()

    return (
        <>
            <Box
                d="flex"
                justifyContent='center'
                flexWrap="wrap"
            >
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    style={{
                        maxWidth: '420px'
                    }}
                >
                    {Projet.Projet.map((item) =>
                        <>
                            <SwiperSlide>
                                <Box
                                    mb={10}
                                    maxW="420px"
                                    bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                    pos='relative'
                                    h='500px'
                                    borderRadius={20}
                                >
                                    <Image
                                        src={item['Photo']}
                                        alt="Logo"
                                        borderTopRadius={20}
                                    />
                                    <Box>
                                        <Box
                                            fontWeight="semibold"
                                            as="h4"
                                            lineHeight="tight"
                                            isTruncated
                                            p={4}
                                        >
                                            <SectionTitle>
                                                <Text color='#ff63c3'>
                                                    <Link href={`${item.Link}`} passHref>
                                                        {item['Title']}
                                                    </Link>
                                                </Text>
                                            </SectionTitle>
                                        </Box>
                                        <Box as="h4" p={4}>
                                            {toggleLang
                                                ? item['Description']['fr']
                                                : item['Description']['en']
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>
            </Box>
        </>
    );
};

export const ProjetMobileShcoolTwo = () => {

    const {toggleLang} = useContext(LangContext);
    const {colorMode} = useColorMode()

    return (
        <Box
            d="flex"
            justifyContent='center'
            flexWrap="wrap"
        >
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                style={{
                    maxWidth: '420px'
                }}
            >
                {ProjetPerso.ProjetPerso.map((item) =>
                    <>
                        <SwiperSlide>
                            <Box
                                mb={10}
                                maxW="420px"
                                bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                pos='relative'
                                h='500px'
                                borderRadius={20}
                            >
                                <Image
                                    src={item['Photo']}
                                    alt="Logo"
                                    borderTopRadius={20}
                                />
                                <Box>
                                    <Box
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                        p={4}
                                    >
                                        <SectionTitle>
                                            <Text color='#ff63c3'>
                                                <Link href={`${item.Link}`} passHref>
                                                    {item['Title']}
                                                </Link>
                                            </Text>
                                        </SectionTitle>
                                    </Box>
                                    <Box as="h4" p={4}>
                                        {toggleLang
                                            ? item['Description']['fr']
                                            : item['Description']['en']
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </>
                )}
            </Swiper>
        </Box>
    )
}

export const ProjetMobileThree = () => {

    const {toggleLang} = useContext(LangContext);
    const {colorMode} = useColorMode()

    return (
        <Box
            d="flex"
            justifyContent='center'
            flexWrap="wrap"
        >
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                style={{
                    maxWidth: '420px'
                }}
            >
                {ProjetCons.ProjetCons.map((item) =>
                    <>
                        <SwiperSlide>
                            <Box
                                mb={10}
                                maxW="420px"
                                bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                pos='relative'
                                h='500px'
                                borderRadius={20}
                            >
                                <Image
                                    src={item['Photo']}
                                    alt="Logo"
                                    borderTopRadius={20}
                                />
                                <Box>
                                    <Box
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                        p={4}
                                    >
                                        <SectionTitle>
                                            <Text color='#ff63c3'>
                                                <Link href={`${item.Link}`} passHref>
                                                    {item['Title']}
                                                </Link>
                                            </Text>
                                        </SectionTitle>
                                    </Box>
                                    <Box as="h4" p={4}>
                                        {toggleLang
                                            ? item['Description']['fr']
                                            : item['Description']['en']
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </>
                )}
            </Swiper>
        </Box>
    )
}