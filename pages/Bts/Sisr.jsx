import React, { useContext, useState } from 'react';
import { Box, Button, Container } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { LinkBlank } from '../../Layout/NavLink';
import { TextContext } from '../../Hook/TextContext';
import BtnReturnPro from '../../components/BtnReturnPro';

const Slam = () => {
    
    const [first, setFirst] = useState(true);
    const [two, setTwo] = useState(true);
    const [three, setThree] = useState(true);
    const { BTSText } = useContext(TextContext);
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.5}>
                    <SectionTitle>À savoir</SectionTitle>
                    <ParaIndent>
                        L&apos;élève du BTS SIO option SISR acquiert les compétences de trois domaines d'activités dont deux
                        en commun avec le BTS SIO option {' '}
                        <LinkBlank href = {'./Slam'}>
                            SLAM
                        </LinkBlank>
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.6}>
                    <SectionTitle>Support et mise à disposition de services informatiques</SectionTitle>
                    <ParaIndent>
                        {first
                            ? BTSText[ 'SISR' ][ 0 ][ 'Para' ][ 'Short' ]
                            : BTSText[ 'SISR' ][ 0 ][ 'Para' ][ 'Long' ]
                        }
                    </ParaIndent>
                    <Button variant = "ButtonLike" onClick = {() => setFirst(!first)} pos = "absolute" right = {9}>
                        {first ? 'Afficher plus' : 'Afficher moins'}
                    </Button>
                </Section>
                
                <Section delay = {0.7}>
                    <SectionTitle>Cybersécurité des services informatiques</SectionTitle>
                    <ParaIndent>
                        {two
                            ? BTSText[ 'SISR' ][ 1 ][ 'Para' ][ 'Short' ]
                            : BTSText[ 'SISR' ][ 1 ][ 'Para' ][ 'Long' ]
                        }
                    </ParaIndent>
                    <Button variant = "ButtonLike" onClick = {() => setTwo(!two)} pos = "absolute" right = {9}>
                        {two ? 'Afficher plus' : 'Afficher moins'}
                    </Button>
                </Section>
                
                <Section delay = {0.8}>
                    <SectionTitle>Administration des systèmes et des réseaux</SectionTitle>
                    <ParaIndent>
                        {three
                            ? BTSText[ 'SISR' ][ 2 ][ 'Para' ][ 'Short' ]
                            : BTSText[ 'SISR' ][ 2 ][ 'Para' ][ 'Long' ]
                        }
                    </ParaIndent>
                    <Button variant = "ButtonLike" onClick = {() => setThree(!three)} pos = "absolute" right = {9}>
                        {three ? 'Afficher plus' : 'Afficher moins'}
                    </Button>
                </Section>
                
                <Section delay = {0.9}>
                    <Box mt = {20} />
                    <BtnReturnPro />
                </Section>
            </Container>
        </>
    );
};

export default Slam;
