import {Badge, Box, Flex, Heading, HStack, Tag, Text, useColorMode, VStack} from '@chakra-ui/react';
import {useContext} from 'react';
import {LangContext} from '../Hook/LangContext';
import {TextContext} from '../Hook/TextContext';
import Section from '../Layout/Section';
import {ParaIndent, SectionTitle} from '../Layout/CustomText';
import Fade from 'react-reveal/Fade';

const Competences = () => {

    const {toggleLang} = useContext(LangContext);
    const {Data} = useContext(TextContext);
    const {DataSkill} = useContext(TextContext);
    const {colorMode} = useColorMode();

    return (
        <>
            <Section delay={0.2}>
                <Box>
                    <Fade top>
                        <Box
                            m="100px auto 10px"
                            p="25px"
                            w={{md: '500px', lg: '700px'}}
                        >
                            <SectionTitle>
                                {toggleLang ? 'Mon histoire' : 'My story'}
                            </SectionTitle>
                            <ParaIndent>
                                {toggleLang
                                    ? Data['Other']['Story']['FR']
                                    : Data['Other']['Story']['EN']
                                }
                            </ParaIndent>
                        </Box>
                    </Fade>

                    <Fade bottom>
                        <Flex
                            maxW="1300px"
                            h="auto"
                            flexWrap="wrap"
                            m="20px auto 20px"
                            justifyContent="center"
                            p="20px"
                        >
                            {DataSkill.map((ele) =>
                                <>
                                    <Section delay={ele['FR']['Delay']}>
                                        <Box
                                            w={{sm: 'auto', md: '450px', lg: '550px'}}
                                            h="auto"
                                            m="10px"
                                            p="10px"
                                            flexShrink="1"
                                        >
                                            <SectionTitle>
                                                {toggleLang
                                                    ? ele['FR']['Title']
                                                    : ele['EN']['Title']
                                                }
                                            </SectionTitle>
                                            <ParaIndent>
                                                {toggleLang
                                                    ? ele['FR']['Desc']
                                                    : ele['EN']['Desc']
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
                            w={{sm: '80%', md: '80%', lg : '800px'}}
                            h="auto"
                            p="0 20px"
                            m="0 auto"
                        >
                            <Heading
                                variant="section-title"
                                textAlign="center"
                                mt="1px"
                            >
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                {toggleLang
                                    ? 'Vue d\'enssemble'
                                    : 'Quick view'
                                }
                            </Heading>
                            <Box
                                m="0 auto"
                            >
                                <Text variant="ParaIndent">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    {toggleLang
                                        ? Data['Other']['QuickView']['FR']
                                        : Data['Other']['QuickView']['EN']
                                    }
                                </Text>
                            </Box>
                        </Box>
                    </Fade>

                    <Fade bottom>
                        <Flex
                            maxW='1200px'
                            h='auto'
                            m='70px auto 0'
                            flexWrap='wrap'
                            justifyContent='center'
                            alignItems='baseline'
                        >
                            <Box
                                w='350px'
                                h='auto'
                                bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                m='10px 20px'
                                borderRadius={15}
                            >
                                <Text
                                    variant='section-title'
                                    textAlign='center'
                                >
                                    Front-end
                                </Text>
                                <Box p={5}>
                                    <VStack spacing={2}>
                                        <HStack spacing={2}>
                                            <Tag variant='subtle' colorScheme='red'>HTML</Tag>
                                            <Tag variant='subtle' colorScheme='blue'>CSS</Tag>
                                            <Tag variant='subtle' colorScheme='yellow'>Javascript</Tag>
                                            <Tag variant='subtle' colorScheme='teal'>React.js</Tag>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <Tag variant='subtle' colorScheme='black'>Next.js</Tag>
                                            <Tag variant='subtle' colorScheme='red'>SCSS</Tag>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </Box>
                            <Box
                                w='350px'
                                h='auto'
                                bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                m='10px 20px'
                                borderRadius={15}
                            >
                                <Text
                                    variant='section-title'
                                    textAlign='center'
                                >
                                    Back-end
                                </Text>
                                <Box p={5}>
                                    <HStack spacing={2}>
                                        <Tag variant='subtle' colorScheme='purple'>PHP</Tag>
                                        <Tag variant='subtle' colorScheme='teal'>SQL</Tag>
                                        <Tag variant='subtle' colorScheme='green'>Python / Django</Tag>
                                    </HStack>
                                </Box>
                            </Box>
                            <Box
                                w='350px'
                                h='auto'
                                bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                m='10px 20px'
                                borderRadius={15}
                            >
                                <Text
                                    variant='section-title'
                                    textAlign='center'
                                >
                                    Librairies
                                </Text>
                                <Box p={5}>
                                    <VStack spacing={2}>
                                        <HStack spacing={2}>
                                            <Tag variant='subtle' colorScheme='green'>GreenSock</Tag>
                                            <Tag variant='subtle' colorScheme='black'>Framer-Motion</Tag>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <Tag variant='subtle' colorScheme='teal'>Chakra-UI</Tag>
                                            <Tag variant='subtle' colorScheme='purple'>Bootstrap</Tag>
                                            <Tag variant='subtle' colorScheme='teal'>Tailwind</Tag>
                                        </HStack>
                                    </VStack>
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