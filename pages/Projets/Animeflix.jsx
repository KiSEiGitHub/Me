import React, { useContext } from 'react';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import Section from '../../Layout/Section';
import { Box, Container, Tag } from '@chakra-ui/react';
import { LangContext } from '../../Hook/LangContext';
import BtnReturnPro from '../../components/BtnReturnPro';

const Animeflix = () => {
    
    const { toggleLang } = useContext(LangContext);
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.3}>
                    <SectionTitle>Animeflix</SectionTitle>
                    <Tag mb = {2}>2022</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>PC</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>Next.js</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Source</Tag>
                        <ExtLink href = "https://github.com/KiSEiGitHub/Animeflix">
                            Github
                        </ExtLink>
                    </Box>
                    <Box>
                        <Tag mr = {2}>{toggleLang ? 'Site' : 'Website'}</Tag>
                        <ExtLink href = "https://theanimeflix.vercel.app/">
                            Animeflix
                        </ExtLink>
                    </Box>
                </Section>
                
                <Section delay = {0.4}>
                    <SectionTitle>Histoire de...</SectionTitle>
                    <ParaIndent>
                        Développer mes compétences front-end en Next.js. J&apos;ai décidé de cloner netflix mais pour
                        les animés japonais. C&apos;est ultra connu et déjà fait mais je voulais essayer de le faire
                        avec ce que j&apos;apprend au fur et à mesure du temps.
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.5}>
                    <SectionTitle>Oui</SectionTitle>
                    <ParaIndent>
                        Juste, pour rappel. Il n&apos;y a aucun épisode / film sur le "site".
                        Vous savez pourquoi. <br />
                        Je me suis juste contenté de mettre des photos trouver sur internet ainsi que les descriptions
                        déjà présente sur {' '}
                        <ExtLink href = {'https://www.netflix.com/'}>
                            Netflix
                        </ExtLink>.
                        Le logo a aussi été trouver directement sur internet.
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.5}>
                    <SectionTitle>Zzz</SectionTitle>
                    <ParaIndent>
                        Je voulais vraiment appeler le "site", "Animeflix", j&apos;ai trouvé que c&apos;était un bon
                        nom, mais c&apos;était déjà pris. Vue que ce projet c&apos;est pas vraiment du sérieux avec un
                        réel impact, j&apos;ai décidé de laisser le nom. Mais le site original que j&apos;ai trouvé est {' '}
                        <ExtLink href='https://anime-flix.net/'>
                            Animeflix (le vrai)
                        </ExtLink>
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.6}>
                    <BtnReturnPro />
                </Section>
            </Container>
        </>
    );
};

export default Animeflix;
