import React, {useContext} from 'react';
import {Box, Container, Tag} from "@chakra-ui/react";
import Section from "../../Layout/Section";
import {ExtLink, ParaIndent, SectionTitle} from "../../Layout/CustomText";
import {TextContext} from "../../Hook/TextContext";
import {LangContext} from "../../Hook/LangContext";

const Docs = () => {

    const {DataProject} = useContext(TextContext);
    const {toggleLang} = useContext(LangContext)

    return (
        <>
            <Container variant='Main'>
                <Section delay={0.3}>
                    <SectionTitle>Docs</SectionTitle>
                    <Tag mb={2}>2022-</Tag>
                    <Box mb={2}>
                        <Tag mr={2}>Platforme</Tag>
                        <span>PC / {toggleLang ? 'Téléphone' : 'Mobile'}</span>
                    </Box>
                    <Box mb={4}>
                        <Tag mr={2}>Stack</Tag>
                        <span>Next.js</span>
                    </Box>
                    <Box mb={4}>
                        <Tag mr={2}>Source</Tag>
                        <ExtLink href="https://github.com/KiSEiGitHub/Basic-prog-lang">
                            Github
                        </ExtLink>
                    </Box>
                    <Box>
                        <Tag mr={2}>{toggleLang ? 'Site' : 'Website'}</Tag>
                        <ExtLink href={'https://langguide.vercel.app/'}>
                            Docs
                        </ExtLink>
                    </Box>
                </Section>

                <Section delay={0.4}>
                    <SectionTitle>{toggleLang ? "Qu'est-ce que Docs ?" : 'What is Docs ?'}</SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject['Docs']['Description']['fr']
                            : DataProject['Docs']['Description']['en']
                        }
                    </ParaIndent>
                </Section>

                <Section delay={0.5}>
                    <SectionTitle>Puis-je contribuer ?</SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject['Docs']['Contribute']['fr']
                            : DataProject['Docs']['Contribute']['en']
                        } {' '}
                        <ExtLink href={"https://github.com/KiSEiGitHub/Basic-prog-lang/blob/master/README.md"}>
                            {toggleLang ? 'ici' : 'here'}
                        </ExtLink>
                    </ParaIndent>
                </Section>
            </Container>
        </>
    );
};

export default Docs;