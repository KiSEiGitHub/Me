import { CheckIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { LangContext } from '../Hook/LangContext';
import { TextContext } from '../Hook/TextContext';
import Section from '../Layout/Section';
import { ParaIndent, SectionTitle } from '../Layout/CustomText';
import Fade from 'react-reveal/Fade';

const Competences = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { Data } = useContext(TextContext);
    const { DataSkill } = useContext(TextContext);
    
    return (
        <>
            <Section delay = {0.2}>
                <Box>
                    <Fade top>
                        <Box
                            m = "100px auto 10px"
                            p = "25px"
                            w = {{ md : '500px', lg : '700px' }}
                        >
                            <SectionTitle>
                                {toggleLang ? 'Mon histoire' : 'My story'}
                            </SectionTitle>
                            <ParaIndent>
                                {toggleLang
                                    ? Data[ 'Other' ][ 'Story' ][ 'FR' ]
                                    : Data[ 'Other' ][ 'Story' ][ 'EN' ]
                                }
                            </ParaIndent>
                        </Box>
                    </Fade>
                    
                    <Fade bottom>
                        <Flex
                            maxW = "1300px"
                            h = "auto"
                            flexWrap = "wrap"
                            m = "20px auto 20px"
                            justifyContent = "center"
                            p = "20px"
                        >
                            {DataSkill.map((ele) =>
                                <>
                                    <Section delay = {ele[ 'FR' ][ 'Delay' ]}>
                                        <Box
                                            w = {{ sm : 'auto', md : '450px', lg : '550px' }}
                                            h = "auto"
                                            m = "10px"
                                            p = "10px"
                                            flexShrink = "1"
                                        >
                                            <SectionTitle>
                                                {toggleLang
                                                    ? ele[ 'FR' ][ 'Title' ]
                                                    : ele[ 'EN' ][ 'Title' ]
                                                }
                                            </SectionTitle>
                                            <ParaIndent>
                                                {toggleLang
                                                    ? ele[ 'FR' ][ 'Desc' ]
                                                    : ele[ 'EN' ][ 'Desc' ]
                                                }
                                            </ParaIndent>
                                        </Box>
                                    </Section>
                                </>
                            )}
                        </Flex>
                    </Fade>
                    <Fade bottom>
                        <Box
                            w = "80%"
                            h = "auto"
                            p = "0 20px"
                            m = "0 auto"
                        >
                            <Heading
                                variant = "section-title"
                                textAlign = "center"
                                mt = "1px"
                            >
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                {toggleLang
                                    ? 'Vue d\'enssemble'
                                    : 'Quick view'
                                }
                            </Heading>
                            <Box
                                m = "0 auto"
                            
                            >
                                <Text
                                    variant = "ParaIndent"
                                    w = {{ sm : '240px', md : '350px', lg : '650px' }}
                                    m = "0 auto"
                                >
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    {toggleLang
                                        ? Data[ 'Other' ][ 'QuickView' ][ 'FR' ]
                                        : Data[ 'Other' ][ 'QuickView' ][ 'EN' ]
                                    }
                                </Text>
                            </Box>
                        </Box>
                    </Fade>
                    
                    <Fade bottom>
                        <Flex
                            justifyContent = "center"
                            m = "20px auto 0"
                            maxW = "1350px"
                            flexWrap = "wrap"
                        
                        >
                            <Box
                                w = "220px"
                                h = "auto"
                                m = "15px"
                            
                            >
                                <Text variant = "section-title" textAlign = "center">Front-end</Text>
                                <Box>
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "teal" mr = "5px">React</Badge>
                                        <Badge colorScheme = "black">Next</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "yellow">JavaScript</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "green">Node.js</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "red" mr = "5px">HTML</Badge>
                                        <Badge colorScheme = "blue">CSS</Badge>
                                        <Badge colorScheme = "red" ml = "5px">SCSS</Badge>
                                    </Box>
                                </Box>
                            
                            
                            </Box>
                            <Box
                                w = "220px"
                                h = "auto"
                                m = "15px"
                            >
                                <Text variant = "section-title" textAlign = "center">Back-end</Text>
                                <Box>
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "purple">PHP</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "teal">SQL</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "green" mr = "5px" w = "auto">Django</Badge>
                                        <Badge colorScheme = "yellow">Python</Badge>
                                        <Tag size = "sm" pos = "relative" top = "4px" left = "4px">En cours</Tag>
                                    </Box>
                                </Box>
                            
                            </Box>
                            <Box
                                w = "220px"
                                h = "auto"
                                m = "15px"
                            >
                                <Text variant = "section-title" textAlign = "center">
                                    {toggleLang
                                        ? 'Librairies'
                                        : 'Librarys'
                                    }
                                </Text>
                                <Box>
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "green" mr = "5px">GreenSock</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "black" mr = "5px">Framer-motion</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "teal" mr = "5px">Chakra-ui</Badge>
                                    </Box>
                                    
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "purple" mr = "5px">Bootstrap</Badge>
                                    </Box>
                                    <Box>
                                        <span> <CheckIcon /> </span>
                                        <Badge colorScheme = "blue" mr = "5px">Tailwind</Badge>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Fade>
                </Box>
            </Section>
        </>
    )
        ;
};

export default Competences;