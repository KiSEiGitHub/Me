import React, { useContext } from 'react';
import { Container, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Section from '../Layout/Section';
import Link from 'next/link';
import { LangContext } from '../Hook/LangContext';
import { SectionTitle } from '../Layout/CustomText';

const News = () => {
    
    const { toggleLang } = useContext(LangContext);
    
    return (
        <>
            <Container variant = "Main">
                <Section delay={0.2}>
                    <SectionTitle>21/02/2022</SectionTitle>
                    <UnorderedList>
                        <ListItem>
                            {toggleLang
                                ? "Accordéon pour la partie ❤️ en mode téléphone"
                                : "Accordion for the ❤️ section on mobile"
                            }
                        </ListItem>
                        <ListItem>
                            {toggleLang
                                ? "Page projet retravaillé"
                                : "Rework project page"
                            }
                        </ListItem>
                    </UnorderedList>
                </Section>
                <Section delay = {0.3}>
                    <SectionTitle>08/02/2022</SectionTitle>
                    <UnorderedList>
                        <ListItem>
                            {toggleLang ? 'Ajout du projet' : 'Adding'} {' '}
                            <Link href = {'/Projets/Portfolio'} passHref>
                                <Text variant = "ProjetLink" d = "inline" cursor = "pointer">
                                    Portfolio
                                </Text>
                            </Link>
                            {' '} {toggleLang ? '' : 'project'}
                        </ListItem>
                        <ListItem>
                            {toggleLang
                                ? 'Traduction du projet portfolio'
                                : 'Traduction of the portfolio project'
                            }
                        </ListItem>
                        <ListItem>
                            {toggleLang
                                ? 'Traduction du projet AirTrack'
                                : 'Traduction of the AirTrack project'
                            }
                        </ListItem>
                    </UnorderedList>
                </Section>
                
                <Section delay = {0.4}>
                    <SectionTitle>07/02/2022</SectionTitle>
                    <UnorderedList>
                        <ListItem>
                            {toggleLang ? 'Ajout du projet' : 'Adding'} {' '}
                            <Link href = {'/Projets/AirTrack'} passHref>
                                <Text variant = "ProjetLink" d = "inline" cursor = "pointer">AirTrack</Text>
                            </Link>
                            {' '}{toggleLang ? '' : 'project'}
                        </ListItem>
                        <ListItem>{toggleLang ? 'Typo retravaillé' : 'Typo rework'}</ListItem>
                        <ListItem>{toggleLang ? 'Responsive retravaillé' : 'Responsive rework'}</ListItem>
                    </UnorderedList>
                </Section>
            </Container>
        </>
    );
};

export default News;
