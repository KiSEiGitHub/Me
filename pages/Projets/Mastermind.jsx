import React, { useContext } from 'react';
import { Box, Container, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ExtLink, Para, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { LangContext } from '../../Hook/LangContext';

const Mastermind = () => {
    
    const { toggleLang } = useContext(LangContext);
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.2}>
                    <SectionTitle>Mastermind</SectionTitle>
                    <Tag mb = {2}>2022</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>PC</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>Python</span>
                    </Box>
                    <Box>
                        <Tag mr = {2}>Source</Tag>
                        <ExtLink href = "https://github.com/KiSEiGitHub/Mastermind">
                            Github
                        </ExtLink>
                    </Box>
                </Section>
                <Section delay = {0.3}>
                    <SectionTitle>Adaptation du jeu en Python</SectionTitle>
                    <ParaIndent>
                        On crée aléatoirement un code de 5 chiffres compris entre 1 et 6 inclus et tous différents.
                    </ParaIndent>
                    <Para>
                        Le joueur a 12 tentatives maximum pour trouver le code : à chaque tentative, il propose un code
                        à 5 chiffres et on lui indique :
                    </Para>
                    <UnorderedList>
                        <ListItem>
                            Combien de chiffres de sa proposition <span
                            style = {{ color : 'red' }}>sont bien placés</span> (sans
                            lui dire lesquels)
                        </ListItem>
                        <ListItem>
                            Combien de chiffres de sa proposition <span
                            style = {{ color : 'red' }}>sont mal placés</span> (sans
                            lui dire lesquels)
                        </ListItem>
                        <ListItem>
                            Combien de chiffres de sa propositions ne <span style = {{ color : 'red' }}>sont pas présents</span> dans
                            le code (sans lui dire lesquels)
                        </ListItem>
                    </UnorderedList>
                    <Text mt = {5}>
                        La partie s’arrête quand le joueur a retrouvé le bon code ou quand il a épuisé ses 12 tentatives
                    </Text>
                </Section>
            </Container>
        </>
    );
};

export default Mastermind;
