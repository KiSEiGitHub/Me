import React, { useContext } from 'react';
import Link from 'next/link';
import { Box, Container, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { LangContext } from '../../Hook/LangContext';
import { TextContext } from '../../Hook/TextContext';

const Portfolio = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { DataProject } = useContext(TextContext);
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.2}>
                    <SectionTitle>Portfolio</SectionTitle>
                    <Tag mb = {2}>2021-</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>PC / {toggleLang ? 'Téléphone' : 'Mobile'}</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>Next.js</span>
                    </Box>
                    <Box>
                        <Tag mr = {2}>Source</Tag>
                        <ExtLink href = "https://github.com/KiSEiGitHub/Me">
                            Github
                        </ExtLink>
                    </Box>
                </Section>
                
                <Section delay = {0.3}>
                    <SectionTitle>
                        {toggleLang
                            ? 'Pourquoi Next et pas React'
                            : 'Why Next and not React'
                        }
                    </SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject[ 'Portfolio' ][ 'Description' ][ 'FR' ]
                            : DataProject[ 'Portfolio' ][ 'Description' ][ 'EN' ]
                        }
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.4}>
                    <SectionTitle>
                        {toggleLang ? 'Librairies utilisées' : 'Used packages'}
                    </SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject[ 'Portfolio' ][ 'Librairies' ][ 'FR' ]
                            : DataProject[ 'Portfolio' ][ 'Librairies' ][ 'EN' ]
                        }
                    </ParaIndent>
                    <UnorderedList mt = {2}>
                        <ListItem>
                            <ExtLink href = {'https://chakra-ui.com/'}>
                                Chakra UI
                            </ExtLink>
                        </ListItem>
                        <ListItem>
                            <ExtLink href = {'https://www.framer.com/motion/'}>
                                Framer-motion
                            </ExtLink>
                        </ListItem>
                    </UnorderedList>
                    <Text variant = "Para" mt = {2}>
                        {toggleLang
                            ? DataProject[ 'Portfolio' ][ 'Librairies' ][ 'FR2' ]
                            : DataProject[ 'Portfolio' ][ 'Librairies' ][ 'EN2' ]
                        }
                    </Text>
                </Section>
                
                <Section delay={0.5}>
                    <SectionTitle>{toggleLang ? 'Furtur mise à jour' : 'Future update'}</SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject[ 'Portfolio' ][ 'Update' ][ 'FR' ]
                            : DataProject[ 'Portfolio' ][ 'Update' ][ 'EN' ]
                        }
                    </ParaIndent>
                    <Link href = {'../News'} passHref>
                        <Text variant = "ProjetLink" cursor = "pointer">
                            {toggleLang ? 'Nouveautés' : 'News'}
                        </Text>
                    </Link>
                </Section>
            </Container>
        </>
    );
};

export default Portfolio;
