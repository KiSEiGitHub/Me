import React, {useContext} from 'react';
import {Box, Container, ListItem, Tag, UnorderedList} from "@chakra-ui/react";
import Section from "../../Layout/Section";
import {ExtLink, ParaIndent, SectionTitle} from "../../Layout/CustomText";
import {LangContext} from "../../Hook/LangContext";
import {TextContext} from "../../Hook/TextContext";

const Snake = () => {

    const {toggleLang} = useContext(LangContext)
    const { DataProject } = useContext(TextContext);

    return (
        <>
            <Container variant='Main'>
                <Section delay={0.2}>
                    <SectionTitle>Snake</SectionTitle>
                    <Tag mb = {2}>2022</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>Windows</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>C</span>
                    </Box>
                    <Box>
                        <Tag mr = {2}>Source</Tag>
                        <ExtLink href = "https://github.com/KiSEiGitHub/Snake">
                            Github
                        </ExtLink>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <SectionTitle>Description</SectionTitle>
                    <ParaIndent>
                        {DataProject['Snake']['DescriptionProjet']['fr']}
                        <UnorderedList mt={2} mb={2}>
                            <ListItem>Snake</ListItem>
                            <ListItem>Bataille navale</ListItem>
                            <ListItem>Echec</ListItem>
                        </UnorderedList>
                        {DataProject['Snake']['DescriptionProjet']['fr2']}
                        {' '}
                        <ExtLink href={'https://fr.wikipedia.org/wiki/Snake_(genre_de_jeu_vid%C3%A9o)'}>
                            serpent
                        </ExtLink>
                    </ParaIndent>
                </Section>

                <Section delay={0.4}>
                    <SectionTitle>Cahier des charges</SectionTitle>
                    <UnorderedList>
                        <ListItem>Génération se fait par trois pommes à la fois</ListItem>
                        <ListItem>Le serpent doit manger les trois pommes avant de grandir</ListItem>
                        <ListItem>On peut sauvegarder et reprendre une partie</ListItem>
                    </UnorderedList>
                </Section>

                <Section delay={0.5}>
                    <SectionTitle>Le jeu</SectionTitle>
                    <p>mettre des images du jeu</p>
                </Section>
            </Container>
        </>
    );
};

export default Snake;