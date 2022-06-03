import React from 'react';
import { Container } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { SectionTitle } from '../../Layout/CustomText';

const Slam = () => {
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.5}>
                    <SectionTitle>BTS SIO SLAM</SectionTitle>
                </Section>
            </Container>
        </>
    );
};

export default Slam;
