import React from 'react';
import { SectionTitle } from '../../Layout/CustomText';
import Section from '../../Layout/Section';
import { Container } from '@chakra-ui/react';

const VeilleTech = () => {
    return (
        <>
            <Container variant='Main'>
                <Section delay={0.4}>
                    <SectionTitle>La cybersécurité</SectionTitle>
                </Section>
            </Container>
        </>
    );
};

export default VeilleTech;
