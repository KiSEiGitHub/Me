import {Box, Button, Flex, Text, useColorMode, useMediaQuery} from '@chakra-ui/react';
import React, {useContext} from 'react';
import {ParaIndent, SectionTitle} from '../../Layout/CustomText';
import Section from '../../Layout/Section';
import {LangContext} from '../../Hook/LangContext';
import Link from 'next/link';
import {ArrowForwardIcon} from '@chakra-ui/icons';

const Projet = (props) => {

    const {colorMode} = useColorMode();
    const {toggleLang} = useContext(LangContext);
    const [flipe] = useMediaQuery('(max-width: 1296px)')

    return (
        <>
            <Box m="90px auto" p={2} d="block" maxW="1200px" h="auto">
                <Section delay={0.2}>
                    <Box
                        textAlign={flipe ? 'center' : ''}
                        pos='relative'
                        left={flipe ? '' : '50px'}
                    >
                        <SectionTitle>
                            {toggleLang
                                ? 'Expérience professionnel'
                                : 'Professional experience'
                            }
                        </SectionTitle>
                    </Box>
                    <Flex
                        h="auto"
                        justifyContent="center"
                        flexWrap="wrap"
                        alignItems="center"
                    >
                        {props.array.map((item) =>
                            <>
                                <Box
                                    w="532px"
                                    h="250px"
                                    boxShadow='rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
                                    bg={colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                    m="10px"
                                    p={5}
                                    borderRadius={20}
                                    pos="relative"
                                >
                                    <SectionTitle>
                                        {item.name}
                                    </SectionTitle>
                                    <ParaIndent>
                                        {item['job']['fr']}
                                    </ParaIndent>

                                    <Button
                                        mt={5}
                                        pos="absolute"
                                        right={5}
                                        bottom={5}
                                        colorScheme="teal"
                                    >
                                        <Link href={`Experience/${item.name}`} passHref>
                                            <ArrowForwardIcon/>
                                        </Link>
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Flex>
                </Section>
            </Box>

        </>
    );
};

export default Projet;

export async function getStaticProps() {
    const data = await import('../../Json/Exp.json');
    const array = data.Experience;

    return {
        props: {
            array
        }
    };
}