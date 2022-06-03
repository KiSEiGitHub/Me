import React from 'react';
import { Container} from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ItalicText, Para, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { Linkk } from '../../Layout/NavLink';

const Bts = () => {
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.4}>
                    <SectionTitle>BTS SIO</SectionTitle>
                    <ParaIndent mb = {2}>
                        Le BTS <span style = {{ fontStyle : 'italic' }}>Service Informatique aux Organisation</span>
                        {' '}est un diplôme reconnu par l&apos;état de niveau Bac+2.
                    </ParaIndent>
                    <ParaIndent>
                        Le programme a évolué en fonction de la place et du rôle des TIC
                        <ItalicText>(Technologies d’Information Communication)</ItalicText>
                        et
                        propose deux spécialités bien distinctes : {' '}
                        <Linkk href = {'/Bts/Sisr'}>
                            le BTS SIO SISR
                        </Linkk>
                        {' '} et {' '}
                        <Linkk href = {'/Bts/Slam'}>
                            le BTS SIO SLAM.
                        </Linkk>
                    
                    </ParaIndent>
                </Section>
                <Section delay = {0.5}>
                    <SectionTitle>Veille technologique</SectionTitle>
                    <ParaIndent mb = {2}>
                        Qu&apos;est-ce qu&apos;une veille technologique ?
                    </ParaIndent>
                    <Para>
                        Elle consiste à s'informer de façon systématique sur les techniques les plus récentes et surtout
                        sur
                        leur mise à disposition commerciale.
                    </Para>
                </Section>
                <Section delay = {0.6}>
                    <SectionTitle>Veille Juridique</SectionTitle>
                </Section>
            </Container>
        </>
    );
};

export default Bts;
