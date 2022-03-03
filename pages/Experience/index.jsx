import { Button, Container, Flex, useColorMode } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SectionTitle } from '../../Layout/CustomText';
import Section from '../../Layout/Section';
import { LangContext } from '../../Hook/LangContext';
import { SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { LinkBox } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Projet = (props) => {
    
    const { colorMode } = useColorMode();
    const { toggleLang } = useContext(LangContext);
    return (
        <>
            <Box m = "90px auto" d = "block" maxW = "1200px" h = "auto">
                <Section delay = {0.2}>
                    <SectionTitle>
                        {toggleLang
                            ? 'Expérience professionnel'
                            : 'Professional experience'
                        }
                    </SectionTitle>
                    <Flex
                        h = "auto"
                        justifyContent = "space-between"
                        flexWrap = "wrap"
                        alignItems = "center"
                    >
                        {props.array.map((item) =>
                            <>
                                <Box
                                    w = "580px"
                                    h = "250px"
                                    bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                    m = "10px"
                                    p = {5}
                                    borderRadius = {20}
                                    pos = "relative"
                                >
                                    <SectionTitle>
                                        {item.name}
                                    </SectionTitle>
                                    <Text>
                                        {item[ 'job' ][ 'fr' ]}
                                    </Text>
                                    
                                    <Button
                                        mt = {5}
                                        pos = "absolute"
                                        right = {5}
                                        bottom = {5}
                                        colorScheme = "teal"
                                    >
                                        <Link href = {`Experience/${item.name}`} passHref>
                                            <ArrowForwardIcon />
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
        props : {
            array
        }
    };
}