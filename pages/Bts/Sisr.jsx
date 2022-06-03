import React from 'react';
import { Container } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { SectionTitle } from '../../Layout/CustomText';

const Sisr = () => {
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.5}>
                    <SectionTitle>BTS SIO SISR</SectionTitle>
                </Section>
            </Container>
        </>
    );
};

export default Sisr;
