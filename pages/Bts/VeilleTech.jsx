import React, { useContext } from 'react';
import { ParaIndent, SectionTitle } from '../../Layout/CustomText';
import Section from '../../Layout/Section';
import { Container } from '@chakra-ui/react';
import { TextContext } from '../../Hook/TextContext';

const VeilleTech = () => {
    
    const { BTSVeille } = useContext(TextContext);
    
    return (
        <>
            <Container variant = "Main">
                
                <Section delay = {0.4}>
                    <SectionTitle textAlign={'center'}>Qu&apos;est-ce que la cybersécurité ?</SectionTitle>
                    <ParaIndent>
                        {BTSVeille[ 'Techno' ][ 'Para' ]}
                    </ParaIndent>
                </Section>
            
            </Container>
            
            
            <Section delay = {0.5}>
                <iframe
                    src = "https://docs.google.com/presentation/d/e/2PACX-1vQ8OJzaKkPpXqvYRYBgT-PTAhmXrRqeBKZFC6S3f9Y1YLN-n00JeZbS8blqO8gmgQ/embed?start=false&amp;loop=false&amp;delayms=3000"
                    width = "100%" height = "740" allowFullScreen = "true"
                    style={{
                        margin: '0 auto',
                        maxWidth: '1250px',
                    }}
                >
                
                </iframe>
            </Section>
        </>
    );
};

export default VeilleTech;
