import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Container, Divider, LinkBox, SimpleGrid, Text } from '@chakra-ui/react';
import Section from '../Layout/Section';
import { LangContext } from '../Hook/LangContext';
import { GridItem } from '../components/Griditem';

import PPE from '../public/Image/Project/AirTrack/airtrack-logo.png';
import { SectionTitle } from '../Layout/CustomText';

const Projet = () => {
    
    const { toggleLang } = useContext(LangContext);
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.2}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Text variant = "section-title">{toggleLang ? 'École' : 'School'}</Text>
                    <SimpleGrid columns = {2} spacingX = "40px" spacingY = "20px">
                        <Box height = "120px">
                            <GridItem
                                title = {toggleLang
                                    ? 'Gestion des pilotes d\'air France'
                                    : 'Air France pilots management'
                                }
                                thumbnail = {PPE}
                                href = {'./Projets/AirTrack'}
                            />
                        </Box>
                    </SimpleGrid>
                </Section>
                
                <Divider />
                
                <Section delay = {0.3}>
                    <Text variant = "section-title">
                        {toggleLang
                            ? 'Personnel'
                            : 'Personnal'
                        }
                    </Text>
                    <SimpleGrid columns = {2} spacingX = "40px" spacingY = "20px" textAlign = "center">
                        <Box height = "120px">
                            <LinkBox cursor = "pointer">
                                {/* eslint-disable-next-line @next/next/link-passhref */}
                                <Link href = {'./Projets/Portfolio'}>
                                    <Text variant = "ProjetLink">Portfolio</Text>
                                </Link>
                            </LinkBox>
                        </Box>
                    </SimpleGrid>
                </Section>
                
                <Divider />
                
                <Section delay = {0.4}>
                    <SectionTitle>Console</SectionTitle>
                    <SimpleGrid columns = {2} spacingX = "40px" spacingY = "20px" textAlign = "center">
                        <Box height = "120px">
                            <LinkBox cursor = "pointer">
                                {/* eslint-disable-next-line @next/next/link-passhref */}
                                <Link href = {'./Projets/Mastermind'}>
                                    <Text variant = "ProjetLink">Mastermind</Text>
                                </Link>
                            </LinkBox>
                        </Box>
                    </SimpleGrid>
                </Section>
            
            </Container>
        </>
    );
};

export default Projet;
