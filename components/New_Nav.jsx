import React from 'react';
import { Box, Button, IconButton, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import ThemeToggleButton from './theme-toggle-boutton';
import LangToggleButton from './lang-toggle-button';
import Link from 'next/link';
import { FaAtlas } from 'react-icons/fa';
import { IoHomeOutline, IoPersonCircleOutline, IoRocketOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

const NewNav = () => {
    
    const { pathname } = useRouter();
    const [Flip] = useMediaQuery('(min-width: 462px)');
    
    return (
        <>
            <Box
                w = "540px"
                h = "70px"
                bg = {useColorModeValue('ffffff40', '#20202380')}
                pos = "fixed"
                borderRadius = {30}
                top = {2}
                d = {'flex'}
                justifyContent = {Flip ? 'space-evenly' : 'center'}
                alignItems = "center"
                left = "50%"
                backdropFilter = "blur(10px)"
                zIndex = {9999}
                transform = "translateX(-50%)"
            >
                <Box
                    borderRadius = {20}
                    bg = {useColorModeValue(pathname === '/' ? '#f5f0e8' : '', pathname === '/' ? '#313134' : '')}
                    p = {3}
                    cursor = "pointer"
                >
                    <Link passHref href = {'/'}>
                        <IoHomeOutline
                            style = {{
                                height : '25px',
                                width  : '25px',
                            }}
                        />
                    </Link>
                
                </Box>
                <Box
                    borderRadius = {20}
                    p = {3}
                    bg = {useColorModeValue(pathname === '/Experience' ? '#f5f0e8' : '', pathname === '/Experience' ? '#313134' : '')}
                    cursor = "pointer"
                >
                    <Link passHref href = {'/Experience'}>
                        <FaAtlas
                            style = {{
                                height : '25px',
                                width  : '25px',
                            }}
                        />
                    </Link>
                </Box>
                <Box
                    borderRadius = {20}
                    p = {3}
                    bg = {useColorModeValue(pathname === '/Competences' ? '#f5f0e8' : '', pathname === '/Competences' ? '#313134' : '')}
                    cursor = "pointer"
                >
                    <Link passHref href = {'/Competences'}>
                        <IoPersonCircleOutline
                            style = {{
                                height : '25px',
                                width  : '25px',
                            }}
                        />
                    </Link>
                </Box>
                <Box
                    borderRadius = {20}
                    p = {3}
                    bg = {useColorModeValue(pathname === '/Projets' ? '#f5f0e8' : '', pathname === '/Projets' ? '#313134' : '')}
                    cursor = "pointer"
                >
                    <Link passHref href = {'/Projets'}>
                        <IoRocketOutline
                            style = {{
                                height : '25px',
                                width  : '25px',
                            }}
                        />
                    </Link>
                </Box>
                <ThemeToggleButton />
                <LangToggleButton />
            </Box>
        </>
    );
};

export default NewNav;
