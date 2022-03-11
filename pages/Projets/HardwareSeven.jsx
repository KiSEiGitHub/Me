import React, { useContext } from 'react';
import { Box, Container, ListItem, Tag, Text, UnorderedList, useColorMode } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { LangContext } from '../../Hook/LangContext';
import { TextContext } from '../../Hook/TextContext';
import BtnReturnPro from '../../components/BtnReturnPro';

const HardwareSeven = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { DataProject } = useContext(TextContext);
    const { colorMode } = useColorMode();
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.2}>
                    <SectionTitle>HardwareSeven</SectionTitle>
                    <Tag mb = {2}>2022</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>PC / Mobile</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>Prestashop</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Site</Tag>
                        <ExtLink href = "https://hardwareseven.fr/index.php">
                            HardwareSeven
                        </ExtLink>
                        <Text
                            d = "inline"
                            color = {colorMode === 'light' ? '#928c7b' : '#535355'}
                            fontStyle = "italic"
                            p = "0 5px"
                        >
                            en ligne jusqu&apos;a Mars 2023
                        </Text>
                    </Box>
                </Section>
                
                <Section delau = {0.3}>
                    <SectionTitle>Description</SectionTitle>
                    <ParaIndent>
                        HardwareSeven est un site d&apos;ecommerce utilisant le CDN
                        {' '}
                        <ExtLink href = {'https://www.prestashop.com/fr'}>
                            prestashop
                        </ExtLink>.
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.4}>
                    <SectionTitle>{toggleLang ? 'Tâches' : 'Tasks'}</SectionTitle>
                    <ParaIndent>
                        {DataProject[ 'HardwareSeven' ][ 'Tache' ][ 'fr' ]}
                        <UnorderedList>
                            <ListItem>Gestion des comptes pour les clients</ListItem>
                            <ListItem>Gestions des comptes administrateur</ListItem>
                            <ListItem>
                                Créer des catégories en fonction du thème choisi
                            </ListItem>
                            <ListItem>Ajouter des produits avec leur caractéristique</ListItem>
                            <ListItem>Possibilité aux clients de laisser des commentaires</ListItem>
                        </UnorderedList>
                    </ParaIndent>
                </Section>
                <Section delay = {0.5}>
                    <BtnReturnPro />
                </Section>
            </Container>
        </>
    );
};

export default HardwareSeven;